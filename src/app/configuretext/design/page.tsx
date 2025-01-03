import { db } from "@/db";
import { notFound } from "next/navigation";
import DesignConfigurator from "./DesignConfigurator";
import "./globals.css";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  // const { id } = searchParams;

  // if (!id || typeof id !== "string") {
  // return notFound();
  // }

  const { id } = await db.configuration.create({
    data: {
      imageUrl: "",
      height: 1200,
      width: 1500,
    },
  });

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) {
    return notFound();
  }

  const { imageUrl, width, height } = configuration;

  return (
    <DesignConfigurator
      configId={configuration.id}
      imageDimensions={{ width, height }}
      imageUrl={imageUrl}
    />
  );
};

export default Page;
