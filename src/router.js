import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// import Home from './components/Home';
// import Wall from './components/wall';
// import Room from './components/room';
// import Game from './components/game';
let Home, Wall, Room, Game, RoomCreate,

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Home}>
        <IndexRoute component={Wall} />
        <Route path="room/new" component={RoomCreate} />
        <Route path="room/:id" component={Room} />
      </Route>
    </Router>
  );
};

export default Routes;
