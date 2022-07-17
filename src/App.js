import React, { useEffect } from "react";
import Quote from "./Quote";
function App() {

  useEffect(()=>{
    getQuote();
  })

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fda4f5d54dmsh202f703a9d1e7b2p10f3a0jsn191b31350837',
      'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
    }
  };
  
  const getQuote = async () =>{

      const api = await fetch('https://famous-quotes4.p.rapidapi.com/random?category=all&count=2', options);
      const data = await api.json();

      console.log(data);
  }
  return (
    <div className="flex flex-col items-center pt-36 bg-yellow-100 h-screen">
      <Quote/>
    </div>
  );
}

export default App;
