import { cn } from "@/utils/cn";

interface ChatBubbleProps {
  message: string;
  sender: string;
  time: string;
  isMine: boolean;
  showSender?: boolean;
}

const ChatBubble = ({
  message,
  sender,
  time,
  isMine,
  showSender = true,
}: ChatBubbleProps) => {
  return (
    <div
      className={cn("flex items-start gap-2.5", isMine && "flex-row-reverse")}
    >
      <div className="flex flex-col w-4/5  leading-1.5 px-4">
        <div
          className={cn(
            "flex items-center",
            isMine && "flex-row-reverse",
            !showSender || (isMine && "hidden")
          )}
        >
          <span className="text-sm font-semibold text-gray-900 ">{sender}</span>
        </div>
        <div
          className={cn(
            "flex items-center  pt-2 gap-2",
            isMine && "flex-row-reverse"
          )}
        >
          <p
            className={cn(
              "text-sm font-normal p-2.5 text-gray-900 rounded-e-xl rounded-es-xl",
              isMine
                ? "border-blue-200 bg-blue-100"
                : "border-gray-200 bg-gray-100"
            )}
          >
            {message}
          </p>
          <span className="text-sm font-normal text-gray-500 self-end">
            {time}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
