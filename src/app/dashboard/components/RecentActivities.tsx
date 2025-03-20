import { fetchRecentActivities } from '../../lib/data';

export default async function RecentActivities() {
  const activities = await fetchRecentActivities();

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">최근 활동</h2>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {activities.map(activity => (
          <li key={activity.id} className="py-3 flex items-start">
            <div className="w-2 h-2 mt-2 rounded-full bg-indigo-500 mr-3"></div>
            <div>
              <p className="font-medium">
                <span className="text-indigo-600 dark:text-indigo-400">
                  {activity.user}
                </span>
                님이 <span className="font-semibold">{activity.action}</span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {activity.time}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 로딩 상태 UI
export function RecentActivitiesSkeleton() {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow mb-6 animate-pulse">
      <div className="h-7 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {[1, 2, 3, 4, 5].map(i => (
          <li key={i} className="py-3 flex">
            <div className="w-2 h-2 mt-2 rounded-full bg-gray-300 dark:bg-gray-600 mr-3"></div>
            <div className="w-full">
              <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-4/5 mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
