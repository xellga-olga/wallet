import './App.scss'
import {BalanceCard} from "./components/BalanceCard/BalanceCard";
import {Actions} from "./components/Actions/Actions";
import {Statistic} from "./components/Statistic/Statistic";
import {Menu} from "./components/Menu/Menu";

function App() {
  return (
      <div className='app'>
          <BalanceCard />
          <Actions />
          <Statistic />
          <Menu />
      </div>
  );
}

export default App;
