import { Router } from 'express'; 
import PostController from '../controllers/post.controller.js';
 const router = new Router();
  
router.get('/posts', (req, res) =>{
    PostController.getAll(req, res);
});
router.get('/posts/:id', (req, res) =>{
    PostController.getPost(req, res);
});


router.post('/posts', (req, res) =>{
    PostController.addPost(req, res);
});

router.put('/posts/:id', (req, res) =>{
    PostController.updatePost(req, res);
});

router.delete('/posts/:id', (req, res) =>{
    PostController.deletePost(req, res);
});
// router.post('/posts/:id/comment', (req, res) =>{
//     PostController.addPost(req, res);
// });
// router.post('/posts/:id/comment', (req, res) =>{
//     PostController.addComment(req, res);
// });
 export default router;
