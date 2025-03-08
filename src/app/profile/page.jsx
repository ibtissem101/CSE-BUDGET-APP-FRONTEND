"use client";
import { useState } from "react";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: "Adrian Thompson",
    email: "adrian.thompson@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    memberSince: "January 2023",
  });

  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isSecurityModalOpen, setIsSecurityModalOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] =
    useState(false);

  const handleProfileUpdate = (updatedData) => {
    setProfileData({
      ...profileData,
      ...updatedData,
    });
  };

  return (
    <div className="md:ml-[300px] md:mr-12 mt-[60px] md:mt-12 p-4 max-w-7xl mx-auto md:bg-white bg-gradient-to-b">
      <h1 className="text-2xl md:text-3xl font-bold">Profile</h1>
      <div className="mb-3 md:text-base md:mb-8">
        Manage your account settings
      </div>

      <div className="bg-Neutral-20 border border-Neutral-40 py-6 px-6 flex flex-col items-center justify-center mb-8 rounded-lg">
        <div className="mb-6">
          <img
            src="/sideBar/Avatar.png"
            alt="Profile Picture"
            className="w-24 h-24 rounded-full"
          />
        </div>
        <div className="w-full max-w-md">
          <h2 className="text-black font-semibold mb-6 text-center text-xl">
            {profileData.name}
          </h2>
          <div className="space-y-4 text-sm text-Neutral-90">
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-Neutral-40">
              <span className="font-medium">Email</span>
              <span>{profileData.email}</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-Neutral-40">
              <span className="font-medium">Phone</span>
              <span>{profileData.phone}</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-Neutral-40">
              <span className="font-medium">Location</span>
              <span>{profileData.location}</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-Neutral-40">
              <span className="font-medium">Member Since</span>
              <span>{profileData.memberSince}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div
          onClick={() => setIsEditProfileModalOpen(true)}
          className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-12 bg-Violet-500 rounded"></div>
            <span>Edit Profile</span>
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
          onClick={() => setIsSecurityModalOpen(true)}
          className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-12 bg-blue-500 rounded"></div>
            <span>Security Settings</span>
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
          onClick={() => setIsNotificationModalOpen(true)}
          className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-12 bg-purple-500 rounded"></div>
            <span>Notification Preferences</span>
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
          onClick={() => setIsDeleteAccountModalOpen(true)}
          className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-12 bg-red-500 rounded"></div>
            <span>Delete Account</span>
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

      <EditProfileModal
        isOpen={isEditProfileModalOpen}
        onClose={() => setIsEditProfileModalOpen(false)}
        profileData={profileData}
        onSave={handleProfileUpdate}
      />

      <SecuritySettingsModal
        isOpen={isSecurityModalOpen}
        onClose={() => setIsSecurityModalOpen(false)}
      />

      <NotificationPreferencesModal
        isOpen={isNotificationModalOpen}
        onClose={() => setIsNotificationModalOpen(false)}
      />

      <DeleteAccountModal
        isOpen={isDeleteAccountModalOpen}
        onClose={() => setIsDeleteAccountModalOpen(false)}
      />
    </div>
  );
};

export default ProfilePage;

const EditProfileModal = ({ isOpen, onClose, profileData, onSave }) => {
  const [formData, setFormData] = useState({
    name: profileData.name,
    email: profileData.email,
    phone: profileData.phone,
    location: profileData.location,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-Neutral-100">
            Edit Profile
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
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-Neutral-90 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-Neutral-90 mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-Neutral-90 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-Violet-500 text-white py-3 rounded-lg hover:bg-Violet-600 transition-colors font-semibold"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

const SecuritySettingsModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (formData.newPassword !== formData.confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    // Password change logic would go here
    alert("Password changed successfully!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-Neutral-100">
            Security Settings
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
              Current Password
            </label>
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-Neutral-90 mb-1">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-Neutral-90 mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
              required
            />
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <button
            type="submit"
            className="w-full bg-Violet-500 text-white py-3 rounded-lg hover:bg-Violet-600 transition-colors font-semibold"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

const NotificationPreferencesModal = ({ isOpen, onClose }) => {
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    marketingEmails: true,
  });

  const handleToggle = (name) => {
    setPreferences({
      ...preferences,
      [name]: !preferences[name],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save notification preferences logic would go here
    alert("Notification preferences updated!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-Neutral-100">
            Notification Preferences
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
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-Neutral-40">
              <span className="font-medium">Email Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={preferences.emailNotifications}
                  onChange={() => handleToggle("emailNotifications")}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-Violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-Violet-500"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-Neutral-40">
              <span className="font-medium">Push Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={preferences.pushNotifications}
                  onChange={() => handleToggle("pushNotifications")}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-Violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-Violet-500"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-Neutral-40">
              <span className="font-medium">SMS Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={preferences.smsNotifications}
                  onChange={() => handleToggle("smsNotifications")}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-Violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-Violet-500"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-Neutral-40">
              <span className="font-medium">Marketing Emails</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={preferences.marketingEmails}
                  onChange={() => handleToggle("marketingEmails")}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-Violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-Violet-500"></div>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-Violet-500 text-white py-3 rounded-lg hover:bg-Violet-600 transition-colors font-semibold"
          >
            Save Preferences
          </button>
        </form>
      </div>
    </div>
  );
};

const DeleteAccountModal = ({ isOpen, onClose }) => {
  const [confirmText, setConfirmText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (confirmText !== "DELETE") {
      setError("Please type DELETE to confirm");
      return;
    }

    // Account deletion logic would go here
    alert("Account deleted successfully");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-Neutral-100">
            Delete Account
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

        <div className="mb-6">
          <p className="text-Neutral-90 mb-4">
            This action cannot be undone. All your data will be permanently
            deleted.
          </p>
          <p className="text-Neutral-90 font-semibold">
            Please type DELETE to confirm:
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              className="w-full p-3 border border-Neutral-40 rounded-lg focus:outline-none focus:border-Violet-500"
              required
            />
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold"
          >
            Delete Account
          </button>
        </form>
      </div>
    </div>
  );
};
