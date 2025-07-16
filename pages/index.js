// pages/index.js
import SidebarLayout from "../components/SidebarLayout";
import Image from "next/image";

export default function LearnerView() {
  return (
    <SidebarLayout>
      <div className="flex items-center gap-6 mb-8">
        <Image
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Jane Smith"
          width={80}
          height={80}
          className="rounded-full border-2 border-skilljar-darkblue"
        />
        <div>
          <h1 className="text-2xl font-bold text-skilljar-darkblue">Jane Smith</h1>
          <p className="text-sm text-gray-600">Enterprise Customer • Learner Profile</p>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-semibold text-skilljar-darkblue mb-2">Skilljar Activity</h2>
          <p className="text-sm">
            Courses Completed: <strong>12</strong>
          </p>
          <p className="text-sm">Last Activity: July 10, 2025</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-semibold text-skilljar-darkblue mb-2">Salesforce</h2>
          <p className="text-sm">
            Status: <strong>Premium</strong>
          </p>
          <p className="text-sm">Open Cases: 2</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-semibold text-skilljar-darkblue mb-2">Gainsight</h2>
          <p className="text-sm">Health Score: 82</p>
          <p className="text-sm">Risk Level: Low</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 xl:col-span-2">
          <h2 className="font-semibold text-skilljar-darkblue mb-2">LinkedIn</h2>
          <ul className="text-sm list-disc list-inside">
            <li>Recent Job Change: June 15, 2025</li>
            <li>Global Sales Summit insights</li>
            <li>New partnership announcement</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 xl:col-span-2">
          <h2 className="font-semibold text-skilljar-darkblue mb-2">Re-engagement Suggestions</h2>
          <ul className="text-sm list-disc list-inside">
            <li>Congratulatory email for job promotion</li>
            <li>Recommend advanced product training course</li>
            <li>Trigger Instagram remarketing campaign</li>
          </ul>
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
        .border-skilljar-darkblue {
          border-color: var(--skilljar-darkblue);
        }
        .bg-skilljar-lightblue {
          background-color: var(--skilljar-lightblue);
        }
      `}</style>
    </SidebarLayout>
  );
}
