const router = require('../node_modules/express-promise-router')();
const blogger = require('../controllers/blogger');

router.route('/blog/:id').get(blogger.get);//list of all blogs
router.route('/blog').get(blogger.list);//list of all blogs
router.route('/blog').post(blogger.create);//get single blog
router.route('/blog/:id').delete(blogger.delete);//delete blogs
router.route('/blog/:id').patch(blogger.update);//update blog

router.route('/blog/comments/:id').post(blogger.addComment);//update blog
router.route('/blog/comments/:id').get(blogger.getBlogDetails);//update blog


module.exports = router;