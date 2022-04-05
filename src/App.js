import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Dashboards from './components/Dashboards/Dashboards';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='reviews' element={<Reviews></Reviews>}></Route>
        <Route path='dashboards' element={<Dashboards></Dashboards>}></Route>
      </Routes>
    </div>
  );
}

export default App;
