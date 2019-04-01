import React from 'react';



export default class CorrectAnswer extends React.Component {

    constructor(props){
        super(props)
    
        this.state = {
          show:false
          
        }
      }

    render () {
        return (
                <div>
                    <h3 style={{textAlign:'center', color: '#D2F5E3'}}>Your answer is correct!</h3>

              </div>
        );
    }
}