import React from "react";
import Image from "next/image";

type LeaderboardEntry = {
  rank: number;
  user: string;
  referralPoints: number;
  yokinPoints: number;
  totalPoints: number;
  isCurrentUser?: boolean; // Dấu "(YOU)" cho người dùng hiện tại
};

type LeaderboardTableProps = {
  entries: LeaderboardEntry[];
};

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ entries }) => {
  return (
    <table className="mx-auto w-[90%] text-white bg-[#09090b] shadow-md">
      <thead>
        <tr className="border-b border-[#757575] text-[#757575] text-sm">
          <th className="p-4 text-left ">No</th>
          <th className="p-4 text-left">Users</th>
          <th className="p-4 text-center">Referral Points</th>
          <th className="p-4 text-center">Yokin Points</th>
          <th className="p-4 text-center">Total Points</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry) => (
          <tr key={entry.rank} >
            <td className="p-4 text-left">
              {entry.rank <= 3 ? (
                <Image
                  src={`/rank${entry.rank}.png`}
                  alt={`Rank ${entry.rank}`}
                  className="w-6 h-6 inline-block"
                  width={100}
                  height={100}
                />
              ) : (
                entry.rank
              )}
            </td>
            <td className="p-4 text-left">
              {entry.user} {entry.isCurrentUser && <span className="text-blue-400">(YOU)</span>}
            </td>
            <td className="p-4 text-center">
              <span className="bg-gray-700 text-white rounded-full px-2 py-1 inline-block">{entry.referralPoints}</span>
            </td>
            <td className="p-4 text-center">
              <span className="bg-gray-700 text-white rounded-full px-2 py-1 inline-block">{entry.yokinPoints}</span>
            </td>
            <td className="p-4 text-center">
               <span className="text-yellow-400">★</span> {entry.totalPoints}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeaderboardTable;