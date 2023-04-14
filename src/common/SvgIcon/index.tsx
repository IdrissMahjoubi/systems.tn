import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <img src={`/systems.tn/${src}`} alt={src} width={width} height={height} />
);
