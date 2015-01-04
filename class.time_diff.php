<?php
/**
 * @author, @copyright Feel free to use, modify and redistribute this code. But please keep this copyright notice. (c) Copyright 2015 Wolf Wortmann <http://wolf.wolfgang-m.de> / <wolf@wolfgang-m.de>
 *
 * @version 2.4
 *
 * class time_diff($start, $end)
 *     Calculates Timedifference between two Timestamps
 *
 * @param string $start = Starttime-Timestamp [Y-m-d ]H:i[:s]
 * @param string $end = Endtime-Timestamp [Y-m-d ]H:i[:s]
 *
 * @return object time_diff[
 *      [s]     Starttime Timestamp 'Y-m-d H:i:s',
 *      [o_s]   Starttime Timstamp '[Y-m-d ]H:i[:s]' (like input),
 *      [e]     Endtime Timestamp 'Y-m-d H:i:s',
 *      [o_e]   Endtime Timestamp '[Y-m-d ]H:i[:s]' (like input),
 *      [t]     Difference Timestamp, rounded 'H:i',
 *      [o_t]   Difference Timestamp 'H:i',
 *      [h]     Difference Hours, rounded 'H',
 *      [o_h]   Difference Hours 'H',
 *      [m]     Difference Minutes, rounded 'i',
 *      [o_m]   Difference Minutes 'i',
 *      [error] If somthing failed, it turns to true,
 * ] All Data
 *
 * @link Timestamp format keys <http://php.net/manual/de/function.date.php>
 */
class time_diff{
    //public $s;
        private $start;//Starttime Timestamp 'Y-m-d H:i:s'
    //public $o_s;
        private $org_start;//Starttime Timstamp '[Y-m-d ]H:i[:s]' (like input)

    //public $e;
        private $end;//Endtime Timestamp 'Y-m-d H:i:s'
    //public $o_e;
        private $org_end;//Endtime Timestamp '[Y-m-d ]H:i[:s]' (like input)

    //public $t;
        private $timestamp;//Difference Timestamp, rounded 'H:i'
    //public $o_t;
        private $org_timestamp;//Difference Timestamp 'H:i'

    //public $h;
        private $hours;//Difference Hours, rounded 'H'
    //public $o_h;
        private $org_hours;//Difference Hours 'H'

    //public $m;
        private $minutes;//Difference Minutes, rounded 'i'
    //public $o_m;
        private $org_minutes;//Difference Minutes 'i'

    public $error = false;//If somthing failed, it turns to true

    function __construct($start, $end=false){
        $this->org_start = $start; $this->org_end = $end ? $end : date('Y-m-d H:i:s');

        $this->test_before_init();//Functions before init
        try {
            $this->init();//Init -> calculate Timedifference
        }
        catch (Exception $e) {
            echo 'Error: '.$e->getMessage()."\n";
            $this->error = true;
            $this->ret();
            return false;
        }
        $this->ret();//Make Data public
    }
    private function test_before_init(){
        //changed in v2.4 - needed version from 5.4.0 to 5.2.0
        if(version_compare(phpversion(), '5.3.0', '<')){
            trigger_error("PHP Version 5.3 is requiered!",E_USER_ERROR);
        }
    }
    private function init(){
        $this->start = new DateTime($this->org_start);
        $this->end = new DateTime($this->org_end);

        if($this->start > $this->end){//Wenn Startdatum älter als Enddatum
            throw new Exception('Starttime is greater than Endtime!');
        }

        $diff = $this->end->diff($this->start);//Differenz zwischen beiden Zeiten ermitteln

        $this->org_hours = $diff->h;//Stunden speichern
        $this->org_minutes = $diff->i;//Minuten speichern

        $this->minutes = $this->XV( $this->org_minutes );//Minuten gerundet
        $this->hours = $this->minutes == 0 ? ($this->org_hours + 1) : $this->org_hours;//wenn auf ganze Stunde aufgerundet wurde, Eine stunde dazu zählen

        foreach (array('org_hours','hours','org_minutes','minutes') as $varname) {
            $this->$varname = str_pad($this->$varname, 2, '0', STR_PAD_LEFT);
        }
        $this->timestamp = date('H:i', strtotime($this->hours.':'.$this->minutes));
        $this->org_timestamp = date('H:i', strtotime($this->org_hours.':'.$this->org_minutes));
    }
    private function ret(){
        //(Date)Timestamps Start/End [Y-m-d ]H:i[:s]
        $this->s    = $this->start->format('Y-m-d H:i:s');
        $this->o_s  = $this->org_start;
        $this->e    = $this->end->format('Y-m-d H:i:s');
        $this->o_e  = $this->org_end;

        //Timestamps H:i
        if(!empty($this->timestamp))    {$this->t    = $this->timestamp;}
        if(!empty($this->org_timestamp)){$this->o_t  = $this->org_timestamp;}

        //Timedata H/i
        if(!empty($this->hours))        {$this->h    = $this->hours;}
        if(!empty($this->org_hours))    {$this->o_h  = $this->org_hours;}
        if(!empty($this->minutes))      {$this->m    = $this->minutes;}
        if(!empty($this->org_minutes))  {$this->o_m  = $this->org_minutes;}
    }
    private function XV($m){
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
    }
}
?>
