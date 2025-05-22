import { Link } from "@remix-run/react";

interface GameCardProps {
  id: string;
  title: string;
  releaseDate: string;
  genre: string;
  imageUrl: string;
}
export default function GameCard({
  id,
  title,
  releaseDate,
  imageUrl,
}: GameCardProps) {
  const formattedDate = releaseDate.substring(0, 10);

  return (
    <div className="flex flex-col gap-4">
      <Link to={`/edit-game/${id}`} className="relative h-72 overflow-hidden">
        <img
          src={imageUrl}
          alt={`${title} cover`}
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
      </Link>
      <div className="flex justify-between">
        <div className="flex flex-col justify-between w-2/3 pr-4">
          <h3 className="font-bold text-2xl text-slate-300">{title}</h3>
          <p className="text-slate-400 text-sm">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}
