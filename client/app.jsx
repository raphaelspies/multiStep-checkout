
class App extends React.Component {
  constructor() {
    super(props)
    this.state = {
      whichScreen: "CreateAccount"
    }
  }

  render() {
    if (this.state.whichScreen === "CreateAccount") {
      return (
        <div>
          <CreateAcount />
        </div>
      )
    }
  }
}

var CreateAcount = () => {
  var handleSubmit = (event) => {
    console.log('create account clicked!')
    event.preventDefault()
  }
  return (
    <div id="createAccount">
      <form>
        Creat Account: <br></br>
        Name: &nbsp; &nbsp; &nbsp; &nbsp;<input id="createName" placeholder="Enter name"></input> <br></br>
        Email: &nbsp; &nbsp;&nbsp; &nbsp; <input id="createEmail" placeholder="Enter email addres"></input> <br></br>
        Password:  <input id="createPassword" placeholder="Enter password"></input> <br></br>
        <button id="createAccountButton" onClick={handleSubmit}>Submit</button> <br></br>
      </form>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))