import Image from "next/image";
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
export default function ProfileCard() {
  return (
    <div className="border rounded-xl border-white/20 w-[400px]  px-7 py-4">
      <h1 className="text-4xl text-white py-2">
        <span className="text-[#FF5C00]">S</span>orrawit
      </h1>
      <Image src={"/bell.jpg"} alt="Chanachai" width={700} height={500} className="rounded-2xl" priority />
      <div className="text-center">
        <p className="text-2xl text-white py-2">STU ID: 6652410015</p>
        <p className="text-xl text-[#7D7373] ">Fullstack Web Developer</p>
      </div>
      <div className="text-[40px] text-white  py-12 flex justify-between">
        <FaFacebook />
        <FaXTwitter />
        <CiInstagram />
        <FaLinkedin />
        <FaGoogle />
      </div>
      <div className="pb-2">
        <button className="bg-[#FF5C00] text-[#1D1C1D] rounded-2xl py-2 w-full text-3xl">HIRE ME !</button>
      </div>
    </div>
  );
}