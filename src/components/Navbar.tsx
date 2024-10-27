import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

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
                  Sign out
                </Link>
                {isAdmin ? (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      size: "lg",
                      variant: "ghost",
                    })}
                  >
                    Dashboard ✨
                  </Link>
                ) : null}
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
            )}
            <div>
              <Button className="group active">
                <b>520 $</b>
                <span className="h-full w-[1px] bg-white/30 mx-3"></span>
                <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-5">
                  <ShoppingCart
                    size={16}
                    className="relative"
                    strokeWidth={2}
                  />
                  <b>3</b>
                </div>
                <ArrowRight
                  size={20}
                  className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                />
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
