import { theme } from "@/lib/theme"
import styled from "@emotion/styled"

export default function Typography({
    variant,
    component,
    align,
    color,
    marginless,
    className,
    ...props
}) {

    let classes = ["typography"];

    className ? classes.push(className) : null;

    let typography_styles
    let typography_variant = variant || 'div'
    
    if(typography_variant !== 'p' || typography_variant !== 'div') {
        typography_styles = theme.typography[typography_variant]
    }

    if(component) {
        component = component
    } else {
        component = typography_variant
    }

    const StyledElement = styled[component]`
        margin: 0;
        ${theme.typography}
        ${typography_styles}
        ${align ? `text-align:${align};` : null}
        ${color ? `color:${color}!important;` : null}
        ${marginless ? `margin:0;` : null}

        &:last-child {
            margin-bottom: 0;
        }
    `

    return (
        <StyledElement className={classes.join(' ')} {...props}>
            {props.children}
        </StyledElement>
    )


}
