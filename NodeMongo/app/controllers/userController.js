const User = require('../models/user.js');


// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.email) {
        return res.status(400).send({
            message: "User email can not be empty"
        });
    }

    if (!req.body.fullName) {
        return res.status(400).send({
            message: "User full name can not be empty"
        });
    }

    if (!req.body.password) {
        return res.status(400).send({
            message: "User Password can not be empty"
        });
    }

    // Create a Note
    const user = new User({
        id:req.body.id,
        fullName: req.body.fullName, 
        email:req.body.email,
        password: req.body.password
    });

    // Save Note in the database
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {

    console.log(req.body.email)
    User.find()
    .then(useres => {
        res.send(useres);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {

    console.log(req.body.email)
    var query={email:req.body.email,password:req.body.password}
    console.log(query)
    User.find(query)
    .then(user => {
        if(!user) {
            console.log("Invalid User NAme")
            return res.status(404).send({
                message: "Note not found with id " + req.body.email
            });            
        
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.body.email
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.body.email
        });
    });
};
