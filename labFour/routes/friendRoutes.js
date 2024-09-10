const express = require("express");
const router = express.Router();
const friends = require("../models/friends");
const {
  getAllFriends,
  filterFriends,
  getInfo,
  findFriend,
  addFriend,
  updateFriend,
} = require("../controllers/friendsControllers");

// TODO - #1: Add support to the 'filter' endpoint for a new query parameter 'letter' which filters friends by starting letter
// ANSWER: DONE -- I ADDED ANOTHER QUERY PARAMETER

// TODO - #2: Modify the 'info' route to only return the user-agent, content-type and accept header data

// TODO - #3: Modify the dynamic GET route to return a single friend object matching the dynamic 'id' request parameter
// ANSWER: DONE -- USED A FIND METHOD TO FIND THE OBJECT VIA OBJECT ID
// TODO - #4: Complete the PUT route which will update data for an existing friend

// TODO - #5: Move all logic out into a controller with functions for finding, filtering, info, adding and updating
// ANSWER: DONE -- CREATED A CONTROLLERS FOLDER AND CREATED A FRIENDSCONTROLLER FILE CONTAING ALL THE LOGIC

// default endpoint, gets all friends
router.get("/", getAllFriends);

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
// 1. Add support to also filter by a starting 'letter' query parameter ie. /friends/filter?letter=R
router.get("/filter", filterFriends);

// 2. Get information about this request from the headers
router.get("/info", getInfo);

// 3. Dynamic request param endpoint - get the friend matching the specific ID ie. /friends/3
router.get("/:id", findFriend);

// a POST request with data sent in the body of the request, representing a new friend to add to our list
router.post("/", addFriend);

// 4. Complete this new route for a PUT request which will update data for an existing friend
router.put("/:id", updateFriend);

module.exports = router;
