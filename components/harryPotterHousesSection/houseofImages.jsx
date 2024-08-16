"use client";

import useSWR from "swr";
import { useState, useEffect } from "react";

// Fetcher function for SWR
// const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HouseOfImages(props) {
  // const [showLoading, setShowLoading] = useState(false);

  // // Use SWR to fetch data
  // let { data, error, mutate } = useSWR("/api/vote", fetcher, {
  //   refreshInterval: 2000, // Fetch new data every 2 seconds
  // });

  // // Effect to manage custom loading state
  // useEffect(() => {
  //   let timeout;
  //   if (data) {
  //     // Set loading to true when data is being revalidated
  //     setShowLoading(true);

  //     // Hide loading indicator after 500ms
  //     timeout = setTimeout(() => {
  //       setShowLoading(false);
  //     }, 500);
  //   } else {
  //     setShowLoading(false);
  //   }

  //   return () => clearTimeout(timeout); // Cleanup timeout on unmount
  // }, [data]);
  return (
    <>
      <div className="h-full w-full">
        <div className=" h-full w-full grid grid-rows-[23.5%,76.5%]">
          <div>
            <h2 className="font-griffy text-center text-3xl">
              {/* <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div> */}
              {props.votes}
            </h2>
          </div>

          <div className="relative">{props.imgTag}</div>
        </div>
      </div>
    </>
  );
}
// "use client";

// import useSWR from "swr";
// import { useState, useEffect } from "react";

// // Fetcher function for SWR
// const fetcher = (url) => fetch(url).then((res) => res.json());

// export default function HomePage() {
//   const [showLoading, setShowLoading] = useState(false);

//   // Use SWR to fetch data
//   let { data, error, mutate } = useSWR("/api/vote", fetcher, {
//     refreshInterval: 2000, // Fetch new data every 2 seconds
//   });

//   // Effect to manage custom loading state
//   useEffect(() => {
//     let timeout;
//     if (data) {
//       // Set loading to true when data is being revalidated
//       setShowLoading(true);

//       // Hide loading indicator after 500ms
//       timeout = setTimeout(() => {
//         setShowLoading(false);
//       }, 500);
//     }

//     return () => clearTimeout(timeout); // Cleanup timeout on unmount
//   }, [data]); // Depend on data to trigger loading state

//   // if (error) return <div>Failed to load data</div>;
//   // if (!data && !showLoading) return <div>Loading...</div>; // Show loading initially if data is not yet available

//   return (
//     <div className=" bg-white relative overflow-hidden h-[1000px] w-full text-neutral-950 pt-52 ">
//       <h1>what data will it show: </h1>
//       {showLoading && <div>Loading...</div>}
//       {data && (
//         <div>
//           <h1>Data</h1>
//           <p>dsfasdhfusdhfj;dsalifhsd</p>
//           <pre>
//             {Object.entries(data).map((data) => (
//               <li>{JSON.stringify(data[1]["votes"], null, 2)}</li>
//             ))}
//           </pre>
//         </div>
//       )}
//       {error && <div>Loading...</div>}
//       {!showLoading && !data && !error && (
//         <div>
//           <h1>why</h1>
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// }
