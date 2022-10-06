import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Flex,
    UnorderedList,
    Image, Tooltip, Box
} from '@chakra-ui/react'
import Layout from '@/layouts/article'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, ProjectImage, Meta} from '@/components/projects'
import P from '@/components/paragraph'

const Work = () => (
    <Layout title="sbol-visual-ontology">
        <Box borderRadius="lg"
             mb={6}
             mt={6}
             p={3}
             display={{md: 'flex'}}>
        <Container>

            <Title>
                sbol-visal-ontology v3<Badge>Java stack</Badge>
            </Title>
            <P>

            </P>
            <P>
                All code is open source, just credit the SBOL visual consortium if you decide to use any sbol related
                work in your projects.
            </P>
            <UnorderedList my={4}>
                <ListItem>SPARQL based querier</ListItem>
                <ListItem>Linked Datasets</ListItem>
                <ListItem>Glyph, Query, Graph return</ListItem>
                <ListItem>API</ListItem>
            </UnorderedList>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>PC</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>
                        <Flex>
                            <Tooltip label='Java' placement='bottom'>
                                <Image
                                    maxWidth="32px"
                                    maxHeight="32px"
                                    display="inline-block"
                                    src="/images/icons/bootstrap.png"
                                    alt="Java Logo"
                                    loading="lazy"
                                />
                            </Tooltip>
                            <Tooltip label='Apache' placement='bottom'>
                                <Image
                                    maxWidth="32px"
                                    maxHeight="32px"
                                    display="inline-block"
                                    src="/images/icons/php.png"
                                    alt="Apache Logo"
                                    loading="lazy"
                                />
                            </Tooltip>
                            <Tooltip label='HTML' placement='bottom'>
                                <Image
                                    maxWidth="32px"
                                    maxHeight="32px"
                                    display="inline-block"
                                    src="/images/icons/codeigniter.png"
                                    alt="HTML Logo"
                                    loading="lazy"
                                />
                            </Tooltip>
                        </Flex>
                    </span>
                </ListItem>
                <ListItem>
                    <Meta>API</Meta>
                    <Link href="https://vows.sbolstandard.org/" target="_blank">
                        vows.sbolstandard.org <ExternalLinkIcon mx="2px"/>
                    </Link>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/SynBioDex/sbol-visual-ontology" target="_blank">
                        github.com/SynBioDex/sbol-visual-ontology<ExternalLinkIcon mx="2px"/>
                    </Link>
                </ListItem>
            </List>

            <ProjectImage src="/images/works/github.png" alt="sbolstandard.org"/>
            <ProjectImage src="/images/works/github.png" alt="sbol-visual-ontology"/>

        </Container>
        </Box>
    </Layout>
)

export default Work
export {getServerSideProps} from '../../components/chakra'
