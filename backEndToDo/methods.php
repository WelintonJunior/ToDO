<?php

include "conn.php";
include "ClasseTodo.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization');

$ClasseTodo = new Todo;

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    if (isset($data['acao'])) {
        if ($data['acao'] == 'cadastrar') {
            $item = $data['item'];
            $resultado = $ClasseTodo->cadastrar($item, $conn);
            echo json_encode(['resultado' => $resultado]);
        } else if ($data['acao'] == 'pesquisar') {
            $resultado = $ClasseTodo->pesquisar($conn);
            echo json_encode([$resultado]);
        } else if ($data['acao'] == 'deletar') {
            $item = $data['item'];
            $resultado = $ClasseTodo->deletar($conn, $item);
            echo json_encode(['resultado' => $resultado]);
        } else if ($data['acao'] == 'editar') {
            $item = $data['item'];
            $idTodo = $data['idTodo'];
            $resultado = $ClasseTodo->editar($conn, $item, $idTodo);
            echo json_encode(['resultado' => $resultado]);
        }
    }
}
