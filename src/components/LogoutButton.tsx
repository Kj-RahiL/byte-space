"use client";

import { useRouter } from "next/navigation";
import { useLogout } from "../hooks/useAuth";

export function LogoutButton() {
  const router = useRouter();

  const logout = useLogout();

  const handleLogout = () => {
    logout.mutate(undefined, {
      onSuccess: () => {
        router.replace("/login");
      },
    });
  };

  return (
    <button onClick={handleLogout} disabled={logout.isPending}>
      {logout.isPending ? "Logging out..." : "Logout"}
    </button>
  );
}
