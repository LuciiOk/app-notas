<?php
  header('Content-type: application/json');
  header('Access-Control-Allow-Origin:*');
  
  $json=file_get_contents('php://input');
  $data=json_decode($json);

    if(file_exists("notas.json")){
        $contenido= file_get_contents("notas.json");
        $dataFile= json_decode($contenido);
        array_push($dataFile,$data);
        file_put_contents("notas.json",json_encode($dataFile));
    }else{
        $dataFile=array();
        array_push($dataFile,$data);
        $archivo=fopen("notas.json","w");
        fwrite($archivo,json_encode($dataFile));
        fclose($archivo);
    }
?>