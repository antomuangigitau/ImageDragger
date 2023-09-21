import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-slate-600 h-screen">
      <div className="flex items-center justify-end w-full pr-3 py-3">
        <Link className="text-white" href="/sign-up">
          Login
        </Link>
      </div>
      <div className="w-full h-full flex justify-center items-center mt-20">
        <p className="text-6xl text-white">
          Explore <br />
          your <br />
          Image <br />
          Gallery <br />
        </p>
        <Image
          src="/assets/Arrow 1.png"
          width={60}
          height={0}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
