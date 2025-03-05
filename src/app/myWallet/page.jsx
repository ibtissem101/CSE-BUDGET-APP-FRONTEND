const WalletPage = () => {
  return (
    <div className="md:ml-[300px] md:mr-12 md:mt-12 p-4 max-w-7xl mx-auto  md:bg-white bg-gradient-to-b ">
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
                  <img
                    src="myWallet/dots-vertical.png"
                    className="h-[18px] w-[18px] md:h-8 md:w-8"
                    alt=""
                  />
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
        {/* Emergency Fund */}
        <div className="p-4 bg-white rounded-md border border-Neutral-40 md:h-[162px]">
          <div className="flex flex-col justify-between mb-2">
            <div className="flex items-center gap-2">
              <span>🏦</span>
              <span className="font-medium md:text-lg text-Neutral-90">
                Emergency fund
              </span>
            </div>
            <span className="text-sm text-Neutral-70">
              Last Plan on August 26, 2022
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex gap-1 items-baseline">
              <span className="md:text-lg text-Violet-500">
                ${(300).toLocaleString()}
              </span>
              <span className="text-Violet-300 text-xs">/ $1000</span>
            </div>
            <span className="text-sm text-gray-500">30%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-Violet-500 h-2 rounded-full"
              style={{ width: "30%" }}
            ></div>
          </div>
        </div>

        {/* Travel Plan */}
        <div className="p-4 bg-white rounded-md border border-Neutral-40 md:h-[162px]">
          <div className="flex flex-col justify-between  mb-2">
            <div className="flex items-center gap-2">
              <span>✈️</span>
              <span className="font-medium">Travel Plan</span>
            </div>
            <span className="text-sm text-gray-500">
              Last Plan on August 26, 2022
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex gap-2 items-baseline">
              <span className="md:text-lg text-Violet-500">
                ${(10000).toLocaleString()}
              </span>
              <span className="text-Violet-300 text-xs">/ $20000</span>
            </div>
            <span className="text-sm text-gray-500">50%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-Violet-500 h-2 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>

        {/* Education */}
        <div className="p-4 bg-white rounded-md border border-Neutral-40 md:h-[162px]">
          <div className="flex flex-col justify-between mb-2">
            <div className="flex items-center gap-2">
              <span>📚</span>
              <span className="font-medium">Education</span>
            </div>
            <span className="text-sm text-gray-500">
              Last Plan on August 26, 2022
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex gap-2 items-baseline">
              <span className="md:text-lg text-Violet-500">
                ${(7000).toLocaleString()}
              </span>
              <span className="text-Violet-300 text-xs">/ $10000</span>
            </div>
            <span className="text-sm text-gray-500">70%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-Violet-500 h-2 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>

        {/* Foods and Groceries */}
        <div className="p-4 bg-white rounded-md border border-Neutral-40 md:h-[162px]">
          <div className="flex flex-col justify-between mb-2">
            <div className="flex items-center gap-2">
              <span>🛒</span>
              <span className="font-medium">Foods and Groceries</span>
            </div>
            <span className="text-sm text-gray-500">
              Last Plan on August 26, 2022
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex gap-2 items-baseline">
              <span className="md:text-lg text-Violet-500">
                ${(300).toLocaleString()}
              </span>
              <span className="text-Violet-300 text-xs">/ $1000</span>
            </div>
            <span className="text-sm text-gray-500">30%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-Violet-500 h-2 rounded-full"
              style={{ width: "30%" }}
            ></div>
          </div>
        </div>

        {/* Repair Vehicle */}
        <div className="p-4 bg-white rounded-md border border-Neutral-40 md:h-[162px]">
          <div className="flex flex-col justify-between mb-2">
            <div className="flex items-center gap-2">
              <span>🔧</span>
              <span className="font-medium">Repair Vehicle</span>
            </div>
            <span className="text-sm text-gray-500">
              Last Plan on August 26, 2022
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex gap-2 items-baseline">
              <span className="md:text-lg text-Violet-500">
                ${(900).toLocaleString()}
              </span>
              <span className="text-Violet-300 text-xs">/ $1125</span>
            </div>
            <span className="text-sm text-gray-500">80%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-Violet-500 h-2 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>

        {/* Donation */}
        <div className="p-4 bg-white rounded-md border border-Neutral-40 md:h-[162px]">
          <div className="flex flex-col justify-between mb-2">
            <div className="flex items-center gap-2">
              <span>🎁</span>
              <span className="font-medium">Donation</span>
            </div>
            <span className="text-sm text-gray-500">
              Last Plan on August 26, 2022
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex gap-2 items-baseline">
              <span className="md:text-lg text-Violet-500">
                ${(200).toLocaleString()}
              </span>
              <span className="text-Violet-300 text-xs">/ $1000</span>
            </div>
            <span className="text-sm text-gray-500">20%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-Violet-500 h-2 rounded-full"
              style={{ width: "20%" }}
            ></div>
          </div>
        </div>
      </div>

      <button className="w-full md:flex-col md:mt-12 md:border-Neutral-40 border-Violet-500 bg-Violet-200  mt-6 p-4 gap-3 text-xs font-semibold text-Violet-500 rounded-lg  border-[1px] hover:bg-Violet-200 flex items-center justify-center">
        <img src="myWallet/plus.png" className="h-10 w-10 " alt="" />
        <div className="md:text-lg">Create New Wallet</div>
      </button>
    </div>
  );
};

export default WalletPage;
