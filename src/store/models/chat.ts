export interface IMessagesResponse {
  id: number;
  text: string;
  userId: number;
  usertag: string;
  messageDate: Date;
}
export interface IMessagesRequest {
  chatRoomId: string;
  page: number;
  limit: number;
}