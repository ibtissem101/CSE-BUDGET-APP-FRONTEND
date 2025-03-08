"use client";
import { useState } from "react";

const ReferFriendModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    friendName: "",
    friendEmail: "",
    message: "Hey! I've been using this amazing budget tracking app and thought you might find it useful too. Join me!",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.friendEmail)) {
      setError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Simulate API call to send invitation
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess("Invitation sent successfully!");
      
      // Reset form after 2 seconds and close modal
      setTimeout(() => {
        setFormData({
          friendName: "",
          friendEmail: "",
          message: "Hey! I've been using this amazing budget tracking app and thought you might find it useful too. Join me!",
        });
        setSuccess("");
        onClose();
      }, 2000);
    }, 1500);
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
            Refer a Friend
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

        {success ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-lg font-medium text-Neutral-90">{success}</p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-Neutral-90 mb-1">
                Friend's Name
              </label>
              <input
                type="text"
                name="friendName"
                value={formData.friendName}
                onChange={handleChange}
                className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
                placeholder="Enter your friend's name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-Neutral-90 mb-1">
                Friend's Email
              </label>
              <input
                type="email"
                name="friendEmail"
                value={formData.friendEmail}
                onChange={handleChange}
                className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
                placeholder="Enter your friend's email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-Neutral-90 mb-1">
                Personal Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500 min-h-[100px]"
                placeholder="Add a personal message"
              />
            </div>

            {error && <div className="text-red-500 text-sm">{error}</div>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-Violet-500 text-white py-3 rounded-lg hover:bg-Violet-600 transition-colors font-semibold disabled:bg-Violet-300 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending Invitation..." : "Send Invitation"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ReferFriendModal;