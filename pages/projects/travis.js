import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    AspectRatio,
} from '@chakra-ui/react';
import {Title, ProjectImage, Meta} from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Project = () => {
    return(
        <Layout title='Red Social de Turismo'>
            <Container>
                <Title>
                    Red Social de Turismo <Badge>2022</Badge>
                </Title>
                <P>
                Travis es una plataforma digital pensada en los turistas, enfocada a sus necesidades de viajero. Brindamos una red de agencias turísticas que ofrecen distintos tours.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Tecnologías</Meta>
                        <span>React.js, ChakraUI, Redux Toolkit, Figma, Trello, Scrum</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Código</Meta>
                        <Link href='https://github.com/No-Country/C7-07' target='_blank'>
                        @github.com/No-Country/C7-07 <ExternalLinkIcon mx='2'/>
                        </Link>
                    </ListItem>
                </List>
                <AspectRatio borderRadius='lg' mb ={4}>
                    <iframe width="500" height="280"
                    src="https://www.youtube.com/embed/hoXK2TT9F8M" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="autoplay; encrypted-media; fullscreen"
                    ></iframe>
                </AspectRatio>
            </Container>
        </Layout>
    )
}

export default Project;