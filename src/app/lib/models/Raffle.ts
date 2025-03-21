// lib/models/Raffle.ts
import mongoose, { Document, Schema } from 'mongoose';

// Định nghĩa interface cho Raffle
interface IRaffle extends Document {
  id: string;
  logo: string;
  prizeText: string;
  platformText: string;
  prizeAmount: string;
  aprPercentage: string;
  progress: number;
  totalValue: string;
  detailedAmount: string;
  createdAt: Date;
}

// Định nghĩa schema
const raffleSchema: Schema<IRaffle> = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // ID duy nhất cho mỗi raffle
  logo: { type: String, required: true }, // URL logo
  prizeText: { type: String, required: true }, // Ví dụ: "Prize USDC"
  platformText: { type: String, required: true }, // Ví dụ: "ZKlend"
  prizeAmount: { type: String, required: true }, // Ví dụ: "Up to $12,345"
  aprPercentage: { type: String, required: true }, // Ví dụ: "+9.25% in APR"
  progress: { type: Number, required: true, min: 0, max: 100 }, // Phần trăm Win chances
  totalValue: { type: String, required: true }, // Ví dụ: "$4.7M"
  detailedAmount: { type: String, required: true }, // Ví dụ: "4,732,456 USDC"
  createdAt: { type: Date, default: Date.now }, // Thời gian tạo
});

// Xuất model
export default mongoose.model<IRaffle>('Raffle', raffleSchema);