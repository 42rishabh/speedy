"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { getSession } from "next-auth/react";

const UserMeta = () => {
  const [userData, setUserData] = useState({
    fullname: "N/A",
    designation: "N/A",
    avatar: null,  // Avatar initially null
  });

  // Fetch user data dynamically
  useEffect(() => {
    const fetchData = async () => {
      try {
        const session = await getSession();
        console.log("Session:", session);
        
        if (session && session.token) {
          const res = await fetch("/api/settings/general/user-meta", {
            headers: {
              Authorization: `Bearer ${session.token}`,  // Use the session token
            },
          });

          const data = await res.json();
          console.log("API response:", data);
          if (data.status === "success") {
            setUserData({
              fullname: data.userData.fullname,
              designation: data.userData.designation || "N/A",
              avatar: data.userData.avatar
                ? `/images/avatar/${data.userData.avatar}`  // Assuming the image is stored in /uploads
                : "/images/avatar/avatar-3.jpg",  // Fallback to a default avatar if no avatar is provided
            });
          }
        } else {
          console.error("No session found or token missing");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Card>
      <CardContent className="p-6 flex flex-col items-center">
        <div className="w-[124px] h-[124px] relative rounded-full">
          <Image
            src={userData.avatar || "/images/avatar/avatar-3.jpg"}  // Fallback to default avatar if no avatar is provided
            alt="User avatar"
            width={124}
            height={124}
            className="w-full h-full object-cover rounded-full"
            onError={(e) => { e.target.src = "/images/avatar/avatar-3.jpg"; }}  // Fallback on error
          />
        </div>
        <div className="mt-4 text-xl font-semibold text-default-900">{userData.fullname}</div>
        <div className="mt-1.5 text-sm font-medium text-default-500">{userData.designation}</div>
      </CardContent>
    </Card>
  );
};

export default UserMeta;
