import { resumo, MesData } from '../data/planningData'

const fmt = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

interface Props { mesData?: MesData }

export default function KpiCards({ mesData }: Props) {
  const cards = [
    {
      label: 'Faturamento Mensal',
      valor: mesData?.faturamento ?? resumo.faturamento,
      sub: 'FITec + Mirakulo',
      cor: '#6366f1',
      icon: '📈',
    },
    {
      label: 'Salário Base',
      valor: resumo.salario,
      sub: 'Renda fixa mensal',
      cor: '#10b981',
      icon: '💰',
    },
    {
      label: 'Gastos Mensais',
      valor: resumo.gastosMes,
      sub: '19 categorias',
      cor: '#ef4444',
      icon: '📉',
    },
    {
      label: 'Saldo do Mês',
      valor: (mesData?.faturamento ?? resumo.faturamento) - resumo.gastosMes,
      sub: 'Faturamento − Gastos',
      cor: '#f59e0b',
      icon: '⚖️',
    },
    {
      label: 'Capital Acumulado',
      valor: mesData?.capitalAcumulado ?? 0,
      sub: 'Patrimônio projetado',
      cor: '#06b6d4',
      icon: '🏦',
    },
    {
      label: 'Preço Hora/Dia',
      valor: resumo.precoDia,
      sub: 'Valor diário estimado',
      cor: '#a78bfa',
      icon: '⏱️',
    },
  ]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
      {cards.map(c => (
        <div key={c.label} style={{
          background: '#1a1d2e',
          border: `1px solid ${c.cor}33`,
          borderRadius: 14,
          padding: '20px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: -20, right: -10,
            fontSize: 64, opacity: 0.07,
          }}>{c.icon}</div>
          <div style={{ fontSize: 12, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>
            {c.label}
          </div>
          <div style={{ fontSize: 26, fontWeight: 700, color: c.cor, marginBottom: 4 }}>
            {fmt(c.valor)}
          </div>
          <div style={{ fontSize: 12, color: '#475569' }}>{c.sub}</div>
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: 3, background: `linear-gradient(90deg, ${c.cor}, transparent)`,
          }} />
        </div>
      ))}
    </div>
  )
}
