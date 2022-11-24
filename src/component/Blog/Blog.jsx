import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <ul className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-10  0">
      <li>
        <article>
          <Link
            rel="noopener noreferrer"
            to="#"
            className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:bg-gray-100"
          >
            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
              What are the different ways to manage a state in a React
              application?
            </h3>
            <time className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400">
              Nov 24, 2022
            </time>
            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
              The Four Kinds of React State to Manage When we talk about state
              in our applications, it’s important to be clear about what types
              of state actually matter. There are four main types of state you
              need to properly manage in your React apps: 1.Local state 2.Global
              state 3.Server state 4.URL state
            </p>
          </Link>
        </article>
      </li>
      <li>
        <article>
          <Link
            rel="noopener noreferrer"
            to="#"
            className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:bg-gray-100"
          >
            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
              How does prototypical inheritance work?
            </h3>
            <time className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400">
              Nov 24, 2022
            </time>
            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object.
            </p>
          </Link>
        </article>
      </li>
      <li>
        <article>
          <Link
            rel="noopener noreferrer"
            to="#"
            className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:bg-gray-100"
          >
            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
              What is a unit test? Why should we write unit tests?
            </h3>
            <time className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400">
              Nov 24, 2022
            </time>
            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
              Unit Testing is a type of software testing where individual units
              or components of a software are tested. The purpose is to validate
              that each unit of the software code performs as expected. Unit
              Testing is done during the development (coding phase) of an
              application by the developers. Unit Tests isolate a section of
              code and verify its correctness. A unit may be an individual
              function, method, procedure, module, or object. <br /> <br />
              Well-written unit tests act as documentation for your code. Any
              developer can quickly look at your tests and know the purpose of
              your functions. It simplifies the debugging process. Unit testing
              is an integral part of extreme programming.
            </p>
          </Link>
        </article>
      </li>
      <li>
        <article>
          <Link
            rel="noopener noreferrer"
            to="#"
            className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:bg-gray-100"
          >
            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
              React vs. Angular vs. Vue?
            </h3>
            <time className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400">
              Nov 24, 2022
            </time>
            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
              Vue provides higher customizability and hence is easier to learn
              than Angular or React. Further, Vue has an overlap with Angular
              and React with respect to their functionality like the use of
              components. Hence, the transition to Vue from either of the two is
              an easy option.
            </p>
          </Link>
        </article>
      </li>
    </ul>
  );
};

export default Blog;
