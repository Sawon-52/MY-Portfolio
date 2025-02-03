import React from "react";

type propsType = {
  subtitle: string;
  maintitle: string;
};

const Title = (props: propsType) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 my-8">
        <div className="flex items-center gap-2">
          <div className=" lg:w-12 h-1 bg-gradient-to-r from-primary-color to-secondary-color "> </div>
          <h2 className="text-base font-medium">{props.subtitle}</h2>
          <div className=" lg:w-12 h-1 bg-gradient-to-l from-primary-color to-secondary-color "> </div>
        </div>

        <h1 className="text-5xl px-10 font-bold bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent">{props.maintitle}</h1>
      </div>
    </>
  );
};

export default Title;
