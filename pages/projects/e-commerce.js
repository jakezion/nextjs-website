import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Flex,
    UnorderedList,
    Image, Tooltip
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, ProjectImage, Meta} from '../../components/projects'
import P from '../../components/paragraph'

const Work = () => (
    <Layout title="e-commerce">
        <Container>
            <Title>
               e-commerce platform <Badge>php stack</Badge>
            </Title>
            <P>
                the e-commerce platform is a simple barebones, full-stack project in php that allows
                for the buying of good from a store front. customers can register, login,
                add items to a basket and purchase them from the storefront. Items have quantity
                values and is connected to a database system.
            </P>
            <P>
                All code is free to use, just credit my work if you decide to use the e-commerce
                site as a barebones for a webserver.
            </P>
            <UnorderedList my={4}>
                <ListItem>Login system</ListItem>
                <ListItem>Storefront and items</ListItem>
                <ListItem>Purchase and History</ListItem>
                <ListItem>Admin API</ListItem>
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
                            <Tooltip label='Bootstrap' placement='bottom'>
                                <Image
                                    maxWidth="32px"
                                    maxHeight="32px"
                                    display="inline-block"
                                    src="/images/icons/bootstrap.png"
                                    alt="Bootstrap Logo"
                                    loading="lazy"
                                />
                            </Tooltip>
                            <Tooltip label='PHP' placement='bottom'>
                                <Image
                                    maxWidth="32px"
                                    maxHeight="32px"
                                    display="inline-block"
                                    src="/images/icons/php.png"
                                    alt="PHP Logo"
                                    loading="lazy"
                                />
                            </Tooltip>
                            <Tooltip label='CodeIgniter4' placement='bottom'>
                                <Image
                                    maxWidth="32px"
                                    maxHeight="32px"
                                    display="inline-block"
                                    src="/images/icons/codeigniter.png"
                                    alt="CodeIgniter Logo"
                                    loading="lazy"
                                />
                            </Tooltip>
                            <Tooltip label='MySQL' placement='bottom'>
                                <Image
                                    maxWidth="32px"
                                    maxHeight="32px"
                                    display="inline-block"
                                    src="/images/icons/mysql.png"
                                    alt="MySql Logo"
                                    loading="lazy"
                                />
                            </Tooltip>
                        </Flex>
                    </span>
                </ListItem>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/jakezion/ecommerce" target="_blank">
                        github.com/jakezion/ecommerce <ExternalLinkIcon mx="2px"/>
                    </Link>
                </ListItem>
            </List>

            <ProjectImage src="/images/works/github.png" alt="e-commerce"/>
            <ProjectImage src="/images/works/github.png" alt="e-commerce"/>
        </Container>
    </Layout>
)

export default Work
export {getServerSideProps} from '../../components/chakra'
