import Layout from '@/components/layout'
import SEO from '@/components/seo'
import { theme } from '@/lib/theme'
import Row from '@/components/row'
import Section from '@/components/section'
import Column from '@/components/column'
import Button from '@/components/button'
import Box from '@/components/box'
import Typography from '@/components/typography'
import Image from '@/components/image'
import WorkElement from '@/components/work-element'
import styled from '@emotion/styled'
import Footer from '@/components/footer'
import { Description } from '@/lib/constants'

export default function Index() {

    const title = theme.siteDetails.seoTitle
    const slogan = theme.siteDetails.slogan

    return (
        <Layout>
            <SEO title={`${title} - ${slogan}`} description={theme.siteDetails.description} image="/images/featured-image.jpg" />
            <Section id="hero" variant='contained' bg_color={"#fff"} paddingTop="10vw" paddingBottom="10vw">
                <Row>
                    <Column md={4} margin_bottom_mobile="2rem">
                        <Image src='/images/angus-portrait.jpg' alt='Photo of Angus' style={{maxWidth: '30rem',margin:'0 auto'}} />
                    </Column>
                    <Column md={8}>
                        <Typography variant="h1">
                            UI/UX Designer & Developer
                        </Typography>
                        <Typography>
                            {Description}
                        </Typography>
                        <div style={{marginTop: '4rem'}}>
                            <Button to={theme.socialMedia.website} text='Website' variant='clear' target="_blank" icon />
                            <Button to={theme.socialMedia.linkedin} text='LinkedIn' variant='clear' target="_blank" icon />
                        </div>
                    </Column>
                </Row>
            </Section>
            <Section id="work" variant='contained' paddingTop="10vw" paddingBottom="10vw">
                <Typography variant="h5" component="div" align="center" color="#fff" marginless>
                    Explore
                </Typography>
                <Typography variant="h2" align="center" color="#fff">
                    Featured work
                </Typography>
                <StyledWorkWrapper style={{marginTop: '5rem'}}>
                    <Column md={12}>
                        <WorkElement featured={true} title="Genelle" description="Developed a multilingual marketing site in Next.js, and designed their fitness & meal plans, dashboard and profile management web apps." category="UI/UX Design & Development" link="https://genelle.com/" type="slider" image={["/images/work/genelle.jpg", "/images/work/genelle-mp.jpg", "/images/work/genelle-fp.jpg", "/images/work/genelle-reports.jpg", "/images/work/genelle-profile.jpg"]} />
                    </Column>
                    <Column md={6}>
                        <WorkElement title="Everything Shiny" description="Designed and developed a marketing site in Next.js with a custom Wordpress backend for bookings and payments." category="UI/UX Design & Development" image="/images/work/everythingshiny.jpg" link="https://everythingshiny.com.au/" />
                    </Column>
                    <Column md={6}>
                        <WorkElement title="Gathering the Remnant 2023" description="Designed and developed a marketing site in Next.js for an event held by a local messianic jewish community on the Gold Coast." category="UI/UX Design & Development" image="/images/work/gatheringtheremnant2023.jpg" link="https://gatheringtheremnant2023.com/" />
                    </Column>
                    <Column md={6}>
                        <WorkElement title="Senserie" description="Designed and developed a custom Wordpress marketing site and designed backend screens to enhance their users' custom pages." category="Website Design & Development" image="/images/work/senserie.jpg" link="https://senserie.com" />
                    </Column>
                    <Column md={6}>
                        <WorkElement title="Career Stylr" description="Designed and developed a custom marketing and e-commerce site in Wordpress." category="Website Design & Development" image="/images/work/career-stylr.jpg" link="https://careerstylr.com.au" />
                    </Column>
                </StyledWorkWrapper>
            </Section>
            <Section id="services" bg_color={"#fff"} variant='contained' paddingTop="10vw" paddingBottom="10vw">
                <Typography variant="h5" component="div" align="center" marginless>
                    Services
                </Typography>
                <Typography variant="h2" align="center">
                    What I can provide
                </Typography>
                <Row style={{marginTop: '5rem'}}>
                    <Column md={4} margin_bottom_mobile="2rem">
                        <Box>
                            <Typography variant="h4" align="center">
                                UI/UX Design
                            </Typography>
                            <Typography align="center">
                                I can design and develop any ideas you may have, nothing is too crazy if you have an imagination.
                            </Typography>
                        </Box>
                    </Column>
                    <Column md={4} margin_bottom_mobile="2rem">
                        <Box>
                            <Typography variant="h4" align="center">
                                Web Development
                            </Typography>
                            <Typography align="center">
                                I can build in custom PHP, Wordpress, HTML (SCSS, CSS, JS), REACT frameworks and also Web3. Nothing is too much for me to handle.
                            </Typography>
                        </Box>
                    </Column>
                    <Column md={4} margin_bottom_mobile="2rem">
                        <Box>
                            <Typography variant="h4" align="center">
                                Website Audits
                            </Typography>
                            <Typography align="center">
                                I can thoroughly study and test whatever website or app you already have in order to help you thrive.
                            </Typography>
                        </Box>
                    </Column>
                </Row>
            </Section>
            <Footer />
        </Layout>
    )
}

const StyledWorkWrapper = styled(Row)`
margin-bottom: -5rem;
.column {
    margin-bottom: 5rem;
}
`