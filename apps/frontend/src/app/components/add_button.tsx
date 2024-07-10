import { Icon } from "@iconify/react";
import Link from "next/link";

export default function AddButton() {
  return (
    <Link href="/creation" className="fixed bottom-2 right-2 bg-accent rounded">
      <Icon
        icon="fa-solid:plus"
        className="h-12 w-12 hover:h-16 hover:w-16 text-white p-2"
      />
    </Link>
  );
}
