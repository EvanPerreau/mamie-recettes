"use client";

import Counter from "@/app/components/counter";
import AddButton from "@/app/components/add_button";
import CustomTextInput from "@/app/components/custom/custom_text_input";
import CustomPasswordInput from "@/app/components/custom/custom_password_input";

export default function Page() {
  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12">
      <h1 className={"text-4xl lg:text-5xl text-center p-6"}>
        Welcome to the website of the best grand mother ever
      </h1>
      <form className={"flex flex-col gap-6 items-center"}>
        <CustomPasswordInput />
        <button className={"btn w-2/3"} type="submit">
          Connect
        </button>
      </form>
    </main>
  );
}
