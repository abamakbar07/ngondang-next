"use client";

import { useUser } from '@auth0/nextjs-auth0/client';
import Loading from '@/components/Loading';


export default function Profile() {
    const { user, isLoading } = useUser();

    return (
        <>
            {isLoading && <Loading />}
            {user && (
                <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
                    <div className="bg-white shadow-md rounded-lg p-6 w-80">
                        <img
                            src={user.picture ? user.picture : ""}
                            alt="Profile Picture"
                            className="w-32 h-32 rounded-full mx-auto"
                        />
                        <h2 className="text-center text-2xl font-bold text-gray-800 mt-4">
                            {user.name}
                        </h2>
                        <p className="text-center text-gray-600 mt-2">{user.email}</p>
                    </div>
                </div>
            )}
        </>
    )
};