import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbGithub from '../public/images/works/github.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="e-commerce" title="e-commerce" thumbnail={thumbGithub}>
            A barebones e-commerce site written in php with database integration.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="sbol" title="sbol" thumbnail={thumbGithub}>
            the SBOL visual ontology API for use in the 3rd [and upcoming] versionings of the standard.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
