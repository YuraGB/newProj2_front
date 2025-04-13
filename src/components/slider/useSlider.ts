import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { TSliderProps } from "@/components/slider/index.tsx";

// the purpose of this hook is to manage the slider state and options
// it uses the useRef hook to get the container width and set the enabled state
// this enabled state is used to determine if the slider should be enabled or not
export const useSlider = ({
  children,
  sliderOptions = {},
}: {
  children: ReactNode;
  sliderOptions?: TSliderProps;
}) => {
  const {
    spaceBetween = 20,
    loop = true,
    navigation = true,
    autoplay = {
      delay: 2500,
      disableOnInteraction: true,
    },
    speed = 1000,
    breakpoints = {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1220: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  } = sliderOptions;

  const containerRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(true);

  const totalSlides = useMemo(() => {
    return Array.isArray(children) ? children.length : 1;
  }, [children]);

  const getSlidesPerView = (width: number) => {
    const sortedBreakpoints = Object.entries(breakpoints)
      .map(([k, v]) => [Number(k), v] as [number, { slidesPerView: number }])
      .sort((a, b) => a[0] - b[0]);

    let spv = 1;
    for (const [breakpoint, config] of sortedBreakpoints) {
      if (width >= breakpoint) {
        spv = config.slidesPerView;
      }
    }
    return spv;
  };

  useEffect(() => {
    const updateEnabled = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const spv = getSlidesPerView(width);
      setEnabled(totalSlides > spv);
    };

    updateEnabled();

    const observer = new ResizeObserver(updateEnabled);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [totalSlides]);

  return {
    containerRef,
    enabled,
    spaceBetween,
    loop,
    navigation,
    autoplay: enabled ? autoplay : false,
    speed,
    breakpoints,
  };
};
