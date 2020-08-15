import { createContext } from 'react';

const searchCtx = {
    ref: null
}
  
export const SearchContext = createContext(searchCtx.ref);