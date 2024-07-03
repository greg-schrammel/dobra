import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-12 p-24 h-[500px]">
      <div className="w-[900px]">
        <h1 className="text-stone-950 font-bold text-lg">oi fell</h1>
        <p className="text-stone-500 text-md">esse é meu design bjo</p>
      </div>
      <Image
        className="relative dark:invert"
        src="/just to suffer.png"
        alt="meu deus"
        width={900}
        height={500}
        priority
      />
    </main>
  );
}
