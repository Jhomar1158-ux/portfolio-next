import {Container, Box, Heading} from '@chakra-ui/react';

const Page = () => {
    return(
        <Container>
            <Box borderRadius='lg' bg='red' p={3} mb={6} align='center'>
                Hello, I am a freelancer dev!
            </Box>
            <Box display={{ md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as='h2' variant='page-title'>
                        Jhomar Astuyauri
                    </Heading>
                    <p>Frontend/Product/Design</p>
                </Box>
            </Box>
        </Container>
    )
}
export default Page;