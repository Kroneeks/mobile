"use server";

import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getPaymentStatus = async ({
  orderId,
  userId,
}: {
  orderId: string;
  userId: string;
}) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

  if (!user?.id || !user.email || user.email !== ADMIN_EMAIL) {
    throw new Error("You need to be logged in to view this page.");
  }

  const order = await db.order.findFirst({
    where: {
      //@ts-ignore
      id: orderId,
      //@ts-ignore
      userId,
    },
    include: {
      billingAddress: true,
      configuration: true,
      shippingAddress: true,
      user: true,
    },
  });

  if (!order) throw new Error("This order does not exist.");
  return order;
};
