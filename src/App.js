import React from "react";
import styles from "./App.module.scss";
import { Main } from "./pages/Main";
import { Courses } from "./pages/Сourses";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./features/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className={styles.App}>
        <Switch>
          <Route path={"/"} exact component={Main} />
          <Route path={"/courses"} exact component={Courses} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
