import { useState } from 'react'
import KpiCards from './KpiCards'
import ExpensesChart from './ExpensesChart'
import CapitalGrowth from './CapitalGrowth'
import MonthlyTable from './MonthlyTable'
import DebtTracker from './DebtTracker'
import { planejamentoMensal } from '../data/planningData'

const badge = (cor: string): React.CSSProperties => ({
  background: cor + '22', color: cor, border: `1px solid ${cor}44`,
  borderRadius: 20, padding: '3px 12px', fontSize: 12, fontWeight: 600,
})
const navBtn = (active: boolean): React.CSSProperties => ({
  background: active ? '#6366f1' : 'transparent',
  color: active ? '#fff' : '#94a3b8',
  border: active ? 'none' : '1px solid #2d3148',
  borderRadius: 8, padding: '7px 16px', fontSize: 13, fontWeight: 500,
  cursor: 'pointer', transition: 'all 0.2s',
})

type Tab = 'visao-geral' | 'planejamento' | 'dividas'

const mesAtual = new Date().getMonth() + 1
const anoAtual = new Date().getFullYear()
const mesData = planejamentoMensal.find(m => m.mes === mesAtual && m.ano === anoAtual)

export default function Dashboard() {
  const [tab, setTab] = useState<Tab>('visao-geral')

  return (
    <div style={{ minHeight: '100vh', background: '#0f1117', paddingBottom: 40 }}>
      <header style={{ background: 'linear-gradient(135deg,#1e2130,#161824)', borderBottom: '1px solid #2d3148', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: '-0.5px' }}>💼 Painel Financeiro</span>
          <span style={badge('#6366f1')}>FITec</span>
          <span style={badge('#10b981')}>Mirakulo</span>
        </div>
        <nav style={{ display: 'flex', gap: 8 }}>
          {(['visao-geral', 'planejamento', 'dividas'] as Tab[]).map(t => (
            <button key={t} style={navBtn(tab === t)} onClick={() => setTab(t)}>
              {t === 'visao-geral' ? 'Visão Geral' : t === 'planejamento' ? 'Planejamento' : 'Dívidas'}
            </button>
          ))}
        </nav>
      </header>

      <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        {tab === 'visao-geral' && (
          <>
            <KpiCards mesData={mesData} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <ExpensesChart />
              <DebtTracker />
            </div>
            <CapitalGrowth meses={12} />
          </>
        )}
        {tab === 'planejamento' && (
          <>
            <CapitalGrowth meses={89} />
            <MonthlyTable />
          </>
        )}
        {tab === 'dividas' && <DebtTracker full />}
      </div>
    </div>
  )
}
