import CustomImage from "@/components/image";

export type TProductImageProps = {
  src: string;
  alt: string;
};

export const ProductImage = ({ src, alt }: TProductImageProps) => {
  return (
    <CustomImage
      title={alt}
      loading={"lazy"}
      src={src}
      alt={`image of ${alt}`}
    />
  );
};
