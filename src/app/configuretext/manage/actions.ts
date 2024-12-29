"use server";

import { BASE_PRICE, PRODUCT_PRICES } from "@/config/products";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Order, Prisma } from "@prisma/client";

export const createCheckoutSession = async ({ id }: { id: string }) => {
  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) {
    throw new Error("No such configuration found");
  }

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("You need to be logged in");
  }

  const { finish, material } = configuration;

  let price = BASE_PRICE;
  if (finish === "textured") price += PRODUCT_PRICES.finish.textured;
  if (material === "multicolor") price += PRODUCT_PRICES.material.multicolor;

  let order: Order | undefined = undefined;

  const existingOrder = await db.order.findFirst({
    where: {
      //@ts-ignore
      userId: user.id,
      configurationId: configuration.id,
    },
  });

  console.log(user.id, configuration.id);
  const orderSession = { url: "" };

  if (existingOrder) {
    order = existingOrder;
    orderSession.url = `${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you?orderId=${order.id}`;
  } else {
    try {
      order = await db.order.create({
        data: {
          amount: price / 100,
          //@ts-ignore
          userId: user.id,
          configurationId: configuration.id,
        },
      });
      orderSession.url = `${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you?orderId=${order.id}`;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        console.log(e);
      }
      orderSession.url = `${process.env.NEXT_PUBLIC_SERVER_URL}/configuretext/preview?id=${configuration.id}`;
      throw e;
    }
  }

  return { url: orderSession.url };
};
