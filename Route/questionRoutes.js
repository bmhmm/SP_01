import express from 'express';
const router= express.Router();


router.get('/all-questions', (req, res) => {
    // Access user information from req.user set by authMiddleware
    const { username, userid } = req.user;
    res.status(200).json({ msg: "User is authenticated", user: { username, userid } });
});

export default router;