<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: http://armylist:1011");

include 'init.php';

$result = $conn->query("SELECT * FROM models");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
  if(isset($_GET['model-id']) && $_GET['model-id'] == $rs["id"]) {
    if ($outp != "") {$outp .= ",";}
    $outp.='{';
    $outp .= '"name":"'  . $rs["name"] . '",'; 
    $outp .= '"ws":"'  . $rs["weapon_skill"] . '",'; 
    $outp .= '"bs":"'  . $rs["ballistic_skill"] . '",';
    $outp .= '"s":"'  . $rs["strength"] . '",';
    $outp .= '"t":"'  . $rs["toughness"] . '",';
    $outp .= '"w":"'  . $rs["wounds"] . '",';
    $outp .= '"i":"'  . $rs["initiative"] . '",';
    $outp .= '"a":"'  . $rs["attacks"] . '",';
    $outp .= '"ld":"'  . $rs["leadership"] . '",';
    $outp .= '"sv":"'  . $rs["armor_save"] . '"';
    $outp.='}';
  }

}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>