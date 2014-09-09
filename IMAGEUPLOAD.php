<?php
    /**
     * Image Uploadscript by Wolf Wortmann
     * 
     * @author (c) Copyright 2014 Wolf Wortmann <wolf.wolfgang-m.de> / <wolf@wolfgang-m.de>
     * @copyright Feel free to use, modify and redistribute this code. But please keep this copyright notice. (c) Copyright 2014 Wolf Wortmann <wolf.wolfgang-m.de> / <wolf@wolfgang-m.de>
     */

    //Needs som Variables to run... look at the end of File
    
    require_once 'conf/sys_conf.php';
    if(file_exists('conf/local_conf.php')){
        include_once 'conf/local_conf.php';
    }
    
    //Wenn Uploads und Post gesetzt und die daten wirklich über Post reinkommen
    if($imgT['up']['user_up'] && isset($_POST) and $_SERVER['REQUEST_METHOD'] == "POST"){
        uploadLog("post is set", true);
        //Wenn eine Datei übergeben wurde
        if(!empty($_FILES['imgUpload']['name'][0])){
            uploadLog("get files", true);

            //Das $_FILES array umwandeln
            $imgT['files'] = reArrayFiles($_FILES['imgUpload']);
            
            if ($imgT['info2db']) {
                $imgT['db']['conect'] = new PDO('mysql:host='.$imgT['db']['server'].';dbname='.$imgT['db']['database'], $imgT['db']['user'], $imgT['db']['password'],array(PDO::ATTR_PERSISTENT => true));
                $imgT['db']['conect']->exec("
                    CREATE TABLE IF NOT EXISTS imgData(
                        `id` INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
                        `name` VARCHAR(100) NOT NULL,
                        `right` VARCHAR(50) NOT NULL,
                        `cross` INT(1) NOT NULL,
                        `username` VARCHAR(255) NOT NULL
                        );
                ");
            }

            $i = 0;
            //Für jede Datei
            foreach ($imgT['files'] as $file) {
                uploadLog('upload image',true);
                //Datei hochladen
                uploadFile($i);
                $i++;
            }
            //Bestätigung ausgeben
            if (isset($imgT['uploaded']) && !empty($imgT['uploaded'])) {
                echo "<h1>Erfolgreich hochgeladene Bilder</h1>";
                foreach ($imgT['uploaded'] as $value) {
                    echo "<img src='".$imgT['tumbDir'].$value."'>";
                }
            }
            else{
                #header('location: index.php?key=images');
                echo "<h1>Es wurde kein Bild hochgeladen</h1>";
            }
        }
        else{
            uploadLog("get files", false);
            #header('location: index.php?key=images');
        }
    }
    else{
        uploadLog("post is set", false);
        #header('location: index.php?key=images');
    }

    ###################################################################################################################
    ###################################################################################################################
    function uploadFile($i){
        global  $imgT;

        //Quelle
        $tmp_bild = $imgT['files'][$i]["tmp_name"];

        /* Wenn Datei kleiner als im skript angegeben und
         * Wenn kein Fehler an der Datei(übertragung) von PHP festgestellt wurde
         */
        if (/*$imgT['files'][$i]["size"] < $imgT['max_file_size'] &&*/
            $imgT['files'][$i]["error"] < 1
        ) {
            uploadLog("file is smaller than MFS and whitout errors", true, $imgT['files'][$i]['name']." --size: ".$imgT['files'][$i]["size"]." --err:".$imgT['files'][$i]["error"]);

            $finfo = finfo_open(FILEINFO_MIME_TYPE); //return mime type ala mimetype extension
            //Wenn bild ein image mime type hat
            if (preg_match('@image/@', finfo_file($finfo, $tmp_bild)) &&
                preg_match('@image/@',$imgT['files'][$i]["type"])
            ) {
                uploadLog("file is image", true,$imgT['files'][$i]['name']);

                /* Name des Bildes setzt sich aus:
                 * a) Aktuellem Timestamp
                 * b) Orginal Name ohne Dateiendungen
                 * c) Temporären PHP Namen
                 * Zusammen
                 */
                $new_name = date("Y-m-d_H-i-s").
                            '_'.
                            basename(preg_replace('@\..+@', '', $imgT['files'][$i]["name"])).
                            '_'.
                            str_replace("/tmp/", "", $imgT['files'][$i]["tmp_name"])
                ;   

                //Das Orginal laden
                if($images_orig = imagecreatefromstring( file_get_contents($tmp_bild) )){
                    uploadLog("orginal image loadet", true,$imgT['files'][$i]['name']);
                    
                    if ($imgT['water_marking'] &&
                        file_exists($imgT['watermark_img']) &&
                        preg_match('@image/@', finfo_file($finfo, $imgT['watermark_img']))
                    ) {
                        uploadLog("watermark image", true,$imgT['files'][$i]['name']);
                        $images_orig = watermark_image($images_orig, $imgT['watermark_img']);
                    }

                    //Das Bild Speichern
                    if(imagepng($images_orig, $imgT['origDir'].$new_name.'.png')){
                        uploadLog("orginal image saved", true,$imgT['files'][$i]['name']);
                        $imgT['uploaded'][] = $new_name.'.png';
                    }
                    else{
                        uploadLog("orginal image saved", false,$imgT['files'][$i]['name']);
                        
                    }

                    //THUMBNAILS
                    /*
                     * #############    ##      ##
                     *      ##          ##      ##
                     *      ##          ##      ##
                     *      ##          ##      ##
                     *      ##          ##      ##
                     *      ##          ##      ##
                     *      ##           ########
                     */

                    //wenn Thumbnails erzeugt werden sollen
                    if($imgT['thumbs']){
                        uploadLog("create Thumbnail...", true, $imgT['files'][$i]['name']);

                        //Höhe/Breite ermitteln
                        $size = getimagesize($tmp_bild);
                        //Breite bzw. Höhe speichern
                        $width_orig = $size[0];
                        $height_orig = $size[1];
                        unset($size);
                        //Neue höhe bzw Breite setzen
                        $height = $imgT['max_thumb_size']+1;
                        $width = $imgT['max_thumb_size'];

                        //Solange Das bild größer als $max's
                        while($height > $imgT['max_thumb_size']){
                            //Kleiner rechnen
                            $height = round($width*$height_orig/$width_orig); 
                            $width = ($height > $imgT['max_thumb_size'])?--$width:$width;
                        }
                        unset($width_orig,$height_orig);

                        //Orginal X/Y maß
                        $photoX = imagesx($images_orig);
                        $photoY = imagesy($images_orig);
                        //Neues Bild erstellen mit neuer Breite/Höhe
                        $images_fin  = imagecreatetruecolor($width,$height);
                        imagesavealpha($images_fin,true);
                        $trans_colour   = imagecolorallocatealpha($images_fin,0,0,0,127);
                        imagefill($images_fin,0,0,$trans_colour);
                        unset($trans_colour);
                        //Bild Kopieren
                        ImageCopyResampled($images_fin,$images_orig,0,0,0,0,$width+1,$height+1,$photoX,$photoY);
                        #unset($photoX,$photoY,$width,$height);

                        //Bild als png peichern
                        if(imagepng($images_fin,$imgT['tumbDir'].$new_name.'.png')){
                            uploadLog("thumbnail saved", true,$imgT['files'][$i]['name']);
                        }
                        else{
                            uploadLog("thumbnail saved", false,$imgT['files'][$i]['name']);
                        }

                        //Aufräumen
                        ImageDestroy($images_orig);
                        ImageDestroy($images_fin);
                    }//if thumbs

                    /*
                     * #######    #######
                     * ##    ##   ##    ##
                     * ##    ##   ##    ##
                     * ##    ##   #######
                     * ##    ##   ##    ##
                     * ##    ##   ##    ##
                     * #######    #######
                     */
                    if ($imgT['info2db']) {
                        $quer = 0;
                        //Wenn das Bild querformat hat und breiter als 700px ist
                        if ($photoX > $photoY && $photoX > 700) {
                            $quer = 1;
                        }
                        /* In die Datenbank schreiben
                         * a) Den namen des Bildes
                         * b) Den namen des Rechteinhabers
                         * c) Ob das bild Quer(1)-oder Hochformat(0) hat
                         */
                        $SQL['img_info']['query'] = "INSERT INTO `imgData` (`name`, `right`, `cross`,`username`) VALUES (:name, :right, :cross, :username);";
                        $SQL['img_info']['stmt'] = $imgT['db']['conect']->prepare($SQL['img_info']['query']);
                        if(!$SQL['img_info']['stmt']->execute(
                                array(
                                    ':name' => $new_name.'.png',
                                    ':right' => trim($_POST['copyright']),
                                    ':cross' => $quer,
                                    ':username' => trim($_SESSION['username'])
                                )
                            )
                        ){
                            #sql fehler
                        }
                    }
                }//orginal Bild laden
                else{
                    uploadLog("orginal image loadet", false,$imgT['files'][$i]['name']);
                }
            }
            else{
                uploadLog("file is image", false, $imgT['files'][$i]['name']);
            }
            finfo_close($finfo);
        }//php file error < 1
        else{
            uploadLog("file is smaller than MFS and whitout errors", false,$imgT['files'][$i]['name']." --size: ".$imgT['files'][$i]["size"]."--err:".$imgT['files'][$i]["error"]);
        }
    }
    /**
     * Quelle/ (c) http://www.php.net/manual/de/features.file-upload.multiple.php#53240 
     * @param   $file_post    orginal $_FILE array or some arr whit structure like the $_FILE arry / $_FILE['name'][0]
     *
     * @return  $$file_ary    a new arr whit follow. struct. / $ARR[0]['name']  
     */
    function reArrayFiles(&$file_post) {

        $file_ary = array();
        $file_count = count($file_post['name']);
        $file_keys = array_keys($file_post);

        for ($i=0; $i<$file_count; $i++) {
            foreach ($file_keys as $key) {
                $file_ary[$i][$key] = $file_post[$key][$i];
            }
        }

        return $file_ary;
    }
    /**
     * Quelle/ (c) http://php.net/manual/de/image.examples-watermark.php 
     * @param $im       orginal image
     * @param $stamp    watermark image
     *
     * @return returns watermarked $im or false
     */
    function watermark_image($im, $stamp){

        $stamp = imagecreatefromstring(file_get_contents($stamp));

        // Ränder für Wasserzeichen festlegen, dessen Höhe und Breite bestimmen 
        $marge_right = 10;
        $marge_bottom = 10;
        $sx = imagesx($stamp);
        $sy = imagesy($stamp);
         
        // Wasserzeichen auf das Foto kopieren, die Position berechnet sich dabei aus
        // den Rändern und der Bildbreite
        imagecopy(
            $im,// Bild
            $stamp,// Wasserzeichen
            imagesx($im) - $sx - $marge_right,//Bildbreite - Wasserzeichenbreite - Abstandrechts
            imagesy($im) - $sy - $marge_bottom,//Bildhöhe - Wasserzeichenhöhe - Abstandunten
            0,
            0,
            imagesx($stamp),
            imagesy($stamp)
        );

        // zurückgeben und aufräumen
        #$images_orig = imagecreatefromstring($im);
        return $im;
        imagedestroy($im);
    }

    function uploadLog($name,$value,$FileName = 'leer'){
        
        echo "<br>log@ $name";

        if ($value) {echo " .. done";}
        else{echo " .. <span style='color:red'>failed</span>";}

        if ($FileName != "leer") {echo " ( $FileName )";}
        echo "<br>";
        
    }
?>
<?php
    /**
     * CONFIG file for Image Uploadscript by Wolf Wortmann
     * 
     * @author (c) Copyright 2014 Wolf Wortmann <wolf.wolfgang-m.de> / <wolf@wolfgang-m.de>
     * @copyright Feel free to use, modify and redistribute this code. But please keep this copyright notice. (c) Copyright 2014 Wolf Wortmann <wolf.wolfgang-m.de> / <wolf@wolfgang-m.de>
     *
     * !!! NEVER CHANGE ANYTHING !!!! 
     * pls use the local_conf.php to config individualy!! 
     */
//GENERAL
    error_reporting(0);                               //Error reporting level         (string/int)    look >http://davidwalsh.name/php-error_reporting-error-reporting< for values 
    ini_set('display_errors', '1');
    date_default_timezone_set("UTC");                 //Timezone default set          (string)        look >https://php.net/manual/de/timezones.php< for values

    $imgT['origDir']          =   'images/';          //Orginals direction            (string)
    $imgT['tumbDir']          =   'thumbs/';          //Thumbnails direction          (string)
    $imgT['thumbs']           =   true;               //Thumbnails creation           (bool)
    $imgT['water_marking']    =   true;               //Picture watermarking          (bool)
    $imgT['info2db']          =   true;               //Write pic infos in DB         (bool)
    $imgT['up']['user_up']    =   true;               //User Picture Upload           (bool)
    $imgT['users']            =   true;               //User Login and registry       (bool)

//UPLOAD
    $imgT['up']['use_pw']     =   true;               //Use Password(s) for Upload    (bool)
    $imgT['up']['password']   =   array();            //Password for upl. Img's       ( array("string/int") )

//DATABASE
    $imgT['db']['database']   =   'database name';    //Name of Database              (string/int)
    $imgT['db']['server']     =   'server url';       //Url of database               (string/int)
    $imgT['db']['user']       =   'user name';        //Username of database user     (string/int)
    $imgT['db']['password']   =   'password';         //Password for username         (string/int)

//SOMETHING
    $imgT['max_thumb_size']   =   500;                //Max widtht/height in px       (int)
    $imgT['max_file_size']    =   ini_get('upload_max_filesize');//max filesize       (int)
    $imgT['watermark_img']    =   $_FILES['watermark']['tmp_name'][0];//Watermark dir (string)        Coud be a static file Path or > $_FILES['watermark']['tmp_name'][0] < for the watermark input arr.
?>
