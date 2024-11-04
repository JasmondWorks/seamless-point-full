"use client"; // Ensures everything in this file is client-side safe

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { CopyIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import Badge, { BadgeVariant } from "@/components/Badge";

// Define your delivery type
type Delivery = {
  trackingNumber: string;
  amount: number;
  receiver: string;
  destination: string;
  date: Date;
  status: string;
};

// Define the columns
export const deliveriesColumns: ColumnDef<Delivery>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        indeterminate={table.getIsSomePageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "amount",
    header: () => <div>Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a currency
      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(amount);

      return (
        <div className="text-right font-medium flex gap-5">
          <span>{formatted}</span>
          <Badge variant={BadgeVariant.blue}>Ongoing</Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "trackingNumber",
    header: "TRACKING NUMBER",
    cell: ({ row }) => (
      <div className="flex gap-2 items-center">
        <span>{row.getValue("trackingNumber")}</span>
        <CopyIcon className="text-2xl" />
      </div>
    ),
  },
  {
    accessorKey: "receiver",
    header: "RECEIVER",
    cell: ({ row }) => <span>{row.getValue("receiver")}</span>,
  },
  {
    accessorKey: "destination",
    header: "DESTINATION",
    cell: ({ row }) => <span>{row.getValue("destination")}</span>,
  },
  {
    accessorKey: "date",
    header: "DATE",
    cell: ({ row }) => {
      const isoDate = row.getValue("date");
      const date = new Date(isoDate);

      // Extract parts of the date and time
      const year = date.getFullYear();
      const month = date.toLocaleString("en-US", { month: "short" });
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12; // Convert to 12-hour format

      const readableDateTime = `${month} ${day}, ${year}, ${formattedHours}:${minutes} ${ampm}`;

      return (
        <span>
          {month} {day}, {formattedHours}:{minutes} {ampm}
        </span>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const delivery = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(delivery.trackingNumber)
              }
            >
              Copy tracking number
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View delivery details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
