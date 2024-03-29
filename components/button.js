import { theme } from "@/lib/theme"
import styled from "@emotion/styled"

export default function Button({
    to,
    text,
    variant,
    type,
    className,
    fullWidth,
    color,
    icon,
    ...props
}) {

    let classes = [
        'button'
    ]
    
    className ? classes.push(className) : null

    const button_styles = theme.components.button
    let button_variant
    let button_color
    let button_hover

    switch (color) {
        case "secondary":
            button_color = theme.components.button.secondary
        break;
        case "extra_color_1":
            button_color = theme.components.button.extra_color_1
        break;
        case "extra_color_2":
            button_color = theme.components.button.extra_color_2
        break;
        case "extra_color_3":
            button_color = theme.components.button.extra_color_3
        break;
    }

    if(variant === "outlined") {
        button_variant = theme.components.button.outlined
        if(color) {
            button_hover = {
                color: button_color.backgroundColor + '!important',
                '&:after': {
                    backgroundColor: button_color.backgroundColor
                }
            }
        }
    } else if(variant === "clear") {
        button_variant = theme.components.button.clear
        if(color) {
            button_hover = {
                '&:hover': {
                    backgroundColor: button_color.backgroundColor,
                    borderColor: button_color.borderColor,
                    color: button_color.color || theme.components.button.color
                }
            }
        }
    } else {
        button_variant
    }

    if(type === "button") {
        type = "button"
    } else {
        type = "a"
    }

    const StyledButton = styled[type]`
        display: inline-block;
        ${button_styles}
        ${button_variant}
        ${fullWidth ? 'width: 100%;' : 'margin-right: 4rem;'}
        -webkit-appearance: none;
        cursor: pointer;
        text-align: center;
        margin-bottom: 2rem!important;
        transition: all 0.2s linear;
        &:last-child {
            margin-bottom: 0!important;
            margin-right: 0;
        }
        ${variant !== "outlined" && (
            `@media (max-width: ${theme.breakpoints.sm}) {
                display: block;
                width: 100%;
                margin-right: 0;

                ${icon && (
                    `text-align: left;
                    svg {
                        float: right;
                    }`
                )}
            }`
        )}


        ${variant !== "clear" && variant !== "outlined" && button_color}
        ${variant === "clear" && button_hover}
        ${variant === "outlined" && button_hover}

        &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        ${icon && `
            svg {
                width: 1.6rem;
                margin-left: 1rem;
                position: relative;
                transition: all 0.2s ease-out;
            }

            &:hover svg {
                transform: translateX(.5rem);
            }

            ${fullWidth && (
                `text-align: left;
                svg {
                    float: right;
                }`
            )}
        `}
    `

    if (to) {
        return (
            <StyledButton className={classes.join(' ')} href={to} {...props}>
                <span>{text}</span>
                {icon && (
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.636 3.5C8.636 3.36739 8.58332 3.24021 8.48955 3.14645C8.39579 3.05268 8.26861 3 8.136 3H1.5C1.10218 3 0.720644 3.15804 0.43934 3.43934C0.158035 3.72064 0 4.10218 0 4.5L0 14.5C0 14.8978 0.158035 15.2794 0.43934 15.5607C0.720644 15.842 1.10218 16 1.5 16H11.5C11.8978 16 12.2794 15.842 12.5607 15.5607C12.842 15.2794 13 14.8978 13 14.5V7.864C13 7.73139 12.9473 7.60421 12.8536 7.51045C12.7598 7.41668 12.6326 7.364 12.5 7.364C12.3674 7.364 12.2402 7.41668 12.1464 7.51045C12.0527 7.60421 12 7.73139 12 7.864V14.5C12 14.6326 11.9473 14.7598 11.8536 14.8536C11.7598 14.9473 11.6326 15 11.5 15H1.5C1.36739 15 1.24021 14.9473 1.14645 14.8536C1.05268 14.7598 1 14.6326 1 14.5V4.5C1 4.36739 1.05268 4.24021 1.14645 4.14645C1.24021 4.05268 1.36739 4 1.5 4H8.136C8.26861 4 8.39579 3.94732 8.48955 3.85355C8.58332 3.75979 8.636 3.63261 8.636 3.5Z" fill="currentColor"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 0.5C16 0.367392 15.9473 0.240215 15.8536 0.146447C15.7598 0.0526784 15.6326 0 15.5 0L10.5 0C10.3674 0 10.2402 0.0526784 10.1464 0.146447C10.0527 0.240215 10 0.367392 10 0.5C10 0.632608 10.0527 0.759785 10.1464 0.853553C10.2402 0.947322 10.3674 1 10.5 1H14.293L6.146 9.146C6.09951 9.19249 6.06264 9.24768 6.03748 9.30842C6.01232 9.36916 5.99937 9.43426 5.99937 9.5C5.99937 9.56574 6.01232 9.63084 6.03748 9.69158C6.06264 9.75232 6.09951 9.80751 6.146 9.854C6.19249 9.90049 6.24768 9.93736 6.30842 9.96252C6.36916 9.98768 6.43426 10.0006 6.5 10.0006C6.56574 10.0006 6.63084 9.98768 6.69158 9.96252C6.75232 9.93736 6.80751 9.90049 6.854 9.854L15 1.707V5.5C15 5.63261 15.0527 5.75979 15.1464 5.85355C15.2402 5.94732 15.3674 6 15.5 6C15.6326 6 15.7598 5.94732 15.8536 5.85355C15.9473 5.75979 16 5.63261 16 5.5V0.5Z" fill="currentColor"/>
                    </svg>
                                   
                )}
            </StyledButton>
        )
    } else {
        return (
            <StyledButton className={classes.join(' ')} {...props}>
                <span>{text}</span>
                {icon && (
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.636 3.5C8.636 3.36739 8.58332 3.24021 8.48955 3.14645C8.39579 3.05268 8.26861 3 8.136 3H1.5C1.10218 3 0.720644 3.15804 0.43934 3.43934C0.158035 3.72064 0 4.10218 0 4.5L0 14.5C0 14.8978 0.158035 15.2794 0.43934 15.5607C0.720644 15.842 1.10218 16 1.5 16H11.5C11.8978 16 12.2794 15.842 12.5607 15.5607C12.842 15.2794 13 14.8978 13 14.5V7.864C13 7.73139 12.9473 7.60421 12.8536 7.51045C12.7598 7.41668 12.6326 7.364 12.5 7.364C12.3674 7.364 12.2402 7.41668 12.1464 7.51045C12.0527 7.60421 12 7.73139 12 7.864V14.5C12 14.6326 11.9473 14.7598 11.8536 14.8536C11.7598 14.9473 11.6326 15 11.5 15H1.5C1.36739 15 1.24021 14.9473 1.14645 14.8536C1.05268 14.7598 1 14.6326 1 14.5V4.5C1 4.36739 1.05268 4.24021 1.14645 4.14645C1.24021 4.05268 1.36739 4 1.5 4H8.136C8.26861 4 8.39579 3.94732 8.48955 3.85355C8.58332 3.75979 8.636 3.63261 8.636 3.5Z" fill="currentColor"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 0.5C16 0.367392 15.9473 0.240215 15.8536 0.146447C15.7598 0.0526784 15.6326 0 15.5 0L10.5 0C10.3674 0 10.2402 0.0526784 10.1464 0.146447C10.0527 0.240215 10 0.367392 10 0.5C10 0.632608 10.0527 0.759785 10.1464 0.853553C10.2402 0.947322 10.3674 1 10.5 1H14.293L6.146 9.146C6.09951 9.19249 6.06264 9.24768 6.03748 9.30842C6.01232 9.36916 5.99937 9.43426 5.99937 9.5C5.99937 9.56574 6.01232 9.63084 6.03748 9.69158C6.06264 9.75232 6.09951 9.80751 6.146 9.854C6.19249 9.90049 6.24768 9.93736 6.30842 9.96252C6.36916 9.98768 6.43426 10.0006 6.5 10.0006C6.56574 10.0006 6.63084 9.98768 6.69158 9.96252C6.75232 9.93736 6.80751 9.90049 6.854 9.854L15 1.707V5.5C15 5.63261 15.0527 5.75979 15.1464 5.85355C15.2402 5.94732 15.3674 6 15.5 6C15.6326 6 15.7598 5.94732 15.8536 5.85355C15.9473 5.75979 16 5.63261 16 5.5V0.5Z" fill="currentColor"/>
                    </svg>                
                )}
            </StyledButton>
        )
    }

}
