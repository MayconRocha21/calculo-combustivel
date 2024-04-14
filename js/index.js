function calcular(e){
    e.preventDefault();

    let etanolInput = document.getElementById("etanol").value;
    let gasolinaInput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("content-result");
    let textResult = document.getElementById("text-result");
    let gasolinaSpan = document.getElementById("gasolina-result");
    let etanolSpan = document.getElementById("etanol-result");

    //Calculo: etanol / gasolina
    
    let calculo = (etanolInput / gasolinaInput);

    //Condição
    if (calculo < 0.7){
        //Compensa usar etanol
        textResult.innerHTML = "Compensa usar etanol";
    }else{
        //Compensa usar gasolina
        textResult.innerHTML = "Compensa usar Gasolina";
    }

    gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinaInput;
    etanolSpan.innerHTML = "Etanol R$ " + etanolInput;

    contentResult.classList.remove("hide");
}
