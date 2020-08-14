import React, { Component } from "react";

class SideNav extends Component {
  render() {
    const { options } = this.props;
    return (
      <nav className="sidebar">
        <ul className="side-nav">
          {options.map((option) => {
            return (
              <li className="side-nav__item">
                <a href="/#" className="side-nav__link">
                  <svg className="side-nav__icon">
                    <use
                      xlinkHref={
                        require("../img/symbol-defs.svg") + "#icon-" + option
                      }
                    ></use>
                  </svg>
                  <span>{option}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="legal">
          &copy; 2020 by Examera. All rights reserved.
        </div>
      </nav>
    );
  }
}

export default SideNav;
