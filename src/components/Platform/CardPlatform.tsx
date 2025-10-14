import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { ICardPlatformProps } from '@/interface/ICardPlatformProps';

export default function CardPlatform({ data }: ICardPlatformProps) {
  // Extract string src (CardPlatform only uses single images, not theme variants)
  const imageSrc =
    typeof data.image.src === 'string' ? data.image.src : data.image.src.light;

  return (
    <Card>
      <CardHeader>
        <Image
          src={imageSrc}
          alt={data.image.alt}
          width={150}
          height={150}
          className="rounded-lg"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-4">{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardContent>
    </Card>
  );
}
