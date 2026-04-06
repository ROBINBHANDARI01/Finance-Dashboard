import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
export default function Transaction({ data }) {
  const columns = [
    { header: "Date", accessorKey: "date" },
    { header: "Description", accessorKey: "description" },
    { header: "Category", accessorKey: "category" },
    { header: "Type", accessorKey: "type" },
    { header: "Amount", accessorKey: "amount" },
    { header: "Status", accessorKey: "status" },
  ];

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div class="p-5 rounded-2xl bg-(--surface) border border-(--border)">
        <div class="mb-4">
          <h2 class="text-sm text-(--text-primary) font-bold">
            Recent Transactions
          </h2>
          <p class="text-xs text-(--text-secondary)">
            Overview of your latest transactions
          </p>
        </div>
        <div class="overflow-x-auto">
        <table class="w-full min-w-150">
          <thead class="bg-(--surface-2) rounded-2xl ">
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((h) => (
                  <th
                    class="font-normal text-sm p-1.5 text-(--text-secondary)"
                    key={h.id}
                  >
                    {h.column.columnDef.header}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getCoreRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td class="text-xs p-2.5 px-3 font-normal" key={cell.id}>
                    {cell.getValue()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
}
