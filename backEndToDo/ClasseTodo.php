<?php

class Todo
{

    public static function cadastrar($item, $conn)
    {

        $sql = "INSERT INTO todo VALUES (DEFAULT, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $item);
        if ($stmt->execute()) {
            return "Certo";
        } else {
            return "Errado";
        }
    }

    public static function pesquisar($conn)
    {
        $sql = "SELECT * FROM todo";
        $stmt = $conn->prepare($sql);
        if ($stmt->execute()) {
            $result = $stmt->get_result();
            $resultado = $result->fetch_all(MYSQLI_ASSOC);
            return $resultado;
        } else {
            return "Erro";
        }
    }

    public static function deletar($conn, $item)
    {
        $sql = "DELETE FROM todo where idTodo = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $item);
        if ($stmt->execute()) {
            return "Certo";
        } else {
            return "Errado";
        }
    }

    public static function editar($conn, $item, $idTodo)
    {
        $sql = "UPDATE todo set item = ? where idTodo = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("si", $item, $idTodo);
        if ($stmt->execute()) {
            return "Certo";
        } else {
            return "Errado";
        }
    }
}
