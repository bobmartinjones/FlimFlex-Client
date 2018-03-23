interface Genres {
    id: number;
    name: string;
  }
  
interface Company {
    id: number;
    name: string;
  }
  
interface Country {
    iso_3166_1: string;
    name: string;
  }
  
interface Language {
    iso_639_1: string;
    name: string;
  }
  
  export interface MovieDb {
    id ?: number; // 346364
    vote_count ?: number; // 3840
    video ?: boolean; // false;
    vote_average ?: number; // 7.3;
    title ?: string; // "It";
    popularity ?: number; // 1157.356052;
    poster_path ?: string; // "/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg";
    original_language ?: string; // "en"
    original_title ?: string; // "It"
    backdrop_path ?: string; // "/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg";
    adult ?: boolean; // false
    overview ?: string;
    release_date ?: string; // "2017-09-05";
    genre_ids ?: any[];
    genres ?: Genres[];
    belongs_to_collection ?: any[]; // null;
    budget ?: number; // 35000000
    homepage ?: string; // "http://itthemovie.com/"
    imdb_id ?: string; // "tt1396484"
    production_companies ?: Company[];
    production_countries ?: Country[];
    revenue ?: number; // 555575232;
    runtime ?: number; // 135;
    spoken_languages ?: Language[];
    status ?: string; // "Released";
    tagline ?: string; // "Your fears are unleashed";
  }