import { FC } from "react";
import { cxm } from "libs/helpers";
import type { ImageProps } from "next/image";
import NextImage from "next/image";

type WrappedImageProps = ImageProps & {
  alt: string;
  parentStyle?: string;
};

export const WrappedImage: FC<WrappedImageProps> = ({ parentStyle, ...props }) => {
  if (!props.fill) {
    return <NextImage {...props} />;
  }

  return (
    <figure className={cxm("relative", parentStyle)}>
      <NextImage
        {...props}
        placeholder="blur"
        blurDataURL="/blur.svg"
        sizes="(max-width: 768px) 100%"
      />
    </figure>
  );
};
