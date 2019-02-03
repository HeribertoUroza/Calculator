import React, { Component } from 'react';

handleDisplay = (e) => {
    let newDisplay = e.target.value
    this.setState({ displayValue: newDisplay })

    return (
        <>
            <div className='col-12 inputview'>{this.state.displayValue}</div>
        </>
    )
}

export {
    handleDisplay
}