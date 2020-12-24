import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
  ThemeProvider,
} from "@material-ui/core/styles";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { theme } from "./components/Theme";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history, onSignIn }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <StylesProvider generateClassName={generateClassName}>
          <Router history={history}>
            <Switch>
              <Route path="/auth/signin">
                <Signin onSignIn={onSignIn} />
              </Route>
              <Route path="/auth/signup">
                <Signup onSignIn={onSignIn} />
              </Route>
            </Switch>
          </Router>
        </StylesProvider>
      </ThemeProvider>
    </div>
  );
};
