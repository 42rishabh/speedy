import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
const FooterMenu = () => {
  const { data: session } = useSession();
  return (
    <div className="space-y-5 flex flex-col items-center justify-center pb-6">
      <div>
        {session?.user?.image && (
          <Image
            src={session?.user?.image}
            alt={session?.user?.name ?? ""}
            width={36}
            height={36}
            className="rounded-full"
          />
        )}
      </div>
    </div>
  );
};
export default FooterMenu;
