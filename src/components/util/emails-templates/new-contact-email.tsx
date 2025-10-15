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

export default function NewContactEmail({
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
            <Text>Olá, Edu!</Text>
            <Text>
              <span className="text-lg font-semibold underline">{name}</span>,
              enviou uma nova mensagem através do formulário de contato do site{' '}
              <Link href="#">edufortes.dev</Link>
            </Text>
            <Text>Abaixo estão os detalhes da mensagem:</Text>
            <Text className="italic">&quot;{message}&quot;</Text>
            <Text>
              Responda para o e-mail{' '}
              <span className="text-lg font-semibold text-blue-500 underline">
                {email}
              </span>
            </Text>
            <Section className="mt-8">
              <Text className="m-0 p-0 text-lg">Acredite em você, sempre!</Text>
              <Text className="m-0 p-0 text-sm">Boa sorte!</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
