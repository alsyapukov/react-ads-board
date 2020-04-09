import React, { Component } from "react";
import "@/components/App/app.scss";

import Header from "@/components/Header/";
import Content from "@/components/Content/";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Content />
      </div>
    );
  }
}
export default App;