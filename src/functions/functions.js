export function cadastrar(item) {
    fetch("http://localhost/backEndToDo/methods.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ acao: "cadastrar", item: item }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("A rede respondeu com um status de erro");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Sucesso:", data);
        })
        .catch((error) => {
            console.error("Erro:", error);
        });
}

export function pesquisar() {
    return fetch("http://localhost/backEndToDo/methods.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ acao: "pesquisar" }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("A rede respondeu com um status de erro");
            }
            return response.json();
        })
        .catch((error) => {
            console.error("Erro ao pesquisar:", error);
            throw error;
        });
}

export function deletar(item) {
    fetch("http://localhost/backEndToDo/methods.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ acao: "deletar", item: item }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("A rede respondeu com um status de erro");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Sucesso:", data);
        })
        .catch((error) => {
            console.error("Erro:", error);
        });
}

export function editar(item, idTodo) {
    fetch("http://localhost/backEndToDo/methods.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ acao: "editar", item: item, idTodo: idTodo }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("A rede respondeu com um status de erro");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Sucesso:", data);
        })
        .catch((error) => {
            console.error("Erro:", error);
        });
}