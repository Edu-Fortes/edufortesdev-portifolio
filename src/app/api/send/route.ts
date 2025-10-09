import EmailTemplate from '@/components/util/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const name = typeof body?.name === 'string' ? body.name : 'No name';
    const email = typeof body?.email === 'string' ? body.email : 'No email';
    const message =
      typeof body?.message === 'string' ? body.message : 'No message';

    const { data, error } = await resend.emails.send({
      from: 'LP Contato <form.contact@edufortes.dev>',
      to: ['contact@edufortes.dev'],
      subject: 'New Contact Form Submission',
      react: EmailTemplate({
        name,
        email,
        message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
