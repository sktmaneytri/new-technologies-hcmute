const posts = require('../models/post');

class HomeController {
    index(req, res) {
        res.render('home', {
            title: 'Home Page',
            data: posts
        });
    }
}

module.exports = new HomeController;