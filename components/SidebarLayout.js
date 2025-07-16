export default function SidebarLayout({ children }) {
  return (
    <div className="flex min-h-screen font-sans">
      <aside className="w-64 bg-skilljar-darkblue text-white p-6 space-y-8">
        <div className="text-2xl font-bold tracking-tight">Skilljar</div>
        <nav className="space-y-4">
          <a href="/" className="block hover:text-skilljar-lightblue">Learner View</a>
          <a href="/admin" className="block hover:text-skilljar-lightblue">Admin Dashboard</a>
        </nav>
      </aside>
      <main className="flex-1 bg-skilljar-lightblue p-10">
        {children}
      </main>
      <style jsx global>{`
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
        .border-skilljar-darkblue {
          border-color: var(--skilljar-darkblue);
        }
      `}</style>
    </div>
  );
}
