const { ObjectID } = require("bson");
const { Schema, model } = require("mongoose");

const reactionSchema = new Schema(
    {
        reactionId: { type: ObjectID, default: () => new Types.ObjectId() },
        reactionBody: { type: String, required: true, maxlength: 280 },
        username: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
    }
);

const thoughtSchema = new Schema(
    {
        thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
        createdAt: { type: Date, default: Date.now },
        username: { type: String, required: true },
        /*thoughts:
        [
            {
              type: Schema.Types.ObjectId,
              ref: 'thought',
            },
        ],*/
        reactions: [ reactionSchema ],
    }
);

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;