function calcBhask() {
    var a = Number(document.all['a'].value);
    var b = Number(document.all['b'].value);
    var c = Number(document.all['c'].value);
    var Resp = document.all["resp"];

    var delta = (b * b) - (4 * a * c);

    if (delta < 0) {
        Resp.innerHTML = "Sem Raiz.";
    } 
    else if (delta == 0) {
        Resp.innerHTML ="Raiz unica = " + (-b/2*a) + ".";
    } 
    else{
        Resp.innerHTML = "Duas raizes, sendo: x1 = " + ((-b + Math.sqrt(delta)) / (2 * a)) + 
        " e x2 = " + ((-b - Math.sqrt(delta)) / (2 * a)) + ".";  
    }
}

    function calcNota() {
        var tp = Number(document.all['tp'].value);
        var as = Number(document.all['as'].value);
        var ef = Number(document.all['ef'].value);
        var pResp = document.all['resp'];
                
        var media = ((tp * 2)  + (as * 3) + (ef * 5)) / 10;

        if (media >= 8.0 & media <= 10.0) { 
            pResp.innerHTML = "A média é: " + media.toFixed(2) + " , portanto situação A.";
        } else if (media >= 7.0 & media <= 7.9) {
            pResp.innerHTML = "A média é: " + media.toFixed(2) + " , portanto situação B.";
        } else if (media >= 6.0 & media <= 6.9) {
            pResp.innerHTML = "A média é: " + media.toFixed(2) + " , portanto situação C.";
        } else if (media >= 5.0 & media <= 5.9) {
            pResp.innerHTML = "A média é: " + media.toFixed(2) + " , portanto situação D.";
        } else  {
            pResp.innerHTML = "A média é: " + media.toFixed(2) + " , portanto situação E.";
        } 
    } 

function ordemCres() {
    var num1 = Number(document.all['num1'].value);
    var num2 = Number(document.all['num2'].value);
    var num3 = Number(document.all['num3'].value);
    var pResp = document.all['resp'];

    if (num1 < num2 & num2 < num3) {
        pResp.innerHTML = "A ordem crescente é: " + num1 + ", " + num2 + ", " + num3 + ".";
    } 
    else if (num1 < num3 & num3 < num2) {
        pResp.innerHTML = "A ordem crescente é: " + num1 + ", " + num3 + ", " + num2 + ".";
    } 
    else if (num2 < num1 & num1 < num3) {
        pResp.innerHTML = "A ordem crescente é: " + num2 + ", " + num1 + ", " + num3 + ".";
    } 
    else if (num2 < num3 & num3 < num1) {
        pResp.innerHTML = "A ordem crescente é: " + num2 + ", " + num3 + ", " + num1 + ".";
    } 
    else if (num3 < num1 & num1 < num2) {
        pResp.innerHTML = "A ordem crescente é: " + num3 + ", " + num1 + ", " + num2 + ".";
    } 
    else if (num3 < num2 & num2 < num1) {
        pResp.innerHTML = "A ordem crescente é: " + num3 + ", " + num2 + ", " + num1 + ".";
    }
}

function calcIdade() {
    var dia = Number(document.all['dia'].value);
    var mes = Number(document.all['mes'].value);
    var ano = Number(document.all['ano'].value);
    var dia1 = Number(document.all['dia1'].value);
    var mes1 = Number(document.all['mes1'].value);
    var ano1 = Number(document.all['ano1'].value);
    var pResp = document.all['resp'];

    if (ano > ano1) {
        pResp.innerHTML = "A data que vem primeiro é: " + dia1 + "/" + mes1 + "/" + ano1 + ".";
    } 
    else if (ano1 > ano) {
        pResp.innerHTML = "A data que vem primeiro é: " + dia + "/" + mes + "/" + ano + ".";
    } 
    else if (ano == ano1) {
        if (mes > mes1) {
           pResp.innerHTML = "A data que vem primeiro é: " + dia1 + "/" + mes1 + "/" + ano1 + ".";
        } 
        else if (mes1 > mes) {
            pResp.innerHTML = "A data que vem primeiro é: " + dia + "/" + mes + "/" + ano + ".";
        } 
        else if (mes == mes1) {
            if (dia > dia1) {
                pResp.innerHTML = "A data que vem primeiro é: " + dia1 + "/" + mes1 + "/" + ano1 + "."; 
            } 
            else if (dia1 > dia) {
                pResp.innerHTML = "A data que vem primeiro é: " + dia + "/" + mes + "/" + ano + ".";
            } 
            else if (dia = dia1) {
                pResp.innerHTML = "Datas iguais.";
            }
        }
    }
}

function selectOpcao() {
    var opcao = document.all['opcao'].value;
    switch (opcao) {
        case '1':
            var a = +prompt ("Digite um número: ");
            var b = +prompt ("Digite um outro número: ");
            var c = a + b;
            alert("Soma dos numeros: " + c + ".")
            break;
            case '2': 
            var d = prompt ("Digite um número: ");
            var e = Math.sqrt(d).toFixed(2);
            alert ("Raiz: " + e + ".")
            break;
    }
}