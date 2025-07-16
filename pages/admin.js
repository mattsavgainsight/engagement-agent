// pages/admin.js
import React from 'react';

const janePhotoUrl = '/images/jane-profile.jpg'; // Same photo used for admin if needed

const mockEngagements = [
  {
    id: 1,
    learner: 'Jane Doe',
    course: 'Advanced Product Training',
    lastActive: '2025-07-15',
    status: 'At Risk',
  },
  {
    id: 2,
    learner: 'John Smith',
    course: 'Customer Success Strategies',
    lastActive: '2025-07-14',
    status: 'Active',
  },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center space-x-4">
          <img src={janePhotoUrl} alt="Admin" className="w-14 h-14 rounded-full object-cover" />
          <h1 className="text-2xl font-semibold text-skilljar-blue">Admin Engagement Dashboard</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-6 text-skilljar-blue">Learner Engagement Status</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-2 px-4">Learner</th>
                <th className="py-2 px-4">Course</th>
                <th className="py-2 px-4">Last Active</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockEngagements.map(({ id, learner, course, lastActive, status }) => (
                <tr
                  key={id}
                  className={`border-b border-gray-200 ${
                    status === 'At Risk' ? 'bg-red-50' : 'bg-white'
                  }`}
                >
                  <td className="py-3 px-4 font-medium">{learner}</td>
                  <td className="py-3 px-4">{course}</td>
                  <td className="py-3 px-4">{lastActive}</td>
                  <td
                    className={`py-3 px-4 font-semibold ${
                      status === 'At Risk' ? 'text-red-600' : 'text-green-600'
                    }`}
                  >
                    {status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mt-10 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-skilljar-blue">Actions</h2>
          <p>Select a learner to send personalized outreach or track progress.</p>
          {/* Placeholder for action buttons or forms */}
        </section>
      </main>

      <style jsx>{`
        :root {
          --skilljar-blue: #0052CC;
          --skilljar-darkblue: #003D99;
          --skilljar-lightblue: #E6F0FF;
        }
        .text-skilljar-blue {
          color: var(--skilljar-blue);
        }
      `}</style>
    </div>
  );
}
