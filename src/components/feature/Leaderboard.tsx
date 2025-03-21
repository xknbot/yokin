'use client'

import React, { useState, useEffect } from "react";
import LeaderboardTitle from "@/components/ui/LeaderboardTitle";
import LeaderboardTable from "@/components/ui/LeaderboardTable";
import { fetchLeaderboardEntries } from "@/data/mockData";

type LeaderboardEntry = {
  rank: number;
  user: string;
  referralPoints: number;
  yokinPoints: number;
  totalPoints: number;
  isCurrentUser?: boolean;
};

const Leaderboard = () => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchLeaderboardEntries();
        setEntries(data);
      } catch (error) {
        console.error("Error when downloading data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

    if (loading) return (<div className="flex justify-center items-center min-h-screen">
        <div className="text-white text-center p-4 animate-pulse">Loading...</div>
    </div>);

  return (
    <div className="mx-auto w-[85%] mb-20 min-h-screen">
      <LeaderboardTitle />
      <LeaderboardTable entries={entries} />
    </div>
  );
};

export default Leaderboard;