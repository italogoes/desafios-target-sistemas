const faturamentoMensal = {
    "2022-02-01": 1000,
    "2022-02-02": 1200,
    "2022-02-03": 800,
    "2022-02-04": 1500,
    "2022-02-05": 0, // fim de semana
    "2022-02-06": 0, // fim de semana
    "2022-02-07": 2000,
    "2022-02-08": 1800,
    "2022-02-09": 1600,
    "2022-02-10": 1100,
    "2022-02-11": 1350,
    "2022-02-12": 900,
    "2022-02-13": 0, // fim de semana
    "2022-02-14": 1200,
    "2022-02-15": 1400,
    "2022-02-16": 1700,
    "2022-02-17": 1900,
    "2022-02-18": 1100,
    "2022-02-19": 1300,
    "2022-02-20": 0, // fim de semana
    "2022-02-21": 1600,
    "2022-02-22": 1700,
    "2022-02-23": 1800,
    "2022-02-24": 2100,
    "2022-02-25": 1250,
    "2022-02-26": 1100,
    "2022-02-27": 0, // fim de semana
    "2022-02-28": 2000,
};

// Retorna um array com os valores de faturamento diário que são maiores que zero
function filtrarFaturamentosValidos(faturamentoMensal) {
    return Object.values(faturamentoMensal).filter(valor => valor > 0);
}

// Retorna o menor valor do array de faturamentos
function calcularMenorFaturamento(faturamentos) {
    return Math.min(...faturamentos);
}

// Retorna o maior valor do array de faturamentos
function calcularMaiorFaturamento(faturamentos) {
    return Math.max(...faturamentos);
}

// Retorna o número de elementos no array de faturamentos que são maiores que a média
function calcularDiasAcimaDaMedia(faturamentos, media) {
    return faturamentos.filter(valor => valor > media).length;
}

// Calcula as estatísticas de faturamento a partir do objeto de faturamento mensal
function calcularEstatisticasDeFaturamento(faturamentoMensal) {
    const faturamentos = filtrarFaturamentosValidos(faturamentoMensal);
    const totalDias = faturamentos.length;
    const totalFaturamento = faturamentos.reduce((acumulado, valor) => acumulado + valor, 0);
    const mediaMensal = totalFaturamento / totalDias;
    const menorFaturamento = calcularMenorFaturamento(faturamentos);
    const maiorFaturamento = calcularMaiorFaturamento(faturamentos);
    const diasAcimaDaMedia = calcularDiasAcimaDaMedia(faturamentos, media)
    }  