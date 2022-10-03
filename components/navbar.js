import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue, Spacer, HStack, VStack
} from '@chakra-ui/react'
import {HamburgerIcon, Icon} from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import {IoLogoGithub, IoLogoLinkedin, IoLogoTwitter} from 'react-icons/io5'

const LinkItem = ({href, path, _target, children, ...props}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href} passHref>
            <Link

                p={2}
                bg={active ? 'grassTeal' : undefined} //TODO: update and fix
                color={active ? '#2D2A2E' : inactiveColor}
                _target={_target}
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const {path} = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#fdf9f340', '#2D2A2E80')}
            css={{backdropFilter: 'blur(10px)'}}
            zIndex={1}
            {...props}
        >
            <Container
                // display="flex"
                align="center"
                p={2}
                maxW="container.xl"
                wrap="wrap"
                justify="space-between"
            >
                <Flex>
                    <VStack>
                        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                            <Logo/>
                        </Heading>
                        <Spacer/>
                    </VStack>
                    <HStack>
                        <LinkItem href="/about" path={path}>
                            About
                        </LinkItem>

                        <LinkItem href="/projects" path={path}>
                            Portfolio
                        </LinkItem>
                    </HStack>
                    <Spacer/>


                    <HStack>
                        <LinkItem
                            href="https://www.linkedin.com/in/jake-sumner-3941541a3/"
                            path={path}
                            isExternal
                        >
                            {/*TODO fix colourmodevalue*/}
                            <Icon as={IoLogoLinkedin} w={5} h={5}
                                  className={` ${useColorModeValue("iconsdark", "icons")} icon-inline`}/>

                        </LinkItem>
                        <LinkItem href="https://github.com/jakezion" path={path} isExternal>
                            <Icon as={IoLogoGithub} w={5} h={5}
                                  className={` ${useColorModeValue("iconsdark", "icons")} icon-inline`}/>

                        </LinkItem>
                        <LinkItem href="https://twitter.com/JakeSumner_11" path={path} isExternal>
                            <Icon as={IoLogoTwitter} w={5} h={5}
                                  className={` ${useColorModeValue("iconsdark", "icons")} icon-inline`}/>

                        </LinkItem>

                        {/*TODO fix issue with smaller screens not removing data accordingly*/}

                        <Box pl={5} align="right">
                            <ThemeToggleButton/>

                            <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                                <Menu isLazy id="navbar-menu">
                                    <MenuButton
                                        as={IconButton}
                                        icon={<HamburgerIcon/>}
                                        variant="outline"
                                        aria-label="Options"
                                    />
                                    <MenuList>
                                        <NextLink href="/" passHref>
                                            <MenuItem as={Link}>About</MenuItem>
                                        </NextLink>
                                        <NextLink href="/works" passHref>
                                            <MenuItem as={Link}>Portfolio</MenuItem>
                                        </NextLink>
                                    </MenuList>
                                </Menu>
                            </Box>
                        </Box>
                    </HStack>

                </Flex>
            </Container>
        </Box>
    )
}

export default Navbar
