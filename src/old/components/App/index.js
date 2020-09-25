import React, { Component } from "react";
import "./app.scss";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionViewPort } from '../../store/actions/application';

import RouterView from "../../routes";

function mapStateToProps(state) {
  return {
    viewPort: state.application
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    actionViewPort: actionViewPort
  }, dispatch)
}

class App extends Component {

  handleWindowResize = () => {
    let screenSize = null;
    if (window.innerWidth < 768) {
      screenSize = "mobile";
    } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
      screenSize = "tablet"
    } else if (window.innerWidth >= 1200) {
      screenSize = "desktop";
    }
    this.props.actionViewPort(screenSize);
  }

  componentDidMount() {
    this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  render() {
    return (
      <div className="app">
        <div className={this.props.viewPort}>
          <div className="page">
            <RouterView />
          </div>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(App);