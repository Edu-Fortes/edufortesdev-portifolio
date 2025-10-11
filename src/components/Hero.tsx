import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-15 text-sm lg:flex lg:items-center lg:px-20 lg:py-40">
      <div className="space-y-6 px-4">
        <h1 className="font-extralight">Eduardo Fortes Web Developer</h1>
        <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:pt-6">
          Coding Concepts into Seamless{' '}
          <span className="text-ring">User Experiences</span>
        </h2>
        <p className="mt-4 max-w-xl">
          Hi! I&apos;m a passionate web developer dedicated to crafting
          exceptional digital experiences, bringing your vision to life!
        </p>
        <Button className="mt-6 lg:mt-24">
          <Link href="#">Let&apos;s do Magic!</Link>
        </Button>
        <Button variant="link" className="text-sm">
          <Link href="#">See my work &#8594;</Link>
        </Button>
      </div>
      <div>
        <Image
          src="/developer.jpg"
          alt="picture of a man developer in black long sleeve shirt using computer"
          width={1440}
          height={960}
          priority
          className="mt-10 lg:opacity-0"
        />
      </div>
    </section>
  );
}
