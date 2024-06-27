import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <h2 className="text-2xl my-2">This is Home Page</h2>
      <div><Link className="underline" href="/login">Go to Login page</Link></div>
      <div><Link className="underline" href="/marketing">Go to Marketing</Link></div>
    </div>
  );
}
