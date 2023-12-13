import React from "react";
import { StackButton } from "@/app/components/stackButton";

export const StackButtonList: React.FC = () => {
  return (
    <div className="w-8/12 lg:w-9/12 my-16 text-center animate-fade-in flex flex-row justify-center md:justify-around flex-wrap">
      <StackButton color="bg-informaticsGreen" name="Javascript" />
      <StackButton color="bg-informaticsBlue" name="Typescript" />
      <StackButton color="bg-informaticsRed" name="ReactJS" />
      <StackButton color="bg-informaticsGreen" name="NextJS" />
      <StackButton color="bg-informaticsPurple" name="GatsbyJS" />
      <StackButton color="bg-informaticsGreen" name="NodeJS" />
      <StackButton color="bg-informaticsPink" name="C++" />
      <StackButton color="bg-informaticsTeal" name="Java" />
      <StackButton color="bg-informaticsGreen" name="PHP" />
      <StackButton color="bg-informaticsBlue" name="Spring-Boot" />
      <StackButton color="bg-informaticsRed" name="RestAPI" />
      <StackButton color="bg-informaticsGreen" name="CI/CD" />
      <StackButton color="bg-informaticsPurple" name="Jenkins" />
      <StackButton color="bg-informaticsBlue" name="Git" />
      <StackButton color="bg-informaticsGreen" name="Docker" />
      <StackButton color="bg-informaticsTeal" name="Kubernetes" />
      <StackButton color="bg-informaticsRed" name="Linux-Server" />
      <StackButton color="bg-informaticsPink" name="Scrum" />
    </div>
  );
};
