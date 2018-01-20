import React, { Component } from 'react';
import logo from './logo.svg';
import {a,b,c,d,e,f,g} from './index';
import styled from 'styled-components';
import './App.css';

const StyledComponent = styled.img`
  position: absolute;
  top: 16%;
  left: 35%;
  color: transparent;
  opacity: 0;
  z-index: 0;
  
  -webkit-backface-visibility: hidden;
  -webkit-animation: imageAnimation ${props => props.number}s linear infinite 0s;
  -moz-animation: imageAnimation ${props => props.number}s linear infinite 0s;
  -o-animation: imageAnimation ${props => props.number}s linear infinite 0s;
  -ms-animation: imageAnimation ${props => props.number}s linear infinite 0s;
  animation: imageAnimation ${props => props.number}s linear infinite 0s;
  
  -webkit-animation-delay: ${props => props.index}s;
  -moz-animation-delay: ${props => props.index}s;
  -o-animation-delay: ${props => props.index}s;
  -ms-animation-delay: ${props => props.index}s;
  animation-delay: ${props => props.index}s; 
`;

class App extends Component {

  constructor(params) {
    super(params);
    this.state = {
      text : "",
      images : []
    };
    this.images = [];
  }
  
  submitResp = (text) => {
    this.images = [];
    let length = text.length;
    for(let i =0 ; i<length ; i++){
      if(text[i] !== ' ')
        this.images.push(<StyledComponent key={i} src={require(`./${text[i]}.png`)} number={length} index={i+1} />);
      else{
        this.images.push(<StyledComponent key={i} src={require(`./space.png`)} number={length} index={i+1} />)
      }
    }
    this.setState({images : this.images})
  };

  handleChange = (e) => {
      let value = e.target.value;
      let lastChar = value.substr(value.length-1);
      if (lastChar.charCodeAt(0) !== 10 )
        this.setState({ text : value });
  };

  handleKey = (e) => {
    if(e.charCode === 13)
      this.submitResp(this.state.text);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Text to Sign Language</h1>
        </header>
        <textarea onChange={this.handleChange} onKeyPress={this.handleKey} className="text-area" value={this.state.text} /><br/>
        <img className="img-size" src={require("./mac.png")}/>
        <div id="crossfade">
            {this.state.images}
        </div>
      </div>
    );
  }
}

export default App;
