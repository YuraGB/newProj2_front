import { useEffect, useState } from "react";

export const useCustomImage = (src: string | undefined) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [imageSrc, setImageSrc] = useState<string>(src || "");

  useEffect(() => {
    if (!src) return;
    const cachedImage = localStorage.getItem(src);
    if (cachedImage) {
      setImageSrc(cachedImage);
      setLoading(false);
    } else {
      fetch(src)
        .then((res) => res.blob())
        .then((blob) => {
          const objectURL = URL.createObjectURL(blob);
          localStorage.setItem(src, objectURL);
          setImageSrc(objectURL);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error loading image", error);
          setLoading(false);
        });
    }
  }, [src]);

  const onErrorHandler = () => {
    setLoading(true);
    if (src) {
      localStorage.removeItem(src);
      fetch(src)
        .then((res) => res.blob())
        .then((blob) => {
          const objectURL = URL.createObjectURL(blob);
          localStorage.setItem(src, objectURL);
          setImageSrc(objectURL);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error loading image", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  return {
    loading,
    imageSrc,
    onErrorHandler,
    setLoading,
  };
};
