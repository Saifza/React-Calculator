//import logo from './logo.svg';
//import './App.css';

import React from "react"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstNumber: "",
      secondNumber: "",
      addition: "",
      subtraction: "",
      multiplication: "",
      division: ""


    }

    this.firstNumber = this.firstNumber.bind(this)
    this.secondNumber = this.secondNumber.bind(this)
    this.myAdd = this.myAdd.bind(this)
    this.mySub = this.mySub.bind(this)
    this.myMul = this.myMul.bind(this)
    this.myDiv = this.myDiv.bind(this)
  }

  firstNumber(event) {
    this.setState({
      firstNumber
        : event.target.value
    })

  }

  secondNumber(event) {
    this.setState({
      secondNumber
        : event.target.value
    })

  }



  myAdd() {
    this.setState({
      addition
        : (parseFloat(this.state.firstNumber) + parseFloat(this.state.secondNumber))
    })
  }

  mySub() {
    this.setState({
      subtraction
        : (parseFloat(this.state.firstNumber) - parseFloat(this.state.secondNumber))
    })
  }
  myMul() {
    this.setState({
      multiplication
        : (parseFloat(this.state.firstNumber) * parseFloat(this.state.secondNumber))
    })
  }

  myDiv() {
    this.setState({
      division
        : (parseFloat(this.state.firstNumber) / parseFloat(this.state.secondNumber))
    })
  }


  render() {
    return (
      <div className="box">
        <h1 className="headline">Calculator</h1>
        <form>
          <input
            type="number"
            name="firstNumber"
            value={this.state.firstNumber}
            onChange={this.firstNumber}
            placeholder="First Number"
          />
          <br />

          <input
            type="number"
            name="secondNumber"
            value={this.state.secondNumber}
            onChange={this.secondNumber}
            placeholder="Second Number"
          />
        </form>

        <br />
        {/* <p >{this.state.firstNumber} </p>
            <p >{this.state.secondNumber} </p>  */}

        <span id="add">
          <button onClick={this.myAdd}  > Add</button>
          <p >Result of Addition: {parseFloat(this.state.addition)}  </p>
        </span>

        <span id="sub">
          <button onClick={this.mySub}  > Subtract</button>
          <p>Result of Subtraction: {parseFloat(this.state.subtraction)}  </p>
        </span>

        <span id="mul">
          <button onClick={this.myMul}  > Multiply</button>
          <p>Result of Multiplication: {parseFloat(this.state.multiplication)}  </p>
        </span>

        <span id="divide">
          <button onClick={this.myDiv}  > Divide</button>
          <p >Result of Division: {parseFloat(this.state.division)}  </p>
        </span>








      </div>
    )
  }
}
export default App
