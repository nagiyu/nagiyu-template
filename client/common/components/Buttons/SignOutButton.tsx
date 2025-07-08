'use client';

import { signOut } from 'next-auth/react';
import Button from '@mui/material/Button';

export default function SignOutButton() {
    const handleSignOut = (): void => {
        signOut();
    };

    return (
        <Button color="inherit" onClick={handleSignOut}>
            Logout
        </Button>
    );
}
