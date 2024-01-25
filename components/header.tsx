import Link from "next/link";

const Header = () => {
  return (
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">BullionVsBytes</span>
        <img className="h-16 w-auto" src="/assets/logoV1.jpeg" alt="" />
      </a>
    </div>
  );
};

export default Header;
