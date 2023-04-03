// import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home'
let data= require('./data/db.json')
function App() {
  return (

    <>
    <Home data={data}/>
    
    </>
  );
}

export default App;
