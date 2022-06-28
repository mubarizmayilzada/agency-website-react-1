import React from 'react';
import { 
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Img,
    ImgWrapper
} from './InfoSection.elements';
import {Container,Button} from '../../globalStyles'; 
import { Link } from 'react-router-dom';
// import img from '../../images/svg-1.svg';

const InfoSection = ({img,lightBg,imgStart,lightTopLine,lightTextDesc,buttonLabel,description,headline,lightText,topLine,primary,alt,start}) => {
  return (
    <>
        <InfoSec lightBg={lightBg}>
            <Container>
              <InfoRow imgStart={lightBg}>
                <InfoColumn>
                  <TextWrapper>
                    <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                    <Link to='/sign-up'>
                      <Button big fontBig primary={primary}>
                        {buttonLabel}
                      </Button>
                    </Link>
                  </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                  <ImgWrapper start={start}>
                    {/* //image meselesine bax */}
                    <Img src={img} alt={alt} />
                  </ImgWrapper>
                </InfoColumn>
              </InfoRow>
            </Container>
        </InfoSec>
    </>
  )
}

export default InfoSection