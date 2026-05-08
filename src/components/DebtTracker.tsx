import { dividas } from '../data/planningData'

const fmt = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

interface Props { full?: boolean }

export default function DebtTracker({ full }: Props) {
  const total = dividas.reduce((s, d) => s + d.valorMes, 0)
  const list = full ? dividas : dividas

  return (
    <div style={{ background: '#1a1d2e', border: '1px solid #2d3148', borderRadius: 14, padding: '20px 24px' }}>
      <div style={{ fontSize: 13, color: '#64748b', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4, fontWeight: 600 }}>
        Dívidas & Parcelas
      </div>
      <div style={{ fontSize: 22, fontWeight: 700, color: '#f43f5e', marginBottom: 16 }}>
        {fmt(total)}<span style={{ fontSize: 13, color: '#64748b', fontWeight: 400 }}>/mês</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {list.map(d => {
          const pct = (d.valorMes / total) * 100
          return (
            <div key={d.nome}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 13, color: '#cbd5e1' }}>{d.nome}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: d.cor }}>{fmt(d.valorMes)}</span>
              </div>
              <div style={{ height: 4, borderRadius: 2, background: '#2d3148', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${pct}%`, background: d.cor, borderRadius: 2, transition: 'width 0.6s ease' }} />
              </div>
            </div>
          )
        })}
      </div>

      {full && (
        <div style={{ marginTop: 20, padding: '14px 16px', background: '#0f1117', borderRadius: 10, border: '1px solid #2d3148' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 14, color: '#94a3b8' }}>Total dívidas/mês</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#f43f5e' }}>{fmt(total)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
            <span style={{ fontSize: 14, color: '#94a3b8' }}>% do salário base</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#f59e0b' }}>
              {((total / 16395) * 100).toFixed(1)}%
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
