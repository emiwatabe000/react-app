import React from "react";
import { Pagination, PaginationProps } from "@mui/material";

export function CustomPagination({ ...props }: PaginationProps) {
  return <Pagination {...props} />;
}
