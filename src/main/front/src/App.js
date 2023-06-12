import axios from 'axios';
import React, { useEffect, useState } from 'react';

import img1 from './image01.jpg';
import './App.css';

const App = () => {
  const [message, setMessage] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/hello')
    .then(res => { return res.json() })
    .then(function(data){ setMessage(data) });

    axios.get('/list').then(res => { setData(res.data) })
  }, []);

  return (
    <div className="App">
      <header>
        <img src={img1} style={{width:'200px'}} />
        <h1>스프링 부트/hello부터 받은 데이터 출력!!!!!123123</h1>
        <ul style={{listStyle: 'none'}}>
          {
            message.map((item, index) => <li key={index}>
              {item}
            </li>)
          }
        </ul>
        <hr/>
        <section>
          <h2>스프링 부트로 부터 받은 데이터 출력!!!!!123123</h2>
          {
            data.map((item, index) => <li key={index}>
              { item.name } : { item.addr } : { item.age }살
            </li>)
          }
        </section>
      </header>
    </div>
  );
};

export default App;