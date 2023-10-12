const indexView = (req, res, next) => {
    res.render('home');
}

const iconsView = (req, res, next) => {
    res.render('icons');
}

module.exports = {
    indexView,
    iconsView
}