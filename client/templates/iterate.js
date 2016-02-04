Meteor.subscribe("people");


Template.iterate.helpers({

  people: function(){
    return People.find();
  }

});
