import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "./ui/button";

interface PaginationProps {
  page: number;
  pages: number;
  totalCount: number;
  onPageChange: (page: number) => void;
}


export function Pagination({ page = 1, pages, totalCount, onPageChange }: PaginationProps) {

  return (
    (
      <div className="flex items-center justify-between">
        <span>Total of {totalCount} movies</span>
        <div className="flex items-center gap-6 lg:gap-8">
          <div className="text-sm font-medium">
            Page {page} of {pages}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="size-8 p-0" onClick={() => onPageChange(1)} disabled={page === 1}>
              <ChevronsLeft className="size-4" />
              <span className="sr-only">First page</span>
            </Button>
            <Button variant="outline" className="size-8 p-0" onClick={() => onPageChange(page - 1)} disabled={page === 1}>
              <ChevronLeft className="size-4" />
              <span className="sr-only">Previous page</span>
            </Button>
            <Button variant="outline" className="size-8 p-0" onClick={() => onPageChange(page + 1)} disabled={page === (pages)}>
              <ChevronRight className="size-4" />
              <span className="sr-only">Next page</span>
            </Button>
            <Button variant="outline" className="size-8 p-0" onClick={() => onPageChange(pages)} disabled={page === (pages)}>
              <ChevronsRight className="size-4" />
              <span className="sr-only">Last page</span>
            </Button>
          </div>
        </div>
      </div>
    )
  )
}
