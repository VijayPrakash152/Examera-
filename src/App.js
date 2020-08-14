import React, { Component } from "react";
import SideNav from "./components/sideNav";
class App extends Component {
  render() {
    const options = ["home", "add-user", "user", "phone"];
    return (
      <div className="container">
        <header className="header">
          <svg className="logo">
            <use
              xlinkHref={require("./img/symbol-defs.svg") + "#icon-open-book"}
            ></use>
          </svg>
          <div className="logo-name">
            <h1 className="logo-text-primary">
              Examera
              <span className="logo-text-sub">
                Train with the best to become better
              </span>
            </h1>
          </div>
        </header>
        <div className="content">
          <SideNav options={options} />
          <main className="app-view">App View</main>
        </div>
      </div>
    );
  }
}

export default App;
