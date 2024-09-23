import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { User, LogOut } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import * as apiClient from "../api-client";
import { LogoutButton } from "@/components/logout-button";
interface UserData {
  firstName: string;
  lastName: string;
  email: string;
}

export default function SecretPage() {
  const { data: user, isLoading } = useQuery({
    queryFn: apiClient.fetchCurrentUser,
    queryKey: ["currentUser"],
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen ">
        <div className="text-2xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center flex-1">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Welcome to Your Secret Page
          </CardTitle>
          <CardDescription>Here's your personal information:</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <User className="h-6 w-6 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-500">Name</p>
                <p className="text-lg font-semibold">{`${user?.firstName} ${user?.lastName}`}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-lg font-semibold">{user?.email}</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <LogoutButton />
        </CardFooter>
      </Card>
    </div>
  );
}
