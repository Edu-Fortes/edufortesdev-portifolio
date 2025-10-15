import Link from 'next/link';
import GitHubIcon from './SocialMediaIcons/GitHubIcon';
import InstagramIcon from './SocialMediaIcons/InstagramIcon';

export default function SocialMediaIcons() {
  return (
    <div className="mt-8 mb-4 flex justify-center gap-2">
      <Link href="https://github.com/Edu-Fortes" target="_blank">
        <GitHubIcon />
      </Link>
      <Link href="https://www.instagram.com/edufortes.dev/" target="_blank">
        <InstagramIcon />
      </Link>
    </div>
  );
}
