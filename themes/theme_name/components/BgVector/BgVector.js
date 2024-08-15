import Image from "next/image";
export default function BgVector1() {
  return (
    <div className=" w-full h-full bottom-0 absolute">
      <Image
        width={300}
        height={300}
        className="h-[60%] w-[62%] absolute bottom-[50%] z-[5] contrast-200 left-[-27.5%] scale-x-[-1]"
        src="/img/birds.png"
        alt=""
      />

      <Image
        width={300}
        height={300}
        className="h-[160%] w-[69%] absolute bottom-[-110%] z-[5] contrast-200 rotate-180 right-[-18%]"
        src="/img/tree-311967_1280.png"
        alt=""
      />
    </div>
  );
}
