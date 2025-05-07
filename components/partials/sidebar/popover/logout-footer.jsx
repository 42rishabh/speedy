"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const LogoutFooter = ({ menus }) => {
  const { data: session } = useSession();
  return (
    <div className="absolute bottom-0 bg-default-50 dark:bg-default-200 items-center flex gap-3 px-4 py-2 mt-5 w-full">
      <div className="w-9 h-9">
        {session?.user?.image && (
          <Image
            src={session?.user?.image}
            alt={session?.user?.name ?? ""}
            width={36}
            height={36}
            className="w-full h-full rounded-full"
          />
        )}
      </div>
      <div className="">
        <div className=" text-default-700 font-semibold text-sm capitalize mb-0.5 truncate">
          {session?.user?.name}
        </div>
        <div className=" text-xs text-default-600 truncate">
          {session?.user?.email}
        </div>
      </div>
      <div className="">
        <button
          type="button"
          onClick={() => signOut()}
          className="  text-default-500 inline-flex h-9 w-9 rounded items-center  dark:bg-default-300 justify-center dark:text-default-900"
        >
          <Icon
            icon="heroicons:arrow-right-start-on-rectangle-20-solid"
            className=" h-5 w-5"
          />
        </button>
      </div>
    </div>
  );
};

export default LogoutFooter;
