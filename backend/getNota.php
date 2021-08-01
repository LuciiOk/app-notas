<?php
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin:*');

    if (file_exists("notas.json")) {
        $contenido= file_get_contents("notas.json");
        $contenido = json_decode($contenido, true);
        $id = $_GET['id'];

        foreach($contenido as $objeto) {
            if ($objeto['id'] == $id) {
                echo json_encode($objeto);
            }
        }
    }
?>