import SidebarLayout from "../components/SidebarLayout";
import Image from "next/image";

export default function LearnerView() {
  return (
    <SidebarLayout>
      <div className="flex items-center gap-6 mb-8">
        <Image
          src="/images/jane.jpg"
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
          <p className="text-sm">Courses Completed: <strong>12</strong></p>
          <p className="text-sm">Last Activity: July 10, 2025</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-semibold text-skilljar-darkblue mb-2">Salesforce</h2>
          <p className="text-sm">Status: <strong>Premium</strong></p>
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
          <h2 className="font-semibold text-skilljar-darkblue mb-2">Instagram Activity</h2>
          <Image
            src="/images/instagram-mock.jpg"
            alt="Instagram post"
            width={300}
            height={200}
            className="rounded mb-2"
          />
          <p className="text-sm italic">"Excited to lead training at the Global Sales Summit!"</p>
        </div>
      </section>
    </SidebarLayout>
  );
};
