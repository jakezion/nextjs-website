import {Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbGithub from '../public/images/profile/github.png'
import thumbMetronome from '../public/images/contents/metronome.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section>
          <WorkGridItem id="e-commerce" title="e-commerce" thumbnail={thumbGithub}>
            A barebones e-commerce site written in php with database integration.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="metronome" title="metronome" thumbnail={thumbMetronome}>
            A JavaScript metronome with a tap tempo feature, multiple sounds and variable scale.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
