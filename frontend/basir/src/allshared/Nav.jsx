import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserRound, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

function Nav() {
  const kamvail = false;

  return (
    <>
      <div className="h-[64px] w-full bg-white shadow-md flex items-center justify-between px-8">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          Job <span className="text-red-600">khoj</span>
        </h1>

        {/* Right Section */}
        <div className="flex items-center gap-6 text-[16px]">
          {/* Nav Links */}
          <Link
            to="/"
            className="px-4 py-1 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Home
          </Link>

          <h1 className="px-4 py-1 rounded-lg font-medium hover:bg-gray-100 cursor-pointer transition">
            Jobs
          </h1>

          <h1 className="px-4 py-1 rounded-lg font-medium hover:bg-gray-100 cursor-pointer transition">
            Browse
          </h1>

          {/* Auth Section */}
          {!kamvail ? (
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="px-4 py-1 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="px-4 py-1 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Signup
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Avatar className="cursor-pointer ring-2 ring-indigo-500">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className="w-[260px]">
                {/* Profile */}
                <div className="flex gap-3 items-center">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h1 className="font-semibold">Mern Stack Developer</h1>
                    <p className="text-sm text-gray-400">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>

                <hr className="my-3" />

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <UserRound size={18} />
                  <Button variant="link" className="p-0">
                    view Profile
                  </Button>
                </div>

                <div className="flex items-center gap-2 mt-2 text-red-600">
                  <LogOut size={18} />
                  <Button variant="link" className="p-0 text-red-600">
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

export default Nav;
