import React from 'react';
import { withRouter } from "react-router-dom";

class NavigationItems extends React.Component {

  render() {
    let navigationItems = this.props.pageData.map((page, index) => {

    	if(page.slug === 'home') {
    		page.slug = '/';
    	}

    	return <li key={index}><a href={page.slug} title="">{page.title.rendered}</a></li>
    });

    return <ul>{navigationItems}</ul>
  }
}

export default withRouter(NavigationItems);