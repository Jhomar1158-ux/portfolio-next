
import NextLink from 'next/link'

import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Container, Box, Heading, Image, useColorModeValue, Link, Button,
    chakra,
    UnorderedList,
    ListItem,
    Divider
} from '@chakra-ui/react';

import Layout from '../components/layouts/article';
import Section from '../components/section'
import Paragraph from '../components/paragraph';
import { PeruIcon } from '../components/PeruIcon';
import Projects from './projects';

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
    return(
        <Layout>
        <Container>
            <Box display={'flex'}>
                <Box flexGrow={1}>
                    <Box display={'flex'} justifyContent={'start'} alignItems={'center'} gap={2}>
                        <Heading as='h2' variant='page-title'>
                            Jhomar Astuyauri 
                        </Heading>
                        <PeruIcon/>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} gap={2} marginTop={1}>
                    <p>Desarrollador de Interfaz de Usuario</p>
                    <p>🏊🏽‍♂️ 🎳 🛌🏾 📽 🐰 🛸</p>
                    </Box>
                </Box> 
                <Box
                    mt={{ md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                    >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <ProfileImage
                        src="/images/JhomarConsultor.png"
                        alt="Profile image"
                        borderRadius="full"
                        width="100"
                        transform="scaleX(-1)"
                        />
                    </Box>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Proyectos
                </Heading>
                <Section delay={0.1}>
                    <Heading as="h4" variant="section-subtitle">
                        Freelancing
                    </Heading>
                    <Projects type={"freelancing"}/>
                </Section>
                <Section delay={0.1}>
                    <Heading as="h4" variant="section-subtitle">
                        Open Source
                    </Heading>
                    <Projects type={"opensource"}/>
                </Section>
            </Section>
            <Box marginY={4}>
                <Divider/>
            </Box>
            <Section delay={0.2}>
                <Box display={'flex'} justifyContent={'center'} gap={4} alignItems={'center'}>
                    <a href='https://github.com/Jhomar1158-ux' target='_blank'>
                        <Image 
                            src='/images/githubLogo.png'
                            width={5}
                            height={5}
                            alt="github"
                            />
                    </a>
                    <a href='https://www.linkedin.com/in/jhomar-astuyauri/' target='_blank'>
                        <Image 
                        src='/images/linkedinLogo.png'
                        width={5}
                        height={5}
                        alt="linkedin"
                        />
                    </a>
                    <a href='https://wa.link/2l4hkc' target='_blank'>
                        <Image 
                        src='/images/whatsappLogo.png'
                        width={5}
                        height={5}
                        alt="whastapp"
                        />
                    </a>
                    <a href='mailto:jhomarcristianelias@gmail.com'>
                        <Image 
                        src='/images/emailLogo.png'
                        width={5}
                        height={5}
                        alt="gmail"
                        />
                    </a>
                </Box>
            </Section>
        </Container>
        </Layout>
    )
}
export default Page;