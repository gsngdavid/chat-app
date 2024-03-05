import Image from "next/image";
import Button from "../../../components/ui/Button";
import CallIcon from "../../../assets/icons/CallIcon";
import ArrowLeftIcon from "../../../assets/icons/ArrowLeft";
import OutgoingMessage from "../../../components/Messages/outgoing/OutgoingMessage";
import IncomingMessage from "../../../components/Messages/incoming/IncomingMessage";

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Button>
            <ArrowLeftIcon stroke="white" className="w-4 h-4" />
          </Button>
          <div className="flex items-center gap-x-4">
            <Image
              src="	https://i.pravatar.cc/150?u=a04258114e29026702d"
              alt="user"
              width={150}
              height={150}
              className="w-12 h-w-12 rounded-full border-4 border-black shadow-white"
            />
            <div>
              <h1 className="font-bold">Gusenga David</h1>
              <h3 className="text-xs">Typing...</h3>
            </div>
          </div>
        </div>

        <Button>
          <CallIcon fill="white" className="w-4 h-4" />
        </Button>
      </div>

      <div>
        <p className="text-xs text-center my-4">4/03/2024</p>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-1">
            <OutgoingMessage />
          </div>
          <div className="flex flex-col gap-y-1">
            <IncomingMessage
              message="Hey, Bruce! Its been a while"
              time="4:19 AM"
            />
            <IncomingMessage message="What's up?" time="4:20 AM" />
          </div>
        </div>
        <p className="text-xs text-center my-4">Today</p>
      </div>
    </main>
  );
}
