import GameSaving from './game-saving';
import json from './parser';
import read from './reader';

/* eslint-disable class-methods-use-this */
export default class GameSavingLoader {
  static load() {
    return read().then((data) => json(data)).then((data) => {
      const parsedData = JSON.parse(data);
      return new GameSaving(parsedData.id, parsedData.created, parsedData.userInfo);
    });
  }
}
