import { Founder } from "@/components/home/Founder";
import { Hero } from "@/components/home/Hero";
import { Invitation } from "@/components/home/Invitation";
import { Meaning } from "@/components/home/Meaning";
import { Talks } from "@/components/home/Talks";
import { Upcoming } from "@/components/home/Upcoming";
import { Ways } from "@/components/home/Ways";

export default function Page() {
  return (
    <>
      <Hero />
      <Meaning />
      <Ways />
      <Upcoming />
      <Talks />
      <Founder />
      <Invitation />
    </>
  );
}
