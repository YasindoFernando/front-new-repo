module.exports = (app) => {
    const notes = require('../controllers/userController.js');
    

    // Create a new Note
    app.post('/user', notes.create);

    // Retrieve all Notes
    // app.post('/user', notes.findAll);

    // Retrieve a single Note with noteId
    app.post('/log', notes.findOne);

    


    

}