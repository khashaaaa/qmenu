import { useState } from 'react'
import ReactPageScroller from 'react-page-scroller'
import Head from 'next/head'
import Nav from './Nav'
import Foot from './Foot'

const Template = props => {

    const [currentPage, setNumber] = useState(null)

    const handlePageChange = number => {
        setNumber(number);
    }

    return (
        <>
            <Head>
                <title>QMENU Digital Menu</title>
                <link rel="icon" href="/red.png" />
            </Head>
            <main>
                <Nav />
                <ReactPageScroller
                    pageOnChange={(num) => handlePageChange(num)}
                    onBeforePageScroll={() => {}}
                    customPageNumber={currentPage}
                >
                    {props.children}
                </ReactPageScroller>
            </main>
        </>
    )
}

export default Template