import { useEffect, useRef } from "react";
import * as dashjs from "dashjs";

const DashPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
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
    }
  }, [src]);

  return <video ref={videoRef} controls />;
};

export default DashPlayer;
