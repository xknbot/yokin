
import React from 'react';
import LeaderboardTitle from '@/components/ui/LeaderboardTitle';
import LeaderboardTable from '@/components/ui/LeaderboardTable';
import { leaderboardEntries } from '@/data/mockData';

const LeaderboardPage = () => {
  return (
    <div className="mx-auto w-[85%] mb-20">
      <LeaderboardTitle />
      <LeaderboardTable entries={leaderboardEntries} />
    </div>
  );
};

export default LeaderboardPage;