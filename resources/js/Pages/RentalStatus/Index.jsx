import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, Link } from '@inertiajs/react';
import {
    Pencil,
    Trash2,
    SprayCan,
    Sparkles,
    ShieldOff,
    ShieldCheck, DoorOpen, Lock, Brush, PowerOff, Power
} from 'lucide-react';


export default function RentalStatus({ auth, spaces }) {
    const userRole = auth.user.role;

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this space?')) {
            router.delete(`/spaces/${id}`);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Rental Status
                </h2>
            }
        >
            <Head title="Rental Status" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4">
                    {/* Search & Preference Container */}
                    <div className="bg-white border rounded-md p-6 mb-6 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex w-full gap-3">
                            <input
                                type="text"
                                placeholder="Search by number..."
                                className="w-full sm:w-80 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <button
                                type="button"
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-md text-white text-sm font-semibold transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                                </svg>
                                Preference
                            </button>
                        </div>
                    </div>
                    <div className="bg-white p-6 shadow sm:rounded-lg">
                        <div className="overflow-x-auto">
                            
                            <div className="mb-6">
                                <Link
                                    href="/spaces/create"
                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-md text-white text-sm font-semibold transition"
                                >
                                    <DoorOpen className="w-5 h-5" /> {/* Puedes cambiar este ícono si quieres */}
                                    Add Space
                                </Link>
                            </div>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">History</th>
                                        <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">Name</th>
                                        <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">Status</th>
                                        <th className="px-6 py-4 text-center text-base font-semibold text-gray-700">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-base">
                                    {spaces.map((space) => {
                                        const isOccupied = space.status === 'occupied';
                                        const availability = isOccupied ? 'Occupied' : 'Available';

                                        return (
                                            <tr key={space.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-5 text-center">
                                                    {space.type === 'room' ? (
                                                        <div className="flex flex-col items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-md">
                                                            <DoorOpen className="w-5 h-5" />
                                                            <span className="text-xs mt-1">Room</span>
                                                        </div>
                                                    ) : (
                                                        <div className="flex flex-col items-center justify-center w-16 h-16 bg-gray-800 text-white rounded-md">
                                                            <Lock className="w-5 h-5" />
                                                            <span className="text-xs mt-1">Locker</span>
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="px-6 py-5 text-gray-900">{space.number} - {space.subtype} {space.type}</td>
                                                <td className="px-6 py-5 text-gray-900">{availability}</td>
                                                <td className="px-6 py-5 text-center">
                                                    <div className="flex flex-wrap justify-center gap-3">
                                                        {(userRole === 'super_manager' || userRole === 'manager') && (
                                                            <>
                                                                <button
                                                                    onClick={() => router.visit(`/spaces/${space.id}/edit`)}
                                                                    className="flex flex-col items-center justify-center w-16 h-16 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
                                                                >
                                                                    <Pencil className="w-5 h-5" />
                                                                    <span className="text-xs mt-1">Edit</span>
                                                                </button>
                                                            </>
                                                        )}

                                                        {/* Dirty / Clean */}
                                                        {space.is_dirty ? (
                                                            <button className="flex flex-col items-center justify-center w-16 h-16 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
                                                                <Sparkles className="w-5 h-5" />
                                                                <span className="text-xs mt-1">Mark Clean</span>
                                                            </button>
                                                        ) : (
                                                            <button className="flex flex-col items-center justify-center w-16 h-16 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
                                                                <Brush className="w-5 h-5" />
                                                                <span className="text-xs mt-1">Make Dirty</span>
                                                            </button>
                                                        )}

                                                        {/* Out/In Service */}
                                                        {space.is_out_of_service ? (
                                                            <button className="flex flex-col items-center justify-center w-16 h-16 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
                                                                <Power className="w-5 h-5" />
                                                                <span className="text-xs mt-1">In Service</span>
                                                            </button>
                                                        ) : (
                                                            <button className="flex flex-col items-center justify-center w-16 h-16 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
                                                                <PowerOff className="w-5 h-5" />
                                                                <span className="text-xs mt-1">Offline</span>
                                                            </button>
                                                        )}
                                                        {(userRole === 'super_manager' || userRole === 'manager') && (
                                                            <>

                                                                <button
                                                                    onClick={() => handleDelete(space.id)}
                                                                    className="flex flex-col items-center justify-center w-16 h-16 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                                                                >
                                                                    <Trash2 className="w-5 h-5" />
                                                                    <span className="text-xs mt-1">Delete</span>
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
