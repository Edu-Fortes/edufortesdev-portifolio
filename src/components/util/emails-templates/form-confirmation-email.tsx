import { IEmailTemplateProps } from '@/interface/IEmailTemplateProps';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  pixelBasedPreset,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

export default function FormConfirmationEmail({
  name,
  email,
  message,
}: IEmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Tailwind config={{ presets: [pixelBasedPreset] }}>
        <Body className="font-sans">
          <Container>
            <Heading as="h1" className="text-center">
              EduFortes.dev
            </Heading>
            <Text>Olá, {name}!</Text>
            <Text>
              Só passando para avisar que sua mensagem chegou com sucesso por
              aqui. Muito obrigado pelo contato e interesse em meu trabalho!
            </Text>
            <Text>
              Já estou de olho no que você escreveu e vou te dar um retorno no
              endereço de e-mail{' '}
              <span className="font-semibold underline">{email}</span> em até 24
              horas com os próximos passos.
            </Text>
            <Text>
              Para sua referência, aqui está uma cópia da sua mensagem:
            </Text>
            <Text className="italic">&quot;{message}&quot;</Text>
            <Text>Até breve!</Text>
            <Section className="mt-8">
              <Text className="m-0 p-0 text-lg">Eduardo Fortes</Text>
              <Text className="m-0 p-0 text-sm">Desenvolvedor Web</Text>
              <Link href="#" className="m-0 p-0 text-sm">
                edufortes.dev
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
