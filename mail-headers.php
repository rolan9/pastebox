<?php
    $text = 'Hallo Welt';
    $html = 'Hallo <b>Welt</b>';
    /**
     * Test's about Mail Headers - multicontent mailing & from header
     * Wolf Wortmann <wolf.wolfgang-m.de><wolf@wolfgang-m.de>
     *
     * 
     */

    //Set a boundary for the different parts
    $M['bounding'] = uniqid(time());
    //Set recipient
    $M['recipient'] = 'my-email@example.com';
    //Set subject
    $M['subject'] = 'PHP Mailing - header test\'s';
    //Set reply-to
    $M['reply'] = 'you@'.$_SERVER['SERVER_NAME'];
    //Set from
    $M['from'] = 'admin@'.$_SERVER['SERVER_NAME'];


// !!!  DO NOT CHANGE ANYTHING BETWEEN THIS LINE  !!!
// ----------------------------------------------------------------------------------

    //Set TXT content
    $M['TXT'] = giveTXTpart($text);
    //Set HTML content
    $M['HTML'] = giveHTMLpart($html);

    //Set Headers
    $M['h'] .= "MIME-Version: 1.0\r\n";
    $M['h'] .= "From: ".$M['from']."\r\n";
    $M['h'] .= "To: ".$M['recipient']."\r\n";
    $M['h'] .= "Content-Type: multipart/alternative;boundary=" . $M['bounding'] . "\r\n";

    //Test MIME encoded msg
    $M['m'] .= "MIME encoded";
    $M['m'] .= "\r\n\r\n--" . $boundary . "\r\n";

    //Set Plain TEXT msg
    $M['m'] .= $M['TXT'];
    //Set HTML msg
    $M['m'] .= $M['HTML'];


    //exec mail()
    mail($M['recipient'],$M['subject'],$M['m'],$M['h']);



    function giveTXTpart($txt){
        global $M;
        $m .= "Content-type: text/plain;charset=utf-8\r\n\r\n";
        $m .= $txt;
        $m .= "\r\n\r\n--" . $M['bounding'] . "--";

        return $m;
    }
    function giveHTMLpart($html){
        global $M;
        $m .= "Content-type: text/html;charset=utf-8\r\n\r\n";
        $m .= $html;
        $m .= "\r\n\r\n--" . $M['bounding'] . "--";

        return $m;
    }
?>
