import styled from "@emotion/styled"

export default function Container({ children, className, ...props }) {
    let classes = [
        'container'
    ]

    className ? classes.push(className) : null

    const StyledDiv = styled.div`
    margin: 0 auto;
    max-width: 120.0rem;
    padding: 0 2.0rem;
    position: relative;
    width: 100%
    `
    return <StyledDiv className={classes.join(' ')} {...props}>{children}</StyledDiv>
}
