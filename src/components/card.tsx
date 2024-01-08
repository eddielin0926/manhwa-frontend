import Link from "next/link";

type CoverProps = {
  title: string;
  imageUrl: string;
};

export default function Card({ title, imageUrl }: CoverProps) {
  return (
    <Link
      href={`book`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(20, 20, 20, 1)), url(${imageUrl})`,
      }}
      className="flex flex-col bg-cover bg-no-repeat bg-top items-center justify-end rounded-2xl p-2"
    >
      <div className="h-60 sm:h-80 xl:h-96" />
      <div className="text-center text-2xl font-bold font-serif text-neutral-100 break-keep">
        {title}
      </div>
    </Link>
  );
}
