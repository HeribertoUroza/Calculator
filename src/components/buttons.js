import React, { Component } from 'react';

handleDisplay = (props) => {
    // let newDisplay = e.target.value
    // this.setState({ displayValue: newDisplay })

    return (
        <>
            <div className='col-12 inputview'>{props.displayValue}</div>
        </>
    )
}

export default handleDisplay;