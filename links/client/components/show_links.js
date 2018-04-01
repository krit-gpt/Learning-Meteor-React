import React from 'react';
//to show -- we need a publication!

class LinksShow extends React.Component{
  render(){
    return(
      <div>
        List of Links!
        {this.props.links}
      </div>
    );
  }
}


export default createContainer(() => {
  Meteor.subscribe("links_publication");

  return { links: Links.find({}).fetch()};


}, LinksShow);
