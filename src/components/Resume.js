import React,{ useState } from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { resume } from "../data";

export default function Resume() {
  const [embedURL]=useState("https://docs.google.com/document/d/1KWYIXSUOo9A_OHDwrsFm8bZOtl-tO40LBkWxCkmX1J0/edit?usp=sharing");
  return (
    <section id="resume">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Resume
        </h1>
        <div className="flex flex-wrap m-4">
        <iframe src={embedURL} width="100%" height="900px" allow="autoplay"></iframe>
        </div>
      </div>
    </section>
  );
}