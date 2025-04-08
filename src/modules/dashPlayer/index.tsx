import { useEffect, useRef, useState } from "react";
import * as dashjs from "dashjs";

const DashPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlayerInitialized, setIsPlayerInitialized] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isPlayerInitialized) {
            if (videoRef.current) {
              const player = dashjs.MediaPlayer().create();
              player.initialize(videoRef.current, src, true);
              player.updateSettings({
                streaming: {
                  abr: { autoSwitchBitrate: { video: true } }, // Адаптивна зміна якості
                  buffer: {
                    stallThreshold: 3, // Завантажує лише потрібні частини
                    bufferPruningInterval: 10, // Чистить непотрібні сегменти
                  },
                },
              });
              setIsPlayerInitialized(true);
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }, // 50% відео має бути в зоні перегляду
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [src, isPlayerInitialized]);

  return (
    <video
      ref={videoRef}
      controls={false}
      loop={true}
      className={"w-full"}
      muted={true}
      preload="none" // Відкладене завантаження відео
      poster={
        "https://s3-us-west-2.amazonaws.com/speedybrandimages/tmp_27f2ff8b-e8c9-4220-9529-d5b464be8342.webp"
      }
    />
  );
};

export default DashPlayer;
