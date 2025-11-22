"use client";
import { CheckCircle, AlertCircle, Circle } from "lucide-react";

export default function AlertDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-5xl space-y-6">

        {/* Header */}
        <h1 className="text-2xl font-semibold">Multi-Level Alert System</h1>
        <p className="text-gray-600">
          Automated monitoring of emotional well-being with tiered interventions
        </p>

        {/* Progress Bar */}
        <div className="bg-white rounded-xl p-6 shadow">
          <p className="font-medium mb-3">Current Negative Sentiment</p>

          <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute h-full bg-blue-500"
              style={{ width: "42.5%" }}
            ></div>
          </div>

          <p className="text-right mt-2 font-semibold text-blue-600">42.5%</p>

          <div className="flex justify-between text-gray-600 text-sm mt-2">
            <span>0%</span>
            <span>40% Mild</span>
            <span>60% Moderate</span>
            <span>80% High</span>
            <span>100%</span>
          </div>
        </div>

        {/* LEVEL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Mild */}
          <div className="p-5 bg-green-50 border border-green-300 rounded-xl">
            <h2 className="font-semibold flex items-center text-green-700 gap-2">
              <Circle className="w-4 h-4" /> Mild Concern
            </h2>
            <p className="text-sm mt-2 text-gray-700">
              Your recent posts show some challenging emotions. This is normal,
              but let's explore what might help.
            </p>
            <p className="text-gray-500 mt-3 text-sm">Threshold: 40%+</p>
          </div>

          {/* Moderate */}
          <div className="p-5 bg-orange-50 border border-orange-300 rounded-xl">
            <h2 className="font-semibold flex items-center text-orange-700 gap-2">
              <AlertCircle className="w-4 h-4" /> Moderate Concern
            </h2>
            <p className="text-sm mt-2 text-gray-700">
              We've noticed a pattern of difficult emotions in your posts.
              Consider reaching out to someone you trust.
            </p>
            <p className="text-gray-500 mt-3 text-sm">Threshold: 60%+</p>
          </div>

          {/* High */}
          <div className="p-5 bg-red-50 border border-red-300 rounded-xl">
            <h2 className="font-semibold flex items-center text-red-700 gap-2">
              <AlertCircle className="w-4 h-4" /> High Concern
            </h2>
            <p className="text-sm mt-2 text-gray-700">
              We're concerned about your recent posts. Please consider seeking
              immediate support.
            </p>
            <p className="text-gray-500 mt-3 text-sm">Threshold: 80%+</p>
          </div>
        </div>

        {/* Trigger Analysis */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Recent Trigger Analysis</h2>

          <div className="space-y-2 text-sm text-gray-700">
            <p className="flex justify-between">
              <span>"Exhausted" mentions</span>
              <span className="font-semibold text-red-500">3</span>
            </p>

            <p className="flex justify-between">
              <span>"Alone/Isolated" mentions</span>
              <span className="font-semibold text-red-500">8</span>
            </p>

            <p className="flex justify-between">
              <span>Hopelessness indicators</span>
              <span className="font-semibold text-purple-600">15</span>
            </p>

            <p className="flex justify-between">
              <span>Anhedonia indicators</span>
              <span className="font-semibold text-purple-600">12</span>
            </p>
          </div>
        </div>

        {/* Recommended Actions */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Recommended Actions</h2>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Connect with a friend or family member
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Engage in a favorite hobby or activity
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Consider journaling your thoughts
            </li>
          </ul>
        </div>

        {/* Crisis Resources */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">Crisis Resources</h2>
          <p className="text-gray-600 mt-1 text-sm">
            If you're struggling, support is available.
          </p>
        </div>
      </div>
    </div>
  );
}
