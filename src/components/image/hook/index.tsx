import { useEffect, useState } from "react";
import { convertImageToBase64 } from "@/lib/imgToBase64.ts";

export const useCustomImage = (src: string | undefined) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [imageSrc, setImageSrc] = useState<string>(src || "");

  // optimisation
  // saving image in local storage for the first load
  // then using the local storage image
  useEffect(() => {
    if (!src) return;
    const cachedImage = localStorage.getItem(src);
    if (cachedImage) {
      setImageSrc(cachedImage);
      setLoading(false);
    } else {
      convertImageToBase64(src)
        .then((base64String) => {
          setImageSrc(base64String);
          setLoading(false);
          localStorage.setItem(src, base64String);
        })
        .catch((error) => {
          console.error("Error loading image", error);
          setLoading(false);
        });
    }
  }, [src]);

  // if src changes, we need to load the new image
  const onErrorHandler = () => {
    setLoading(true);
    if (src) {
      localStorage.removeItem(src);
      convertImageToBase64(src)
        .then((base64String) => {
          setImageSrc(base64String);
          setLoading(false);
          localStorage.setItem(src, base64String);
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
