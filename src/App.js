import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./App.css";
import { comingSoon } from "./content.json";
import Newsletter from "./Newsletter";

function pxToRem(value) {
  return `${value / 16}rem`;
}

const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#000"
    }
  },
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiButton: {
      root: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        margin: "20px 20px",
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
      }
    },
    MuiFormControlLabel: {
      root: {
        textAlign: "left"
      }
    },
    MuiTypography: {
      h1: {
        fontSize: pxToRem(48),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(72)
        }
      },
      body1: {
        fontSize: pxToRem(14),

        [breakpoints.up("md")]: {
          fontSize: pxToRem(16)
        }
      }
    }
  }
});

class App extends Component {
  render() {
    const content = comingSoon.content.split(".").map((item, i) => (
      <Typography variant="body1" gutterBottom key={i}>
        {item}
      </Typography>
    ));

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
          <FontAwesomeIcon
            key={i}
            icon={icon}
            size="2x"
            style={{ color: "#fb7361", paddingRight: "10px" }}
          />
        </a>
      );
    });

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div
          className="App"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
          }}>
          <div style={{ maxWidth: "70%" }}>
            <header className="App-header">
              <Typography variant="h1" gutterBottom>
                {comingSoon.title}
              </Typography>
              {content}
              <Newsletter />
              {social}
            </header>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
