import styled from '@emotion/styled'
import { theme } from '@/lib/theme'

export default function Column({
    children,
    xs,
    sm,
    md,
    lg,
    align,
    text_align,
    text_align_mobile,
    animation = 'none',
    animation_delay,
    centered_text,
    enable_boxed,
    padding,
    padding_position = 'all',
    padding_mobile,
    padding_mobile_position = 'all',
    paddingMobileInherit = true,
    margin_top,
    margin_bottom,
    margin_top_mobile,
    margin_bottom_mobile,
    text_color,
    bg_color,
    bg_image,
    bg_pos = 'top left',
    bg_color_overlay,
    column_link,
    className,
    minHeight,
    ...props
}) {

    const xsSize = theme.breakpoints.xs
    const smSize = theme.breakpoints.sm
    const mdSize = theme.breakpoints.md
    const lgSize = theme.breakpoints.lg
    
    switch (xs) {
        case 1:
            xs = {
                // media min-width set to xs breakpoint
                [`@media (min-width: ${xsSize})`]: {
                    flex: '0 0 10%',
                    maxWidth: '10%',
                }
            }
            break;
        case 2:
            xs = {
                [`@media (min-width: ${xsSize})`]: {
                    flex: '0 0 20%',
                    maxWidth: '20%'
                }
            }
            break;
        case 3:
            xs = {
                [`@media (min-width: ${xsSize})`]: {
                    flex: '0 0 25%',
                    maxWidth: '25%'
                }
            }
            break;
        case 4:
            xs = {
                [`@media (min-width: ${xsSize})`]: {
                    flex: '0 0 33.33%',
                    maxWidth: '33.33%'
                }
            }
            break;
        case 5:
            xs = {
                [`@media (min-width: ${xsSize})`]: {
                    flex: '0 0 40%',
                    maxWidth: '40%'
                }
            }
            break;
        case 6:
            xs = {
                [`@media (min-width: ${xsSize})`]: {
                    flex: '0 0 50%',
                    maxWidth: '50%'
                }
            }
            break;
        case 7:
            xs = {
                [`@media (min-width: ${xsSize})`]: {
                    flex: '0 0 60%',
                    maxWidth: '60%'
                }
            }
            break;
        case 8:
            xs = {
                [`@media (min-width: ${xsSize})`]: {
                    flex: '0 0 66.66%',
                    maxWidth: '66.66%'
                }
            }
            break;
        case 9:
            xs = {
                [`@media (min-width: ${xsSize})`]: {
                    flex: '0 0 75%',
                    maxWidth: '75%'
                }
            }
            break;
        case 10:
            xs = {
                [`@media (min-width: ${xsSize})`]: {
                    flex: '0 0 80%',
                    maxWidth: '80%'
                }
            }
            break;
        case 11:
            xs = {
                [`@media (min-width: ${xsSize})`]: {
                    flex: '0 0 90%',
                    maxWidth: '90%'
                }
            }
            break;
        default:
            xs = '';
    }

    switch (sm) {
        case 1:
            sm = {
                // media min-width set to sm breakpoint
                [`@media (min-width: ${smSize})`]: {
                    flex: '0 0 10%',
                    maxWidth: '10%',
                }
            }
            break;
        case 2:
            sm = {
                [`@media (min-width: ${smSize})`]: {
                    flex: '0 0 20%',
                    maxWidth: '20%'
                }
            }
            break;
        case 3:
            sm = {
                [`@media (min-width: ${smSize})`]: {
                    flex: '0 0 25%',
                    maxWidth: '25%'
                }
            }
            break;
        case 4:
            sm = {
                [`@media (min-width: ${smSize})`]: {
                    flex: '0 0 33.33%',
                    maxWidth: '33.33%'
                }
            }
            break;
        case 5:
            sm = {
                [`@media (min-width: ${smSize})`]: {
                    flex: '0 0 40%',
                    maxWidth: '40%'
                }
            }
            break;
        case 6:
            sm = {
                [`@media (min-width: ${smSize})`]: {
                    flex: '0 0 50%',
                    maxWidth: '50%'
                }
            }
            break;
        case 7:
            sm = {
                [`@media (min-width: ${smSize})`]: {
                    flex: '0 0 60%',
                    maxWidth: '60%'
                }
            }
            break;
        case 8:
            sm = {
                [`@media (min-width: ${smSize})`]: {
                    flex: '0 0 66.66%',
                    maxWidth: '66.66%'
                }
            }
            break;
        case 9:
            sm = {
                [`@media (min-width: ${smSize})`]: {
                    flex: '0 0 75%',
                    maxWidth: '75%'
                }
            }
            break;
        case 10:
            sm = {
                [`@media (min-width: ${smSize})`]: {
                    flex: '0 0 80%',
                    maxWidth: '80%'
                }
            }
            break;
        case 11:
            sm = {
                [`@media (min-width: ${smSize})`]: {
                    flex: '0 0 90%',
                    maxWidth: '90%'
                }
            }
            break;
        default:
            sm = '';
    }

    switch (md) {
        case 1:
            md = {
                // media min-width set to md breakpoint
                [`@media (min-width: ${mdSize})`]: {
                    flex: '0 0 10%',
                    maxWidth: '10%',
                }
            }
            break;
        case 2:
            md = {
                [`@media (min-width: ${mdSize})`]: {
                    flex: '0 0 20%',
                    maxWidth: '20%'
                }
            }
            break;
        case 3:
            md = {
                [`@media (min-width: ${mdSize})`]: {
                    flex: '0 0 25%',
                    maxWidth: '25%'
                }
            }
            break;
        case 4:
            md = {
                [`@media (min-width: ${mdSize})`]: {
                    flex: '0 0 33.33%',
                    maxWidth: '33.33%'
                }
            }
            break;
        case 5:
            md = {
                [`@media (min-width: ${mdSize})`]: {
                    flex: '0 0 40%',
                    maxWidth: '40%'
                }
            }
            break;
        case 6:
            md = {
                [`@media (min-width: ${mdSize})`]: {
                    flex: '0 0 50%',
                    maxWidth: '50%'
                }
            }
            break;
        case 7:
            md = {
                [`@media (min-width: ${mdSize})`]: {
                    flex: '0 0 60%',
                    maxWidth: '60%'
                }
            }
            break;
        case 8:
            md = {
                [`@media (min-width: ${mdSize})`]: {
                    flex: '0 0 66.66%',
                    maxWidth: '66.66%'
                }
            }
            break;
        case 9:
            md = {
                [`@media (min-width: ${mdSize})`]: {
                    flex: '0 0 75%',
                    maxWidth: '75%'
                }
            }
            break;
        case 10:
            md = {
                [`@media (min-width: ${mdSize})`]: {
                    flex: '0 0 80%',
                    maxWidth: '80%'
                }
            }
            break;
        case 11:
            md = {
                [`@media (min-width: ${mdSize})`]: {
                    flex: '0 0 90%',
                    maxWidth: '90%'
                }
            }
            break;
        default:
            md = '';
    }

    switch (lg) {
        case 1:
            lg = {
                // media min-width set to lg breakpoint
                [`@media (min-width: ${lgSize})`]: {
                    flex: '0 0 10%',
                    maxWidth: '10%',
                }
            }
            break;
        case 2:
            lg = {
                [`@media (min-width: ${lgSize})`]: {
                    flex: '0 0 20%',
                    maxWidth: '20%'
                }
            }
            break;
        case 3:
            lg = {
                [`@media (min-width: ${lgSize})`]: {
                    flex: '0 0 25%',
                    maxWidth: '25%'
                }
            }
            break;
        case 4:
            lg = {
                [`@media (min-width: ${lgSize})`]: {
                    flex: '0 0 33.33%',
                    maxWidth: '33.33%'
                }
            }
            break;
        case 5:
            lg = {
                [`@media (min-width: ${lgSize})`]: {
                    flex: '0 0 40%',
                    maxWidth: '40%'
                }
            }
            break;
        case 6:
            lg = {
                [`@media (min-width: ${lgSize})`]: {
                    flex: '0 0 50%',
                    maxWidth: '50%'
                }
            }
            break;
        case 7:
            lg = {
                [`@media (min-width: ${lgSize})`]: {
                    flex: '0 0 60%',
                    maxWidth: '60%'
                }
            }
            break;
        case 8:
            lg = {
                [`@media (min-width: ${lgSize})`]: {
                    flex: '0 0 66.66%',
                    maxWidth: '66.66%'
                }
            }
            break;
        case 9:
            lg = {
                [`@media (min-width: ${lgSize})`]: {
                    flex: '0 0 75%',
                    maxWidth: '75%'
                }
            }
            break;
        case 10:
            lg = {
                [`@media (min-width: ${lgSize})`]: {
                    flex: '0 0 80%',
                    maxWidth: '80%'
                }
            }
            break;
        case 11:
            lg = {
                [`@media (min-width: ${lgSize})`]: {
                    flex: '0 0 90%',
                    maxWidth: '90%'
                }
            }
            break;
        default:
            lg = '';
    }

    switch (align) {
        case 'left':
            align = 'flex-start'
            break;
        case 'center':
            align = 'center'
            break;
        case 'right':
            align = 'flex-end'
            break;
        default:
            align = 'flex-start';
    }

    let classes = [
        'column',
    ]
    let bgProps = []
    let animation_effect
    let font_color
    let colPadding = {}
    let mobilePadding = {}

    className ? classes.push(className) : ''
    enable_boxed == 'true' ? classes.push('section__boxed') : null

    let padding_style = []
    let mobile_padding_style = []
    let padding_fix

    if (animation !== 'none') {
        classes.push('has-animation')
    
        if (animation == 'fade_in') {
            animation_effect = 'fade-in'
        } else if (animation == 'fade_in_from_left') {
            animation_effect = 'fade-in-from-left'
        } else if (animation == 'fade_in_from_right') {
            animation_effect = 'fade-in-from-right'
        } else if (animation == 'fade_in_from_bottom') {
            animation_effect = 'fade-in-from-bottom'
        } else {
            animation_effect = 'none'
        }

        animation_effect = animation_effect != 'none' ? animation_effect : ''
        animation_delay = animation_delay != '' ? animation_delay : ''
    }

    if (padding) {
        if (padding.includes('%')) {
            padding = padding
            if (padding_position == 'all') {
                padding_fix = "true"
            }
        } else {
            padding = PxToRem(padding) + 'rem'
        }
    
        if (padding_position == 'all') {
            padding_style['paddingRight'] = padding
            padding_style['paddingLeft'] = padding
            padding_style['paddingTop'] = padding
            padding_style['paddingBottom'] = padding
        } else if (padding_position == 'right') {
            padding_style['paddingRight'] = padding
        } else if (padding_position == 'left') {
            padding_style['paddingLeft'] = padding
        } else if (padding_position == 'bottom') {
            padding_style['paddingBottom'] = padding
        } else if (padding_position == 'top') {
            padding_style['paddingTop'] = padding
        } else if (padding_position == 'top-right') {
            padding_style['paddingTop'] = padding
            padding_style['paddingRight'] = padding
        } else if (padding_position == 'top-left') {
            padding_style['paddingTop'] = padding
            padding_style['paddingLeft'] = padding
        } else if (padding_position == 'top-bottom') {
            padding_style['paddingTop'] = padding
            padding_style['paddingBottom'] = padding
        } else if (padding_position == 'bottom-right') {
            padding_style['paddingBottom'] = padding
            padding_style['paddingRight'] = padding
        } else if (padding_position == 'bottom-left') {
            padding_style['paddingBottom'] = padding
            padding_style['paddingLeft'] = padding
        } else if (padding_position == 'left-right') {
            padding_style['paddingLeft'] = padding
            padding_style['paddingRight'] = padding
        } else {
            padding_style['padding'] = padding
        }

        // loop through padding_style and add to colPadding
        for (let key in padding_style) {
            colPadding[key] = padding_style[key]
        }
    }

    if (padding_mobile) {
        if (padding_mobile.includes('%')) {
            padding_mobile = padding_mobile;
    
            if (padding_mobile_position == 'all') {
                padding_fix = 'true';
            }
        } else {
            padding_mobile = PxToRem(padding_mobile) +'rem';
        }

        if (padding_mobile_position == 'all') {
            mobile_padding_style['paddingRight'] = padding_mobile
            mobile_padding_style['paddingLeft'] = padding_mobile
            mobile_padding_style['paddingTop'] = padding_mobile
            mobile_padding_style['paddingBottom'] = padding_mobile
        } else if (padding_mobile_position == 'right') {
            mobile_padding_style['paddingRight'] = padding_mobile
        } else if (padding_mobile_position == 'left') {
            mobile_padding_style['paddingLeft'] = padding_mobile
        } else if (padding_mobile_position == 'bottom') {
            mobile_padding_style['paddingBottom'] = padding_mobile
        } else if (padding_mobile_position == 'top') {
            mobile_padding_style['paddingTop'] = padding_mobile
        } else if (padding_mobile_position == 'top-right') {
            mobile_padding_style['paddingTop'] = padding_mobile
            mobile_padding_style['paddingRight'] = padding_mobile
        } else if (padding_mobile_position == 'top-left') {
            mobile_padding_style['paddingTop'] = padding_mobile
            mobile_padding_style['paddingLeft'] = padding_mobile
        } else if (padding_mobile_position == 'top-bottom') {
            mobile_padding_style['paddingTop'] = padding_mobile
            mobile_padding_style['paddingBottom'] = padding_mobile
        } else if (padding_mobile_position == 'bottom-right') {
            mobile_padding_style['paddingBottom'] = padding_mobile
            mobile_padding_style['paddingRight'] = padding_mobile
        } else if (padding_mobile_position == 'bottom-left') {
            mobile_padding_style['paddingBottom'] = padding_mobile
            mobile_padding_style['paddingLeft'] = padding_mobile
        } else if (padding_mobile_position == 'left-right') {
            mobile_padding_style['paddingLeft'] = padding_mobile
            mobile_padding_style['paddingRight'] = padding_mobile
        } else {
            mobile_padding_style['padding'] = padding_mobile
        }

        // loop through padding_style and add to mobilePadding
        for (let key in mobile_padding_style) {
            mobilePadding[key] = mobile_padding_style[key]
        }

    }

    if (bg_image) {
        bgProps.push('background-image:url(' + bg_image + ');background-position:' + bg_pos + ';')
    }

    if (bg_color) {
        bgProps.push('background-color:' + bg_color + ';' )
    }

    if (text_color) {
        font_color = {
            ['h1, h2, h3, h4, h5, h6, p, div']: {
                color: text_color
            }
        }
    }

    const column_link_html = column_link ? <Link href={column_link}><a></a></Link> : null;

const StyledDiv = styled.div`
    position: relative;
    display: block;
    max-width: 100%;
    flex: 0 0 100%;
    text-align: ${text_align};
    padding: 0 1.5rem;
    align-items: ${align};
    margin-bottom: ${margin_bottom ? margin_bottom : 'inherit'};

    ${font_color}

    ${xs}
    ${sm}
    ${md}
    ${lg}

    ${paddingMobileInherit ? (
        colPadding
    ) : (
        `@media (min-width: ${theme.breakpoints.md}) {
            ${colPadding}
        }`
    )}

    @media(max-width: ${theme.breakpoints.md}) {
        ${!children && bg_image ? 'height:calc(100vw/(16/9));flex:auto;' : ''}
        ${mobilePadding};
        ${text_align_mobile ? 'text-align:' + text_align_mobile + ';' : ''}
        ${margin_bottom_mobile ? 'margin-bottom:' + margin_bottom_mobile + ';' : ''}
    }

    ${minHeight ? `@media(min-width: ${theme.breakpoints.md}) { height:${minHeight};}` : ''}
`

const StyledColumnBG = styled.div`
    position: absolute;
    top: 0;
    width: calc(100% - 3rem);
    height: 100%;
    background-size: cover;
    transition: all 0.2s ease;
    ${bgProps.join(' ')}
`

const StyledColumnOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${bg_color_overlay};
`

const StyledColumnBGWrapper = styled.div`
    width: 100%;
    ${!children && bg_image && bg_color ? 'height:100%;' : ''}
`

    return (
        <StyledDiv className={classes.join(' ')} {...props}>
            {bg_image || bg_color ? (
                <>
                <StyledColumnBGWrapper>
                    <StyledColumnBG />
                    {bg_color_overlay && (
                        <StyledColumnOverlay />
                    )}
                    </StyledColumnBGWrapper>
                </>
            ) : null}
            {column_link_html}
            {bg_color || bg_image ? <div style={{position: 'relative'}}>{children}</div> : children}
        </StyledDiv>
    )
}

function PxToRem(px) {
    px = parseFloat(px);
    px = px / 10;
    px = px.toFixed(1);
    return px;
}
