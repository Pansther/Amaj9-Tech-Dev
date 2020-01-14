import React from 'react';

import { Route } from 'react-router-dom'

class CreateRoute extends React.Component {

  render () {
    return (
        <Route path={this.props.path} component={this.props.component} />
    );
  }

}

export default CreateRoute;
