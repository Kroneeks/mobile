import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { toast, useToast } from "./ui/use-toast";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <nav className="font-ptSansNarrow sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backgrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold text-xl">
            florist<span className="text-orange-500">by</span>
          </Link>

          <div className="h-full flex items-center space-x-4 text-xl">
            {user ? (
              <>
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({
                    size: "lg",
                    variant: "ghost",
                  })}
                >
                  Выход
                </Link>
                {isAdmin ? (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      size: "lg",
                      variant: "ghost",
                    })}
                  >
                    Панель администратора ✨
                  </Link>
                ) : null}
                <Link
                  href="/configuretext/design"
                  className={buttonVariants({
                    size: "lg",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Создать кружку с именем
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "hidden sm:flex items-center gap-1 cursor-default opacity-70",
                  })}
                >
                  Создать кружку
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({
                    size: "lg",
                    variant: "ghost",
                  })}
                >
                  Регистрация
                </Link>
                <Link
                  href="/api/auth/login"
                  className={buttonVariants({
                    size: "lg",
                    variant: "ghost",
                  })}
                >
                  Логин
                </Link>

                {!process.env.DEVELOP_MODE ? (
                  <>
                    <div className="h-8 w-px bg-zinc-200 hidden sm:block"></div>
                    <Link
                      href="/configure/upload"
                      className={buttonVariants({
                        size: "lg",
                        className: "hidden sm:flex items-center gap-1",
                      })}
                    >
                      Создать кружку
                      <ArrowRight className="ml-1.5 h-5 w-5" />
                    </Link>
                  </>
                ) : null}
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
