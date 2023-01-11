import styled from "styled-components";

const GallerySideTextBackground = styled.div`
  background: var(--lightBeige);
  padding: 20% 20% 10% 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 2rem;
  order: ${(props) => props.order || 2};
`;

const GallerySideTextDesc = styled.div`
  font-size: ${(props) => props.fontSize || "50%"};
  line-height: 1.4;
  padding: 2rem 0;
  font-weight: 200;
`;

const GallerySideTextSpan = styled.span`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  font-size:  ${(props) => props.fontSize || "1.3rem"};
  margin: 2rem 0;
  border-bottom: 1px solid var(--darkBeige);
  font-size: 50%;
}
`;

const GallerySideImageCont = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--mediumBeige);
  & > img {
    position: absolute;
    width: 50%;
    height: 50%;
    object-fit: cover;
    animation: upMotion 1.5s ease-out;
  }
  order: ${(props) => props.order || 1};
`;

const GalleryMiddleWord = styled.div`
  color: #fff;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 50%;
  padding-top: 0;
  transform: translate(-60%, -50%) rotate(-90deg);
  z-index: 20;
  //   border: 2px solid blue;
  font-size: 3rem;
  height: 0px;
  letter-spacing: 3px;
`;

export {
  GallerySideTextBackground,
  GallerySideTextDesc,
  GallerySideTextSpan,
  GallerySideImageCont,
  GalleryMiddleWord,
};
