import axios from 'axios';
import { ALPHABETICAL_ORDER, CREATE_POKEMON, FILTER_BY_STORAGE, FILTER_BY_TYPE, GET_ALL_POKEMONS, GET_NAME_POKEMONS, GET_POKEMON_DETAIL, GET_TYPES, SORT_BY_ATTACK } from './actionsType';

export function getAllPokemons(){
    return async function(dispatch){   
        var json = await axios.get('http://localhost:3001/pokemons') //AQUI ES DONDE SUCEDE LA MAGÍA DE LA CONEXION ENTRE EL FRONT Y EL BACK 
        return dispatch({
            type: GET_ALL_POKEMONS,
            payload: json.data
        })
    } 
}

export function getTypes() {
    return async function(dispatch){
        var info = await axios.get("http://localhost:3001/types",{

        })
        return dispatch({
            type: GET_TYPES, 
            payload: info.data
        })
    }
};

export function filterByType(pokemonType){
    return{
        type: FILTER_BY_TYPE,
        payload: pokemonType
    }
}

export function filterByStorage(payload){
    return {
        type: FILTER_BY_STORAGE,
        payload
    }
}

export function alphabeticalOrder(order){
    return{
        type: ALPHABETICAL_ORDER,
        payload: order,
    }
}

export function sortByAttack(order){
    return {
        type: SORT_BY_ATTACK,
        payload: order
    }
}

export function getNamePokemons(name){
    return async function(dispatch){  
        try {
        var json = await axios.get('http://localhost:3001/pokemons?name=' + name); //AQUI ES DONDE SUCEDE LA MAGÍA DE LA CONEXION ENTRE EL FRONT Y EL BACK 
        return dispatch({
            type: GET_NAME_POKEMONS,
            payload: json.data
        })
    } catch(error){
        console.log(error)
    }
    }
};

export function createPokemon(pokemon) {
    return async function (dispatch) {
      try {
        dispatch({
            type: CREATE_POKEMON, 
            payload: true });
        const response = await axios.post(
          "http://localhost:3001/pokemons",
          pokemon
        );
      } catch (error) {
        console.log(error);
        dispatch({ type: CREATE_POKEMON, payload: false });
      }
    };
  }

export function getPokemonDetail(id){
    return async function(dispatch){
        axios.get(`/pokemons/${id}`)
	.then(response=> response.data)
	.then(data=> dispatch({
        type: GET_POKEMON_DETAIL, 
        payload: data}))
    }
}
