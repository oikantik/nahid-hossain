import React from "react";

function CurrentlyWorkingOn() {
  return (
    <section id='currently-working' className='currently-working'>
      <h1 className='currently-working__title'>Currently Working On</h1>
      <p className='currently-working__description'>
        This is what I am currently doing
      </p>
      <article className='currently-working-card'>
        <p className='currently-working-card__description'>
          Finalizing my learning management site so it is production ready, the
          idea is to make it live as a SaaS so everyone can use it.
        </p>
      </article>

      <article className='currently-working-card'>
        <p className='currently-working-card__description'>
          Polishing my knowledge on Typescript, Graphql, and learning Three.js
        </p>
      </article>

      <article className='currently-working-card'>
        <p className='currently-working-card__description'>
          Playing with my Raspberry Pi!
        </p>
      </article>
    </section>
  );
}

export default CurrentlyWorkingOn;
