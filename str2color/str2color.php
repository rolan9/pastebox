<?php
	/**
	 * function str2color
	 * v. 1.0.0
	 *
	 * @author (c) Copyright 2015 Wolf Wortmann / <wolf@wolfgang-m.de>
	 * @copyright Feel free to use, modify and redistribute this code. But please keep this copyright notice. (c) Copyright 2015 Wolf Wortmann / <wolf@wolfgang-m.de>
	 *
	 * @param (string) $string = String to convert in Color 
	 * @param (bool)   $htmlColorNames = Note HTML-Colornames
	 * @param (bool)   $hexColorNames = Note HEX-Colornames
	 * 
	 * @return (array) [
	 *	(array) $r['rgb'] = [R,G,B]
	 *  (string) $r['rgb_string']= R,G,B - RGB Colorstring
	 *  (string) $r['hex'] = Hexadecimalnumer
	 *  (int) $r['lightness'] = Lightness index
	 *  (string) $r['text_color'] = recommended Textcolor (based on Lightness index)
	 *  (string) $r['string'] = Converted String - orginal
	 * ]
	 *
	 */
	function str2color($string='',$htmlColorNames = true,$hexColorNames = true){
		$x = 5;
		$rgb = false;
		if ($htmlColorNames) {
			$rgb = is_html_color_name($string);
		}
		if ($hexColorNames && !$rgb) {
			$rgb = $rgb = is_hex_color($string);
		}
		if (!$rgb) {
			//String to md5
			$hash = md5($string);

			$rgb = [];
			for($i=0;$i<3;$i++){
				$rgb[$i] = round(( hexdec(substr($hash, $x*$i, $x)) / hexdec(str_pad('',$x,'F')) )*255);
			}
		}

		$hex = '';
		for($i=0;$i<3;$i++){
			$hex .= strtoupper(str_pad(dechex($rgb[$i]),2,0,STR_PAD_LEFT)); // each RGB value to HEX
		}

		$lightness = round( ($rgb[0]+$rgb[1]+$rgb[2])/3 );
		$text_color = ($lightness >= 255/2)? '000000' : 'FFFFFF';
		$r['rgb'] = $rgb;
		$r['rgb_string']= $rgb[0].','.$rgb[1].','.$rgb[2];
		$r['hex'] = $hex;
		$r['lightness'] = $lightness;
		$r['text_color'] = $text_color;
		$r['string'] = $string;

		return $r;
	}
	function is_html_color_name($name){
		$name = strtolower($name);
		$colors = [ // 147 HTML standart color names
			'aliceblue' => [240,248,255], 'antiquewhite' => [250,235,215], 'aqua' => [0,255,255], 'aquamarine' => [127,255,212], 'azure' => [240,255,255], 'beige' => [245,245,220], 'bisque' => [255,228,196], 'black' => [0,0,0], 'blanchedalmond ' => [255,235,205], 'blue' => [0,0,255], 'blueviolet' => [138,43,226], 'brown' => [165,42,42], 'burlywood' => [222,184,135], 'cadetblue' => [95,158,160], 'chartreuse' => [127,255,0], 'chocolate' => [210,105,30], 'coral' => [255,127,80], 'cornflowerblue' => [100,149,237], 'cornsilk' => [255,248,220], 'crimson' => [220,20,60], 'cyan' => [0,255,255], 'darkblue' => [0,0,139], 'darkcyan' => [0,139,139], 'darkgoldenrod' => [184,134,11], 'darkgray' => [169,169,169], 'darkgreen' => [0,100,0], 'darkgrey' => [169,169,169], 'darkkhaki' => [189,183,107], 'darkmagenta' => [139,0,139], 'darkolivegreen' => [85,107,47], 'darkorange' => [255,140,0], 'darkorchid' => [153,50,204], 'darkred' => [139,0,0], 'darksalmon' => [233,150,122], 'darkseagreen' => [143,188,143], 'darkslateblue' => [72,61,139], 'darkslategray' => [47,79,79], 'darkslategrey' => [47,79,79], 'darkturquoise' => [0,206,209], 'darkviolet' => [148,0,211], 'deeppink' => [255,20,147], 'deepskyblue' => [0,191,255], 'dimgray' => [105,105,105], 'dimgrey' => [105,105,105], 'dodgerblue' => [30,144,255], 'firebrick' => [178,34,34], 'floralwhite' => [255,250,240], 'forestgreen' => [34,139,34], 'fuchsia' => [255,0,255], 'gainsboro' => [220,220,220], 'ghostwhite' => [248,248,255], 'gold' => [255,215,0], 'goldenrod' => [218,165,32], 'gray' => [128,128,128], 'green' => [0,128,0], 'greenyellow' => [173,255,47], 'grey' => [128,128,128], 'honeydew' => [240,255,240], 'hotpink' => [255,105,180], 'indianred' => [205,92,92], 'indigo' => [75,0,130], 'ivory' => [255,255,240], 'khaki' => [240,230,140], 'lavender' => [230,230,250], 'lavenderblush' => [255,240,245], 'lawngreen' => [124,252,0], 'lemonchiffon' => [255,250,205], 'lightblue' => [173,216,230], 'lightcoral' => [240,128,128], 'lightcyan' => [224,255,255], 'lightgoldenrodyellow' => [250,250,210], 'lightgray' => [211,211,211], 'lightgreen' => [144,238,144], 'lightgrey' => [211,211,211], 'lightpink' => [255,182,193], 'lightsalmon' => [255,160,122], 'lightseagreen' => [32,178,170], 'lightskyblue' => [135,206,250], 'lightslategray' => [119,136,153], 'lightslategrey' => [119,136,153], 'lightsteelblue' => [176,196,222], 'lightyellow' => [255,255,224], 'lime' => [0,255,0], 'limegreen' => [50,205,50], 'linen' => [250,240,230], 'magenta' => [255,0,255], 'maroon' => [128,0,0], 'mediumaquamarine' => [102,205,170], 'mediumblue' => [0,0,205], 'mediumorchid' => [186,85,211], 'mediumpurple' => [147,112,208], 'mediumseagreen' => [60,179,113], 'mediumslateblue' => [123,104,238], 'mediumspringgreen' => [0,250,154], 'mediumturquoise' => [72,209,204], 'mediumvioletred' => [199,21,133], 'midnightblue' => [25,25,112], 'mintcream' => [245,255,250], 'mistyrose' => [255,228,225], 'moccasin' => [255,228,181], 'navajowhite' => [255,222,173], 'navy' => [0,0,128], 'oldlace' => [253,245,230], 'olive' => [128,128,0], 'olivedrab' => [107,142,35], 'orange' => [255,165,0], 'orangered' => [255,69,0], 'orchid' => [218,112,214], 'palegoldenrod' => [238,232,170], 'palegreen' => [152,251,152], 'paleturquoise' => [175,238,238], 'palevioletred' => [219,112,147], 'papayawhip' => [255,239,213], 'peachpuff' => [255,218,185], 'peru' => [205,133,63], 'pink' => [255,192,203], 'plum' => [221,160,221], 'powderblue' => [176,224,230], 'purple' => [128,0,128], 'red' => [255,0,0], 'rosybrown' => [188,143,143], 'royalblue' => [65,105,225], 'saddlebrown' => [139,69,19], 'salmon' => [250,128,114], 'sandybrown' => [244,164,96], 'seagreen' => [46,139,87], 'seashell' => [255,245,238], 'sienna' => [160,82,45], 'silver' => [192,192,192], 'skyblue' => [135,206,235], 'slateblue' => [106,90,205], 'slategray' => [112,128,144], 'slategrey' => [112,128,144], 'snow' => [255,250,250], 'springgreen' => [0,255,127], 'steelblue' => [70,130,180], 'tan' => [210,180,140], 'teal' => [0,128,128], 'thistle' => [216,191,216], 'tomato' => [255,99,71], 'turquoise' => [64,224,208], 'violet' => [238,130,238], 'wheat' => [245,222,179], 'white' => [255,255,255], 'whitesmoke' => [245,245,245], 'yellow' => [255,255,0], 'yellowgreen' => [154,205,50],
		];

		if (array_key_exists($name, $colors)) {
			return $colors[$name];
		}
		else{
			return false;
		}
	}


	function is_hex_color($hex){
		$hex = strtoupper($hex);
		$colors = [ // 147 HTML standart color names as HEX
			'F0F8FF' => [240,248,255], 'FAEBD7' => [250,235,215], '00FFFF' => [0,255,255], '7FFFD4' => [127,255,212], 'F0FFFF' => [240,255,255], 'F5F5DC' => [245,245,220], 'FFE4C4' => [255,228,196], '000000' => [0,0,0], 'FFEBCD' => [255,235,205], '0000FF' => [0,0,255], '8A2BE2' => [138,43,226], 'A52A2A' => [165,42,42], 'DEB887' => [222,184,135], '5F9EA0' => [95,158,160], '7FFF00' => [127,255,0], 'D2691E' => [210,105,30], 'FF7F50' => [255,127,80], '6495ED' => [100,149,237], 'FFF8DC' => [255,248,220], 'DC143C' => [220,20,60], '00FFFF' => [0,255,255], '00008B' => [0,0,139], '008B8B' => [0,139,139], 'B8860B' => [184,134,11], 'A9A9A9' => [169,169,169], '006400' => [0,100,0], 'A9A9A9' => [169,169,169], 'BDB76B' => [189,183,107], '8B008B' => [139,0,139], '556B2F' => [85,107,47], 'FF8C00' => [255,140,0], '9932CC' => [153,50,204], '8B0000' => [139,0,0], 'E9967A' => [233,150,122], '8FBC8F' => [143,188,143], '483D8B' => [72,61,139], '2F4F4F' => [47,79,79], '2F4F4F' => [47,79,79], '00CED1' => [0,206,209], '9400D3' => [148,0,211], 'FF1493' => [255,20,147], '00BFFF' => [0,191,255], '696969' => [105,105,105], '696969' => [105,105,105], '1E90FF' => [30,144,255], 'B22222' => [178,34,34], 'FFFAF0' => [255,250,240], '228B22' => [34,139,34], 'FF00FF' => [255,0,255], 'DCDCDC' => [220,220,220], 'F8F8FF' => [248,248,255], 'FFD700' => [255,215,0], 'DAA520' => [218,165,32], '808080' => [128,128,128], '008000' => [0,128,0], 'ADFF2F' => [173,255,47], '808080' => [128,128,128], 'F0FFF0' => [240,255,240], 'FF69B4' => [255,105,180], 'CD5C5C' => [205,92,92], '4B0082' => [75,0,130], 'FFFFF0' => [255,255,240], 'F0E68C' => [240,230,140], 'E6E6FA' => [230,230,250], 'FFF0F5' => [255,240,245], '7CFC00' => [124,252,0], 'FFFACD' => [255,250,205], 'ADD8E6' => [173,216,230], 'F08080' => [240,128,128], 'E0FFFF' => [224,255,255], 'FAFAD2' => [250,250,210], 'D3D3D3' => [211,211,211], '90EE90' => [144,238,144], 'D3D3D3' => [211,211,211], 'FFB6C1' => [255,182,193], 'FFA07A' => [255,160,122], '20B2AA' => [32,178,170], '87CEFA' => [135,206,250], '778899' => [119,136,153], '778899' => [119,136,153], 'B0C4DE' => [176,196,222], 'FFFFE0' => [255,255,224], '00FF00' => [0,255,0], '32CD32' => [50,205,50], 'FAF0E6' => [250,240,230], 'FF00FF' => [255,0,255], '800000' => [128,0,0], '66CDAA' => [102,205,170], '0000CD' => [0,0,205], 'BA55D3' => [186,85,211], '9370D0' => [147,112,208], '3CB371' => [60,179,113], '7B68EE' => [123,104,238], '00FA9A' => [0,250,154], '48D1CC' => [72,209,204], 'C71585' => [199,21,133], '191970' => [25,25,112], 'F5FFFA' => [245,255,250], 'FFE4E1' => [255,228,225], 'FFE4B5' => [255,228,181], 'FFDEAD' => [255,222,173], '000080' => [0,0,128], 'FDF5E6' => [253,245,230], '808000' => [128,128,0], '6B8E23' => [107,142,35], 'FFA500' => [255,165,0], 'FF4500' => [255,69,0], 'DA70D6' => [218,112,214], 'EEE8AA' => [238,232,170], '98FB98' => [152,251,152], 'AFEEEE' => [175,238,238], 'DB7093' => [219,112,147], 'FFEFD5' => [255,239,213], 'FFDAB9' => [255,218,185], 'CD853F' => [205,133,63], 'FFC0CB' => [255,192,203], 'DDA0DD' => [221,160,221], 'B0E0E6' => [176,224,230], '800080' => [128,0,128], 'FF0000' => [255,0,0], 'BC8F8F' => [188,143,143], '4169E1' => [65,105,225], '8B4513' => [139,69,19], 'FA8072' => [250,128,114], 'F4A460' => [244,164,96], '2E8B57' => [46,139,87], 'FFF5EE' => [255,245,238], 'A0522D' => [160,82,45], 'C0C0C0' => [192,192,192], '87CEEB' => [135,206,235], '6A5ACD' => [106,90,205], '708090' => [112,128,144], '708090' => [112,128,144], 'FFFAFA' => [255,250,250], '00FF7F' => [0,255,127], '4682B4' => [70,130,180], 'D2B48C' => [210,180,140], '008080' => [0,128,128], 'D8BFD8' => [216,191,216], 'FF6347' => [255,99,71], '40E0D0' => [64,224,208], 'EE82EE' => [238,130,238], 'F5DEB3' => [245,222,179], 'FFFFFF' => [255,255,255], 'F5F5F5' => [245,245,245], 'FFFF00' => [255,255,0], '9ACD32' => [154,205,50], 
		];

		if (array_key_exists($hex, $colors)) {
			return $colors[$hex];
		}
		else{
			return false;
		}
	}
?>
