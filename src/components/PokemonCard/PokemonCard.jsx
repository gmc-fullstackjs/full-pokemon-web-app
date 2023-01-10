import React from 'react';
import './PokemonCard.css'
function PokemonCard() {
    return <div className='card'>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="" srcset="" />
        <div className='poke-info'>
            <div className='poke-name'>
                Bulbasur
            </div>
            <div className='badge'>
                owned: 1
            </div>
        </div>
    </div>;
}

export default PokemonCard;
