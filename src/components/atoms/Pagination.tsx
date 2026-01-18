import React from "react";
import { Pagination, PaginationProps } from "@mui/material";

export function CustomPagination({count}: PaginationProps) {
  return <Pagination count={count} shape="rounded"/>;
}
