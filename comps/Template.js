import Head from 'next/head'

const Template = props => (
    <>
        <Head>
            <title>QMENU Digital Menu</title>
            <link rel="icon" href="/red.png" />
        </Head>
        <main>
            {props.children}
        </main>
    </>
)

export default Template