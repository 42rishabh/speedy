"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";

const PersonalDetails = () => {
  const [userData, setUserData] = useState({
    fullname: '',
    username: '',
    phoneNumber: '',
    email: '',
    joiningDate: null,
    website: '',
    organization: '',
    designation: '',
    country: '',
    city: '',
    zipCode: '',
    timezone: '',
    currency: '',
    about: ''
  });
  const [date, setDate] = useState(null);

  useEffect(() => {
    // Fetch the user's personal data from the API
    const fetchData = async () => {
      const res = await fetch("/api/settings/general");
      const data = await res.json();
      if (data.status === "success") {
        setUserData(data.userData);
        setDate(new Date(data.userData.joiningDate));
      }
    };
    fetchData();
  }, []);

  return (
    <Card className="rounded-t-none pt-6">
      <CardContent>
        <div className="grid grid-cols-12 md:gap-x-12 gap-y-5">
          {/* Full Name */}
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="fullname" className="mb-2">Full Name</Label>
            <Input id="fullname" value={userData.fullname} placeholder="Full Name" readOnly />
          </div>

          {/* Username */}
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="username" className="mb-2">Username</Label>
            <Input id="username" value={userData.username} placeholder="Username" readOnly />
          </div>

          {/* Phone Number */}
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="phoneNumber" className="mb-2">Phone Number</Label>
            <Input id="phoneNumber" value={userData.phoneNumber} readOnly />
          </div>

          {/* Email */}
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="email" className="mb-2">Email Address</Label>
            <Input id="email" value={userData.email} readOnly />
          </div>

          {/* Joining Date (Read-only Text) */}
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="joiningDate" className="mb-2">Joining Date</Label>
            <Input
              id="joiningDate"
              value={date ? format(date, "PPP") : "N/A"}
              readOnly
            />
          </div>

          {/* Website */}
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="website" className="mb-2">Website</Label>
            <Input id="website" value={userData.website} readOnly />
          </div>

          {/* Organization */}
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="organization" className="mb-2">Organization</Label>
            <Input id="organization" value={userData.organization} readOnly />
          </div>

          {/* Designation */}
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="designation" className="mb-2">Designation</Label>
            <Input id="designation" value={userData.designation} readOnly />
          </div>

          {/* Country, City, Zip Code */}
          <div className="col-span-12 lg:col-span-4">
            <Label htmlFor="country" className="mb-2">Country</Label>
            <Input id="country" value={userData.country} readOnly />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Label htmlFor="city" className="mb-2">City</Label>
            <Input id="city" value={userData.city} readOnly />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Label htmlFor="zipCode" className="mb-2">Zip Code</Label>
            <Input id="zipCode" value={userData.zipCode} readOnly />
          </div>

          {/* Timezone (Read-only Text) */}
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="timezone" className="mb-2">Timezone</Label>
            <Input id="timezone" value={userData.timezone || "N/A"} readOnly />
          </div>

          {/* Currency (Read-only Text) */}
          <div className="col-span-12 md:col-span-6">
            <Label htmlFor="currency" className="mb-2">Currency</Label>
            <Input id="currency" value={userData.currency || "N/A"} readOnly />
          </div>

          {/* About */}
          <div className="col-span-12">
            <Label htmlFor="about" className="mb-2">About</Label>
            <Textarea id="about" value={userData.about} readOnly />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalDetails;
