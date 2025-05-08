"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { Eye, EyeOff } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { getSession } from "next-auth/react";  // For session management

const ChangePassword = () => {
  const [currentPasswordType, setCurrentPasswordType] = useState("password");
  const [newPasswordType, setNewPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const [devices, setDevices] = useState([]);
  const [page, setPage] = useState(1);
  const [devicesPerPage] = useState(5);  // Set pagination limit

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState("");
  const [disableCancel, setDisableCancel] = useState(true);  // For disabling cancel button

  // Fetch recent devices
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const session = await getSession();
        if (session) {
          const res = await fetch("/api/settings/general/password-change", {
            headers: {
              Authorization: `Bearer ${session.token}`,  // Send token in headers
            },
          });
          const result = await res.json();
          if (result.status === "success") {
            setDevices(result.devices || []);  // Assuming API returns devices
          } else {
            setMessage(`Error: ${result.message}`);
          }
        } else {
          setMessage("No session found");
        }
      } catch (error) {
        console.error("Error fetching devices:", error);
        setMessage("Error fetching devices");
      }
    };
    fetchDevices();
  }, []);

  // Handle password input changes and validate fields
  const handlePasswordChange = (e) => {
    const { id, value } = e.target;
    setPasswords({
      ...passwords,
      [id]: value,
    });
    setDisableCancel(false);
  };

  // Validation for new password
  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasLowercase = /[a-z]/.test(password);
    const hasNumberOrSymbol = /[0-9!@#$%^&*(),.?":{}|<>]/.test(password);
    return minLength && hasLowercase && hasNumberOrSymbol;
  };

  // Reset fields on cancel
  const handleCancel = () => {
    setPasswords({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    setDisableCancel(true);
    setMessage("");
  };

  // Submit password change request
  const handleSubmit = async () => {
    if (!validatePassword(passwords.newPassword)) {
      setMessage("New password does not meet the requirements");
      return;
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      setMessage("New password and confirm password do not match");
      return;
    }

    try {
      const session = await getSession();
      if (session) {
        const res = await fetch("/api/settings/general/password-change", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.token}`,  // Send token in headers
          },
          body: JSON.stringify({
            currentPassword: passwords.currentPassword,
            newPassword: passwords.newPassword,
            action: "changePassword"  // Send the action as changePassword
          }),
        });

        const result = await res.json();
        if (result.status === "success") {
          setMessage("Password changed successfully");
          handleCancel();  // Reset form after success
        } else {
          setMessage(`Password change status: ${result.message}`);
        }
      } else {
        setMessage("No session found");
      }
    } catch (error) {
      console.error("Error changing password:", error);
      setMessage("Error changing password");
    }
  };

  // Handle logout for a specific device
  const handleLogout = async (deviceId) => {
    try {
      const session = await getSession();
      if (session) {
        const res = await fetch(`/api/settings/general/password-change`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.token}`,  // Send token in headers
          },
          body: JSON.stringify({ deviceId, action: "logoutDevice" })  // Pass logoutDevice action
        });

        const result = await res.json();
        if (result.status === "success") {
          setDevices(devices.map(device => 
            device.id === deviceId ? { ...device, isLoggedOut: true } : device
          ));
          setMessage("Logged off successfully");
        } else {
          setMessage(`Logout Status: ${result.message}`);
        }
      } else {
        setMessage("No session found");
      }
    } catch (error) {
      console.error("Error logging out device:", error);
      setMessage("Error logging out device");
    }
  };

  // Handle device deletion
  const handleDeleteDevice = async (deviceId) => {
    try {
      const session = await getSession();
      if (session) {
        const res = await fetch(`/api/settings/general/password-change`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.token}`,  // Send token in headers
          },
          body: JSON.stringify({ deviceId })
        });

        const result = await res.json();
        if (result.success) {
          setDevices(devices.filter(device => device.id !== deviceId));
          setMessage("Device deleted successfully");
        } else {
          setMessage(`Delete Status: ${result.message}`);
        }
      } else {
        setMessage("No session found");
      }
    } catch (error) {
      console.error("Error deleting device:", error);
      setMessage("Error deleting device");
    }
  };

  // Paginate devices
  const indexOfLastDevice = page * devicesPerPage;
  const indexOfFirstDevice = indexOfLastDevice - devicesPerPage;
  const currentDevices = devices.slice(indexOfFirstDevice, indexOfLastDevice);
  const totalPages = Math.ceil(devices.length / devicesPerPage);

  return (
    <>
      <Card className="rounded-t-none pt-6">
        <CardContent>
          {message && <div className="text-sm text-red-500 mb-4">{message}</div>}
          <div className="grid grid-cols-12 md:gap-x-12 gap-y-5">
            <div className="col-span-12 md:col-span-6">
              <Label htmlFor="currentPassword" className="mb-2 text-default-800">Current Password</Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  type={currentPasswordType}
                  value={passwords.currentPassword}
                  onChange={handlePasswordChange}
                />
                <Eye
                  className={cn("absolute right-3 top-1/2 -translate-y-1/2 text-default-500 w-4 h-4 cursor-pointer", currentPasswordType === "text" && "hidden")}
                  onClick={() => setCurrentPasswordType("text")}
                />
                <EyeOff
                  className={cn("absolute right-3 top-1/2 -translate-y-1/2 text-default-500 w-4 h-4 cursor-pointer", currentPasswordType === "password" && "hidden")}
                  onClick={() => setCurrentPasswordType("password")}
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6"></div>
            <div className="col-span-12 md:col-span-6">
              <Label htmlFor="newPassword" className="mb-2 text-default-800">New Password</Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={newPasswordType}
                  value={passwords.newPassword}
                  onChange={handlePasswordChange}
                />
                <Eye
                  className={cn("absolute right-3 top-1/2 -translate-y-1/2 text-default-500 w-4 h-4 cursor-pointer", newPasswordType === "text" && "hidden")}
                  onClick={() => setNewPasswordType("text")}
                />
                <EyeOff
                  className={cn("absolute right-3 top-1/2 -translate-y-1/2 text-default-500 w-4 h-4 cursor-pointer", newPasswordType === "password" && "hidden")}
                  onClick={() => setNewPasswordType("password")}
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <Label htmlFor="confirmPassword" className="mb-2 text-default-800">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={confirmPasswordType}
                  value={passwords.confirmPassword}
                  onChange={handlePasswordChange}
                />
                <Eye
                  className={cn("absolute right-3 top-1/2 -translate-y-1/2 text-default-500 w-4 h-4 cursor-pointer", confirmPasswordType === "text" && "hidden")}
                  onClick={() => setConfirmPasswordType("text")}
                />
                <EyeOff
                  className={cn("absolute right-3 top-1/2 -translate-y-1/2 text-default-500 w-4 h-4 cursor-pointer", confirmPasswordType === "password" && "hidden")}
                  onClick={() => setConfirmPasswordType("password")}
                />
              </div>
            </div>
          </div>
          <div className="mt-5 text-sm font-medium text-default-800">Password Requirements:</div>
          <div className="mt-3 space-y-1.5">
            {["Minimum 8 characters long - the more, the better.", "At least one lowercase character.", "At least one number, symbol, or whitespace character."].map((item, index) => (
              <div className="flex items-center gap-1.5" key={`requirement-${index}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-default-400"></div>
                <div className="text-xs text-default-600">{item}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-5 justify-end">
            <Button color="secondary" onClick={handleCancel} disabled={disableCancel}>Cancel</Button>
            <Button onClick={handleSubmit}>
              <Icon icon="heroicons:lock-closed" className="w-5 h-5 text-primary-foreground me-1" />
              Change Password
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* recent device table */}
      <Card className="mt-6">
        <CardHeader className="flex-row items-center border-none mb-0">
          <CardTitle className="flex-1 text-lg font-medium text-default-800">Recent Device</CardTitle>
          <Button className="flex-none" size="sm" variant="outline" onClick={() => handleLogout("all")}>Logout All</Button>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                {["Browser", "DEVICE", "LOCATION", "RECENT ACTIVITIES", "ACTION"].map((column, index) => (
                  <TableHead key={`column-${index}`} className="last:text-right border-t border-default-200 first:pl-5 last:pr-5 whitespace-nowrap">
                    {column}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentDevices.map((item, index) => (
                <TableRow key={`device-row-${index}`} className="border-default-200">
                  <TableCell className="py-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-default-600 whitespace-nowrap">
                      <div className="h-5 w-5 grid place-content-center rounded bg-default-100 dark:bg-default-50">
                        <Image
                          src={item.image || "/images/social/unknown.png"}  // Fallback to unknown.png if image is missing
                          alt={item.browser}
                          width={14}
                          height={14}
                          className="w-3.5 h-3.5"
                        />
                      </div>
                      {item.browser}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-default-600 py-2 whitespace-nowrap">{item.device}</TableCell>
                  <TableCell className="text-sm text-default-600 capitalize py-2 whitespace-nowrap">{item.location}</TableCell>
                  <TableCell className="text-sm text-default-600 capitalize py-2 whitespace-nowrap">{item.recent_activites}</TableCell>
                  <TableCell className="text-right py-2">
                    <Button size="sm" variant="ghost" onClick={() => handleLogout(item.id)}>{item.isLoggedOut ? "Logged Off" : "Logout"}</Button>
                    <Button size="sm" variant="ghost" color="red" onClick={() => handleDeleteDevice(item.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="mt-4 flex justify-end gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
          <Button
            key={`page-${pageNum}`}
            size="sm"
            variant={page === pageNum ? "solid" : "outline"}
            onClick={() => setPage(pageNum)}
            >
              {pageNum}
            </Button>
          ))}
        </div>
      </>
    );
  };

export default ChangePassword;
