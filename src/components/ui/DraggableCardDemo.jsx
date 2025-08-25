import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Logic Theorist-First AI",
      image:
        "https://plus.unsplash.com/premium_photo-1681400630646-6df4b294bfea?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "WABOT-1-First Humanoid Robot",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
   {
  title: "Deep Blue – AI beats Chess Champion",
  image:
    "https://store-images.s-microsoft.com/image/apps.35954.13911592414332901.a6f13932-b416-4512-8b68-2d570ffcb4cd.f3df0310-2cff-4049-bc96-1212de10bc56?mode=scale&q=90&h=1080&w=1920",
  className: "absolute top-16 left-[15%] rotate-[6deg]",
},
{
  title: "Boston Dynamics Robotics Revolution - SPOT",
  image:
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/abdc96132617537.61aeff6bdf058.jpg",
  className: "absolute top-44 left-[50%] rotate-[-5deg]",
},
{
  title: "Silicon Valley",
  image:
    "https://wallpaperaccess.com/full/1754709.jpg",
  className: "absolute top-28 right-[28%] rotate-[3deg]",
},
{
  title: "Enrollment Boost +999HP",
  image:
    "https://cdnb.artstation.com/p/assets/images/images/022/491/749/large/konstantin-andreev-.jpg?1575615525",
  className: "absolute top-12 right-[40%] rotate-[-8deg]",
},
{
  title: "Future Labs – V-EDU AI Campus",
  image:
    "https://images.unsplash.com/photo-1728632286888-04c64f48e506?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  className: "absolute top-36 left-[60%] rotate-[7deg]",
},
  ];
  return (
    <DraggableCardContainer
      className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p
        className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black bg-gradient-to-r from-sky-300 via-blue-500 to-blue-900 bg-clip-text text-transparent md:text-4xl dark:from-sky-400 dark:via-blue-600 dark:to-blue-900">
        Still shuffling tech cards? Go connect with us on other platforms and level up with V-EDU!
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover" />
          <h3
            className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
