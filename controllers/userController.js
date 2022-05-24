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
    
    updateUser: async function(req, res)
    {
        User.findByIdAndUpdate(req.params.id, 
            {
                username: req.body.username,
                email: req.body.email,
            }, {new: true}, (err, result) =>
                {
                    if (err)
                    {
                        console.error(err);
                        return res.status(500).json({ message: "Failed to update record" });
                    }
                    res.status(200).json(result);
                }
        );
    },
    
    deleteUser: function(req, res)
    {
        User.deleteOne( { _id: req.params.id }, (err, result) =>
            {
                if (err)
                {
                    console.error(err);
                    return res.status(500).json({ message: "Failed to delete record" });
                }
                res.status(200).json(result);
            }
        );
    },
    
    addFriend: async function(req, res)
    {
        try
        {
            const user = await User.findById(req.params.userId);
            user.friends.push(req.params.friendId);
            user.save();
            res.send(user);
        }
        catch(error)
        {
            console.error(error);
            res.status(500).json(error);
        }
    },
    
    removeFriend: function(req, res)
    {
        res.send("Remove a friend!");
    },
}