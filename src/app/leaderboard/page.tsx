
import React from 'react';
import LeaderboardTitle from '@/app/leaderboard/LeaderboardTitle';
import LeaderboardTable from '@/app/leaderboard/LeaderboardTable';
import { leaderboardEntries } from '@/data/mockData';

const LeaderboardPage = () => {
  return (
    <div className="min-h-screen p-8">
      <LeaderboardTitle />
      <LeaderboardTable entries={leaderboardEntries} />
    </div>
  );
};

export default LeaderboardPage;