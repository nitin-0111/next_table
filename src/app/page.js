import { Button } from "@/components/ui/button";
import { RenderTable } from "@/components/Table/renderTable";
import { sampleData , getCategories, getSubcategories } from "@/components/Table/data/sample_data";

import { Columns } from "@/components/Table/subComponets/columns";
import { TablePagination } from "@/components/Table/subComponets/table_pagination";

export default function Home() {
  const category = getCategories();
 const data=sampleData;
 
  return (
    <>
      <div className="h-[cal(100vh-(h-20))]  flex items-center justify-center">
        <RenderTable columns={Columns} data={data} />

      </div>
    </>
  );
}
