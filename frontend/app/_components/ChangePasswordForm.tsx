"use client";

import styles from "./ResetPasswordForm.module.css";

import ButtonFormSubmit from "@/app/_components/ButtonFormSubmit";
import CustomFormField, {
  FormFieldType,
} from "@/app/_components/CustomFormField";
import { changePasswordSchema } from "@/app/_lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Form } from "@/app/_components/ui/form";
import { useForm } from "react-hook-form";
import { FaChevronRight } from "react-icons/fa";
import Navbar from "@/app/_components/Navbar";
import Link from "next/link";
import toast from "react-hot-toast";
import { changeUserPassword } from "@/app/_lib/actions";
import { useUserAuth } from "../_contexts/UserAuthContext";
import { z } from "zod";
import Button, { ButtonVariant } from "@/app/_components/Button";
import Spinner from "@/app/_components/Spinner";

export default function ChangePasswordForm() {
  const { login } = useUserAuth();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currPassword: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { reset } = form;

  async function onSubmit(data: z.infer<typeof changePasswordSchema>) {
    const { currPassword, password, confirmPassword } = data;

    setIsLoading(true);
    const res = await changeUserPassword(
      currPassword,
      password,
      confirmPassword
    );

    if (res.status === "success") {
      toast.success(res.message);
      login(null, res.token);
    } else {
      toast.error(res.message);
    }
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="lg:grid space-y-5 lg:grid-cols-2 gap-5 lg:space-y-0">
          <CustomFormField
            className="col-span-2"
            label="Current password"
            name="currPassword"
            control={form.control}
            fieldType={FormFieldType.PASSWORD}
          />
          <CustomFormField
            label="New password"
            name="password"
            control={form.control}
            fieldType={FormFieldType.PASSWORD}
          />
          <CustomFormField
            label="Confirm new password"
            name="confirmPassword"
            control={form.control}
            fieldType={FormFieldType.PASSWORD}
          />
        </div>
        <Button
          disabled={isLoading}
          type="submit"
          variant={ButtonVariant.fill}
          text={
            isLoading ? (
              <span className="flex items-center gap-2">
                Saving{" "}
                <Spinner color="text" size="small" className="!w-5 !h-5" />
              </span>
            ) : (
              "Save"
            )
          }
          className="bg-customGreen text-white"
          isRoundedLarge
        />
      </form>
    </Form>
  );
}
