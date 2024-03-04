import Image from "next/image";
import PlusIcon from "../assets/icons/PlusIcon";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <main className="">
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
    </main>
  );
}
