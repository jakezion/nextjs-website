import {Box, Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '@/components/layouts/article'
import Section from '@/components/section'
import { WorkGridItem } from '@/components/grid-item'

import thumbGithub from '@/contents/github.png'
import thumbMetronome from '@/contents/metronome.png'
import thumbSBOL from '@/contents/sbol.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Box borderRadius="lg"
           mb={6}
           mt={6}
           p={3}
           display={{md: 'flex'}}>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>
      </Box>
      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section>
          <WorkGridItem id="e-commerce" title="Ecommerce" thumbnail={thumbGithub}>
            A barebones e-commerce site written in php with database integration.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="metronome" title="Metronome" thumbnail={thumbMetronome}>
            A JavaScript metronome with a tap tempo feature, multiple sounds and variable scale.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="sbol" title="SBOL Visual Ontology" thumbnail={thumbSBOL}>
            An SBOL Visual ontology API to fetching glyphs through HTTP methods.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
