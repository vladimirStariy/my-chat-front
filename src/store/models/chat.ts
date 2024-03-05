export interface IMessagesResponse {
  id: number;
  text: string;
  userId: number;
  messageDate: Date;
}
export interface IMessagesRequest {
  chatRoomId: string;
  page: number;
  limit: number;
}