const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            match: [/.+\@.+\..+/]
        },
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'Users'
        }],
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        // prevents virtuals from creating duplicate of _id as `id`
        id: false
    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

const User = model('User', UserSchema);

module.exports = User;
