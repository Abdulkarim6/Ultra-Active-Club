// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Contain from './components/container/Contain';

function App() {
//  const [data, setData] = useState([]);
//  console.log(data);
//   useEffect(() => {
//     fetch('Data.json')
//       .then(res => res.json())
//       .then(data => setData(data))
//   }, [])

  return (
    <div>
      {/* {
        data.map(dt => console.log(dt.picture))
      } */}
      <Contain></Contain>
      
    </div>
  );
}

export default App;
