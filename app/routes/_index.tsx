import { json, useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import GameCard from "~/components/GameCard";
import { PrismaClient } from "@prisma/client";
import fallbackImage from "~/assets/svg/gamelog-logo.svg";

// Define the loader function
export async function loader() {
  const prisma = new PrismaClient();

  const games = await prisma.game.findMany();

  return json({ games });
}

export default function Index() {
  const { games } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-8 grid grid-cols-3 gap-8">
      {games.map((game) => (
        <div key={game.id}>
          <GameCard
            key={game.id}
            id={game.id}
            title={game.title}
            releaseDate={game.releaseDate}
            imageUrl={game.imageUrl || fallbackImage}
            genre={"Unknown"}
          />
        </div>
      ))}
    </div>
  );
}
