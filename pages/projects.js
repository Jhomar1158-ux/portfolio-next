import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

const Projects = () => {
    return(
        <Layout>
            <Container>
                <Heading as='h3' fontSize={20} mb={4}>
                    Projects
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="pilar" title='Pilar App' thumbnail={'/images/projects/bannerPilar.jpg'}>
                            App para gestionar tu energia fisica, mental y emocional
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="senci" title='Senci ATM' thumbnail={'/images/projects/bannerSenci.jpg'}>
                            Cajero electronico de la billeteras virtual Yape
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="pilar" title='Pilar App' thumbnail={'/images/projects/bannerPilar.jpg'}>
                            App para gestionar tu energia fisica, mental y emocional
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="senci" title='Senci ATM' thumbnail={'/images/projects/bannerSenci.jpg'}>
                            Cajero electronico de la billeteras virtual Yape
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="pilar" title='Pilar App' thumbnail={'/images/projects/bannerPilar.jpg'}>
                            App para gestionar tu energia fisica, mental y emocional
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="senci" title='Senci ATM' thumbnail={'/images/projects/bannerSenci.jpg'}>
                            Cajero electronico de la billeteras virtual Yape
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="pilar" title='Pilar App' thumbnail={'/images/projects/bannerPilar.jpg'}>
                            App para gestionar tu energia fisica, mental y emocional
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="senci" title='Senci ATM' thumbnail={'/images/projects/bannerSenci.jpg'}>
                            Cajero electronico de la billeteras virtual Yape
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Projects;