
import { useEffect } from 'react';
import './App.css';
import WebLayout from './components/Layout';

function App() {
  useEffect(()=>{window.scrollTo(0, 0);},[])
  return (
    <div className="App">
      <WebLayout />
    </div>
  );
}

export default App;
