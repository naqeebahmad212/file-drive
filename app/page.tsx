"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  useOrganization,
  useUser,
} from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import Image from "next/image";

export default function Home() {
  const organization = useOrganization();
  const user = useUser();

  let orgId: string | null | undefined;
  if (organization.isLoaded && user.isLoaded) {
    orgId = organization.organization?.id ?? user.user?.id;
  }
  const createFile = useMutation(api.files.createFile);
  const getFiles = useQuery(api.files.getFiles, orgId ? { orgId } : "skip");

  return (
    <div>
      <Button>Hi im ere</Button>

      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>

      <Button
        onClick={() => {
          if (!orgId) return;
          createFile({ name: "kan", orgId });
        }}
      >
        create me
      </Button>

      {getFiles?.map((file) => (
        <div key={file._id}> {file.name}</div>
      ))}
    </div>
  );
}
