import React from "react";
import { useCustomImage } from "@/components/image/hook";
import { Loader } from "@/components/image/Loader.tsx";

interface CustomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  cacheOnLoad?: boolean;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt, ...props }) => {
  const { onErrorHandler, imageSrc, loading, setLoading } = useCustomImage(src);

  if (loading) {
    return <Loader />;
  }
  return (
    <img
      {...props}
      src={imageSrc}
      alt={alt || "Image"}
      onLoad={() => setLoading(false)}
      onError={onErrorHandler}
      style={{ opacity: loading ? 0 : 1, transition: "opacity 0.3s ease" }}
    />
  );
};

export default CustomImage;
