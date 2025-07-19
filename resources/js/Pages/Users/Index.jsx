import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, router, usePage } from '@inertiajs/react';
import { Pencil, Trash2, UserPlus } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { CheckCircle } from 'lucide-react';

export default function Index({ auth, users }) {
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this user?')) {
            router.delete(`/users/${id}`);
        }
    };

    const page = usePage();
    const flash = page.props.flash || {};

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Manage Users
                </h2>
            }
        >
            <Head title="Users" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white">

                            {/* success */}
                            {flash.success && (
                                <div className="mb-6 flex items-start gap-3 rounded-md border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                                    <CheckCircle className="w-5 h-5 mt-0.5 text-green-600" />
                                    <div>{flash.success}</div>
                                </div>
                            )}

                            {/* Add User */}
                            <div className="mb-6">
                                <Link
                                    href="/users/create"
                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-md text-white text-sm font-semibold transition"
                                >
                                    <UserPlus className="w-5 h-5" />
                                    Add User
                                </Link>
                            </div>
                            
                            {/* Users list */}
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">ID</th>
                                        <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">Name</th>
                                        <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">Email</th>
                                        <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">Role</th>
                                        <th className="px-6 py-4 text-center text-base font-semibold text-gray-700">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-base">
                                    {users.map((user) => (
                                        <tr key={user.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-5 font-medium text-gray-900">{user.id}</td>
                                            <td className="px-6 py-5 text-gray-900">{user.name}</td>
                                            <td className="px-6 py-5 text-gray-900">{user.email}</td>
                                            <td className="px-6 py-5 text-gray-900">{user.role}</td>
                                            <td className="px-6 py-5 text-center">
                                                <div className="flex gap-3 justify-center">
                                                    <button
                                                        onClick={() => router.visit(`/users/${user.id}/edit`)}
                                                        className="flex flex-col items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                                                    >
                                                        <Pencil className="w-5 h-5" />
                                                        <span className="text-xs mt-1">Edit</span>
                                                    </button>

                                                    <button
                                                        onClick={() => handleDelete(user.id)}
                                                        className="flex flex-col items-center justify-center w-16 h-16 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                                                    >
                                                        <Trash2 className="w-5 h-5" />
                                                        <span className="text-xs mt-1">Delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
