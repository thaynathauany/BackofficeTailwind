"use client";

import { Fragment } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ArrowDownCircleIcon,
  ArrowPathIcon,
  ArrowUpCircleIcon,
  EllipsisHorizontalIcon,
  PlusSmallIcon,

} from "@heroicons/react/20/solid";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

const stats = [
  {
    currency: "MXN",
    flag: "/images/flags/flagmexico.png",
    value: "501,092.00",
  },
  {
    currency: "BRL",
    flag: "/images/flags/flagbrazil.png",
    value: "802,345.00",
  },
];

const statuses = {
  Paid: "text-green-700 bg-green-50 ring-green-50",
  Withdraw: "text-primary bg-gray-50 ring-gray-50",
  Overdue: "text-red-700 bg-red-50 ring-red-50",
};

type StatusType = keyof typeof statuses;
const days = [
  {
    date: "Today",
    dateTime: "2023-03-22",
    transactions: [
      {
        id: 1,
        invoiceNumber: "00012",
        href: "#",
        amount: "$7,600.00 USD",
        tax: "$500.00",
        status: "Paid",
        client: "Reform",
        description: "Website redesign",
        icon: ArrowUpCircleIcon,
      },
      {
        id: 2,
        invoiceNumber: "00011",
        href: "#",
        amount: "$10,000.00 USD",
        status: "Withdraw",
        client: "Tom Cook",
        description: "Salary",
        icon: ArrowDownCircleIcon,
      },
      {
        id: 3,
        invoiceNumber: "00009",
        href: "#",
        amount: "$2,000.00 USD",
        tax: "$130.00",
        status: "Overdue",
        client: "Tuple",
        description: "Logo design",
        icon: ArrowPathIcon,
      },
    ],
  },
  {
    date: "Yesterday",
    dateTime: "2023-03-21",
    transactions: [
      {
        id: 4,
        invoiceNumber: "00010",
        href: "#",
        amount: "$14,000.00 USD",
        tax: "$900.00",
        status: "Paid",
        client: "SavvyCal",
        description: "Website redesign",
        icon: ArrowUpCircleIcon,
      },
    ],
  },
];
const clients = [
  {
    id: 1,
    name: "Tuple",
    imageUrl: "https://tailwindcss.com/plus-assets/img/logos/48x48/tuple.svg",
    lastInvoice: {
      date: "December 13, 2022",
      dateTime: "2022-12-13",
      amount: "$2,000.00",
      status: "Overdue",
    },
  },
  {
    id: 2,
    name: "SavvyCal",
    imageUrl:
      "https://tailwindcss.com/plus-assets/img/logos/48x48/savvycal.svg",
    lastInvoice: {
      date: "January 22, 2023",
      dateTime: "2023-01-22",
      amount: "$14,000.00",
      status: "Paid",
    },
  },
  {
    id: 3,
    name: "Reform",
    imageUrl: "https://tailwindcss.com/plus-assets/img/logos/48x48/reform.svg",
    lastInvoice: {
      date: "January 23, 2023",
      dateTime: "2023-01-23",
      amount: "$7,600.00",
      status: "Paid",
    },
  },
];

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {

  return (
    <>
      <main>
        <div className="relative isolate overflow-hidden mt-[110px]">
          {/* Secondary navigation */}
          <header className="pt-6 pb-4 sm:pb-6">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
              <h1 className="text-base/7 font-semibold text-black">
                Dashboard
              </h1>
              <div className="flex items-center justify-between gap-x-4">
                <a
                  type="button"
                  className="cursor-pointer inline-flex h-[44px] items-center justify-center gap-2 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB] px-4 text-sm font-medium text-[#344054] shadow-sm hover:bg-[#F3F4F6]"
                >
                  <AdjustmentsHorizontalIcon className="w-5 h-5" />
                  <span>Filter</span>
                </a>
                <a
                  href="#"
                  className="ml-auto flex h-[44px] items-center gap-x-1 rounded-md bg-secondary px-4 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <PlusSmallIcon aria-hidden="true" className="-ml-1.5 size-5" />
                  New invoice
                </a>
              </div>
            </div>
          </header>

          {/* Stats */}
          <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
            <dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
              {stats.map((stat, statIdx) => (
                <div
                  key={stat.currency}
                  className={classNames(
                    statIdx % 2 === 1 ? "sm:border-l" : statIdx === 2 ? "lg:border-l" : "",
                    "flex flex-col items-start justify-start border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={stat.flag}
                      alt={`${stat.currency} flag`}
                    />
                    <span className="text-lg font-medium text-primary">{stat.currency}</span>
                  </div>
                  <dd className="mt-4 text-2xl font-semibold text-black">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="space-y-16 py-16 ">
          {/* Recent activity table */}
          <div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mx-auto max-w-2xl text-base font-semibold text-black lg:mx-0 lg:max-w-none">
                Recent activity
              </h2>
            </div>
            <div className="mt-6 overflow-hidden border-t border-gray-100">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                  <table className="w-full text-left">
                    <thead className="sr-only">
                      <tr>
                        <th>Amount</th>
                        <th className="hidden sm:table-cell">Client</th>
                        <th>More details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {days.map((day) => (
                        <Fragment key={day.dateTime}>
                          <tr className="text-sm/6 text-primary">
                            <th
                              scope="colgroup"
                              colSpan={3}
                              className="relative isolate py-2 font-semibold"
                            >
                              <time className="text-black" dateTime={day.dateTime}>{day.date}</time>
                              <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                              <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                            </th>
                          </tr>
                          {day.transactions.map((transaction) => (
                            <tr key={transaction.id}>
                              <td className="relative py-5 pr-6">
                                <div className="flex gap-x-6">
                                  <transaction.icon
                                    aria-hidden="true"
                                    className="hidden h-6 w-5 flex-none text-primary sm:block"
                                  />
                                  <div className="flex-auto">
                                    <div className="flex items-start gap-x-3">
                                      <div className="text-sm/6 font-medium text-black">
                                        {transaction.amount}
                                      </div>
                                      <div
                                        className={classNames(
                                          statuses[
                                          transaction.status as keyof typeof statuses
                                          ],
                                          "rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                                        )}
                                      >
                                        {transaction.status}
                                      </div>
                                    </div>
                                    {transaction.tax ? (
                                      <div className="mt-1 text-xs/5 text-primary">
                                        {transaction.tax} tax
                                      </div>
                                    ) : null}
                                  </div>
                                </div>
                                <div className="absolute right-full bottom-0 h-px w-screen bg-gray-100" />
                                <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                              </td>
                              <td className="hidden py-5 pr-6 sm:table-cell">
                                <div className="text-sm/6 text-black font-medium">
                                  {transaction.client}
                                </div>
                                <div className="mt-1 text-xs/5 text-primary">
                                  {transaction.description}
                                </div>
                              </td>
                              <td className="py-5 text-right">
                                <div className="flex justify-end">
                                  <a
                                    href={transaction.href}
                                    className="text-sm/6 font-medium text-secondary"
                                  >
                                    View
                                    <span className="hidden sm:inline">
                                      {" "}
                                      transaction
                                    </span>
                                    <span className="sr-only">
                                      , invoice #{transaction.invoiceNumber},{" "}
                                      {transaction.client}
                                    </span>
                                  </a>
                                </div>
                                <div className="mt-1 text-xs/5 text-primary">
                                  Invoice{" "}
                                  <span className="text-black font-medium">
                                    #{transaction.invoiceNumber}
                                  </span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Recent client list*/}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="flex items-center justify-between">
                <h2 className="text-base/7 font-semibold text-black">
                  Recent clients
                </h2>
                <a
                  href="#"
                  className="text-sm/6 font-semibold text-secondary"
                >
                  View all<span className="sr-only">, clients</span>
                </a>
              </div>
              <ul
                role="list"
                className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
              >
                {clients.map((client) => (
                  <li
                    key={client.id}
                    className="overflow-hidden rounded-xl border border-gray-200"
                  >
                    <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                      <img
                        alt={client.name}
                        src={client.imageUrl}
                        className="size-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                      />
                      <div className="text-sm/6 font-medium text-primary">
                        {client.name}
                      </div>
                      <Menu as="div" className="relative ml-auto">
                        <MenuButton className="relative block text-primary hover:text-primary">
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Open options</span>
                          <EllipsisHorizontalIcon
                            aria-hidden="true"
                            className="size-5"
                          />
                        </MenuButton>
                        <MenuItems
                          transition
                          className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                        >
                          <MenuItem>
                            <a
                              href="#"
                              className="block px-3 py-1 text-sm/6 text-primary data-focus:bg-gray-50 data-focus:outline-hidden"
                            >
                              View
                              <span className="sr-only">, {client.name}</span>
                            </a>
                          </MenuItem>
                          <MenuItem>
                            <a
                              href="#"
                              className="block px-3 py-1 text-sm/6 text-primary data-focus:bg-gray-50 data-focus:outline-hidden"
                            >
                              Edit
                              <span className="sr-only">, {client.name}</span>
                            </a>
                          </MenuItem>
                        </MenuItems>
                      </Menu>
                    </div>
                    <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm/6">
                      <div className="flex justify-between gap-x-4 py-3">
                        <dt className="text-primary">Last invoice</dt>
                        <dd className="text-primary">
                          <time dateTime={client.lastInvoice.dateTime}>
                            {client.lastInvoice.date}
                          </time>
                        </dd>
                      </div>
                      <div className="flex justify-between gap-x-4 py-3">
                        <dt className="text-primary">Amount</dt>
                        <dd className="flex items-start gap-x-2">
                          <div className="font-medium text-black">
                            {client.lastInvoice.amount}
                          </div>
                          <div
                            className={classNames(
                              statuses[client.lastInvoice.status as StatusType],
                              "rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                            )}
                          >
                            {client.lastInvoice.status}
                          </div>
                        </dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
