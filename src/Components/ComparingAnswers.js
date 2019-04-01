import React from 'react';
import WrongAnswer from './WrongAnswer.js';
import CorrectAnswer from './CorrectAnswer.js';
import NoAnswer from './NoAnswer.js';
import { Button } from 'react-bootstrap';





class ComparingAnswers extends React.Component {
    constructor(props){
        super(props);        
        this.state = {
            value: '',
            displayToUser : ''
        };        
        this.states = {
            'Berlin' : 'Berlin',
            'Bavaria' : 'Munich',
            'Bremen' : 'Bremen',
            'Saxony' : 'Dresden',
            'Saxony-Anhalt' : 'Magdeburg',
            'Hesse' : 'Wiesbaden',
            'Hamburg' : 'Hamburg',
            'Baden-Württemberg' : 'Stuttgart',
            'Lower Saxony' : 'Hannover',
            'North Rhine-Westphalia' : 'Düsseldorf',
            'Schleswig-Holstein' : 'Kiel',
            'Mecklenburg-Vorpommern' : 'Schwerin',
            'Brandenburg' : 'Potsdam',
            'Saarland' : 'Saarbrücken',
            'Thuringia' : 'Erfurt',
            'Rhineland-Palatinate' : 'Mainz'
        };
        this.index = "";
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(e) {
            this.setState({value: e.target.value});
        }

        handleSubmit(e) {
            //alert('The value is: ' + this.input.value);                    
            e.preventDefault();                 
            switch(this.checkResult(this.input.value)){
                case 0: this.setState({displayToUser : <WrongAnswer /> });
                break;
                case 1: this.setState({displayToUser : <CorrectAnswer /> }); 
                break;
                default: this.setState({displayToUser : <NoAnswer /> }); 
                break;

            }       
          }


        random(){
            return Math.floor(Math.random()*16);
        }

        checkResult(value) {                        
            if (value === Object.values(this.states)[this.index]) {
                return 1;
            } else if (value == "") {
                return -1;
            }
            else return 0;

        }
                
        render(){

   
        this.index = this.random();  

        return (
            <div>           
          <h2 style={{textAlign:'center'}}>Please write the capital of {Object.keys(this.states)[this.index]} </h2>
          <form onSubmit={this.handleSubmit} style={{textAlign:'center'}}>
          <input type="text" style={{color: '#093797', marginLeft: '30px'}} ref={(input) => this.input = input}/>
          <input type="submit" style={{color: '#093797', background: '#FFFFFF'}}  />
          </form>
      
                  {this.state.displayToUser}
      
            </div>
          );
        }
    }
    export default ComparingAnswers;