import express from 'express';
const router= express.Router();


//importing from userController
import { register, login,checkout} from '../controller/userController.js';


//register route
router.post('/register',register)

//login route
router.post('/login',login)

//checkout route

router.get('/check',checkout)

export default router;