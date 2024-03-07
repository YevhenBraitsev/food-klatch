import Image from 'next/image';

type TImageWrapper = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

const ImageWrapper = ({
  src,
  width,
  height,
  alt,
  className,
  ...rest
}: TImageWrapper) => {
  return (
    <div className={`rounded-lg ${className}`}>
      {src ? (
        <Image {...rest} src={src} alt={alt} width={width} height={height} />
      ) : (
        <div className="h-auto w-full bg-gray-600">
          {alt || 'Image placeholder'}
        </div>
      )}
    </div>
  );
};
export default ImageWrapper;
