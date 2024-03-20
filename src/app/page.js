import { Button } from "@/components/ui/button";
import { RenderTable } from "@/components/Table/renderTable";
import { sampleData } from "@/components/Table/data/sample_data";
import { columns } from "@/components/Table/subComponets/columns";
import { TablePagination } from "@/components/Table/subComponets/table_pagination";

export default function Home() {
   const data=sampleData;
  return (
    <>
     <div className="h-[cal(100vh-(h-20))]  flex items-center justify-center">
      <RenderTable  columns={columns} data={data}/>
      
      </div>
    </>
  );
}
