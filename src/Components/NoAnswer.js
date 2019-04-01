import React from 'react';



export default class NoAnswer extends React.Component {

    constructor(props){
        super(props)
    
        this.state = {
          show:false
          
        }
      }

    render () {
        return (
                <div>
                    <h3 style={{textAlign:'center', color: 'red'}}>There is no answer yet.</h3>

              </div>
        );
    }
}