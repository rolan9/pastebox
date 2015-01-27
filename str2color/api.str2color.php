<?php
	/**
	 * API str2color
	 * v. 1.0.0
	 *
	 * @author (c) Copyright 2014 Wolf Wortmann / <wolf@wolfgang-m.de>
	 * @copyright Feel free to use, modify and redistribute this code. But please keep this copyright notice. (c) Copyright 2015 Wolf Wortmann / <wolf@wolfgang-m.de>
	 *
	 * @method GET
	 *
	 * @param (json) $_GET['data'] = {
	 *  (string) string = String to convert in Color 
	 *  (bool)   html_colorNameshtmlColorNames = Note HTML-Colornames
	 *  (bool)   hex_colorNames = Note HEX-Colornames
	 * } = API-Options
	 *
	 * @echo (json) {
	 *	(obj) 	 rgb = [R,G,B]
	 *  (string) rgb_string= R,G,B - RGB Colorstring
	 *  (string) hex = Hexadecimalnumer
	 *  (int) 	 lightness = Lightness index
	 *  (string) text_color = recommended Textcolor (based on Lightness index)
	 *  (string) string = Converted String - orginal
	 * }
	 *
	 */
	header("Access-Control-Allow-Origin: *");

	if (empty($_GET['data'])) {
		$_GET['data']='{}';
	}
	$defaults = [
		'string' => 'str2color',
		'html_colorNames' => true,
		'hex_colorNames' => true,
	];
	$data = json_decode($_GET['data'], true);
	$s = array_merge($defaults, $data);

	$string = (string) $s['string'];
	$html = (bool) $s['html_colorNames'];
	$hex = (bool) $s['hex_colorNames'];

	include 'str2color.php';
	$data = str2color($string,$html,$hex);
	echo json_encode($data);
?>
