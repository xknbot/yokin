import React from "react";
import Image from "next/image";

type LeaderboardEntry = {
  rank: number;
  user: string;
  referralPoints: number;
  yokinPoints: number;
  totalPoints: number;
  isCurrentUser?: boolean;
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
          <tr
            key={entry.rank}
            className={`p-4 text-center  ${index === 0 ? 'border-b border-[#27272a]' : ''} 
            ${entry.isCurrentUser ? 'bg-[#2c2c2c]' : ''}`}
          >
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
              <span className={entry.isCurrentUser ? 'text-blue-400' : ''}>
                {entry.user} {entry.isCurrentUser && ''}
              </span>
            </td>
            <td className="text-center">
              <span className="relative inline-block">
                <span
                  className="absolute top-1/2 w-3 h-3 rounded-full transform -translate-y-1/2 right-6"
                  style={{
                    background: "linear-gradient(135deg, #FFFFFF, #2C2C2C)", // Gradient 1
                  }}
                ></span>
                <span className="text-[14px]">{entry.referralPoints}</span>
              </span>
            </td>
            <td className="text-center">
              <span className="relative inline-block">
                <span
                  className="absolute top-1/2 w-3 h-3 rounded-full transform -translate-y-1/2 right-6 "
                  style={{
                    background: "linear-gradient(135deg, #757575, #2C2C2C)", // Gradient 2
                  }}
                ></span>
                <span className="text-[14px]">{entry.yokinPoints}</span>
              </span>
            </td>
           <td className="text-center">
              <span className="relative inline-block">
                <span
                  className="absolute top-1/2 text-[14px] text-yellow-400 transform -translate-y-1/2 right-7"
                >
                  ★
                </span>
                <span>{entry.totalPoints}</span>
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeaderboardTable;


