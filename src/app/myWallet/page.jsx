"use client";
import { useState } from "react";
import WalletCard from "../../components/WalletCard/page";
import WalletModal from "../../components/WalletModal/page";

const PaymentModal = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState({
    recipient: "",
    amount: "",
    note: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-Neutral-100">
            {type === "send" ? "Send Payment" : "Request Payment"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-Neutral-90 mb-1">
              {type === "send" ? "Recipient" : "Request From"}
            </label>
            <input
              type="text"
              value={formData.recipient}
              onChange={(e) =>
                setFormData({ ...formData, recipient: e.target.value })
              }
              className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
              placeholder={
                type === "send"
                  ? "Enter recipient's name or email"
                  : "Enter requester's name or email"
              }
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-Neutral-90 mb-1">
              Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                type="number"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                className="w-full p-3 pl-7 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
                placeholder="0.00"
                min="0.01"
                step="0.01"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-Neutral-90 mb-1">
              Note (Optional)
            </label>
            <textarea
              value={formData.note}
              onChange={(e) =>
                setFormData({ ...formData, note: e.target.value })
              }
              className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500 min-h-[100px]"
              placeholder="Add a note..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-Violet-500 text-white py-3 rounded-lg hover:bg-Violet-600 transition-colors font-semibold"
          >
            {type === "send" ? "Send Payment" : "Request Payment"}
          </button>
        </form>
      </div>
    </div>
  );
};

const WalletPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingWallet, setEditingWallet] = useState(null);
  const [wallets, setWallets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [paymentModal, setPaymentModal] = useState({
    isOpen: false,
    type: null,
  });
  const walletsPerPage = 9;

  const handleAddWallet = (newWallet) => {
    if (editingWallet !== null) {
      const updatedWallets = wallets.map((wallet, index) =>
        index === editingWallet
          ? {
              ...newWallet,
              date: `Last Plan on ${new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}`,
            }
          : wallet
      );
      setWallets(updatedWallets);
      setEditingWallet(null);
    } else {
      setWallets([...wallets, newWallet]);
    }
  };

  const handleEditWallet = (index) => {
    setEditingWallet(index);
    setIsModalOpen(true);
  };

  const handleDeleteWallet = (index) => {
    const updatedWallets = wallets.filter((_, i) => i !== index);
    setWallets(updatedWallets);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingWallet(null);
  };

  const totalPages = Math.ceil(wallets.length / walletsPerPage);
  const indexOfLastWallet = currentPage * walletsPerPage;
  const indexOfFirstWallet = indexOfLastWallet - walletsPerPage;
  const currentWallets = wallets.slice(indexOfFirstWallet, indexOfLastWallet);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="md:ml-[300px] mt-[60px]  md:mt-12 p-4 max-w-7xl mx-auto  md:bg-white bg-gradient-to-b ">
      <h1 className="text-2xl md:text-3xl font-bold ">My Wallet</h1>
      <div className="text-gray-600 mb-4 md:text-base md:mb-12">
        Keep track of your financial plan
      </div>
      <div className="flex flex-col mb-32 md:mb-0">
        <div className="flex h-[87px] md:h-40 flex-col md:flex-row w-full mb-6 md:mb-6 md:gap-6">
          <div className="bg-white  w-full md:w-7/12  rounded-lg border border-Neutral-40 p-4 mb-4 md:mb-0">
            <div className="flex flex-col justify-between">
              <div className="text-lg flex gap-2 font-bold">
                <img
                  src="myWallet/hello.png"
                  className="h-5 w-5 md:h-8 md:w-8"
                  alt=""
                />
                <div className="flex w-full justify-between text-[16px] md:text-2xl md:mb-4 text-Neutral-100 font-semibold">
                  <div>Hi Adrian!</div>
                  <div className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="p-1 hover:bg-gray-100 rounded-full"
                    >
                      <img
                        src="myWallet/dots-vertical.png"
                        className="h-[18px] w-[18px] md:h-8 md:w-8"
                        alt=""
                      />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                        <div className="py-1">
                          <button
                            onClick={() => {
                              setWallets([]);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 text-left flex items-center gap-2 ${
                              wallets.length === 0
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                            disabled={wallets.length === 0}
                          >
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Delete All Wallets
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-lg md:text-3xl text-Neutral-90 -tracking-2">
                ${(124543).toLocaleString()}
              </div>
            </div>
          </div>

          <div className="flex shadow-lg h-[90px] mt-2 md:mt-0 md:shadow-none bg-white md:h-40 md:w-5/12 w-full rounded-md border border-Neutral-40">
            <div
              className="flex flex-col w-1/2 border-e py-3 hover:bg-gray-50 items-center justify-center gap-2 cursor-pointer"
              title="Send Payment"
              onClick={() => setPaymentModal({ isOpen: true, type: "send" })}
            >
              <img
                src="myWallet/send.png"
                alt="Send"
                className="w-10 h-10 md:w-16 md:h-16"
              />
              <div className="text-Neutral-90 text-xs md:text-[14px] font-semibold">
                Send a payment
              </div>
            </div>

            <div
              className="flex flex-col w-1/2 py-3 hover:bg-gray-50 items-center justify-center gap-2 cursor-pointer"
              title="Request Payment"
              onClick={() => setPaymentModal({ isOpen: true, type: "request" })}
            >
              <img
                src="myWallet/send.png"
                alt="Request"
                className="w-10 h-10 md:w-16 md:h-16"
              />
              <div className="text-Neutral-90 text-xs md:text-[14px] font-semibold">
                Request a payment
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentWallets.length === 0 ? (
          <div className="col-span-full text-center py-8">
            <div className="text-2xl font-semibold text-Neutral-90 mb-4">
              No Wallets Yet
            </div>
            <p className="text-Neutral-70 mb-6">
              Create your first wallet to start tracking your financial goals!
            </p>
            <img
              src="myWallet/NoWallet.png"
              alt="Empty wallet"
              className="mx-auto w-32 h-32 mb-4"
            />
          </div>
        ) : (
          currentWallets.map((wallet, index) => (
            <WalletCard
              key={index}
              icon={wallet.icon}
              title={wallet.title}
              date={wallet.date}
              currentAmount={wallet.currentAmount}
              targetAmount={wallet.targetAmount}
              percentage={wallet.percentage}
              onEdit={() => handleEditWallet(indexOfFirstWallet + index)}
              onDelete={() => handleDeleteWallet(indexOfFirstWallet + index)}
            />
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6 mb-6">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === number
                  ? "bg-Violet-500 text-white"
                  : "bg-white text-Violet-500 border border-Violet-500"
              } hover:bg-Violet-200`}
            >
              {number}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full md:flex-col md:mt-5 md:border-Neutral-40 border-Violet-500 bg-Violet-200  mt-6 p-4 gap-3 text-xs font-semibold text-Violet-500 rounded-lg  border-[1px] hover:bg-Violet-200 flex items-center justify-center"
      >
        <img src="myWallet/plus.png" className="h-10 w-10 " alt="" />
        <div className="md:text-lg">Create New Wallet</div>
      </button>

      <WalletModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddWallet}
        initialData={editingWallet !== null ? wallets[editingWallet] : null}
        wallets={wallets}
      />

      <PaymentModal
        isOpen={paymentModal.isOpen}
        onClose={() => setPaymentModal({ isOpen: false, type: null })}
        type={paymentModal.type}
      />
    </div>
  );
};

export default WalletPage;
