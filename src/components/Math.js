import React, { Component } from 'react';

// const add = () => {

// }

class Math extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayValue: '0',
            previousValue: null,
            operation: null,
            waitingForNewValue: false
          }
    }

    handleAddClick = (e) => {
        this.setState({ 
            displayValue: parseInt(e.target.value), 
            previousValue: null,
            operation: 'add',
            waitingForNewValue: true
         })

        props.previousValue += props.displayValue;
    }

    handleSubtractClick = (e) => {
        this.setState({ 
            displayValue: parseInt(e.target.value), 
            previousValue: null,
            operation: 'subtract',
            waitingForNewValue: true
         })

        props.previousValue -= props.displayValue;
    }

    
    
}



export default Math