import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const ChoosePreview = () => {
  return (
    <section className="mt-20">
      <div className="flex flex-row gap-4">
        <div className="relative group transition ease-in-out duration-250 rounded-3xl overflow-hidden">
          <Link
            href="/configuretext/design"
            className="relative group-hover:brightness-50 transition ease-in-out duration-250"
          >
            <img src="/choose-text.png" alt="Выбрать кружку с текстом" />
          </Link>
          <p className="text-center absolute top-1/2 text-4xl text-white left-1/2 -translate-x-1/2 -translate-y-1/2  opacity-0 group-hover:opacity-100 transition ease-in-out duration-250 w-full">
            Кружка с текстом
          </p>
        </div>
        <div className="relative group rounded-3xl overflow-hidden">
          <Link
            href="/configure/upload"
            className="relative transition ease-in-out duration-250 group-hover:brightness-50"
          >
            <img src="/choose-image.jpg" alt="Выбрать кружку с изображением" />
          </Link>
          <p className="text-center absolute top-1/2 text-4xl text-white left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition ease-in-out duration-250 w-full">
            Кружка из фотографии
          </p>
        </div>
      </div>
    </section>
  );
};
