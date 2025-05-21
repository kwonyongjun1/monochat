interface DateSeparatorProps {
  date: string;
}
const DateSeparator = ({ date }: DateSeparatorProps) => {
  return (
    <div className="w-full place-items-center p-4">
      <div className="w-1/3 text-xs text-center font-normal p-0.5 text-gray-900 border-gray-100 bg-slate-200 rounded-xl">
        {date}
      </div>
    </div>
  );
};
export default DateSeparator;
