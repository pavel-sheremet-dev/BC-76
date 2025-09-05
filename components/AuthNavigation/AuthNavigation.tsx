"use client";
// import { logout } from "@/lib/api/clientApi";
// import { useAuthStore } from "@/lib/store/authStore";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import { useRouter } from "next/navigation";
import { buildLinkClassName } from "@/lib/buildLinkClassName/buildLinkClassName";

import styles from "./AuthNavigation.module.css";
import { useAuthStore } from "@/lib/store/authStore";
import { logout } from "@/lib/api/clientApi";

export default function AuthNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated
  );

  // 1. логаут
  // 2. очистка стану аутентифікації
  // 4. перенаправлення (router.push())

  const handleLogout = async () => {
    await logout();
    clearIsAuthenticated();
    router.replace("/sign-in");
  };

  if (!isAuthenticated)
    return (
      <>
        <li>
          <Link
            className={buildLinkClassName({ pathname, slug: "/sign-in" })}
            href="/sign-in"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            className={buildLinkClassName({ pathname, slug: "/sign-up" })}
            href="/sign-up"
          >
            Sign up
          </Link>
        </li>
      </>
    );

  return (
    <>
      <li>
        <Link
          className={buildLinkClassName({ pathname, slug: "/profile" })}
          href="/profile"
        >
          Profile
        </Link>
      </li>
      <li className={styles.userMenu}>
        {user && <p>{user.username}</p>}
        <button className={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </li>
    </>
  );
}
