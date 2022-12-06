export interface cardTypes {
    id: string;
    image: string;
    name: string;
    description: string;
}

export interface Characters extends cardTypes {
    series: string[];
    comics: string[];
  }
  
  export interface Comics extends cardTypes {
    characters: string[];
    series: string[];
  }
  
  export interface Series extends cardTypes {
    characters: string[];
    comics: string[];
  }
  