// import logo from './logo.svg';
import '../App.css';
import React, { useEffect , useState } from 'react';

const Cov = () => {
    const[data, setData]= useState([]);
    const[date, setDate]= useState([])
    const getDatacovid = async () => {
try {
  const res=await fetch('https://api.covidactnow.org/v2/countries.json?apiKey=0f3cf27e1dc84a8c9de97e5347b6e9d4')
  const dataa =await res.json(); 
  console.log(dataa[0].lastUpdatedDate);
  setData(dataa[0].actuals)
  setDate(dataa[0].lastUpdatedDate)

} catch (err) {
  console.log(err)
  
}

}

  useEffect(()=>{
  getDatacovid();
  },[]);

  return (
    <div className="App">
      <h1 > Covid-19 USA STATS</h1>
      <h5 className="Date"> Last update <span>{date}</span></h5>
      
              <div className="covidData">
        <h2>Total cases</h2> <span>{data.cases}</span>
      </div>
      <div className="covidData">
        <h2>Total deaths</h2> <span>{data.deaths}</span>
      </div>
      <div className="covidData">
        <h2>New cases</h2> <span>{data.newCases}</span>
      </div>
      <div className="covidData">
        <h2>New deaths</h2> <span>{data.newDeaths}</span>
      </div>
      
     
     </div>
  );
}

export default Cov;
