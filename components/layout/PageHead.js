import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "CoreGameX | Built for Gamers, Creators, and Studios."}
                </title>
            </Head>
        </>
    )
}

export default PageHead