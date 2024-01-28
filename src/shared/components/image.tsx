import NextImage, { ImageProps as NextImageProps } from "next/image";

import { FC, ReactNode } from "react";
import { cn } from "../utils";

export type ImageProps = {
  children?: ReactNode;
  className?: string;
  sizes?: string;
  width?: number;
  height?: number;
  style?: NextImageProps["style"];
} & Omit<NextImageProps, "fill">;

export const Image: FC<ImageProps> = ({
  children,
  className,
  sizes = "50vw, 50vw",
  width = 0,
  height = 0,
  style = { width: "100%", height: "auto" },
  ...props
}) => (
  <div className={cn("relative h-fit w-full overflow-hidden", className)}>
    <NextImage sizes={sizes} width={width} height={height} style={style} {...props} />
    {children}
  </div>
);
