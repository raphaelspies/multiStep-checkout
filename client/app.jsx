
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      whichScreen: "EnterPaymentInfo"
    }
    this.loadNext = this.loadNext.bind(this);
  }

  loadNext(input) {
    console.log('app says changeState!')
    this.setState({
      whichScreen: input
    })
  }

  render() {
    if (this.state.whichScreen === "CreateAccount") {
      return (
        <div>
          <CreateAccount loadNext={this.loadNext}/>
        </div>
      )
    } else if (this.state.whichScreen === "EnterShippingInfo") {
      return (
        <div>
          <EnterShippingInfo loadNext={this.loadNext}/>
        </div>
      )
    } else if (this.state.whichScreen === "EnterPaymentInfo") {
      return (
        <div>
          <EnterPaymentInfo/>
        </div>
      )
    }
  }
} //end App


//Form1 NOTE -- password must be 15 or less characters long
class CreateAccount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.enterName = this.enterName.bind(this);
    this.enterEmail = this.enterEmail.bind(this);
    this.enterPassword = this.enterPassword.bind(this);
  }

  handleSubmit(event) {
    console.log('create account clicked!')
    event.preventDefault()
    axios.post(`/account/${this.state.name}/${this.state.email}/${this.state.password}`)
    .catch(err => {
      console.log(err);
    })
    .then((res)=> {
      console.log(res);
      this.props.loadNext("EnterShippingInfo");
    });
}


  enterName(event) {
    this.setState({ name: event.target.value })
    console.log(this.state.name)
  }

  enterEmail(event) {
    this.setState({ email: event.target.value })
    console.log(this.state.email)
  }

  enterPassword(event) {
    this.setState({ password: event.target.value })
    console.log(this.state.password)
  }

  render() {
    return (
      <div id="createAccount">
        <form>
          <h2> Create Account: </h2>
          <label htmlFor="createName" className="label">Name:</label>
          <input id="createName" className ="inputField" placeholder="Enter name" onChange={this.enterName}></input> <br></br>

          <label htmlFor="createEmail" className="label">Email: </label>
          <input id="createEmail" className ="inputField" placeholder="Enter email address" onChange={this.enterEmail}></input> <br></br>

          <label htmlFor="createEmail" className="label">Password: </label>
          <input id="createPassword" className ="inputField" placeholder="Enter password" onChange={this.enterPassword}></input> <br></br><br></br>

          <button id="createAccountButton" onClick={this.handleSubmit}>Submit</button> <br></br>

          {/* <button id="createAccountButton" onClick={this.handleSubmit} onSubmit={ () => this.props.loadNext("EnterShippingInfo")}>Submit</button> <br></br> */}

        </form>
      </div>
    )
  }
} //end Form1

