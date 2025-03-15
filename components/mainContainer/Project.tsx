import { ProjectData } from "@/data/UserData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Project() {
  return (
    <div>
      <h4 className="text-4xl font-bold text-primary">Projects</h4>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-8">
        {ProjectData.map((list) => (
          <div
            key={list.id}
            className="border-1 border-gray-200 rounded-lg overflow-hidden shadow-2xl col-span-1 lg:col-span-6"
          >
            <Link href={list?.link} target="_blank">
              <Image
                src={list.coverImage}
                alt={list.title}
                height={300}
                width={300}
                className="w-full"
              />
              <div className="p-4">
                <p className="text-primary font-semibold text-lg">
                  {list.title}
                </p>
                <p className="text-gray-400">Category: {list.category}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <p className="text-primary  text-2xl font-bold mt-16">Other Projects:</p>
      <p className="p-2 bg-red-200 text-red-700 text-sm rounded my-5">
        Unable to share other projects link due to client privacy and policy.
      </p>
      <ul className="list-disc px-8">
        <li>Timecard App</li>
        <li>Learning Management System</li>
        <li>Performance Evaluation</li>
        <li>Invoice Management System</li>
        <li>Hotel Management System</li>
      </ul>
    </div>
  );
}
