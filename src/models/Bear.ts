interface Volume {
    value: number;
    unit: string;
}
interface MashTemp {
    temp: {
        value: number;
        unit: string;
    };
    duration: number;
}
interface Fermentation {
    temp: {
        value: number
        unit: string
    };
    twist: any;
}
interface Malt {
    name: string
    amount:
        {
            value: number
            unit: string
        }
}
interface Hops {
    name: string;
    amount: Volume;
    add: string;
    attribute: string;
}

interface Ingredients {
    malt: Malt[];
    hops: Hops[];
    yeast: string;
}

export interface Bear {
    id: number;
    name: string;
    tagline: string;
    first_brewed: string;
    description: string;
    image_url: string;
    abv: number;
    ibu: number;
    target_fg: number;
    target_og: number;
    ebc: number;
    ph: number;
    attenuation_level: number;
    volume: Volume;
    boil_volume: Volume;
    method: {
        mash_temp: MashTemp[];
        fermentation: Fermentation;
    };
    ingredients: Ingredients;
    food_pairing: string[];
    brewers_tips: string;
    contributed_by: string;
}


