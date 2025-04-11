// import { Button } from "./../components/ui/button";
// import Image from "next/image";
// import Container from "./Container";
// import heroImg1 from "../../public/oo.png"; // Ensure this path is correct
// import { Link } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="relative w-full h-[100px]">
//       <p>hhh</p>
//           </section>
//   );
// }

'use client';

export default function Hero() {
  return (
    <section
      className="h-[50vh] flex flex-col justify-center items-start px-6 lg:px-24 text-gray-800"
      style={{
        background: "linear-gradient(to right, rgb(241, 249, 248) 0%, #aee6f9 30%, rgb(163, 244, 235) 50%, #62e3cd 100%)",
      }}
    >
      <div className="max-w-4xl">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Elevate Your Workday
        </h1>
        <p className="text-lg lg:text-xl text-gray-700">
          Step into a dynamic coworking environment built for thinkers, doers, and innovators.
        </p>
      </div>
    </section>
  );
}
