import React from "react";
import "@/scss/components/MainContent/Pioneers.scss";
import {
  GallerySideTextDesc,
  GallerySideTextSpan,
} from "@/components/StyledComponent/GallerySideText";

const Pioneers = () => {
  return (
    <section className="pioneers">
      <div className="title">
        <h2>
          Pioneers <br />
          <span className="dark-beige-color">
            in materials for room acoustics
          </span>
        </h2>

        <h6>
          BASWA integrates high performance acoustics discreetly into the
          architecture. Noisy interiors are transformed into calm acoustic
          environments.
        </h6>
      </div>

      <div className="article">
        “At first I had no idea how to reduce noise and reverberation”, admits
        Hans Sulzer “but a lack of technical knowledge proved to be my greatest
        asset. I visited numerous specialists and always heard to the same
        thing: We always did it that way, or: That’s how you do it. So I decided
        to rely on my own intuition. I began to try things out in my small
        workshop.”
        <p>Company foundation</p>
        In 1991, at the age of 60, Hans Sulzer founded the BASWA company and
        pursued his vision of manufacturing and marketing innovative acoustic
        products. As a tireless and visionary entrepreneur, Hans Sulzer
        developed the BASWA acoustic system. It was clear from the very
        beginning that BASWA as a company would find new solutions to known
        problems in an unconventional and innovative way.
        <p> A drive for innovation and marble dust </p>
        The acoustic miracle finally succeeded in testing, experimenting and
        processing fine marble dust: a drastic reduction in reverberation. Made
        possible by the use of new materials and an innovative approach. In
        doing so, Mr. Sulzer unconsciously justified the way we work and the
        demands that characterize our acoustic systems: Questioning the existing
        with a spirit of innovation, researching the new in order to sustainably
        improve the spatial sound.
        <p> Sustainability in all areas </p>
        “Sustainable” has many facets in this context. Starting with the choice
        of materials for the acoustic systems. Because marble dust is created
        when working with marble blocks and is produced in large quantities when
        working with marble. Sustainable also means that our acoustic systems
        perform their work over a long period of time. Using renovation, repair
        and restoration concepts, the life cycle of our acoustic systems extends
        over many decades. We already focus on longevity at the installation
        stage. Because our systems are only installed by our certified partners
        The installation of the acoustic systems is carried out by certified
        partners – this way we can guarantee professional installation with the
        highest quality. This is the first step towards creating a pleasant
        climate in the room acoustics for a long time to come.
      </div>
    </section>
  );
};

export default Pioneers;
