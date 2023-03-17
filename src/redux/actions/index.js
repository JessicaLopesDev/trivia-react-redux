export const PLAYER = 'PLAYER';
export const QUESTION = 'QUESTION';

export const playerAction = (payload) => ({
  type: PLAYER,
  payload,
});

export const questionAction = (payload) => ({
  type: QUESTION,
  payload,
});
