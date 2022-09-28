import styled from "@emotion/styled"

export default function Divider({
    className,
    height,
    line_type,
    color,
    width,
    margin,
    margin_position,
    ...props
}) {

    let classes = [
        'divider',
    ]

    let typeStyles
    let customWidth

    className ? classes.push(className) : null
    
    color ? color = `background-color:${color};`: null

    if(height) {
        if(line_type === 'small_line' || line_type === 'full_width_line') {
            typeStyles = {
                marginTop: `${PxToRem(margin/2)}rem;`,
                marginBottom: `${PxToRem(margin/2)}rem;`,
            }
        } else {
            typeStyles = {
                height: `${PxToRem(height)}rem;`,
            }
        }
    }

    if(line_type === 'small_line') {
        customWidth =  '20%'
    }

    if(line_type === 'custom_line') {
        if(width) {
            if (width.includes('%')) {
                customWidth = `${width}`
            } else {
                customWidth = `${PxToRem(width)}rem`
            }
        }

        if(margin) {
            margin = `${PxToRem(margin)}rem`

            if(margin_position === 'bottom') {
                margin = `margin-bottom:${margin};`
            } else if(margin_position === 'top') {
                margin = `margin-top:${margin};`
            } else {
                margin = `margin-top:${margin};margin-bottom:${margin};`
            }
        }
    }


    const StyledDivider = styled.div`
        width: ${customWidth};
        ${typeStyles}
        ${margin}
        ${color}
    `

    return (
        <StyledDivider className={classes.join(' ')} {...props} />
    )

}

function PxToRem(px) {
    px = parseFloat(px);
    px = px / 10;
    px = px.toFixed(1);
    return px;
}
