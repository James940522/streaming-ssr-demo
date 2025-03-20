import { fetchUserData } from '../../lib/data';

export default async function UserProfile() {
  const userData = await fetchUserData('1');

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">사용자 프로필</h2>
      <div className="flex items-center gap-4">
        <div>
          <h3 className="text-lg font-medium">{userData.name}</h3>
          <p className="text-gray-500 dark:text-gray-400">{userData.email}</p>
          <p className="text-sm flex flex-col text-gray-400 dark:text-gray-500">
            {userData.role}
            <span className="text-gray-400 dark:text-gray-500">
              마지막 로그인:
            </span>
            {new Date(userData.lastLogin).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

// 로딩 상태 UI
export function UserProfileSkeleton() {
  return (
    <div className="bg-white min-h-[204px] dark:bg-slate-800 p-6 rounded-lg shadow mb-6 animate-pulse">
      <div className="h-7 w-40 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
      <div className="flex items-center gap-4">
        <div className="space-y-2">
          <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
}
