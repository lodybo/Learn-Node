exports.homePage = (req, res) => {
  res.render('index');
};

exports.addStore = (reg, res) => {
  res.render('editStore', {
    title: 'Add Store'
  });
};