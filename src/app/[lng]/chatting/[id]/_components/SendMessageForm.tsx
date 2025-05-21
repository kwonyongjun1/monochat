import { postMessage } from "@/app/fetchs/chat/postMessage";
import { CHAT_EVENT } from "@/constants";
import { getCurrentTimeStamp } from "@/utils/day";
import { GrSend } from "react-icons/gr";

interface SendMessageFormProps {
  roomId: string;
}
const SendMessageForm = ({ roomId }: SendMessageFormProps) => {
  const onSend = async (message: string) => {
    await postMessage({
      roomId: roomId as string,
      senderId: "admin",
      message,
      type: CHAT_EVENT.NEW_MESSAGE,
      createdAt: getCurrentTimeStamp(),
      readBy: [],
    });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const message = formData.get("message") as string;
    await onSend(message);
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div className="p-3">
      <form
        className="flex items-center justify-center gap-2"
        onSubmit={onSubmit}
      >
        <div className="flex w-full border-2 border-black rounded-lg items-center p-1">
          <textarea
            className="w-full overflow-hidden text-sm contnet-center"
            placeholder="메시지를 입력하세요."
            style={{ height: "20px" }}
            name="message"
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                const form = (event.target as HTMLTextAreaElement).form;
                const formData = new FormData(form as HTMLFormElement);
                const message = formData.get("message") as string;
                onSend(message);
                form?.reset();
              }
            }}
          />
        </div>
        <button type="submit">
          <div className="p-2 rounded-full bg-primary border-2 border-black transition-transform duration-300 transform hover:scale-110">
            <GrSend size={20} />
          </div>
        </button>
      </form>
    </div>
  );
};

export default SendMessageForm;
