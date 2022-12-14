// The default export of _app.js is a top-level React component that wraps all the pages in your application. You can use this component to keep state when navigating between pages, or to add global styles as we're doing here.


// Important: You need to restart the development server when you add pages/_app.js. Press Ctrl + c to stop the server and run: 'npm run dev'

/*
In Next.js, you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.

The reason that global CSS can't be imported outside of pages/_app.js is that global CSS affects all elements on the page.

If you were to navigate from the homepage to the /posts/first-post page, global styles from the homepage would affect /posts/first-post unintentionally.

You can place the global CSS file anywhere and use any name.
*/
import '../styles/global.css'

// Dynamic routes can be extended to catch all paths by adding three dots (...) inside the brackets. For example:

// pages/posts/[...id].js matches /posts/a, but also /posts/a/b, /posts/a/b/c and so on.

export default function App({Component, pageProps}) {
    return(
        <Component {...pageProps} />
    )
}