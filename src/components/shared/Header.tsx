'use client';

import Link from 'next/link';
import { Newspaper } from 'lucide-react';

import { ROUTES } from '@/routes';

const Header = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="inline-flex shrink-0 items-center gap-3">
                <Newspaper />
                <h1 className="font-bold text-2xl">Blog</h1>
            </div>

            <ul className="flex items-center gap-4">
                <li>
                    <Link href={ROUTES.HOME} className="inline-block py-3">
                        <span className={`text-sm`}>All Posts</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href={ROUTES.CREATE_POST}
                        className="inline-block py-3"
                    >
                        <span className="text-sm">New Post</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
