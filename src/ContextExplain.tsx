import { createContext, useContext, useState } from 'react';

const CyclesContext = createContext({} as any);

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext);

  return (
    <>
      <h1>
        NewCycleform: {activeCycle}{' '}
        <button onClick={() => setActiveCycle(2)}>Alterar</button>
      </h1>
    </>
  );
}

function Countdown() {
  const { activeCycle } = useContext(CyclesContext);

  return <h1>Countdown: {activeCycle}</h1>;
}

export function ContextExplain() {
  const [activeCycle, setActiveCycle] = useState(0);

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <h1>Home</h1>
      <NewCycleForm />
      <Countdown />
    </CyclesContext.Provider>
  );
}
