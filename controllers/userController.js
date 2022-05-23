const { User } = require("../models");

module.exports = {
    getUser: function(req, res)
    {
        res.send("Get a user!");
    },

    getUsers: function(req, res)
    {
        res.send("Get all users!");
    },
    
    createUser: function(req, res)
    {
        res.send("Create a user!");
    },
    
    updateUser: function(req, res)
    {
        res.send("Update a user!");
    },
    
    deleteUser: function(req, res)
    {
        res.send("Delete a user!");
    },
    
    addFriend: function(req, res)
    {
        res.send("Add a friend!");
    },
    
    removeFriend: function(req, res)
    {
        res.send("Remove a friend!");
    },
}