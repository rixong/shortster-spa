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
        if (data.error) {
          props.setNotification(data.error);
        }
        setShortURL(data.shortURL);
      })
      .catch(e => {
        console.log(e);
      })
  }
  return (
    <div className="inputForm">
      <form onSubmit={(e) => onHandleSubmit(e)}>
        <label htmlFor="longURL">Enter original URL</label>
        <br></br>
        <input
          type="text"
          name="longURL"
          id="longURL"
          value={formInput.longURL}
          onChange={onHandleChange}
          onFocus={props.clearNotification}
        ></input>
        <label htmlFor="customURL">Enter your own short URL (optional)</label>
        <input
          type="text"
          name="customURL"
          id="customURL"
          value={formInput.customURL}
          onChange={onHandleChange}
          onFocus={props.clearNotification}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <div>
        {shortURL ?
          <p >You're shortened URL: <span>{shortURL}</span></p>
          : null
        }
      </div>
    </div>
  )
}
export default Form;