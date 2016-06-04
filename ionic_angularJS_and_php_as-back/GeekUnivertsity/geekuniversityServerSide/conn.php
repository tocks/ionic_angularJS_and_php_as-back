<?php
	try {
		$strConnexion = 'mysql:host=localhost;dbname=geekuniversity_db';
		$pdo =  new PDO($strConnexion, 'root', 'root');
	} catch (PDOException $e) {
		$msg = 'ERREUR PDO dans '.$e->getMessage();
		die($msg);
	}
	
?>