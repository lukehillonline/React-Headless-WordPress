import React from 'react';
import { withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import NavigationItems from "./NavigationItems";

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
    	pages: {},
      open: false
    }

    this.getNavigationData = this.getNavigationData.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    this.getNavigationData();
  }

  getNavigationData() {
    let dataURL = 'http://localhost:8888/SBP/website/wp-json/wp/v2/pages?_embed';

    fetch(dataURL)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          pages: data
        })
      })
  }

  toggleMenu() {
    let currentState = this.state.open;
    this.setState({open: !currentState});
  }

  render() {

    let allPages = this.state.pages;

    if (Object.keys(allPages).length === 0) { // check if movie object is empty
      return null
    } 
    else {
      return <nav className='main-navigation'>

              <button onClick={this.toggleMenu} className="main-navigation--menu-icon">Menu</button>
              <CSSTransition className="navigation-overlay" 
                             in={this.state.open} 
                             classNames="animation" 
                             timeout={4000} 
                             onExited={() => {
                              this.setState({
                                open: false
                              });
              }}>
                <div>
                  <button className="close-button" onClick={this.toggleMenu}>Close</button>

                  <NavigationItems pageData={allPages}></NavigationItems>

                  <span className="background-fill first"></span>
                  <span className="background-fill second"></span>
                  <span className="background-fill third"></span>
                  <span className="background-fill fourth"></span>
                  <span className="background-fill fifth"></span>
                </div>
              </CSSTransition>
            </nav>
    }
  }
}

export default withRouter(Navigation);








