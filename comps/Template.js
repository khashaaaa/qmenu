import Head from 'next/head'
import Nav from './Nav'
import Foot from './Foot'

const Template = props => (
    <>
        <Head>
            <title>QMENU Digital Menu</title>
            <link rel="icon" href="/red.png" />
        </Head>
        <main>
            <Nav />
            {props.children}
            <Foot />
        </main>
    </>
)

export default Template