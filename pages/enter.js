import { signIn } from "../lib/firebase";
import Image from 'next/image'
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function EnterPage() {
    const { user, username } = useContext(UserContext);

    // 1. user signed out <SignInButton />
    // 2. user signed in <SignOutButton />
    // 3. user signed in but has not created username <UsernameForm />
    return (
        <main>
            {
                user ?
                    !username ? <UsernameForm /> : <SignOutButton />
                    :
                    <SignInButton />
            }
        </main>
    )
}

// Sign in with google button
function SignInButton() {
    return (
        <button className="btn-google" onClick={signIn}>
            <Image src={`/google.png`} width='50' height='50' alt='Google Logo' />&nbsp;Sign in with Google
        </button>
    )
}

// Sign out button
function SignOutButton() {
    return <button onClick={() => auth.signOut()}>Sign Out</button>
}

function UsernameForm() {
    return null
}