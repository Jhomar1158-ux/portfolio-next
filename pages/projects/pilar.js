import {
    Container,
    Badge,
    Link,
    List,
    ListItem
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
                    App with energy
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Webiste</Meta>
                        <Link href='https://google.com' target='_blank'>
                            https://google.com <ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Flutter, Firebase, GCP, DialogFlow, Express.js, Google Calendar API</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href='https://github.com/Pilar-App/pilar-app' target='_blank'>
                        @github.com/Pilar-App/pilar-app <ExternalLinkIcon mx='2'/>
                        </Link>
                    </ListItem>
                </List>
                <ProjectImage src='/images/projects/01_pilar.jpg' alt='Pilar App'/>
                <ProjectImage src='/images/projects/02_pilar.jpg' alt='Pilar App'/>
            </Container>
        </Layout>
    )
}

export default Project;