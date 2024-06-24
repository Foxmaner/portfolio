import Image from "next/image";


export default function timelineEntry({data}: {data: any}) {
    
  return (
    <li className="">
        {data.startDate} - {data.endDate}
        <h1>{data.title}</h1>
        <p>{data.description}</p>
    </li>
  );
}
