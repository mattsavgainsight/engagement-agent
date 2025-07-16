// pages/index.js
import React from 'react';

const janePhotoUrl = '/images/jane-profile.jpg'; // Make sure Jane's photo is here

export default function LearnerProfile() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center space-x-4">
          <img src={janePhotoUrl} alt="Jane Doe" className="w-14 h-14 rounded-full object-cover" />
          <h1 className="text-2xl font-semibold text-skilljar-blue">Jane Doe's Profile</h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-8">
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-skilljar-blue">Learning Summary</h2>
          <p>Welcome back, Jane! Here's your recent activity and progress in your courses.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-skilljar-lightblue rounded p-4 text-center">
              <h3 className="text-lg font-semibold text-skilljar-darkblue">Courses Completed</h3>
              <p className="text-3xl font-bold mt-2">7</p>
            </div>
            <div className="bg-skilljar-lightblue rounded p-4 text-center">
              <h3 className="text-lg font-semibold text-skilljar-darkblue">Hours Spent</h3>
              <p className="text-3xl font-bold mt-2">24</p>
            </div>
            <div className="bg-skilljar-lightblue rounded p-4 text-center">
              <h3 className="text-lg font-semibold text-skilljar-darkblue">Active Cohorts</h3>
              <p className="text-3xl font-bold mt-2">3</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-skilljar-blue">Recommended Courses</h2>
          <ul className="space-y-3">
            <li className="p-4 border border-gray-200 rounded hover:shadow-md cursor-pointer transition">
              <strong className="text-skilljar-darkblue">Advanced Product Training</strong>
              <p className="text-gray-600 text-sm">Boost your skills with advanced techniques.</p>
            </li>
            <li className="p-4 border border-gray-200 rounded hover:shadow-md cursor-pointer transition">
              <strong className="text-skilljar-darkblue">Customer Success Strategies</strong>
              <p className="text-gray-600 text-sm">Learn how to maximize customer engagement.</p>
            </li>
          </ul>
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
        .text-skilljar-darkblue {
          color: var(--skilljar-darkblue);
        }
        .bg-skilljar-lightblue {
          background-color: var(--skilljar-lightblue);
        }
      `}</style>
    </div>
  );
}
