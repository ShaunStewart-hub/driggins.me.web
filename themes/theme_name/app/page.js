import BgVector1 from "@/components/bgVector/bgVector1";
import About from "@/sections/main-page/about/about";
import Banner from "@/sections/main-page/banner/banner";
import MainSection from "@/sections/main-page/main/main";
import Projects from "@/sections/main-page/project/projects";
import SubMainSection from "@/sections/main-page/sub_main/sub_main";

export default function Home() {
  return (
    <main className="relative overflow-hidden h-full w-full ">
      <MainSection></MainSection>
      <SubMainSection></SubMainSection>
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
      <BgVector1></BgVector1>
    </main>
  );
}
