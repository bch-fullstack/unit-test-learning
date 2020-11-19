import React from 'react'

class Form extends React.Component {
    // when the value of any of the input fields are changed
    // then trigger the handleChange function
    // handleChange has been attached to the input field with the onChange props

    // 1. input fields will start with initial values of an empty string
    // 2. when the input fields triggers a change event then the handleChange should be triggered
    // 3. when the input fields firstName value is changed to 'test' then the handleChange will be triggered with the 
    // value of e.target.id = firstName and the e.target.value will have to be 'test'
    render(){
        return(
            <>
                <input type="text" id="firstName" 
                value={this.props.placeHolder}
                placeholder="test" onChange={this.props.handleChange}/>
                <input type="text" id="lastName" 
                value=""
                placeholder="test" onChange={this.props.handleChange}/>
            </>
        )
    }
}

export default Form;