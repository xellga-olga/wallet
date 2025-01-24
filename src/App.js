import './App.scss'
import {BalanceCard} from "./components/BalanceCard/BalanceCard";
import {Actions} from "./components/Actions/Actions";
import {Statistic} from "./components/Statistic/Statistic";

function App() {
  return (
      <div className='app'>
          <BalanceCard />
          <Actions />
          <Statistic />
      </div>
  );
}

export default App;
