export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">스트리밍 SSR 데모 대시보드</h1>
      {children}
    </div>
  );
}
