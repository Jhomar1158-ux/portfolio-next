import {Container, Box, Heading} from '@chakra-ui/react';
import Image from 'next/image';

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
                <Box flexShrink={0} mt={{base:4, md:0}} ml={{md:6}} align='center' position="relative" width="100px" height="100px" borderRadius="full" overflow="hidden">
                    <Box position="absolute" top="0" left="0" right="0" bottom="0">
                        <Image borderColor='whiteAlpha.800' borderWidth={2} borderStyle="solid" display="inline-block" borderRadius="full"
                        height="100"
                        width="100" 
                        src="/images/JhomarConsultor.png"
                        alt='Profile image'
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
export default Page;