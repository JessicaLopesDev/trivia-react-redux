export const PLAYER = 'PLAYER';
export const QUESTION = 'QUESTION';

export const playerAction = (name, email) => ({
  type: PLAYER,
  payload: { name, gravatarEmail: email },
});

export const questionAction = (payload) => ({
  type: QUESTION,
  payload,
});
