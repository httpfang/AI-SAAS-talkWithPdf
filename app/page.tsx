import { Button } from "@/components/ui/button";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    name: "store your pdf doc",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quasi laudantium culpa debitis eum explicabo numquam esse magni dolore est?",
    Icon: GlobeIcon
  },
  {
    name: "store your pdf doc",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quasi laudantium culpa debitis eum explicabo numquam esse magni dolore est?",
    Icon: GlobeIcon
  },
  {
    name: "store your pdf doc",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quasi laudantium culpa debitis eum explicabo numquam esse magni dolore est?",
    Icon: GlobeIcon
  },
  {
    name: "store your pdf doc",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quasi laudantium culpa debitis eum explicabo numquam esse magni dolore est?",
    Icon: GlobeIcon
  },
  {
    name: "store your pdf doc",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quasi laudantium culpa debitis eum explicabo numquam esse magni dolore est?",
    Icon: GlobeIcon
  }
];

export default function Home() {
  return (
    <main className="flex-1 bg-gradient-to-bl from-white to-indigo-600 overflow-scroll p-2 lg:p-5">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="capitalize text-base font-semibold leading-7 text-indigo-600">Your interactive Document companion</h2>
            <p className="capitalize mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">Transform your PDF into interactive conversations</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Introducing{" "}
              <span className="font-bold text-indigo-600 capitalize">Chat with PDF</span>
              <br />
              <br /> Upload your document, and our chatbot will answer questions, summarize content, and answer all your questions. Ideal for everyone, <span className="text-indigo-600"> 
                Chat with PDF 
                </span>{" "} 
                turns static documents into{" "}
                 <span className="font-bold">dynamic conversations</span>, 
                 enhancing productivity 10x fold effortlessly.
            </p>
          </div>

          <Button asChild className="mt-10">
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              alt="App screenshot"
              src="https://i.imgur.com/VciRSTI.jpeg"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]" />
            </div>
          </div>
        </div>
        <div>
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.Icon
                    aria-hidden="true"
                    className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
