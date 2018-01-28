var Feeling = require('../models/Feeling');

exports.trackPut = function(req, res, next) {
    var feeling = new Feeling({
		email: 'abc',
		icon: 1,
		feelingDes: req.body.description,
		reason: req.body.reason,
		date: Date.now
    });
    feeling.save(function(err) {
        if (err) return console.error(err);
        res.redirect('/');
    });
};