export interface GameParams {
    id: string;
    title: string;
    bannerUrl: string;
};

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined; //rota n precisa de parametros
            game: GameParams;
        }
    }
}