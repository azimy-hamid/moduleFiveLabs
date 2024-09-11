const fs = require("fs");
const path = require("path");

const friendsFilePath = path.join(__dirname, "../models/friends.json");

const getAllFriends = (req, res) => {
  const friendsContent = fs.readFileSync(friendsFilePath);
  const friendsData = JSON.parse(friendsContent);
  res.json(friendsData);
};

const filterFriends = (req, res) => {
  const friendsContent = fs.readFileSync(friendsFilePath);
  const friendsData = JSON.parse(friendsContent);
  let matchingFriends = [...friendsData];

  let filterGender = req.query.gender;
  let filterLetter = req.query.letter;

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
    accept: req.headers["accept"],
    "user-agent": req.headers["user-agent"],
    "content-type": req.headers["content-type"],
  });
};

const findFriend = (req, res) => {
  const friendsContent = fs.readFileSync(friendsFilePath);
  const friendsData = JSON.parse(friendsContent);
  let allFriends = [...friendsData];

  let friendId = req.params.id; // 'id' here will be a value matching anything after the / in the request path

  // Modify this function to find and return the friend matching the given ID, or a 404 if not found
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
  const friendsContent = fs.readFileSync(friendsFilePath);
  const friendsData = JSON.parse(friendsContent);

  let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
  newFriend.id = friendsData.length + 1;

  // we can add some validation here to make sure the new friend object matches the right pattern
  if (!newFriend.name || !newFriend.gender) {
    res
      .status(500)
      .json({ error: "Friend object must contain a name and gender" });
    return;
  }

  // if the new friend is valid, add them to the list and return the successfully added object
  friendsData.push(newFriend);
  fs.writeFileSync(
    friendsFilePath,
    JSON.stringify(friendsData, null, 2),
    "utf8"
  );
  res.status(200).json(newFriend);
};

const updateFriend = (req, res) => {
  try {
    const friendsContent = fs.readFileSync(friendsFilePath);
    const friendsData = JSON.parse(friendsContent);

    let friendId = req.params.id;
    let updatedFriend = req.body;

    let friendToBeUpdated = friendsData.find((friend) => {
      return friend.id == friendId;
    });

    if (!friendToBeUpdated) {
      console.log(friendToBeUpdated);
      return res.json({
        result: "Friend not found!",
      });
    }

    if (updateFriend.name) {
      friendsData.forEach((friend) => {
        if (friend.id == friendId) {
          friend.name = updatedFriend.name;
        }
      });
    } else if (updateFriend.gender) {
      friendsData.forEach((friend) => {
        if (friend.id == friendId) {
          friend.gender = updateFriend.gender;
        }
      });
    } else if (!updateFriend.name && !updateFriend.gender) {
      return res.json({
        result: "Name or gender not passed",
      });
    }
    // Replace the old friend data for friendId with the new data from updatedFriend
    fs.writeFileSync(
      friendsFilePath,
      JSON.stringify(friendsData, null, 2),
      "utf8"
    );

    // Modify this response with the updated friend, or a 404 if not found
    res.json({
      result: "Updated friend with ID " + friendId,
      data: updatedFriend,
    });
  } catch (error) {
    res.status(500).json({
      result: "An error occurred",
      error: error.message,
    });
  }
};

module.exports = {
  getAllFriends,
  filterFriends,
  getInfo,
  findFriend,
  addFriend,
  updateFriend,
};
