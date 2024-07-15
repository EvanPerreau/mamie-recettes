import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const EditButton: React.FC<{ id: number }> = ({ id }) => {
  return (
    <Link
      href={`/recettes/edit/${id}`}
      className="fixed bottom-2 right-2 bg-accent rounded"
    >
      <Icon
        icon="fa-solid:edit"
        className="h-12 w-12 hover:h-16 hover:w-16 text-white p-2"
      />
    </Link>
  );
};

export default EditButton;
