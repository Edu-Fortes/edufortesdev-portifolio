import Image from 'next/image';
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

function CardProject() {
  return (
    <Card>
      <CardHeader>
        <Image
          src="/card_earth.png"
          alt="card background"
          width={500}
          height={600}
          className="rounded-lg object-cover"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-4">
          3D Solar System Planets to Explore
        </CardTitle>
        <CardDescription>
          Explore the wonders of our solar system with this captivating 3D
          simulation of the planets using Three.js.
        </CardDescription>
      </CardContent>
      <CardFooter className="justify-between">
        <div>
          <Badge variant="outline">Angular</Badge>
        </div>
        <Button variant="link">Live site &#8599;</Button>
      </CardFooter>
    </Card>
  );
}

export default CardProject;
