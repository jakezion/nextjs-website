import {Box, Link} from '@chakra-ui/react'
import {IoLogoGithub} from "react-icons/io5";
import {Icon} from "@chakra-ui/icons";


const Footer = () => {
    return (

        <footer>


                <Link href="https://github.com/jakezion/nextjs-website" isExternal>
                    <Icon as={IoLogoGithub} w={4} h={4} className="icon-inline"/>&nbsp;View Source

                </Link>

            <Box align="center" opacity={0.5} fontSize="sm">

                &copy; {new Date().getFullYear()} Jake Sumner.
            </Box>
        </footer>

    )
}

export default Footer
