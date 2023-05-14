
import NextLink from 'next/link'

import { ChevronRightIcon } from '@chakra-ui/icons';
import {Container, Box, Heading, Image, useColorModeValue, Link, Button} from '@chakra-ui/react';

import confetti from 'canvas-confetti';

import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section'
import Paragraph from '../components/paragraph';

const Page = () => {
    

    return(
        <Layout>
        <Container>
            <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align='center'>
                Hello, I am a freelancer dev in Peru!
            </Box>
            <Box display={{ md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as='h2' variant='page-title'>
                        Jhomar Astuyauri
                    </Heading>
                    <p>Frontend/Product/Design</p>
                </Box>
                <Box flexShrink={0} mt={{base:4, md:0}} ml={{md:6}} align='center' w="100px" h="100px" display="inline-block">
                        <Image borderColor='whiteAlpha.800' borderWidth={2} borderStyle="solid" display="inline-block" borderRadius="full"
                        height="100"
                        width="100" 
                        src="/images/JhomarConsultor.png"
                        alt='Profile image'
                        />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Jhomar es un estudiantelorem lorem telorem lorem  telorem lorem  telorem lorem  telorem lorem  telorem lorem  telorem lorem  telorem lorem  telorem lorem de Ing. ucto llamado {' '}
                    <NextLink href="/projects/pilar">
                        <Link>Pilar</Link>
                    </NextLink>
                    .
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href='/projects'>
                        <Button 
                        rightIcon={<ChevronRightIcon/>}
                        colorScheme='teal'
                        >My portfolio</Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as ='h3' variant='section-title'>
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2023 to present</BioYear>
                    Working as a freelancer
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Complete el Bootcamp Fullstack MERN, Spring Boot & Flask de Coding Dojo Chile
                </BioSection>
            </Section>
            <Section delay={0.2}>
                <Heading as ='h3' variant='section-title'>
                    I ♥
                </Heading>
                <Paragraph>
                    All kind of Films, Music,{' '}
                    <Link href="/" target="_blank">
                        be a Volunteer
                    </Link>
                    , Swimming,{' '}
                    <Link href="/" target="_blank">
                        Teach
                    </Link>
                </Paragraph>
            </Section>
        </Container>
        </Layout>
    )
}
export default Page;