import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function Navbar() {
    const { user, username } = useContext(UserContext);

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/" passHref>
                        <button className="btn-logo">NXT</button>
                    </Link>
                </li>

                {/* user is signed-in and has username */}
                {username && (
                    <>
                        <li className="push-left">
                            <button>Sign Out</button>
                        </li>
                        <li>
                            <Link href="/admin" passHref>
                                <button className="btn-blue">Write Posts</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${username}`} passHref>
                                <a>
                                    <Image
                                        src={user?.photoURL || 'https://api.lorem.space/image/face?w=150&h=150'}
                                        alt={username}
                                        width={50}
                                        height={50}
                                    />
                                </a>
                            </Link>
                        </li>
                    </>
                )}

                {/* user is not signed OR has not created username */}
                {!username && (
                    <li>
                        <Link href="/enter" passHref>
                            <button className="btn-blue">Log in</button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}