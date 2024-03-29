import Layout from '@/layouts/main'
import Fonts from '@/components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '@/components/chakra'
import '@/lib/styles.css'
import "focus-visible/dist/focus-visible"

function Website({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

export default Website
