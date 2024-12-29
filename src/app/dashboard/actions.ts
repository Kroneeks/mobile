"use server";

import { db } from "@/db";
import { OrderStatus } from "@prisma/client";

export const changeOrderStatus = async ({
  id,
  newStatus,
}: {
  id: string;
  newStatus: OrderStatus;
}) => {
  await db.order.update({
    //@ts-ignore
    where: { id },
    data: { status: newStatus },
  });
};

export const deleteOrder = async ({ id }: { id: string }) => {
  await db.order.delete({
    //@ts-ignore
    where: { id },
  });
};
