import { theme } from "@/lib/theme"
import styled from "@emotion/styled"

export default function Box({
    className,
    children,
}) {

    let classes = [
        'box'
    ]
    
    className ? classes.push(className) : null

    const StyledBox = styled.div`
        ${theme.components.box}
    `

    return (
        <StyledBox className={classes.join(' ')}>
            {children}
        </StyledBox>
    )

}