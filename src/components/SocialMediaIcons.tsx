import Link from 'next/link';
import GitHubIcon from './SocialMediaIcons/GitHubIcon';
import InstagramIcon from './SocialMediaIcons/InstagramIcon';
import WhatsAppIcon from './SocialMediaIcons/WhatsAppIcon';

export default function SocialMediaIcons() {
  return (
    <div className="mt-8 mb-4 flex justify-center gap-2">
      <Link href="#">
        <GitHubIcon />
      </Link>
      <Link href="#">
        <InstagramIcon />
      </Link>
      <Link href="#">
        <WhatsAppIcon />
      </Link>
    </div>
  );
}
