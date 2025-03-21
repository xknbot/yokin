// @/data/mockData.ts
export type LeaderboardEntry = {
  rank: number;
  user: string;
  referralPoints: number;
  yokinPoints: number;
  totalPoints: number;
  isCurrentUser?: boolean;
};

export const fetchLeaderboardEntries = async (): Promise<LeaderboardEntry[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { rank: 1, user: "0x1234...abcd", referralPoints: 500, yokinPoints: 300, totalPoints: 800 },
        { rank: 2, user: "0x5678...efgh", referralPoints: 400, yokinPoints: 250, totalPoints: 650 },
        { rank: 3, user: "0x9abc...ijkl", referralPoints: 300, yokinPoints: 200, totalPoints: 500 },
        { rank: 4, user: "0xdef0...mnop", referralPoints: 200, yokinPoints: 150, totalPoints: 350 },
        { rank: 5, user: "0x0309...def3", referralPoints: 200, yokinPoints: 812, totalPoints: 1012 },
  { rank: 6, user: "0x0309...def3", referralPoints: 200, yokinPoints: 812, totalPoints: 1012 },
  { rank: 7, user: "0x0309...def3", referralPoints: 200, yokinPoints: 812, totalPoints: 1012 },
  { rank: 8, user: "0x0309...def3", referralPoints: 200, yokinPoints: 812, totalPoints: 1012 },
  { rank: 9, user: "0x0309...def3", referralPoints: 200, yokinPoints: 812, totalPoints: 1012 },
  { rank: 10, user: "0x0309...def3", referralPoints: 200, yokinPoints: 812, totalPoints: 1012 },
  { rank: 20, user: "0x0309...def3", referralPoints: 200, yokinPoints: 812, totalPoints: 1012, isCurrentUser: true },
      ]);
    }, 1000); // Giả lập delay 1 giây
  });
};


