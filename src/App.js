import React, { useReducer, useCallback, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContext, initialState, reducer } from "./store";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Radio from "./components/Radio";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initIndexRadio = useCallback(() => {
    if (state.indexRadio === 0) {
      dispatch({
        type: "UPDATE_INDEX_RADIO",
        payload: localStorage.getItem("indexRadio")
          ? localStorage.getItem("indexRadio")
          : 0,
      });
    }
  }, [state.indexRadio, dispatch]);

  useEffect(() => {
    initIndexRadio();
  }, [initIndexRadio]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/radio/:shareCode" component={Radio} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
