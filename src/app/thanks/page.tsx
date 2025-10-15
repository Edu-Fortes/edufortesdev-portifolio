import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Thanks() {
  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-center px-4 font-sans">
      <h1 className="text-4xl font-bold">Mensagem recebida. Muito obrigado!</h1>
      <Image
        src="/dark-mail.png"
        alt="Obrigado"
        width={500}
        height={300}
        className="mt-4 rounded-md"
        priority
      />
      <p className="mt-4">
        Já recebi suas informações e estou me organizando para responder da
        melhor forma possível. Meu prazo de retorno é de até 24 horas.
      </p>
      <p className="mt-2">
        Estou ansioso para saber o que criaremos juntos! Até breve.
      </p>
      <Button variant="outline" className="mt-8">
        <Link href="/">Voltar para o início</Link>
      </Button>
    </main>
  );
}
