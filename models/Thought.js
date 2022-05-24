const { ObjectID } = require("bson");
const { Schema, model } = require("mongoose");

function parseDate(date)
{
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

const reactionSchema = new Schema(
    {
        reactionId: { type: ObjectID, default: () => new Types.ObjectId() },
        reactionBody: { type: String, required: true, maxlength: 280 },
        username: { type: String, required: true },
        createdAt: { type: Date, default: Date.now, get: parseDate },
    }
);

const thoughtSchema = new Schema(
    {
        thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
        createdAt: { type: Date, default: Date.now, get: parseDate },
        username: { type: String, required: true },
        reactions: [ reactionSchema ],
    },
    {
        toJSON: { virtuals: true },
    }
);

thoughtSchema.virtual("reactionCount", function ()
    {
        return this.reactions.length;
    }
);

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;