import Image from "next/image";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
//https://www.flaticon.com/free-icons/programming-language
import { programming_icons } from "./utils/data"
import TimelineGraph from "./components/timelineGraph";


export default function Home() {
  var schoolData = [
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

  var experienceData = [
    {
      "startDate": "Aug-2019",
      "endDate": "Jul-2020",
      "title": "Postnord",
      "description": "Brevbärare"
    },
    {
      "startDate": "Jul-2017",
      "endDate": "Aug-2023",
      "title": "Glabo Gokart & Paintball",
      "description": "Instruktör"
    },
  ];

  return (
    <main className="flex min-h-screen flex-col  justify-between p-24">
      <h1 className="font-bold text-3xl">
        Eskil Brännerud
      </h1>
      <h2 className="text-2xl">
        Student i Mjukvaruteknik
      </h2>
      <p className=" text-1xl">
        Hej och välkommen till min hemsida! Mitt namn är Eskil och studerar nu
        4:e året som Civilingenjör i Mjukvaruteknik på Linköpings universitet.
      </p>


      <div className="flex">
        <h1 className="font-bold text-2xl">
          Jobb
        </h1>

      </div>
      <div className="border-t border-2 border-black w-1/5"></div>
      <TimelineGraph data={experienceData} />


      <div className="flex">
        <h1 className="font-bold text-2xl">
          Utbildning
        </h1>
      </div>
      <div className="border-t border-2 border-black w-1/5"></div>
      <TimelineGraph data={schoolData} />
    </main>
  );
}
