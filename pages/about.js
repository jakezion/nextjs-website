import {Box, Container, Heading} from '@chakra-ui/react'
import Layout from '@/layouts/article'
import Section from '@/components/section'
// import { GridItem } from '../components/grid-item'


const About = () => (
  <Layout title="About">
    <Container>
        <Box borderRadius="lg"
             mb={6}
             mt={6}
             p={3}
             display={{md: 'flex'}}>

      <Heading as="h3" fontSize={20} mb={4}>
        About Me
      </Heading>
        </Box>
      <Section delay={0.1}>



{/*        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="temp"
            thumbnail={thumbFishWorkflow}
            href="https://www.youtube.com/"
          />
          <GridItem
            title="temp"
            thumbnail={thumbMyDeskSetup}
            href="https://www.youtube.com/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="temp"
            thumbnail={thumb500PaidUsers}
            href="https://www.youtube.com/"
          />
          <GridItem
            title="temp"
            thumbnail={thumbFinancialGoal}
            href="https://www.youtube.com/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="temp"
            thumbnail={thumbHowToPriceYourself}
            href="https://www.youtube.com/"
          />
          <GridItem
            title="temp"
            thumbnail={thumb50xFaster}
            href="https://www.youtube.com/"
          />
        </SimpleGrid>*/}
      </Section>
    </Container>
  </Layout>
)

export default About
export { getServerSideProps } from '../components/chakra'
