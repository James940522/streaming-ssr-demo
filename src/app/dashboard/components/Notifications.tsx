import { fetchNotifications } from '../../lib/data';

export default async function Notifications() {
  const notifications = await fetchNotifications();

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">알림</h2>
      <div className="space-y-3">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className="bg-gray-50 dark:bg-slate-700 p-3 rounded-md border-l-4 border-indigo-500"
          >
            <h3 className="font-medium">{notification.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {notification.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// 로딩 상태 UI
export function NotificationsSkeleton() {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow mb-6 animate-pulse">
      <div className="h-7 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
      <div className="space-y-3">
        {[1, 2, 3].map(i => (
          <div
            key={i}
            className="bg-gray-100 dark:bg-slate-700 p-3 rounded-md border-l-4 border-gray-300 dark:border-gray-600"
          >
            <div className="h-5 bg-gray-200 dark:bg-gray-600 rounded w-1/3 mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
