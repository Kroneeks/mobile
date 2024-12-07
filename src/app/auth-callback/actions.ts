"use server";

import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getAuthStatus = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user?.id || !user.email) {
    throw new Error("Invalid user data");
  }

  const existingUser = await db.user.findFirst({
    //@ts-ignore
    where: { id: user.id },
  });

  if (!existingUser) {
    await db.user.create({
      data: {
        //@ts-ignore
        id: user.id,
        email: user.email,
      },
    });
  }

  return { success: true };
};
