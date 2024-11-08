// Modifiquei o código para ficar mais fácil de entender (Principalmente eu mesmo kk)
//Isaías Levi Tavares da Silva
//Matrícula:37023010

function calcularCompra(produto, numParcelas) {
    const desconto = 0.1;
    const juros = 0.02;
  
    if (numParcelas === 0) {
      // Compra à vista com desconto
      const valorDescontado = produto.valor * (1 - desconto);
      console.log(`Valor final com desconto: ${valorDescontado}`);
    } else if (numParcelas >= 1 && numParcelas <= 10) {
      // Parcelamento sem juros
      const valorParcelado = produto.valor / numParcelas;
      console.log(`Valor de cada parcela: ${valorParcelado}`);
    } else if (numParcelas >= 11 && numParcelas <= 12) {
      // Parcelamento com juros
      const valorTotalComJuros = produto.valor * (1 + juros);
      const valorParcelado = valorTotalComJuros / numParcelas;
      console.log(`Valor de cada parcela com juros: ${valorParcelado}`);
    } else {
      console.log("Número de parcelas não permitido.");
    }
  }
  
  // Exemplo de uso
  const teclado = {
    codigo: '390339',
    nome: 'Teclado Gamer',
    valor: 500,
  };
  
  calcularCompra(teclado, 12);
  calcularCompra(teclado, 13);
  calcularCompra(teclado, 0);

//Fim.