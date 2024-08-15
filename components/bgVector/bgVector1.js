import Image from "next/image";
export default function BgVector1() {
  return (
    <div className=" w-full h-full bottom-0 overflow-hidden absolute">
      <Image
        width={300}
        height={300}
        className="h-[30%] w-[55%] absolute bottom-[15%] z-[5] contrast-200 left-[-19%]"
        src="/img/tree-311967_1280.png"
        alt=""
      />
      <Image
        width={300}
        height={300}
        className="h-[20%] w-[35%] absolute bottom-[-5%] z-[5] contrast-200 right-[-5%]"
        src="/img/flower.png"
        alt=""
      />
    </div>
  );
}
