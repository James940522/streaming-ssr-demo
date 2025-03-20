import { Suspense } from 'react';
import UserProfile, { UserProfileSkeleton } from './components/UserProfile';
import DashboardStats, {
  DashboardStatsSkeleton,
} from './components/DashboardStats';
import RecentActivities, {
  RecentActivitiesSkeleton,
} from './components/RecentActivities';
import Notifications, {
  NotificationsSkeleton,
} from './components/Notifications';

export default function Dashboard() {
  return (
    <main>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        이 페이지는 Next.js의 스트리밍 SSR 기능을 보여주기 위한 데모입니다. 각
        섹션은 다른 로딩 시간을 가지며, 준비가 되는 대로 순차적으로
        스트리밍됩니다.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 사용자 프로필 및 알림 컬럼 */}
        <div className="md:col-span-1 space-y-6">
          <Suspense fallback={<UserProfileSkeleton />}>
            <UserProfile />
          </Suspense>

          <Suspense fallback={<NotificationsSkeleton />}>
            <Notifications />
          </Suspense>
        </div>

        {/* 통계 및 최근 활동 컬럼 */}
        <div className="md:col-span-2 space-y-6">
          <Suspense fallback={<DashboardStatsSkeleton />}>
            <DashboardStats />
          </Suspense>

          <Suspense fallback={<RecentActivitiesSkeleton />}>
            <RecentActivities />
          </Suspense>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">
          스트리밍 SSR 데모 설명
        </h3>
        <p className="text-sm text-blue-700 dark:text-blue-400">
          각 섹션은 서로 다른 지연 시간(1초 ~ 6초)으로 데이터를 가져오도록
          설정되어 있습니다. Next.js의 Suspense를 이용하여 각 컴포넌트는
          독립적으로 로딩되며, 데이터가 준비되는 즉시 화면에 표시됩니다. 이는
          전체 페이지의 로딩 시간을 최소화하고 사용자 경험을 향상시키는
          방법입니다.
        </p>
      </div>
    </main>
  );
}
