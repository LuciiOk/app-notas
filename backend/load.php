<?php
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin:*');
    if(file_exists("notas.json")){
        $contenido= file_get_contents("notas.json");
        echo $contenido;
    }
?>