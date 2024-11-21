import Image from "next/image";
import QRCodeGenerator from "./QRCodeGenerator";

export default function Home() {
  return (
    <>
      <div className="relative bg-[#08080D] min-h-[100vh] h-full flex justify-center items-center">
        <QRCodeGenerator />
      </div>
    </>
  );
}
