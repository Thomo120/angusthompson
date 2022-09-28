import styled from '@emotion/styled'
import Container from "@/components/container";
import { theme } from '@/lib/theme'
import { useRef } from 'react'

export default function Section({
    bg_color,
    bg_image,
    bg_pos = 'top left',
    bg_color_overlay,
    variant = '',
    reverse_columns,
    text_color,
    className,
    mouse_based_parallax_bg,
    layer_one_image,
    layer_two_image,
    layer_three_image,
    layer_four_image,
    layer_five_image,
    layer_one_strength = '20',
    layer_two_strength = '30',
    layer_three_strength = '40',
    layer_four_strength = '50',
    layer_five_strength = '60',
    display = 'desktop-mobile',
    paddingTop,
    paddingBottom,
    ...props
}) {

    const ref = useRef();

    let classes = ['section'];
    let bgProps = []
    let font_color

    className ? classes.push(className) : ''


    if (bg_image) {
        bgProps.push('background-image:url(' + bg_image + ');background-position:' + bg_pos)
    }

    if (bg_color) {
        bgProps.push('background-color:' + bg_color )
    }

    if (text_color) {
        font_color = {
            ['h1,  h2, h3, h4, h5, h6, p, div']: {
                color: text_color
            }
        }
    }

    if (reverse_columns) {
        reverse_columns = {
            [`@media (max-width: ${theme.breakpoints.md})`]: {
                '.row': {
                    flexDirection: 'column-reverse'
                }
            }
        }
    } else {
        reverse_columns = null
    }

    const StyledSection = styled.section`
        position: relative;
        ${font_color}
        ${reverse_columns}
        ${paddingTop ? `padding-top: ${paddingTop};` : ''}
        ${paddingBottom ? `padding-bottom: ${paddingBottom};` : ''}
        ${display === 'mobile' ? `@media (min-width: ${theme.breakpoints.md}) { display: none; }` : ''}
        ${display === 'desktop' ? `@media (max-width: ${theme.breakpoints.md}) { display: none; }` : ''}
    `

    const StyledColumnBG = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
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

    const StyledParallaxScene = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;

    @media (max-width: ${theme.breakpoints.md}) {
        display: none!important;
    }
    `

    const StyledParallaxLayer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    will-change: transform;

    @media (max-width: ${theme.breakpoints.md}) {
        transform: none!important;
    }
    `

    const StyledParallaxBG = styled.div`
    position: relative;
    width: 120%;
    height: 120%;
    top: -10%;
    left: -10%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    `

    const onMouseMove = (e) => {
        //find child element e with classname "bg-parallax-scene"
        const layers = ref.current.querySelectorAll('.bg-parallax-layer')
        const w = window.innerWidth
        const h = window.innerHeight
        const offsetX = 0.5 - e.pageX / w
        const offsetY = 0.5 - e.pageY / h
        
        layers.forEach((layer) => {
            const offsetLayer = layer.getAttribute('offset') || 0
            const transformLayer = 'translateX(' + offsetX * offsetLayer + 'px) translateY(' + offsetY * offsetLayer + 'px)';

            layer.style.transform = transformLayer
        })
    }

    return (
        <StyledSection className={classes.join(' ')} {...props} onMouseMove={mouse_based_parallax_bg && onMouseMove} ref={ref}>
            {bg_image || bg_color ? (
                <>
                    <StyledColumnBG />
                    {bg_color_overlay && (
                        <StyledColumnOverlay />
                    )}
                </>
            ) : null}
            {mouse_based_parallax_bg && (
                <StyledParallaxScene className="bg-parallax-scene">
                    {layer_one_image && (
                        <StyledParallaxLayer className="bg-parallax-layer" offset={layer_one_strength}>
                            <StyledParallaxBG style={{ backgroundImage: 'url(' + layer_one_image + ')' }} />
                        </StyledParallaxLayer>
                    )}
                    {layer_two_image && (
                        <StyledParallaxLayer className="bg-parallax-layer" offset={layer_two_strength}>
                            <StyledParallaxBG style={{ backgroundImage: 'url(' + layer_two_image + ')' }} />
                        </StyledParallaxLayer>
                    )}
                    {layer_three_image && (
                        <StyledParallaxLayer className="bg-parallax-layer" offset={layer_three_strength}>
                            <StyledParallaxBG style={{ backgroundImage: 'url(' + layer_three_image + ')' }} />
                        </StyledParallaxLayer>
                    )}
                    {layer_four_image && (
                        <StyledParallaxLayer className="bg-parallax-layer" offset={layer_four_strength}>
                            <StyledParallaxBG style={{ backgroundImage: 'url(' + layer_four_image + ')' }} />
                        </StyledParallaxLayer>
                    )}
                    {layer_five_image && (
                        <StyledParallaxLayer className="bg-parallax-layer" offset={layer_five_strength}>
                            <StyledParallaxBG style={{ backgroundImage: 'url(' + layer_five_image + ')' }} />
                        </StyledParallaxLayer>
                    )}
                </StyledParallaxScene>
            )}
            {variant === 'contained' ? (
                <Container>
                    {props.children}
                </Container>
            ) : (
                props.children
            )}
        </StyledSection>
    );
}