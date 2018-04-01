// to make a component for making all the new links!

import React from 'react';

class LinkCreate extends React.Component{
  constructor(props){
    super(props);

    this.state = {error: ''};
  }


  handleSubmit(event){
    event.preventDefault();

    //this.refs.input.value = value of the input in the links!
    Meteor.call('links.insert', this.refs.input.value, (error) => {
      if(error){
        //need to create state
        this.setState({error: "Enter a Valid URL!"});

      }else{
        this.setState({error: " "});
        this.refs.input.value = ' ';
      }
    });
  }

render(){
  return(
    <form onSubmit={this.handleSubmit.bind(this)}>
      <input ref= "input" type="link">
      </input>
      <div>
        {this.state.error};
      </div>
      <button>Shorten!</button>
    </form>
  );
};
}

export default LinkCreate;
