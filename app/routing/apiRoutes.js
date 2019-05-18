var friends = require("../data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends)

  })

  app.post("/api/friends", function (req, res) {
    var smallestDifference = 99999;
    var bestMatch = {};
    var user = req.body;
    friends.forEach(friend => { // looping over friends array of objects

      var totalDifference = 0;
      for (var i = 0; i < friend.scores.length; i++) { //2nd loop over the scores
        totalDifference += Math.abs(this.user.score[i] - friend.scores[i]);

      }
      if (totalDifference < smallestDifference) {
        smallestDifference = totalDifference;
        bestMatch = friend;
      }
    });
    friends.push(user);
    res.json(bestMatch);
  })


}
