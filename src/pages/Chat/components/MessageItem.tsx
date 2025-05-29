import { memo } from "react";

export interface INewMessage {
  id: string;
  text: string;
  isMine: boolean;
}

export const MessageItem = memo(({ message }: { message: INewMessage }) => {
  if (message.isMine) {
    return (
      <div
        className="px-5 py-3 rounded-md bg-card ml-auto text-card-foreground max-w-sm"
        style={{ borderBottomRightRadius: "0px" }}
      >
        {message.text}
      </div>
    );
  }

  return (
    <div
      className="px-5 py-3 rounded-md bg-card-foreground mr-auto text-card max-w-sm"
      style={{
        borderBottomLeftRadius: "0px",
      }}
    >
      {message.text}
    </div>
  );
});
