"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import web from "@/public/images/social/web.png";  // Keeping a generic web image for all websites

// Fetch websites for the logged-in user from the API
const fetchUserWebsites = async () => {
  try {
    const res = await fetch("/api/settings/general/websites");
    const data = await res.json();
    if (data.status === "success") {
      return data.data;
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch websites:", error);
    return [];
  }
};

const Websites = () => {
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    // Fetch logged-in user's websites on component mount
    fetchUserWebsites().then(setWebsites);
  }, []);

  return (
    <Card>
      <CardHeader className="border-none mb-0">
        <CardTitle className="text-lg font-medium text-default-800">My Websites</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 overflow-auto">
          {websites.length > 0 ? (
            websites.map((item, index) => (
              <div className="flex items-center gap-4" key={`website-item-${index}`}>
                {/* Generic website icon for all */}
                <Image src={web} alt={item.website_url} width={36} height={36} className="flex-none" />
                <a
                  href={item.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-sm text-primary-600 underline"
                >
                  {item.website_url}
                </a>
              </div>
            ))
          ) : (
            <p>No websites found.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Websites;
