const { Thought } = require("../models");

module.exports = {
    getThought: function(req, res)
    {
        res.send("Get a thought!");
    },

    getThoughts: function(req, res)
    {
        res.send("Get all thoughts!");
    },
    
    createThought: function(req, res)
    {
        res.send("Create a thought!");
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
    
    deleteReaction: function(req, res)
    {
        res.send("Delete a reaction!");
    },
}