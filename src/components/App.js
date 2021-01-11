import { useState, useEffect } from "react";
import Form from './Form';
import Stats from './Stats';

function App() {

  const [URLObj, setURLObj] = useState('');
  const [showStats, setShowStats] = useState(false)
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('Hello Error');

// retrieve path and route to proper endpoint
useEffect(
  () => {
    setShowStats(false);
    setError(false);
    setMessage('');
    const path = window.location.pathname
    console.log(path)
    if (path.length < 2){
      return
    }
    fetch(`http://localhost:3000${path}`)
      .then(res => res.json())
      .then(data => {
        if(data.error){
          setError(true);
          setMessage(data.error);
        } else {
          setURLObj(data);
          if (path.slice(-6) === '/stats') {
            setShowStats(true);
          } else {
            window.location.assign(data.longURL)
          }
        }
      })
      .catch(e => console.log(e))
  }, []
)

return (
  <div className="container">
    <h1>Shortster</h1>
    <div className="">
      {showStats ?
        <Stats URLObj={URLObj} />
        :
        <Form />
      }
    </div>
    {error ?
    <div className="notification">
      <p>{message}</p>
    </div>
    : null 
    }
  </div>
);
}
export default App;
