import { prismaClient } from "db/client";

export default async function Home() {
  const users = await prismaClient.user.findMany();
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
}

// In nextjs there is an issue when we build this it will create this as a static file so further changes are not shown in it and it create
// a static file of this

// for make it dynamic when not using DB

// export const revalidate = 60 // revalidate every 60 seconds
// or
// export const dynamic = 'force-dynamic'