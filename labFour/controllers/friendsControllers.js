const friends = require("../models/friends");

const getAllFriends = (req, res) => {
  res.json(friends);
};

const filterFriends = (req, res) => {
  let filterGender = req.query.gender;
  let filterLetter = req.query.letter;
  let matchingFriends = [...friends];

  if (filterGender) {
    matchingFriends = matchingFriends.filter(
      (friend) => friend.gender.toLowerCase() === filterGender.toLowerCase()
    );
  }

  if (filterLetter) {
    matchingFriends = matchingFriends.filter(
      (friend) =>
        friend.name.toLowerCase().charAt(0) === filterLetter.toLowerCase()
    );
  }

  if (matchingFriends.length > 0) {
    // return valid data when the gender matches
    console.log(filterLetter);
    res.status(200).json(matchingFriends);
  } else {
    // and an error response when there are no matches
    res
      .status(404)
      .json({ error: "No friends matching gender " + filterGender });
  }
};

const getInfo = (req, res) => {
  console.log(req.headers);

  // Modify this response to just return info on the user-agent, content-type and accept headers
  res.json({
    accept: req.header["accept"],
    "user-agent": req.headers["user-agent"],
    "content-type": req.headers["content-type"],
  });
};

const findFriend = (req, res) => {
  console.log(req.params);
  let friendId = req.params.id; // 'id' here will be a value matching anything after the / in the request path

  // Modify this function to find and return the friend matching the given ID, or a 404 if not found
  const allFriends = [...friends];
  if (friendId) {
    const foundFriend = allFriends.find((friend) => {
      return friend.id == friendId;
    });
    // Modify this response with the matched friend, or a 404 if not found
    if (foundFriend) {
      return res.status(200).json(foundFriend);
    } else {
      return res
        .status(404)
        .json({ result: "No friend found with id ${friendId}" });
    }
  }
};

const addFriend = (req, res) => {
  let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
  console.log(newFriend); // 'body' will now be an object containing data sent via the request body

  // we can add some validation here to make sure the new friend object matches the right pattern
  if (!newFriend.name || !newFriend.gender) {
    res
      .status(500)
      .json({ error: "Friend object must contain a name and gender" });
    return;
  } else if (!newFriend.id) {
    newFriend.id = friends.length + 1; // generate an ID if one is not present
  }

  // if the new friend is valid, add them to the list and return the successfully added object
  friends.push(newFriend);
  res.status(200).json(newFriend);
};

const updateFriend = (req, res) => {
  let friendId = req.params.id;
  let updatedFriend = req.body;

  // Replace the old friend data for friendId with the new data from updatedFriend

  // Modify this response with the updated friend, or a 404 if not found
  res.json({
    result: "Updated friend with ID " + friendId,
    data: updatedFriend,
  });
};

module.exports = {
  getAllFriends,
  filterFriends,
  getInfo,
  findFriend,
  addFriend,
  updateFriend,
};
