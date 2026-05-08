import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { despesas, coresCategorias } from '../data/planningData'

const fmt = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

// Agrupa por categoria
const categorias = despesas.reduce<Record<string, number>>((acc, d) => {
  acc[d.categoria] = (acc[d.categoria] ?? 0) + d.valor
  return acc
}, {})

const data = Object.entries(categorias)
  .map(([name, value]) => ({ name, value }))
  .sort((a, b) => b.value - a.value)

const total = data.reduce((s, d) => s + d.value, 0)

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  if (percent < 0.05) return null
  const RADIAN = Math.PI / 180
  const r = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + r * Math.cos(-midAngle * RADIAN)
  const y = cy + r * Math.sin(-midAngle * RADIAN)
  return (
    <text x={x} y={y} fill="#fff" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={600}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export default function ExpensesChart() {
  return (
    <div style={{ background: '#1a1d2e', border: '1px solid #2d3148', borderRadius: 14, padding: '20px 24px' }}>
      <div style={{ fontSize: 13, color: '#64748b', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4, fontWeight: 600 }}>
        Despesas por Categoria
      </div>
      <div style={{ fontSize: 22, fontWeight: 700, color: '#ef4444', marginBottom: 16 }}>
        {fmt(total)}<span style={{ fontSize: 13, color: '#64748b', fontWeight: 400 }}>/mês</span>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={55} outerRadius={100}
            paddingAngle={2} dataKey="value" labelLine={false} label={CustomLabel}>
            {data.map((_, i) => (
              <Cell key={i} fill={coresCategorias[data[i].name] ?? '#94a3b8'} />
            ))}
          </Pie>
          <Tooltip
            formatter={(v) => fmt(Number(v))}
            contentStyle={{ background: '#1e2130', border: '1px solid #374151', borderRadius: 8, fontSize: 13 }}
            labelStyle={{ color: '#e2e8f0' }}
          />
          <Legend
            formatter={(v) => <span style={{ color: '#94a3b8', fontSize: 12 }}>{v}</span>}
            iconSize={10} iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>

      <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {despesas.slice(0, 5).map(d => (
          <div key={d.desc} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: coresCategorias[d.categoria] }} />
              <span style={{ fontSize: 13, color: '#cbd5e1' }}>{d.desc}</span>
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0' }}>{fmt(d.valor)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
