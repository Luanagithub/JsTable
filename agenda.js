function cadPessoa(nome, telefone, email, data){

    var tb = document.getElementById("tbPessoas");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);

    var cellCodigo = linha.insertCell(0);
    var cellNome = linha.insertCell(0);
    var cellTelefone = linha.insertCell(1);
    var cellEmail = linha.insertCell(2);
    var cellData = linha.insertCell(3);

    cellCodigo.innerHTML = qtdLinhas;
    cellNome.innerHTML= nome;
    cellTelefone.innerHTML= telefone;
    cellEmail.innerHTML= email;
    cellData.innerHTML= data;


}