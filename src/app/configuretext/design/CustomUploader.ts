import { useUploadThing } from "@/lib/uploadthing";

async function dataURLToBlob(dataURL: string) {
  const response = await fetch(dataURL);
  return await response.blob();
}

export const CustomUploader = async (file: string) => {
  const blob = dataURLToBlob(file);
  //@ts-ignore
  const files = new File([blob], "generated-image.png", { type: "image/png" });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { startUpload } = useUploadThing("imageUploader");

  startUpload([files], { configId: undefined });
};
