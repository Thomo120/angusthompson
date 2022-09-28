const colors = {
    primary: '#000',
    secondary: '#fff',
    headline: '#000',
    text: '#000',
}

const siteDetails = {
    title: 'Angus Thompson',
    seoTitle: 'Angus Thompson',
    description: `I'm Angus, a full-time UI/UX designer and developer with over ten years' worth of expertise. I specialise in designing and developing simple, attractive, and high-converting web and mobile user experiences.`,
    slogan: 'UI/UX Designer & Developer',
    author: 'Eggcellent Studio',
    url: 'https://angusthompson.com.au',
    analCode: '',
    recaptchaSiteKey: null,
    recaptchaSecretKey: null
}   

const emailDetails = {
    mailHost: null,
    devEmail: 'angus@eggcellentstudio.com', //for dev testing
    contactFrom: null,
    contactTo: null,
    contactOrders: null
}

const socialMedia = {
    facebook: null,
    twitter: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    linkedin: 'https://www.linkedin.com/in/angus-thompson-22931762/',
    website: 'https://eggcellentstudio.com',
}

export const theme = {
    siteDetails,
    emailDetails,
    socialMedia,
    breakpoints: {
        xs: '375px',
        sm: '540px',
        md: '767px',
        lg: '1024px',
    },
    colors,
    typography: {
        fontFamily: 'Lato, sans-serif',
        fontWeight: "300",
        fontSize: "2rem",
        lineHeight: "1.6",
        marginBottom: "2rem",
        color: colors.text,
        '&:last-child': {
            marginBottom: 0
        },
        '@media (max-width: 767px)': {
            fontSize: "1.6rem",
        },
        h1 : {
            fontFamily: 'Kattelyn, sans-serif',
            fontSize: "8rem",
            fontWeight: "400",
            lineHeight: "1.2",

            '@media (max-width: 767px)': {
                fontSize: "3.4rem",
            }
        },
        h2 : {
            fontFamily: 'Kattelyn, sans-serif',
            fontSize: "5rem",
            fontWeight: "400",
            lineHeight: "1.2",
            '@media (max-width: 767px)': {
                fontSize: "3rem",
            }
        },
        h3 : {
            fontFamily: 'Kattelyn, sans-serif',
            fontSize: "4rem",
            fontWeight: "400",
            lineHeight: "1.2",
            '@media (max-width: 767px)': {
                fontSize: "2.8rem",
            }
        },
        h4 : {
            fontFamily: 'Kattelyn, sans-serif',
            fontSize: "3rem",
            fontWeight: "400",
            lineHeight: "1.2",
            '@media (max-width: 767px)': {
                fontSize: "2rem",
            }
        },
        h5 : {
            letterSpacing: '0.15rem',
            textTransform: 'uppercase',
            fontSize: "2rem",
            fontWeight: "300",
            '@media (max-width: 767px)': {
                fontSize: "1.6rem",
            }
        },
        h6 : {
            fontSize: "1.4rem",
            fontWeight: "300",
            letterSpacing: '0.15rem',
            textTransform: 'uppercase',
            '@media (max-width: 767px)': {
                fontSize: "1.2rem",
            }
        }
    },
    components: {
        button: {
            backgroundColor: colors.primary,
            color: colors.secondary,
            fontSize: '2rem',
            fontWeight: '300',
            padding: '1.3rem 2.8rem',
            border: `.2rem solid ${colors.primary}`,
            borderRadius: '0',
            opacity: '1',
            '&:hover': {
                opacity: '0.9',
                color: colors.secondary,
            },
            secondary: {
                borderColor: colors.secondary,
                backgroundColor: colors.secondary,
                color: '#fff!important',
            },
            extra_color_1: {
                borderColor: colors.extra_color_1,
                backgroundColor: colors.extra_color_1,
            },
            extra_color_2: {
                borderColor: colors.extra_color_2,
                backgroundColor: colors.extra_color_2,
            },
            extra_color_3: {
                borderColor: colors.extra_color_3,
                backgroundColor: colors.extra_color_3,
            },
            outlined: {
                position: 'relative',
                backgroundColor: 'transparent',
                padding: 0,
                border: 'none',
                fontWeight: '300',
                color: colors.primary,
                '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '.2rem',
                    backgroundColor: colors.primary,
                    transition: 'all .2s linear',
                },
                '&:hover': {
                    color: colors.primary,
                    '&:after': {
                        opacity: '0',
                    }
                }
            },
            clear: {
                backgroundColor: 'transparent',
                color: 'inherit',
                borderColor: 'inherit',
                padding: '0',
                opacity: '1',
                border: 'none',
                '&:hover': {
                    borderColor: colors.primary,
                    backgroundColor: 'transparent',
                    color: 'inherit',
                    opacity: 1
                }
            },
        },
        box : {
            height: '100%',
            border: '.1rem solid rgba(0,0,0,.2)',
            borderRadius: '4rem',
            padding: '4rem',
            '@media (max-width: 767px)': {
                padding: '2rem',
            }
        },
    }
}
