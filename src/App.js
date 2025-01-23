import './App.scss'
import {BalanceCard} from "./components/BalanceCard/BalanceCard";
import {Actions} from "./components/Actions/Actions";

function App() {
  return (
      <div className='app'>
          <BalanceCard />
          <Actions />
      </div>
  );
}

export default App;