//Form2
class EnterShippingInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address1: "",
      address2: "null",
      city: "",
      estate: "",
      zip: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.enterAddress1 = this.enterAddress1.bind(this);
    this.enterAddress2 = this.enterAddress2.bind(this);
    this.enterCity = this.enterCity.bind(this);
    this.enterState = this.enterState.bind(this);
    this.enterZip = this.enterZip.bind(this);
  }

  handleSubmit(event) {
    console.log('shipping info clicked!')
    event.preventDefault()
    axios.post(`/shipping/${this.state.address1}/${this.state.address2}/${this.state.city}/${this.state.estate}/${this.state.zip}`)
    .catch(err => {
      console.log(err);
    })
    .then(res => {
      console.log(res);
      this.props.loadNext("EnterPaymentInfo");
    })
  }

  enterAddress1(event) {
    this.setState({ address1: event.target.value })
    console.log(this.state.address1)
  }

  enterAddress2(event) {
    this.setState({ address2: event.target.value })
    console.log(this.state.address2)
  }

  enterCity(event) {
    this.setState({ city: event.target.value })
    console.log(this.state.city)
  }

  enterState(event) {
    if (this.state.estate.length <2) {
      this.setState({ estate: event.target.value })
      console.log(this.state.estate)
    } else {
      console.log("error: must be 2 characters or less")
    }
  }

  enterZip(event) {
    if (this.state.zip.length < 9) {
      this.setState({ zip: parseInt(event.target.value) })
      console.log(this.state.zip)
    } else {
      console.log("error: must be 9 digits or less")
    }
  }

  render() {
    return (
      <div id="enterShippingInfo">
        <form>
          <h2> Enter Shipping Information: </h2>
          <label htmlFor="address1" className="label">Address (line 1):</label>
          <input id="address1" className ="inputField" placeholder="Enter Address, line 1" onChange={this.enterAddress1}></input> <br></br>

          <label htmlFor="address2" className="label">Address (line 2): </label>
          <input id="address2" className ="inputField" placeholder="Enter Address, line 2" onChange={this.enterAddress2}></input> <br></br>

          <label htmlFor="enterCity" className="label">City: </label>
          <input id="enterCity" className ="inputField" placeholder="Enter city" onChange={this.enterCity}></input> <br></br>

          <label htmlFor="enterState" className="label">State: </label>
          <input id="enterState" className ="inputField" placeholder="Enter state" onChange={this.enterState}></input> <br></br>

          <label htmlFor="enterZip" className="label">Zip Code: </label>
          <input id="enterZip" className ="inputField" placeholder="Enter zip code" onChange={this.enterZip}></input> <br></br> <br></br>

          <button id="createAccountButton" onClick={this.handleSubmit}>Submit</button> <br></br>
        </form>
      </div>
    )
  }
} //end Form2

//Form3
class EnterPaymentInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ccNo: "",
      ccExpiry: "",
      CVV: "",
      billingZip: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.enterCCNo = this.enterCCNo.bind(this);
    this.enterCCExpiry = this.enterCCExpiry.bind(this);
    this.enterCVV = this.enterCVV.bind(this);
    this.enterBillingZip = this.enterBillingZip.bind(this);
  }

  handleSubmit(event) {
    console.log('Submit Payment clicked!')
    event.preventDefault()
  }

  enterCCNo(event) {
    this.setState({ ccNo: parseInt(event.target.value) })
    console.log(this.state.ccNo)
  }

  enterCCExpiry(event) {
    // if (this.state.ccExpiry.length < 6) {
      this.setState({ ccExpiry: parseInt(event.target.value) })
      console.log(this.state.ccExpiry)
    // } else {
    //   console.log("error: must be 6 digits or less")
    // }
  }

  enterCVV(event) {
    // if (this.state.CVV.length < 4) {
      this.setState({ CVV: parseInt(event.target.value) })
      console.log(this.state.CVV)
    // } else {
    //   console.log("error: must be 4 digits or less")
    // }
  }

  enterBillingZip(event) {
    // if (this.state.billingZip.length < 9) {
      this.setState({ billingZip: parseInt(event.target.value) })
      console.log(this.state.billingZip)
    // } else {
    //   console.log("error: must be 9 digits or less")
    // }
  }

  render() {
    return (
      <div id="enterPaymentInfo">
        <form>
          <h2> Enter Payment Info: </h2>
          <label htmlFor="ccNo" className="label">Enter CC Number:</label>
          <input id="ccNo" className ="inputField" placeholder="Enter Credit Card Number" onChange={this.enterCCNo}></input> <br></br>

          <label htmlFor="ccExpiry" className="label">Enter Expiration: </label>
          <input id="ccExpiry" className ="inputField" placeholder="MM/YYYY" onChange={this.enterCCExpiry}></input> <br></br>

          <label htmlFor="enterCVV" className="label">CVV: </label>
          <input id="enterCVV" className ="inputField" placeholder="CVV" onChange={this.enterCVV}></input> <br></br>

          <label htmlFor="billingZip" className="label">Zip Code: </label>
          <input id="billingZip" className ="inputField" placeholder="Enter zip code" onChange={this.enterBillingZip}></input> <br></br> <br></br>

          <button id="submitPaymentButton" onClick={this.handleSubmit}>Submit Payment</button> <br></br>
        </form>
      </div>
    )
  }
} // end Form3

ReactDOM.render(<App />, document.getElementById("root"))