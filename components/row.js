import styled from "@emotion/styled"

export default function Row({
    alignItems,
    align,
    direction,
    children,
    className,
    ...props }) {

    let classes = [
        'row'
    ]

    className ? classes.push(className) : null

        switch (align) {
            case "center":
                align = "center"
                break
            case "left":
                align = "flex-start"
                break
            case "right":
                align = "flex-end"
                break
            default:
                align = "flex-start"
                break
        }

        switch (alignItems) {
            case "center":
                alignItems = "center"
                break
            case "left":
                alignItems = "flex-start"
                break
            case "right":
                alignItems = "flex-end"
                break
            default:
                alignItems = ""
                break
        }

    const StyledDiv = styled.div`
        display: flex;
        flex-direction: ${direction ? direction : 'row'};
        flex-wrap: wrap;
        margin-left: -1.5rem;
        width: calc(100% + 3.0rem);
        justify-content: ${align};
        align-items: ${alignItems};
    `

    return (
        <StyledDiv className={classes.join(' ')} {...props}>
            {children}
        </StyledDiv>
    )
}
