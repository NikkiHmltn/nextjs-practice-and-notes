// this is how to set up a dynamic api route
export default function handler(req, res) {
    const { id } = req.query
    res.end(`Post: ${id}`)
}

// route "/api/post/abc" will return "Post: abc"

/*
A very common RESTful pattern is to set up routes like this:

GET api/posts - gets a list of posts, probably paginated
GET api/posts/12345 - gets post id 12345
We can model this in two ways:

Option 1:
    /api/posts.js
    /api/posts/[postId].js
Option 2:
    /api/posts/index.js
    /api/posts/[postId].js

Both are equivalent. A third option of only using /api/posts/[postId].js is not valid because Dynamic Routes (including Catch-all routes - see below) do not have an undefined state and GET api/posts will not match /api/posts/[postId].js under any circumstances.
*/ 

/*
Predefined API routes take precedence over dynamic API routes, and dynamic API routes over catch all API routes. Take a look at the following examples:
    pages/api/post/create.js - Will match /api/post/create

    pages/api/post/[pid].js - Will match /api/post/1, /api/post/abc, etc. But not /api/post/create
    
    pages/api/post/[...slug].js - Will match /api/post/1/2, /api/post/a/b/c, etc. But not /api/post/create, /api/post/abc
*/ 