import styled from 'styled-components';

interface IImage {
  src: string;
  alt: string;
  width?: number;
  isRounded?: boolean;
}

const Image = ({ src, alt, width, isRounded = false }: IImage) => {
  return <ImageStyle src={src} alt={alt} width={width} loading="lazy" isRounded={isRounded} />;
};

const ImageStyle = styled.img<{ isRounded: boolean }>`
  border-radius: ${({ isRounded }) => (isRounded ? '10%' : '0')};
`;

export default Image;
