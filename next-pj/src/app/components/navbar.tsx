import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row g-12">
      <Link href="/about" className="mr-5">About</Link>
      <Link href="/about/us" className="mr-5">Us</Link>
      <Link href="/about/someone" className="mr-5">Someone</Link>
      <Link href="/listofposts" className="mr-5">Posts</Link>
    </div>
  );
}
