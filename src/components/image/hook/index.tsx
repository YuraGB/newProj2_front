import { useEffect, useState } from "react";
import { convertImageToBase64 } from "@/lib/imgToBase64.ts";
import { get, set, del } from "idb-keyval";

export const useCustomImage = (src: string | undefined) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [imageSrc, setImageSrc] = useState<string>(src || "");

  const loadImage = async (url: string) => {
    try {
      const cachedImage = await get(url);
      if (cachedImage) {
        setImageSrc(cachedImage);
        setLoading(false);
      } else {
        const base64String = await convertImageToBase64(url);
        setImageSrc(base64String);
        setLoading(false);
        await set(url, base64String);
      }
    } catch (error) {
      console.error("Error loading image", error);
      setLoading(false);
    }
  };

  // optimisation
  // saving image in indexDB storage for the first load
  // then using the indexDB storage image
  useEffect(() => {
    if (src) loadImage(src);
  }, [src]);

  // if src changes, we need to load the new image
  const onErrorHandler = async () => {
    if (src) {
      await del(src);
      await loadImage(src);
    }
  };

  return {
    loading,
    imageSrc,
    onErrorHandler,
    setLoading,
  };
};
