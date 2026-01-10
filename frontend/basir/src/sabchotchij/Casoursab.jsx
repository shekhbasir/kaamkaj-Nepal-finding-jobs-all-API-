import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function Casoursab() {
  const sabjobs = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "MEAN Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Mobile App Developer",
    "Android Developer",
    "iOS Developer",
    "React Developer",
    "Angular Developer",
    "Vue Developer",
    "Node.js Developer",
    "Java Developer",
    "Python Developer",
    "PHP Developer",
    ".NET Developer",
    "Data Scientist",
    "Data Analyst",
    "Data Engineer",
    "Machine Learning Engineer",
    "AI Engineer",
    "Deep Learning Engineer",
    "Cloud Engineer",
    "AWS Engineer",
    "DevOps Engineer",
    "Site Reliability Engineer (SRE)",
    "Cyber Security Analyst",
    "Ethical Hacker",
    "Penetration Tester",
    "Network Engineer",
    "System Administrator",
    "Database Administrator (DBA)",
    "Blockchain Developer",
    "Web3 Developer",
    "Game Developer",
    "AR/VR Developer",
    "Embedded Systems Engineer",
    "IoT Engineer",
    "QA Engineer",
    "Software Tester",
    "Automation Tester",
    "UI Developer",
    "UX Engineer",
    "Technical Architect",
    "IT Support Engineer",
    "Technical Consultant",
    "API Developer",
    "Low-Code / No-Code Developer",
  ];

  return (
    <div className="w-full flex justify-center">
      <Carousel
        className="w-full max-w-4xl cursor-pointer"
        plugins={[
          Autoplay({
            delay: 1000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselPrevious className="-left-8 h-5 w-5 cursor-pointer" />

        <CarouselContent className="gap-2">
          {sabjobs.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/7 cursor-pointer text-[50px]"
            >
              <Card className="bg-gray-300 rounded-md font-medium shadow-md text-[100px]">
                <CardContent className="flex items-center justify-center text-[80px] h-2 px-2 cursor-pointer">
                  <span className="text-xs font-medium text-gray-800">
                    {item}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext className="-right-8 h-7 w-7" />
      </Carousel>
    </div>
  );
}

export default Casoursab;
