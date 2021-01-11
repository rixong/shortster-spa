import { useState } from 'react';

const Form = (props) => {

  const defaultFormInput = { longURL: '', customURL: '' };
  const [formInput, setFormInput] = useState(defaultFormInput);
  const [shortURL, setShortURL] = useState(null);

  const onHandleChange = (e) => {
    const name = e.target.name
    setFormInput({ ...formInput, [name]: e.target.value })
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: 'POST',
      body: JSON.stringify(formInput)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setShortURL(data.shortURL);
      })
      .catch(e => {
        console.log(e);
      })
  }
  return (
    <div className="inputForm">
      <div >
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
      <div>
        {shortURL ?
          <p >You're short URL: <span>{shortURL}</span></p>
          : null
        }
      </div>
    </div>
  )
}
export default Form;