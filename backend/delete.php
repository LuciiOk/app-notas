<?php
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin:*');

    $json=file_get_contents('php://input');
    $a = json_decode($json);

    if(file_exists("notas.json")){
        $contenido= file_get_contents("notas.json");
        $array = json_decode($contenido);

        for ($i = 0; $i < count($array); ++$i){
            if ($array[$i] == $a) {
                array_splice($array, $i, 1);
            } 
        }

        file_put_contents("notas.json", json_encode($array));
    }
?>