import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingChatList = () => {
  return (
    <div>
      {[...Array(7)].map((_, index) => (
        <div
          key={index}
          className="p-4 border-b border-gray-200 flex place-content-between flex-wrap"
        >
          <div className="w-full">
            <Skeleton height={24} width={`25%`} className="mb-2" />
            <Skeleton height={16} width={`40%`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingChatList;
