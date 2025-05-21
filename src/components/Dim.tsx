interface DimProps {
  onClick: () => void;
  position?: "absolute" | "fixed";
  className?: string;
}

const Dim = ({ onClick, position = "absolute", className }: DimProps) => {
  return (
    <div
      className={`${position} bottom-0 left-0 size-full bg-black opacity-30 ${className}`}
      onClick={onClick}
    />
  );
};

export default Dim;
