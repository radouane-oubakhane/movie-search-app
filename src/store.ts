import { create } from "zustand";

export interface MediaContentQuery {
  sortBy?: string;
  primaryReleaseDateGte?: string;
  primaryReleaseDateLte?: string;
  releaseDateLte?: string;
  withGenres?: string;
  withOriginalLanguage?: string;
  voteAverageGte?: number;
  voteAverageLte?: number;
  voteCountGte?: number;
  withRuntimeGte?: number;
  withRuntimeLte?: number;
  withKeywords?: string;
  fistAirDateGte?: string;
  firstAirDateLte?: string;
  screenedTheatrically?: boolean;
  query?: string;
}

interface MediaContentQueryStore {
  mediaContentQuery: MediaContentQuery;

  setSearchText: (text: string) => void;
  setSortBy: (sortBy: string) => void;
  setPrimaryReleaseDateGte: (primaryReleaseDateGte: string) => void;
  setPrimaryReleaseDateLte: (primaryReleaseDateLte: string) => void;
  setReleaseDateLte: (releaseDateLte: string) => void;
  setWithGenres: (withGenres: string) => void;
  setWithOriginalLanguage: (withOriginalLanguage: string) => void;
  setVoteAverageGte: (voteAverageGte: number) => void;
  setVoteAverageLte: (voteAverageLte: number) => void;
  setVoteCountGte: (voteCountGte: number) => void;
  setWithRuntimeGte: (withRuntimeGte: number) => void;
  setWithRuntimeLte: (withRuntimeLte: number) => void;
  setWithKeywords: (withKeywords: string) => void;
  setFirstAirDateGte: (firstAirDateGte: string) => void;
  setFirstAirDateLte: (firstAirDateLte: string) => void;
  setScreenedTheatrically: (screenedTheatrically: boolean) => void;
  setWithAverageGte: (withAverageGte: number) => void;
  setWithAverageLte: (withAverageLte: number) => void;
  setWithNetworks: (withNetworks: string) => void;
  setUserScore: (userScore: number[]) => void;
  setRuntime: (runtime: number[]) => void;
  reset: () => void;
}

const useMediaContentQueryStore = create<MediaContentQueryStore>((set) => ({

  mediaContentQuery: {},

  setSearchText: (text: string) =>
    set(() => ({ mediaContentQuery: { query: text } })),

  setSortBy: (sortBy: string) =>
    set((state) => ({
      mediaContentQuery: { ...state.mediaContentQuery, sortBy },
    })),
  setPrimaryReleaseDateGte: (primaryReleaseDateGte: string) =>
    set((state) => ({
      mediaContentQuery: { ...state.mediaContentQuery, primaryReleaseDateGte },
    })),
  setPrimaryReleaseDateLte: (primaryReleaseDateLte: string) =>
    set((state) => ({
      mediaContentQuery: { ...state.mediaContentQuery, primaryReleaseDateLte },
    })),
  setReleaseDateLte: (releaseDateLte: string) =>
    set((state) => ({
      mediaContentQuery: { ...state.mediaContentQuery, releaseDateLte },
    })),
  setWithGenres: (withGenres: string) =>
    set((state) => ({
      mediaContentQuery: { ...state.mediaContentQuery, withGenres },
    })),
  setWithOriginalLanguage: (withOriginalLanguage: string) =>
    set((state) => ({
      mediaContentQuery: { ...state.mediaContentQuery, withOriginalLanguage },
    })),
  setVoteAverageGte: (voteAverageGte: number) =>
    set((state) => ({
      mediaContentQuery: { ...state.mediaContentQuery, voteAverageGte },
    })),
  setVoteAverageLte: (voteAverageLte: number) =>
    set((state) => ({
      mediaContentQuery: { ...state.mediaContentQuery, voteAverageLte },
    })),
  setVoteCountGte: (voteCountGte: number) =>
    set((state) => ({
      mediaContentQuery: { ...state.mediaContentQuery, voteCountGte },
    })),
  setWithRuntimeGte: (withRuntimeGte: number) =>
    set((state) => ({
      mediaContentQuery: { ...state.mediaContentQuery, withRuntimeGte },
    })),
  setWithRuntimeLte: (withRuntimeLte: number) =>
    set((state) => ({
      mediaContentQuery: { ...state.mediaContentQuery, withRuntimeLte },
    })),
  setWithKeywords: (withKeywords: string) =>
    set((state) => ({
      mediaContentQuery: { ...state.mediaContentQuery, withKeywords },
    })),
  setFirstAirDateGte: (firstAirDateGte: string) =>
    set((state) => ({
      mediaContentQuery: { ...state.mediaContentQuery, firstAirDateGte },
    })),
  setFirstAirDateLte: (firstAirDateLte: string) =>
    set((state) => ({
      mediaContentQuery: { ...state.mediaContentQuery, firstAirDateLte },
    })),
  setScreenedTheatrically: (screenedTheatrically: boolean) =>
    set((state) => ({
      mediaContentQuery: { ...state.mediaContentQuery, screenedTheatrically },
    })),
  setWithAverageGte: (withAverageGte: number) =>
    set((state) => ({
      mediaContentQuery: { ...state.mediaContentQuery, withAverageGte },
    })),
  setWithAverageLte: (withAverageLte: number) =>
    set((state) => ({
      mediaContentQuery: { ...state.mediaContentQuery, withAverageLte },
    })),
  setWithNetworks: (withNetworks: string) =>
    set((state) => ({
      mediaContentQuery: { ...state.mediaContentQuery, withNetworks },
    })),

  setUserScore: (userScore: number[]) =>
    set((state) => ({
      mediaContentQuery: { ...state.mediaContentQuery, voteAverageGte: userScore[0], voteAverageLte: userScore[1] },
    })),

  setRuntime: (runtime: number[]) =>
    set((state) => ({
      mediaContentQuery: { ...state.mediaContentQuery, withRuntimeGte: (runtime[0] * 1000 * 60), withRuntimeLte: (runtime[1] * 1000 * 60) },
    })),

    
  reset: () => set(() => ({ mediaContentQuery: {} })),
}));


export default useMediaContentQueryStore;



