function maiorMenor() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    var num4 = parseFloat(document.getElementById("num4").value);
    var num5 = parseFloat(document.getElementById("num5").value);

    var maior = Math.max(num1, num2, num3, num4, num5);
    var menor = Math.min(num1, num2, num3, num4, num5);

    document.getElementById("resultado").innerHTML = "O maior número é " + maior + " e o menor número é " + menor + ".";
}