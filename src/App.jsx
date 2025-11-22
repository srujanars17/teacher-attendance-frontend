import React, {useEffect, useState} from 'react';
import { getSummary, getDetails, getHistory, simulateScan } from './api';
import SummaryCards from './components/SummaryCards';
import DetailsTable from './components/DetailsTable';
import TrendChart from './components/TrendChart';

export default function App(){
  const [summary, setSummary] = useState({total:0,present:0,absent:0,on_leave:0});
  const [details, setDetails] = useState([]);
  const [history, setHistory] = useState([]);
  const [simId, setSimId] = useState('');

  const load = async () => {
    try {
      setSummary(await getSummary());
      setDetails(await getDetails());
      setHistory(await getHistory(14));
    } catch (e){ console.error(e); }
  };

  useEffect(()=>{ load(); const t = setInterval(load, 30*1000); return ()=>clearInterval(t); }, []);

  async function onSim(){ if(!simId) return alert('Enter teacher id e.g. T1001'); await simulateScan(simId); await load(); alert('Simulated'); }

  return (
    <div className="app">
      <header><h1>Teacher Attendance Dashboard</h1></header>
      <SummaryCards summary={summary} />
      <section style={{margin:'8px 0'}}>
        <input placeholder="Simulate teacher e.g. T1001" value={simId} onChange={e=>setSimId(e.target.value)} />
        <button onClick={onSim}>Simulate Scan</button>
      </section>
      <div className="grid">
        <div className="card"><h3>Trend (14 days)</h3><TrendChart data={history} /></div>
        <div className="card"><h3>Details</h3><DetailsTable rows={details} /></div>
      </div>
    </div>
  );
}
