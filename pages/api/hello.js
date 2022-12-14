// Do Not Fetch an API Route from getStaticProps or getStaticPaths
// You should not fetch an API Route from getStaticProps or getStaticPaths. Instead, write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function).

// Here’s why: getStaticProps and getStaticPaths run only on the server-side and will never run on the client-side. Moreover, these functions will not be included in the JS bundle for the browser. That means you can write code such as direct database queries without sending them to browsers. Read the Writing Server-Side code documentation to learn more.

// A good use case for API Routes is handling form inpu
export default function handler(req, res) {
    // const email = req.body.email;
    // Then save email to your database, etc...
}