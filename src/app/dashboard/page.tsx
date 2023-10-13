import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";

export default async function page() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className="max-w-4xl m-auto w-full px-4 py-2">
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between">
          <p className="text-2xl font-medium">
            Welcome
            <span className="text-violet-900"> {session?.user?.name}</span>
          </p>
          <Image
            src={session?.user?.image!}
            alt="photo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
