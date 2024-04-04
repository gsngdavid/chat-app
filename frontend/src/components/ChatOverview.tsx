import Image from "next/image";

export default function ChatOverview() {
  return (
    <div className="flex items-center gap-x-3">
      <Image
        src="	https://i.pravatar.cc/150"
        alt="user"
        width={150}
        height={150}
        className="w-16 h-w-16 rounded-full border-4 border-black shadow-white"
      />
      <div className="flex-1 border-b border-dark-gray py-3">
        <div className="flex justify-between items-center">
          <h1>Sara Sanders</h1>
          <span className="text-primary text-sm">12:35</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-secondary text-xs">Can you buy me dinner?</p>
          <span className="text-primary">
            <span className="bg-gradient-to-bl from-primary py-0.5 px-1.5 rounded-md text-sm text-white font-semibold">
              3
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
