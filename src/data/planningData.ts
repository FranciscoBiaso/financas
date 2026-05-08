export const empresas = {
  fitec: { nome: 'FITec', cor: '#6366f1' },
  mirakulo: { nome: 'Mirakulo', cor: '#10b981' },
};

export const resumo = {
  faturamento: 20000,
  salario: 16395,
  gastosMes: 16390,
  lucroMes: 20006,
  precoDia: 971.27,
  ir: 27.5,
  juros: 0.10,
  salarioBase: 16389.50,
};

export const despesas = [
  { desc: 'Imposto',        valor: 4000.00,  categoria: 'Impostos',   percentual: 24.41 },
  { desc: 'Mercado',        valor: 2500.00,  categoria: 'Alimentação', percentual: 15.25 },
  { desc: 'Aluguel',        valor: 1700.00,  categoria: 'Moradia',    percentual: 10.37 },
  { desc: 'Plano Saúde',    valor: 1670.00,  categoria: 'Saúde',      percentual: 10.19 },
  { desc: 'Alimentação',    valor: 946.00,   categoria: 'Alimentação', percentual: 5.77 },
  { desc: 'Escola',         valor: 940.00,   categoria: 'Educação',   percentual: 5.74 },
  { desc: 'Contador',       valor: 609.00,   categoria: 'Serviços',   percentual: 3.72 },
  { desc: 'Cemig',          valor: 600.00,   categoria: 'Moradia',    percentual: 3.66 },
  { desc: 'Gasolina',       valor: 600.00,   categoria: 'Transporte', percentual: 3.66 },
  { desc: 'Faxineira',      valor: 600.00,   categoria: 'Serviços',   percentual: 3.66 },
  { desc: 'Psicopedagoga',  valor: 560.00,   categoria: 'Saúde',      percentual: 3.42 },
  { desc: 'Psicologa',      valor: 360.00,   categoria: 'Saúde',      percentual: 2.20 },
  { desc: 'VPS + GPT',      valor: 317.50,   categoria: 'Tecnologia', percentual: 1.94 },
  { desc: 'Pedro',          valor: 250.00,   categoria: 'Outros',     percentual: 1.53 },
  { desc: 'Kiro',           valor: 242.00,   categoria: 'Saúde',      percentual: 1.48 },
  { desc: 'Seguro Carro',   valor: 195.00,   categoria: 'Transporte', percentual: 1.19 },
  { desc: 'Internet/Cel',   valor: 155.00,   categoria: 'Serviços',   percentual: 0.95 },
  { desc: 'Jiujitsu',       valor: 85.00,    categoria: 'Lazer',      percentual: 0.52 },
  { desc: 'Água',           valor: 60.00,    categoria: 'Moradia',    percentual: 0.37 },
];

export const coresCategorias: Record<string, string> = {
  'Impostos':    '#ef4444',
  'Alimentação': '#f97316',
  'Moradia':     '#eab308',
  'Saúde':       '#22c55e',
  'Educação':    '#3b82f6',
  'Serviços':    '#8b5cf6',
  'Tecnologia':  '#06b6d4',
  'Transporte':  '#f43f5e',
  'Lazer':       '#a78bfa',
  'Outros':      '#94a3b8',
};

// Meses 1-89 a partir de Jan/2022
const mesesNomes = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];

