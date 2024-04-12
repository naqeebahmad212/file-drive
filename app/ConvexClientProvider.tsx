"use client";
import { ReactNode } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  const apiKey = "pk_test_cHJvYmFibGUtYm9iY2F0LTY5LmNsZXJrLmFjY291bnRzLmRldiQ";
  const clerkUrl = "https://expert-yak-25.convex.cloud";

  if (!apiKey || !clerkUrl) throw new Error("apiKey missing");
  const convex = new ConvexReactClient(clerkUrl);
  return (
    <ClerkProvider publishableKey={apiKey}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
