
import './App.css';



import React, { Component } from 'react'

export default class AppClass extends Component {
  render() {
    return (
      <div>{
        this.props.data.map((ele)=>{
            return <div key = {ele.id}>
               <img scr ={ele.img}/>
           </div>
        
       })
        }</div>
    )
  }
}
