# str2color API

####Docs commin soon
Use the File doc's ..
	/**
	 * API str2color
	 * v. 1.0.0
	 *
	 * @author (c) Copyright 2015 Wolf Wortmann / <wolf@wolfgang-m.de>
	 * @copyright Feel free to use, modify and redistribute this code. But please keep this copyright notice. (c) Copyright 2015 Wolf Wortmann / <wolf@wolfgang-m.de>
	 *
	 * @method GET
	 * @url = http://color.elementcode.de/api.str2color.php?
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
