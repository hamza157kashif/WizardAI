import { MessageSquare, Music, ImageIcon, VideoIcon, Code } from "lucide-react";
import { Montserrat } from "next/font/google";

export const MAX_FREE_COUNTS = 5;
export const montserrat = Montserrat({ weight: "600", subsets: ["latin"]})

export const tools = [
    {
      label: "Conversation",
      icon: MessageSquare,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
      href: "/conversation"
    },
    {
      label: "Music Generation",
      icon: Music,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      href: "/music"
    },
    {
      label: "Image Generation",
      icon: ImageIcon,
      color: "text-pink-700",
      bgColor: "bg-pink-700/10",
      href: "/image"
    },
    {
      label: "Video Generation",
      icon: VideoIcon,
      color: "text-orange-700",
      bgColor: "bg-orange-700/10",
      href: "/video"
    },
    {
      label: "Code Generation",
      icon: Code,
      color: "text-green-700",
      bgColor: "bg-green-700/10",
      href: "/code"
    },
  ]

export const testimonials = [
  {
    id: 1,
    name: "Dawid",
    avatar: "D",
    title: "Staff Software Engineer",
    description: "Tool, that has helped me resolve my tasks of writing long emails and reviewing codes easy..."
  },
  {
    id: 3,
    name: "Alex",
    avatar: "A",
    title: "Senior Product Manager",
    description: "I've saved countless hours on project management tasks thanks to this tool. Its ability to streamline communication and code review is unparalleled."
  },
  {
    id: 4,
    name: "Maria",
    avatar: "M",
    title: "UX Designer",
    description: "The AI tool has significantly improved my workflow, especially in generating detailed user reports and enhancing design collaboration with developers."
  },
  {
    id: 5,
    name: "John",
    avatar: "J",
    title: "DevOps Engineer",
    description: "Automating routine tasks and improving the accuracy of code deployments has never been easier. This tool is an indispensable part of my daily work."
  },
  {
    id: 6,
    name: "Emily",
    avatar: "E",
    title: "Data Scientist",
    description: "From analyzing large datasets to automating model deployment, this AI tool has dramatically increased my productivity and the quality of my insights."
  },
]