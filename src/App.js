
function App() {
  return (

    <main className="App">
      <h1>Shortster</h1>
      <div>
        <form>
          <label htmlFor="longURL">Enter original URL</label>
          <input type="text" name="longURL" id="longURL"></input>
          <label htmlFor="shortURL">Enter custom URL (optional)</label>
          <input type="text" name="shortURL" id="shortURL"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>

  );
}

export default App;
