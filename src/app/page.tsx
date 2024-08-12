import Image from "next/image";
import { ModeToggle } from '../components/ThemeChangerBtn';
import Hero from '../components/Hero';
import HightlightProjects from '../components/HightlightProjects';
import Experiences from '../components/Experiences';
import Closing from '../components/Closing';
import NavbarDesktop from '../components/NavbarDesktop';

export default function Home() {
  return (
    <>
      <Hero />
      <HightlightProjects />
      <Experiences />
      <Closing />
    </>
  );
}
