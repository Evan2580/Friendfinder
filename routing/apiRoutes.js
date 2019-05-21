var friends = require("../data/friends.js");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    console.log("hello")
    res.json(friends)

  })
  debugger;
  app.post("/api/friends", function (req, res) {
    var smallestDifference = 99999;
    var bestMatch = {};
    var user = req.body; //clean way to declare it

    friends.forEach((friend) => { // looping over friends array of objects

      var totalDifference = 0;

      for (var i = 0; i < friend.userScores.length; i++) { //2nd loop over the scores

        totalDifference += Math.abs(user.userScores[i] - friend.userScores[i]); //absolute value of each value of answers to questions

      }
      if (totalDifference < smallestDifference) {  //logic for finding best match
        smallestDifference = totalDifference;
        bestMatch = friend;
        console.log(bestMatch);
      }
    });
    friends.push(user); //pushes new user to friends array
    res.json(bestMatch); //response sent to html as best match
  })
}
