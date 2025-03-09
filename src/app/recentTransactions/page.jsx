"use client";

import React, { useState } from "react";

import Doubleleft from "./chevron-double-left.svg";
import Lastpage from "./lastpage.svg";
import Next from "./next.svg";
import Previous from "./previous.svg";
import Search from "./search.svg";

const Doublelefticon = () => (
  <img
    src={Doubleleft.src}
    alt="Doubleleft"
    className="w-[25px] h-[25px] md:w-[32px] md:h-[32px]"
  />
);

const Lastpageicon = () => (
  <img src={Lastpage.src} alt="Lastpage" className="scale-80" />
);

const Nexticon = () => <img src={Next.src} alt="Next" />;

const Previousicon = () => <img src={Previous.src} alt="Previous" />;

const Searchicon = () => <img src={Search.src} alt="Search" />;

const TransactionsTable = () => {
  const transactions = [
    {
      id: "962296152",
      name: "Sherman Blankenship",
      date: "08 Jan, 2022",
      status: "Pending",
      amount: "$217.90",
    },
    {
      id: "829892537",
      name: "Claudio Barrera",
      date: "06 Jan, 2022",
      status: "Completed",
      amount: "$329.90",
    },
    {
      id: "741560657",
      name: "Clifton Daniel",
      date: "03 Jan, 2022",
      status: "Completed",
      amount: "-$549.90",
    },
    {
      id: "529040347",
      name: "Curt Boyer",
      date: "01 Jan, 2022",
      status: "Completed",
      amount: "-$238.90",
    },
    {
      id: "398078341",
      name: "Jeff Proctor",
      date: "31 Dec, 2021",
      status: "Completed",
      amount: "-$283.90",
    },
    {
      id: "197401837",
      name: "Rodger Fritz",
      date: "24 Dec, 2021",
      status: "Completed",
      amount: "$237.90",
    },
  ];

  return (
    <div className="mt-8 w-full">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="h-[3.5rem] bg-Neutral-20 text-[10px] md:text-base">
            <th className="py-2 px-2 md:px-12 border-b text-left">
              Transactions ID
            </th>
            <th className="py-2 px-2 md:px-12 border-b text-left">Name</th>
            <th className="py-2 px-2 md:px-12 border-b text-left hidden md:table-cell">
              Date
            </th>
            <th className="py-2 px-2 md:px-12 border-b text-left">Status</th>
            <th className="py-2 px-2 md:px-12 border-b text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            let formattedAmount = transaction.amount;
            if (transaction.amount.includes("-$")) {
              formattedAmount = "-$" + transaction.amount.split("-$")[1];
            }

            return (
              <tr
                key={transaction.id}
                className="hover:bg-gray-50 text-[8px] md:text-base font-normal"
              >
                <td className="h-[4rem] py-2 px-2 md:px-12 text-left md:font-normal font-semibold">
                  {transaction.id}
                </td>
                <td className="h-[4rem] py-2 px-2 md:px-12 text-left">
                  <div className="flex flex-col">
                    <span>{transaction.name}</span>
                    <span className="text-Neutral-70 md:hidden">
                      {transaction.date}
                    </span>
                  </div>
                </td>
                <td className="h-[4rem] py-2 px-2 md:px-12 text-left hidden md:table-cell">
                  {transaction.date}
                </td>
                <td className="h-[4rem] py-2 px-2 md:px-12 text-left">
                  {transaction.status}
                </td>
                <td
                  className={`h-[4rem] py-2 px-2 md:px-12 text-left ${
                    formattedAmount.startsWith("-")
                      ? "text-Error-500"
                      : "text-Success-500"
                  }`}
                >
                  {formattedAmount}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// Pagination Component
const Pagination = () => {
  return (
    <div className="flex flex-col md:flex-row bg-Neutral-20 md:fixed bottom-0 md:h-[4.5rem] h-auto w-full sm:mt-8 py-4 md:py-6 md:mb-8">
      <div className="flex items-center justify-between md:justify-start px-4 md:px-0 md:ml-[5rem]">
        <div className="flex items-center text-xs md:text-sm font-normal text-Neutral-90">
          <span>Items per page:</span>
          <input
            type="number"
            className="border-solid border ml-2 md:ml-8 w-[4.5rem] h-[2.5rem] p-4"
            defaultValue={1}
            min={1}
          />
        </div>
        <div className="text-xs md:text-sm font-normal text-Neutral-90 md:ml-8">
          1-10 of 23
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-16 md:gap-x-4 mt-2 md:mt-0 px-4 md:px-0">
        <button className="md:ml-[3rem]">
          <Doublelefticon />
        </button>
        <button className="md:ml-4">
          <Previousicon />
        </button>
        <button className="md:ml-4">
          <Nexticon />
        </button>
        <button className="md:ml-4">
          <Lastpageicon />
        </button>
      </div>
    </div>
  );
};

// Main Component
const TransactionPage = () => {
  return (
    <div className="md:ml-[300px] md:mr-12 mt-[60px] md:mt-12 p-4 max-w-7xl mx-auto md:bg-white bg-gradient-to-b">
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="font-bold text-2xl md:text-3xl text-Neutral-100 w-full md:w-auto mb-4 md:mb-0">
            Recent Transactions
          </div>
          <div className="flex items-center w-full md:w-auto">
            <input
              type="text"
              placeholder="Search"
              className="w-full md:w-[21.375rem] h-[2.25rem] md:h-[3rem] pl-4 border border-Neutral-40 rounded-3xl bg-Base/White"
            />
            <button className="flex items-center justify-center w-[40px] h-[40px] md:w-[2.5rem] md:h-[2.5rem] bg-Violet-500 ml-4 rounded-3xl">
              <Searchicon />
            </button>
          </div>
        </div>
        <div className="mb-8">
          <TransactionsTable />
        </div>
        <div className="mb-[5rem] md:mb-[6rem]">
          <button className="rounded-3xl bg-Violet-500 h-[3rem] hidden md:block w-[15.5rem] text-lg text-Base-White font-semibold">
            Download the Excel File
          </button>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default TransactionPage;
