import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NavMenu from "./nav-menu";
import Settings from "./settings";
import { ThemeProvider } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Welcome from "./welcome";
import theme from "./theme";
import { useState } from "react";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <AppBar>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => {
                  setDrawerOpen(true);
                }}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">Crpyto Ticker Configuration</Typography>
            </Toolbar>
          </AppBar>
          <Toolbar />
          <main>
            <Container maxWidth="md">
              <Switch>
                <Route exact path="/">
                  <Welcome />
                </Route>
                <Route exact path="/settings">
                  <Settings />
                </Route>
              </Switch>
            </Container>
          </main>
          <Drawer anchor={"left"} open={drawerOpen} onClose={closeDrawer}>
            <NavMenu close={closeDrawer} />
          </Drawer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
