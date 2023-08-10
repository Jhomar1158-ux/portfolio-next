import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    Heading,
    Center
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {Title, ProjectImage, Meta} from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Project = () => {
    return(
        <Layout title='Senci ATM'>
            <Container>
                <Title>
                    Senci ATM <Badge>2022 - 2023</Badge>
                </Title>
                <P>
                Senci es un cajero automático que verifica, simplifica e intercambia tu dinero digital en real, brindándote una mejor gestión de tus finanzas.
                </P>
                <List ml={4} my={4}>
                    {/* <ListItem>
                        <Meta>Webiste</Meta>
                        <Link href='https://google.com' target='_blank'>
                            https://google.com <ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem> */}
                    <ListItem>
                        <Meta>Tecnologías</Meta>
                        <span>Flask, Javascript, TailwindCSS, MySQL, Figma, Trello, Scrum</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Código</Meta>
                        <Link href='https://github.com/Jhomar1158-ux/SenciLovers' target='_blank'>
                        @github.com/Jhomar1158-ux/SenciLovers <ExternalLinkIcon mx='2'/>
                        </Link>
                    </ListItem>
                </List>
    
                <SimpleGrid columns={2} gap={2}>
                    <ProjectImage src="/images/projects/01_senci.jpeg" alt="Senci" />
                    <ProjectImage src="/images/projects/03_senci.jpeg" alt="Senci" />
                </SimpleGrid>
                <Heading as="h4" fontSize={16} my={6}>
                    <Center>Feria de Proyectos IEEE RAS Perú 2023</Center>
                </Heading>
                <ProjectImage src="/images/projects/04_senci.jpeg" alt="Senci" />
                <ProjectImage src="/images/projects/05_senci.jpeg" alt="Senci" />
            </Container>
        </Layout>
    )
}

export default Project;