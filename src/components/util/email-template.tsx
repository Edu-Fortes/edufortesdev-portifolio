import { IEmailTemplateProps } from '@/interface/IEmailTemplateProps';

export default function EmailTemplate({
  name,
  email,
  message,
}: IEmailTemplateProps) {
  return (
    <div>
      <h1>{name} sent a message:</h1>
      <p>{message}</p>
      <p>Reply to {email}</p>
    </div>
  );
}
