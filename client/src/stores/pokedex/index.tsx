// import lib
import axios from "axios";
import { action, observable } from "mobx";
import { createContext } from "react";
import { BASE_URL } from "../../services";

interface Pokedex {
  name: string;
  url: string;
}

class PokedexStore {
  @observable pokedex: Pokedex[] = [];
  @observable offset: number = 0;
  /**
   * function fetchListPokemon: fetch list pokemon to adapter pokedex variable,
   * @param: no param
   * check response status and response data
   * if exist data return this.pokedex = data
   * else return []
   */

  @action async fetchListPokemon(offset: number) {
    this.offset = offset;
    try {
      let response = await axios.get(
        `${BASE_URL}/pokemons?limit=10&offset=${this.offset}`,
      );
      if (response.status === 200 && response.data) {
        if (this.offset === 0) {
          this.pokedex = response.data.payload;
        } else {
          this.pokedex = [...this.pokedex, ...response.data.payload];
        }
      } else {
        this.pokedex = [];
      }
    } catch (error) {
      console.log(error);
      this.pokedex = [];
    }
  }
}

export default createContext(new PokedexStore());
