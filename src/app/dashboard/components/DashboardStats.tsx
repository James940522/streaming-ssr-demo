import { fetchDashboardStats } from '../../lib/data';

export default async function DashboardStats() {
  const stats = await fetchDashboardStats();

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">대시보드 통계</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
          <p className="text-blue-600 dark:text-blue-300 text-sm font-medium">
            총 사용자
          </p>
          <p className="text-2xl font-bold">
            {stats.totalUsers.toLocaleString()}
          </p>
          <p className="text-blue-500 dark:text-blue-400 text-sm">
            활성 {stats.activeUsers.toLocaleString()}
          </p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
          <p className="text-green-600 dark:text-green-300 text-sm font-medium">
            총 프로젝트
          </p>
          <p className="text-2xl font-bold">
            {stats.totalProjects.toLocaleString()}
          </p>
          <p className="text-green-500 dark:text-green-400 text-sm">
            완료 {stats.completedProjects.toLocaleString()}
          </p>
        </div>
        <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg">
          <p className="text-amber-600 dark:text-amber-300 text-sm font-medium">
            대기 중인 작업
          </p>
          <p className="text-2xl font-bold">
            {stats.pendingTasks.toLocaleString()}
          </p>
          <p className="text-amber-500 dark:text-amber-400 text-sm">
            처리 필요
          </p>
        </div>
      </div>
    </div>
  );
}

// 로딩 상태 UI
export function DashboardStatsSkeleton() {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow mb-6 animate-pulse">
      <div className="h-7 w-40 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-gray-100 dark:bg-gray-750 p-4 rounded-lg">
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
            <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
