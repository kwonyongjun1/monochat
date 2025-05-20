export interface ChatRoomInfo {
  roomId: number;
  title: string;
  lastMessage: string;
  lastDate: Timestamp;
}

export interface Timestamp {
  seconds: number;
  nanoseconds: number;
}
