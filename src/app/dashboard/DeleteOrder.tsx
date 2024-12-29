"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { deleteOrder } from "./actions";
import { Delete } from "lucide-react";
import Link from "next/link";

const DeleteOrder = ({ id }: { id: string }) => {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["delete-order"],
    mutationFn: deleteOrder,
    onSuccess: () => router.refresh(),
  });

  return (
    <Button
      className={buttonVariants({
        size: "sm",
        className: "px-2 py-5",
        variant: "destructive",
      })}
      onClick={() =>
        mutate({
          id,
        })
      }
    >
      <Delete className="h-5 w-5" />
    </Button>
  );
};

export default DeleteOrder;
