import { defineStore } from 'pinia'
import { ref } from 'vue'
import Player from '@vimeo/player';

export const usePlayerStore = defineStore('player', () => {
  const players = ref({})

  function addPlayer(id){
    let newPlayer = new Player(id);

    newPlayer.setAutopause(true);

    players.value[id] = newPlayer;

    return id;
  }

  return { addPlayer }
})