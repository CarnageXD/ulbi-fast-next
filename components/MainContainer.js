import React from 'react'
import Head from 'next/head'
import A from '../components/A'

const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords={"nextjs", "react" + keywords}></meta>
                <title>Home page</title>
            </Head>
            <div className="navbar">
                <A href='/' text='Home page' />
                <A href='/users' text='Users page' />
            </div>
            <div>{children}</div>
            <style jsx>
                {`
                    .navbar {
                        background: darkorange;
                        padding: 15px;
                    }                    
                `}
            </style>
        </>
    )
}

export default MainContainer
