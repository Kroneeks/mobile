"use client";

import Phone from "@/components/Phone";
import { Button } from "@/components/ui/button";
import { BASE_PRICE, PRODUCT_PRICES } from "@/config/products";
import { cn, formatPrice } from "@/lib/utils";
import { COLORS, MODELS } from "@/validators/option-validator";
import { Configuration } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";
import { createCheckoutSession } from "./actions";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import LoginModal from "@/components/LoginModal";
import { Field, Input, Label } from "@headlessui/react";
import PhoneInput from "@/components/phone-input";

const DesignPreview = ({ configuration }: { configuration: Configuration }) => {
  const router = useRouter();
  const { toast } = useToast();
  const { id } = configuration;
  const { user } = useKindeBrowserClient();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  useEffect(() => {
    setUserName(user?.given_name || "");
  }, [user]);

  const { color, model, finish, material } = configuration;
  const tw = COLORS.find(
    (supportedColor) => supportedColor.value === color
  )?.tw;

  const { label: modelLabel } = MODELS.options.find(
    ({ value }) => value === model
  )!;

  let totalPrice = BASE_PRICE;
  if (material === "multicolor")
    totalPrice += PRODUCT_PRICES.material.multicolor;
  if (finish === "textured") totalPrice += PRODUCT_PRICES.finish.textured;

  const { mutate: createOrderSession } = useMutation({
    mutationKey: ["get-order-session"],
    mutationFn: createCheckoutSession,
    onSuccess: ({ url }) => {
      if (url) router.push(url);
      else throw new Error("Unable to retrieve payment URL.");
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "There was an error on our end. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleCheckout = () => {
    if (user) {
      // create payment session
      createOrderSession({ id });
    } else {
      // need to log in
      localStorage.setItem("configurationId", id);
      setIsLoginModalOpen(true);
    }
  };

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center"
      >
        <Confetti
          active={showConfetti}
          config={{ elementCount: 200, spread: 90 }}
        />
      </div>

      <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />

      <article className="bg-gray-100 px-10 py-5 rounded-3xl w-fit mt-10 relative left-1/2 -translate-x-1/2">
        <form className="flex flex-col items-center gap-2">
          <Field className="flex flex-col w-fit min-w-56">
            <Label className="text-gray-500">Эл.почта</Label>
            <Input
              name="full_name"
              value={user?.email || ""}
              disabled
              className="py-2 px-4 rounded-lg"
            />
          </Field>
          <Field className="flex flex-col w-fit min-w-56">
            <Label className="text-gray-500">Имя</Label>
            <Input
              name="full_name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="p-2 rounded-lg"
            />
          </Field>
          <Field className="flex flex-col w-fit min-w-56">
            <Label className="text-gray-500">Номер телефона</Label>
            <Input
              name="full_name"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-2 rounded-lg"
            />
          </Field>
          <PhoneInput
            country={"by"}
            onlyCountries={["by"]}
            countryCodeEditable={false}
          />
        </form>

        <div className="mt-6 flex justify-center">
          <Button
            onClick={() => handleCheckout()}
            className="px-4 sm:px-6 lg:px-8"
          >
            Отправить
          </Button>
        </div>
        <span className="inline-block max-w-72 leading-5 text-center mt-2 text-gray-500">
          Нажимая на кнопку, вы соглашаетесь
          <br />
          на обработку ваших персональных данных
        </span>
      </article>
    </>
  );
};

export default DesignPreview;
