/* função para validar formulário */
function validarFormularioContato () {
    var 
    email = document.getElementById ("exampleFormControlInput1").value,
    telefone = document.getElementById ("exampleFormControlInput2").value,
    mensagem = document.getElementById ("exampleFormControlSelect1").value;

    if (email == "" || telefone == "" || mensagem == "") {
        alert ("Todos os campos precisam ser preenchidos");
    } else {
        alert ("Mensagem enviada com sucesso!")
    }
}

function validarFormularioEncomenda () {
    var
    nome = document.getElementById ("inputName").value,
    sobrenome = document.getElementById ("inputName2").value,
    email = document.getElementById ("inputEmail4").value,
    telefone = document.getElementById ("inputTelefone").value,
    endereco = document.getElementById ("inputAddress").value,
    cidade = document.getElementById ("inputCity").value,
    estado = document.getElementById ("inputEstado").value,
    cep = document.getElementById ("inputCEP").value,
    pedido = document.getElementById ("exampleFormControlTextarea1").value;

    if (nome == "" || sobrenome == "" || email == "@" || telefone == "" || endereco == "" || cidade == "" || estado == "" || cep == "" || pedido == "") {
        alert ("Todos os campos precisam ser preenchidos");
    } else {
        alert ("Encomenda solicitada com sucesso!");
    }
}