import { useState, useEffect } from "react";
import Form from './Form';
import Stats from './Stats';

function App() {

  const [URLObj, setURLObj] = useState('');
  const [showStats, setShowStats] = useState(false)

useEffect(
  () => {
    setShowStats(false);
    const path = window.location.pathname
    console.log(path)
    if (path.slice(-6) === '/stats') {
      fetch(`http://localhost:3000${path}`)
        .then(res => res.json())
        .then(data => setURLObj(data))
        .catch(e => console.log(e))
      setShowStats(true);
    } else if (path.length > 1) {
      console.log('here')
      fetch(`http://localhost:3000${path}`)
        .then(res => res.json())
        .then(data => {
          console.log(data.longURL)
          window.location.assign(`https://${data.longURL}`)
        })
        .catch((e) => console.log(e))
    }
  }, []
)

return (
  <div className="container">
    <h1>Shortster</h1>
    <div className="container">
      {showStats ?
        <Stats URLObj={URLObj} />
        :
        <Form />
      }
    </div>
  </div>
);
}
export default App;
