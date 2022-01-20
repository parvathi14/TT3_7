import {Router} from 'express';
import {createUser} from './users';
import {checkIfAuthenticated} from './auth';
import {articles} from from './data';

const router = Router();


router.post('/auth/signup', createUser);

router.get('/articles', checkIfAuthenticated, async (_, res) => {
  return res.send(articles);
});  

export default router;