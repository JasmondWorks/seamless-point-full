"use client"; // Ensures everything in this file is client-side safe

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/app/_components/ui/checkbox";
import Badge, { BadgeVariant } from "@/app/_components/Badge";
import Image from "next/image";
import CopyToClipboard from "@/app/_components/CopyToClipboard";
import ConfirmDialog from "@/app/_components/Dialogs/ConfirmDialog2";
import { useState } from "react";
import SuccessDialog from "@/app/_components/Dialogs/SuccessDialog";
import { formatDateTime } from "@/app/_lib/utils";

// Define your delivery type
export type Delivery = {
  trackingNumber: string;
  amount: number;
  receiver: string;
  destination: string;
  date: Date;
  status: string;
  dispatch: string;
};

// Define the columns
export const getDeliveriesColumns = (
  handleCancelDelivery: (trackingNumber: string) => void
): ColumnDef<Delivery>[] => {
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false); // State for success dialog

  const handleCancelAndShowSuccess = async (trackingNumber: string) => {
    try {
      handleCancelDelivery(trackingNumber); // Call the cancel handler
      setIsSuccessDialogOpen(true); // Open success dialog
    } catch (error) {
      console.error("Error cancelling delivery:", error);
    }
  };

  return [
    // SELECT ALL
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
      cell: ({ row, table }) => {
        const status = row.original.status; // Access 'status' directly from the row data

        if (status === "ongoing")
          return (
            <>
              <ConfirmDialog
                onConfirm={() =>
                  // handleCancelDelivery(row.original.trackingNumber)
                  handleCancelAndShowSuccess(row.original.trackingNumber)
                }
                title="Cancel delivery"
                description="Are you sure you want to cancel this delivery? This action cannot be undone."
                triggerEl={
                  <button>
                    <svg
                      width={12}
                      height={10}
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 0H0V2C0.353622 2 0.692761 2.14048 0.942809 2.39052C1.19286 2.64057 1.33333 2.97971 1.33333 3.33333V6C1.33333 7.88533 1.33333 8.82867 1.91933 9.414C2.50467 10 3.448 10 5.33333 10H6.66667C8.55267 10 9.49533 10 10.0807 9.414C10.6673 8.82867 10.6673 7.88533 10.6673 6V3.33333C10.6673 2.97971 10.8078 2.64057 11.0579 2.39052C11.3079 2.14048 11.647 2 12.0007 2L12 0ZM5 3.33333C5 3.15652 4.92976 2.98695 4.80474 2.86193C4.67971 2.7369 4.51014 2.66667 4.33333 2.66667C4.15652 2.66667 3.98695 2.7369 3.86193 2.86193C3.7369 2.98695 3.66667 3.15652 3.66667 3.33333V6.66667C3.66667 6.84348 3.7369 7.01305 3.86193 7.13807C3.98695 7.2631 4.15652 7.33333 4.33333 7.33333C4.51014 7.33333 4.67971 7.2631 4.80474 7.13807C4.92976 7.01305 5 6.84348 5 6.66667V3.33333ZM8.33333 3.33333C8.33333 3.15652 8.2631 2.98695 8.13807 2.86193C8.01305 2.7369 7.84348 2.66667 7.66667 2.66667C7.48986 2.66667 7.32029 2.7369 7.19526 2.86193C7.07024 2.98695 7 3.15652 7 3.33333V6.66667C7 6.84348 7.07024 7.01305 7.19526 7.13807C7.32029 7.2631 7.48986 7.33333 7.66667 7.33333C7.84348 7.33333 8.01305 7.2631 8.13807 7.13807C8.2631 7.01305 8.33333 6.84348 8.33333 6.66667V3.33333Z"
                        fill="#C00505"
                      />
                    </svg>
                  </button>
                }
              />
              {/* Success Dialog */}
              <SuccessDialog
                isOpen={isSuccessDialogOpen}
                onOpenChange={setIsSuccessDialogOpen}
              />
            </>
          );

        return (
          <Checkbox
            checked={row.getIsSelected()}
            indeterminate={row.getIsSomeSelected?.()} // Optional, if partial selection applies
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label={`Select row ${row.id}`} // Accessible label for the checkbox
          />
        );
      },
      enableSorting: false,
      enableHiding: false,
    },
    // AMOUNT
    {
      id: "amountStatus", // Custom ID for the combined column
      header: () => <div className="text-center">AMOUNT</div>,
      cell: ({ row }) => {
        const amount = row.original.amount; // Access 'amount' directly from the row data
        const status = row.original.status; // Access 'status' directly from the row data

        // Format the amount as currency
        const formattedAmount = new Intl.NumberFormat("en-NG", {
          style: "currency",
          currency: "NGN",
        }).format(amount);

        // Determine badge based on status
        const statusBadge = (() => {
          switch (status) {
            case "ongoing":
              return <Badge variant={BadgeVariant.neutralDark}>Ongoing</Badge>;
            case "completed":
              return <Badge variant={BadgeVariant.blue}>Completed</Badge>;
            case "uncompleted":
              return <Badge variant={BadgeVariant.orange}>Uncompleted</Badge>;
            case "cancelled":
              return <Badge variant={BadgeVariant.red}>Cancelled</Badge>;
            case "failed":
              return <Badge variant={BadgeVariant.red}>Failed</Badge>;
            default:
              return <Badge variant={BadgeVariant.red}>Unknown status</Badge>;
          }
        })();

        return (
          <div className="flex items-center gap-10">
            <span className="font-medium">{formattedAmount}</span>
            {statusBadge}
          </div>
        );
      },
    },
    // TRACKING NUM
    {
      accessorKey: "trackingNumber",
      header: "TRACKING NUMBER",
      cell: ({ row }) => {
        const trackingNumber = row.getValue("trackingNumber");
        return (
          <div className="flex gap-2 items-center">
            <span>{trackingNumber}</span>
            <CopyToClipboard text={trackingNumber} />
          </div>
        );
      },
    },
    // DISPATCH
    {
      accessorKey: "dispatch",
      header: "DISPATCH",
      cell: ({ row }) => (
        <Image
          className="w-7 object-contain mx-auto"
          src={`/assets/images/${row.getValue("dispatch")}`}
          alt="dispatch"
          width={100}
          height={100}
        />
      ),
    },
    // RECEIVER
    {
      accessorKey: "receiver",
      header: "RECEIVER",
      cell: ({ row }) => <span>{row.getValue("receiver")}</span>,
    },
    // DESTINATION
    {
      accessorKey: "destination",
      header: "DESTINATION",
      cell: ({ row }) => <span>{row.getValue("destination")}</span>,
    },
    // DATE
    {
      accessorKey: "date",
      header: "DATE",
      cell: ({ row }) => {
        return <span>{formatDateTime(row.getValue("date"))}</span>;
      },
    },
  ];
};
