import { IEmailTemplateProps } from '@/interface/IEmailTemplateProps';

export default function EmailTemplate({ name }: IEmailTemplateProps) {
  return (
    <div>
      <h1>Hello {name},</h1>
      <p>Welcome to our platform!</p>
    </div>
  );
}
