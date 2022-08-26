// Params Types
export type PersonsParams = {
  limit?: number;
  start: number;
};

// Responses Types
interface Response {
  success: boolean;
  data: PersonData[] | DealData[] | ActivityData[];
  additional_data: AdditionalData;
  next_start?: number;
}
export interface PersonsResponse extends Response {
  data: PersonData[];
  next_start: number;
}
export interface DealsResponse extends Response {
  data: DealData[];
}

export interface ActivitiesResponse extends Response {
  data: ActivityData[];
}

// Data Types

export type PersonData = {
  id: number;
  org_id: OrgId;
  name: string;
  phone: Phone[];
  email: Email[];
  first_char: string;
  picture_id?: PictureId;
};

export type DealData = {
  id: number;
  value: number;
  currency: string;
  title: string;
};

export type ActivityData = {
  id: number;
  type: string;
  due_date: string;
  org_name: string;
  owner_name: string;
};

// Other
export type Participant = {
  person_id: number;
  primary_flag: boolean;
};

export type OrgId = {
  name: string;
  people_count: number;
  owner_id: number;
  address: any;
  active_flag: boolean;
  cc_email: string;
  value: number;
};

export type Phone = {
  value: string;
  primary: boolean;
  label?: string;
};

export type Email = {
  value: string;
  primary: boolean;
};

export type Pictures = {
  '128': string;
  '512': string;
};

export type PictureId = {
  item_type: string;
  item_id: number;
  active_flag: boolean;
  add_time: string;
  update_time: string;
  added_by_user_id: number;
  pictures: Pictures;
  value: number;
};

export type AdditionalData = {
  pagination: {
    start: number;
    limit: number;
    more_items_in_collection: boolean;
    next_start: number;
  };
};
