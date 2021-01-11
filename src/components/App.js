import { useState, useEffect } from "react";

function App() {

  const defaultFormInput = { longURL: '', customURL: '' };
  const [formInput, setFormInput] = useState(defaultFormInput);

  useEffect(
    () => {
      const path = window.location.pathname.slice(1);
      console.log(path)
      if (window.location.pathname.slice(1)) {
        fetch(`http://localhost:3000/${path}`, {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        })
          .then(res => res.text())
          .then(data => window.history.pushState({}, '', data))
          .catch(console.log('error'))
      }
    }, []
  )

  const onHandleChange = (e) => {
    const name = e.target.name
    setFormInput({ ...formInput, [name]: e.target.value })
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // console.log(formInput);
    fetch('http://localhost:3000', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: 'POST',
      body: JSON.stringify(formInput)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (

    <main className="App">
      <h1>Shortster</h1>
      <div>
        <form onSubmit={(e) => onHandleSubmit(e)}>
          <label htmlFor="longURL">Enter original URL</label>
          <input
            type="text"
            name="longURL"
            id="longURL"
            value={formInput.longURL}
            onChange={onHandleChange}
          ></input>
          <label htmlFor="customURL">Enter custom URL (optional)</label>
          <input
            type="text"
            name="customURL"
            id="customURL"
            value={formInput.customURL}
            onChange={onHandleChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}

export default App;
