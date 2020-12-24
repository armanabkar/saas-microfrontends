import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
  ThemeProvider,
} from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import About from "./components/About";
import { theme } from "./components/Theme";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default ({ history }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <StylesProvider generateClassName={generateClassName}>
          <Router history={history}>
            <Switch>
              <Route exact path="/pricing" component={Pricing} />
              <Route exact path="/about" component={About} />
              <Route path="/" component={Landing} />
            </Switch>
          </Router>
        </StylesProvider>
      </ThemeProvider>
    </div>
  );
};
