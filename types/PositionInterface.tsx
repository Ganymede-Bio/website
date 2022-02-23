export interface IPosition {
  id: string;
  title: string;
  full_title: string;
  shortcode: string;
  code: string;
  state: string;
  department: string;
  department_hierarchy: {
    id: number;
    name: string;
  };
  url: string;
  application_url: string;
  shortlink: string;
  location: {
    location_str: string;
    country: string;
    country_code: string;
    region: string;
    region_code: string;
    city: string;
    zip_code: string;
    telecommuting: boolean;
  };
  created_at: Date;
}

export interface IPositions {
  [positions: string]: Array<IPosition>;
}
