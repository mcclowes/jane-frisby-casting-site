import { ThemeProvider } from "styled-components";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import routesConfig from "./routesConfig";
import injectGlobalStyles from "./components/style/globalStyles";

import Nav from "./components/common/SimpleNav";
import Main from "./components/common/Main";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

import * as vars from "./components/style/vars";

injectGlobalStyles();

const defaultColors = {
  ...vars.colors,
};

const routes = routesConfig.map(
  ({ component: Comp, path, exact, ...rest }, i) => {
    const render = (props) => {
      const passedProps = {
        ...props,
        ...rest,
      };

      return <Comp {...passedProps} />;
    };

    return <Route key={path + i} path={path} exact={exact} render={render} />;
  }
);

export default () => (
  <Router>
    <ScrollToTop>
      <ThemeProvider theme={defaultColors}>
        <div>
          <Nav key="Nav" />

          <Main key="Main">
            <Switch>{routes}</Switch>
          </Main>

          <Footer key="Footer" />
        </div>
      </ThemeProvider>
    </ScrollToTop>
  </Router>
);
