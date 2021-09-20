import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
//import { resume } from "../data";
import { Document, Page } from 'react-pdf';

export default function Resume() {
  return (
    <section id="resume">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Resume
        </h1>
        <Document file="william_Berry_Resume.pdf">
          <Page />
        </Document>
        
      </div>
    </section>
  );
}