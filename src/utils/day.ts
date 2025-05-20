import { Timestamp } from "@/types/chat";

export const getTimeStamp = (data: number): Timestamp => {
  return {
    seconds: Math.floor(data / 1000),
    nanoseconds: (data % 1000) * 1e6,
  };
};

export const getCurrentTimeStamp = () => {
  return getTimeStamp(Date.now());
};

export const formatTimestamp = (timestamp: Timestamp) => {
  const date = new Date(
    timestamp.seconds * 1000 + Math.floor(timestamp.nanoseconds / 1e6)
  );
  return date.toLocaleString();
};

export const formatTimestampToDateTime = (timestamp: Timestamp) => {
  const milliseconds =
    timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000;
  const date = new Date(milliseconds);

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  if (date >= today) {
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const period = hours < 12 ? "오전" : "오후";
    const formattedHours = hours % 12 || 12;
    return `${period} ${formattedHours}:${minutes}`;
  }

  if (date >= yesterday) {
    return "어제";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
