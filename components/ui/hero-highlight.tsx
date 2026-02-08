"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import Image from "next/image";
import React from "react";

type ImageHighlightRevealProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};


export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // SVG patterns for different states and themes
  const dotPatterns = {
    light: {
      default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23d4d4d4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
      hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%236366f1' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
    },
    dark: {
      default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23404040' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
      hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%238183f4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
    },
  };

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn(
        "group relative flex h-[40rem] w-full items-center justify-center bg-white dark:bg-black",
        containerClassName,
      )}
      onMouseMove={handleMouseMove}
    >
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          backgroundImage: dotPatterns.light.default,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: dotPatterns.dark.default,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 dark:hidden"
        style={{
          backgroundImage: dotPatterns.light.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 hidden opacity-0 transition duration-300 group-hover:opacity-100 dark:block"
        style={{
          backgroundImage: dotPatterns.dark.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};


export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        clipPath: 'inset(0 100% 0 0)', // hidden from right
      }}
      animate={{
        clipPath: 'inset(0 0% 0 0)', // fully visible
      }}
      exit={{
        clipPath: 'inset(0 0 0 100%)', // wipe out to right
      }}
      transition={{
        duration: 0.8,
        ease: 'easeInOut',
      }}
      className={cn(
        `
        relative inline-block
        rounded-lg
        bg-linear-to-r
        from-[#00eeff] to-[#00eeff]
        px-2 pb-1
        text-white
        `,
        className
      )}
    >
      {children}
    </motion.span>
  );
};

export function ImageHighlightReveal({
  src,
  alt,
  width,
  height,
  className,
}: ImageHighlightRevealProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg",
        className
      )}
      style={{ width, height }}
    >
      {/* IMAGE */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="absolute inset-0 object-cover"
      />

      {/* DARK OVERLAY (masked away) */}
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{
          duration: 1.2,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="absolute inset-0 bg-black/60"
      />

      {/* HIGHLIGHT SWEEP */}
      <motion.div
        initial={{ x: "-120%" }}
        animate={{ x: "120%" }}
        transition={{
          duration: 1.2,
          delay: 0.1,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="
          pointer-events-none
          absolute inset-y-0
          w-[18%]
          bg-gradient-to-r
          from-transparent
          via-cyan-300/60
          to-transparent
          blur-lg
        "
        style={{
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
