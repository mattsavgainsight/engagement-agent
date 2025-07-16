import SidebarLayout from "../components/SidebarLayout";

export default function LearnerView() {
  return (
    <SidebarLayout>
      <h1 className="text-3xl font-bold text-skilljar-dark mb-6">Learner Profile: Jane Smith</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="font-semibold text-skilljar-dark mb-2">Skilljar Activity</h2>
          <p>Courses Completed: 12</p>
          <p>Last Activity: July 10, 2025</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="font-semibold text-skilljar-dark mb-2">Salesforce</h2>
          <p>Status: Premium</p>
          <p>Open Cases: 2</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="font-semibold text-skilljar-dark mb-2">Gainsight</h2>
          <p>Health Score: 82</p>
          <p>Risk Level: Low</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 col-span-2">
          <h2 className="font-semibold text-skilljar-dark mb-2">LinkedIn</h2>
          <p>Recent Job Change: June 15, 2025</p>
          <ul className="list-disc list-inside mt-2">
            <li>Global Sales Summit insights</li>
            <li>New partnership announcement</li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-lg p-6 col-span-2">
          <h2 className="font-semibold text-skilljar-dark mb-2">Recommendations</h2>
          <ul className="list-disc list-inside">
            <li>Email for job promotion</li>
            <li>Suggest retention course</li>
            <li>Instagram story re-engagement</li>
          </ul>
        </div>
      </section>
    </SidebarLayout>
  );
}
