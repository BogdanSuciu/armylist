<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: http://armylist:1011");

include 'init.php';

$result = $conn->query("SELECT * FROM units");

$outp = "";
if(isset($_GET["codex"]) && isset($_GET["slot"])) {
  while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
      if($rs["codex"] == $_GET["codex"] && $rs["force_slot"] == $_GET["slot"]) {
        if ($outp != "") {$outp .= ",";}
        $outp.='{';
        $outp .= '"name":"'  . $rs["name"] . '",'; 
        if($rs["model_01"]) {
          $outp .= '"model_01": {'; 
          $outp .= '"id":"'.$rs["model_01"].'",'; 
          $outp .= '"min":"'.$rs["min_model_01"].'",'; 
          $outp .= '"max":"'.$rs["max_model_01"].'"'; 
          $outp .= '},'; 
        }
        $outp .= '"cost":"'  . $rs["cost"] . '"';
        $outp.='}';
      }
  }
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>