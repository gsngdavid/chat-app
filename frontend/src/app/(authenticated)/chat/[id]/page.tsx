import Image from "next/image";
import Button from "../../../../components/ui/Button";
import CallIcon from "../../../../assets/icons/CallIcon";
import ArrowLeftIcon from "../../../../assets/icons/ArrowLeft";
import OutgoingMessage from "../../../../components/Messages/outgoing/OutgoingMessage";
import IncomingMessage from "../../../../components/Messages/incoming/IncomingMessage";
import RecordIcon from "../../../../assets/icons/RecordIcon";
import EmojiIcon from "../../../../assets/icons/EmojiIcon";
import AttachIcon from "../../../../assets/icons/AttachIcon";
import SendIcon from "../../../../assets/icons/SendIcon";

export default function DirectMessage() {
  return (
    <main className="space-x">
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

      <div className="max-h-[calc(100vh-11.5rem)] overflow-y-auto py-6">
        <p className="text-xs text-center my-4">4/03/2024</p>
        <div className="flex flex-col gap-y-4  pr-2">
          <div className="flex flex-col gap-y-1">
            <OutgoingMessage message="Hello, how are you?" time="4:18 AM" />
            <OutgoingMessage message="Hello, how are you?" time="4:18 AM" />
            <OutgoingMessage message="Hello, how are you?" time="4:18 AM" />
          </div>
          <div className="flex flex-col gap-y-1">
            <IncomingMessage
              message="Hey, Bruce! Its been a while"
              time="4:19 AM"
            />
            <IncomingMessage message="What's up?" time="4:20 AM" />
          </div>
          <div className="flex flex-col gap-y-1">
            <OutgoingMessage
              message="I wonder if you would like to watch a movie tonight?"
              time="5:18 AM"
            />
          </div>
        </div>
        <p className="text-xs text-center my-4">Today</p>
        <div className="flex flex-col gap-y-4  pr-2">
          <div className="flex flex-col gap-y-1">
            <IncomingMessage
              message="Sounds like a good idea!"
              time="4:20 PM"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-x-3">
        <div className="flex-1 my-2 rounded-3xl shadow-top">
          <div className="flex items-center gap-4 rounded-3xl shadow-bottom p-2">
            <Button>
              <EmojiIcon fill="white" className="w-4 h-4" />
            </Button>
            <input
              className="flex-1 w-full bg-transparent outline-none text-sm"
              type="text"
              placeholder="Type a message"
            />
            <Button>
              <AttachIcon fill="white" className="w-4 h-4" />
            </Button>
            <Button>
              <SendIcon stroke="white" className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <Button>
          <RecordIcon fill="white" className="w-7 h-7" />
        </Button>
      </div>
    </main>
  );
}
