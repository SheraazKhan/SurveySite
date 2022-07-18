// require modules for the User model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema(
    {
        username:
    {
        type: String,
        default: '',
        trim: true,
        required: 'Username is required'
    },

    password:
    {
        type: String,
        default: '',
        trim: true,
        required: 'Password is required'
    },
    
    email:
    {
        type: String,
        default: '',
        trim: true,
        required: 'Email is required'
    },

    displayName:
    {
        type: String,
        default: '',
        trim: true,
        required: 'Display name is required'

    },
    created:
    {
        type: Date,
        default: Date.now,
        required: 'Created date is required'

        
    },
    updated:
    {
        type: Date,
        default: Date.now,
    }

},

    {
        collection: 'users'
    }
)

// configure options for the User model

let options = ({ missingPasswordError: 'Wrong password' });
User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);