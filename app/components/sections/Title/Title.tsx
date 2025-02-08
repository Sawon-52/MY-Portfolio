import React from "react";

type propsType = {
  maintitle: string;
};

const Title = (props: propsType) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 my-8">
        <h1 className="text-4xl px-10 font-bold bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-off-white-color dark:to-primary-color dark:bg-clip-text dark:text-transparent">{props.maintitle}</h1>
      </div>
    </>
  );
};

export default Title;
