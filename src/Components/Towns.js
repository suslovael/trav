import React from 'react';
import ComparingAnswers from './ComparingAnswers';

class Towns extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {

          answer: '',
        }

    this.handleSubmit = this.handleSubmit.bind(this);
}




handleSubmit(){
console.log('Your input value is: ' + this.state.answer)
}

  render() {
      var answer = this.state.answer;
      

    
    return (
<div>
            <h1 style={{marginLeft: '30px'}}>Please write the capital of: </h1>
            <input name="answer" type="text" style={{color: '#194D33', marginLeft: '30px'}} onChange={this.state.answer}></input>
            <input type="submit" onClick={this.handleSubmit} bsStyle="primary" style={{background: '#F6E686', color: '#194D33'}} ></input>
            <p></p>
            </div>
    );
    }
            }