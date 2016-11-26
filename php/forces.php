<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: http://armylist:1011");

include 'init.php';

$result = $conn->query("SELECT id,name FROM force_types");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp.='{';
    $outp .= '"id":"'  . $rs["id"] . '",';
    $outp .= '"name":"'  . $rs["name"] . '"'; 
    $outp.='}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>