import Layout from '@/components/layout'
import SEO from '@/components/seo'
import { theme } from '@/lib/theme'
import Row from '@/components/row'
import Section from '@/components/section'
import Column from '@/components/column'
import Typography from '@/components/typography'
import Image from '@/components/image'
import styled from '@emotion/styled'
import Footer from '@/components/footer'

export default function Resume({linkedin}) {
    const title = theme.siteDetails.seoTitle
    const slogan = theme.siteDetails.slogan

    const basics = linkedin.basics
    const education = linkedin.education
    const experience = linkedin.work
    const skills = linkedin.skills

    // order work experience by start date
    experience.sort((a, b) => {
        return new Date(b.startDate) - new Date(a.startDate)
    })

    // order education by start date
    education.sort((a, b) => {
        return new Date(b.startDate) - new Date(a.startDate)
    })

    // order skills by name
    skills.sort((a, b) => {
        return a.name.localeCompare(b.name)
    })

    // remove an array of items from skills array
    const removeSkills = (skills, itemsToRemove) => {
        return skills.filter((skill) => !itemsToRemove.includes(skill.name))
    }

    //  remove the following skills from the list
    const remove = ["Social Media Marketing","Social Marketing","King's Christian College"]
    const filteredSkills = removeSkills(skills, remove)

    // format date
    function formatDate(date) {
        const dateObj = new Date(date)
        return dateObj.toLocaleDateString('en-US', { year: 'numeric'})
    }

    // format mobile number from 0412345678 to 0412 345 678
    function formatMobile(mobile) {
        return mobile.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')
    }

    return (
        <Layout>
            <SEO title={`${title} - ${slogan}`} description={theme.siteDetails.description} />
            <Section paddingBottom='5rem' paddingTop="5rem" variant='contained'>
                <Typography variant='h2' component="h1" color="#fff" align="center" marginless>{basics.name}</Typography>
                <Typography variant='h5' color="#fff" align="center">{basics.label}</Typography>
            </Section>
            <Section paddingBottom='5rem' paddingTop="5rem" variant='contained' bg_color="#fff">
                <Row>
                    <Column md={4} margin_bottom_mobile="4rem">
                        <div id='contact' style={{marginBottom:'4rem'}}>
                            <Typography variant="h5">Contact</Typography>
                            <Typography marginless>{basics.email}</Typography>
                            {/*<Typography>{formatMobile(basics.phone)}</Typography>*/}
                        </div>
                        <div id='location' style={{marginBottom:'4rem'}}>
                            <Typography variant="h5">Location</Typography>
                            <Typography marginless>{basics.location.address}</Typography>
                            {/*<Typography>{formatMobile(basics.phone)}</Typography>*/}
                        </div>
                        <div id='skills' style={{marginBottom:'4rem'}}>
                            <Typography variant="h5">Skills</Typography>
                            {filteredSkills.map((skill, index) => (
                                <StyledPill key={index}>{skill.name}</StyledPill>
                            ))}
                        </div>
                        <div id='education'>
                            <Typography variant="h5">Education</Typography>
                            {education.map((education, index) => (
                                <StyledItem key={index} className="educationItem">
                                <Typography variant="h6" marginless>{formatDate(education.startDate)} - {education.endDate ? formatDate(education.endDate) : 'Present'}</Typography>
                                <Typography variant="h4" marginless>{education.institution}</Typography>
                                <Typography>{education.studyType && education.studyType + ' in ' + education.area}</Typography>
                            </StyledItem>
                            ))}
                        </div>
                    </Column>
                    <Column md={8}>
                        <div id='summary'>
                            <Typography variant="h5">Summary</Typography>
                            <Typography>{basics.summary}</Typography>
                        </div>
                        <div id="experience">
                            <Typography variant="h5">Experience</Typography>
                            {experience.map((exp, index) => (
                                <StyledItem key={index} className="experienceItem">
                                    <Typography variant="h6" marginless>{formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}</Typography>
                                    <Typography variant="h4" marginless>{exp.name}</Typography>
                                    <Typography>{exp.position}</Typography>
                                </StyledItem>
                            ))}
                        </div>
                    </Column>
                </Row>
            </Section>
            <Footer />
        </Layout>
    )

}


const StyledItem = styled.div`
    margin-bottom: 2rem;

    &:last-child {
        margin-bottom: 0;
    }
`

const StyledPill = styled.div`
    background-color: #f5f5f5;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    display: inline-block;
    font-size: 1.6rem;
`

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'

export async function getStaticProps() {
    const linkedin = JSON.parse(await fsPromises.readFile(path.join(process.cwd(), 'data/linkedin.json')));

    return {
        props: {
            linkedin
        }
    }
}