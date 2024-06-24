import Image from "next/image";


export default function timelineEntry({ data }: { data: any }) {

  return (
    <div className="relative w-full">
      <div className="absolute z-10 -ml-2.5 h-5 w-5 rounded-full justify-center bg-blue-500">
        
      </div>
      <div className="ml-6">
        <h4 className="font-bold text-blue-500">{data.title} </h4>
        <p className="mt-2 max-w-screen-sm text-sm text-gray-500">{data.description}</p>
        <span className="mt-1 block text-sm font-semibold text-blue-500">{data.startDate + " - " + data.endDate}</span>
      </div>
    </div>
  );
}
