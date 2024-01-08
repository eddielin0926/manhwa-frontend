import {
  HomeIcon,
  CalendarDaysIcon,
  GiftIcon,
  InboxStackIcon,
} from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <nav className="flex justify-around fixed left-0 right-0 bottom-0 p-2 bg-neutral-900">
      <div className="flex flex-col items-center">
        <HomeIcon className="w-7 h-7" />
        <div className="text-xs m-1">首頁</div>
      </div>
      <div className="flex flex-col items-center">
        <CalendarDaysIcon className="w-7 h-7" />
        <div className="text-xs m-1">星期列表</div>
      </div>
      <div className="flex flex-col items-center">
        <GiftIcon className="w-7 h-7" />
        <div className="text-xs m-1">禮物盒</div>
      </div>
      <div className="flex flex-col items-center">
        <InboxStackIcon className="w-7 h-7" />
        <div className="text-xs m-1">我的漫畫</div>
      </div>
    </nav>
  );
}
