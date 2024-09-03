"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Dash = () => {
    const { data: session } = useSession();

    return (
        <div>
            <p>{session?.user?.username}</p>
            <button onClick={() => signOut()}>Logout.</button>
        </div>
    )
}

export default Dash