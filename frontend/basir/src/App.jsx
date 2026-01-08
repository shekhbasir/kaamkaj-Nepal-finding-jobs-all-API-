import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserRound, LogOut } from "lucide-react";
function App() {
  const kamvail = true;
  return (
    <>
      <div className="h-[60px] max-w-[full] bg-gray-200 flex justify-between pt-[10px]">
        <div>
          <h1 className="text-[25px] font-bold mr-[100px]">
            Job <span className="text-red-600">khoj</span>
          </h1>
        </div>
        <div className="flex  gap-5 text-[20px] mr-[20px]">
          <h1 className="h-[30px] w-[85px] bg-gray-400 text-black flex justify-center rounded-[10px] cursor-pointer ">
            Home
          </h1>
          <h1 className="h-[30px] w-[85px] bg-gray-400 text-black flex justify-center rounded-[10px] cursor-pointer ">
            Jobs
          </h1>
          <h1 className="h-[30px] w-[85px] bg-gray-400 text-black flex justify-center rounded-[10px] cursor-pointer ">
            Browse
          </h1>
          {!kamvail ? (
            <div className="flex gap-5">
              <h1 className="h-[30px] w-[85px] bg-gray-400 text-black flex justify-center rounded-[10px] cursor-pointer ">
                Login
              </h1>
              <h1 className="h-[30px] w-[85px] bg-gray-400 text-black flex justify-center rounded-[10px] cursor-pointer ">
                Logout
              </h1>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger className="  pb-[30px]">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    className="cursor-pointer"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex gap-[10px]">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      className="cursor-pointer"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h1>Mern Stack Developer</h1>
                </div>
                <div className="text-gray-400 ml-[40px]">
                  Lorem ipsum dolor sit amet.
                </div>

                <div className="flex  mt-[20px]">
                  <UserRound />{" "}
                  <Button variant="link" className="cursor-pointer">
                    view Profile
                  </Button>
                </div>
                <div className="flex mt-[10px]">
                  <LogOut />
                  <Button variant="link" className="cursor-pointer">
                    LogOut
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </>
  );
}
export default App;
