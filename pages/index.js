import {
    Heading,
    Box,
    Image,
    Tooltip, Kbd, Link, HStack
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
//import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Home = () => (
    <Layout>


        <Box borderRadius="lg"
             mb={6}
             mt={6}
             p={3}
             display={{md: 'flex'}}>
            <Box flexGrow={1}>
                <Section delay={0.1}>
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
                </Section>
                <Section delay={0.1}>
                <Heading as="h2" size='3xl' variant="page-title" align="center" >
                    Jake Sumner
                </Heading>
                </Section>
                <Section delay={0.4}>
                <Heading as='h5' size='xs' align="center" mb={6}>[ FrontEnd - BackEnd - FullStack ]</Heading>
                </Section>
                <Section delay={0.5}>
                    <p align="center">
                    Aspiring FullStack developer from the United Kingdom. 1st Class BSc (Hons) in Computer Science at
                    Keele University. Completing an MSc in Computer Science at the University of Southampton.
                </p>
                </Section>
            </Box>


        </Box>

        <Section delay={0.7}>
        <Heading as="h3" variant="section-title">
            Tech Stack
        </Heading>
        <HStack spacing='5%'>
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
        </HStack>
        </Section>
        <Section delay={0.9}>
            <Heading as="h3" variant="section-title">
                Currently Working on
            </Heading>
            <Paragraph>
                Jake is currently working on a <Kbd>Metronome</Kbd>. This metronome is JavaScript based,
                fully built in React and CSS. It uses a <i>Tap Tempo</i> feature to determine the current BPM
                and will start a metronome visualiser - with audio. It is fully responsive and works on all device
                sizes.
            </Paragraph>
            <p>
                Project Stack:
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
                <Tooltip label='CSS' placement='bottom'>
                    <Image
                        maxWidth="32px"
                        maxHeight="32px"
                        display="inline-block"
                        src="/images/icons/css.png"
                        alt="CSS Logo"
                        loading="lazy"
                    />
                </Tooltip>
            </p>
            <Link
                href="https://jakezion.github.io/metronome/"
                isExternal>

                <Image
                    borderRadius={12}
                    mt={6}
                    display="inline-block"
                    src="https://raw.githubusercontent.com/jakezion/metronome/main/public/image.png"
                    alt="Metronome Image"
                    loading="lazy">

                </Image>
            </Link>
        </Section>


     </Layout>
)

export default Home
export {getServerSideProps} from '../components/chakra'
