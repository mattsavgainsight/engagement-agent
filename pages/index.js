import SidebarLayout from "../components/SidebarLayout";
import Image from "next/image";

export default function LearnerView() {
  return (
    <SidebarLayout>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-xl mb-4 text-gray-600">Home</h1>
        <div className="flex items-center gap-6 mb-8">
          <Image
            src="/images/jane.jpg"
            alt="Jane Smith"
            width={80}
            height={80}
            className="rounded-full border-2 border-skilljar-dark"
          />
          <div>
            <h1 className="text-3xl font-bold text-skilljar-dark">Jane Smith</h1>
            <p className="text-sm text-gray-600">Enterprise Customer – Learner Profile</p>
          </div>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="font-semibold text-skilljar-dark mb-2">Skilljar Activity</h2>
            <p className="text-sm">Courses Completed: <strong>12</strong></p>
            <p className="text-sm">Last Activity: July 10, 2025</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="font-semibold text-skilljar-dark mb-2">Salesforce</h2>
            <p className="text-sm">Status: Premium</p>
            <p className="text-sm">Open Cases: 2</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="font-semibold text-skilljar-dark mb-2">Instagram</h2>
            <Image
              src="/images/instagram-mock.jpg"
              alt="Instagram Post"
              width={300}
              height={180}
              className="rounded mb-2"
            />
            <p className="text-xs text-gray-500">Instagram</p>
            <p className="text-sm">Excited to begin my next chapter as Director of Sales Enablement!</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="font-semibold text-skilljar-dark mb-2">LinkedIn</h2>
            <p className="text-sm">Recent Job Change: June 15, 2025</p>
            <p className="text-sm">Global Sales Summit insights</p>
            <p className="text-sm">New partnership announcement</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="font-semibold text-skilljar-dark mb-2">Re-engagement Suggestions</h2>
            <ul className="text-sm list-disc list-inside">
              <li>Congratulatory email for job promotion</li>
              <li>Recommend advanced product training course</li>
              <li>Trigger Instagram remarketing campaign</li>
            </ul>
          </div>
        </section>
      </div>
    </SidebarLayout>
  );
}
