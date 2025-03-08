"use client";

import React, { useState } from "react";

import Avatar from "./avatar.svg";
import Chat from "./chat.svg";
import Menu from "./menu.svg";
import Settings from "./settings.svg";
import Tracker from "./tracker.svg";
import Doubleleft from "./chevron-double-left.svg";
import Lastpage from "./lastpage.svg";
import Next from "./next.svg";
import Previous from "./previous.svg";
import Search from "./search.svg";
import Trackerm from "./Trackermobile.svg";
import Menum from "./menumobile.svg";

// Icons Component
const Useravatar = () => (
  <img src={Avatar.src} alt="avatar" className="w-[25px] h-[25px] md:w-[32px] md:h-[32px]" />
);

const Chaticon = () => (
  <img src={Chat.src} alt="chat" className="w-[25px] h-[25px] md:w-[32px] md:h-[32px]" />
);

const Menuicon = () => (
  <img src={Menu.src} alt="menu" />
);

const Settingsicon = () => (
  <img src={Settings.src} alt="Settings" className="w-[25px] h-[25px] md:w-[32px] md:h-[32px]" />
);

const Trackerlogo = () => (
  <img src={Tracker.src} alt="Tracker" className="w-[32px] h-[32px]" />
);

const Doublelefticon = () => (
  <img src={Doubleleft.src} alt="Doubleleft" className="w-[25px] h-[25px] md:w-[32px] md:h-[32px]" />
);

const Lastpageicon = () => (
  <img src={Lastpage.src} alt="Lastpage" className="scale-80" />
);

const Nexticon = () => (
  <img src={Next.src} alt="Next" />
);

const Previousicon = () => (
  <img src={Previous.src} alt="Previous" />
);

const Searchicon = () => (
  <img src={Search.src} alt="Search" />
);

const Menumobile = () => (
  <img src={Menum.src} alt="menu" className="w-[20px] h-[20px]" />
);

const Trackermobile = () => (
  <img src={Trackerm.src} alt="Tracker" className="w-[20px] h-[20px]" />
);

