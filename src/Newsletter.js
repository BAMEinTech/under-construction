import React, { Component } from "react";
import {
  MuiThemeProvider,
  withTheme,
  withStyles
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const styles = {
  label: {
    marginLeft: "13%",
    textAlign: "left"
  }
};

class Newsletter extends Component {
  render() {
    const { theme, classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <form
          id="subForm"
          className="js-cm-form"
          action="https://www.createsend.com/t/subscribeerror?description="
          method="post"
          data-id="5B5E7037DA78A748374AD499497E309ED3A52201582812A9959D0818938E329B095E58B4B3DFEBBA9AA77E32C3E60918604B5C8020ACA9B4CF14987C313649EF">
          <TextField
            required
            id="fieldName outlined-name"
            label="Full Name"
            name="cm-name"
            margin="normal"
            variant="outlined"
            placeholder="E.g. John Smith"
          />
          <TextField
            required
            id="fieldEmail outlined-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            placeholder="E.g. john@smith.co.uk"
          />
          <div className={classes.label}>
            <FormControlLabel
              control={<Checkbox value="checkedB" color="primary" />}
              label="I agree to be emailed"
            />
          </div>
          <div className={classes.label}>
            <FormControlLabel
              control={<Checkbox value="checkedB" color="primary" />}
              label="I agree to have my email activity tracked"
            />
          </div>
          <Button>Subscribe</Button>
        </form>

        <Typography variant="body1" gutterBottom className="s2-txt3 p-t-18">
          And don't worry, we hate spam too! You can unsubcribe at
          anytime.
        </Typography>
      </MuiThemeProvider>
    );
  }
}

Newsletter.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withTheme()(withStyles(styles)(Newsletter));
