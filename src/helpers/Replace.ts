/* eslint-disable prettier/prettier */
export type Replace<T, R> = Omit<T, keyof R> & R;
//exporta um tipo replace que recebe uma tipagem original e outra pra substituir