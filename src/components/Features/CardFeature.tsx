'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Card, CardContent } from '../ui/card';
import { ICardFeaturesProps } from '@/interface/ICardFeaturesProps';

export default function CardFeatures({
  data,
  justify,
  align,
  grid,
}: ICardFeaturesProps) {
  const { theme, systemTheme } = useTheme();
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

  // Determine the current theme
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // Get the appropriate image source based on theme
  const getImageSrc = () => {
    if (!data.img) return null;

    if (typeof data.img.src === 'string') {
      return data.img.src;
    }

    // If src is an object with dark/light variants
    return currentTheme === 'dark' ? data.img.src.dark : data.img.src.light;
  };

  const imageSrc = getImageSrc();

  return (
    <Card
      className={`relative ${justifyClasses} overflow-hidden ${grid} h-full w-full`}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={data.img?.alt || ''}
          fill
          className="object-cover"
        />
      ) : null}

      {/* Gradient overlay for contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-blue-200/50 to-transparent dark:bg-gradient-to-r dark:from-black dark:via-transparent dark:to-black/80"
        aria-hidden="true"
      />
      <CardContent className={`relative z-10 flex flex-col ${alignClasses}`}>
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
