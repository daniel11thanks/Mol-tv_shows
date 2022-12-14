export type ResultList = {
    score: string;
    show: {
        averageRuntime: number;
        name: string;
        image: { medium: string, original: string };
        externals: { imdb: any, thetvdb: any, tvrage: any };
        id: number;
    };
    
};
