import React from "react";
import { ActorCard_UI } from "./ActorCard_UI";

import './actorSlider.css'

export const ActorSlider_UI = ({ credits }) => {
  return (
    <>
      <h3 className="title-actors-section">Actores principales</h3>
      <section className="main-actors-slider-content">
        <div className="actors-slider">
          {credits.map(
            (e, index) =>
              index < 15 && (
                <ActorCard_UI
                  key={e.id}
                  name={e.name}
                  photo={e.profile_path ? e.profile_path : null}
                  character={e.character}
                  actorId={e.id}
                />
              )
          )}
        </div>
      </section>
    </>
  );
};
