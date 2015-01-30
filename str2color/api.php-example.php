<?php
    error_reporting(E_ALL);//Alle Fehler anzeigen

    //Festlegen der Zeichenkette für spätere Parameterübergabe
    $str = 'Hallo Welt!';

    //Aufrufen der API mit übergabe von Parametern
    $json = api_str2color([
        'string' => urlencode($str),//Die Zeichenkette
        'html_colorNames' => true,//HTML Farbnamen wie 'blue','red'.. werden jeweils auch als Blau bzw. Rot ausgegeben 
        'hex_colorNames' => true,//HEX Farbnamen wie '0000FF','FF0000'.. werden jeweils auch als Blau bzw. Rot ausgegeben
    ]);
    //Das Ergebniss in ein Array umwandeln
    $result_arr = json_decode($json,true);

    //Mit dem Ergebniss-Array arbeiten
    echo '
    <div style="
        color: #'.$result_arr['text_color'].';
        background: rgb('.$result_arr['rgb_string'].');
        padding: 40px;
        "
    >
    '.$result_arr['rgb_string'].'
    </div>
    ';

    // API_FUNCTION - DO NOT EDIT
    function api_str2color($options){
        $tmp = false;

        $url = 'http://color.elementcode.de/api.str2color.php?data='.json_encode($options);
        $ch = curl_init($url);
        if ($ch) {
            ob_start();
            $tmp = curl_exec($ch);
            curl_close($ch);
            $tmp = ob_get_contents();
            ob_end_clean();
        }

        return $tmp;
    }// API_FUNCTION()
?>
