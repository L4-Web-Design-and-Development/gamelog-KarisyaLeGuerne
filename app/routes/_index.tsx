import { PrismaClient } from "@prisma/client";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

// Importing GameCard component
import GameCard from "~/components/GameCard";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const prisma = new PrismaClient();

  const games = await prisma.game.findMany();

  return json({ games });
}

export default function Index() {
  const { games } = useLoaderData<typeof loader>();

  return (
    <div className="container px-8 mx-auto min-h-screen">
      <h1 className="text-4x1 font-bold">Hello, GameLogger!</h1>
      <div className="grid grid-cols-3 gap-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} /> //
        ))}
      </div>
    </div>
  );
}
