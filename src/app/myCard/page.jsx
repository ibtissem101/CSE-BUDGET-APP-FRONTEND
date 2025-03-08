"use client";
import { useState } from "react";
import Link from "next/link";
import ReferFriendModal from "../../components/ReferFriendModal/page";

const AddCardModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [showCVV, setShowCVV] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle card addition logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-Neutral-100">
            Add New Card
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
              Card Number
            </label>
            <input
              type="text"
              value={formData.cardNumber}
              onChange={(e) =>
                setFormData({ ...formData, cardNumber: e.target.value })
              }
              className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
              placeholder="1234 5678 9012 3456"
              maxLength="19"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-Neutral-90 mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                value={formData.expiryDate}
                onChange={(e) =>
                  setFormData({ ...formData, expiryDate: e.target.value })
                }
                className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
                placeholder="MM/YY"
                maxLength="5"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-Neutral-90 mb-1">
                CVV
              </label>
              <div className="relative">
                <input
                  type={showCVV ? "text" : "password"}
                  value={formData.cvv}
                  onChange={(e) =>
                    setFormData({ ...formData, cvv: e.target.value })
                  }
                  className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
                  placeholder="***"
                  maxLength="3"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowCVV(!showCVV)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <img
                    src={showCVV ? "/myCard/eyeclosed.png" : "/myCard/copy.png"}
                    alt={showCVV ? "Hide CVV" : "Show CVV"}
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-Violet-500 text-white py-3 rounded-lg hover:bg-Violet-600 transition-colors font-semibold"
          >
            Add Card
          </button>
        </form>
      </div>
    </div>
  );
};

const ChangePrimaryCardModal = ({ isOpen, onClose }) => {
  const [selectedCard, setSelectedCard] = useState("");
  const cards = [
    { id: 1, type: "Mastercard", number: "****  ****  ****  1234", icon: "💳" },
    { id: 2, type: "Visa", number: "****  ****  ****  5678", icon: "💳" },
    {
      id: 3,
      type: "American Express",
      number: "****  ****  ****  9012",
      icon: "💳",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle primary card change logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-Neutral-100">
            Change Primary Card
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
          <div className="space-y-3">
            {cards.map((card) => (
              <label
                key={card.id}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                  selectedCard === card.id
                    ? "border-Violet-500 bg-Violet-50"
                    : "border-gray-200 hover:border-Violet-300"
                }`}
              >
                <input
                  type="radio"
                  name="card"
                  value={card.id}
                  checked={selectedCard === card.id}
                  onChange={() => setSelectedCard(card.id)}
                  className="hidden"
                />
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{card.icon}</span>
                    <div>
                      <p className="font-medium text-gray-900">{card.type}</p>
                      <p className="text-sm text-gray-500">{card.number}</p>
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedCard === card.id
                        ? "border-Violet-500 bg-Violet-500"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedCard === card.id && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </div>
                </div>
              </label>
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-Violet-500 text-white py-3 rounded-lg hover:bg-Violet-600 transition-colors font-semibold"
          >
            Set as Primary Card
          </button>
        </form>
      </div>
    </div>
  );
};

const MyCardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChangePrimaryCardModalOpen, setIsChangePrimaryCardModalOpen] =
    useState(false);
  const [isReferFriendModalOpen, setIsReferFriendModalOpen] = useState(false);

  return (
    <div className="md:ml-[300px]  mt-[60px] md:mt-12 p-4 max-w-7xl mx-auto md:bg-white bg-gradient-to-b">
      <h1 className="text-2xl md:text-3xl font-bold">My Card</h1>
      <div className="text-gray-600 mb-4 md:text-base md:mb-12">
        Keep track of your financial plan
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/3 flex-1">
          <div className="mb-6">
            <select
              defaultValue=""
              className="w-full flex justify-center items-center p-4 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>
                Select Primary Card
              </option>
              <option value="mastercard">Mastercard</option>
              <option value="visa">Visa</option>
              <option value="amex">American Express</option>
            </select>
          </div>
          <div className="bg-Neutral-20 border rounded-sm border-Neutral-40 py-[18px] px-6 flex flex-col items-center justify-center text-white">
            <div className="mb-[10px] md:mb-8">
              <img
                src="/myCard/CreditCard.png"
                alt="Credit Card"
                className="w-[382px] h-auto"
              />
            </div>
            <div className="w-full max-w-md">
              <h1 className="text-black font-semibold md:text-lg mb-3">
                Card Information
              </h1>
              <div className="space-y-2 text-xs font-semibold md:text-base text-Neutral-90">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm">Card No.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">4889 9271 1937 1932</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText("4889 9271 1937 1932");
                      }}
                      className="hover:opacity-80 transition-opacity"
                      title="Copy card number"
                    >
                      <img
                        src="/myCard/copy.png"
                        alt="Copy"
                        className="w-4 h-4"
                      />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Expiry date</span>
                  <span className="font-medium">12/28</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">CVV (3-digit security code)</span>
                  </div>
                  <span className="font-medium">***</span>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full md:flex-col md:mt-3 md:border-Neutral-40 border-Violet-500 bg-Violet-200 mt-6 p-4 gap-3 text-xs font-semibold text-Violet-500 rounded-lg border-[1px] hover:bg-Violet-200 flex items-center justify-center"
          >
            <img src="/myWallet/plus.png" className="h-10 w-10" alt="" />
            <div className="md:text-lg">Add New Card</div>
          </button>
        </div>
        <div className="md:w-2/3 flex-1 space-y-4  text-Neutral-90 border border-Neutral-40 p-4 rounded-sm mt-8 md:mt-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl ">See Our Help</h2>
          </div>
          <Link
            href="/recentTransactions"
            className="flex justify-between items-center p-4 bg-white rounded-lg cursor-pointer hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <div className="w-1 h-12 bg-red-500 rounded"></div>
              <span>Check Your Cash Flow</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <div
            onClick={() => setIsChangePrimaryCardModalOpen(true)}
            className="flex justify-between items-center p-4 bg-white rounded-lg cursor-pointer hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <div className="w-1 h-12 bg-red-500 rounded"></div>
              <span>Change Primary Card</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <Link
            href="/payTax"
            className="flex justify-between items-center p-4 bg-white rounded-lg  cursor-pointer hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <div className="w-1 h-12 bg-purple-500 rounded"></div>
              <span>Pay Tax</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <div className="flex justify-between items-center p-4 bg-white rounded-lg cursor-pointer hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-1 h-12 bg-green-500 rounded"></div>
              <span>Make Invoice</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className="flex justify-between items-center p-4 bg-white rounded-lg cursor-pointer hover:bg-gray-50"
            onClick={() => setIsReferFriendModalOpen(true)}
          >
            <div className="flex items-center gap-3">
              <div className="w-1 h-12 bg-blue-500 rounded"></div>
              <span>Refer a Friend</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <AddCardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <ChangePrimaryCardModal
        isOpen={isChangePrimaryCardModalOpen}
        onClose={() => setIsChangePrimaryCardModalOpen(false)}
      />
      <ReferFriendModal
        isOpen={isReferFriendModalOpen}
        onClose={() => setIsReferFriendModalOpen(false)}
      />
    </div>
  );
};

export default MyCardPage;
