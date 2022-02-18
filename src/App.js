import logo from './logo.svg';
import './App.css';
import Card from './component/Card';

function App() {
  return (
    <div className="App" onScroll={() => console.log("Table Scrolled")}>
      <Card />
    </div>
  );
}

export default App;
