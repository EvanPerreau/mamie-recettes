import { Icon } from "@iconify/react";
import Link from "next/link";

export default function AddButton() {
  return (
    <Link
      href="/creation"
      className="btn btn-square btn-outline fixed bottom-2 right-2"
    >
      <Icon icon="fa-solid:plus" height="100%" />
    </Link>
  );
}
