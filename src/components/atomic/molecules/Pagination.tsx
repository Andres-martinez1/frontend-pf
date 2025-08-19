"use client";

import { Pagination } from "@heroui/react";

interface CustomPaginationProps {
  total: number;
  page: number;
  onChange: (page: number) => void;
  className?: string;
}

export default function CustomPagination({
  total,
  page,
  onChange,
  className = "",
}: CustomPaginationProps) {
  return (
    <Pagination
      total={total}
      page={page}
      onChange={onChange}
      className={className}
      classNames={{
        item: "bg-gray-200 border-1 border-gray-500 ", 
        cursor: "bg-[#1A1A36] text-white", 
      }}
    />
  );
}
