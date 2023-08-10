import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {Title, ProjectImage, Meta} from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Project = () => {
    return(
        <Layout title='Plataforma Pro Indie Music'>
            <Container>
                <Title>
                    Plataforma Pro Indie Music <Badge>3 meses</Badge>
                </Title>
                <P>
                Pro Indie Music conecta artistas independientes con festivales, venues, convocatorias, mercados de música, marcas en un solo lugar.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>SITIO WEB</Meta>
                        <Link href='https://proindiemusic.com/' target='_blank'>
                        https://proindiemusic <ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Tecnologías</Meta>
                        <span>Next.js, MaterialUI, TailwindCSS, Chartmetrics API, Monday</span>
                    </ListItem>
                </List>
                <SimpleGrid columns={2} gap={2}>
                    <ProjectImage src="/images/projects/01_proindiemusic.png" alt="Pro Indie Music" />
                    <ProjectImage src="/images/projects/02_proindiemusic.png" alt="Pro Indie Music" />
                </SimpleGrid>
                <SimpleGrid columns={1} gap={2}>
                <ProjectImage src="/images/projects/03_proindiemusic.png" alt="Pro Indie Music" />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Project;