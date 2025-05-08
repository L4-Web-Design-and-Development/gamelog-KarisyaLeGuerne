interface GameCardProps {
  title: string;
  releaseDate: string;
  genre: string;
}
export default function GameCard({title, releaseDate, genre}: GameCardProps) {
  const formattedDate = props.releaseDate.slice(0, 10);
}

  return (
    <div className="my-16">
      <div className="relative h-48 overflow-hidden">
        <img
          src="https://picsum.photos/400/300"
          alt="Game Cover"
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
      </div>
      <div>
        <div className="flex justify-between"></div>
        <div className="flex flex-col justify-between w-2/3"></div>
        <h3 className="font-bold text-2xl text-slate-300">{props.title}</h3>
      </div>
      <p className="text-slate-200/60 text-sm font-semibold">Start Date</p>
      <p className="text-cyan-300 uppercase text-sm font-semibold">
        {genre}
      </p>
      {formattedDate}
    </div>
  );
}
