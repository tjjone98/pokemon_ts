// import lib
import React from "react";
import TypePokemon from "../TypePokemon/TypePokemon";
import { Pokemon } from "../../interface/pokemon";
import { Link } from "react-router-dom";
import { formatNumber } from "../../utils/format";

// import scss
import "./evolutionPokemon.scss";

/**
 * TODO:
 * @param name
 * @param num
 * @param img
 * @param types
 */
function EvoluitonPokemon({ name, num, img, types }: Pokemon) {
  return (
    <Link
      to={`/detail/${String(formatNumber(Number(num)))
        .replace(" ", "")
        // .replace(regex, "-")
        .toLowerCase()}`}
    >
      <div className="evolution">
        {/* title info evolution pokemon  */}
        <div className="evolution__body">
          {/* img evolution pokemon */}
          <div className="evolution__img">
            <img src={img} alt={name} />
          </div>
          {/* ---- */}

          {/* num evolution pokemon */}
          <div className="evolution__num">
            <p>#{formatNumber(Number(num))}</p>
          </div>
          {/* ---- */}

          {/* name evolution pokemon */}
          <div className="evolution__name">
            <p>{name}</p>
          </div>
          {/* ---- */}

          {/* type evolution pokemon use type component */}
          <div className="evolution__types">
            {types?.map((type: string) => {
              return <TypePokemon key={type} type={type} />;
            })}
          </div>
          {/* ---- */}
        </div>
        {/* ---- */}
      </div>
    </Link>
  );
}

export default EvoluitonPokemon;
