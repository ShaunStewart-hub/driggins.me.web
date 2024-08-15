import { default as HouseSection } from "@/components/HarryPotterHousesSection/Section";
import { default as HouseSubSection } from "@/components/HarryPotterHousesSection/SubSection";
import { default as Section } from "@/components/Sections/Section";
import { default as Project } from "@/components/Sections/Projects";
import { default as About } from "@/components/Sections/About";
import Head from "next/head";
import BgVector1 from "@/components/BgVector/BgVector1";

export default function Home() {
  return (
    <main className="relative overflow-hidden ">
      {/* <HouseSection></HouseSection>
      <HouseSubSection></HouseSubSection>
      <Section></Section>
      <About></About>
      <Project></Project>
      <BgVector1></BgVector1> */}
    </main>
  );
}
