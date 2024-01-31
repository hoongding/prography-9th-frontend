interface IImage {
  src: string;
  alt: string;
  width?: number;
}

const Image = ({ src, alt, width = 160 }: IImage) => {
  return <img src={src} alt={alt} width={width} loading="lazy" />;
};

export default Image;
