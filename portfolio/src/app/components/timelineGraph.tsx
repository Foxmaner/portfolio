import Image from "next/image";
import TimelineEntry from "./timelineEntry";

export default function timelineGraph({ data }: { data: any }) {
    
  return (
    
    <div className="space-y-6 border-l-2 border-dashed border-black">
    {data.map((item:any, index:any) => (
        <TimelineEntry key={index} data={item} />
    ))}
    </div>
    
  );
}
