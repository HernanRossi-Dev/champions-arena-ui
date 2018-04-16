import { CREATE_HERO } from "../constants/action-types";

export const createHero = hero => ({
  type: CREATE_HERO,
  payload: hero
});
