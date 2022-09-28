import { theme } from '@/lib/theme';
import styled from '@emotion/styled';
import Container from '@/components/container';
import Button from '@/components/button';
import Typography from '@/components/typography';
import Meta from '@/components/meta';

const NotFound = () => {
    return (
        <>
        <Meta />
        <StyledOuter>
            <StyledInner>
                <Container>
                    <StyledContainer>
                        <Typography variant="h1" color="primary" align="center">404</Typography>
                        <Typography variant="h2" component="h1">
                            Our apologies.<br />We're unable to find the page you're looking for.
                        </Typography>
                        <Typography>
                            404. Page not found.
                        </Typography>
                        <Button to="/" variant="outlined" text="Return Home" style={{marginTop: '4rem'}} />
                    </StyledContainer>
                </Container>
            </StyledInner>
        </StyledOuter>
        </>
    )
}
export default NotFound;


const StyledOuter = styled.div`
height: 100vh;
background-color: ${theme.colors.secondary};
text-align: center;
`

const StyledInner = styled.div`
display: flex;
align-items: center;
height: 100%;
position: relative;
overflow: hidden;
`

const StyledContainer = styled.div`
width: 100%;
max-width: 67rem;
margin: 0 auto;

svg {
    width: 15rem;
    display: inline-block;
    margin-bottom: 4rem;
}
`