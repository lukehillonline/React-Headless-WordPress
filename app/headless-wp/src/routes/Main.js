import React from 'react';
import { withRouter, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition as OriginalCSSTransition } from 'react-transition-group';

import Navigation from '../components/navigation/Navigation';
import Home from '../containers/home/Home';
import About from '../containers/about/About';
import MoviePage from '../containers/moviePage/MoviePage';

class CSSTransition extends OriginalCSSTransition {
    // onEntered = () => {
    //     // Do not remove enter classes when active
    // }
}

class Main extends React.Component {
  componentWillReceiveProps(nextProps) {
      this.previousView = this.props.location;
  }

  render() {
  	const { location } = this.props;
    const modal = location.state && location.state.to === 'modal';

    let pos = {};
    if(modal){
        pos = location.state.meta.from;
    }

    return (
      <div>

      		<Navigation></Navigation>

    		<div>
		      	<Switch location={modal ? this.previousView : location}>
		        	<Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
		    	</Switch>
      	</div>


      	<div>
	      	<TransitionGroup>
	        	<CSSTransition
	            	timeout={1000}
	            	classNames="modal"
	            	key={location.pathname}
	            	mountOnEnter
	            	appear
	        	>
		        	<div className="modal-container" style={pos}>
					    <Switch location={location}>
					        <Route path='/movies/:number' component={MoviePage}/>
					    </Switch>
				    </div>
            	</CSSTransition>
        		</TransitionGroup>
      	</div>
    	</div>
    )
  }
}

export default withRouter(Main);