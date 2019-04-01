import React from 'react';



export default class WrongAnswer extends React.Component {

    constructor(props){
        super(props)
    
        this.state = {
          show:false
          
        }
      }

    render () {
        return (
                <div>
                    <h3 style={{textAlign:'center', color: 'red'}}>Your answer is wrong.</h3>

              </div>
        );
    }
}