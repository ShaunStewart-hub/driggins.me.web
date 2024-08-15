export default function HouseOfImages(props) {
  return (
    <div className="h-full w-full">
      <div className=" h-full w-full grid grid-rows-[23.5%,76.5%]">
        <div>
          <h2 className="font-griffy text-center text-3xl">
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </h2>
        </div>

        <div className="relative">{props.imgTag}</div>
      </div>
    </div>
  );
}
