import Section from '@/components/section'
import Typography from '@/components/typography'
import Button from '@/components/button'
import { theme } from '@/lib/theme'
import styled from '@emotion/styled'
import Link from 'next/link'

export default function Footer() {
    return (
        <Section id="footer" variant='contained' paddingTop="10vw" paddingBottom="10vw" style={{color:"#fff"}}>
            <Typography variant="h5" component="div" align="center" color="#fff" marginless>
                Get in touch
            </Typography>
            <StyledEmail variant="h2" align="center" color="#fff">
                <Link href="mailto:angus@eggcellentstudio.com">
                    <a style={{color:'inherit'}}>angus@eggcellentstudio.com</a>
                </Link>
            </StyledEmail>
            <div style={{marginTop: '4rem',textAlign:'center'}}>
                <Button to={theme.socialMedia.website} text='Website' variant='clear' target="_blank" icon />
                <Button to={theme.socialMedia.linkedin} text='LinkedIn' variant='clear' target="_blank" icon />
            </div>
        </Section>
    )
}

const StyledEmail = styled(Typography)`
@media (max-width: 767px) {
    font-size: 2rem;
}
`