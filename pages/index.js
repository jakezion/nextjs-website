import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    Flex,
    Image,
    SimpleGrid,
    Button,
    List,
    ListItem,
    Icon,
    useColorModeValue, Spacer, Tooltip
} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
//import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {GridItem} from '../components/grid-item'
import {IoLogoInstagram, IoLogoGithub} from 'react-icons/io5'
import thumbGithub from '../public/images/works/github.png'
import thumbYoutube from '../public/images/works/youtube.png'

const Home = () => (
    <Layout>
        <Container>
            <Box
                borderRadius="lg"
                mb={6}
                mt={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            >
                Master&#39;s Student at the University of Southampton
                Theme is monokai pro @link
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Jake Sumner
                    </Heading>
                    <p>[ Front-End / Back-End / Security ]</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{base: 4, md: 0}}
                    ml={{md: 6}}
                    textAlign="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/jake.jpg"
                        alt="Profile image"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Jake aspires to become a Full-Stack developer [MEAN/LAMP/.NET].
                    Some pieces I&#39;ve worked on are available on: {' '}
                    <NextLink href="/works/github">
                        <Link>GitHub</Link>
                    </NextLink>
                    .
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon/>} color={useColorModeValue("white","black")} bg={useColorModeValue('monoPurple', 'monoYellow')}>
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Tech Stack
                </Heading>
                <Flex>
                    <Tooltip label='Javascript' placement='bottom'>
                        <Image
                            maxWidth="32px"
                            maxHeight="32px"
                            display="inline-block"
                            src="/images/icons/javascript.png"
                            alt="JavaScript Logo"
                            loading="lazy"
                        />
                    </Tooltip>
                    <Spacer/>
                    <Tooltip label='React' placement='bottom'>
                        <Image
                            maxWidth="32px"
                            maxHeight="32px"
                            display="inline-block"
                            src="/images/icons/react.png"
                            alt="ReactJs Logo"
                            loading="lazy"
                        />
                    </Tooltip>
                    <Spacer/>
                    <Tooltip label='ExpressJs' placement='bottom'>
                        <Image
                            maxWidth="32px"
                            maxHeight="32px"
                            display="inline-block"
                            src="/images/icons/express.png"
                            alt="ExpressJs Logo"
                            loading="lazy"
                        />
                    </Tooltip>
                    <Spacer/>
                    <Tooltip label='NextJs' placement='bottom'>
                        <Image
                            maxWidth="32px"
                            maxHeight="32px"
                            display="inline-block"
                            src="/images/icons/next.png"
                            alt="NextJs Logo"
                            loading="lazy"
                        />
                    </Tooltip>
                    <Spacer/>
                    <Tooltip label='GitHub' placement='bottom'>

                        <Image
                            maxWidth="32px"
                            maxHeight="32px"
                            display="inline-block"
                            src="/images/icons/github.png"
                            alt="GitHub Logo"
                            loading="lazy"
                        />
                    </Tooltip>
                    <Spacer/>
                    <Tooltip label='Vercel' placement='bottom'>

                        <Image
                            maxWidth="32px"
                            maxHeight="32px"
                            display="inline-block"
                            src="/images/icons/vercel.png"
                            alt="Vercel Logo"
                            loading="lazy"
                        />
                    </Tooltip>
                </Flex>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Hobbies
                </Heading>
                <Paragraph>
                    {' '}
                    <Link href="https://www.youtube.com/user/TheAdsync/videos" target="_blank">
                        Youtube
                    </Link>
                    , {' '}
                    <Link href="https://www.strava.com/athletes/jakesumner" target="_blank">
                        Athletics
                    </Link>
                    , {' '}
                    <Link href="https://soundcloud.com/adsync11" target="_blank">
                        Music
                    </Link>
                    , Games, JavaScript
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Socials
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/jakezion" target="_blank">
                            <Button
                                variant="ghost"
                                color={useColorModeValue('monoPurple', 'monoYellow')}
                                leftIcon={<Icon as={IoLogoGithub}/>}
                            >
                                @jakezion
                            </Button>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link href="https://instagram.com/jake_sumner" target="_blank">
                            <Button
                                variant="ghost"
                                color={useColorModeValue('monoPurple', 'monoYellow')}
                                leftIcon={<Icon as={IoLogoInstagram}/>}
                            >
                                @jake_sumner
                            </Button>
                        </Link>
                    </ListItem>
                </List>

                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        href="https://www.youtube.com/TheAdsync"
                        title="Adsync"
                        thumbnail={thumbYoutube}
                    >
                        YouTube Channel
                    </GridItem>
                    <GridItem
                        href="https://github.com/jakezion"
                        title="jakezion"
                        thumbnail={thumbGithub}
                    >
                        GitHub Page
                    </GridItem>
                </SimpleGrid>

                <Box align="center" my={4}>
                    <NextLink href="/posts">
                        <Button rightIcon={<ChevronRightIcon/>} color={useColorModeValue("white","black")} bg={useColorModeValue('monoPurple', 'monoYellow')}>
                            Popular posts
                        </Button>
                    </NextLink>
                </Box>
            </Section>
        </Container>
    </Layout>
)

export default Home
export {getServerSideProps} from '../components/chakra'
