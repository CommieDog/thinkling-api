const { Thought } = require("../models");

module.exports = {
    getThought: function(req, res)
    {
        Thought.find({ _id: req.params.id }, (err, result) => {
        if (err)
        {
            console.error(err);
            return res.status(500).json({ message: "Failed to load thought" });
        }
        res.status(200).json(result);
    });
    },

    getThoughts: function(req, res)
    {
        Thought.find({}, (err, result) => {
            if (err)
            {
                console.error(err);
                return res.status(500).json({ message: "Failed to load thoughts" });
            }
            res.status(200).json(result);
        });
    },
    
    createThought: function(req, res)
    {
        const newThought = new Thought(
            {
                thoughtText: req.body.thoughtText,
                username: req.body.username
            }
        );
        newThought.save();

        if(newThought)
        {
            res.json(newThought);
        }
        else
        {
            console.error("Failed to save thought");
            res.status(500).json("Failed to save thought");
        }
    },
    
    updateThought: function(req, res)
    {
        res.send("Update a thought!");
    },
    
    deleteThought: function(req, res)
    {
        res.send("Delete a thought!");
    },
    
    addReaction: function(req, res)
    {
        res.send("Add a reation!");
    },
    
    // Ugh. Was not able to get this working
    deleteReaction: function(req, res)
    {
        res.send("Delete a reaction!");
    },
}