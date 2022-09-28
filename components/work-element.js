import styled from "@emotion/styled";
import Image from "./image";
import Typography from "./typography";
import Link from "next/link";

export default function WorkElement({
    title,
    description,
    category,
    image,
    link,
    className,
    ...props
}) {
    className = className ? ' ' + className : "";

    return (
        <StyledElement className={`workElement${className}`} {...props}>
            {image && <StyledImageWrapper><Image src={image} alt={title + ' image'} /></StyledImageWrapper>}
            {link && <Link href={link}><a className="fullLink"></a></Link>}
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

&:hover {
    .image {
        transform: scale(1.1);
    }
}

@media (min-width: 767px) {
    padding: 0 2rem;
}
`

const StyledImageWrapper = styled.div`
position: relative;
overflow: hidden;
padding-bottom: calc(100% / (5 / 4));
background-color: #fff;

> * {
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

const StyledTextWrapper = styled.div`
position: relative;
padding-top: 2rem;
z-index: 2;
`