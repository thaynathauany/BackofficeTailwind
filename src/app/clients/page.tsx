"use client";

import React, { useState } from "react";
import { AdjustmentsHorizontalIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import PencilIcon from "@/components/icons/PencilIcon.svg";


const clients = [
    {
        id: 1,
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        status: "Active",
    },
    {
        id: 2,
        name: "Cody Fisher",
        email: "cody.fisher@example.com",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        status: "Active",
    },
    // ...outros clientes
];

export default function ClientesPage() {
    const [selectedClient, setSelectedClient] = useState<number | null>(null);

    return (
        <main>
            <div className="relative isolate overflow-hidden mt-[110px]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mt-8 mb-8">
                        <h1 className="text-xl font-semibold text-black">Clientes</h1>
                        <button className="inline-flex h-[44px] items-center gap-2 rounded-lg border border-gray-300 bg-gray-50 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-100">
                            <AdjustmentsHorizontalIcon className="w-5 h-5" />
                            Filter
                        </button>
                    </div>

                    <div className="mt-8 overflow-hidden rounded-xl border border-gray-200">
                        <div className="w-full overflow-x-auto">
                            <table className="min-w-[768px] divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-start text-sm font-semibold text-primary w-full">Name</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-primary">Status</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-primary">Ações</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 bg-white">
                                    {clients.map((client) => (
                                        <React.Fragment key={client.id}>
                                            <tr
                                                className="hover:bg-gray-50 cursor-pointer"
                                                onClick={() =>
                                                    setSelectedClient(
                                                        selectedClient === client.id ? null : client.id
                                                    )
                                                }
                                            >
                                                <td className="px-6 py-4 text-sm text-primary">
                                                    <div className="flex items-center gap-3">
                                                        <img
                                                            src={client.image}
                                                            alt=""
                                                            className="h-8 w-8 rounded-full"
                                                        />
                                                        <div>
                                                            <div className="font-medium text-black">{client.name}</div>
                                                            <div className="text-sm text-primary">{client.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm">
                                                    <span className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 bg-green-50 ring-green-50">
                                                        {client.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-sm">
                                                    <div className="flex gap-2">
                                                        <button className="rounded-md bg-secondary px-3 py-1.5 text-sm text-white">Aprovar</button>
                                                        <button className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-black">Bloquear</button>
                                                        <button className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-black">Rejeitar</button>
                                                        <ChevronDownIcon className="ml-1 h-5 w-5 text-black" />
                                                    </div>
                                                </td>
                                            </tr>

                                            {selectedClient === client.id && (
                                                <tr className="bg-gray-50">
                                                    <td colSpan={3} className="px-6 py-6 text-sm text-primary">
                                                        <div className="flex items-center justify-start gap-4  md:justify-between">
                                                            <h3 className="text-lg font-semibold text-black mb-2">
                                                                Dados pessoais
                                                            </h3>
                                                            <button
                                                                type="button"
                                                                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-gray-100 transition"
                                                            >
                                                                <PencilIcon />
                                                                Edit
                                                            </button>
                                                        </div>
                                                        <div className="grid grid-cols-1 md:grid-cols-[450px_534px] gap-10">
                                                            <div>
                                                                <div className="flex flex-col md:flex-row">
                                                                    <div className="flex flex-col w-3xs">
                                                                        <label className="text-xs">First Name</label>
                                                                        <p className="text-black"> Thayná</p>
                                                                        <br />
                                                                    </div>

                                                                    <div className="flex flex-col">
                                                                        <label className="text-xs">Last Name</label>
                                                                        <p className="text-black">Santos</p>
                                                                        <br />
                                                                    </div>
                                                                </div>

                                                                <div className="flex flex-col md:flex-row">
                                                                    <div className="flex flex-col w-3xs">
                                                                        <label className="text-xs">Email:</label>
                                                                        <p className="text-black">emirhanboruch55@gmail.com</p>
                                                                        <br />
                                                                    </div>

                                                                    <div className="flex flex-col">
                                                                        <label className="text-xs">Phone:</label>
                                                                        <p className="text-black"> +09 363 398 46</p>
                                                                        <br />
                                                                    </div>
                                                                </div>
                                                                <label className="text-xs">Bio:</label>
                                                                <p className="text-black">Team Manager</p>
                                                            </div>


                                                            <div className="w-[300px] md:w-[534px]">
                                                                <h3 className="text-sm text-primary mb-2">Attachments</h3>
                                                                <ul className="divide-y divide-gray-200 overflow-hidden rounded-md border border-gray-200">
                                                                    <li className="flex flex-wrap justify-between items-center px-2 py-2">
                                                                        <div className="flex items-center gap-2">
                                                                            <PaperClipIcon className="w-5 h-5" />
                                                                            <span className="text-black">documento_de_identidade</span>
                                                                        </div>
                                                                        <a href="#" className="text-sm font-medium text-secondary">Download</a>
                                                                    </li>
                                                                    <li className="flex flex-wrap justify-between items-center px-2 py-2">
                                                                        <div className="flex items-center gap-2">
                                                                            <PaperClipIcon className="w-5 h-5" />
                                                                            <span className="text-black">comprovante_de_residência</span>
                                                                        </div>
                                                                        <a href="#" className="text-sm font-medium text-secondary">Download</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}