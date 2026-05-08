import { useState } from 'react'
import { planejamentoMensal } from '../data/planningData'

const fmt = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

const anos = [...new Set(planejamentoMensal.map(m => m.ano))]

export default function MonthlyTable() {
  const [anoSel, setAnoSel] = useState(2022)
  const dados = planejamentoMensal.filter(m => m.ano === anoSel)

  return (
    <div style={{ background: '#1a1d2e', border: '1px solid #2d3148', borderRadius: 14, padding: '20px 24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 13, color: '#64748b', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600 }}>
            Planejamento Mensal
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {anos.map(a => (
            <button key={a} onClick={() => setAnoSel(a)} style={{
              background: anoSel === a ? '#6366f1' : '#2d3148',
              color: anoSel === a ? '#fff' : '#64748b',
              border: 'none', borderRadius: 6, padding: '4px 10px',
              fontSize: 12, fontWeight: 600, cursor: 'pointer',
            }}>{a}</button>
          ))}
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr>
              {['Mês', 'Faturamento', 'Gastos', 'Saldo', 'Capital Acumulado', 'Status'].map(h => (
                <th key={h} style={{
                  padding: '8px 12px', textAlign: 'left',
                  color: '#475569', fontWeight: 600, fontSize: 11,
                  textTransform: 'uppercase', letterSpacing: 0.8,
                  borderBottom: '1px solid #2d3148',
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dados.map((m, i) => {
              const saldo = m.faturamento - m.gastos
              const hoje = new Date()
              const isCurrent = m.mes === hoje.getMonth() + 1 && m.ano === hoje.getFullYear()
              const isPast = m.ano < hoje.getFullYear() || (m.ano === hoje.getFullYear() && m.mes < hoje.getMonth() + 1)

              return (
                <tr key={m.qtd} style={{
                  background: isCurrent ? '#6366f111' : i % 2 === 0 ? 'transparent' : '#ffffff04',
                  borderLeft: isCurrent ? '3px solid #6366f1' : '3px solid transparent',
                }}>
                  <td style={{ padding: '10px 12px', color: isCurrent ? '#6366f1' : '#e2e8f0', fontWeight: isCurrent ? 700 : 400 }}>
                    {m.label}
                  </td>
                  <td style={{ padding: '10px 12px', color: '#10b981', fontWeight: 600 }}>
                    {m.faturamento > 0 ? fmt(m.faturamento) : '—'}
                  </td>
                  <td style={{ padding: '10px 12px', color: '#ef4444' }}>
                    {fmt(m.gastos)}
                  </td>
                  <td style={{ padding: '10px 12px', color: saldo >= 0 ? '#10b981' : '#ef4444', fontWeight: 600 }}>
                    {m.faturamento > 0 ? fmt(saldo) : '—'}
                  </td>
                  <td style={{ padding: '10px 12px', color: '#06b6d4' }}>
                    {m.capitalAcumulado > 0 ? fmt(m.capitalAcumulado) : '—'}
                  </td>
                  <td style={{ padding: '10px 12px' }}>
                    <span style={{
                      background: isCurrent ? '#6366f122' : isPast ? '#10b98122' : '#2d3148',
                      color: isCurrent ? '#6366f1' : isPast ? '#10b981' : '#64748b',
                      borderRadius: 20, padding: '2px 10px', fontSize: 11, fontWeight: 600,
                    }}>
                      {isCurrent ? '● Atual' : isPast ? '✓ Passado' : '○ Futuro'}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
