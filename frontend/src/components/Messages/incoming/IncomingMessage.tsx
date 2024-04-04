interface Props {
  message: string;
  time: string;
}

export default function IncomingMessage({ message, time }: Props) {
  return (
    <div className="w-fit bg-[#1A1D24] text-white py-1 px-3 rounded-lg rounded-br-none">
      <p className="text-sm pr-2">{message}</p>
      <p className="text-[0.65rem] text-right ">{time}</p>
    </div>
  );
}
