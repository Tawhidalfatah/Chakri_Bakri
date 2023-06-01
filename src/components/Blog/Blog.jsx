import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="background h-64 flex items-center justify-center">
        <h1 className="text-3xl font-bold">Blog</h1>
      </div>
      <div className="mockup-code w-11/12 mx-auto mt-28 text-left">
        <pre data-prefix="$" className="text-warning">
          <code>When should you use context API?</code>
        </pre>

        <pre data-prefix=">" className="text-success">
          <code>
            When we have too much prop drilling to do because there are many
            components to drill. Context api allows us to send data each
            components sending data only once
          </code>
        </pre>
        <pre data-prefix="$" className="text-warning">
          <code>What is a custom hook?</code>
        </pre>

        <pre data-prefix=">" className="text-success">
          <code>
            Custom Hook is a reusable function in React by which we can add
            unique functionality to a code by reusing it again and again.{" "}
          </code>
        </pre>
        <pre data-prefix="$" className="text-warning">
          <code>What is useRef?</code>
        </pre>

        <pre data-prefix=">" className="text-success">
          <code>
            useRef hooks works like useState except useRef accepts one arguement
            as the initial value returns a reference and updating reference does
            not trigger a componene rerendering
          </code>
        </pre>
        <pre data-prefix="$" className=" text-warning">
          <code>What is useMemo?</code>
        </pre>

        <pre data-prefix=">" className="text-success">
          <code>
            useMemo is similar to useRef, except useMemo is a function that
            returns a memorized value of passed in resource-intensive function.
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Blog;
