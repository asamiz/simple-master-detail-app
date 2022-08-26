// Params Types
export type PersonsParams = {
  limit?: number;
  start: number;
};

// Responses Types
export type PersonsResponse = {
  success: boolean;
  data: PersonData[];
  additional_data: AdditionalData;
  related_objects: RelatedObjects;
  next_start: number;
};

export type PersonData = {
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
  label?: string;
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
  next_start: number;
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

export type ActivitiesResponse = {
  success: boolean;
  data: ActivityData[];
  additional_data: AdditionalData;
};

export type ActivityData = {
  id: number;
  company_id: number;
  user_id: number;
  done: boolean;
  type: string;
  reference_type: any;
  reference_id: any;
  conference_meeting_client: any;
  conference_meeting_url: any;
  due_date: string;
  due_time: string;
  duration: string;
  busy_flag: any;
  add_time: string;
  marked_as_done_time: string;
  last_notification_time: any;
  last_notification_user_id: any;
  notification_language_id: any;
  subject: string;
  public_description: string;
  calendar_sync_include_context: any;
  location: any;
  org_id: number;
  person_id: number;
  deal_id: any;
  lead_id: any;
  active_flag: boolean;
  update_time: string;
  update_user_id: any;
  source_timezone: any;
  rec_rule: any;
  rec_rule_extension: any;
  rec_master_activity_id: any;
  conference_meeting_id: any;
  original_start_time: any;
  note: any;
  created_by_user_id: number;
  location_subpremise: any;
  location_street_number: any;
  location_route: any;
  location_sublocality: any;
  location_locality: any;
  location_admin_area_level_1: any;
  location_admin_area_level_2: any;
  location_country: any;
  location_postal_code: any;
  location_formatted_address: any;
  attendees: any;
  participants: Participant[];
  series: any;
  is_recurring: any;
  note_clean: any;
  org_name: string;
  person_name: string;
  deal_title: any;
  lead_title: any;
  owner_name: string;
  person_dropbox_bcc: string;
  deal_dropbox_bcc: any;
  assigned_to_user_id: number;
  type_name: string;
  lead: any;
};

export type Participant = {
  person_id: number;
  primary_flag: boolean;
};

export type ActivityDistribution = {
  '13337499': N13337499;
};

export type Activities = {
  call: number;
};

export interface DealsResponse {
  success: boolean;
  data: DealData[];
  additional_data: AdditionalData;
  related_objects: RelatedObjects;
}

export type DealData = {
  id: number;
  creator_user_id: CreatorUserId;
  user_id: UserId;
  person_id: PersonId;
  org_id: OrgId;
  stage_id: number;
  title: string;
  value: number;
  currency: string;
  add_time: string;
  update_time: string;
  stage_change_time: any;
  active: boolean;
  deleted: boolean;
  status: string;
  probability: any;
  next_activity_date: any;
  next_activity_time: any;
  next_activity_id: any;
  last_activity_id: any;
  last_activity_date: any;
  lost_reason: any;
  visible_to: string;
  close_time: any;
  pipeline_id: number;
  won_time: any;
  first_won_time: any;
  lost_time: any;
  products_count: number;
  files_count: number;
  notes_count: number;
  followers_count: number;
  email_messages_count: number;
  activities_count: number;
  done_activities_count: number;
  undone_activities_count: number;
  participants_count: number;
  expected_close_date: any;
  last_incoming_mail_time: any;
  last_outgoing_mail_time: any;
  label: any;
  renewal_type: string;
  stage_order_nr: number;
  person_name: string;
  org_name: string;
  next_activity_subject: any;
  next_activity_type: any;
  next_activity_duration: any;
  next_activity_note: any;
  group_id: any;
  group_name: any;
  formatted_value: string;
  weighted_value: number;
  formatted_weighted_value: string;
  weighted_value_currency: string;
  rotten_time: any;
  owner_name: string;
  cc_email: string;
  org_hidden: boolean;
  person_hidden: boolean;
};

export type CreatorUserId = {
  id: number;
  name: string;
  email: string;
  has_pic: number;
  pic_hash: any;
  active_flag: boolean;
  value: number;
};

export type UserId = {
  id: number;
  name: string;
  email: string;
  has_pic: number;
  pic_hash: any;
  active_flag: boolean;
  value: number;
};

export type PersonId = {
  active_flag: boolean;
  name: string;
  email: Email[];
  phone: Phone[];
  owner_id: number;
  value: number;
};

export type Person = {
  '1': N12;
};

export type Email2 = {
  value: string;
  primary: boolean;
};

export type Phone2 = {
  label: string;
  value: string;
  primary: boolean;
};
