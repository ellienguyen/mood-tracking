var Feeling = require('../models/Feeling');

exports.feelingPut = function(req, res, next) {
    var feeling = new Feeling({
		email: req.user.email,
		icon: req.body.level,
		feelingDes: req.body.description,
		reason: req.body.reason,
		date: Date.now
    });
    feeling.save(function(err) {
        if (err) return console.error(err);
        req.flash('message', 'feeling-post-success');
        res.redirect('/');
    });
};

exports.history = function (req, res, next) {
    Feeling.find({ email: req.user.email }, function (err, feeling) {
        res.render('history', {
            title: 'History',
            feeling: feeling
        });
    });

};

exports.advice = function (req, res, next) {
    res.render('advice', {
        title: 'Advice'
    });
};