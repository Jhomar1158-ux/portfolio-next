import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Box,
    AspectRatio
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {Title, ProjectImage, Meta} from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Project = () => {
    return(
        <Layout title='Pilar App'>
            <Container>
                <Title>
                    Pilar App <Badge>2023</Badge>
                </Title>
                <P>
                Pilar es una App que te permitirá tener una mejor gestión de tu energía física, mental y emocional.
                </P>
                <List ml={4} my={4}>
                    {/* <ListItem>
                        <Meta>PRESENTACIÓN</Meta>
                        <Link href='https://google.com' target='_blank'>
                            https://google.com <ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem> */}
                    <ListItem>
                        <Meta>Plataformas</Meta>
                        <span>iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Tecnologías</Meta>
                        <span>Flutter, Firebase, GCP, DialogFlow, Express.js, Google Calendar API</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href='https://github.com/Pilar-App/pilar-app' target='_blank'>
                        @github.com/Pilar-App/pilar-app <ExternalLinkIcon mx='2'/>
                        </Link>
                    </ListItem>
                </List>
                <AspectRatio borderRadius='lg' mb ={4}>
                    <iframe width="500" height="280" src="https://www.youtube.com/embed/jNXL-Y8QysE" 
                    title="YouTube video player" 
                    frameborder="0"
                    allow="autoplay; encrypted-media; fullscreen"
                    ></iframe>
                </AspectRatio>
                <ProjectImage src='/images/projects/01_pilar.jpg' alt='Pilar App'/>
                <ProjectImage src='/images/projects/02_pilar.jpg' alt='Pilar App'/>
            </Container>
        </Layout>
    )
}

export default Project;