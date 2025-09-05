"use client";

import { checkSession, getUser } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const [isRefreshing, setIsRefreshing] = useState(true);
  // 1. перевірка сессії (сессія + отримання користувача) на клієнті для того, щоб мати актуальний стан аутентифікації для подальшого відображення потрібного інтерфейсу.

  useEffect(() => {
    const asyncWrapper = async () => {
      const { success } = await checkSession();
      if (success) {
        const user = await getUser();
        setUser(user);
        setIsRefreshing(false);
      } else {
        setIsRefreshing(false);
        router.replace("/sign-in");
      }
    };
    asyncWrapper();
  }, [router, setUser]);

  // стан isRefreshing ???

  return (
    <>
      {isRefreshing && (
        <div
          style={{
            width: "100vw",
            height: "100dvh",
            position: "fixed",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          loader...
        </div>
      )}
      {children}
    </>
  );
};

export default AuthProvider;
