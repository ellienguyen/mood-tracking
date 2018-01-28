/**
 * GET /
 */
exports.index = function(req, res) {
  if (req.user) {
    var name = req.user.name
  }
  res.render('home', {
    messages: req.flash('message'),
    title: 'Home',
    name: name
  });
};
