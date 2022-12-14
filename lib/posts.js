export async function getSortedPostData(){
    //For external API endpoints
    // const res = await fetch('link goes here')
    // return res.json()

    //OR query DB directly 
        // import someDatabaseSDK from 'someDatabaseSDK'

        // const databaseClient = someDatabaseSDK.createClient(...)

        // export async function getSortedPostsData() {
        //   // Instead of the file system,
        //   // fetch post data from a database
        //   return databaseClient.query('SELECT posts...')
        // }
    // This is possible because getStaticProps only runs on the server-side. It will never run on the client-side. It won’t even be included in the JS bundle for the browser. That means you can write code such as direct database queries without them being sent to browsers.

    // Development vs. Production
        // In development, getStaticProps runs on every request.
        // In production, getStaticProps runs at build time. However, this behavior can be enhanced using the fallback key returned by getStaticPaths
        // Because it’s meant to be run at build time, you won’t be able to use data that’s only available during request time, such as query parameters or HTTP headers.
}

export async function getAllPostIds() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    // const res = await fetch('..');
    // const posts = await res.json();
    // return posts.map((post) => {
    //   return {
    //     params: {
    //       id: post.id,
    //     },
    //   };
    // });
}

export function getPostData(id) {
    // fetch the data via the id
    // process it
  
    // Combine the data with the id
    return {
      id,
      ...data,
    };
  }