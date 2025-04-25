"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // Import useSearchParams to handle query params
import Link from "next/link";
import { SiteLogo } from "@/components/svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircularProgress } from "./progress";
import { Icon } from "@iconify/react";

// Reusable component to show speed stats
const SpeedStatCard = ({ url, desktopScore, mobileScore, lastUpdatedDate, lastUpdatedTime }) => (
  <div className="border-2 bg-white flex flex-col gap-1 w-full items-center rounded-xl p-4 border-green-400">
    <div className="w-full flex justify-between border-b py-2">
      <h4 className="font-bold">Link</h4>
      <h4 className="font-bold">HomePage</h4>
    </div>
    <div className="flex flex-col w-full mt-2 gap-4">
      <div className="flex w-full justify-between items-center">
        <h6 className="font-bold">URL</h6>
        <Link className="font-bold text-primary-500" href={url} target="_blank" rel="noopener noreferrer">{url}</Link>
      </div>
      <div className="flex w-full justify-between items-center">
        <h6 className="font-bold">Desktop</h6>
        <h6 className="font-bold">{desktopScore}</h6>
      </div>
      <div className="flex w-full justify-between items-center">
        <h6 className="font-bold">Mobile</h6>
        <h6 className="font-bold">{mobileScore}</h6>
      </div>
      <div className="flex w-full justify-between items-center">
        <h6 className="font-bold">Last Updated</h6>
        <h6 className="font-semibold">{lastUpdatedDate} at {lastUpdatedTime}</h6>
      </div>
    </div>
  </div>
);

const CheckSpeed = () => {
  const searchParams = useSearchParams(); // Use useSearchParams to get query params
  const [inputUrl, setInputUrl] = useState(""); // For URL input
  const [isUrlValid, setIsUrlValid] = useState(false); // To track valid URL state

  const [newStats, setNewStats] = useState({
    desktopScore: "0 / 100",
    mobileScore: "0 / 100",
    lastUpdatedDate: "",
    lastUpdatedTime: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Error state to handle API errors

  // Extract query parameters and update input field
  useEffect(() => {
    const queryUrl = searchParams.get('website'); // Get `website` param from URL using useSearchParams
    if (queryUrl) {
      let trimmedUrl = queryUrl.trim();
      if (!trimmedUrl.startsWith("http://") && !trimmedUrl.startsWith("https://")) {
        trimmedUrl = "https://" + trimmedUrl; // Add https if missing
      }
      setInputUrl(trimmedUrl); // Set input field
      const isValid = isValidUrl(trimmedUrl);
      setIsUrlValid(isValid); // Validate URL
      if (isValid) {
        fetchPageSpeedData(trimmedUrl); // Automatically fetch speed data if the URL is valid
      } else {
        setError("Enter A Valid Website URL"); // Set error message if URL is not valid
      }
    }
  }, [searchParams]); // Only run when searchParams changes

  const handleUrlChange = (e) => {
    let url = e.target.value.trim();
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url; // Automatically add https:// if missing
    }
    setInputUrl(url);
    const isValid = isValidUrl(url);
    setIsUrlValid(isValid); // Validate URL while typing
    setError(isValid ? null : "Enter A Valid Website URL"); // Show error if not valid
  };

  // Enhanced URL validation logic
  const isValidUrl = (url) => {
    const domainRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    return domainRegex.test(url);
  };

  const fetchPageSpeedData = async (url = inputUrl) => {
    if (!isValidUrl(url)) return; // Prevent fetching if the URL is invalid

    setLoading(true);
    setError(null);

    setNewStats({
      desktopScore: "Analyzing...",
      mobileScore: "Analyzing...",
      lastUpdatedDate: "",
      lastUpdatedTime: ""
    });

    try {
      const desktopResponse = await fetch(`/api/pagespeed?url=${encodeURIComponent(url)}&strategy=desktop`);
      if (!desktopResponse.ok) throw new Error('Failed to reach the domain.');
      
      const desktopData = await desktopResponse.json();
      const mobileResponse = await fetch(`/api/pagespeed?url=${encodeURIComponent(url)}&strategy=mobile`);
      if (!mobileResponse.ok) throw new Error('Failed to reach the domain.');
      
      const mobileData = await mobileResponse.json();

      setNewStats({
        desktopScore: `${desktopData.lighthouseResult?.categories?.performance?.score * 100 || 0} / 100`,
        mobileScore: `${mobileData.lighthouseResult?.categories?.performance?.score * 100 || 0} / 100`,
        lastUpdatedDate: new Date().toLocaleDateString(),
        lastUpdatedTime: new Date().toLocaleTimeString()
      });
    } catch (error) {
      console.error('Error fetching PageSpeed data:', error);
      setError('Failed to fetch PageSpeed data or reach the domain.');
      setNewStats({
        desktopScore: "Error",
        mobileScore: "Error",
        lastUpdatedDate: "",
        lastUpdatedTime: ""
      });
    } finally {
      setLoading(false);
    }
  };

  const shouldShowStats = newStats.desktopScore !== "0 / 100" && newStats.mobileScore !== "0 / 100";

  return (
    <div className="w-full">
      <Link href="/dashboard" className="inline-block">
        <SiteLogo className="h-10 w-10 2xl:w-14 2xl:h-14 text-primary" />
      </Link>
      <div className="2xl:mt-8 mt-6 2xl:text-3xl text-2xl font-bold text-default-900">
        Hey, Hello 👋
      </div>
      <div className="2xl:mt-8 mt-6 2xl:text-3xl text-2xl font-bold text-default-900">
        Upgrade Your WordPress Website <span className="text-red-400"> Speed With Just-A-Click! </span>
        <p className="text-sm font-normal pt-2"> No more revenue loss. Get higher conversion rates and more organic traffic with WordPress Speedy. </p>
      </div>

      <div className="mt-5">
        <div className="flex">
          <Input 
            type="text" 
            placeholder="Enter Website URL" 
            className="h-full rounded-[0px] p-3"
            value={inputUrl}
            onChange={handleUrlChange} // Validate and auto-correct URL dynamically
          />
          <Button 
            onClick={() => fetchPageSpeedData()} 
            className="bg-primary-600 border border-primary-600 text-white hover:bg-transparent hover:text-primary-600 gap-2 ml-2" 
            variant="outline"
            disabled={loading || !isUrlValid} // Enable based on valid URL and loading state
          >
            {loading ? (
              <>
                <CircularProgress value="50" color="primary" loading />
                Loading...
              </>
            ) : (
              'Check Speed'
            )}
          </Button>
        </div>
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </div>

      {/* Conditionally render SpeedStatCard only when there are valid stats */}
      {shouldShowStats && (
        <div className="flex flex-col items-center mt-6 gap-2 mb-5">
          <SpeedStatCard {...newStats} url={inputUrl} />
        </div>
      )}

      <div className="flex w-full gap-3 mt-3 flex-col sm:flex-row"> {/* Responsive design for small screens */}
        <Button 
          className="w-full sm:w-1/2 flex gap-2"
          href="/auth/register"
        > 
          <Icon icon="heroicons:user-group" className="h-4 w-4" />
          Register Now 
        </Button>
        <Button 
          className="w-full sm:w-1/2 flex gap-2"> 
          <Icon icon="heroicons:arrow-down" className="h-4 w-4" />
          Download Our Plugin 
        </Button>
      </div>
    </div>
  );
};

export default CheckSpeed;