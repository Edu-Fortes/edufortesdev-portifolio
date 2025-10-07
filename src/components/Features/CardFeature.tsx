import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { IFeaturesDataProps } from '@/interface/IFeaturesDataProps';

export default function CardFeatures({
  data,
  justify,
  align,
}: IFeaturesDataProps) {
  const justifyMap = {
    top: 'justify-start',
    center: 'justify-center',
    bottom: 'justify-end',
  } as const;

  const alignMap = {
    left: 'items-start',
    center: 'items-center text-center',
    right: 'items-end',
  } as const;

  const justifyClasses = justifyMap[justify || 'center'];
  const alignClasses = alignMap[align || 'center'];

  const aspectStyle =
    data.img && 'width' in data.img && 'height' in data.img
      ? { aspectRatio: `${data.img.width} / ${data.img.height}` }
      : undefined;

  return (
    <Card
      className={`relative ${justifyClasses} overflow-hidden`}
      style={aspectStyle}
    >
      {data.img ? (
        <Image
          src={data.img.src}
          alt={data.img.alt}
          fill
          className="object-cover"
        />
      ) : null}

      {/* Gradient overlay for contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/10"
        aria-hidden="true"
      />
      <CardContent
        className={`relative z-10 flex flex-col ${alignClasses} text-white`}
      >
        {data.subtitle && (
          <p className="mt-2 text-xs font-extralight opacity-90">
            {data.subtitle}
          </p>
        )}
        <h3 className="text-xl font-semibold">{data.title}</h3>
      </CardContent>
    </Card>
  );
}
