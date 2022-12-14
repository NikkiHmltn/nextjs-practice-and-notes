import Layout from '../../components/layout'
import { getPostData } from '../../lib/posts';


export default function Post({postData}) {
    return(
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
        </Layout>
    )
}

export async function getStaticPaths() {
    //return list of values for id
    // If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.

    // If fallback is true, then the behavior of getStaticProps changes:

    // The paths returned from getStaticPaths will be rendered to HTML at build time.
    // The paths that have not been generated at build time will not result in a 404 page. Instead, Next.js will serve a “fallback” version of the page on the first request to such a path.
    // In the background, Next.js will statically generate the requested path. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.
    // If fallback is blocking, then new paths will be server-side rendered with getStaticProps, and cached for future requests so it only happens once per path.
}

// Important: The returned list is not just an array of strings — it must be an array of objects that look like the comment above. Each object must have the params key and contain an object with the id key (because we’re using [id] in the file name). Otherwise, getStaticPaths will fail.
export async function getStaticProps({params}){
    // fetch data for the post using params.id
    // const postData = getPostData(params.id);
    // return {
    //     props: {
    //     postData,
    //     },
    // };
}