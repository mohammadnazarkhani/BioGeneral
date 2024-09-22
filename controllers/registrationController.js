// @desc    Login page
// @route   GET /login
export const getLogin = (req, res) => {
    res.status(200).render('login');
};

// @desc    Signin page
// @route   GET /singin
export const getSignin = (req, res) => {
    res.status(200).render('singin');
};