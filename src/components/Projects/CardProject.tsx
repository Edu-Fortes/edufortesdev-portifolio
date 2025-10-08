import Link from 'next/link';
import Image from 'next/image';
import { ICardProjectsProps } from '@/interface/ICardProjectsProps';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export default function CardProject({ data }: ICardProjectsProps) {
  return (
    <Card key={data.id}>
      <CardHeader>
        {data.img ? (
          <Image
            src={data.img.src}
            alt={data.img.alt}
            width={data.img.width}
            height={data.img.height}
            className="rounded-lg object-cover"
          />
        ) : null}
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-4">{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardContent>
      <CardFooter className="justify-between">
        {data.badges ? (
          <div>
            {data.badges.map((badge) => (
              <Badge key={badge.id} variant="outline">
                {badge.name}
              </Badge>
            ))}
          </div>
        ) : null}
        <Button variant="link">
          <Link href={data.liveSiteURL}>Live site &#8599;</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
