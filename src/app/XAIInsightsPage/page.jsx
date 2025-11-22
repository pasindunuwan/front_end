"use client";
import { Info, Zap } from "lucide-react";

export default function XAIInsightsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <Info className="w-6 h-6 text-gray-600" />
          XAI Insights
        </h1>
        <p className="text-gray-600 mt-1">
          Explainable AI analysis (Demo Mode)
        </p>
      </div>

      {/* XAI Explanation Section */}
      <div className="bg-white p-6 rounded-xl shadow border border-gray-200 space-y-4">

        <div className="flex justify-between items-center">
          <p className="font-semibold text-gray-800 flex items-center gap-2">
            XAI Explanation
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md">
              LIME
            </span>
          </p>

          <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
            <Zap className="w-4 h-4" />
            Explain
          </button>
        </div>

        <p className="text-sm text-gray-700">
          Understand how the AI model made its prediction
        </p>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm text-gray-700">
          Analyzing: 
          <span className="italic text-gray-900">
            “Just finished my morning workout and feeling amazing! The sunrise was beautiful today. #fitness #motivation”
          </span>

          <div className="flex gap-4 items-center mt-3">
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md">
              positive
            </span>
            <span className="text-gray-700 text-sm">Confidence: 85.0%</span>
          </div>
        </div>
      </div>

      {/* Model Confidence */}
      <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
        <h2 className="font-semibold mb-4">Model Confidence</h2>

        <p className="text-gray-600 text-sm mb-2">Overall Confidence</p>

        {/* Progress Bar */}
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500"
            style={{ width: "85%" }}
          ></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 text-center mt-4">
          <div>
            <p className="text-green-600 text-2xl font-bold">85%</p>
            <p className="text-gray-500 text-sm">Confidence</p>
          </div>

          <div>
            <p className="text-blue-600 text-2xl font-bold">LIME</p>
            <p className="text-gray-500 text-sm">Method</p>
          </div>

          <div>
            <p className="text-purple-600 text-2xl font-bold">0</p>
            <p className="text-gray-500 text-sm">Features</p>
          </div>
        </div>
      </div>

      {/* Emotion Analysis */}
      <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
        <h2 className="font-semibold mb-3">Emotion Analysis</h2>

        <p className="text-gray-500 text-sm mb-4">Dominant Emotion</p>

        <div className="space-y-4">
          {[
            { label: "Joy", value: 78 },
            { label: "Surprise", value: 8 },
            { label: "Sadness", value: 5 },
            { label: "Anger", value: 4 },
            { label: "Fear", value: 3 },
          ].map((emotion, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm font-medium">
                <span>{emotion.label}</span>
                <span>{emotion.value}%</span>
              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full mt-1">
                <div
                  className="h-full bg-green-400 rounded-full"
                  style={{ width: `${emotion.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
