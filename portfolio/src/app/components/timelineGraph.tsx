import Image from "next/image";
import TimelineEntry from "./timelineEntry";

export default function timelineGraph() {
    var data = [
        {
            "startDate": "Aug-2016",
            "endDate": "Jun-2019",
            "title": "Nacka Gymnasium",
            "description": "Tekniska programmet med inriktning Informations och medieteknik"
        },
        {
            "startDate": "Aug-2020",
            "endDate": "Jun-2021",
            "title": "Kungliga Tekniska Högskolan",
            "description": "Högskoleingenjör i datateknik (Slutförde ej)"
        },
        {
            "startDate": "Aug-2021",
            "endDate": "Currently studying",
            "title": "Kungliga Tekniska Högskolan",
            "description": "Civilingenjör i mjukvaruteknik"
        },
    ];
  return (
    
    <div className="space-y-6 border-l-2 border-dashed border-black">
    {data.map((item, index) => (
        <TimelineEntry key={index} data={item} />
    ))}
    </div>
    
  );
}
