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
  numberClick = (e) => {
    let displayValue = this.state.displayValue
    let buttonValue = e.target.value;
    let nDisplay = displayValue + buttonValue
    let operation = this.state.operation

    console.log(displayValue)
    console.log(buttonValue)

    if(operation === null){
      if (nDisplay.charAt(0) === '0') {
        nDisplay = nDisplay.substring(1);
        console.log('did it get here')
        this.setState({
          displayValue: nDisplay,
        })
      }
      else this.setState({
        displayValue: nDisplay,

      })


    }
    else if(operation !== null){
      console.log('not null',this.state)
      let previousValue = this.state.displayValue;
      let newDisplay = e.target.value
      this.setState({
        displayValue: newDisplay,
        previousValue: previousValue,
      }, () => {
        console.log('NOT NULL 2', this.state)
      })
    }
  }

  operationClick = e => {
    console.log(this.state)

    let operationClick = e.target.value;

    
    //AC
    if (operationClick === 'AC') {
      this.setState({
        displayValue: '0',
        previousValue: null,
        operation: null
      })
    }

    // ±
    if (operationClick === '±'){
      const displayValue = this.state.displayValue;
      let nDisplay = displayValue * -1; 
      console.log(nDisplay)

      this.setState({
        displayValue: nDisplay,
        operation: '±',
      })
    }

    // %
    if (operationClick === '%') {
      const displayValue = this.state.displayValue;
      let nDisplay = displayValue / 100;
      console.log(nDisplay)

      this.setState({
        displayValue: nDisplay,
        operation: '%',
      })
    }

    if (operationClick === '.') {
      const displayValue = this.state.displayValue;
      let nDisplay = displayValue.concat('.')
      console.log(nDisplay)

      this.setState({
        displayValue: nDisplay,
        operation: '.',
      })
    }

    if (operationClick === '+' || operationClick === '-' || operationClick === '*' || operationClick === '/'){
      this.setState({
        operation: operationClick
      }, () => {
        console.log('OPERATION STATE', this.state)
      })
    }

    if(operationClick === '='){
      let operation = this.state.operation
      let previousValue = parseFloat(this.state.previousValue)
      let displayValue = parseFloat(this.state.displayValue)
      console.log('INSIDE =',this.state)
      if(operation === '+'){
        let sum = previousValue + displayValue
        console.log('INSIDE +', this.state)
        this.setState({
          displayValue: sum
        })
        
      }
      if (operation === '-') {
        let subtraction = previousValue - displayValue
        console.log('INSIDE -', this.state)
        this.setState({
          displayValue: subtraction
        })

      }
      if (operation === '*') {
        let multi = previousValue * displayValue
        console.log('INSIDE *', this.state)
        this.setState({
          displayValue: multi
        })

      }
      if (operation === '/') {
        let divi = previousValue / displayValue
        console.log('INSIDE /', this.state)
        this.setState({
          displayValue: divi
        })

      }
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
              <button className='button col-3 orange' onClick={this.operationClick} value='/'>÷</button>

              <button className='button col-3' onClick={this.numberClick} value='7'>7</button>
              <button className='button col-3' onClick={this.numberClick} value='8'>8</button>
              <button className='button col-3' onClick={this.numberClick} value='9'>9</button>
              <button className='button col-3 orange' onClick={this.operationClick} value='*'>x</button>

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
