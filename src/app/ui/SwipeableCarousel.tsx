"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { FC, ReactNode, useEffect, useState } from "react";

interface SwipeableCarouselProps {
  children: ReactNode[];
  id: string;
  className?: string;
}

const SwipeableCarousel: FC<SwipeableCarouselProps> = ({
  children,
  id,
  className = "",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolling, setScrolling] = useState(true);
  useEffect(() => {
    if (scrolling) {
      return;
    }
    console.log(id, activeIndex);
    const el = document.querySelector(`[index="${id}-${activeIndex}"]`);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [activeIndex, id, scrolling]);

  const atRightEdge = activeIndex === children.length - 1;
  const atLeftEdge = activeIndex === 0;

  return (
    <>
      <div
        className={`flex snap-x snap-mandatory overflow-x-scroll no-scrollbar relative ${className}`}
        onScroll={(e) => {
          const el = e.target as HTMLDivElement;
          const index = Math.round(el.scrollLeft / el.clientWidth);
          setScrolling(true);
          setActiveIndex(index);
        }}
      >
        <div className="inset-y-0 left-0 sticky z-50 flex items-center justify-center">
          <button
            className={clsx("text-white z-50", {
              "opacity-50": atLeftEdge,
              "cursor-default": atLeftEdge,
            })}
            onClick={() => {
              setScrolling(false);
              setActiveIndex((prev) => (prev - 1 < 0 ? prev : prev - 1));
            }}
          >
            <ChevronLeftIcon className="w-12 h-12" />
          </button>
        </div>
        {React.Children.map(children, (child, index) => {
          if (
            React.isValidElement<{ className?: string; index: string }>(child)
          ) {
            return React.cloneElement(child, {
              className: clsx(
                child.props.className,
                "snap-start snap-always min-w-full h-full relative"
              ),
              index: `${id}-${index}`,
            });
          }
          return child;
        })}
        <div className="inset-y-0 right-0 sticky z-50 flex items-center justify-center">
          <button
            className={clsx("text-white z-50", {
              "opacity-50": atRightEdge,
            })}
            onClick={() => {
              setScrolling(false);
              setActiveIndex((prev) =>
                prev + 1 >= children.length ? prev : prev + 1
              );
            }}
          >
            <ChevronRightIcon className="w-12 h-12" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-12 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {React.Children.map(children, (_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
              activeIndex === i ? "w-8 bg-white" : "w-4 hover:w-6 bg-white/50"
            }`}
            onClick={() => {
              setScrolling(false);
              setActiveIndex(i);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default SwipeableCarousel;
