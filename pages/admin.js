// pages/admin.js
import React from "react";

const mockData = {
  totalLearners: 1234,
  activeThisMonth: 876,
  reengagementsSent: 210,
  openSupportCases: 35,
  recentEngagements: [
    { id: 1, learner: "Jane Smith", action: "Email sent", date: "2025-07-12" },
    { id: 2, learner: "John Doe", action: "SMS reminder", date: "2025-07-11" },
    { id: 3, learner: "Alice Johnson", action: "Recommended course", date: "2025-07-10" },
  ],
};

export default function AdminDashboard() {
  const {
    totalLearners,
    activeThisMonth,
    reengagementsSent,
    openSupportCases,
    recentEngagements,
  } = mockData;

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8">Admin Dashboard</h1>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <p className="text-4xl font-extrabold text-indigo-600">{totalLearners}</p>
          <p className="mt-2 font-semibold text-gray-700">Total Learners</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <p className="text-4xl font-extrabold text-indigo-600">{activeThisMonth}</p>
          <p className="mt-2 font-semibold text-gray-700">Active This Month</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <p className="text-4xl font-extrabold text-indigo-600">{reengagementsSent}</p>
          <p className="mt-2 font-semibold text-gray-700">Re-engagements Sent</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <p className="text-4xl font-extrabold text-indigo-600">{openSupportCases}</p>
          <p className="mt-2 font-semibold text-gray-700">Open Support Cases</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Recent Engagements</h2>
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-indigo-100 text-indigo-800">
            <tr>
              <th className="text-left py-3 px-6">Learner</th>
              <th className="text-left py-3 px-6">Action</th>
              <th className="text-left py-3 px-6">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentEngagements.map(({ id, learner, action, date }) => (
              <tr key={id} className="border-b border-gray-200 hover:bg-indigo-50">
                <td className="py-3 px-6">{learner}</td>
                <td className="py-3 px-6">{action}</td>
                <td className="py-3 px-6">{new Date(date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
