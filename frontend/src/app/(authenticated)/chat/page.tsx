import Image from "next/image";
import PlusIcon from "../../../assets/icons/PlusIcon";
import Button from "../../../components/ui/Button";
import ChatOverview from "../../../components/ChatOverview";
import Link from "next/link";
import GearIcon from "../../../assets/icons/GearIcon";
import NavLink from "../../../components/ui/NavLink";
import MessageIcon from "../../../assets/icons/MessageIcon";
import CameraIcon from "../../../assets/icons/CameraIcon";
import StatusIcon from "../../../assets/icons/StatusIcon";

export default function Home() {
  return (
    <main className="space-x">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src="	https://i.pravatar.cc/150?u=a04258114e29026702d"
            alt="user"
            width={150}
            height={150}
            className="w-12 h-w-12 rounded-full border-4 border-black shadow-white"
          />
          <h1 className="font-bold text-2xl">Chats</h1>
        </div>

        <Button>
          <PlusIcon fill="white" className="w-4 h-4" />
        </Button>
      </div>

      <div className="bg-dark-gray shadow-lg rounded-2xl my-6">
        <input
          className="w-full bg-transparent text-white text-sm py-3 px-5 outline-none"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="max-h-[calc(100vh-17.8rem)] overflow-y-auto flex flex-col gap-y-4 pr-2">
        <Link href="/chat/1">
          <ChatOverview />
        </Link>
        <Link href="/chat/1">
          <ChatOverview />
        </Link>
        <Link href="/chat/1">
          <ChatOverview />
        </Link>
        <Link href="/chat/1">
          <ChatOverview />
        </Link>
        <Link href="/chat/1">
          <ChatOverview />
        </Link>
        <Link href="/chat/1">
          <ChatOverview />
        </Link>
      </div>
      <div
        className="my-2 rounded-3xl"
        style={{
          boxShadow: "rgba(255, 255, 255, 0.06) 0px 2px 4px 0px inset",
        }}
      >
        <div
          className="flex justify-between gap-4 rounded-3xl py-2 px-4"
          style={{ boxShadow: " rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}
        >
          <NavLink link="/chat">
            <MessageIcon className="w-6 h-6" stroke="#CBDBEA" fill="none" />
          </NavLink>
          <NavLink link="#">
            <CameraIcon className="w-6 h-6" stroke="#CBDBEA" fill="none" />
          </NavLink>
          <NavLink link="/status">
            <StatusIcon className="w-6 h-6" stroke="#CBDBEA" fill="none" />
          </NavLink>
          <NavLink link="/settings">
            <GearIcon className="w-6 h-6" fill="#CBDBEA" />
          </NavLink>
        </div>
      </div>
    </main>
  );
}
