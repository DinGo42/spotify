import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { FC, ReactNode } from "react";
import { cn } from "../utils";

export enum LinkStyleTypes {
  SEMIBOLD_GRAY = "text-medium-semibold-secondary text-gray-600",
  NONE = "",
}

type LinkProps = {
  children: ReactNode;
  href: string;
  styleType?: LinkStyleTypes;
  className?: string;
} & NextLinkProps;

export const Link: FC<LinkProps> = ({ href, styleType, className, children, ...props }) => (
  <NextLink href={href} {...props} className={cn(styleType, className)}>
    {children}
  </NextLink>
);
