"use client";
import {
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
} from "recharts";
import React, { useState, useEffect } from "react";
import Bonus from "./bonus.svg";
import Outcome from "./outcome.svg";
import Income from "./income.svg";

const Bonusicon = () => (
  <img src={Bonus.src} alt="Bonus" className="w-[48px] h-[48px]" />
);
const Outcomeicon = () => (
  <img src={Outcome.src} alt="Outcome" className="w-[48px] h-[48px]" />
);
const Incomeicon = () => (
  <img src={Income.src} alt="Income" className="w-[48px] h-[48px]" />
);

const data = [
  { amount: 1000, month: "Jan" },
  { amount: 1600, month: "Feb" },
  { amount: 600, month: "Mar" },
  { amount: 2400, month: "Apr" },
  { amount: 1400, month: "May" },
  { amount: 2400, month: "Jun" },
  { amount: 900, month: "Jul" },
  { amount: 2900, month: "Aug" },
  { amount: 1100, month: "Sep" },
  { amount: 2000, month: "Oct" },
  { amount: 1600, month: "Nov" },
  { amount: 2800, month: "Dec" },
];

// Helper function
const formatCurrency = (value) => {
  return `$${value.toLocaleString()}`;
};

// LineChart Component
const MyLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid
          strokeDasharray="10000"
          vertical={false}
          strokeWidth={0.4}
        />
        <XAxis dataKey="month" strokeWidth={0} />
        <YAxis
          tickFormatter={formatCurrency}
          strokeWidth={0}
          domain={[500, "auto"]}
          ticks={[500, 1000, 1500, 2000, 2500, 3000]}
        />
        <Tooltip formatter={(value) => formatCurrency(value)} />
        <Line
          dataKey="amount"
          stroke="#4F46E5"
          name="Lifetime Income"
          dot={false}
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

// ChartControls Component
const ChartControls = ({
  selectedChart,
  selectedYear,
  handleChartChange,
  handleYearChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-8 px-4 md:px-0 md:mr-16">
      <div className="font-bold text-lg md:text-2xl mb-4 md:mb-0">
        Stastic
      </div>
      <div className="flex md:flex-row gap-4 md:w-auto text-sm font-normal">
        <div className="w-full md:w-auto">
          <select
            id="chart-type"
            value={selectedChart}
            onChange={handleChartChange}
            className="mt-1 block w-full p-2 border border-Neutral-40 bg-Base-White rounded-md shadow-sm"
          >
            <option value="income">Income Chart</option>
            <option value="outcome">Outcome Chart</option>
            <option value="bonus">Bonus Chart</option>
          </select>
        </div>
        <div className="w-full md:w-auto">
          <select
            id="year"
            value={selectedYear}
            onChange={handleYearChange}
            className="mt-1 block w-full p-2 border border-Neutral-40 bg-Base-White rounded-md shadow-sm"
          >
            <option value="this-year">This Year</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>
    </div>
  );
};

// Header Component
const Header = () => {
  return (
    <div className="px-4 md:px-0">
      <div className="text-2xl md:text-3xl font-bold mb-2">
        Finance Chart
      </div>
      <div className="text-gray-600 mb-4 md:text-base">
        Keep track your financial plan
      </div>
    </div>
  );
};

// StatsCards Component
const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-0">
      <div className="h-[5rem] w-full border-solid border rounded-md border-Neutral-40 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center h-full px-4 bg-Base/White">
          <Incomeicon />
          <div className="ml-4">
            <div className="font-normal text-sm text-Neutral-70 font-Inter">
              Lifetime Income
            </div>
            <div className="font-semibold text-lg text-Neutral-90 font-Inter">
              $40,728
            </div>
          </div>
        </div>
      </div>
      <div className="h-[5rem] w-full border-solid border rounded-md border-Neutral-40 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center h-full px-4 bg-Base/White">
          <Outcomeicon />
          <div className="ml-4">
            <div className="font-normal text-sm text-Neutral-70 font-Inter">
              Lifetime Outcome
            </div>
            <div className="font-semibold text-lg text-Neutral-90 font-Inter">
              $30,239
            </div>
          </div>
        </div>
      </div>
      <div className="h-[5rem] w-full border-solid border rounded-md border-Neutral-40 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center h-full px-4 bg-Base/White">
          <Bonusicon />
          <div className="ml-4">
            <div className="font-normal text-sm text-Neutral-70 font-Inter">
              Bonus Income
            </div>
            <div className="font-semibold text-lg text-Neutral-90 font-Inter">
              $2,490
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main ChartPage Component
const ChartPage = () => {
  const [selectedChart, setSelectedChart] = useState("income");
  const [selectedYear, setSelectedYear] = useState("this-year");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChartChange = (event) => {
    setSelectedChart(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="md:ml-[300px] md:mr-12 mt-[60px] md:mt-12 p-4 max-w-7xl mx-auto md:bg-white bg-gradient-to-b">
      <div className="w-full max-w-6xl mx-auto">
        <Header />

        <div className="mt-8 mb-8">
          <ChartControls
            selectedChart={selectedChart}
            selectedYear={selectedYear}
            handleChartChange={handleChartChange}
            handleYearChange={handleYearChange}
          />
          {(!isMobile || !isMobileMenuOpen) && <MyLineChart />}
        </div>
        <StatsCards />
      </div>
    </div>
  );
};

export default ChartPage;
