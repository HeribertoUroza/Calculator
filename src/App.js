import React, { Component } from 'react';
//import handleDisplay from './components/buttons'
//import {addFunc} from './mathFunc'

import './App.css';

class App extends Component {
  constructor(props){

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

    buttonClick = e => {
      console.log(e.currentTarget.value)
     const num = parseFloat(this.state.displayValue) 
     console.log(num)
    // const value = this.state.displayValue 
      console.log(typeof num)
      if (num === '0' || num === '1' || num === '2' || num === '3' || num === '4' || num === '5' || num === '6' || num === '7' || num === '8' || num === '9'){
        console.log(parseFloat(num))
        console.log(typeof num)
      }
     console.log(num)
     console.log(typeof num)
      this.setState ({
        displayValue: num,
      })

      
    }


  render() {
    return (
      <>
        <div className='holder'>
          <div className='calculator'>
            <div className='row'>

              <div className='col-12 inputview'>{this.state.displayValue}</div>

              <button className='button col-3' onClick={this.buttonClick}>AC</button>
              <button className='button col-3' onClick={this.buttonClick}>%</button>
              <button className='button col-3' onClick={this.buttonClick}>±</button>
              <button className='button col-3 orange' onClick={this.buttonClick}>÷</button>

              <button className='button col-3' onClick={this.buttonClick}>7</button>
              <button className='button col-3' onClick={this.buttonClick}>8</button>
              <button className='button col-3' onClick={this.buttonClick}>9</button>
              <button className='button col-3 orange' onClick={this.buttonClick}>x</button>

              <button className='button col-3' onClick={this.buttonClick}>4</button>
              <button className='button col-3' onClick={this.buttonClick}>5</button>
              <button className='button col-3' onClick={this.buttonClick}>6</button>
              <button className='button col-3 orange' onClick={this.buttonClick}>-</button>

              <button className='button col-3' onClick={this.buttonClick}>1</button>
              <button className='button col-3' onClick={this.buttonClick}>2</button>
              <button className='button col-3' onClick={this.buttonClick}>3</button>
              <button className='button col-3 orange' onClick={this.buttonClick}>+</button>

              <button className='button col-6' onClick={this.buttonClick}>0</button>
              <button className='button col-3' onClick={this.buttonClick}>.</button>
              <button className='button col-3 orange' onClick={this.buttonClick}>=</button>

            </div>
          </div>
        
        
        
        </div>
      </>
  

    );
  }
}

export default App;
