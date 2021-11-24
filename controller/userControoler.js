const userModal = require("../modal/user");

const storeUser = async (req, res) => {
  try {
    const user = await new userModal(req.body);
    user.save();

    res.status(201).send(user);
  } catch (error) {}
};

const getUsers = async (req, res) => {
  try {
    const users = await userModal.find({});
    res.status(200).send(users);
    console.log(users)
    for (let key in users) {
      console.log(key)
      let value = obj[key];
      if (obj.hasOwnProperty(key)) {
        console.log(`Property ${key} is NOT from prototype chain`);
      } else {
        console.log(`Property ${key} is from prototype chain`);
      }
    }
    console.log(users)
  } catch (error) {}
};






module.exports = {
  storeUser,
  getUsers,
 
};
