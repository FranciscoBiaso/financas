import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine
} from 'recharts'
import { planejamentoMensal } from '../data/planningData'

const fmt = (v: number) => {
  if (v >= 1_000_000) return `R$ ${(v / 1_000_000).toFixed(1)}M`
  if (v >= 1_000) return `R$ ${(v / 1_000).toFixed(0)}k`
  return `R$ ${v.toFixed(0)}`
}

const fmtFull = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

interface Props { meses: number }

export default function CapitalGrowth({ meses }: Props) {
  const data = planejamentoMensal.slice(0, meses)
  const hoje = new Date()
  const labelAtual = `${['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'][hoje.getMonth()]}/${String(hoje.getFullYear()).slice(2)}`

  return (
    <div style={{ background: '#1a1d2e', border: '1px solid #2d3148', borderRadius: 14, padding: '20px 24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 13, color: '#64748b', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600, marginBottom: 4 }}>
            Crescimento do Capital
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#06b6d4' }}>
            {meses} meses de projeção
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 12, color: '#64748b' }}>Projeção final</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#10b981' }}>
            {fmtFull(data[data.length - 1]?.capitalAcumulado ?? 0)}
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="gradCapital" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradFat" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#2d3148" />
          <XAxis dataKey="label" tick={{ fill: '#475569', fontSize: 11 }}
            tickFormatter={(v, i) => i % (meses > 24 ? 6 : 3) === 0 ? v : ''}
          />
          <YAxis tick={{ fill: '#475569', fontSize: 11 }} tickFormatter={fmt} width={65} />
          <Tooltip
            formatter={(v, name) => [fmtFull(Number(v)), name === 'capitalAcumulado' ? 'Capital Acumulado' : 'Faturamento']}
            contentStyle={{ background: '#1e2130', border: '1px solid #374151', borderRadius: 8, fontSize: 13 }}
            labelStyle={{ color: '#e2e8f0' }}
          />
          <ReferenceLine x={labelAtual} stroke="#f59e0b" strokeDasharray="4 2"
            label={{ value: 'Hoje', fill: '#f59e0b', fontSize: 11 }} />
          <Area type="monotone" dataKey="capitalAcumulado" stroke="#06b6d4" strokeWidth={2}
            fill="url(#gradCapital)" dot={false} />
          <Area type="monotone" dataKey="faturamento" stroke="#6366f1" strokeWidth={1.5}
            fill="url(#gradFat)" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
      <div style={{ display: 'flex', gap: 20, marginTop: 12 }}>
        {[['#06b6d4', 'Capital Acumulado'], ['#6366f1', 'Faturamento Mensal']].map(([cor, label]) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 24, height: 3, borderRadius: 2, background: cor }} />
            <span style={{ fontSize: 12, color: '#64748b' }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
