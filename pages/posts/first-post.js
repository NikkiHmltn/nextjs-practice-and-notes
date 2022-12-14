import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
// import Script from 'next/script'
import Layout from '../../components/layout'
import profPic from '../../public/images/profile.jpg'

export default function FirstPost(){
    return(
        // fragments still work yay!
        <>
        <Layout>
                <Head>
                    <title>First Post</title>
                </Head>
                {/* Normall how you do it */}
                    {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
                    
                    {/* Below is Next way */}
                    {/* <Script
                        src="https://connect.facebook.net/en_US/sdk.js"
                        // strategy controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time
                        strategy="lazyOnload"
                        // onLoad is used to run any JavaScript code immediately after the script has finished loading
                        onLoad={() =>
                        console.log(`script loaded correctly, window.FB has been populated`)
                        }
                    /> */}
                <h1>First Post Page</h1>
                <h1>
                    <Image
                        src={profPic}
                        alt="picture of the author"
                        // width={500} automatically provided pixels
                        // height={500} automatically provided pixels
                        // blurDataURL="data:..." automatically provided
                        placeholder="blur" // Optional blur-up while loading
                    />
                    <Link href="/">Back to Home</Link>
                    {/* Below is how to dynamic Link to page */}
                    {/* <Link href={`/blog/${post.id}`}>{post.title}</Link> */}

                    {/* Altneratively you can Link as object shown below */}
                    {/* <Link
                            href={{
                            pathname: '/blog/[id]',
                            query: { id: post.id },
                            }}
                        >
                            {post.title}
                        </Link> */}
                </h1>
            </Layout>
        </>
    )
}