import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
} from '@chakra-ui/react';
import {Title, ProjectImage, Meta} from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Project = () => {
    return(
        <Layout title='Plataforma Bienvenida UPC'>
            <Container>
                <Title>
                    Plataforma Bienvenida UPC <Badge>1 mes</Badge>
                </Title>
                <P>
                    Plataforma de transmisión para la bienvenida de +5000 ingresantes a la Universidad Peruana de Ciencias Aplicadas.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Tecnologías</Meta>
                        <span>Javascript, TailwindCSS, Firebase, Google Tag Manager, k6 testing, Heroku, Figma</span>
                    </ListItem>
                </List>
                <SimpleGrid columns={1} gap={2}>
                    <ProjectImage src="/images/projects/01_upc.png" alt="UPC" />
                    <ProjectImage src="/images/projects/02_upc.png"  alt="UPC"/>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Project;