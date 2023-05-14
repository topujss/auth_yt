import { Router } from 'express';
import { getUserInfo } from '../controllers/user';

// init router from express
const router = Router();

// use router
router.route('/register').get(getUserInfo);

// import controller
export default router;
