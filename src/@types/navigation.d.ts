export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Welcome: undefined;
      Home: undefined;
      Genre: {
        genreId: number;
      };
      Movie: {
        movieId: number;
        genreId: number | undefined;
      };
    }
  }
}
