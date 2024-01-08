import "./App.css";

import React, { Component } from "react";

export default class AppClass extends Component {


  render() {

    console.log(this.props.data[0].img)
    return (
      <div className="grid">
        {
          this.props.data.map((ele) => {
            return <div key={ele.id}>
                <img src={ele.img} />
              </div>
          })
        }
      </div>
    );
  }
}
