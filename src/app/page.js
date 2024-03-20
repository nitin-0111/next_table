import { Button } from "@/components/ui/button";
import { RenderTable } from "@/components/Table/renderTable";
import { sampleData } from "@/components/Table/data/sample_data";
import { columns } from "@/components/Table/subComponets/columns";

export default function Home() {
   const data=sampleData;
  return (
    <>
     
      <RenderTable  columns={columns} data={data}/>
    </>
  );
}
