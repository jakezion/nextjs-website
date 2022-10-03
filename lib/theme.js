import {extendTheme} from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'

const colors = {
    primary: '#fdf9f3',
    primaryDark: '#2D2A2E',
    secondary: '#3D3D3D',
    accent: '#F9EDDC',
    text: '#292929',
    border: '#525252',

    monoGold: '#FFD866',
    monoPink: '#FF6188',
    monoOrange: '#FC9867',
    monoYellow: '#FFD866',
    monoGreen: '#A9DC76',
    monoBlue: '#78DCE8',
    monoPurple: '#AB9DF2'
}

const styles = {
    global: props => ({
        body: {
            bg: mode(colors.primary, colors.primaryDark)(props)
        }
    })
}

const components = {
    Heading: {
        variants: {

            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: colors.accent, //TODO: FIX
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }

        }
    },
    Link: {
        baseStyle: props => ({
            color: mode(colors.primaryDark, colors.primary)(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "'JetBrains Mono'"
}


const config = {
    initialColorMode: 'light',
    useSystemColorMode: true
}

const theme = extendTheme({config, styles, components, fonts, colors})
export default theme
