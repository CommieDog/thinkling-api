const { Schema, model } = require("mongoose");

const emailPattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true, trim: true },
        email: { type: String, required: true, unique: true, match: [ emailPattern, "Invalid email address" ]},
        thoughts:
        [
            {
              type: Schema.Types.ObjectId,
              ref: 'thought',
            },
        ],
        friends:
        [
            {
              type: Schema.Types.ObjectId,
              ref: 'user',
            },
        ],
    },
    {
        toJSON: { virtuals: true },
    }
);

userSchema.virtual("friendCount", function ()
    {
        return this.friends.length;
    }
);

const User = model("User", userSchema);

module.exports = User;