"use client";

import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect } from 'react';
import Loading from '@/components/Loading';


export default function Profile() {
    const { user, isLoading } = useUser();

    useEffect(() => {
        if (user) {
            // Call the API to validate the user
            fetch('/api/user/validate', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user }),
            })
                .then((res) => res.json())
                .then((data) => {
                console.log(data.message);
                })
                .catch((err) => console.error('Failed to validate user:', err));
        }
      }, [user]);

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