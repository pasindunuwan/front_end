"use client";

import { BarChart3, MessageSquare } from "lucide-react";

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">

      {/* Top Navigation Tabs */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2">
        {[
          { name: "Overview", active: true, count: 1247 },
          { name: "Alert System" },
          { name: "Reflections" },
          { name: "Clinical Metrics" },
          { name: "Tweet Analysis", count: 5 },
          { name: "XAI Insights" },
        ].map((tab, index) => (
          <div
            key={index}
            className={`px-4 py-2 rounded-full border flex items-center gap-2 cursor-pointer whitespace-nowrap
              ${
                tab.active
                  ? "bg-green-100 border-green-500 text-green-700"
                  : "bg-white border-gray-300 text-gray-600 hover:bg-gray-50"
              }`}
          >
            {tab.name}
            {tab.count && (
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-200">
                {tab.count}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Stat Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Total Tweets */}
        <div className="bg-white p-5 rounded-xl shadow border border-gray-200">
          <div className="flex justify-between">
            <p className="font-semibold">Total Tweets</p>
            <MessageSquare className="text-gray-500 w-5 h-5" />
          </div>

          <p className="text-3xl font-bold mt-3">1,247</p>
          <p className="text-green-600 font-semibold mt-2">↑ 12.5%</p>
          <p className="text-sm text-gray-500 mt-1">Last 24 hours</p>
        </div>

        {/* Positive Sentiment */}
        <div className="bg-green-50 p-5 rounded-xl shadow border border-green-200">
          <p className="font-semibold text-green-700">Positive Sentiment</p>

          <p className="text-3xl font-bold mt-3 text-green-700">523</p>
          <p className="text-green-600 font-semibold mt-2">↑ 8.3%</p>
          <p className="text-sm text-gray-600 mt-1">41.9% of total</p>
        </div>

        {/* Negative Sentiment */}
        <div className="bg-red-50 p-5 rounded-xl shadow border border-red-200">
          <p className="font-semibold text-red-700">Negative Sentiment</p>

          <p className="text-3xl font-bold mt-3 text-red-700">312</p>
          <p className="text-red-500 font-semibold mt-2">↓ 5.2%</p>
          <p className="text-sm text-gray-600 mt-1">25.0% of total</p>
        </div>

        {/* Neutral Sentiment */}
        <div className="bg-gray-50 p-5 rounded-xl shadow border border-gray-200">
          <p className="font-semibold text-gray-700">Neutral Sentiment</p>

          <p className="text-3xl font-bold mt-3 text-gray-700">412</p>
          <p className="text-red-500 font-semibold mt-2">↓ 2.1%</p>
          <p className="text-sm text-gray-600 mt-1">33.0% of total</p>
        </div>
      </div>

      {/* Sentiment Chart + Emotion Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Sentiment Trends */}
        <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
          <p className="font-semibold mb-3">📉 Sentiment Trends</p>
          <p className="text-sm text-gray-500">Sentiment analysis over time</p>

          <div className="h-48 flex items-center justify-center text-gray-400">
            <p>No sentiment data available</p>
          </div>
        </div>

        {/* Emotion Distribution */}
        <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
          <p className="font-semibold mb-3">💗 Emotion Distribution</p>
          <p className="text-sm text-gray-500 mb-4">
            Dominant emotions in analyzed tweets
          </p>

          {[
            { emotion: "Joy", count: 387 },
            { emotion: "Neutral", count: 298 },
            { emotion: "Sadness", count: 234 },
            { emotion: "Anger", count: 156 },
            { emotion: "Fear", count: 112 },
          ].map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between text-sm font-medium">
                <span>{item.emotion}</span>
                <span>{item.count}</span>
              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full mt-1">
                <div
                  className="h-full bg-green-400 rounded-full"
                  style={{
                    width: `${(item.count / 387) * 100}%`,
                    opacity: 0.8,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
