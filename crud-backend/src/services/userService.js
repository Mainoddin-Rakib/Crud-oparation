const user = require("../modals/user");

class userService{
    async createUser(name, email, phone){
        const newUser = user({name, email, phone});
        // console.log(name, email, phone)
        return await newUser.save();
     
    }
async  getAllusers() {
    return await user.find();
};

async  getUserById(userId) {
    return await user.findById(userId);
};

async updateUser(userId, updateData) {
   return await user.findByIdAndUpdate(userId,updateData,{
     new: true
   })

};

async  deleteUser(userId) {
    return await user.findByIdAndDelete(userId);
};

};


module.exports = new userService();