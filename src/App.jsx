import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';


const data="https://gist.githubusercontent.com/jfelixzr/cdb1b1a893ef57c00f0df00a6fbe8064/raw/e55c993d836a91f47eecedfad68cca64526c6eb3/frases.json"
class RandomM extends React.Component {
  state = {
    frases: [
      {
        frase: "",
        autor: ""
      }
    ],
    random: 0
  }
  componentDidMount(){
    fetch(data).then(res=>res.json()).then(res=>{
      this.setState({
        frases:res.frases
      }, this.RandomF)
    })
  }
  RandomF=()=>{
    const {frases}=this.state;
    if(frases.length>0){
      const random= Math.floor(Math.random()* frases.length);
     this.setState({
        random
      })
    }
  }
  render(){
    const {frases,random}=this.state;
    const frase=frases[random];
    const tweetURL = `https://twitter.com/intent/tweet?text=${frase.frase} - ${frase.autor}`;
   
    return(
     <div className="d-flex  vh-100 justify-content-center align-items-center">
       <div className="col-9 cuadro p-5 " id="quote-box">
       {
           frase && (
             <div mb-3>
               <p id="text">{frase.frase}</p> 
               <p className="d-flex justify-content-end"  id="author">-{frase.autor}</p>
               </div>)
         } 
       
    <div className="d-flex justify-content-between">
       <a className="btn btn-primary" id="tweet-quote" href={tweetURL} target="blank"><i className="fab fa-twitter"></i> Tweet</a>
      <button className="btn btn-primary" onClick={this.RandomF} id="new-quote">Cambiar Frase</button>
      </div>
      </div>
        
      </div>
    )
    
  }
}


export default RandomM;