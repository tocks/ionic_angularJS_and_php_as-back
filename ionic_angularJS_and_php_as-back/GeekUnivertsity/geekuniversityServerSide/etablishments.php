<?php

	require_once("conn.php");

	$ps = $pdo->prepare("SELECT * FROM etablishments");
	$ps->execute();
	$list = $ps->fetchAll(PDO::FETCH_ASSOC);
	/*header("Access-Control-Allow-Origin: *");
	header("Content-Type:application/json; charset=utf-8");
	echo (json_encode($list));
	*/


	// pour resoudre le problème des accents pour json_encode
	$data  = array();
	foreach ($list as $i => $v) {
		$fields = array();
		foreach ($v as $key=> $value) {
			$fields[$key] = utf8_encode($value);
		}
		$data[$i] = $fields;
	}
	header("Access-Control-Allow-Origin: *");
	header("Content-Type:application/json; charset=utf-8");
	echo (json_encode($data));

?>