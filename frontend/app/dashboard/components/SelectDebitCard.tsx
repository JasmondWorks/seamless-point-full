import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import DebitCard from "./DebitCard";
import { PlusCircledIcon } from "@radix-ui/react-icons";

export default function SelectDebitCard() {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center py-3 border-b border-neutral-200">
        <span>Debit card</span>
        <PlusCircledIcon className="text-brandSec text-2xl" />
      </div>
      <div className="flex gap-5 flex-wrap">
        <DebitCard />
        <DebitCard />
        <DebitCard />
      </div>
    </div>
  );
}
