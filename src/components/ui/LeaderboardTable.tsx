import React from "react";
import Image from "next/image";
import CircleDiagonalGradient1 from "@/components/ui/CircleDiagonalGradient1"
import CircleDiagonalGradient2 from "./CircleDiagonalGradient2";


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
        <tr className="border-b border-[#27272a] text-[#757575] text-sm h-12">
          <th className="text-[14px] p-4 text-center ">No</th>
          <th className="text-[14px] p-4 text-left">Users</th>
          <th className="text-[14px] p-4 text-center">Referral Points</th>
          <th className="text-[14px] p-4 text-center">Yokin Points</th>
          <th className="text-[14px] p-4 text-center">Total Points</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => (
          <tr key={entry.rank}
            className={`p-4 text-center ${index === 0 ? 'border-b border-[#27272a]' : ''} 
          ${index === entries.length - 1 ? 'bg-[#2c2c2c]' : ''}`}>
            <td className="text-[14px] p-4 text-center">
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
            <td className="p-4 text-[14px] text-left">
              {entry.user} {entry.isCurrentUser && <span className="text-blue-400"></span>}
            </td>
            <td className="relative">
            <div>
                <span className="absolute top-1/3 left-[120px]"><CircleDiagonalGradient1 /></span>
                <span className="text-[14px]">{entry.referralPoints }</span>
              </div>
            </td>
            <td className="relative">
              <div>
                <span className="absolute top-1/3 left-[105px]"><CircleDiagonalGradient2 /></span>
                <span className="text-[14px]">{entry.yokinPoints }</span>
              </div>
              
            </td>
            <td className="p-4 text-center text-[14px]">
               <span className="text-yellow-400">★</span> {entry.totalPoints}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeaderboardTable;