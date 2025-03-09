"use client";
import { useState } from "react";

const CreateInvoiceModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    invoiceNumber: "",
    clientName: "",
    items: [{ description: "", quantity: 1, price: 0 }],
    total: 0,
    status: "Pending",
    createdAt: new Date().toLocaleDateString(),
  });

  const handleAddItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { description: "", quantity: 1, price: 0 }],
    });
  };

  const handleRemoveItem = (index) => {
    const newItems = formData.items.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      items: newItems,
    });
    calculateTotal(newItems);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = formData.items.map((item, i) => {
      if (i === index) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setFormData({
      ...formData,
      items: newItems,
    });
    calculateTotal(newItems);
  };

  const calculateTotal = (items) => {
    const total = items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    setFormData((prev) => ({ ...prev, total }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-Neutral-100">
            Create New Invoice
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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-Neutral-90 mb-1">
                Invoice Number
              </label>
              <input
                type="text"
                value={formData.invoiceNumber}
                onChange={(e) =>
                  setFormData({ ...formData, invoiceNumber: e.target.value })
                }
                className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-Neutral-90 mb-1">
                Client Name
              </label>
              <input
                type="text"
                value={formData.clientName}
                onChange={(e) =>
                  setFormData({ ...formData, clientName: e.target.value })
                }
                className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-Neutral-90">
                Items
              </label>
              <button
                type="button"
                onClick={handleAddItem}
                className="text-Violet-500 hover:text-Violet-600 text-sm font-medium"
              >
                + Add Item
              </button>
            </div>
            {formData.items.map((item, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 mb-4">
                <div className="col-span-6">
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) =>
                      handleItemChange(index, "description", e.target.value)
                    }
                    placeholder="Item description"
                    className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleItemChange(
                        index,
                        "quantity",
                        parseInt(e.target.value)
                      )
                    }
                    min="1"
                    className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
                    required
                  />
                </div>
                <div className="col-span-3">
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) =>
                      handleItemChange(
                        index,
                        "price",
                        parseFloat(e.target.value)
                      )
                    }
                    min="0"
                    step="0.01"
                    className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(index)}
                    className="text-red-500 hover:text-red-600 p-3"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <div className="text-right">
              <span className="text-sm text-Neutral-70">Total Amount:</span>
              <div className="text-xl font-semibold text-Neutral-90">
                ${formData.total.toFixed(2)}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-Violet-500 text-white py-3 rounded-lg hover:bg-Violet-600 transition-colors font-semibold"
          >
            Create Invoice
          </button>
        </form>
      </div>
    </div>
  );
};

const InvoicePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [invoices, setInvoices] = useState([]);

  const handleSaveInvoice = (invoice) => {
    setInvoices([...invoices, invoice]);
  };

  return (
    <div className="md:ml-[300px] md:mr-12 mt-[60px] md:mt-12 p-4 max-w-7xl mx-auto md:bg-white bg-gradient-to-b">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Invoices</h1>
          <p className="text-gray-600 md:text-base">Manage your invoices</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-Violet-500 text-white px-4 py-2 rounded-lg hover:bg-Violet-600 transition-colors"
        >
          Create Invoice
        </button>
      </div>

      {invoices.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No invoices yet. Create your first invoice!
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {invoices.map((invoice, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border border-Neutral-40 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">
                  Invoice #{invoice.invoiceNumber}
                </h3>
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    invoice.status === "Paid"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {invoice.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Client: {invoice.clientName}
              </p>
              <p className="text-sm text-gray-600">
                Created: {invoice.createdAt}
              </p>
              <div className="mt-2 text-right">
                <span className="font-semibold">
                  ${invoice.total.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      <CreateInvoiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveInvoice}
      />
    </div>
  );
};

export default InvoicePage;
