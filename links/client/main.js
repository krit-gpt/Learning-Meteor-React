import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import LinkCreate from './components/links-create';

class App = () => {
  return(

    <h1>Hello!</h1>
    <Header />
  );
};


Meteor.startup( () => {
  ReactDOM.render(<App/>, document.getElementById('id'));
});
