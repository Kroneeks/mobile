import Cup from "@/components/Cup";
import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  CheckCheck,
  CheckCheckIcon,
  CheckCircle,
  CheckIcon,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="/dog-1.png" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Ваше изображение на{" "}
                <span className="bg-orange-500 px-2 text-white">
                  индивидуальной
                </span>{" "}
                кружке или бокале
              </h1>
              <p className="mt-8 text-2xl lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Сохраните любимые воспоминания на своей{" "}
                <span className="font-semibold">уникальной</span> кружке.
              </p>

              <ul className="mt-8 text-2xl space-y-2 text-left font-medium flex flex-cold items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-orange-500" />
                    Высококачественные материалы
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-orange-500" />1
                    месяц гарантии
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-orange-500" />
                    Большое разнообразие кружек и бокалов
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user image"
                  />
                  <img
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                    alt="user image"
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                    <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                    <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                    <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                    <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                  </div>

                  <p>
                    <span className="font-semibold">135</span> довольных
                    клиентов
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <img
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Cup className="w-128" imgSrc="/testimonials/7.png" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {false ? (
        <section className="py-24 flex justify-center text-center">
          <div className="flex flex-col">
            <h3 className="text-xl pb-4 flex gap-2 justify-center items-center">
              donezsvetlana{" "}
              <span className="size-5 rounded-full flex flex-row items-center justify-center bg-pink-500">
                <CheckIcon className="text-white size-4" />
              </span>
            </h3>
            <div className="w-40 h-40 rounded-full overflow-hidden p-1 bg-gradient-to-br from-amber-500 to-pink-500 ">
              <img
                src="/avatar.jpg"
                className="rounded-full border-4 border-white"
              />
            </div>
            <h2 className="text-3xl my-6 font-bold">Svetlana Donets</h2>
            <p className="text-xl opacity-50">Designer</p>
            <p className="text-xl">contact: doneze@tut.by</p>
          </div>
        </section>
      ) : null}

      {/*  value proposition section */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-14 sm:gap-12">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-cetner text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              Что говорят наши
              <span className="relative px-2">
                клиенты
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-orange-400" />
              </span>{" "}
            </h2>
            <img src="/dog-2.png" className="w-32 order-0 lg:order-2" />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-orange-500 fill-orange-500" />
                <Star className="h-5 w-5 text-orange-500 fill-orange-500" />
                <Star className="h-5 w-5 text-orange-500 fill-orange-500" />
                <Star className="h-5 w-5 text-orange-500 fill-orange-500" />
                <Star className="h-5 w-5 text-orange-500 fill-orange-500" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot; Рисунок кажется прочным, и я даже получил комплимент по
                  поводу дизайна. Пользуюсь кружкой уже два месяца, и
                  изображение на ней&nbsp;
                  <span className="p-0.5 bg-slate-800 text-white">
                    осталось четким
                  </span>
                  . Обожаю ее. &quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-1.png"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Валентин</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-orange-500" />
                    <p className="text-sm">Подтвержденный отзыв</p>
                  </div>
                </div>
              </div>
            </div>

            {/* second comment */}
            <div className="flex flex-auto flex-col gap-4">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-orange-500 fill-orange-500" />
                <Star className="h-5 w-5 text-orange-500 fill-orange-500" />
                <Star className="h-5 w-5 text-orange-500 fill-orange-500" />
                <Star className="h-5 w-5 text-orange-500 fill-orange-500" />
                <Star className="h-5 w-5 text-orange-500 fill-orange-500" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot; Обычно я мою кружки в посудомойчной машине и это
                  приводило к потускнению изображений. На этой мое изобржение
                  продолжает постоянно меня радовать. Пользуюсь уже{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    больше года
                  </span>{" "}
                  и остался полностью доволен. &quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-4.jpg"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Андрей</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-orange-500" />
                    <p className="text-sm">Подтвержденный отзыв</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-4xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-cetner text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                Отправьте нам свой арт и мы{" "}
                <span className="relative px-2 bg-orange-500 text-white">
                  перенесем его на кружку
                </span>{" "}
              </h2>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img
                src="/arrow.png"
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
              />

              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img
                  src="/anime.jfif"
                  className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                />
              </div>

              <Cup className="w-96" imgSrc="/anime_cup.png" />
            </div>
          </div>

          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <Check className="h-5 w-5 text-orange-500 inline mr-1.5" />
              Высокое качество материалов
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-orange-500 inline mr-1.5" />
              Устойчивость к мойке в посудомоечной машине
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-orange-500 inline mr-1.5" />1 месяц
              гарантии на работу
            </li>

            {!process.env.DEVELOP_MODE ? (
              <div className="flex justify-center">
                <Link
                  className={buttonVariants({
                    size: "lg",
                    className: "mx-auto mt-8",
                  })}
                  href="/configure/upload"
                >
                  Создайте кружку прямо сейчас
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </Link>
              </div>
            ) : null}
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
