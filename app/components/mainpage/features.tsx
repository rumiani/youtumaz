import React from "react";
import { IoSettings } from "react-icons/io5";

const features = [
  {
    title: "Video Upload",
    description:
      "Creators can upload their videos to the platform for analysis.",
    icon: <IoSettings />,
  },
  {
    title: "Analytics Dashboard",
    description:
      "A dashboard providing comprehensive insights into video performance metrics, including views, engagement, retention, and audience demographics.",
    icon: <IoSettings />,
  },
  {
    title: "Keyword Analysis",
    description:
      "Tools for analyzing video titles, descriptions, and tags to optimize search engine visibility and discoverability.",
    icon: <IoSettings />,
  },
  {
    title: "Engagement Metrics",
    description:
      "Metrics tracking audience engagement, such as likes, comments, shares, and watch time.",
    icon: <IoSettings />,
  },
  {
    title: "Audience Demographics",
    description:
      "Audience Demographics: Insights into the demographics of the audience, including age, gender, location, and interests.",
    icon: <IoSettings />,
  },
  {
    title: "Competitor Analysis",
    description:
      "Comparison tools to benchmark video performance against competitors and identify opportunities for improvement.",
    icon: <IoSettings />,
  },
  {
    title: "Recommendations and Tips",
    description:
      "Personalized recommendations and tips based on data analysis to help creators enhance their video content strategy.",
    icon: <IoSettings />,
  },
];
export default function Features() {
  return (
    <div>
      <div className="mt-16 md:mt-0">
        <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
          Everything you need to Analyze your channel
        </h2>
        <p className="text-lg mt-4 text-slate-600">
          YouTuMaz helps you to grow faster and save time and money.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
        {features.map((item, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="mt-1 rounded-full  p-2 w-10 h-10 shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>{" "}
              <p className="text-slate-500 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
