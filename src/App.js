import React from 'react';
import { Button , Modal} from 'react-bootstrap';
import './App.css';
import ComparingAnswers  from './Components/ComparingAnswers.js';



export default class App extends React.Component {

    constructor(props){
        super(props)
    
        this.state = {
          show:false
          
        }
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        
      }

      handleShow(){
        this.setState({
          show:true
        })
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
    render () {
        return (
                <div className="App-header">
                    <h1 bsSize="lg" style={{color: '#FFFFFF', textAlign: 'center', textShadowColor: '#FFFFFF', fontWeight: 'bold', fontFamily: 'Apple Chancery', fontStyle: 'Italic', fontSize: '90px'}}>Learn german states</h1>
                    <h3 style={{textAlign:'center'}}>This app can help you to learn all the german states and capitals in easy way! Try now!</h3>
                   <Button bsSize="lg" bsStyle="primary" onClick={this.handleShow} style={{background: '#FFFFFF', color: '#093797', borderColor: '#F6E686', position:"absolute", marginTop: '10px', marginLeft: '10px'}}>Contact US</Button>
                   <Modal key="modal2" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div style={{height: 120, marginTop:"20px"}} className="col-md-12">
                    <h3>Wilhelmine-Reichard-Weg 9</h3>
                    <h3>Boeblingen, 71034</h3>
                    <h2>Elena Gette</h2>
                    </div>
                    </Modal.Body>
                    <Modal.Footer style={{marginBottom:"0px"}}>
                    <Button style={{marginTop:"25px"}} 
                    onClick={this.handleClose}>Close</Button>
        
                    </Modal.Footer>
              </Modal> 
              

              
                    <ComparingAnswers />
                   

                    
              </div>
        );
    }
}