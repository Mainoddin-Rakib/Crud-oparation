const userService = require("../services/userService")

class userController {

  async createUser(req, res) {
    try {
      const { name, email, phone } = req.body
      const saveUser = await userService.createUser(name, email, phone)
      res.json(saveUser);
    } catch (error) {
      console.log('controller', error);
      res.status(500).json({ error: error.massage })
    }

  }
  async getAllusers(req, res) {
    try {
      const users = await userService.getAllusers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.massage })
    }

  };

  async getUserById(req, res) {
    const userId = req.params.id;
    try {
      const user = await userService.getUserById(userId)
      if (!user)
        return res.status(404).json({ error: "user not found" });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.massage })
    }
  };

  async updateUser(req, res) {
    const userId = req.params.id;
    const updateData = req.body;
    try {
      const upadateduser = await userService.updateUser(userId, updateData)
      if (!upadateduser)
        return res.status(404).json({ error: "user not found" });
      res.json(upadateduser);
    } catch (error) {
      res.status(500).json({ error: error.massage })
    }
  };


  async deleteUser(req, res) {
    const userId = req.params.id;
    try {
      const deletedUser = await userService.deleteUser(userId)
      if (!deletedUser)
        return res.status(404).json({ error: "user not found" });
      res.json({message:"User deleted succenssfully", user: deletedUser});
    } catch (error) {
      res.status(500).json({ error: error.massage })
    }
  };

};

module.exports = new userController();