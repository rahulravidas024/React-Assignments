function App() {
  return (
    <div className="App">

      <textarea className="textArea" id="textAreaElement"></textarea>
      <button className="submitButton" type="submit" onClick={submit}>Submit</button>
      <p className="paragraph" id="paragraphElement"></p>
    </div>
  );
}

function submit(){
  let bio = document.getElementById('textAreaElement').value;
  bio = bio.toUpperCase();
  document.getElementById('paragraphElement').innerHTML = bio
  console.log(bio)
}

export default App;
