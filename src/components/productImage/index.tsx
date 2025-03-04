export type TProductImageProps = {
  src: string;
  alt: string;
};

export const ProductImage = ({ src, alt }: TProductImageProps) => {
  return (
    <img title={alt} loading={"eager"} src={src} alt={`image of ${alt}`} />
  );
};
