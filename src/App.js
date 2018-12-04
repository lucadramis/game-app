import React, { Component } from 'react';
import './App.css';
import Gif from './gif.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      writeX:true,
      board: [

      ]
    }
    for (let i=0; i<9 ; i++){ 
      this.state.board.push({
        idx: i,
        val: ""
      })
    }
  }
  reset ()

 {const board=[]
   for (let i = 0; i < 9; i++) {

     board.push(
       {
         idx: i,
         val: ""
       }
     )
   }
   this.setState({
     board:board
   })
 }
  play(idx) {
    const text = this.state.writeX ? 'X' : '0'
    const board = this.state.board

    board[idx].val === "" ? board[idx].val = text : alert("error")

    //board[idx].val = text;    ellimanato altrimenti ripete il testo
    this.setState({
      board: board,
      writeX : !this.state.writeX
    })
    
    if (((board[0].val === "X" && board[1].val==="X" && board[2].val === "X") || 
    (board[0].val === "O" && board[1].val==="O" && board[2].val === "O")) ||
     
     ((board[3].val === "X" && board[4].val==="X" && board[5].val === "X") || 
    (board[3].val === "O" && board[4].val==="O" && board[5].val === "O")) ||
    
    ((board[6].val === "X" && board[7].val==="X" && board[8].val === "X") || 
    (board[6].val === "O" && board[7].val==="O" && board[8].val === "O")) ||
    
    ((board[0].val === "X" && board[3].val==="X" && board[6].val === "X") || 
    (board[0].val === "O" && board[3].val==="O" && board[6].val === "O")) ||
    
    ((board[2].val === "X" && board[5].val==="X" && board[8].val === "X") || 
    (board[2].val === "O" && board[5].val==="O" && board[8].val === "O")) ||
    
    ((board[0].val === "X" && board[4].val==="X" && board[8].val === "X") || 
   (board[0].val === "O" && board[4].val==="O" && board[8].val === "O")) ||
    
   ((board[2].val === "X" && board[4].val==="X" && board[6].val === "X") || 
    (board[2].val === "O" && board[4].val==="O" && board[6].val === "O")))
     
    
   {
     alert ("hai vinto")
   }
  }
  
  
  
  

/*  <div className = "div" key="0" onClick = {() => {this.play(0)}}>{this.state.board[0].val}</div>
        <div className = "div" key="1" onClick = {() => {this.play(1)}}>{this.state.board[1].val}</div>
        <div className = "div" key="2" onClick = {() => {this.play(2)}}>{this.state.board[2].val}</div>
        <div className = "div" key="3" onClick = {() => {this.play(3)}}>{this.state.board[3].val}</div>
        <div className = "div" key="4" onClick = {() => {this.play(4)}}>{this.state.board[4].val}</div>
        <div className = "div" key="5" onClick = {() => {this.play(5)}}>{this.state.board[5].val}</div>
        <div className = "div" key="6" onClick = {() => {this.play(6)}}>{this.state.board[6].val}</div>
        <div className = "div" key="7" onClick = {() => {this.play(7)}}>{this.state.board[7].val}</div>
        <div className = "div" key="8" onClick = {() => {this.play(8)}}>{this.state.board[8].val}</div>
*/

  render() {
    return (
      <div>
        {this.state.writeX ? "Giocatore 1" : "gocatore 2"}
      <div className="App">
      


      
       
        {this.state.board &&
        this.state.board.map((item, index) => {
        return (

          <div className = "div" key={"key:" +  {index}} onClick = {() => {this.play(index)}}>{item.val}</div>
        )
        } 
      
      )}


      </div>
      <div id="button">

         <button onClick={this.reset}> reset</button>

       </div>
      </div>
    );
  }
}

export default App;
