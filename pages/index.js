// pages/index.js
import React from "react";
import Link from "next/link";

const mockData = {
  learner: {
    name: "Jane Smith",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "jane.smith@example.com",
    title: "Sales Manager",
  },
  skilljar: {
    coursesCompleted: 12,
    lastActivity: "2025-07-10",
    currentCourses: [
      { id: 1, title: "Advanced Sales Techniques", progress: 75 },
      { id: 2, title: "Product Certification", progress: 30 },
    ],
  },
  salesforce: {
    customerStatus: "Premium",
    openCases: 2,
    lastCaseDate: "2025-07-05",
  },
  gainsight: {
    healthScore: 82,
    riskLevel: "Low",
    lastTouchpoint: "2025-07-08",
  },
  linkedin: {
    lastJobChange: "2025-06-15",
    recentPosts: [
      {
        id: 1,
        date: "2025-07-01",
        content: "Excited to announce a new partnership with XYZ Corp!",
      },
      {
        id: 2,
        date: "2025-06-20",
        content: "Attended the Global Sales Summit — learned a ton!",
      },
    ],
  },
  facebook: {
    recentPosts: [
      {
        id: 1,
        date: "2025-07-07",
        content: "Had a great weekend hiking with friends!",
      },
    ],
  },
  instagram: {
    recentPhotos: [
      {
        id: 1,
        date: "2025-07-06",
        imageUrl: "https://picsum.photos/id/1011/300/200",
        caption: "Sunset vibes 🌅",
      },
    ],
  },
  recommendations: [
    "Send a personalized congratulations email for recent job change.",
    "Recommend 'Customer Retention' course based on Salesforce data.",
    "Re-engage on Instagram with a story about product updates.",
  ],
};

const Navbar = () => (
  <nav className="bg-white shadow mb-6">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-700">Engagement Agent</h1>
      <div className="space-x-6">
        <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium">
          Learner View
        </Link>
        <Link href="/admin" className="text-gray-700 hover:text-indigo-600 font-medium">
          Admin Dashboard
        </Link>
        <Link href="/chat" className="text-gray-700 hover:text-indigo-600 font-medium">
          Chat Agent
        </Link>
      </div>
    </div>
  </nav>
);

export default function LearnerProfile() {
  const {
    learner,
    skilljar,
    salesforce,
    gainsight,
    linkedin,
    facebook,
    instagram,
    recommendations,
  } = mockData;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        <header className="flex items-center space-x-6 mb-8">
          <img
            src={learner.photo}
            alt={`${learner.name} photo`}
            className="w-20 h-20 rounded-full border-2 border-indigo-600"
          />
          <div>
            <h1 className="text-3xl font-bold">{learner.name}</h1>
            <p className="text-indigo-700 font-semibold">{learner.title}</p>
            <p className="text-gray-600">{learner.email}</p>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Skilljar */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Skilljar</h2>
            <p>
              <strong>Courses Completed:</strong> {skilljar.coursesCompleted}
            </p>
            <p>
              <strong>Last Activity:</strong>{" "}
              {new Date(skilljar.lastActivity).toLocaleDateString()}
            </p>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Current Courses</h3>
              <ul className="space-y-3">
                {skilljar.currentCourses.map((course) => (
                  <li key={course.id}>
                    <p>{course.title}</p>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-indigo-600 h-3 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600">{course.progress}% complete</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Salesforce */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Salesforce</h2>
            <p>
              <strong>Customer Status:</strong> {salesforce.customerStatus}
            </p>
            <p>
              <strong>Open Cases:</strong> {salesforce.openCases}
            </p>
            <p>
              <strong>Last Case Date:</strong>{" "}
              {new Date(salesforce.lastCaseDate).toLocaleDateString()}
            </p>
          </div>

          {/* Gainsight */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Gainsight</h2>
            <p>
              <strong>Health Score:</strong> {gainsight.healthScore}
            </p>
            <p>
              <strong>Risk Level:</strong> {gainsight.riskLevel}
            </p>
            <p>
              <strong>Last Touchpoint:</strong>{" "}
              {new Date(gainsight.lastTouchpoint).toLocaleDateString()}
            </p>
          </div>
        </section>

        {/* LinkedIn */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">LinkedIn Activity</h2>
          <p className="mb-3">
            <strong>Last Job Change:</strong>{" "}
            {new Date(linkedin.lastJobChange).toLocaleDateString()}
          </p>
          <ul className="space-y-4">
            {linkedin.recentPosts.map((post) => (
              <li key={post.id} className="bg-white p-4 rounded-lg shadow">
                <p>{post.content}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Facebook and Instagram */}
        <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Facebook Posts</h2>
            <ul className="space-y-4">
              {facebook.recentPosts.map((post) => (
                <li key={post.id} className="bg-white p-4 rounded-lg shadow">
                  <p>{post.content}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Instagram Photos</h2>
            <ul className="space-y-4">
              {instagram.recentPhotos.map((photo) => (
                <li key={photo.id} className="bg-white p-4 rounded-lg shadow">
                  <img
                    src={photo.imageUrl}
                    alt={photo.caption}
                    className="w-full rounded-md mb-2"
                  />
                  <p>{photo.caption}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(photo.date).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Recommendations */}
        <section className="bg-indigo-50 p-6 rounded-lg shadow max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            Personalized Engagement Recommendations
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            {recommendations.map((rec, i) => (
              <li key={i}>{rec}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
