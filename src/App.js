import React, { useEffect, useState } from 'react';
import { Card } from './components/card';
import { CardForm } from './components/cardForm';
import { Navbar } from './components/navbar';

function App() {
  const [times, setTimes] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [newTime, setNewTime] = useState(false);

  const handleNewTime = () => {
    setNewTime(true);
  }

  const handleClean = () => {
    localStorage.removeItem('times');
    setTimes([]);
    setTotalTime(0);
    setNewTime(false);
  }

  useEffect(() => {
    if (times.length > 0) {
      localStorage.setItem('times', JSON.stringify(times));
    }

    const total = times.reduce((acu, time) => acu + Number(time.time), 0);
    setTotalTime(total);
  }, [times]);

  useEffect(() => {
    const timeSaved = localStorage.getItem('times');
    if (timeSaved) {
      setTimes(JSON.parse(timeSaved));
    }
  }, []);

  const handleRemove = (_id) => {
    const timeFiltered = times.filter(time => time._id !== _id);
    localStorage.setItem('times', JSON.stringify(timeFiltered));
    setTimes(timeFiltered);
  }

  return (
    <div className="container">
      <Navbar totalTime={ totalTime } handleNewTime={ handleNewTime } handleClean={ handleClean }/>

      {
        newTime && <CardForm setNewTime={ setNewTime } setTimes={ setTimes }/>
      }

      {
        times.map(time => <Card key={ time._id } { ...time } handleRemove={ handleRemove }/>)
      }

      {
        times.length === 0 && !newTime && <div className="alert alert-info animate__animated animate__bounceIn" role="alert">
          Sin tiempos registrados
        </div>
      }
    </div>
  );
}

export default App;
