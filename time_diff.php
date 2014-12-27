<?php
/**
 * function time_diff($start, $end)
 * @param string $start = Starttime-Timestamp hh:mm (h=hour, m=minute)
 * @param string $end = Endtime-Timestamp hh:mm (h=hour, m=minute)
 *
 * @return array [
 *   'o-t'  => Orginal Timestamp hh:mm (h=hour, m=minute),
 *   't'    => Timestamp after rounding hh:mm (h=hour, m=minute),
 *   'o-h'  => Orginal Hours,
 *   'h'    => Hours after rounding,
 *   'o-m'  => Orginal Minutes, 
 *   'm'    => Minutes after rounding
 *  ] Informations over the time difference
 *
 * @uses get_next_XV() to round Minutes in XV-Minute (15-Minute) steps
 *
 * @author, @copyright Feel free to use, modify and redistribute this code. But please keep this copyright notice. (c) Copyright 2014 Wolf Wortmann <http://wolf.wolfgang-m.de> / <wolf@wolfgang-m.de>
 */
function time_diff($start, $end=false){
    $end = $end ? $end : date("H:i"); //Wenn $end leer, benutze aktuelle Zeit

    $start_d = new DateTime("0000-00-00 ".$start);//Neuen START timestamp mit angegebenen Stunden
    $end_d = new DateTime("0000-00-00 ".$end);//Neuen END timestamp mit angegebenen Stunden
    if($start_d > $end_d){//Wenn Startzeit höher als Endzeit
        trigger_error('Starttime is greater than Endtime!');//Fehlermeldung ausgeben
        //return false;//False zurückgeben
    }
    $diff=$end_d->diff($start_d);//Differenz zweishcen beiden Zeiten ermitteln

    $std = (int)$diff->h;//Stunden speichern
    $min = (int)$diff->i;//Minuten speichern
    
    $XV_min = get_next_XV($min);//Minuten gerundet

    $XV_std = $XV_min == 00 ? ($std + 1) : $std;//wenn auf ganze Stunde aufgerundet wurde, Eine stunde dazu zählen

    //Rückgabe zusammenbauen
    $r['o-t'] = $std.':'.$min;//Orginal Timestamp
    $r['t'] = $XV_std.':'.$XV_min;//Gerundeter Timestamp
    $r['o-h'] = $std;//Orginal Stunden
    $r['h'] = $XV_std;//'Gerundete' Stunden
    $r['o-m'] = $min;//Orginal Minuten
    $r['m'] = $XV_min;//Gerundete Minuten

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
?>
