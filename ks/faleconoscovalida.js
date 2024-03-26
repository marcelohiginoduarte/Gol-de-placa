const form = document.querySelector("#form");
const nomeInput = document.querySelector("#nome");
const telefoneInput = document.querySelector("#Telefone");
const localInput = document.querySelector("#local");
const emailInput = document.querySelector("#email");
const observaçãoInput = document.querySelector("#observação");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    //Validação do forms nome.
    if(nomeInput.value === ""){
        alert("Escreva o seu nome.");
        return
    } else if(nomeInput.value.length < 3){
        alert("Escreva o nome valido")
        return;
    } else if (nomeInput.value.length > 60){
        alert("Abrevie o seu nome");
        return;
    }
    //Validadando telefone.
    if(telefoneInput.value === ""){
        alert("Escreve o seu telefone.");
        return;
    }else if (telefoneInput.value <3){
        alert("Escreva um telefone valido 9 digitos.");
        return;
    }else if(telefoneInput.value < 11){
        alert("Escreva um telefone+10 valido");
        return;
    }
    //validando local.
    if (localInput.value === ""){
        alert("Informe o local");
        return;
    }else if(localInput.value.length <3){
        alert("Informe um local valido.");
        return;
    }else if (localInput.value.length > 25){
        alert("Por favor abrevie o local.");
        return;
    }
    //Validação de email.
    if (emailInput.value === ""){
        alert("Informe um email.");
        return;
    }else if(emailInput.value.length <3){
        alert("Informe um E-mail valido.");
        return;
    }else if (localInput.value.length > 30){
        alert("Por favor escreva um e-mail valido.");
        return;
    }


    // Se todos os campos estiverem preenchidos corretamente envie o arquivo.
    form.submit(function enviararquivo(oneclik){
        nomeInput.value;
        telefoneInput.value;
        localInput.value;
        emailInput.value;
        observaçãoInput.value;
    });
});

function enviararquivo(){
    nomeInput.value;
    telefoneInput.value;
    localInput.value;
    emailInput.value;
    observaçãoInput.value;
}
