<?php
/**
 * function time_diff($start, $end)
 * @param string $start = Starttime-Timestamp hh:mm[:ss] (h=hour, m=minute, s=second)
 * @param string $end = Endtime-Timestamp hh:mm[:ss] (h=hour, m=minute, s=second)
 *
 * @return array [
 *   'o-t'  => string Orginal Timestamp        hh:mm (h=hour, m=minute),
 *   't'    => string Timestamp after rounding hh:mm (h=hour, m=minute),
 *   'o-h'  => string Orginal Hours            hh (h=hour),
 *   'h'    => string Hours after rounding     hh (h=hour),
 *   'o-m'  => string Orginal Minutes          mm (m=minute),
 *   'm'    => string Minutes after rounding   mm (m=minute),
 *  ] Informations over the time difference | String because: ( (int) 0x ) converts 0x to x ; ( 04 -> 4)
 *
 * @uses get_next_XV() to round Minutes in XV-Minute (15-Minute) steps
 *
 * @author, @copyright Feel free to use, modify and redistribute this code. But please keep this copyright notice. (c) Copyright 2014 Wolf Wortmann <http://wolf.wolfgang-m.de> / <wolf@wolfgang-m.de>
 */
function time_diff($start, $end=false){
    if(version_compare(phpversion(), '5.4.0', '<')){
        trigger_error('PHP Version 5.4 is requiered!',E_USER_WARNING);//Fehlermeldung ausgeben
        return false;//False zurückgeben
    }
    $end = $end ? $end : date("H:i"); //Wenn $end leer, benutze aktuelle Zeit

    $start_d = new DateTime("0000-00-00 ".$start);//Neuen START-Timestamp mit angegebenen Stunden:Minuten[:Sekunden]
    $end_d = new DateTime("0000-00-00 ".$end);//Neuen END-Timestamp mit angegebenen Stunden:Minuten[:Sekunden]

    if($start_d > $end_d){//Wenn Startzeit höher als Endzeit
        trigger_error('Starttime is greater than Endtime!');//Fehlermeldung ausgeben
        return false;//False zurückgeben
    }

    $diff=$end_d->diff($start_d);//Differenz zwischen beiden Zeiten ermitteln

    $std = $diff->h;//Stunden speichern
    $min = $diff->i;//Minuten speichern
    
    $XV_min = get_next_XV($min);//Minuten gerundet

    $XV_std = $XV_min == '00' ? ($std + 1) : $std;//wenn auf ganze Stunde aufgerundet wurde, Eine stunde dazu zählen

    foreach (['std','min','XV_std','XV_min'] as $varname) {//Alle Zeitangaben mit Nullern vorne auffüllen
        $$varname = str_pad($$varname, 2, '0', STR_PAD_LEFT);
    }
    
    //Rückgabe zusammenbauen
    $r['o-t']   = $std.':'.$min;        //Orginal Timestamp
    $r['t']     = $XV_std.':'.$XV_min;  //Gerundeter Timestamp
    $r['o-h']   = $std;                 //Orginal Stunden
    $r['h']     = $XV_std;              //'Gerundete' Stunden
    $r['o-m']   = $min;                 //Orginal Minuten
    $r['m']     = $XV_min;              //Gerundete Minuten

    return $r;
}//hour_diff()
function get_next_XV($m){
    /* Habe das mal in ne eigene Funktion ausgelagert um eine
     * spätere Vereinfachung zu vereinfachen.. Ist gerade 
     * etwas umständlich gelöst.
     */
    switch ($m) {
        case ($m < 16)://Wenn weniger als 16 Minuten
            $x = 15;
            break;
        case ($m < 31)://Wenn weniger als 31 Minuten
            $x = 30;
            break;
        case ($m < 46)://Wenn weniger als 46 Minuten
            $x = 45;
            break;
        default://Wenn sonnst nix zutrifft ( mehr als 45 Minuten )
            $x = 00;
            break;
    }
    return $x;
}//get_next_XV()
