"use client";
import { useState } from "react";
import Link from "next/link";

const TaxPaymentModal = ({ isOpen, onClose, taxType }) => {
  const [formData, setFormData] = useState({
    amount: "",
    paymentMethod: "credit-card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle tax payment logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-Neutral-100">
            Pay {taxType} Tax
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
              Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                type="text"
                inputMode="decimal"
                pattern="[0-9]+(\.[0-9]+)?"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                className="w-full p-3 pl-7 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
                placeholder="0.00"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-Neutral-90 mb-1">
              Payment Method
            </label>
            <select
              value={formData.paymentMethod}
              onChange={(e) =>
                setFormData({ ...formData, paymentMethod: e.target.value })
              }
              className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
            >
              <option value="credit-card">Credit Card</option>
              <option value="bank-transfer">Bank Transfer</option>
              <option value="digital-wallet">Digital Wallet</option>
            </select>
          </div>

          {formData.paymentMethod === "credit-card" && (
            <>
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
                  <input
                    type="password"
                    value={formData.cvv}
                    onChange={(e) =>
                      setFormData({ ...formData, cvv: e.target.value })
                    }
                    className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
                    placeholder="***"
                    maxLength="3"
                    required
                  />
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-Violet-500 text-white py-3 rounded-lg hover:bg-Violet-600 transition-colors font-semibold"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

const PayTaxPage = () => {
  const [paymentModal, setPaymentModal] = useState({
    isOpen: false,
    taxType: null,
  });

  const taxHistory = [
    {
      id: 1,
      type: "Income",
      amount: "$1,250.00",
      date: "May 15, 2023",
      status: "Paid",
    },
    {
      id: 2,
      type: "Property",
      amount: "$850.00",
      date: "Mar 10, 2023",
      status: "Paid",
    },
    {
      id: 3,
      type: "Sales",
      amount: "$320.50",
      date: "Feb 22, 2023",
      status: "Paid",
    },
  ];

  const upcomingTaxes = [
    {
      id: 1,
      type: "Income",
      amount: "$1,450.00",
      dueDate: "Jun 30, 2023",
    },
    {
      id: 2,
      type: "Property",
      amount: "$850.00",
      dueDate: "Jul 15, 2023",
    },
  ];

  return (
    <div className="md:ml-[310px] mt-[60px] md:mt-12 p-4 max-w-7xl mx-auto md:bg-white bg-gradient-to-b">
      <div className="flex items-center gap-2 mb-4">
        <Link href="/myCard" className="text-Violet-500 hover:text-Violet-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold">Pay Tax</h1>
      </div>
      <div className="text-gray-600 mb-8 md:text-base">
        Manage and pay your taxes efficiently
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-Neutral-40 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-Neutral-90">
              Income Tax
            </h2>
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <p className="text-sm text-Neutral-70 mb-2">Next payment due:</p>
          <p className="text-xl font-bold text-Neutral-100 mb-4">$1,450.00</p>
          <p className="text-xs text-Neutral-70 mb-4">Due on June 30, 2023</p>
          <button
            onClick={() => setPaymentModal({ isOpen: true, taxType: "Income" })}
            className="w-full bg-Violet-500 text-white py-2 rounded-lg hover:bg-Violet-600 transition-colors font-medium text-sm"
          >
            Pay Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg border border-Neutral-40 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-Neutral-90">
              Property Tax
            </h2>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
          </div>
          <p className="text-sm text-Neutral-70 mb-2">Next payment due:</p>
          <p className="text-xl font-bold text-Neutral-100 mb-4">$850.00</p>
          <p className="text-xs text-Neutral-70 mb-4">Due on July 15, 2023</p>
          <button
            onClick={() =>
              setPaymentModal({ isOpen: true, taxType: "Property" })
            }
            className="w-full bg-Violet-500 text-white py-2 rounded-lg hover:bg-Violet-600 transition-colors font-medium text-sm"
          >
            Pay Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg border border-Neutral-40 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-Neutral-90">Sales Tax</h2>
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
          </div>
          <p className="text-sm text-Neutral-70 mb-2">Next payment due:</p>
          <p className="text-xl font-bold text-Neutral-100 mb-4">$320.50</p>
          <p className="text-xs text-Neutral-70 mb-4">Due on August 5, 2023</p>
          <button
            onClick={() => setPaymentModal({ isOpen: true, taxType: "Sales" })}
            className="w-full bg-Violet-500 text-white py-2 rounded-lg hover:bg-Violet-600 transition-colors font-medium text-sm"
          >
            Pay Now
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Payment History</h2>
        <div className="bg-white rounded-lg border border-Neutral-40 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-Neutral-40">
                <th className="px-6 py-3 text-left text-xs font-medium text-Neutral-90 uppercase tracking-wider">
                  Tax Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-Neutral-90 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-Neutral-90 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-Neutral-90 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-Neutral-40">
              {taxHistory.map((tax) => (
                <tr key={tax.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-Neutral-90">
                    {tax.type} Tax
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-Neutral-80">
                    {tax.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-Neutral-80">
                    {tax.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {tax.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Upcoming Payments</h2>
        <div className="bg-white rounded-lg border border-Neutral-40 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-Neutral-40">
                <th className="px-6 py-3 text-left text-xs font-medium text-Neutral-90 uppercase tracking-wider">
                  Tax Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-Neutral-90 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-Neutral-90 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-Neutral-90 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-Neutral-40">
              {upcomingTaxes.map((tax) => (
                <tr key={tax.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-Neutral-90">
                    {tax.type} Tax
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-Neutral-80">
                    {tax.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-Neutral-80">
                    {tax.dueDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() =>
                        setPaymentModal({ isOpen: true, taxType: tax.type })
                      }
                      className="text-sm text-Violet-500 hover:text-Violet-600 font-medium"
                    >
                      Pay Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <TaxPaymentModal
        isOpen={paymentModal.isOpen}
        onClose={() => setPaymentModal({ isOpen: false, taxType: null })}
        taxType={paymentModal.taxType}
      />
    </div>
  );
};

export default PayTaxPage;
