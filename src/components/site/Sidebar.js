import React from 'react';

import {
  Route,
  Link
} from 'react-router-dom'

import { routes } from './_routes';

const Sidebar = () => (

  <div className="sidebar">
    <div className="sidebar-list-styling">
      <ul className="sidebar-list list-unstyled">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rationale">Rationale</Link></li>
        <li><Link to="/functionalcomponent">Functional Component</Link></li>
        <li><Link to="/JSXRules">JSX</Link></li>
        <li><Link to="JavaScriptconcepts">JavaScript Concepts</Link></li>
        <li><Link to="ClassComponentDemo">Class Component Demo</Link></li>
        <li><Link to="PropsDemo">Props Demo</Link></li>
        <li><Link to="LifeCycleCodepen">Life cycle Diagram</Link></li>
        <li><Link to="/TimerPiecesApp">Time Based Apps</Link></li>
        <li><Link to="/movie">Movie Search App</Link></li>
        <li><Link to="/resources">Resources</Link></li>
      </ul>
    </div>
  <div className="sidebar-route">
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </div>
  </div>
)

export default Sidebar;