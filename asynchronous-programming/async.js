/**
* @AsynchronousProgramming
* non - blocking
* 
*/

// verbose code
// function wait(ms){
//     const promise = new Promise((resolve)=>{
//         setTimeout(resolve, ms)
//     })

//     return promise;
// }

// Short from Promise timer
// const wait = (ms)=>new Promise((resolve)=> setTimeout(resolve, ms))

// wait(1000).then(()=>{
//     console.log('Done in 1000ms');
// })


// wait(2000).then(()=>{
//     console.log('Done in 2000ms');
// })


// wait(3000).then(()=>{
//     console.log('Done in 3000ms');
// })


// wait(4000).then(()=>{
//     console.log('Done in 4000ms');
// })


/**
 * /users?username=[username]
 * /posts?user_id=[user_id]
 * /comments?post_id=[post_id]
 * /users?username=[username]
 */


// const get = (url)=> new Promise.resolve()

// get(`/users?username=ashis`)
//     .then(user =>{
//         // do all other operations here
//         return get(`/posts?user_id=${user.id}`)     
//     })
//     .then(posts =>{
//         const latestPost = posts[0]
//         return get(`/comments?post_id=${latestPost.id}`) 
//     })
//     .then((comments)=>{
//         const latestComments = comments[0]
//         return get(`/users?username==${latestComments.username}`)
//     })
//     .then((user)=>{
//         console.log(user)
//     })
//     .catch(()=>{
//         console.log('Error')
//     });


// async function getUserNameAsync(username){
//    try{
//     const mainUser =  await get(`/users?username=${username}`);
//    const posts = await get(`/posts?user_id=${mainUser.id}`);
//    const comments = await get(`/comments?post_id=${post[0].id}`);
//    const user = await get(`/user?username=${comments[0].username}`);
//    console.log(user)
//    }catch(e){
//     console.log(e)
//    }
// }

// getUserNameAsync()


const axios = require('axios').default

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const POSTS_URL = 'https://jsonplaceholder.typicode.com/post'
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

async function getComments(username){
   try{
    const {data: user} = await axios.get(`${USERS_URL}?username=${username}`,{timeout: 2000})
    const {data: posts} = await axios.get(`${POSTS_URL}?userId=${user[0].id}`)
    const {data: comments} = await axios.get(`${COMMENTS_URL}?postId=${posts[0].id}`);
    const {data: userWithComment} = await axios.get(`${USERS_URL}?email=${comments[0].email}`)
    
    console.log(userWithComment)
   }catch(e){
    console.log('Error Occurred', e.toJSON());
   }
}

getComments('Bret')