import { ICardWorkflowProps } from '@/interface/ICardWorkflowProps';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

export default function CardWorkflow({ data }: ICardWorkflowProps) {
  return (
    <Card className="max-w-80 py-40 text-center">
      <CardContent className="align-center space-y-4">
        <Button variant="outline">{data.phase}</Button>
        <h3 className="text-xl font-bold">{data.title}</h3>
        <p>{data.description}</p>
      </CardContent>
    </Card>
  );
}
