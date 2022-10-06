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
    <Layout title="metronome">
        <Box borderRadius="lg"
             mb={6}
             mt={6}
             p={3}
             display={{md: 'flex'}}>
        <Container>

            <Title>
                JavaScript Metronome <Badge>JavaScript stack</Badge>
            </Title>
            <P>
                The Metronome is a barebones JavaScript Metronome designed for a technical task for a job application.
                It has a <em>tap tempo</em> feature which takes 4 user inputs to dictate a BPM, that can then be used to
                play the metronome. It includes 3 separate sound signatures for the metronome and the scale that is playing
                can be altered live [2/4 - 12/4]. The BPM can be altered at any point by tapping the tempo button whenever to change
                the current value of the BPM.
            </P>
            <P>
                All code is free to use, just credit my work if you decide to use the metronome in your work.
            </P>
            <UnorderedList my={4}>
                <ListItem>Metronome</ListItem>
                <ListItem>3 Individual Sounds</ListItem>
                <ListItem>Tap Tempo</ListItem>
                <ListItem>Scale Changer</ListItem>
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
                            <Tooltip label='HTML & CSS' placement='bottom'>
                                <Image
                                    maxWidth="32px"
                                    maxHeight="32px"
                                    display="inline-block"
                                    src="/images/icons/html.png"
                                    alt="HTML & CSS Logo"
                                    loading="lazy"
                                />
                            </Tooltip>

                            <Tooltip label='JavaScript' placement='bottom'>
                                <Image
                                    maxWidth="32px"
                                    maxHeight="32px"
                                    display="inline-block"
                                    src="/images/icons/javascript.png"
                                    alt="JavaScript Logo"
                                    loading="lazy"
                                />
                            </Tooltip>
                                <Tooltip label='React' placement='bottom'>
                                <Image
                                    maxWidth="32px"
                                    maxHeight="32px"
                                    display="inline-block"
                                    src="/images/icons/react.png"
                                    alt="React Logo"
                                    loading="lazy"
                                />
                            </Tooltip>
                        </Flex>
                    </span>
                </ListItem>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/jakezion/metronome" target="_blank">
                        github.com/jakezion/metronome <ExternalLinkIcon mx="2px"/>
                    </Link>
                </ListItem>
            </List>

            <ProjectImage src="/images/contents/metronome.png" alt="e-commerce"/>

        </Container>
    </Box>
    </Layout>
)

export default Work
export {getServerSideProps} from '../../components/chakra'
