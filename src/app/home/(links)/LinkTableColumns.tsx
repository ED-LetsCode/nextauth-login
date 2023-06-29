"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export type LinkRowType = {
  id: number;
  category: string;
  description: string;
  link: string;
};

export const LinkTableColumns: ColumnDef<LinkRowType>[] = [
  {
    accessorKey: "category",
    header: () => <div className="font-bold text-black">Category</div>,
    cell: ({ row }) => {
      return <Link href={row.original.link}>{row.original.category}</Link>;
    },
  },
  {
    accessorKey: "description",
    header: () => <div className="font-bold text-black">Description</div>,
    cell: ({ row }) => {
      return <Link href={row.original.link}>{row.original.description}</Link>;
    },
  },
];
