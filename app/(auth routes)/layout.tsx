"use client";

import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthRoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, [router]);

  return <AuthProvider>{children}</AuthProvider>;
}
