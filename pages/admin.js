// pages/admin.js
import SidebarLayout from "../components/SidebarLayout";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Learners", value: 1234 },
    { label: "Active This Month", value: 876 },
    { label: "Re-engagements Sent", value: 210 },
    { label: "Open Support Cases", value: 35 },
  ];

  const recentEngagements = [
    { id: 1, learner: "Jane Smith", action: "Email Sent", date: "2025-07-12" },
    { id: 2, learner: "John Doe", action: "SMS Reminder", date: "2025-07-11" },
    { id: 3, learner: "Alice Johnson", action: "Course Recommendation", date: "2025-07-10" },
  ];

  return (
    <SidebarLayout>
      <h1 className="text-2xl font-bold text-skilljar-darkblue mb-6">Admin Dashboard</h1>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {stats.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl shadow p-6 text-center">
            <p className="text-3xl font-bold text-skilljar-darkblue">{s.value}</p>
            <p className="mt-2 text-sm text-gray-600">{s.label}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold text-skilljar-darkblue mb-4">Recent Engagements</h2>
        <div className="bg-white rounded-2xl shadow overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-skilljar-darkblue">
              <tr>
                <th className="text-left py-3 px-6">Learner</th>
                <th className="text-left py-3 px-6">Action</th>
                <th className="text-left py-3 px-6">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentEngagements.map((e) => (
                <tr key={e.id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-6">{e.learner}</td>
                  <td className="py-3 px-6">{e.action}</td>
                  <td className="py-3 px-6">{new Date(e.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <style jsx>{`
        :root {
          --skilljar-blue: #0052cc;
          --skilljar-darkblue: #003d99;
          --skilljar-lightblue: #e6f0ff;
        }
        .text-skilljar-darkblue {
          color: var(--skilljar-darkblue);
        }
        .bg-skilljar-lightblue {
          background-color: var(--skilljar-lightblue);
        }
      `}</style>
    </SidebarLayout>
  );
}
