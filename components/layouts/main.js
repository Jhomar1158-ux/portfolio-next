import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar.js'
import World3D from '../world3D'

const Main = ({children, router}) => {
    return(
        <Box as="main" pb={8}>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Jhomar Astuyauri - Homepage</title>
            </Head>
            <Navbar path={router.asPath}/>
            <Container maxW="container.md" pt={14}>
                <World3D/>
                {children}
            </Container>
        </Box>
    )
}

export default Main;