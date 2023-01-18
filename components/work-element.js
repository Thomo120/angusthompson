import styled from "@emotion/styled";
import Image from "./image";
import Typography from "./typography";
import Link from "next/link";
import Button from "./button";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'

export default function WorkElement({
    title,
    description,
    category,
    image,
    link,
    className,
    featured = false,
    type = 'image',
    ...props
}) {
    className = className ? ' ' + className : "";

    const StyledImageWrapper = styled.div`
position: relative;
overflow: hidden;
padding-bottom: ${featured ? 'calc(100% / (16 / 9))' : 'calc(100% / (5 / 4))'};
background-color: #fff;

.image {
    position: absolute;
    height: 100%;
    transition: all .2s ease-out;

    span {
        position: absolute!important;
        height: 100%!important;

        img {
            object-fit: cover;
        }
    }
}
`

    return (
        <StyledElement className={`workElement${className}`} {...props}>
            {image && type == 'image' &&  <StyledImageWrapper>{link && <Button type="button" className="view" text='View Site' variant='clear' target="_blank" icon />}<Image src={image} alt={title + ' image'} /></StyledImageWrapper>}
            {image && type == 'slider' && (
                <Swiper
                    modules={[Pagination, Navigation, Autoplay, EffectFade]}
                    slidesPerView={1}
                    grabCursor={true}
                    effect="fade"
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true,
                    }}
                >
                    {image.map((img, index) => (
                        <SwiperSlide key={index}>
                            <StyledImageWrapper>
                                {link && <Button type="button" className="view" text='View Site' variant='clear' target="_blank" icon />}
                                <Image src={img} alt={title + ' image ' + index} />
                            </StyledImageWrapper>
                        </SwiperSlide>
                    ))}
                    <SwiperDots className="swiper-pagination" />
                </Swiper>
            )}
            {link && <Link href={link} className="fullLink" target="_blank"></Link>}
            <StyledTextWrapper>
                {category && <Typography variant="h6" className="category" color="#fff" style={{marginBottom:'1rem'}}>{category}</Typography>}
                <Typography variant="h4" color="#fff">{title}</Typography>
                <Typography component="p" color="#fff">{description}</Typography>
            </StyledTextWrapper>
        </StyledElement>
    )
}

const StyledElement = styled.div`
background-color: #000;
color: #fff;

a.fullLink {
    position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 3;
}

.view {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    z-index: 2;
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    background-color: #000;
    color:#fff;
    font-size: 1.4rem;
    height: auto;
    opacity: 0;
    transition: all .2s ease-out;
    margin: 0!important;

    svg {
        width: 1.2rem;
    }
}

&:hover {
    .image {
        transform: scale(1.1);
    }
    .view {
        opacity: 1;
    }
}

@media (min-width: 767px) {
    padding: 0 2rem;
}
`

const StyledTextWrapper = styled.div`
position: relative;
padding-top: 2rem;
z-index: 2;
`

const SwiperDots = styled.div`
display: flex;
position: absolute;
background-color: #000;
border-top-left-radius: .5rem;
border-top-right-radius: .5rem;
left: 50%;
transform: translateX(-50%);
bottom: 0;
z-index: 10;

.swiper-pagination-bullet {
    position: relative;
    display: inline-block;
    width: 3rem;
    height: 3rem;
    opacity: .35;
    cursor: pointer;

    &:before {
        content: '';
        position: absolute;
        top: 1.2rem;
        left: 0;
        width: 0.6rem;
        height: 0.6rem;
        transition: all .25s ease;
        border-radius: 50%;
        margin-left: 1.1rem;
        background-color: transparent;
        box-shadow: inset 0 0 0 0.5rem #fff;
        background: #fff;
        display: block;
    }

    &.swiper-pagination-bullet-active {
        opacity: 1;

        &:before { 
            transform: scale(2);
            box-shadow: inset 0 0 0 0.1rem #fff;
            background-color: transparent;
        }
    }
}
`