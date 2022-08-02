interface NEO {
  id: string;
  name: string;
  absolute_magnitude: number;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
  };
  is_potentially_hazardous_asteroid: boolean;
  closest_approach_data: {
    closest_approach_date: string;
    relative_velocity: {
      kilometers_per_second: string;
    };
    miss_distance: {
      astronomical: string;
    };
  }[];
}

interface NEOS {
  [index: string]: NEO[];
}

interface Data {
  element_count: number;
  near_earth_objects: NEOS;
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
    const data = (await response.json()) as Data;

    return data;
  } catch (error) {
    if (typeof error === "string") {
      throw new Error(error);
    }
  }
  return undefined;
};

export default fetchData;
