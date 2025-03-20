// 인위적인 지연을 추가하는 헬퍼 함수
export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

// 가상의 사용자 정보를 가져오는 함수
export async function fetchUserData(userId: string) {
  // 실제 API 호출 대신 지연 시간을 시뮬레이션
  await delay(1000);

  return {
    id: userId,
    name: `사용자 ${userId}`,
    email: `user${userId}@example.com`,
    role: '관리자',
    lastLogin: new Date().toISOString(),
  };
}

// 가상의 대시보드 통계 데이터를 가져오는 함수
export async function fetchDashboardStats() {
  // 2초 지연
  await delay(6000);

  return {
    totalUsers: 1254,
    activeUsers: 876,
    totalProjects: 342,
    completedProjects: 187,
    pendingTasks: 56,
  };
}

// 가상의 최근 활동 목록을 가져오는 함수
export async function fetchRecentActivities() {
  // 4초 지연
  await delay(2000);

  return [
    { id: '1', user: '김철수', action: '로그인', time: '10분 전' },
    { id: '2', user: '이영희', action: '프로젝트 생성', time: '25분 전' },
    { id: '3', user: '박지훈', action: '태스크 완료', time: '1시간 전' },
    { id: '4', user: '최수진', action: '댓글 작성', time: '2시간 전' },
    { id: '5', user: '정민우', action: '파일 업로드', time: '3시간 전' },
  ];
}

// 가상의 알림 목록을 가져오는 함수
export async function fetchNotifications() {
  // 1.5초 지연
  await delay(4000);

  return [
    {
      id: '1',
      title: '새 업데이트 알림',
      message: '시스템이 v2.1로 업데이트되었습니다',
    },
    {
      id: '2',
      title: '미팅 알림',
      message: '내일 오전 10시 팀 미팅이 있습니다',
    },
    {
      id: '3',
      title: '할일 알림',
      message: '오늘까지 완료해야 할 태스크가 2개 있습니다',
    },
  ];
}
