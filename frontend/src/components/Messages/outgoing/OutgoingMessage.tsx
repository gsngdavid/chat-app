interface Props {
  message: string;
  time: string;
}

export default function OutgoingMessage({ message, time }: Props) {
  return (
    <div className="self-end w-fit bg-primary text-white py-1 px-3 rounded-lg rounded-br-none">
      <p className="text-sm pr-2">{message}</p>
      <p className="text-[0.65rem] text-right ">{time}</p>
    </div>
  );
}
