"use client";
import { useState, useEffect } from "react";

const WalletModal = ({ isOpen, onClose, onSubmit, initialData, wallets }) => {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    currentAmount: "",
    icon: "🏦",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.title,
        targetAmount: initialData.targetAmount.toString(),
        currentAmount: initialData.currentAmount.toString(),
        icon: initialData.icon,
      });
    } else {
      setFormData({
        name: "",
        targetAmount: "",
        currentAmount: "",
        icon: "🏦",
      });
    }
  }, [initialData]);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentAmountValue =
      formData.currentAmount === "" ? 0 : Number(formData.currentAmount);
    if (currentAmountValue > Number(formData.targetAmount)) {
      setError("Current amount cannot exceed target amount");
      return;
    }
    const existingWallet = wallets.find(
      (wallet) =>
        wallet.title.toLowerCase() === formData.name.toLowerCase() &&
        (!initialData || wallet.title !== initialData.title)
    );
    if (existingWallet) {
      setError("A wallet with this name already exists");
      return;
    }
    setError("");
    const percentage = Math.round(
      (currentAmountValue / Number(formData.targetAmount)) * 100
    );
    const newWallet = {
      icon: formData.icon,
      title: formData.name,
      date: `Last Plan on ${new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })}`,
      currentAmount: currentAmountValue,
      targetAmount: Number(formData.targetAmount),
      percentage: percentage,
    };
    onSubmit(newWallet);
    setFormData({
      name: "",
      targetAmount: "",
      currentAmount: "",
      icon: "🏦",
    });
    onClose();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-Neutral-100">
            Create New Wallet
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

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-Neutral-90 mb-1">
              Wallet Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
              placeholder="Enter wallet name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-Neutral-90 mb-1">
              Current Amount
            </label>
            <input
              type="number"
              name="currentAmount"
              value={formData.currentAmount}
              onChange={handleChange}
              className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
              placeholder="Enter current amount"
              min="0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-Neutral-90 mb-1">
              Target Amount
            </label>
            <input
              type="number"
              name="targetAmount"
              value={formData.targetAmount}
              onChange={handleChange}
              className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
              placeholder="Enter target amount"
              min="0"
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

          <div>
            <label className="block text-sm font-medium text-Neutral-90 mb-1">
              Category Icon
            </label>
            <select
              name="icon"
              value={formData.icon}
              onChange={handleChange}
              className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
            >
              <option value="🏦">🏦 Emergency Fund</option>
              <option value="✈️">✈️ Travel</option>
              <option value="📚">📚 Education</option>
              <option value="🛒">🛒 Shopping</option>
              <option value="🔧">🔧 Maintenance</option>
              <option value="🎁">🎁 Gift</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-Violet-500 text-white py-3 rounded-lg hover:bg-Violet-600 transition-colors font-semibold"
          >
            Create Wallet
          </button>
        </form>
      </div>
    </div>
  );
};

export default WalletModal;
