// @desc    Home page
// @route   GET /
export const getHome = (req, res) => {
    res.status(200).render('index');
};

// @desc    About page
// @route   GET /about
export const getAbout = (req, res) => {
    res.status(200).render('about');
};