const salariosPorMes = [
  0, 37395, 34784.78, 39111.79, 36948.29, 38030.04, 39111.79, 39111.79, 39111.79,
  39111.79, 39111.79, 36948.29, 33703.03, 40193.54, 40193.54, 39111.79, 41275.30,
  36948.29, 32621.28, 40193.54, 35866.54, 36948.29, 40193.54, 39111.79, 38030.04,
  40193.54, 40193.54, 39111.79, 41275.30, 36948.29, 32621.28, 40193.54, 35866.54,
  36948.29, 40193.54, 39111.79, 38030.04, 40193.54, 40193.54, 39111.79, 41275.30,
  36948.29, 32621.28, 40193.54, 35866.54, 36948.29, 40193.54, 39111.79, 38030.04,
  40193.54, 40193.54, 39111.79, 41275.30, 36948.29, 32621.28, 40193.54, 35866.54,
  36948.29, 40193.54, 39111.79, 38030.04, 40193.54, 40193.54, 39111.79, 41275.30,
  36948.29, 32621.28, 40193.54, 35866.54, 36948.29, 40193.54, 39111.79, 38030.04,
  40193.54, 40193.54, 39111.79, 41275.30, 36948.29, 32621.28, 40193.54, 35866.54,
  36948.29, 40193.54, 39111.79, 41275.30, 36948.29, 32621.28, 40193.54, 35866.54,
];

const capitalAcumulado = [
  0, 0, 6460.58, 8951.44, 21927.05, 35992.41, 50022.77, 64160.14, 75997.97,
  88052.80, 99621.11, 107379.40, 122311.20, 137540.01, 151592.06, 167854.62,
  179921.02, 187628.42, 202929.09, 213922.74, 226032.15, 241436.82, 255778.73,
  274794.12, 296184.13, 317800.27, 338457.59, 361544.66, 380446.43, 395206.40,
  417676.71, 368494.78, 390556.15, 416048.26, 440700.56, 464531.71, 490763.00,
  517204.15, 542795.08, 570773.23, 594668.21, 614444.33, 641970.93, 666583.74,
  692475.19, 721819.04, 750315.88, 777958.95, 807986.67, 838254.60, 867682.93,
  899510.19, 927265.06, 950914.96, 982326.33, 1009661.97, 1038298.06, 1070408.48,
  1101694.04, 1132148.14, 1165009.37, 1198133.48, 1230440.84, 1265170.17,
  1295850.32, 1322448.90, 1356832.53, 1387164.23, 1418820.33, 1453974.94,
  1488329.03, 1522372.31, 1558862.79, 1595657.36, 1631676.80, 1670159.90,
  1704636.69, 1735073.77, 1773336.76, 1807591.61, 1843213.66, 1882377.82,
  1920786.59, 1958433.68, 1998558.01, 2039016.70, 2078730.80, 2120939.35,
];

export interface MesData {
  qtd: number;
  mes: number;
  ano: number;
  label: string;
  faturamento: number;
  capitalAcumulado: number;
  gastos: number;
  saldo: number;
}

export const planejamentoMensal: MesData[] = salariosPorMes.map((fat, i) => {
  const mes = (i % 12) + 1;
  const ano = 2022 + Math.floor(i / 12);
  return {
    qtd: i + 1,
    mes,
    ano,
    label: `${mesesNomes[mes - 1]}/${String(ano).slice(2)}`,
    faturamento: fat,
    capitalAcumulado: capitalAcumulado[i] ?? 0,
    gastos: resumo.salarioBase,
    saldo: fat - resumo.salarioBase,
  };
});

export const dividas = [
  { nome: 'Carro Parcelas', valorMes: 3750.00, cor: '#f97316' },
  { nome: 'BDMG',           valorMes: 1500.00,  cor: '#ef4444' },
  { nome: 'Recov',          valorMes: 50.38,   cor: '#eab308' },
  { nome: 'Nubank EM',      valorMes: 221.00,  cor: '#8b5cf6' },
  { nome: 'Inter',          valorMes: 110.22,  cor: '#3b82f6' },
  { nome: 'Santander',      valorMes: 370.00,  cor: '#06b6d4' },
  { nome: 'Picpay',         valorMes: 165.47,  cor: '#22c55e' },
  { nome: 'Inter CPF',      valorMes: 84.86,   cor: '#a78bfa' },
  { nome: 'Genial',         valorMes: 500.00,  cor: '#f43f5e' },
];
