<?php

$data = array('22' => 'Twenty two', '33' => 'Thirty three', '44' => 'Forty four');
header('Content-Type: application/json');
echo json_encode($data);

?>