import Feed from "@components/Feed";
import React from "react";

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        {/* Discover&nbsp;&#38;&nbsp;Share */}
        {/* Collaborate&#44;&nbsp;Create&#44;&nbsp;Connect */}
        Explore&nbsp;&#38;&nbsp;Connect
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>
          <br />
          {/* AI-Powered Prompts */}
          {/* Revolutionary AI-Powered Prompts */}
          {/* Ignite Inspiration */}
          {/* Elevate Your Creative Process */}
          AI Empowered Creativity
        </span>
      </h1>
      <p className='desc text-center'>
      {/* Conceptopia is an open-source AI prompting tool for the modern world to
        discover, create and share creative prompts. */}
        Harness the power of Artificial Intelligence to ignite your creative spark. Uncover a universe of captivating ideas to fuel your imagination&#44; and craft remarkable creations.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
