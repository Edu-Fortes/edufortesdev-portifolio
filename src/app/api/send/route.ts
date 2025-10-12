import FormConfirmationEmail from '@/components/util/emails-templates/form-confirmation-email';
import NewContactEmail from '@/components/util/emails-templates/new-contact-email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const name = typeof body?.name === 'string' ? body.name : 'No name';
    const email = typeof body?.email === 'string' ? body.email : 'No email';
    const message =
      typeof body?.message === 'string' ? body.message : 'No message';

    const { data, error } = await resend.batch.send([
      {
        from: 'LP Form Contato <no-reply@mail.edufortes.dev>',
        to: ['form.contato@edufortes.dev'],
        subject: 'Novo contato recebido!',
        react: NewContactEmail({
          name,
          email,
          message,
        }),
      },
      {
        from: 'EduFortes.dev <contato@mail.edufortes.dev>',
        to: [`${name} <${email}>`],
        replyTo: 'contato@edufortes.dev',
        subject: 'Recebi sua mensagem!',
        react: FormConfirmationEmail({
          name,
          email,
          message,
        }),
      },
    ]);

    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
