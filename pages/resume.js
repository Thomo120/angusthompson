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
import { Description } from '@/lib/constants'
import Divider from '@/components/divider'

const jobTypes = [
    'Full-time',
    'Part-time',
    'Contract',
    ]

export default function Resume({linkedin}) {
    const title = 'Resume'
    const slogan = theme.siteDetails.seoTitle

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
    const remove = ["Social Media Marketing","Social Marketing","Social Media","King's Christian College","TryatHome"]
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

    // add job type to experience
    experience.map((item) => {
        const jobName = item.name
        let jobType = '';

        if (jobName.includes('SEDZ') || jobName.includes('IO Labs') || jobName.includes('Genelle') || jobName.includes('Big Red Dog') || jobName.includes('APAN') || jobName.includes('Checkerplate Software') ) {
            jobType = jobTypes[2]
        } else if (jobName.includes('TryatHome') ) {
            jobType = jobTypes[1]
        }

        item.jobType = jobType

        return item
    })

    return (
        <Layout>
            <style>{styles}</style>
            <SEO title={`${title} - ${slogan}`} description={theme.siteDetails.description} image="/images/featured-image.jpg" />
            <Section paddingTop="5rem" variant='contained' bg_color="#fff">
                <StyledHeader>
                    <div className="portrait">
                        <Image src='/images/angus-portrait.jpg' alt='Photo of Angus' style={{maxWidth: '30rem',margin:'0 auto'}} />
                    </div>
                    <div className="textWrap">
                        <Typography variant='h2' component="h1" align="center" marginless>{basics.name}</Typography>
                        <Typography variant='h5' align="center">{basics.label}</Typography>
                    </div>
                </StyledHeader>
                <Divider line_type={"custom_line"} height="1" margin="50" margin_position={'top'} color="rgba(0,0,0,0.1)" />
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
                        <div id='summary' style={{marginBottom:'4rem'}}>
                            <Typography variant="h5">Summary</Typography>
                            <Typography>{basics.summary ? basics.summary : Description}</Typography>
                        </div>
                        <div id="experience">
                            <Typography variant="h5">Experience</Typography>
                            {experience.map((exp, index) => (
                                <StyledItem key={index} className="experienceItem">
                                    <Typography variant="h6" marginless>
                                        {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                                        {exp.jobType && (
                                            <span dangerouslySetInnerHTML={{__html: ' &middot; ' + exp.jobType}} />
                                        )}
                                    </Typography>
                                    <Typography variant="h4" marginless>{exp.name}</Typography>
                                    <Typography>{exp.position}</Typography>
                                    <Typography style={{fontSize:'1.6rem'}}>{exp.summary}</Typography>
                                </StyledItem>
                            ))}
                        </div>
                    </Column>
                </Row>
                <Divider line_type={"custom_line"} height="1" margin="50" margin_position={'top'} color="rgba(0,0,0,0.1)" />
            </Section>
            <Section paddingBottom="5rem" variant='contained' bg_color="#fff">
                <Typography variant="h5" align="center" marginless>Recommendations</Typography>
                <Typography align="center" style={{fontSize: '1.4rem'}}>Verified from LinkedIn</Typography>
                <Row>
                    {linkedin?.references.map((reference, index) => (
                        <Column md={6} key={index} margin_bottom_mobile={index === 0 ? '4rem' : 0}>
                            <Typography>{reference.reference}</Typography>
                            <Typography variant="h6" marginless>{reference.name}</Typography>
                        </Column>
                    ))}
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

    @media print {
        padding: 0;
        margin-right: 0;
        margin-bottom: 0;

        &:after {
            content: ', ';
        }
    }
`

const StyledHeader = styled.div`
    .portrait {
        margin: 0 auto;
        margin-bottom: 2rem;
        width: 10rem;
        height: 10rem;
        overflow: hidden;
        border-radius: 50%;
    }
`

const styles = `
@media print {
    html {
        font-size: 40%;
    }
    #footer, .no-print {
        display: none!important;
    }
}
`

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
import React from "react";

export async function getStaticProps() {
    const linkedin = JSON.parse(await fsPromises.readFile(path.join(process.cwd(), 'data/linkedin.json')));

    return {
        props: {
            linkedin
        }
    }
}