import React, { Component } from 'react';
//import handleDisplay from './components/buttons'
//import {addFunc} from './mathFunc'

import './App.css';



class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForNewValue: false
    }
  }

  // additionFunction = (num1, num2) => {
  //   //console.log(num1, num2)
  //   let num = this.state.displayValue;
  //   let nums = this.state.previousValue;
  //   console.log(num, nums)
  //   console.log(addFunc(num, nums))
  //   const newNum = addFunc(num,nums)

  //   this.setState({
  //     displayValue: newNum,
  //     previousValue: nums,
  //     operation: "+",
  //     waitingForNewValue: false
  //   })

  // }

  // handleAdd = e => {
  //   console.log("clicked")
  //   console.log(e)
  //   const sum = this.state.displayValue + this.state.previousValue
  //   this.state.displayValue = sum;

  // }

  // buttonClick = e => {
  //   console.log(e.target)
  //   console.log(e.currentTarget.value)
  //   console.log(e.target.value)
  //  const num = parseFloat(this.state.displayValue) 
  //  console.log(num)
  //  const value = this.state.displayValue 
  //   console.log(typeof num)
  //   // if (num === '0' || num === '1' || num === '2' || num === '3' || num === '4' || num === '5' || num === '6' || num === '7' || num === '8' || num === '9'){
  //   //   console.log(parseFloat(num))
  //   //   console.log(typeof num)
  //   // }
  //  console.log(num)
  //  console.log(typeof num)
  //   this.setState = value


  // }
  numberClick = (e) => {
    let displayValue = this.state.displayValue
    let buttonValue = e.target.value;
    let nDisplay = displayValue + buttonValue

    // console.log(displayValue)
    // console.log(buttonValue)
    //console.log(typeof nDisplay.charAt(0))
    // nDisplay.substring(1)
    // this.setState({
    //   displayValue: nDisplay
    // })

    if (nDisplay.charAt(0) === '0') {
      nDisplay = nDisplay.substring(1);
      // console.log('hehehe')
      // console.log('this display ',displayValue)
      // console.log('nDisplay', nDisplay)
      this.setState({
        displayValue: nDisplay
      })
    }
    else this.setState({
      displayValue: nDisplay,
    })

  }

  operationClick = e => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.value)
    const operationClick = e.target.value;

    console.log('-------------')
    console.log(e.currentTarget)
    console.log(e.currentTarget.value)

    if (operationClick === 'AC') {
      this.setState({
        displayValue: '0'
      })
    }
  }



  render() {
    return (
      <>
        <div className='holder'>
          <div className='calculator'>
            <div className='row'>

              <div className='col-12 inputview'>{this.state.displayValue}</div>

              <button className='button col-3' onClick={this.operationClick} value='AC'>AC</button>
              <button className='button col-3' onClick={this.operationClick} value='%'>%</button>
              <button className='button col-3' onClick={this.operationClick} value='±'>±</button>
              <button className='button col-3 orange' onClick={this.operationClick} value='÷'>÷</button>

              <button className='button col-3' onClick={this.numberClick} value='7'>7</button>
              <button className='button col-3' onClick={this.numberClick} value='8'>8</button>
              <button className='button col-3' onClick={this.numberClick} value='9'>9</button>
              <button className='button col-3 orange' onClick={this.operationClick} value='x'>x</button>

              <button className='button col-3' onClick={this.numberClick} value='4'>4</button>
              <button className='button col-3' onClick={this.numberClick} value='5'>5</button>
              <button className='button col-3' onClick={this.numberClick} value='6'>6</button>
              <button className='button col-3 orange' onClick={this.operationClick} value='-'>-</button>

              <button className='button col-3' onClick={this.numberClick} value='1'>1</button>
              <button className='button col-3' onClick={this.numberClick} value='2'>2</button>
              <button className='button col-3' onClick={this.numberClick} value='3'>3</button>
              <button className='button col-3 orange' onClick={this.operationClick} value='+'>+</button>

              <button className='button col-6' onClick={this.numberClick} value='0'>0</button>
              <button className='button col-3' onClick={this.operationClick} value='.'>.</button>
              <button className='button col-3 orange' onClick={this.operationClick} value='='>=</button>

            </div>
          </div>



        </div>
      </>


    );
  }
}

export default App;
