import Section from '@/components/section'
import Typography from '@/components/typography'
import Button from '@/components/button'
import { theme } from '@/lib/theme'
import styled from '@emotion/styled'
import Link from 'next/link'
import Divider from '@/components/divider'

export default function Footer({inline, ...props}) {


    return (
        <>
        {inline && <div style={{backgroundColor: '#fff'}}><Divider line_type={"custom_line"} height="1" color="rgba(0,0,0,0.1)" /></div>}
        <Section id="footer" bg_color={!inline ? "" : '#fff'} variant='contained' paddingTop="10vw" paddingBottom="10vw" style={{color: !inline ? "#fff" : 'inherit'}} {...props}>
            <Typography variant="h5" component="div" align="center" color={!inline ? "#fff" : 'inherit'} marginless>
                Get in touch
            </Typography>
            <StyledEmail variant="h2" align="center" color={!inline ? "#fff" : 'inherit'}>
                <Link href="mailto:angus@eggcellentstudio.com" style={{color:'inherit'}}>
                    angus@eggcellentstudio.com
                </Link>
            </StyledEmail>
            <div style={{marginTop: '4rem',textAlign:'center'}}>
                <Button to={theme.socialMedia.website} text='Website' variant='clear' target="_blank" icon />
                <Button to={theme.socialMedia.linkedin} text='LinkedIn' variant='clear' target="_blank" icon />
            </div>
        </Section>
        </>
    )
}

const StyledEmail = styled(Typography)`
@media (max-width: 767px) {
    font-size: 2rem;
}
`