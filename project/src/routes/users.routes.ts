import { response, Router } from 'express';
import CreateUserService from '../services/CreateUserService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import multer from 'multer';
import uploadConfig from '../config/upload'
import UpdateAvatarService from '../services/UploadUserAvatarService';


const usersRouter= Router();
const upload = multer(uploadConfig);



usersRouter.post('/', async (request, response) => {
  try{

  const { name, email, password} = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    password,
  });

  return response.json(user);
  }catch (err) {
    return response.status(400).json({error : err.message});
  }


});

usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'),
async(request, response) => {


     const updateUserAvatar = new UpdateAvatarService();

    const user = await updateUserAvatar.execute({
       user_id: request.user.id,
       avatarFilename: request.file.filename,


     });

     delete user.password;

     return response.json(user);


    return response.json({error: err.message});

   },
);

export default usersRouter;



