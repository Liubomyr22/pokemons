import * as React from "react";
import { Pokeball, PokeballWrapper } from "./index.style";

const Loader: React.FC = () =>
  <PokeballWrapper>
    <Pokeball className="u-flip" />
  </PokeballWrapper>

export default Loader