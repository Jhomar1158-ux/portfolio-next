import { Container, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

const Projects = ({type}) => {
    return(
        <Layout>
            <Container>
                <SimpleGrid columns={[1,2,2]} gap={3}>
                    {type === 'freelancing'?
                        (
                            <>
                                <Section>
                                    <WorkGridItem id="bienvenida-upc" title='Bienvenida de Cachimbos UPC' thumbnail={'/images/projects/bannerUPC.jpeg'}>
                                    </WorkGridItem>
                                </Section>
                                <Section>
                                    <WorkGridItem id="proindiemusic" title='Plataforma Pro Indie Music' thumbnail={'/images/projects/bannerProindiemusic.png'}>
                                    </WorkGridItem>
                                </Section>
                                {/* <Section>
                                    <WorkGridItem id="landing-ieee-aess-uni" title='Landing Page IEEE AESS UNI' thumbnail={'/images/projects/bannerTravis.jpg'}>
                                    </WorkGridItem>
                                </Section> */}
                            </>
                        ):
                        (
                            <>
                                <Section>
                                    <WorkGridItem id="pilar" title='Pilar App' thumbnail={'/images/projects/bannerPilar.jpg'}>
                                        App para gestionar tu energia fisica, mental y emocional
                                    </WorkGridItem>
                                </Section>
                                <Section>
                                    <WorkGridItem id="senci" title='Senci ATM' thumbnail={'/images/projects/bannerSenci.jpg'}>
                                        Cajero electronico de la billetera virtual Yape
                                    </WorkGridItem>
                                </Section>
                                <Section>
                                    <WorkGridItem id="travis" title='Red Social de Turismo' thumbnail={'/images/projects/bannerTravis.jpg'}>
                                        Red social de Turistas
                                    </WorkGridItem>
                                </Section>
                            </>
                        )
                    }
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Projects;