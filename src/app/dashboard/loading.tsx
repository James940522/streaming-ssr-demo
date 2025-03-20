import { UserProfileSkeleton } from './components/UserProfile';
import { DashboardStatsSkeleton } from './components/DashboardStats';
import { RecentActivitiesSkeleton } from './components/RecentActivities';
import { NotificationsSkeleton } from './components/Notifications';

export default function DashboardLoading() {
  return (
    <main>
      <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4 animate-pulse"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 사용자 프로필 및 알림 컬럼 */}
        <div className="md:col-span-1 space-y-6">
          <UserProfileSkeleton />
          <NotificationsSkeleton />
        </div>

        {/* 통계 및 최근 활동 컬럼 */}
        <div className="md:col-span-2 space-y-6">
          <DashboardStatsSkeleton />
          <RecentActivitiesSkeleton />
        </div>
      </div>

      <div className="mt-8 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 animate-pulse">
        <div className="h-5 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
        <div className="space-y-2">
          <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-3 w-2/3 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    </main>
  );
}
