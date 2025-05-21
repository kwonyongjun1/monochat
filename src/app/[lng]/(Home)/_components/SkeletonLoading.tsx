import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoading = () => {
  return (
    <div className="px-4 py-3 border-b border-gray-200 flex place-content-between flex-wrap">
      <div className="w-full">
        <Skeleton height={20} width={`25%`} />
        <Skeleton height={16} width={`40%`} />
      </div>
    </div>
  );
};

export default SkeletonLoading;
