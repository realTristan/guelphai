import Image from "next/image";

export default function Navbar(): JSX.Element {
  return (
    <div className="fixed z-50 flex w-screen flex-row items-center justify-between bg-white p-7 text-center">
      <Image
        src="/images/gryphon.png"
        alt="Logo"
        className="-my-7 rounded-full"
        width={125}
        height={125}
      />

      <div className="flex flex-row items-center justify-center gap-4">
        <a
          href="https://github.com/Guelph-Artificial-Intelligence-Club"
          className="hidden cursor-pointer rounded-lg px-5 py-4 text-slate-400 duration-300 ease-in-out hover:bg-slate-100 sm:flex"
        >
          GitHub
        </a>
        <a
          href="https://discord.gg/7J7m2AkSAw"
          className="hidden cursor-pointer rounded-lg px-7 py-4 text-slate-400 duration-300  ease-in-out hover:bg-slate-100 sm:flex"
        >
          Discord
        </a>
        <a
          href="mailto:tsimps01@uoguelph.ca"
          className="mx-3 rounded-lg bg-slate-900 px-7 py-4 text-sm font-normal text-white duration-300 ease-in-out hover:bg-slate-100 hover:text-slate-900"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}
