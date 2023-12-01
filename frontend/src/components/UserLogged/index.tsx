"use client";

import { useClient } from "@/hooks/useClient";

export function UserLogged() {
    const { username } = useClient();

    return (
        <p className="text-white">
            Logado com: {username?.toLocaleUpperCase()}
        </p>
    );
}