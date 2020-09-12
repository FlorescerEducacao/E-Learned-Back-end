import Router from 'express';
import ensureAuthenticate from '@modules/user/infra/http/middlewares/ensureAuthenticate';
import UsersController from '../controllers/UserController';
import UserCoursesController from '../controllers/UserCoursesController';

const usersController = new UsersController();
const usersCoursesController = new UserCoursesController();

const userRouter = Router();

userRouter.post('/', usersController.create);
userRouter.get('/', ensureAuthenticate, usersController.index);

userRouter.get('/courses', ensureAuthenticate, usersCoursesController.index);
userRouter.get('/:user_id', ensureAuthenticate, usersController.show);
userRouter.post('/courses', ensureAuthenticate, usersCoursesController.create);
userRouter.put(
  '/courses',
  ensureAuthenticate,
  usersCoursesController.updateLimit,
);

export default userRouter;
