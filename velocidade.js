const veiculo1 = prompt("Informe o nome do primeiro veículo: ");
const velocidade1 = parseFloat(
  prompt("Informe a velocidade do primeiro veículo: ")
);

const veiculo2 = prompt("Informe o nome do segundo veículo: ");
const velocidade2 = parseFloat(
  prompt("Informe a velocidade do segundo veículo: ")
);

if (velocidade1 > velocidade2) {
  alert(
    "O veículo de " + veiculo1 + " é mas rapído do que o veículo de " + veiculo2
  );
} else if (velocidade2 > velocidade1) {
  alert(
    "O veículo de " + veiculo2 + " é mas rapído do o veículo de  " + veiculo1
  );
} else {
  alert(" Ambos veículos tem a mesma velocidade: ");
}
