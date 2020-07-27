import React, { Component } from "react";

import Header from "../components/Header/";
import CreateAd from "../components/CreateAd/";

class CreateAdPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <CreateAd />
      </React.Fragment>
    );
  }
}
export default CreateAdPage;