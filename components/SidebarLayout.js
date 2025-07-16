export default function SidebarLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-skilljar-dark text-white p-4 space-y-4 text-sm">
        <div className="text-2xl font-bold mb-4">Skilljar</div>
        <nav className="space-y-2">
          <div>Home</div>
          <div>Course Management</div>
          <div>Live Training</div>
          <div>Theming</div>
          <div>Domains & Publishing</div>
          <div>Codes</div>
          <div>Announcements</div>
          <div>Order Report</div>
          <div>Analytics & Reports</div>
          <div>Students</div>
          <div>Groups</div>
          <div>Organization</div>
        </nav>
      </aside>
      <main className="flex-1 bg-skilljar-light p-10">{children}</main>
    </div>
  );
}
