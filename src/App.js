import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { comingSoon } from "./content.json";

class App extends Component {
  _social() {}

  render() {
    const content = comingSoon.content
      .split(".")
      .map((item, i) => <p key={i}>{item}</p>);

    const social = Object.keys(comingSoon.footer).map((key, i) => {
      const icon =
        key === "twitter" || key === "instagram"
          ? ["fab", key]
          : key === "email"
            ? "envelope"
            : key;

      const target = key === "email" ? null : "_blank";

      return (
        <a
          key={i}
          className="App-link"
          href={comingSoon.footer[key]}
          target={target}
          rel="noopener noreferrer">
          <FontAwesomeIcon key={i} icon={icon} size="2x" />
        </a>
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1>BAMEinTech</h1>
          {content}
          {social}
        </header>
      </div>
    );
  }
}

export default App;
