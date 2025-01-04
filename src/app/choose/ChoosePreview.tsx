import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const ChoosePreview = () => {
  return (
    <section className="mt-20">
      <div className="flex flex-row gap-4">
        <div>
          <Link
            href="/configuretext/design"
            className="transition ease-in-out duration-250 hover:brightness-75"
          >
            <img src="/choose-text.png" alt="Выбрать кружку с текстом" />
          </Link>
        </div>
        <div>
          <Link
            href="/configure/upload"
            className="transition ease-in-out duration-250 hover:brightness-75"
          >
            <img src="/choose-image.jpg" alt="Выбрать кружку с изображением" />
          </Link>
        </div>
      </div>
    </section>
  );
};
