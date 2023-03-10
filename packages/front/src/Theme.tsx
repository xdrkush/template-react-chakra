import { extendTheme } from '@chakra-ui/react'
export const theme = extendTheme({

    initialColorMode: 'system',
    useSystemColorMode: true,
    fontSizes: {
        // xs: '7px',
        // sm: '11px',
        // md: '14px',
        // lg: '18px',
        // xl: '32px',
        // xxl: '45px',
    },
    colors: {
        primary: {
            50: '#1E998C',
            100: "#1E998C",
            500: '#1E998C',
            800: '#1E998C',
            900: '#1E998C ',
        },
        secondary: {
            50: '#f7fafc',
            500: '#718096',
            900: '#171923',
        },
        accent: {
            50: '#f7fafc',
            500: '#718096',
            900: '#171923',
        },
        success: {
            50: '#f7fafc',
            500: '#718096',
            900: '#171923',
        },
        warning: {
            50: '#f7fafc',
            500: '#718096',
            900: '#171923',
        },
        danger: {
            50: '#f7fafc',
            500: '#718096',
            900: '#171923',
        },
        custom: {
            50: '#f7fafc',
            500: '#718096',
            900: '#171923',
        }
    },
    components: {
        Drawer: {
            parts: ['dialog', 'header', 'body'],
            variants: {
                secondary: {
                    dialog: {
                        maxW: "220px",
                        borderRight: "1px",
                        borderRightColor: 'gray.200'
                    },
                    header: {
                        maxW: "220px",

                    },
                    body: {
                        maxW: "220px",

                    }
                }
            },
        }
    }
})
