import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFishWorkflow from '../public/images/contents/temp.png'
import thumbMyDeskSetup from '../public/images/contents/temp.png'
import thumb500PaidUsers from '../public/images/contents/temp.png'
import thumbFinancialGoal from '../public/images/contents/temp.png'
import thumbHowToPriceYourself from '../public/images/contents/temp.png'
import thumb50xFaster from '../public/images/contents/temp.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
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
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
