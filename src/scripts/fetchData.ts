import { format, subDays } from "date-fns";

interface NEO {
  id: string;
  name: string;
  absolute_magnitude_h: number;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
  };
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: {
    close_approach_date_full: string;
    relative_velocity: {
      kilometers_per_second: string;
    };
    miss_distance: {
      kilometers: string;
    };
    orbiting_body: string;
  }[];
}

interface AsteroidInfo {
  id: string;
  name: string;
  absoluteMagnitude: number;
  estimatedDiameterMax: number;
  estimatedDiameterMin: number;
  potentiallyHazardous: boolean;
  closestApproachDate: string;
  relativeVelocity: string;
  missDistance: string;
  orbitingBody: string;
}

interface NEOS {
  [index: string]: NEO[];
}

interface Data {
  element_count: number;
  near_earth_objects: NEOS;
  links: {
    prev: string;
    next: string;
    self: string;
  };
}

const fetchData = async (
  start: string,
  end: string
): Promise<Data | undefined> => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=WfcurFXV3fuaxJ147f3BykLubflihVNoKuibPVfy`,
      { mode: "cors" }
    );
    if (response.ok) {
      const data = (await response.json()) as Data;
      return data;
    }
    console.log("Response Error!");
  } catch (error) {
    if (typeof error === "string") {
      console.log("Network Error");
      throw new Error(error);
    }
  }
  return undefined;
};

class DataSorter {
  elementCount: number;

  neoArr: AsteroidInfo[] = [];

  constructor(data: Data) {
    this.elementCount = data.element_count;
    this.neoArr = [];

    const neos = data.near_earth_objects;
    const keys = Object.keys(neos);

    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i] in neos) {
        const neo = neos[keys[i]];

        for (let j = 0; j < neo.length; j += 1) {
          const {
            id,
            name,
            absolute_magnitude_h: absoluteMagnitude,
            is_potentially_hazardous_asteroid: isPotentiallyHazardous,
          } = neo[j];
          const { estimated_diameter_max: max, estimated_diameter_min: min } =
            neo[j].estimated_diameter.kilometers;
          const {
            close_approach_date_full: closestApproachDate,
            relative_velocity: { kilometers_per_second: kms },
            orbiting_body: orbitingBody,
          } = neo[j].close_approach_data[0];
          const distance =
            neo[j].close_approach_data[0].miss_distance.kilometers;

          const neoObj: AsteroidInfo = {
            id,
            name,
            absoluteMagnitude,
            estimatedDiameterMax: max,
            estimatedDiameterMin: min,
            potentiallyHazardous: isPotentiallyHazardous,
            closestApproachDate,
            relativeVelocity: kms,
            missDistance: distance,
            orbitingBody,
          };

          this.neoArr.push(neoObj);
        }
      }
    }
  }

  averageDiameter(num: number) {
    return (
      (this.neoArr[num].estimatedDiameterMax +
        this.neoArr[num].estimatedDiameterMin) /
      2
    );
  }
}

const retrieveInformation = async () => {
  const today = format(new Date(), "yyyy-MM-dd");
  const aWeekAgo = format(subDays(new Date(), 7), "yyyy-MM-dd");
  const data = await fetchData(aWeekAgo, today);
  if (data) {
    const information = new DataSorter(data);
    return information;
  }
  return undefined;
};

export type { DataSorter, AsteroidInfo };
export default retrieveInformation;
