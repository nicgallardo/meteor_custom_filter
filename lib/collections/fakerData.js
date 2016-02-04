// People = new Mongo.Collection('people');

if(People.find().count() < 24){
    for(var i=0; i < 25; i++){
      var randomEmail = faker.internet.email();
      var randomName = faker.name.findName();
      // var userName = faker.internet.userName();
      console.log("TestData", randomName);
      People.insert({
        email: randomEmail,
        name: randomName,
      })
    }
}
