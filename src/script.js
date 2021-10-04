//Conversor de temperatura
//Criacao da funcao que vai ser passada no parametro onClick no HTML, dentro de um Input com a tag button
function tempconver(temp, temp1, temp2) {
  //Verifica quais sao as opcoes seleciondas na tela pelo usuario e faz o calculo necessario para a conversao das temperaturas selecionadas
  if ((temp1 == "farenheit") & (temp2 == "celcius")) {
    var conv = (parseFloat(temp) - 32) * (5 / 9);
    document.getElementById("conve").innerHTML =
      '<p class="azul">Valor convertido de ' +
      temp +
      "°F para " +
      conv.toFixed(1) +
      "°C.</p>";
  } else if ((temp1 == "celcius") & (temp2 == "farenheit")) {
    var conv = (parseFloat(temp) * 9) / 5 + 32;
    document.getElementById("conve").innerHTML =
      '<p class="azul">Valor convertido de ' +
      temp +
      "°C para " +
      conv.toFixed(1) +
      "°F.</p>";
  } else if ((temp1 == "celcius") & (temp2 == "kelvin")) {
    var conv = parseFloat(temp) + 273;
    document.getElementById("conve").innerHTML =
      '<p class="azul">Valor convertido de ' +
      temp +
      "°C para " +
      conv.toFixed(1) +
      "K.</p>";
  } else if ((temp1 == "kelvin") & (temp2 == "celcius")) {
    var conv = parseFloat(temp) - 273;
    document.getElementById("conve").innerHTML =
      '<p class="azul">Valor convertido de ' +
      temp +
      "K para " +
      conv.toFixed(1) +
      "°C.</p>";
  } else if ((temp1 == "farenheit") & (temp2 == "kelvin")) {
    var conv = (parseFloat(temp) - 32) * (5 / 9) + 273;
    document.getElementById("conve").innerHTML =
      '<p class="azul">Valor convertido de ' +
      temp +
      "°F para " +
      conv.toFixed(1) +
      "K.</p>";
  } else if ((temp1 == "kelvin") & (temp2 == "farenheit")) {
    var conv = (parseFloat(temp) - 273) * 1.8 + 32;
    document.getElementById("conve").innerHTML =
      '<p class="azul">Valor convertido de ' +
      temp +
      "K para " +
      conv.toFixed(1) +
      "°F.</p>";
  } else if (temp1 === temp2) {
    document.getElementById("conve").innerHTML =
      '<p class="vermelho">Selecione temperaturas diferentes para fazer a conversão.</p>';
  }
}
