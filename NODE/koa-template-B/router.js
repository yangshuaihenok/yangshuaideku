/**
 * 管理 router
 */
const Router = require('koa-router');
const router = new Router();

const user = {
    name: '蔡徐坤',
    posts: [
        {
            id: 0,
            title: '唱跳教学'
        },
        {
            id: 1,
            title: 'rap教学'
        },
        {
            id: 2,
            title: '篮球教学'
        }
    ]
}
const postsDetail = [
    {
        id: 0,
        content: '鸡你太美'
    },
    {
        id: 1,
        content: '<strong>哒哒哒哒</strong>'
    }
]

router.get('/user',async (ctx)=>{
    await ctx.render('user',{ user });
})
router.get('/posts',async (ctx)=>{
    const { id } = ctx.query;
    const post = postsDetail.find(postItem => postItem.id == id);
    await ctx.render('post', { post })
})
//浏览器地址栏
router.get('/create',async (ctx)=>{
    await ctx.render('create');
})
//submit method='post'
router.post('/create',async (ctx)=>{
    console.log(ctx.request.body);
    const { title,content } = ctx.request.body;
    let id = Date.now();
    user.posts.push({
        id,
        title
    })
    postsDetail.push({
        id,
        content
    })
    ctx.redirect('/user')
})

module.exports = router;
