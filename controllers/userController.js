const { User } = require("../models");

module.exports = {
    getUser: function(req, res)
    {
        User.find({ _id: req.params.id }, (err, result) => {
        if (err)
        {
            console.error(err);
            return res.status(500).json({ message: "Failed to load record" });
        }
        res.status(200).json(result);
    });
    },

    getUsers: function(req, res)
    {
        User.find({}, (err, result) => {
            if (err)
            {
                console.error(err);
                return res.status(500).json({ message: "Failed to load records" });
            }
            res.status(200).json(result);
        });
    },
    
    createUser: function(req, res)
    {
        const newUser = new User(
            {
                username: req.body.username,
                email: req.body.email
            }
        );
        newUser.save();

        if(newUser)
        {
            res.json(newUser);
        }
        else
        {
            console.error("Failed to save record");
            res.status(500).json("Failed to save record");
        }
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