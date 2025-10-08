import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

export default function CardPlatform() {
  return (
    <Card>
      <CardHeader>
        <Image src="/coder.png" alt="Coder" width={70} height={70} />
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-4">Access to an exclusive platform</CardTitle>
        <CardDescription>
          Get access to our exclusive platform with premium features to follow
          all development process.
        </CardDescription>
      </CardContent>
    </Card>
  );
}