// TransactionsTable Component
const TransactionsTable = () => {
  const transactions = [
    { id: '962296152', name: 'Sherman Blankenship', date: '08 Jan, 2022', status: 'Pending', amount: '$217.90' },
    { id: '829892537', name: 'Claudio Barrera', date: '06 Jan, 2022', status: 'Completed', amount: '$329.90' },
    { id: '741560657', name: 'Clifton Daniel', date: '03 Jan, 2022', status: 'Completed', amount: '-$549.90' },
    { id: '529040347', name: 'Curt Boyer', date: '01 Jan, 2022', status: 'Completed', amount: '-$238.90' },
    { id: '398078341', name: 'Jeff Proctor', date: '31 Dec, 2021', status: 'Completed', amount: '-$283.90' },
    { id: '197401837', name: 'Rodger Fritz', date: '24 Dec, 2021', status: 'Completed', amount: '$237.90' },
  ];

  return (
    <div className="mt-8 w-full">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="h-[3.5rem] bg-Neutral-20 text-[10px] md:text-base">
            <th className="py-2 px-2 md:px-12 border-b text-left">Transactions ID</th>
            <th className="py-2 px-2 md:px-12 border-b text-left">Name</th>
            <th className="py-2 px-2 md:px-12 border-b text-left hidden md:table-cell">Date</th>
            <th className="py-2 px-2 md:px-12 border-b text-left">Status</th>
            <th className="py-2 px-2 md:px-12 border-b text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            let formattedAmount = transaction.amount;
            if (transaction.amount.includes('-$')) {
              formattedAmount = '-$' + transaction.amount.split('-$')[1];
            }

            return (
              <tr key={transaction.id} className="hover:bg-gray-50 text-[8px] md:text-base font-normal">
                <td className="h-[4rem] py-2 px-2 md:px-12 text-left md:font-normal font-semibold">{transaction.id}</td>
                <td className="h-[4rem] py-2 px-2 md:px-12 text-left">
                  <div className="flex flex-col">
                    <span>{transaction.name}</span>
                    <span className="text-Neutral-70 md:hidden">{transaction.date}</span>
                  </div>
                </td>
                <td className="h-[4rem] py-2 px-2 md:px-12 text-left hidden md:table-cell">{transaction.date}</td>
                <td className="h-[4rem] py-2 px-2 md:px-12 text-left">{transaction.status}</td>
                <td className={`h-[4rem] py-2 px-2 md:px-12 text-left ${formattedAmount.startsWith('-') ? 'text-Error' : 'text-Success-500'}`}>
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

const Header = ({ toggleSidebar }) => {
  return (
    <div className="bg-Base/White w-full md:hidden flex items-center justify-between h-[3.25rem] mt-2 px-4 border-b border-[#E3E8EF]">
      <button className="gap-x-1 flex items-center font-Inter font-normal text-xs text-Violet/Main-500">
        <Trackermobile />Tracker
      </button>
      <button onClick={toggleSidebar}>
        <Menumobile />
      </button>
    </div>
  );
};

// Sidebar Component
const Sidebar = ({ isVisible, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 w-[18.75rem] h-screen bg-Base/Black transform transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-x-0" : "translate-x-full"
      } md:translate-x-0 md:relative md:w-[18.75rem] md:h-screen md:bg-Base/Black`}
    >
      <div className="flex items-center text-Base/White font-Inter font-normal text-2xl italic md:mt-[3rem] mt-8 ml-[2rem]">
        <button className="flex items-center gap-x-2">
          <Trackerlogo />Tracker
        </button>
        <button
          className="flex items-center justify-center rounded-3xl w-[2.5rem] h-[2.5rem] bg-Violet/Main-500 ml-auto mr-[1.125rem]"
          onClick={toggleSidebar}
        >
          <Menuicon />
        </button>
      </div>
      <div className="font-semibold text-xs md:text-sm text-Neutral-50 font-Inter ml-[1.125rem] text-Neutral-10 md:mt-[5rem] mt-12">
        <button className="flex items-center w-[16.5rem] h-[4.5rem] gap-x-2 p-6">
          <Chaticon />My Wallet
        </button>
        <button className="flex items-center w-[16.5rem] h-[4.5rem] gap-x-2 p-6">
          <Chaticon />My Card
        </button>
        <button className="flex items-center  w-[16.5rem] gap-x-2 h-[4.5rem] p-6">
          <Chaticon />Finance Chart
        </button>
        <button className="flex items-center bg-Violet-900 w-[16.75rem] h-[5rem] p-6 gap-x-2">
          <Chaticon />Recent Transactions
          <div className="flex items-center justify-center text-xs font-semibold rounded-full w-[1.5rem] h-[1.3rem] bg-Error ml-[4rem]">12</div>
        </button>
      </div>
      <div className="mt-[9rem] md:fixed md:bottom-[3.5rem]">
        <button className="flex items-center ml-[2rem] text-sm font-semibold font-Inter text-Neutral-50 mb-4 gap-x-4">
          <Settingsicon />Settings
        </button>
        <div className="ml-[1.125rem] border-solid border border-Neutral-90 w-[16.5rem] mb-[1rem]"></div>
        <button className="flex items-center font-semibold text-sm md:text-base text-Neutral-10 font-Inter ml-[2rem] gap-x-4">
          <Useravatar />Adrian Tra
        </button>
      </div>
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
        <div className="text-xs md:text-sm font-normal text-Neutral-90 md:ml-8">1-10 of 23</div>
      </div>
      <div className="flex items-center justify-center gap-x-16 md:gap-x-4 mt-2 md:mt-0 px-4 md:px-0">
        <button className="md:ml-[3rem]"><Doublelefticon /></button>
        <button className="md:ml-4"><Previousicon /></button>
        <button className="md:ml-4"><Nexticon /></button>
        <button className="md:ml-4"><Lastpageicon /></button>
      </div>
    </div>
  );
};

// Main Component
const TransactionPage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex flex-between bg-Base/White">
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <div className="w-full md:mt-[9rem]">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex flex-col md:flex-row md:ml-[5rem] px-4 md:px-0 mt-4 md:mt-0">
          <div className="font-bold font-Inter text-lg md:text-3xl text-Neutral-100 ml-4">Recent Transactions</div>
          <div className="flex items-center mt-4 md:mt-0 md:justify-center md:ml-16">
            <input
              type="text"
              placeholder="Search"
              className="pl-4 border-solid border rounded-3xl md:w-[21.375rem] w-[16.875rem] md:h-[3rem] h-[2.25rem] ml-4 md:ml-[38rem] border-Neutral-40 bg-Base/White"
            />
            <button className="flex items-center justify-center rounded-3xl md:w-[2.5rem] w-[40px] h-[40px] md:h-[2.5rem] bg-Violet/Main-500 ml-4 md:ml-[1rem]">
              <Searchicon />
            </button>
          </div>
        </div>
        <div className="mb-8 px-4 md:px-0"><TransactionsTable /></div>
        <button className="rounded-3xl bg-Violet/Main-500 h-[3rem] hidden md:block w-[15.5rem] text-lg text-Base/White font-semibold ml-[5rem] mb-16">
          Download the Excel File
        </button>
        <Pagination />
      </div>
    </div>
  );
};

export default TransactionPage;