import Head from 'next/head'
//import dynamic from 'next/dynamic'

import {Box, Container} from '@chakra-ui/react'
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";



const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Jake's homepage"/>
                <meta name="author" content="Jake Sumner"/>
                <meta name="author" content="jakezion"/>
                <link rel="apple-touch-icon" href="apple-touch-icon.png"/>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@JakeSumner_11"/>
                <meta name="twitter:creator" content="@JakeSumner_11"/>
                <meta name="twitter:image" content="/card.png"/>
                <meta property="og:site_name" content="Jake Sumners' Homepage"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="/card.png"/>
                <base href="/"/>
                    <meta name="robots" content="noindex"/>
                    <title>Jake Sumner - Homepage</title>
            </Head>

            <Navbar path={router.asPath}/>

            <Container maxW="container.md" pt={14}>

                {children}

                <Footer/>
            </Container>
        </Box>
)
}

export default Main
