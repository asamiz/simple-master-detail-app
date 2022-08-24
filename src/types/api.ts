// Params Types
export type PersonsParams = {
  limit: number;
  start: number;
};

// Responses Types
export type PersonsResponse = {
  success: boolean;
  data: UserData[];
  additional_data: AdditionalData;
  related_objects: RelatedObjects;
};

export type UserData = {
  id: number;
  company_id: number;
  owner_id: OwnerId;
  org_id: OrgId;
  name: string;
  first_name: string;
  last_name: string;
  open_deals_count: number;
  related_open_deals_count: number;
  closed_deals_count: number;
  related_closed_deals_count: number;
  participant_open_deals_count: number;
  participant_closed_deals_count: number;
  email_messages_count: number;
  activities_count: number;
  done_activities_count: number;
  undone_activities_count: number;
  files_count: number;
  notes_count: number;
  followers_count: number;
  won_deals_count: number;
  related_won_deals_count: number;
  lost_deals_count: number;
  related_lost_deals_count: number;
  active_flag: boolean;
  phone: Phone[];
  email: Email[];
  first_char: string;
  update_time: string;
  add_time: string;
  visible_to: string;
  picture_id?: PictureId;
  next_activity_date: any;
  next_activity_time: any;
  next_activity_id: any;
  last_activity_id: any;
  last_activity_date: any;
  last_incoming_mail_time: any;
  last_outgoing_mail_time: any;
  label: number;
  org_name: string;
  owner_name: string;
  primary_email: any;
  cc_email: string;
};

export type OwnerId = {
  id: number;
  name: string;
  email: string;
  has_pic: number;
  pic_hash: any;
  active_flag: boolean;
  value: number;
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
};

export type Email = {
  value: string;
  primary: boolean;
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

export type Pictures = {
  '128': string;
  '512': string;
};

export type AdditionalData = {
  pagination: Pagination;
};

export type Pagination = {
  start: number;
  limit: number;
  more_items_in_collection: boolean;
};

export type RelatedObjects = {
  organization: Organization;
  user: User;
  picture: Picture;
};

export type Organization = {
  '1': N1;
};

export type N1 = {
  id: number;
  name: string;
  people_count: number;
  owner_id: number;
  address: any;
  active_flag: boolean;
  cc_email: string;
};

export type User = {
  '13337499': N13337499;
};

export type N13337499 = {
  id: number;
  name: string;
  email: string;
  has_pic: number;
  pic_hash: any;
  active_flag: boolean;
};

export type Picture = {
  '1': N12;
};

export type N12 = {
  id: number;
  item_type: string;
  item_id: number;
  active_flag: boolean;
  add_time: string;
  update_time: string;
  added_by_user_id: number;
  pictures: Pictures2;
};

export type Pictures2 = {
  '128': string;
  '512': string;
};
