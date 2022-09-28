import Image from "next/image"
import styled from "@emotion/styled"

export default function SingleImage({
    src, alt, layout, className, priority = false, minHeight, maxHeight, bgOrientation, ...props
}) {

    let classes = [
        'image'
    ]

    className ? classes.push(className) : null

    const StyledImage = styled.div`
        display: block;
        width: 100%;
        ${minHeight || maxHeight ? 'height:100%;' : ''}

        > * {
            position: relative!important;
            ${minHeight || maxHeight ? 'width:100%!important;height:100%!important;' : ''}

            @media (min-width: 767px) {
                min-height: ${minHeight && `${minHeight}`};
                max-height: ${maxHeight && `${maxHeight}`};
            }

            @media (max-width: 767px) {
                ${minHeight || maxHeight ? 'padding-bottom:calc(100%/(5/4))!important;' : ''}
            }
        }

        img.fullwidth {
            position: ${minHeight || maxHeight ? 'absolute' : 'relative'}!important;
            height: ${minHeight || maxHeight ? '100%' : 'auto'}!important;
            ${minHeight || maxHeight ? 'top:0!important;left:0!important;width:100%!important;object-fit:cover;' : ''}
            ${bgOrientation && minHeight || bgOrientation && maxHeight ? `object-position: ${bgOrientation};` : ''}
        }

    `

    return (
        <StyledImage className={classes.join(' ')} {...props}>
            <Image src={src} alt={alt} layout="fill" className='fullwidth' priority={priority}  />
        </StyledImage>
    )

}
