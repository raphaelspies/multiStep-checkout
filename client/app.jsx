
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      whichScreen: "EnterPaymentInfo"
    }
  }

  render() {
    if (this.state.whichScreen === "CreateAccount") {
      return (
        <div>
          <CreateAcount />
        </div>
      )
    } else if (this.state.whichScreen === "EnterShippingInfo") {
      return (
        <div>
          <EnterShippingInfo />
        </div>
      )
    } else if (this.state.whichScreen === "EnterPaymentInfo") {
      return (
        <div>
          <EnterPaymentInfo />
        </div>
      )
    }
  }
}
//Form1
var CreateAcount = () => {
  var handleSubmit = (event) => {
    console.log('create account clicked!')
    event.preventDefault()
  }
  return (
    <div id="createAccount">
      <form>
        <h2> Create Account: </h2>
        <label htmlFor="createName" className="label">Name:</label>
        <input id="createName" className ="inputField" placeholder="Enter name"></input> <br></br>
        <label htmlFor="createEmail" className="label">Email: </label>
        <input id="createEmail" className ="inputField" placeholder="Enter email address"></input> <br></br>
        <label htmlFor="createEmail" className="label">Password: </label>
        <input id="createPassword" className ="inputField" placeholder="Enter password"></input> <br></br><br></br>
        <button id="createAccountButton" onClick={handleSubmit}>Submit</button> <br></br>
      </form>
    </div>
  )
}

//Form2
var EnterShippingInfo = () => {
  var handleSubmit = (event) => {
    console.log('shipping info clicked!')
    event.preventDefault()
  }
  return (
    <div id="enterShippingInfo">
      <form>
        <h2> Enter Shipping Information: </h2>
        <label htmlFor="address1" className="label">Address (line 1):</label>
        <input id="address1" className ="inputField" placeholder="Enter Address, line 1"></input> <br></br>

        <label htmlFor="address2" className="label">Address (line 2): </label>
        <input id="address2" className ="inputField" placeholder="Enter Address, line 2"></input> <br></br>

        <label htmlFor="enterCity" className="label">City: </label>
        <input id="enterCity" className ="inputField" placeholder="Enter city"></input> <br></br>

        <label htmlFor="enterState" className="label">State: </label>
        <input id="enterState" className ="inputField" placeholder="Enter state"></input> <br></br>

        <label htmlFor="enterZip" className="label">Zip Code: </label>
        <input id="enterZip" className ="inputField" placeholder="Enter zip code"></input> <br></br> <br></br>

        <button id="createAccountButton" onClick={handleSubmit}>Submit</button> <br></br>
      </form>
    </div>
  )
}

//Form3
var EnterPaymentInfo = () => {
  var handleSubmit = (event) => {
    console.log('Submit Payment clicked!')
    event.preventDefault()
  }
  return (
    <div id="enterPaymentInfo">
      <form>
        <h2> Enter Payment Info: </h2>
        <label htmlFor="ccNo" className="label">Enter CC Number:</label>
        <input id="ccNo" className ="inputField" placeholder="Enter Credit Card Number"></input> <br></br>

        <label htmlFor="ccExpiry" className="label">Enter Expiration: </label>
        <input id="ccExpiry" className ="inputField" placeholder="MM/YYYY"></input> <br></br>

        <label htmlFor="enterCVV" className="label">CVV: </label>
        <input id="enterCVV" className ="inputField" placeholder="CVV"></input> <br></br>

        <label htmlFor="billingZip" className="label">Zip Code: </label>
        <input id="billingZip" className ="inputField" placeholder="Enter zip code"></input> <br></br> <br></br>

        <button id="submitPaymentButton" onClick={handleSubmit}>Submit Payment</button> <br></br>
      </form>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))