import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { IPlatformDataProps } from '@/interface/ICardPlatformProps';

export default function CardPlatform({ data }: IPlatformDataProps) {
  return (
    <Card>
      <CardHeader>
        <Image
          src={data.image.src}
          alt={data.image.alt}
          width={70}
          height={70}
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-4">{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardContent>
    </Card>
  );
}
