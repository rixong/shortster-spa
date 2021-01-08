import { useState } from "react";

function App() {
  const defaultFormInput = { longURL: '', shortURL: '' };
  const [formInput, setFormInput] = useState(defaultFormInput);
  const onHandleChange = (e) => {
    const name = e.target.name
    setFormInput({ ...formInput, [name]: e.target.value })
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(formInput);
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
          <label htmlFor="shortURL">Enter custom URL (optional)</label>
          <input
            type="text"
            name="shortURL"
            id="shortURL"
            value={formInput.shortURL}
            onChange={onHandleChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>

  );
}

export default App;
