const SettingsPage = () => {
  return (
    <div className="md:ml-[328px] md:mr-12 mt-[60px] md:mt-12 p-4 max-w-7xl mx-auto md:bg-white bg-gradient-to-b">
      <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
      <div className="mb-3 md:text-base md:mb-8">
        Customize your app preferences
      </div>

      <div className="space-y-6">
        {/* Account Settings Section */}
        <div className="bg-Neutral-20 border border-Neutral-40 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-Neutral-40">
              <span className="text-Neutral-90">Language</span>
              <select className="border-0 bg-transparent text-Neutral-90 focus:ring-0">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-Neutral-40">
              <span className="text-Neutral-90">Time Zone</span>
              <select className="border-0 bg-transparent text-Neutral-90 focus:ring-0">
                <option>UTC-08:00</option>
                <option>UTC-05:00</option>
                <option>UTC+00:00</option>
              </select>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-Neutral-40">
              <span className="text-Neutral-90">Currency</span>
              <select className="border-0 bg-transparent text-Neutral-90 focus:ring-0">
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>DZD (DA)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="bg-Neutral-20 border border-Neutral-40 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">
            Notification Preferences
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-Neutral-40">
              <div>
                <p className="text-Neutral-90">Push Notifications</p>
                <p className="text-sm text-Neutral-70">
                  Get notified about important updates
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-11 h-6 bg-Neutral-40 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-Violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-Violet-500"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-Neutral-40">
              <div>
                <p className="text-Neutral-90">Email Notifications</p>
                <p className="text-sm text-Neutral-70">
                  Receive email updates about your account
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-11 h-6 bg-Neutral-40 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-Violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-Violet-500"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="bg-Neutral-20 border border-Neutral-40 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Privacy & Security</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-Neutral-40">
              <div>
                <p className="text-Neutral-90">Two-Factor Authentication</p>
                <p className="text-sm text-Neutral-70">
                  Add an extra layer of security
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-Neutral-40 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-Violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-Violet-500"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-Neutral-40">
              <div>
                <p className="text-Neutral-90">Activity Log</p>
                <p className="text-sm text-Neutral-70">
                  Track your account activity
                </p>
              </div>
              <button className="text-Violet-500 hover:text-Violet-600">
                View Log
              </button>
            </div>
          </div>
        </div>

        {/* Data Management */}
        <div className="bg-Neutral-20 border border-Neutral-40 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Data Management</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-Neutral-40">
              <div>
                <p className="text-Neutral-90">Export Data</p>
                <p className="text-sm text-Neutral-70">
                  Download your account data
                </p>
              </div>
              <button className="px-4 py-2 text-sm text-Violet-500 border border-Violet-500 rounded-lg hover:bg-Violet-50">
                Export
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-Neutral-40">
              <div>
                <p className="text-red-500">Delete Account</p>
                <p className="text-sm text-Neutral-70">
                  Permanently delete your account
                </p>
              </div>
              <button className="px-4 py-2 text-sm text-red-500 border border-red-500 rounded-lg hover:bg-red-50">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
