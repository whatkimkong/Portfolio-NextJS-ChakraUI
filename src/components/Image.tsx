import NextImage from "next/image";

type ImageProps = {
  url: string;
  alt: string;
};

const Image = ({ url, alt }: ImageProps) => (
  <NextImage
    draggable={false}
    style={{ width: '70%', position: 'relative' }}
    src={url}
    alt={alt}
    />
)

export default Image
