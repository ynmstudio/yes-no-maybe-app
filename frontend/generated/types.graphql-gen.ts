import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  numeric: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};



/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "applications" */
export type Applications = {
  __typename?: 'applications';
  created_at: Scalars['timestamptz'];
  created_by: Scalars['String'];
  database: Scalars['Boolean'];
  disclaimer: Scalars['Boolean'];
  /** An object relationship */
  edition: Editions;
  edition_id: Scalars['Int'];
  /** An object relationship */
  elimination?: Maybe<Eliminations>;
  /** An array relationship */
  files: Array<Work_Files>;
  /** An aggregate relationship */
  files_aggregate: Work_Files_Aggregate;
  group: Scalars['Boolean'];
  id: Scalars['uuid'];
  internal_name?: Maybe<Scalars['String']>;
  locked: Scalars['Boolean'];
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  payment?: Maybe<Payments>;
  /** A computed field, executes function "application_rated_by_user" */
  rated_by_user?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  rating_in_latest_round?: Maybe<Ratings_By_Application>;
  /** An array relationship */
  ratings: Array<Ratings>;
  /** An aggregate relationship */
  ratings_aggregate: Ratings_Aggregate;
  /** A computed field, executes function "application_is_ready" */
  ready?: Maybe<Scalars['Boolean']>;
  residency: Scalars['Boolean'];
  /** An array relationship */
  specifications: Array<Work_Specifications>;
  /** An aggregate relationship */
  specifications_aggregate: Work_Specifications_Aggregate;
  /** A computed field, executes function "application_state" */
  state?: Maybe<Scalars['String']>;
  statement?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  /** A computed field, executes function "application_is_winner" */
  winner?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  works: Array<Works>;
  /** An aggregate relationship */
  works_aggregate: Works_Aggregate;
};


/** columns and relationships of "applications" */
export type ApplicationsFilesArgs = {
  distinct_on?: Maybe<Array<Work_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Files_Order_By>>;
  where?: Maybe<Work_Files_Bool_Exp>;
};


/** columns and relationships of "applications" */
export type ApplicationsFiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Files_Order_By>>;
  where?: Maybe<Work_Files_Bool_Exp>;
};


/** columns and relationships of "applications" */
export type ApplicationsMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** columns and relationships of "applications" */
export type ApplicationsMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** columns and relationships of "applications" */
export type ApplicationsRatingsArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};


/** columns and relationships of "applications" */
export type ApplicationsRatings_AggregateArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};


/** columns and relationships of "applications" */
export type ApplicationsSpecificationsArgs = {
  distinct_on?: Maybe<Array<Work_Specifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Specifications_Order_By>>;
  where?: Maybe<Work_Specifications_Bool_Exp>;
};


/** columns and relationships of "applications" */
export type ApplicationsSpecifications_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Specifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Specifications_Order_By>>;
  where?: Maybe<Work_Specifications_Bool_Exp>;
};


/** columns and relationships of "applications" */
export type ApplicationsWorksArgs = {
  distinct_on?: Maybe<Array<Works_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Order_By>>;
  where?: Maybe<Works_Bool_Exp>;
};


/** columns and relationships of "applications" */
export type ApplicationsWorks_AggregateArgs = {
  distinct_on?: Maybe<Array<Works_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Order_By>>;
  where?: Maybe<Works_Bool_Exp>;
};

/** aggregated selection of "applications" */
export type Applications_Aggregate = {
  __typename?: 'applications_aggregate';
  aggregate?: Maybe<Applications_Aggregate_Fields>;
  nodes: Array<Applications>;
};

/** aggregate fields of "applications" */
export type Applications_Aggregate_Fields = {
  __typename?: 'applications_aggregate_fields';
  avg?: Maybe<Applications_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Applications_Max_Fields>;
  min?: Maybe<Applications_Min_Fields>;
  stddev?: Maybe<Applications_Stddev_Fields>;
  stddev_pop?: Maybe<Applications_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Applications_Stddev_Samp_Fields>;
  sum?: Maybe<Applications_Sum_Fields>;
  var_pop?: Maybe<Applications_Var_Pop_Fields>;
  var_samp?: Maybe<Applications_Var_Samp_Fields>;
  variance?: Maybe<Applications_Variance_Fields>;
};


/** aggregate fields of "applications" */
export type Applications_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Applications_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "applications" */
export type Applications_Aggregate_Order_By = {
  avg?: Maybe<Applications_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Applications_Max_Order_By>;
  min?: Maybe<Applications_Min_Order_By>;
  stddev?: Maybe<Applications_Stddev_Order_By>;
  stddev_pop?: Maybe<Applications_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Applications_Stddev_Samp_Order_By>;
  sum?: Maybe<Applications_Sum_Order_By>;
  var_pop?: Maybe<Applications_Var_Pop_Order_By>;
  var_samp?: Maybe<Applications_Var_Samp_Order_By>;
  variance?: Maybe<Applications_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "applications" */
export type Applications_Arr_Rel_Insert_Input = {
  data: Array<Applications_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Applications_On_Conflict>;
};

/** aggregate avg on columns */
export type Applications_Avg_Fields = {
  __typename?: 'applications_avg_fields';
  edition_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "applications" */
export type Applications_Avg_Order_By = {
  edition_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "applications". All fields are combined with a logical 'AND'. */
export type Applications_Bool_Exp = {
  _and?: Maybe<Array<Applications_Bool_Exp>>;
  _not?: Maybe<Applications_Bool_Exp>;
  _or?: Maybe<Array<Applications_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by?: Maybe<String_Comparison_Exp>;
  database?: Maybe<Boolean_Comparison_Exp>;
  disclaimer?: Maybe<Boolean_Comparison_Exp>;
  edition?: Maybe<Editions_Bool_Exp>;
  edition_id?: Maybe<Int_Comparison_Exp>;
  elimination?: Maybe<Eliminations_Bool_Exp>;
  files?: Maybe<Work_Files_Bool_Exp>;
  group?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  internal_name?: Maybe<String_Comparison_Exp>;
  locked?: Maybe<Boolean_Comparison_Exp>;
  messages?: Maybe<Messages_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  payment?: Maybe<Payments_Bool_Exp>;
  rating_in_latest_round?: Maybe<Ratings_By_Application_Bool_Exp>;
  ratings?: Maybe<Ratings_Bool_Exp>;
  residency?: Maybe<Boolean_Comparison_Exp>;
  specifications?: Maybe<Work_Specifications_Bool_Exp>;
  statement?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  works?: Maybe<Works_Bool_Exp>;
};

/** unique or primary key constraints on table "applications" */
export enum Applications_Constraint {
  /** unique or primary key constraint */
  ApplicationsEditionIdInternalNameKey = 'applications_edition_id_internal_name_key',
  /** unique or primary key constraint */
  ApplicationsPkey = 'applications_pkey'
}

/** input type for incrementing numeric columns in table "applications" */
export type Applications_Inc_Input = {
  edition_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "applications" */
export type Applications_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  database?: Maybe<Scalars['Boolean']>;
  disclaimer?: Maybe<Scalars['Boolean']>;
  edition?: Maybe<Editions_Obj_Rel_Insert_Input>;
  edition_id?: Maybe<Scalars['Int']>;
  elimination?: Maybe<Eliminations_Obj_Rel_Insert_Input>;
  files?: Maybe<Work_Files_Arr_Rel_Insert_Input>;
  group?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  internal_name?: Maybe<Scalars['String']>;
  locked?: Maybe<Scalars['Boolean']>;
  messages?: Maybe<Messages_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  payment?: Maybe<Payments_Obj_Rel_Insert_Input>;
  rating_in_latest_round?: Maybe<Ratings_By_Application_Obj_Rel_Insert_Input>;
  ratings?: Maybe<Ratings_Arr_Rel_Insert_Input>;
  residency?: Maybe<Scalars['Boolean']>;
  specifications?: Maybe<Work_Specifications_Arr_Rel_Insert_Input>;
  statement?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  works?: Maybe<Works_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Applications_Max_Fields = {
  __typename?: 'applications_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  edition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  internal_name?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  statement?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "applications" */
export type Applications_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  edition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  internal_name?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  statement?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Applications_Min_Fields = {
  __typename?: 'applications_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  edition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  internal_name?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  statement?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "applications" */
export type Applications_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  edition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  internal_name?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  statement?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "applications" */
export type Applications_Mutation_Response = {
  __typename?: 'applications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Applications>;
};

/** input type for inserting object relation for remote table "applications" */
export type Applications_Obj_Rel_Insert_Input = {
  data: Applications_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Applications_On_Conflict>;
};

/** on conflict condition type for table "applications" */
export type Applications_On_Conflict = {
  constraint: Applications_Constraint;
  update_columns: Array<Applications_Update_Column>;
  where?: Maybe<Applications_Bool_Exp>;
};

/** Ordering options when selecting data from "applications". */
export type Applications_Order_By = {
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  database?: Maybe<Order_By>;
  disclaimer?: Maybe<Order_By>;
  edition?: Maybe<Editions_Order_By>;
  edition_id?: Maybe<Order_By>;
  elimination?: Maybe<Eliminations_Order_By>;
  files_aggregate?: Maybe<Work_Files_Aggregate_Order_By>;
  group?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  internal_name?: Maybe<Order_By>;
  locked?: Maybe<Order_By>;
  messages_aggregate?: Maybe<Messages_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  payment?: Maybe<Payments_Order_By>;
  rating_in_latest_round?: Maybe<Ratings_By_Application_Order_By>;
  ratings_aggregate?: Maybe<Ratings_Aggregate_Order_By>;
  residency?: Maybe<Order_By>;
  specifications_aggregate?: Maybe<Work_Specifications_Aggregate_Order_By>;
  statement?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  works_aggregate?: Maybe<Works_Aggregate_Order_By>;
};

/** primary key columns input for table: applications */
export type Applications_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "applications" */
export enum Applications_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Database = 'database',
  /** column name */
  Disclaimer = 'disclaimer',
  /** column name */
  EditionId = 'edition_id',
  /** column name */
  Group = 'group',
  /** column name */
  Id = 'id',
  /** column name */
  InternalName = 'internal_name',
  /** column name */
  Locked = 'locked',
  /** column name */
  Name = 'name',
  /** column name */
  Residency = 'residency',
  /** column name */
  Statement = 'statement',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "applications" */
export type Applications_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  database?: Maybe<Scalars['Boolean']>;
  disclaimer?: Maybe<Scalars['Boolean']>;
  edition_id?: Maybe<Scalars['Int']>;
  group?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  internal_name?: Maybe<Scalars['String']>;
  locked?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  residency?: Maybe<Scalars['Boolean']>;
  statement?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Applications_Stddev_Fields = {
  __typename?: 'applications_stddev_fields';
  edition_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "applications" */
export type Applications_Stddev_Order_By = {
  edition_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Applications_Stddev_Pop_Fields = {
  __typename?: 'applications_stddev_pop_fields';
  edition_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "applications" */
export type Applications_Stddev_Pop_Order_By = {
  edition_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Applications_Stddev_Samp_Fields = {
  __typename?: 'applications_stddev_samp_fields';
  edition_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "applications" */
export type Applications_Stddev_Samp_Order_By = {
  edition_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Applications_Sum_Fields = {
  __typename?: 'applications_sum_fields';
  edition_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "applications" */
export type Applications_Sum_Order_By = {
  edition_id?: Maybe<Order_By>;
};

/** update columns of table "applications" */
export enum Applications_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Database = 'database',
  /** column name */
  Disclaimer = 'disclaimer',
  /** column name */
  EditionId = 'edition_id',
  /** column name */
  Group = 'group',
  /** column name */
  Id = 'id',
  /** column name */
  InternalName = 'internal_name',
  /** column name */
  Locked = 'locked',
  /** column name */
  Name = 'name',
  /** column name */
  Residency = 'residency',
  /** column name */
  Statement = 'statement',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Applications_Var_Pop_Fields = {
  __typename?: 'applications_var_pop_fields';
  edition_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "applications" */
export type Applications_Var_Pop_Order_By = {
  edition_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Applications_Var_Samp_Fields = {
  __typename?: 'applications_var_samp_fields';
  edition_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "applications" */
export type Applications_Var_Samp_Order_By = {
  edition_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Applications_Variance_Fields = {
  __typename?: 'applications_variance_fields';
  edition_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "applications" */
export type Applications_Variance_Order_By = {
  edition_id?: Maybe<Order_By>;
};


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "category_mediums" */
export type Category_Mediums = {
  __typename?: 'category_mediums';
  id: Scalars['uuid'];
  name_de: Scalars['String'];
  name_en: Scalars['String'];
  /** An array relationship */
  specifications: Array<Work_Specification_Mediums>;
  /** An aggregate relationship */
  specifications_aggregate: Work_Specification_Mediums_Aggregate;
};


/** columns and relationships of "category_mediums" */
export type Category_MediumsSpecificationsArgs = {
  distinct_on?: Maybe<Array<Work_Specification_Mediums_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Specification_Mediums_Order_By>>;
  where?: Maybe<Work_Specification_Mediums_Bool_Exp>;
};


/** columns and relationships of "category_mediums" */
export type Category_MediumsSpecifications_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Specification_Mediums_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Specification_Mediums_Order_By>>;
  where?: Maybe<Work_Specification_Mediums_Bool_Exp>;
};

/** aggregated selection of "category_mediums" */
export type Category_Mediums_Aggregate = {
  __typename?: 'category_mediums_aggregate';
  aggregate?: Maybe<Category_Mediums_Aggregate_Fields>;
  nodes: Array<Category_Mediums>;
};

/** aggregate fields of "category_mediums" */
export type Category_Mediums_Aggregate_Fields = {
  __typename?: 'category_mediums_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Category_Mediums_Max_Fields>;
  min?: Maybe<Category_Mediums_Min_Fields>;
};


/** aggregate fields of "category_mediums" */
export type Category_Mediums_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Category_Mediums_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "category_mediums". All fields are combined with a logical 'AND'. */
export type Category_Mediums_Bool_Exp = {
  _and?: Maybe<Array<Category_Mediums_Bool_Exp>>;
  _not?: Maybe<Category_Mediums_Bool_Exp>;
  _or?: Maybe<Array<Category_Mediums_Bool_Exp>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name_de?: Maybe<String_Comparison_Exp>;
  name_en?: Maybe<String_Comparison_Exp>;
  specifications?: Maybe<Work_Specification_Mediums_Bool_Exp>;
};

/** unique or primary key constraints on table "category_mediums" */
export enum Category_Mediums_Constraint {
  /** unique or primary key constraint */
  CategoryMediumsNameDeKey = 'category_mediums_name_de_key',
  /** unique or primary key constraint */
  CategoryMediumsNameEnKey = 'category_mediums_name_en_key',
  /** unique or primary key constraint */
  CategoryMediumsPkey = 'category_mediums_pkey'
}

/** input type for inserting data into table "category_mediums" */
export type Category_Mediums_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  name_de?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  specifications?: Maybe<Work_Specification_Mediums_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Category_Mediums_Max_Fields = {
  __typename?: 'category_mediums_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name_de?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Category_Mediums_Min_Fields = {
  __typename?: 'category_mediums_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name_de?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "category_mediums" */
export type Category_Mediums_Mutation_Response = {
  __typename?: 'category_mediums_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Category_Mediums>;
};

/** input type for inserting object relation for remote table "category_mediums" */
export type Category_Mediums_Obj_Rel_Insert_Input = {
  data: Category_Mediums_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Category_Mediums_On_Conflict>;
};

/** on conflict condition type for table "category_mediums" */
export type Category_Mediums_On_Conflict = {
  constraint: Category_Mediums_Constraint;
  update_columns: Array<Category_Mediums_Update_Column>;
  where?: Maybe<Category_Mediums_Bool_Exp>;
};

/** Ordering options when selecting data from "category_mediums". */
export type Category_Mediums_Order_By = {
  id?: Maybe<Order_By>;
  name_de?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  specifications_aggregate?: Maybe<Work_Specification_Mediums_Aggregate_Order_By>;
};

/** primary key columns input for table: category_mediums */
export type Category_Mediums_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "category_mediums" */
export enum Category_Mediums_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NameDe = 'name_de',
  /** column name */
  NameEn = 'name_en'
}

/** input type for updating data in table "category_mediums" */
export type Category_Mediums_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  name_de?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
};

/** update columns of table "category_mediums" */
export enum Category_Mediums_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NameDe = 'name_de',
  /** column name */
  NameEn = 'name_en'
}

/** columns and relationships of "category_tags" */
export type Category_Tags = {
  __typename?: 'category_tags';
  id: Scalars['uuid'];
  name_de: Scalars['String'];
  name_en: Scalars['String'];
};

/** aggregated selection of "category_tags" */
export type Category_Tags_Aggregate = {
  __typename?: 'category_tags_aggregate';
  aggregate?: Maybe<Category_Tags_Aggregate_Fields>;
  nodes: Array<Category_Tags>;
};

/** aggregate fields of "category_tags" */
export type Category_Tags_Aggregate_Fields = {
  __typename?: 'category_tags_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Category_Tags_Max_Fields>;
  min?: Maybe<Category_Tags_Min_Fields>;
};


/** aggregate fields of "category_tags" */
export type Category_Tags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Category_Tags_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "category_tags". All fields are combined with a logical 'AND'. */
export type Category_Tags_Bool_Exp = {
  _and?: Maybe<Array<Category_Tags_Bool_Exp>>;
  _not?: Maybe<Category_Tags_Bool_Exp>;
  _or?: Maybe<Array<Category_Tags_Bool_Exp>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name_de?: Maybe<String_Comparison_Exp>;
  name_en?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "category_tags" */
export enum Category_Tags_Constraint {
  /** unique or primary key constraint */
  CategoryTagsNameDeKey = 'category_tags_name_de_key',
  /** unique or primary key constraint */
  CategoryTagsNameEnKey = 'category_tags_name_en_key',
  /** unique or primary key constraint */
  CategoryTagsPkey = 'category_tags_pkey'
}

/** input type for inserting data into table "category_tags" */
export type Category_Tags_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  name_de?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Category_Tags_Max_Fields = {
  __typename?: 'category_tags_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name_de?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Category_Tags_Min_Fields = {
  __typename?: 'category_tags_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name_de?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "category_tags" */
export type Category_Tags_Mutation_Response = {
  __typename?: 'category_tags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Category_Tags>;
};

/** on conflict condition type for table "category_tags" */
export type Category_Tags_On_Conflict = {
  constraint: Category_Tags_Constraint;
  update_columns: Array<Category_Tags_Update_Column>;
  where?: Maybe<Category_Tags_Bool_Exp>;
};

/** Ordering options when selecting data from "category_tags". */
export type Category_Tags_Order_By = {
  id?: Maybe<Order_By>;
  name_de?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
};

/** primary key columns input for table: category_tags */
export type Category_Tags_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "category_tags" */
export enum Category_Tags_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NameDe = 'name_de',
  /** column name */
  NameEn = 'name_en'
}

/** input type for updating data in table "category_tags" */
export type Category_Tags_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  name_de?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
};

/** update columns of table "category_tags" */
export enum Category_Tags_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NameDe = 'name_de',
  /** column name */
  NameEn = 'name_en'
}

/** columns and relationships of "editions" */
export type Editions = {
  __typename?: 'editions';
  application_end: Scalars['timestamptz'];
  application_start: Scalars['timestamptz'];
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applications_aggregate: Applications_Aggregate;
  created_at: Scalars['timestamptz'];
  current?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  rating_rounds: Array<Rating_Rounds>;
  /** An aggregate relationship */
  rating_rounds_aggregate: Rating_Rounds_Aggregate;
  /** A computed field, executes function "edition_state" */
  state?: Maybe<Scalars['String']>;
  /** An array relationship */
  updates: Array<Updates>;
  /** An aggregate relationship */
  updates_aggregate: Updates_Aggregate;
  /** An object relationship */
  winner?: Maybe<Applications>;
  winner_id?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "editions" */
export type EditionsApplicationsArgs = {
  distinct_on?: Maybe<Array<Applications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applications_Order_By>>;
  where?: Maybe<Applications_Bool_Exp>;
};


/** columns and relationships of "editions" */
export type EditionsApplications_AggregateArgs = {
  distinct_on?: Maybe<Array<Applications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applications_Order_By>>;
  where?: Maybe<Applications_Bool_Exp>;
};


/** columns and relationships of "editions" */
export type EditionsRating_RoundsArgs = {
  distinct_on?: Maybe<Array<Rating_Rounds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Rounds_Order_By>>;
  where?: Maybe<Rating_Rounds_Bool_Exp>;
};


/** columns and relationships of "editions" */
export type EditionsRating_Rounds_AggregateArgs = {
  distinct_on?: Maybe<Array<Rating_Rounds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Rounds_Order_By>>;
  where?: Maybe<Rating_Rounds_Bool_Exp>;
};


/** columns and relationships of "editions" */
export type EditionsUpdatesArgs = {
  distinct_on?: Maybe<Array<Updates_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Updates_Order_By>>;
  where?: Maybe<Updates_Bool_Exp>;
};


/** columns and relationships of "editions" */
export type EditionsUpdates_AggregateArgs = {
  distinct_on?: Maybe<Array<Updates_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Updates_Order_By>>;
  where?: Maybe<Updates_Bool_Exp>;
};

/** aggregated selection of "editions" */
export type Editions_Aggregate = {
  __typename?: 'editions_aggregate';
  aggregate?: Maybe<Editions_Aggregate_Fields>;
  nodes: Array<Editions>;
};

/** aggregate fields of "editions" */
export type Editions_Aggregate_Fields = {
  __typename?: 'editions_aggregate_fields';
  avg?: Maybe<Editions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Editions_Max_Fields>;
  min?: Maybe<Editions_Min_Fields>;
  stddev?: Maybe<Editions_Stddev_Fields>;
  stddev_pop?: Maybe<Editions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Editions_Stddev_Samp_Fields>;
  sum?: Maybe<Editions_Sum_Fields>;
  var_pop?: Maybe<Editions_Var_Pop_Fields>;
  var_samp?: Maybe<Editions_Var_Samp_Fields>;
  variance?: Maybe<Editions_Variance_Fields>;
};


/** aggregate fields of "editions" */
export type Editions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Editions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Editions_Avg_Fields = {
  __typename?: 'editions_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "editions". All fields are combined with a logical 'AND'. */
export type Editions_Bool_Exp = {
  _and?: Maybe<Array<Editions_Bool_Exp>>;
  _not?: Maybe<Editions_Bool_Exp>;
  _or?: Maybe<Array<Editions_Bool_Exp>>;
  application_end?: Maybe<Timestamptz_Comparison_Exp>;
  application_start?: Maybe<Timestamptz_Comparison_Exp>;
  applications?: Maybe<Applications_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  current?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  rating_rounds?: Maybe<Rating_Rounds_Bool_Exp>;
  updates?: Maybe<Updates_Bool_Exp>;
  winner?: Maybe<Applications_Bool_Exp>;
  winner_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "editions" */
export enum Editions_Constraint {
  /** unique or primary key constraint */
  EditionsCurrentKey = 'editions_current_key',
  /** unique or primary key constraint */
  EditionsNameKey = 'editions_name_key',
  /** unique or primary key constraint */
  EditionsPkey = 'editions_pkey'
}

/** input type for incrementing numeric columns in table "editions" */
export type Editions_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "editions" */
export type Editions_Insert_Input = {
  application_end?: Maybe<Scalars['timestamptz']>;
  application_start?: Maybe<Scalars['timestamptz']>;
  applications?: Maybe<Applications_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  current?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  rating_rounds?: Maybe<Rating_Rounds_Arr_Rel_Insert_Input>;
  updates?: Maybe<Updates_Arr_Rel_Insert_Input>;
  winner?: Maybe<Applications_Obj_Rel_Insert_Input>;
  winner_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Editions_Max_Fields = {
  __typename?: 'editions_max_fields';
  application_end?: Maybe<Scalars['timestamptz']>;
  application_start?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  winner_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Editions_Min_Fields = {
  __typename?: 'editions_min_fields';
  application_end?: Maybe<Scalars['timestamptz']>;
  application_start?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  winner_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "editions" */
export type Editions_Mutation_Response = {
  __typename?: 'editions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Editions>;
};

/** input type for inserting object relation for remote table "editions" */
export type Editions_Obj_Rel_Insert_Input = {
  data: Editions_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Editions_On_Conflict>;
};

/** on conflict condition type for table "editions" */
export type Editions_On_Conflict = {
  constraint: Editions_Constraint;
  update_columns: Array<Editions_Update_Column>;
  where?: Maybe<Editions_Bool_Exp>;
};

/** Ordering options when selecting data from "editions". */
export type Editions_Order_By = {
  application_end?: Maybe<Order_By>;
  application_start?: Maybe<Order_By>;
  applications_aggregate?: Maybe<Applications_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  current?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  rating_rounds_aggregate?: Maybe<Rating_Rounds_Aggregate_Order_By>;
  updates_aggregate?: Maybe<Updates_Aggregate_Order_By>;
  winner?: Maybe<Applications_Order_By>;
  winner_id?: Maybe<Order_By>;
};

/** primary key columns input for table: editions */
export type Editions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "editions" */
export enum Editions_Select_Column {
  /** column name */
  ApplicationEnd = 'application_end',
  /** column name */
  ApplicationStart = 'application_start',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Current = 'current',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  WinnerId = 'winner_id'
}

/** input type for updating data in table "editions" */
export type Editions_Set_Input = {
  application_end?: Maybe<Scalars['timestamptz']>;
  application_start?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  current?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  winner_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Editions_Stddev_Fields = {
  __typename?: 'editions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Editions_Stddev_Pop_Fields = {
  __typename?: 'editions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Editions_Stddev_Samp_Fields = {
  __typename?: 'editions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Editions_Sum_Fields = {
  __typename?: 'editions_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "editions" */
export enum Editions_Update_Column {
  /** column name */
  ApplicationEnd = 'application_end',
  /** column name */
  ApplicationStart = 'application_start',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Current = 'current',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  WinnerId = 'winner_id'
}

/** aggregate var_pop on columns */
export type Editions_Var_Pop_Fields = {
  __typename?: 'editions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Editions_Var_Samp_Fields = {
  __typename?: 'editions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Editions_Variance_Fields = {
  __typename?: 'editions_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "eliminations" */
export type Eliminations = {
  __typename?: 'eliminations';
  /** An object relationship */
  application: Applications;
  application_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['String'];
  /** An object relationship */
  eliminated_by: Users;
  id: Scalars['Int'];
  /** An object relationship */
  rating_round?: Maybe<Rating_Rounds>;
  reason?: Maybe<Scalars['String']>;
  round_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "eliminations" */
export type Eliminations_Aggregate = {
  __typename?: 'eliminations_aggregate';
  aggregate?: Maybe<Eliminations_Aggregate_Fields>;
  nodes: Array<Eliminations>;
};

/** aggregate fields of "eliminations" */
export type Eliminations_Aggregate_Fields = {
  __typename?: 'eliminations_aggregate_fields';
  avg?: Maybe<Eliminations_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Eliminations_Max_Fields>;
  min?: Maybe<Eliminations_Min_Fields>;
  stddev?: Maybe<Eliminations_Stddev_Fields>;
  stddev_pop?: Maybe<Eliminations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Eliminations_Stddev_Samp_Fields>;
  sum?: Maybe<Eliminations_Sum_Fields>;
  var_pop?: Maybe<Eliminations_Var_Pop_Fields>;
  var_samp?: Maybe<Eliminations_Var_Samp_Fields>;
  variance?: Maybe<Eliminations_Variance_Fields>;
};


/** aggregate fields of "eliminations" */
export type Eliminations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Eliminations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "eliminations" */
export type Eliminations_Aggregate_Order_By = {
  avg?: Maybe<Eliminations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Eliminations_Max_Order_By>;
  min?: Maybe<Eliminations_Min_Order_By>;
  stddev?: Maybe<Eliminations_Stddev_Order_By>;
  stddev_pop?: Maybe<Eliminations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Eliminations_Stddev_Samp_Order_By>;
  sum?: Maybe<Eliminations_Sum_Order_By>;
  var_pop?: Maybe<Eliminations_Var_Pop_Order_By>;
  var_samp?: Maybe<Eliminations_Var_Samp_Order_By>;
  variance?: Maybe<Eliminations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "eliminations" */
export type Eliminations_Arr_Rel_Insert_Input = {
  data: Array<Eliminations_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Eliminations_On_Conflict>;
};

/** aggregate avg on columns */
export type Eliminations_Avg_Fields = {
  __typename?: 'eliminations_avg_fields';
  id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "eliminations" */
export type Eliminations_Avg_Order_By = {
  id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "eliminations". All fields are combined with a logical 'AND'. */
export type Eliminations_Bool_Exp = {
  _and?: Maybe<Array<Eliminations_Bool_Exp>>;
  _not?: Maybe<Eliminations_Bool_Exp>;
  _or?: Maybe<Array<Eliminations_Bool_Exp>>;
  application?: Maybe<Applications_Bool_Exp>;
  application_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by?: Maybe<String_Comparison_Exp>;
  eliminated_by?: Maybe<Users_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  rating_round?: Maybe<Rating_Rounds_Bool_Exp>;
  reason?: Maybe<String_Comparison_Exp>;
  round_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "eliminations" */
export enum Eliminations_Constraint {
  /** unique or primary key constraint */
  EliminationsApplicationIdKey = 'eliminations_application_id_key',
  /** unique or primary key constraint */
  EliminationsIdKey = 'eliminations_id_key',
  /** unique or primary key constraint */
  EliminationsPkey = 'eliminations_pkey'
}

/** input type for incrementing numeric columns in table "eliminations" */
export type Eliminations_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  round_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "eliminations" */
export type Eliminations_Insert_Input = {
  application?: Maybe<Applications_Obj_Rel_Insert_Input>;
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  eliminated_by?: Maybe<Users_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  rating_round?: Maybe<Rating_Rounds_Obj_Rel_Insert_Input>;
  reason?: Maybe<Scalars['String']>;
  round_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Eliminations_Max_Fields = {
  __typename?: 'eliminations_max_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  reason?: Maybe<Scalars['String']>;
  round_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "eliminations" */
export type Eliminations_Max_Order_By = {
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reason?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Eliminations_Min_Fields = {
  __typename?: 'eliminations_min_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  reason?: Maybe<Scalars['String']>;
  round_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "eliminations" */
export type Eliminations_Min_Order_By = {
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reason?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "eliminations" */
export type Eliminations_Mutation_Response = {
  __typename?: 'eliminations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Eliminations>;
};

/** input type for inserting object relation for remote table "eliminations" */
export type Eliminations_Obj_Rel_Insert_Input = {
  data: Eliminations_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Eliminations_On_Conflict>;
};

/** on conflict condition type for table "eliminations" */
export type Eliminations_On_Conflict = {
  constraint: Eliminations_Constraint;
  update_columns: Array<Eliminations_Update_Column>;
  where?: Maybe<Eliminations_Bool_Exp>;
};

/** Ordering options when selecting data from "eliminations". */
export type Eliminations_Order_By = {
  application?: Maybe<Applications_Order_By>;
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  eliminated_by?: Maybe<Users_Order_By>;
  id?: Maybe<Order_By>;
  rating_round?: Maybe<Rating_Rounds_Order_By>;
  reason?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
};

/** primary key columns input for table: eliminations */
export type Eliminations_Pk_Columns_Input = {
  application_id: Scalars['uuid'];
};

/** select columns of table "eliminations" */
export enum Eliminations_Select_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  Reason = 'reason',
  /** column name */
  RoundId = 'round_id'
}

/** input type for updating data in table "eliminations" */
export type Eliminations_Set_Input = {
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  reason?: Maybe<Scalars['String']>;
  round_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Eliminations_Stddev_Fields = {
  __typename?: 'eliminations_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "eliminations" */
export type Eliminations_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Eliminations_Stddev_Pop_Fields = {
  __typename?: 'eliminations_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "eliminations" */
export type Eliminations_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Eliminations_Stddev_Samp_Fields = {
  __typename?: 'eliminations_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "eliminations" */
export type Eliminations_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Eliminations_Sum_Fields = {
  __typename?: 'eliminations_sum_fields';
  id?: Maybe<Scalars['Int']>;
  round_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "eliminations" */
export type Eliminations_Sum_Order_By = {
  id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
};

/** update columns of table "eliminations" */
export enum Eliminations_Update_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  Reason = 'reason',
  /** column name */
  RoundId = 'round_id'
}

/** aggregate var_pop on columns */
export type Eliminations_Var_Pop_Fields = {
  __typename?: 'eliminations_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "eliminations" */
export type Eliminations_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Eliminations_Var_Samp_Fields = {
  __typename?: 'eliminations_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "eliminations" */
export type Eliminations_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Eliminations_Variance_Fields = {
  __typename?: 'eliminations_variance_fields';
  id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "eliminations" */
export type Eliminations_Variance_Order_By = {
  id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
};

/** columns and relationships of "messages" */
export type Messages = {
  __typename?: 'messages';
  /** An object relationship */
  application: Applications;
  application_id: Scalars['uuid'];
  created_at: Scalars['timestamp'];
  created_by: Scalars['String'];
  id: Scalars['Int'];
  /** An object relationship */
  rating?: Maybe<Ratings>;
  /** An object relationship */
  rating_round?: Maybe<Rating_Rounds>;
  round_id?: Maybe<Scalars['Int']>;
  text: Scalars['String'];
  /** An object relationship */
  user: Users;
};

/** aggregated selection of "messages" */
export type Messages_Aggregate = {
  __typename?: 'messages_aggregate';
  aggregate?: Maybe<Messages_Aggregate_Fields>;
  nodes: Array<Messages>;
};

/** aggregate fields of "messages" */
export type Messages_Aggregate_Fields = {
  __typename?: 'messages_aggregate_fields';
  avg?: Maybe<Messages_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Messages_Max_Fields>;
  min?: Maybe<Messages_Min_Fields>;
  stddev?: Maybe<Messages_Stddev_Fields>;
  stddev_pop?: Maybe<Messages_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Messages_Stddev_Samp_Fields>;
  sum?: Maybe<Messages_Sum_Fields>;
  var_pop?: Maybe<Messages_Var_Pop_Fields>;
  var_samp?: Maybe<Messages_Var_Samp_Fields>;
  variance?: Maybe<Messages_Variance_Fields>;
};


/** aggregate fields of "messages" */
export type Messages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Messages_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "messages" */
export type Messages_Aggregate_Order_By = {
  avg?: Maybe<Messages_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Messages_Max_Order_By>;
  min?: Maybe<Messages_Min_Order_By>;
  stddev?: Maybe<Messages_Stddev_Order_By>;
  stddev_pop?: Maybe<Messages_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Messages_Stddev_Samp_Order_By>;
  sum?: Maybe<Messages_Sum_Order_By>;
  var_pop?: Maybe<Messages_Var_Pop_Order_By>;
  var_samp?: Maybe<Messages_Var_Samp_Order_By>;
  variance?: Maybe<Messages_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "messages" */
export type Messages_Arr_Rel_Insert_Input = {
  data: Array<Messages_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Messages_On_Conflict>;
};

/** aggregate avg on columns */
export type Messages_Avg_Fields = {
  __typename?: 'messages_avg_fields';
  id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "messages" */
export type Messages_Avg_Order_By = {
  id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export type Messages_Bool_Exp = {
  _and?: Maybe<Array<Messages_Bool_Exp>>;
  _not?: Maybe<Messages_Bool_Exp>;
  _or?: Maybe<Array<Messages_Bool_Exp>>;
  application?: Maybe<Applications_Bool_Exp>;
  application_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  created_by?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  rating?: Maybe<Ratings_Bool_Exp>;
  rating_round?: Maybe<Rating_Rounds_Bool_Exp>;
  round_id?: Maybe<Int_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "messages" */
export enum Messages_Constraint {
  /** unique or primary key constraint */
  MessagesPkey = 'messages_pkey'
}

/** input type for incrementing numeric columns in table "messages" */
export type Messages_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  round_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "messages" */
export type Messages_Insert_Input = {
  application?: Maybe<Applications_Obj_Rel_Insert_Input>;
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Ratings_Obj_Rel_Insert_Input>;
  rating_round?: Maybe<Rating_Rounds_Obj_Rel_Insert_Input>;
  round_id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Messages_Max_Fields = {
  __typename?: 'messages_max_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  round_id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "messages" */
export type Messages_Max_Order_By = {
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Messages_Min_Fields = {
  __typename?: 'messages_min_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  round_id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "messages" */
export type Messages_Min_Order_By = {
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** response of any mutation on the table "messages" */
export type Messages_Mutation_Response = {
  __typename?: 'messages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Messages>;
};

/** input type for inserting object relation for remote table "messages" */
export type Messages_Obj_Rel_Insert_Input = {
  data: Messages_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Messages_On_Conflict>;
};

/** on conflict condition type for table "messages" */
export type Messages_On_Conflict = {
  constraint: Messages_Constraint;
  update_columns: Array<Messages_Update_Column>;
  where?: Maybe<Messages_Bool_Exp>;
};

/** Ordering options when selecting data from "messages". */
export type Messages_Order_By = {
  application?: Maybe<Applications_Order_By>;
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  rating?: Maybe<Ratings_Order_By>;
  rating_round?: Maybe<Rating_Rounds_Order_By>;
  round_id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
};

/** primary key columns input for table: messages */
export type Messages_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "messages" */
export enum Messages_Select_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  RoundId = 'round_id',
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "messages" */
export type Messages_Set_Input = {
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  round_id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Messages_Stddev_Fields = {
  __typename?: 'messages_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "messages" */
export type Messages_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Messages_Stddev_Pop_Fields = {
  __typename?: 'messages_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "messages" */
export type Messages_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Messages_Stddev_Samp_Fields = {
  __typename?: 'messages_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "messages" */
export type Messages_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Messages_Sum_Fields = {
  __typename?: 'messages_sum_fields';
  id?: Maybe<Scalars['Int']>;
  round_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "messages" */
export type Messages_Sum_Order_By = {
  id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
};

/** update columns of table "messages" */
export enum Messages_Update_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  RoundId = 'round_id',
  /** column name */
  Text = 'text'
}

/** aggregate var_pop on columns */
export type Messages_Var_Pop_Fields = {
  __typename?: 'messages_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "messages" */
export type Messages_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Messages_Var_Samp_Fields = {
  __typename?: 'messages_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "messages" */
export type Messages_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Messages_Variance_Fields = {
  __typename?: 'messages_variance_fields';
  id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "messages" */
export type Messages_Variance_Order_By = {
  id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "applications" */
  delete_applications?: Maybe<Applications_Mutation_Response>;
  /** delete single row from the table: "applications" */
  delete_applications_by_pk?: Maybe<Applications>;
  /** delete data from the table: "category_mediums" */
  delete_category_mediums?: Maybe<Category_Mediums_Mutation_Response>;
  /** delete single row from the table: "category_mediums" */
  delete_category_mediums_by_pk?: Maybe<Category_Mediums>;
  /** delete data from the table: "category_tags" */
  delete_category_tags?: Maybe<Category_Tags_Mutation_Response>;
  /** delete single row from the table: "category_tags" */
  delete_category_tags_by_pk?: Maybe<Category_Tags>;
  /** delete data from the table: "editions" */
  delete_editions?: Maybe<Editions_Mutation_Response>;
  /** delete single row from the table: "editions" */
  delete_editions_by_pk?: Maybe<Editions>;
  /** delete data from the table: "eliminations" */
  delete_eliminations?: Maybe<Eliminations_Mutation_Response>;
  /** delete single row from the table: "eliminations" */
  delete_eliminations_by_pk?: Maybe<Eliminations>;
  /** delete data from the table: "messages" */
  delete_messages?: Maybe<Messages_Mutation_Response>;
  /** delete single row from the table: "messages" */
  delete_messages_by_pk?: Maybe<Messages>;
  /** delete data from the table: "payments" */
  delete_payments?: Maybe<Payments_Mutation_Response>;
  /** delete single row from the table: "payments" */
  delete_payments_by_pk?: Maybe<Payments>;
  /** delete data from the table: "rating_rounds" */
  delete_rating_rounds?: Maybe<Rating_Rounds_Mutation_Response>;
  /** delete single row from the table: "rating_rounds" */
  delete_rating_rounds_by_pk?: Maybe<Rating_Rounds>;
  /** delete data from the table: "ratings" */
  delete_ratings?: Maybe<Ratings_Mutation_Response>;
  /** delete single row from the table: "ratings" */
  delete_ratings_by_pk?: Maybe<Ratings>;
  /** delete data from the table: "updates" */
  delete_updates?: Maybe<Updates_Mutation_Response>;
  /** delete single row from the table: "updates" */
  delete_updates_by_pk?: Maybe<Updates>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "users_online" */
  delete_users_online?: Maybe<Users_Online_Mutation_Response>;
  /** delete data from the table: "wordlist" */
  delete_wordlist?: Maybe<Wordlist_Mutation_Response>;
  /** delete single row from the table: "wordlist" */
  delete_wordlist_by_pk?: Maybe<Wordlist>;
  /** delete data from the table: "work_files" */
  delete_work_files?: Maybe<Work_Files_Mutation_Response>;
  /** delete single row from the table: "work_files" */
  delete_work_files_by_pk?: Maybe<Work_Files>;
  /** delete data from the table: "work_specification_mediums" */
  delete_work_specification_mediums?: Maybe<Work_Specification_Mediums_Mutation_Response>;
  /** delete single row from the table: "work_specification_mediums" */
  delete_work_specification_mediums_by_pk?: Maybe<Work_Specification_Mediums>;
  /** delete data from the table: "work_specification_tags" */
  delete_work_specification_tags?: Maybe<Work_Specification_Tags_Mutation_Response>;
  /** delete single row from the table: "work_specification_tags" */
  delete_work_specification_tags_by_pk?: Maybe<Work_Specification_Tags>;
  /** delete data from the table: "work_specifications" */
  delete_work_specifications?: Maybe<Work_Specifications_Mutation_Response>;
  /** delete single row from the table: "work_specifications" */
  delete_work_specifications_by_pk?: Maybe<Work_Specifications>;
  /** delete data from the table: "works" */
  delete_works?: Maybe<Works_Mutation_Response>;
  /** delete single row from the table: "works" */
  delete_works_by_pk?: Maybe<Works>;
  /** insert data into the table: "applications" */
  insert_applications?: Maybe<Applications_Mutation_Response>;
  /** insert a single row into the table: "applications" */
  insert_applications_one?: Maybe<Applications>;
  /** insert data into the table: "category_mediums" */
  insert_category_mediums?: Maybe<Category_Mediums_Mutation_Response>;
  /** insert a single row into the table: "category_mediums" */
  insert_category_mediums_one?: Maybe<Category_Mediums>;
  /** insert data into the table: "category_tags" */
  insert_category_tags?: Maybe<Category_Tags_Mutation_Response>;
  /** insert a single row into the table: "category_tags" */
  insert_category_tags_one?: Maybe<Category_Tags>;
  /** insert data into the table: "editions" */
  insert_editions?: Maybe<Editions_Mutation_Response>;
  /** insert a single row into the table: "editions" */
  insert_editions_one?: Maybe<Editions>;
  /** insert data into the table: "eliminations" */
  insert_eliminations?: Maybe<Eliminations_Mutation_Response>;
  /** insert a single row into the table: "eliminations" */
  insert_eliminations_one?: Maybe<Eliminations>;
  /** insert data into the table: "messages" */
  insert_messages?: Maybe<Messages_Mutation_Response>;
  /** insert a single row into the table: "messages" */
  insert_messages_one?: Maybe<Messages>;
  /** insert data into the table: "payments" */
  insert_payments?: Maybe<Payments_Mutation_Response>;
  /** insert a single row into the table: "payments" */
  insert_payments_one?: Maybe<Payments>;
  /** insert data into the table: "rating_rounds" */
  insert_rating_rounds?: Maybe<Rating_Rounds_Mutation_Response>;
  /** insert a single row into the table: "rating_rounds" */
  insert_rating_rounds_one?: Maybe<Rating_Rounds>;
  /** insert data into the table: "ratings" */
  insert_ratings?: Maybe<Ratings_Mutation_Response>;
  /** insert a single row into the table: "ratings" */
  insert_ratings_one?: Maybe<Ratings>;
  /** insert data into the table: "updates" */
  insert_updates?: Maybe<Updates_Mutation_Response>;
  /** insert a single row into the table: "updates" */
  insert_updates_one?: Maybe<Updates>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "users_online" */
  insert_users_online?: Maybe<Users_Online_Mutation_Response>;
  /** insert a single row into the table: "users_online" */
  insert_users_online_one?: Maybe<Users_Online>;
  /** insert data into the table: "wordlist" */
  insert_wordlist?: Maybe<Wordlist_Mutation_Response>;
  /** insert a single row into the table: "wordlist" */
  insert_wordlist_one?: Maybe<Wordlist>;
  /** insert data into the table: "work_files" */
  insert_work_files?: Maybe<Work_Files_Mutation_Response>;
  /** insert a single row into the table: "work_files" */
  insert_work_files_one?: Maybe<Work_Files>;
  /** insert data into the table: "work_specification_mediums" */
  insert_work_specification_mediums?: Maybe<Work_Specification_Mediums_Mutation_Response>;
  /** insert a single row into the table: "work_specification_mediums" */
  insert_work_specification_mediums_one?: Maybe<Work_Specification_Mediums>;
  /** insert data into the table: "work_specification_tags" */
  insert_work_specification_tags?: Maybe<Work_Specification_Tags_Mutation_Response>;
  /** insert a single row into the table: "work_specification_tags" */
  insert_work_specification_tags_one?: Maybe<Work_Specification_Tags>;
  /** insert data into the table: "work_specifications" */
  insert_work_specifications?: Maybe<Work_Specifications_Mutation_Response>;
  /** insert a single row into the table: "work_specifications" */
  insert_work_specifications_one?: Maybe<Work_Specifications>;
  /** insert data into the table: "works" */
  insert_works?: Maybe<Works_Mutation_Response>;
  /** insert a single row into the table: "works" */
  insert_works_one?: Maybe<Works>;
  /** update data of the table: "applications" */
  update_applications?: Maybe<Applications_Mutation_Response>;
  /** update single row of the table: "applications" */
  update_applications_by_pk?: Maybe<Applications>;
  /** update data of the table: "category_mediums" */
  update_category_mediums?: Maybe<Category_Mediums_Mutation_Response>;
  /** update single row of the table: "category_mediums" */
  update_category_mediums_by_pk?: Maybe<Category_Mediums>;
  /** update data of the table: "category_tags" */
  update_category_tags?: Maybe<Category_Tags_Mutation_Response>;
  /** update single row of the table: "category_tags" */
  update_category_tags_by_pk?: Maybe<Category_Tags>;
  /** update data of the table: "editions" */
  update_editions?: Maybe<Editions_Mutation_Response>;
  /** update single row of the table: "editions" */
  update_editions_by_pk?: Maybe<Editions>;
  /** update data of the table: "eliminations" */
  update_eliminations?: Maybe<Eliminations_Mutation_Response>;
  /** update single row of the table: "eliminations" */
  update_eliminations_by_pk?: Maybe<Eliminations>;
  /** update data of the table: "messages" */
  update_messages?: Maybe<Messages_Mutation_Response>;
  /** update single row of the table: "messages" */
  update_messages_by_pk?: Maybe<Messages>;
  /** update data of the table: "payments" */
  update_payments?: Maybe<Payments_Mutation_Response>;
  /** update single row of the table: "payments" */
  update_payments_by_pk?: Maybe<Payments>;
  /** update data of the table: "rating_rounds" */
  update_rating_rounds?: Maybe<Rating_Rounds_Mutation_Response>;
  /** update single row of the table: "rating_rounds" */
  update_rating_rounds_by_pk?: Maybe<Rating_Rounds>;
  /** update data of the table: "ratings" */
  update_ratings?: Maybe<Ratings_Mutation_Response>;
  /** update single row of the table: "ratings" */
  update_ratings_by_pk?: Maybe<Ratings>;
  /** update data of the table: "updates" */
  update_updates?: Maybe<Updates_Mutation_Response>;
  /** update single row of the table: "updates" */
  update_updates_by_pk?: Maybe<Updates>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "users_online" */
  update_users_online?: Maybe<Users_Online_Mutation_Response>;
  /** update data of the table: "wordlist" */
  update_wordlist?: Maybe<Wordlist_Mutation_Response>;
  /** update single row of the table: "wordlist" */
  update_wordlist_by_pk?: Maybe<Wordlist>;
  /** update data of the table: "work_files" */
  update_work_files?: Maybe<Work_Files_Mutation_Response>;
  /** update single row of the table: "work_files" */
  update_work_files_by_pk?: Maybe<Work_Files>;
  /** update data of the table: "work_specification_mediums" */
  update_work_specification_mediums?: Maybe<Work_Specification_Mediums_Mutation_Response>;
  /** update single row of the table: "work_specification_mediums" */
  update_work_specification_mediums_by_pk?: Maybe<Work_Specification_Mediums>;
  /** update data of the table: "work_specification_tags" */
  update_work_specification_tags?: Maybe<Work_Specification_Tags_Mutation_Response>;
  /** update single row of the table: "work_specification_tags" */
  update_work_specification_tags_by_pk?: Maybe<Work_Specification_Tags>;
  /** update data of the table: "work_specifications" */
  update_work_specifications?: Maybe<Work_Specifications_Mutation_Response>;
  /** update single row of the table: "work_specifications" */
  update_work_specifications_by_pk?: Maybe<Work_Specifications>;
  /** update data of the table: "works" */
  update_works?: Maybe<Works_Mutation_Response>;
  /** update single row of the table: "works" */
  update_works_by_pk?: Maybe<Works>;
};


/** mutation root */
export type Mutation_RootDelete_ApplicationsArgs = {
  where: Applications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Applications_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Category_MediumsArgs = {
  where: Category_Mediums_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Category_Mediums_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Category_TagsArgs = {
  where: Category_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Category_Tags_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_EditionsArgs = {
  where: Editions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Editions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_EliminationsArgs = {
  where: Eliminations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Eliminations_By_PkArgs = {
  application_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Messages_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PaymentsArgs = {
  where: Payments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Rating_RoundsArgs = {
  where: Rating_Rounds_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rating_Rounds_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_RatingsArgs = {
  where: Ratings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ratings_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UpdatesArgs = {
  where: Updates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Updates_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Users_OnlineArgs = {
  where: Users_Online_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_WordlistArgs = {
  where: Wordlist_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Wordlist_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Work_FilesArgs = {
  where: Work_Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Work_Files_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Work_Specification_MediumsArgs = {
  where: Work_Specification_Mediums_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Work_Specification_Mediums_By_PkArgs = {
  medium_id: Scalars['uuid'];
  specification_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Work_Specification_TagsArgs = {
  where: Work_Specification_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Work_Specification_Tags_By_PkArgs = {
  specification_id: Scalars['uuid'];
  tag_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Work_SpecificationsArgs = {
  where: Work_Specifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Work_Specifications_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_WorksArgs = {
  where: Works_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Works_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_ApplicationsArgs = {
  objects: Array<Applications_Insert_Input>;
  on_conflict?: Maybe<Applications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Applications_OneArgs = {
  object: Applications_Insert_Input;
  on_conflict?: Maybe<Applications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Category_MediumsArgs = {
  objects: Array<Category_Mediums_Insert_Input>;
  on_conflict?: Maybe<Category_Mediums_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Category_Mediums_OneArgs = {
  object: Category_Mediums_Insert_Input;
  on_conflict?: Maybe<Category_Mediums_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Category_TagsArgs = {
  objects: Array<Category_Tags_Insert_Input>;
  on_conflict?: Maybe<Category_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Category_Tags_OneArgs = {
  object: Category_Tags_Insert_Input;
  on_conflict?: Maybe<Category_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EditionsArgs = {
  objects: Array<Editions_Insert_Input>;
  on_conflict?: Maybe<Editions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Editions_OneArgs = {
  object: Editions_Insert_Input;
  on_conflict?: Maybe<Editions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EliminationsArgs = {
  objects: Array<Eliminations_Insert_Input>;
  on_conflict?: Maybe<Eliminations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Eliminations_OneArgs = {
  object: Eliminations_Insert_Input;
  on_conflict?: Maybe<Eliminations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessagesArgs = {
  objects: Array<Messages_Insert_Input>;
  on_conflict?: Maybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Messages_OneArgs = {
  object: Messages_Insert_Input;
  on_conflict?: Maybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PaymentsArgs = {
  objects: Array<Payments_Insert_Input>;
  on_conflict?: Maybe<Payments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payments_OneArgs = {
  object: Payments_Insert_Input;
  on_conflict?: Maybe<Payments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rating_RoundsArgs = {
  objects: Array<Rating_Rounds_Insert_Input>;
  on_conflict?: Maybe<Rating_Rounds_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rating_Rounds_OneArgs = {
  object: Rating_Rounds_Insert_Input;
  on_conflict?: Maybe<Rating_Rounds_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RatingsArgs = {
  objects: Array<Ratings_Insert_Input>;
  on_conflict?: Maybe<Ratings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ratings_OneArgs = {
  object: Ratings_Insert_Input;
  on_conflict?: Maybe<Ratings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UpdatesArgs = {
  objects: Array<Updates_Insert_Input>;
  on_conflict?: Maybe<Updates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Updates_OneArgs = {
  object: Updates_Insert_Input;
  on_conflict?: Maybe<Updates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OnlineArgs = {
  objects: Array<Users_Online_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Online_OneArgs = {
  object: Users_Online_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_WordlistArgs = {
  objects: Array<Wordlist_Insert_Input>;
  on_conflict?: Maybe<Wordlist_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Wordlist_OneArgs = {
  object: Wordlist_Insert_Input;
  on_conflict?: Maybe<Wordlist_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_FilesArgs = {
  objects: Array<Work_Files_Insert_Input>;
  on_conflict?: Maybe<Work_Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_Files_OneArgs = {
  object: Work_Files_Insert_Input;
  on_conflict?: Maybe<Work_Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_Specification_MediumsArgs = {
  objects: Array<Work_Specification_Mediums_Insert_Input>;
  on_conflict?: Maybe<Work_Specification_Mediums_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_Specification_Mediums_OneArgs = {
  object: Work_Specification_Mediums_Insert_Input;
  on_conflict?: Maybe<Work_Specification_Mediums_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_Specification_TagsArgs = {
  objects: Array<Work_Specification_Tags_Insert_Input>;
  on_conflict?: Maybe<Work_Specification_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_Specification_Tags_OneArgs = {
  object: Work_Specification_Tags_Insert_Input;
  on_conflict?: Maybe<Work_Specification_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_SpecificationsArgs = {
  objects: Array<Work_Specifications_Insert_Input>;
  on_conflict?: Maybe<Work_Specifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_Specifications_OneArgs = {
  object: Work_Specifications_Insert_Input;
  on_conflict?: Maybe<Work_Specifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WorksArgs = {
  objects: Array<Works_Insert_Input>;
  on_conflict?: Maybe<Works_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Works_OneArgs = {
  object: Works_Insert_Input;
  on_conflict?: Maybe<Works_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ApplicationsArgs = {
  _inc?: Maybe<Applications_Inc_Input>;
  _set?: Maybe<Applications_Set_Input>;
  where: Applications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Applications_By_PkArgs = {
  _inc?: Maybe<Applications_Inc_Input>;
  _set?: Maybe<Applications_Set_Input>;
  pk_columns: Applications_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Category_MediumsArgs = {
  _set?: Maybe<Category_Mediums_Set_Input>;
  where: Category_Mediums_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Category_Mediums_By_PkArgs = {
  _set?: Maybe<Category_Mediums_Set_Input>;
  pk_columns: Category_Mediums_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Category_TagsArgs = {
  _set?: Maybe<Category_Tags_Set_Input>;
  where: Category_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Category_Tags_By_PkArgs = {
  _set?: Maybe<Category_Tags_Set_Input>;
  pk_columns: Category_Tags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_EditionsArgs = {
  _inc?: Maybe<Editions_Inc_Input>;
  _set?: Maybe<Editions_Set_Input>;
  where: Editions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Editions_By_PkArgs = {
  _inc?: Maybe<Editions_Inc_Input>;
  _set?: Maybe<Editions_Set_Input>;
  pk_columns: Editions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_EliminationsArgs = {
  _inc?: Maybe<Eliminations_Inc_Input>;
  _set?: Maybe<Eliminations_Set_Input>;
  where: Eliminations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Eliminations_By_PkArgs = {
  _inc?: Maybe<Eliminations_Inc_Input>;
  _set?: Maybe<Eliminations_Set_Input>;
  pk_columns: Eliminations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MessagesArgs = {
  _inc?: Maybe<Messages_Inc_Input>;
  _set?: Maybe<Messages_Set_Input>;
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Messages_By_PkArgs = {
  _inc?: Maybe<Messages_Inc_Input>;
  _set?: Maybe<Messages_Set_Input>;
  pk_columns: Messages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PaymentsArgs = {
  _inc?: Maybe<Payments_Inc_Input>;
  _set?: Maybe<Payments_Set_Input>;
  where: Payments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payments_By_PkArgs = {
  _inc?: Maybe<Payments_Inc_Input>;
  _set?: Maybe<Payments_Set_Input>;
  pk_columns: Payments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rating_RoundsArgs = {
  _inc?: Maybe<Rating_Rounds_Inc_Input>;
  _set?: Maybe<Rating_Rounds_Set_Input>;
  where: Rating_Rounds_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rating_Rounds_By_PkArgs = {
  _inc?: Maybe<Rating_Rounds_Inc_Input>;
  _set?: Maybe<Rating_Rounds_Set_Input>;
  pk_columns: Rating_Rounds_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RatingsArgs = {
  _inc?: Maybe<Ratings_Inc_Input>;
  _set?: Maybe<Ratings_Set_Input>;
  where: Ratings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ratings_By_PkArgs = {
  _inc?: Maybe<Ratings_Inc_Input>;
  _set?: Maybe<Ratings_Set_Input>;
  pk_columns: Ratings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UpdatesArgs = {
  _inc?: Maybe<Updates_Inc_Input>;
  _set?: Maybe<Updates_Set_Input>;
  where: Updates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Updates_By_PkArgs = {
  _inc?: Maybe<Updates_Inc_Input>;
  _set?: Maybe<Updates_Set_Input>;
  pk_columns: Updates_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_OnlineArgs = {
  _set?: Maybe<Users_Online_Set_Input>;
  where: Users_Online_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_WordlistArgs = {
  _inc?: Maybe<Wordlist_Inc_Input>;
  _set?: Maybe<Wordlist_Set_Input>;
  where: Wordlist_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Wordlist_By_PkArgs = {
  _inc?: Maybe<Wordlist_Inc_Input>;
  _set?: Maybe<Wordlist_Set_Input>;
  pk_columns: Wordlist_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Work_FilesArgs = {
  _inc?: Maybe<Work_Files_Inc_Input>;
  _set?: Maybe<Work_Files_Set_Input>;
  where: Work_Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Files_By_PkArgs = {
  _inc?: Maybe<Work_Files_Inc_Input>;
  _set?: Maybe<Work_Files_Set_Input>;
  pk_columns: Work_Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Specification_MediumsArgs = {
  _set?: Maybe<Work_Specification_Mediums_Set_Input>;
  where: Work_Specification_Mediums_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Specification_Mediums_By_PkArgs = {
  _set?: Maybe<Work_Specification_Mediums_Set_Input>;
  pk_columns: Work_Specification_Mediums_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Specification_TagsArgs = {
  _set?: Maybe<Work_Specification_Tags_Set_Input>;
  where: Work_Specification_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Specification_Tags_By_PkArgs = {
  _set?: Maybe<Work_Specification_Tags_Set_Input>;
  pk_columns: Work_Specification_Tags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Work_SpecificationsArgs = {
  _inc?: Maybe<Work_Specifications_Inc_Input>;
  _set?: Maybe<Work_Specifications_Set_Input>;
  where: Work_Specifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Specifications_By_PkArgs = {
  _inc?: Maybe<Work_Specifications_Inc_Input>;
  _set?: Maybe<Work_Specifications_Set_Input>;
  pk_columns: Work_Specifications_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_WorksArgs = {
  _inc?: Maybe<Works_Inc_Input>;
  _set?: Maybe<Works_Set_Input>;
  where: Works_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Works_By_PkArgs = {
  _inc?: Maybe<Works_Inc_Input>;
  _set?: Maybe<Works_Set_Input>;
  pk_columns: Works_Pk_Columns_Input;
};


/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "payments" */
export type Payments = {
  __typename?: 'payments';
  /** An object relationship */
  application: Applications;
  application_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  key: Scalars['String'];
  mimetype: Scalars['String'];
  originalname: Scalars['String'];
  size: Scalars['numeric'];
};

/** aggregated selection of "payments" */
export type Payments_Aggregate = {
  __typename?: 'payments_aggregate';
  aggregate?: Maybe<Payments_Aggregate_Fields>;
  nodes: Array<Payments>;
};

/** aggregate fields of "payments" */
export type Payments_Aggregate_Fields = {
  __typename?: 'payments_aggregate_fields';
  avg?: Maybe<Payments_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Payments_Max_Fields>;
  min?: Maybe<Payments_Min_Fields>;
  stddev?: Maybe<Payments_Stddev_Fields>;
  stddev_pop?: Maybe<Payments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Payments_Stddev_Samp_Fields>;
  sum?: Maybe<Payments_Sum_Fields>;
  var_pop?: Maybe<Payments_Var_Pop_Fields>;
  var_samp?: Maybe<Payments_Var_Samp_Fields>;
  variance?: Maybe<Payments_Variance_Fields>;
};


/** aggregate fields of "payments" */
export type Payments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Payments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Payments_Avg_Fields = {
  __typename?: 'payments_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "payments". All fields are combined with a logical 'AND'. */
export type Payments_Bool_Exp = {
  _and?: Maybe<Array<Payments_Bool_Exp>>;
  _not?: Maybe<Payments_Bool_Exp>;
  _or?: Maybe<Array<Payments_Bool_Exp>>;
  application?: Maybe<Applications_Bool_Exp>;
  application_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  key?: Maybe<String_Comparison_Exp>;
  mimetype?: Maybe<String_Comparison_Exp>;
  originalname?: Maybe<String_Comparison_Exp>;
  size?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "payments" */
export enum Payments_Constraint {
  /** unique or primary key constraint */
  PaymentsApplicationIdKey = 'payments_application_id_key',
  /** unique or primary key constraint */
  PaymentsPkey = 'payments_pkey'
}

/** input type for incrementing numeric columns in table "payments" */
export type Payments_Inc_Input = {
  size?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "payments" */
export type Payments_Insert_Input = {
  application?: Maybe<Applications_Obj_Rel_Insert_Input>;
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  key?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  originalname?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Payments_Max_Fields = {
  __typename?: 'payments_max_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  key?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  originalname?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Payments_Min_Fields = {
  __typename?: 'payments_min_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  key?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  originalname?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "payments" */
export type Payments_Mutation_Response = {
  __typename?: 'payments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Payments>;
};

/** input type for inserting object relation for remote table "payments" */
export type Payments_Obj_Rel_Insert_Input = {
  data: Payments_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Payments_On_Conflict>;
};

/** on conflict condition type for table "payments" */
export type Payments_On_Conflict = {
  constraint: Payments_Constraint;
  update_columns: Array<Payments_Update_Column>;
  where?: Maybe<Payments_Bool_Exp>;
};

/** Ordering options when selecting data from "payments". */
export type Payments_Order_By = {
  application?: Maybe<Applications_Order_By>;
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  mimetype?: Maybe<Order_By>;
  originalname?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
};

/** primary key columns input for table: payments */
export type Payments_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "payments" */
export enum Payments_Select_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Mimetype = 'mimetype',
  /** column name */
  Originalname = 'originalname',
  /** column name */
  Size = 'size'
}

/** input type for updating data in table "payments" */
export type Payments_Set_Input = {
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  key?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  originalname?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Payments_Stddev_Fields = {
  __typename?: 'payments_stddev_fields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Payments_Stddev_Pop_Fields = {
  __typename?: 'payments_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Payments_Stddev_Samp_Fields = {
  __typename?: 'payments_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Payments_Sum_Fields = {
  __typename?: 'payments_sum_fields';
  size?: Maybe<Scalars['numeric']>;
};

/** update columns of table "payments" */
export enum Payments_Update_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Mimetype = 'mimetype',
  /** column name */
  Originalname = 'originalname',
  /** column name */
  Size = 'size'
}

/** aggregate var_pop on columns */
export type Payments_Var_Pop_Fields = {
  __typename?: 'payments_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Payments_Var_Samp_Fields = {
  __typename?: 'payments_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Payments_Variance_Fields = {
  __typename?: 'payments_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applications_aggregate: Applications_Aggregate;
  /** fetch data from the table: "applications" using primary key columns */
  applications_by_pk?: Maybe<Applications>;
  /** fetch data from the table: "category_mediums" */
  category_mediums: Array<Category_Mediums>;
  /** fetch aggregated fields from the table: "category_mediums" */
  category_mediums_aggregate: Category_Mediums_Aggregate;
  /** fetch data from the table: "category_mediums" using primary key columns */
  category_mediums_by_pk?: Maybe<Category_Mediums>;
  /** fetch data from the table: "category_tags" */
  category_tags: Array<Category_Tags>;
  /** fetch aggregated fields from the table: "category_tags" */
  category_tags_aggregate: Category_Tags_Aggregate;
  /** fetch data from the table: "category_tags" using primary key columns */
  category_tags_by_pk?: Maybe<Category_Tags>;
  /** fetch data from the table: "editions" */
  editions: Array<Editions>;
  /** fetch aggregated fields from the table: "editions" */
  editions_aggregate: Editions_Aggregate;
  /** fetch data from the table: "editions" using primary key columns */
  editions_by_pk?: Maybe<Editions>;
  /** An array relationship */
  eliminations: Array<Eliminations>;
  /** An aggregate relationship */
  eliminations_aggregate: Eliminations_Aggregate;
  /** fetch data from the table: "eliminations" using primary key columns */
  eliminations_by_pk?: Maybe<Eliminations>;
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table: "payments" */
  payments: Array<Payments>;
  /** fetch aggregated fields from the table: "payments" */
  payments_aggregate: Payments_Aggregate;
  /** fetch data from the table: "payments" using primary key columns */
  payments_by_pk?: Maybe<Payments>;
  /** An array relationship */
  rating_rounds: Array<Rating_Rounds>;
  /** An aggregate relationship */
  rating_rounds_aggregate: Rating_Rounds_Aggregate;
  /** fetch data from the table: "rating_rounds" using primary key columns */
  rating_rounds_by_pk?: Maybe<Rating_Rounds>;
  /** fetch data from the table: "rating_rounds_sorted" */
  rating_rounds_sorted: Array<Rating_Rounds_Sorted>;
  /** fetch aggregated fields from the table: "rating_rounds_sorted" */
  rating_rounds_sorted_aggregate: Rating_Rounds_Sorted_Aggregate;
  /** An array relationship */
  ratings: Array<Ratings>;
  /** An aggregate relationship */
  ratings_aggregate: Ratings_Aggregate;
  /** fetch data from the table: "ratings_by_application" */
  ratings_by_application: Array<Ratings_By_Application>;
  /** fetch aggregated fields from the table: "ratings_by_application" */
  ratings_by_application_aggregate: Ratings_By_Application_Aggregate;
  /** fetch data from the table: "ratings" using primary key columns */
  ratings_by_pk?: Maybe<Ratings>;
  /** execute function "search_applications" which returns "applications" */
  search_applications: Array<Applications>;
  /** execute function "search_applications" and query aggregates on result of table type "applications" */
  search_applications_aggregate: Applications_Aggregate;
  /** An array relationship */
  updates: Array<Updates>;
  /** An aggregate relationship */
  updates_aggregate: Updates_Aggregate;
  /** fetch data from the table: "updates" using primary key columns */
  updates_by_pk?: Maybe<Updates>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "users_online" */
  users_online: Array<Users_Online>;
  /** fetch aggregated fields from the table: "users_online" */
  users_online_aggregate: Users_Online_Aggregate;
  /** fetch data from the table: "wordlist" */
  wordlist: Array<Wordlist>;
  /** fetch aggregated fields from the table: "wordlist" */
  wordlist_aggregate: Wordlist_Aggregate;
  /** fetch data from the table: "wordlist" using primary key columns */
  wordlist_by_pk?: Maybe<Wordlist>;
  /** fetch data from the table: "work_files" */
  work_files: Array<Work_Files>;
  /** fetch aggregated fields from the table: "work_files" */
  work_files_aggregate: Work_Files_Aggregate;
  /** fetch data from the table: "work_files" using primary key columns */
  work_files_by_pk?: Maybe<Work_Files>;
  /** fetch data from the table: "work_specification_mediums" */
  work_specification_mediums: Array<Work_Specification_Mediums>;
  /** fetch aggregated fields from the table: "work_specification_mediums" */
  work_specification_mediums_aggregate: Work_Specification_Mediums_Aggregate;
  /** fetch data from the table: "work_specification_mediums" using primary key columns */
  work_specification_mediums_by_pk?: Maybe<Work_Specification_Mediums>;
  /** fetch data from the table: "work_specification_tags" */
  work_specification_tags: Array<Work_Specification_Tags>;
  /** fetch aggregated fields from the table: "work_specification_tags" */
  work_specification_tags_aggregate: Work_Specification_Tags_Aggregate;
  /** fetch data from the table: "work_specification_tags" using primary key columns */
  work_specification_tags_by_pk?: Maybe<Work_Specification_Tags>;
  /** fetch data from the table: "work_specifications" */
  work_specifications: Array<Work_Specifications>;
  /** fetch aggregated fields from the table: "work_specifications" */
  work_specifications_aggregate: Work_Specifications_Aggregate;
  /** fetch data from the table: "work_specifications" using primary key columns */
  work_specifications_by_pk?: Maybe<Work_Specifications>;
  /** An array relationship */
  works: Array<Works>;
  /** An aggregate relationship */
  works_aggregate: Works_Aggregate;
  /** fetch data from the table: "works" using primary key columns */
  works_by_pk?: Maybe<Works>;
};


export type Query_RootApplicationsArgs = {
  distinct_on?: Maybe<Array<Applications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applications_Order_By>>;
  where?: Maybe<Applications_Bool_Exp>;
};


export type Query_RootApplications_AggregateArgs = {
  distinct_on?: Maybe<Array<Applications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applications_Order_By>>;
  where?: Maybe<Applications_Bool_Exp>;
};


export type Query_RootApplications_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCategory_MediumsArgs = {
  distinct_on?: Maybe<Array<Category_Mediums_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Category_Mediums_Order_By>>;
  where?: Maybe<Category_Mediums_Bool_Exp>;
};


export type Query_RootCategory_Mediums_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_Mediums_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Category_Mediums_Order_By>>;
  where?: Maybe<Category_Mediums_Bool_Exp>;
};


export type Query_RootCategory_Mediums_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCategory_TagsArgs = {
  distinct_on?: Maybe<Array<Category_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Category_Tags_Order_By>>;
  where?: Maybe<Category_Tags_Bool_Exp>;
};


export type Query_RootCategory_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Category_Tags_Order_By>>;
  where?: Maybe<Category_Tags_Bool_Exp>;
};


export type Query_RootCategory_Tags_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootEditionsArgs = {
  distinct_on?: Maybe<Array<Editions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Editions_Order_By>>;
  where?: Maybe<Editions_Bool_Exp>;
};


export type Query_RootEditions_AggregateArgs = {
  distinct_on?: Maybe<Array<Editions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Editions_Order_By>>;
  where?: Maybe<Editions_Bool_Exp>;
};


export type Query_RootEditions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootEliminationsArgs = {
  distinct_on?: Maybe<Array<Eliminations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eliminations_Order_By>>;
  where?: Maybe<Eliminations_Bool_Exp>;
};


export type Query_RootEliminations_AggregateArgs = {
  distinct_on?: Maybe<Array<Eliminations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eliminations_Order_By>>;
  where?: Maybe<Eliminations_Bool_Exp>;
};


export type Query_RootEliminations_By_PkArgs = {
  application_id: Scalars['uuid'];
};


export type Query_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPaymentsArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Payments_Order_By>>;
  where?: Maybe<Payments_Bool_Exp>;
};


export type Query_RootPayments_AggregateArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Payments_Order_By>>;
  where?: Maybe<Payments_Bool_Exp>;
};


export type Query_RootPayments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRating_RoundsArgs = {
  distinct_on?: Maybe<Array<Rating_Rounds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Rounds_Order_By>>;
  where?: Maybe<Rating_Rounds_Bool_Exp>;
};


export type Query_RootRating_Rounds_AggregateArgs = {
  distinct_on?: Maybe<Array<Rating_Rounds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Rounds_Order_By>>;
  where?: Maybe<Rating_Rounds_Bool_Exp>;
};


export type Query_RootRating_Rounds_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRating_Rounds_SortedArgs = {
  distinct_on?: Maybe<Array<Rating_Rounds_Sorted_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Rounds_Sorted_Order_By>>;
  where?: Maybe<Rating_Rounds_Sorted_Bool_Exp>;
};


export type Query_RootRating_Rounds_Sorted_AggregateArgs = {
  distinct_on?: Maybe<Array<Rating_Rounds_Sorted_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Rounds_Sorted_Order_By>>;
  where?: Maybe<Rating_Rounds_Sorted_Bool_Exp>;
};


export type Query_RootRatingsArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};


export type Query_RootRatings_AggregateArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};


export type Query_RootRatings_By_ApplicationArgs = {
  distinct_on?: Maybe<Array<Ratings_By_Application_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_By_Application_Order_By>>;
  where?: Maybe<Ratings_By_Application_Bool_Exp>;
};


export type Query_RootRatings_By_Application_AggregateArgs = {
  distinct_on?: Maybe<Array<Ratings_By_Application_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_By_Application_Order_By>>;
  where?: Maybe<Ratings_By_Application_Bool_Exp>;
};


export type Query_RootRatings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSearch_ApplicationsArgs = {
  args: Search_Applications_Args;
  distinct_on?: Maybe<Array<Applications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applications_Order_By>>;
  where?: Maybe<Applications_Bool_Exp>;
};


export type Query_RootSearch_Applications_AggregateArgs = {
  args: Search_Applications_Args;
  distinct_on?: Maybe<Array<Applications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applications_Order_By>>;
  where?: Maybe<Applications_Bool_Exp>;
};


export type Query_RootUpdatesArgs = {
  distinct_on?: Maybe<Array<Updates_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Updates_Order_By>>;
  where?: Maybe<Updates_Bool_Exp>;
};


export type Query_RootUpdates_AggregateArgs = {
  distinct_on?: Maybe<Array<Updates_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Updates_Order_By>>;
  where?: Maybe<Updates_Bool_Exp>;
};


export type Query_RootUpdates_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootUsers_OnlineArgs = {
  distinct_on?: Maybe<Array<Users_Online_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Online_Order_By>>;
  where?: Maybe<Users_Online_Bool_Exp>;
};


export type Query_RootUsers_Online_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Online_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Online_Order_By>>;
  where?: Maybe<Users_Online_Bool_Exp>;
};


export type Query_RootWordlistArgs = {
  distinct_on?: Maybe<Array<Wordlist_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wordlist_Order_By>>;
  where?: Maybe<Wordlist_Bool_Exp>;
};


export type Query_RootWordlist_AggregateArgs = {
  distinct_on?: Maybe<Array<Wordlist_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wordlist_Order_By>>;
  where?: Maybe<Wordlist_Bool_Exp>;
};


export type Query_RootWordlist_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootWork_FilesArgs = {
  distinct_on?: Maybe<Array<Work_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Files_Order_By>>;
  where?: Maybe<Work_Files_Bool_Exp>;
};


export type Query_RootWork_Files_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Files_Order_By>>;
  where?: Maybe<Work_Files_Bool_Exp>;
};


export type Query_RootWork_Files_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWork_Specification_MediumsArgs = {
  distinct_on?: Maybe<Array<Work_Specification_Mediums_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Specification_Mediums_Order_By>>;
  where?: Maybe<Work_Specification_Mediums_Bool_Exp>;
};


export type Query_RootWork_Specification_Mediums_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Specification_Mediums_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Specification_Mediums_Order_By>>;
  where?: Maybe<Work_Specification_Mediums_Bool_Exp>;
};


export type Query_RootWork_Specification_Mediums_By_PkArgs = {
  medium_id: Scalars['uuid'];
  specification_id: Scalars['uuid'];
};


export type Query_RootWork_Specification_TagsArgs = {
  distinct_on?: Maybe<Array<Work_Specification_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Specification_Tags_Order_By>>;
  where?: Maybe<Work_Specification_Tags_Bool_Exp>;
};


export type Query_RootWork_Specification_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Specification_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Specification_Tags_Order_By>>;
  where?: Maybe<Work_Specification_Tags_Bool_Exp>;
};


export type Query_RootWork_Specification_Tags_By_PkArgs = {
  specification_id: Scalars['uuid'];
  tag_id: Scalars['uuid'];
};


export type Query_RootWork_SpecificationsArgs = {
  distinct_on?: Maybe<Array<Work_Specifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Specifications_Order_By>>;
  where?: Maybe<Work_Specifications_Bool_Exp>;
};


export type Query_RootWork_Specifications_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Specifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Specifications_Order_By>>;
  where?: Maybe<Work_Specifications_Bool_Exp>;
};


export type Query_RootWork_Specifications_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWorksArgs = {
  distinct_on?: Maybe<Array<Works_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Order_By>>;
  where?: Maybe<Works_Bool_Exp>;
};


export type Query_RootWorks_AggregateArgs = {
  distinct_on?: Maybe<Array<Works_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Order_By>>;
  where?: Maybe<Works_Bool_Exp>;
};


export type Query_RootWorks_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "rating_rounds" */
export type Rating_Rounds = {
  __typename?: 'rating_rounds';
  /** A computed field, executes function "rating_round_state" */
  active?: Maybe<Scalars['Boolean']>;
  closed: Scalars['Boolean'];
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  edition: Editions;
  edition_id: Scalars['Int'];
  /** An array relationship */
  eliminations: Array<Eliminations>;
  /** An aggregate relationship */
  eliminations_aggregate: Eliminations_Aggregate;
  end_at: Scalars['timestamptz'];
  goal: Scalars['Int'];
  id: Scalars['Int'];
  /** A computed field, executes function "get_rating_round_level" */
  level?: Maybe<Scalars['Int']>;
  /** An object relationship */
  next_round?: Maybe<Rating_Rounds>;
  /** An object relationship */
  prev_round?: Maybe<Rating_Rounds>;
  prev_round_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  ratings: Array<Ratings>;
  /** An aggregate relationship */
  ratings_aggregate: Ratings_Aggregate;
  start_at: Scalars['timestamptz'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "rating_rounds" */
export type Rating_RoundsEliminationsArgs = {
  distinct_on?: Maybe<Array<Eliminations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eliminations_Order_By>>;
  where?: Maybe<Eliminations_Bool_Exp>;
};


/** columns and relationships of "rating_rounds" */
export type Rating_RoundsEliminations_AggregateArgs = {
  distinct_on?: Maybe<Array<Eliminations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eliminations_Order_By>>;
  where?: Maybe<Eliminations_Bool_Exp>;
};


/** columns and relationships of "rating_rounds" */
export type Rating_RoundsRatingsArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};


/** columns and relationships of "rating_rounds" */
export type Rating_RoundsRatings_AggregateArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};

/** aggregated selection of "rating_rounds" */
export type Rating_Rounds_Aggregate = {
  __typename?: 'rating_rounds_aggregate';
  aggregate?: Maybe<Rating_Rounds_Aggregate_Fields>;
  nodes: Array<Rating_Rounds>;
};

/** aggregate fields of "rating_rounds" */
export type Rating_Rounds_Aggregate_Fields = {
  __typename?: 'rating_rounds_aggregate_fields';
  avg?: Maybe<Rating_Rounds_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rating_Rounds_Max_Fields>;
  min?: Maybe<Rating_Rounds_Min_Fields>;
  stddev?: Maybe<Rating_Rounds_Stddev_Fields>;
  stddev_pop?: Maybe<Rating_Rounds_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rating_Rounds_Stddev_Samp_Fields>;
  sum?: Maybe<Rating_Rounds_Sum_Fields>;
  var_pop?: Maybe<Rating_Rounds_Var_Pop_Fields>;
  var_samp?: Maybe<Rating_Rounds_Var_Samp_Fields>;
  variance?: Maybe<Rating_Rounds_Variance_Fields>;
};


/** aggregate fields of "rating_rounds" */
export type Rating_Rounds_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rating_Rounds_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rating_rounds" */
export type Rating_Rounds_Aggregate_Order_By = {
  avg?: Maybe<Rating_Rounds_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Rating_Rounds_Max_Order_By>;
  min?: Maybe<Rating_Rounds_Min_Order_By>;
  stddev?: Maybe<Rating_Rounds_Stddev_Order_By>;
  stddev_pop?: Maybe<Rating_Rounds_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Rating_Rounds_Stddev_Samp_Order_By>;
  sum?: Maybe<Rating_Rounds_Sum_Order_By>;
  var_pop?: Maybe<Rating_Rounds_Var_Pop_Order_By>;
  var_samp?: Maybe<Rating_Rounds_Var_Samp_Order_By>;
  variance?: Maybe<Rating_Rounds_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rating_rounds" */
export type Rating_Rounds_Arr_Rel_Insert_Input = {
  data: Array<Rating_Rounds_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Rating_Rounds_On_Conflict>;
};

/** aggregate avg on columns */
export type Rating_Rounds_Avg_Fields = {
  __typename?: 'rating_rounds_avg_fields';
  edition_id?: Maybe<Scalars['Float']>;
  goal?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  prev_round_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "rating_rounds" */
export type Rating_Rounds_Avg_Order_By = {
  edition_id?: Maybe<Order_By>;
  goal?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prev_round_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rating_rounds". All fields are combined with a logical 'AND'. */
export type Rating_Rounds_Bool_Exp = {
  _and?: Maybe<Array<Rating_Rounds_Bool_Exp>>;
  _not?: Maybe<Rating_Rounds_Bool_Exp>;
  _or?: Maybe<Array<Rating_Rounds_Bool_Exp>>;
  closed?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  edition?: Maybe<Editions_Bool_Exp>;
  edition_id?: Maybe<Int_Comparison_Exp>;
  eliminations?: Maybe<Eliminations_Bool_Exp>;
  end_at?: Maybe<Timestamptz_Comparison_Exp>;
  goal?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  next_round?: Maybe<Rating_Rounds_Bool_Exp>;
  prev_round?: Maybe<Rating_Rounds_Bool_Exp>;
  prev_round_id?: Maybe<Int_Comparison_Exp>;
  ratings?: Maybe<Ratings_Bool_Exp>;
  start_at?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rating_rounds" */
export enum Rating_Rounds_Constraint {
  /** unique or primary key constraint */
  RatingRoundsPkey = 'rating_rounds_pkey',
  /** unique or primary key constraint */
  RatingRoundsPrevRoundIdKey = 'rating_rounds_prev_round_id_key'
}

/** input type for incrementing numeric columns in table "rating_rounds" */
export type Rating_Rounds_Inc_Input = {
  edition_id?: Maybe<Scalars['Int']>;
  goal?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  prev_round_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "rating_rounds" */
export type Rating_Rounds_Insert_Input = {
  closed?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  edition?: Maybe<Editions_Obj_Rel_Insert_Input>;
  edition_id?: Maybe<Scalars['Int']>;
  eliminations?: Maybe<Eliminations_Arr_Rel_Insert_Input>;
  end_at?: Maybe<Scalars['timestamptz']>;
  goal?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  next_round?: Maybe<Rating_Rounds_Obj_Rel_Insert_Input>;
  prev_round?: Maybe<Rating_Rounds_Obj_Rel_Insert_Input>;
  prev_round_id?: Maybe<Scalars['Int']>;
  ratings?: Maybe<Ratings_Arr_Rel_Insert_Input>;
  start_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rating_Rounds_Max_Fields = {
  __typename?: 'rating_rounds_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  edition_id?: Maybe<Scalars['Int']>;
  end_at?: Maybe<Scalars['timestamptz']>;
  goal?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  prev_round_id?: Maybe<Scalars['Int']>;
  start_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "rating_rounds" */
export type Rating_Rounds_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  edition_id?: Maybe<Order_By>;
  end_at?: Maybe<Order_By>;
  goal?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prev_round_id?: Maybe<Order_By>;
  start_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Rating_Rounds_Min_Fields = {
  __typename?: 'rating_rounds_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  edition_id?: Maybe<Scalars['Int']>;
  end_at?: Maybe<Scalars['timestamptz']>;
  goal?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  prev_round_id?: Maybe<Scalars['Int']>;
  start_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "rating_rounds" */
export type Rating_Rounds_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  edition_id?: Maybe<Order_By>;
  end_at?: Maybe<Order_By>;
  goal?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prev_round_id?: Maybe<Order_By>;
  start_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "rating_rounds" */
export type Rating_Rounds_Mutation_Response = {
  __typename?: 'rating_rounds_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rating_Rounds>;
};

/** input type for inserting object relation for remote table "rating_rounds" */
export type Rating_Rounds_Obj_Rel_Insert_Input = {
  data: Rating_Rounds_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Rating_Rounds_On_Conflict>;
};

/** on conflict condition type for table "rating_rounds" */
export type Rating_Rounds_On_Conflict = {
  constraint: Rating_Rounds_Constraint;
  update_columns: Array<Rating_Rounds_Update_Column>;
  where?: Maybe<Rating_Rounds_Bool_Exp>;
};

/** Ordering options when selecting data from "rating_rounds". */
export type Rating_Rounds_Order_By = {
  closed?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  edition?: Maybe<Editions_Order_By>;
  edition_id?: Maybe<Order_By>;
  eliminations_aggregate?: Maybe<Eliminations_Aggregate_Order_By>;
  end_at?: Maybe<Order_By>;
  goal?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  next_round?: Maybe<Rating_Rounds_Order_By>;
  prev_round?: Maybe<Rating_Rounds_Order_By>;
  prev_round_id?: Maybe<Order_By>;
  ratings_aggregate?: Maybe<Ratings_Aggregate_Order_By>;
  start_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: rating_rounds */
export type Rating_Rounds_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "rating_rounds" */
export enum Rating_Rounds_Select_Column {
  /** column name */
  Closed = 'closed',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EditionId = 'edition_id',
  /** column name */
  EndAt = 'end_at',
  /** column name */
  Goal = 'goal',
  /** column name */
  Id = 'id',
  /** column name */
  PrevRoundId = 'prev_round_id',
  /** column name */
  StartAt = 'start_at',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rating_rounds" */
export type Rating_Rounds_Set_Input = {
  closed?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  edition_id?: Maybe<Scalars['Int']>;
  end_at?: Maybe<Scalars['timestamptz']>;
  goal?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  prev_round_id?: Maybe<Scalars['Int']>;
  start_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "rating_rounds_sorted" */
export type Rating_Rounds_Sorted = {
  __typename?: 'rating_rounds_sorted';
  closed?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  edition?: Maybe<Editions>;
  edition_id?: Maybe<Scalars['Int']>;
  end_at?: Maybe<Scalars['timestamptz']>;
  goal?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  prev_round_id?: Maybe<Scalars['Int']>;
  start_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "rating_rounds_sorted" */
export type Rating_Rounds_Sorted_Aggregate = {
  __typename?: 'rating_rounds_sorted_aggregate';
  aggregate?: Maybe<Rating_Rounds_Sorted_Aggregate_Fields>;
  nodes: Array<Rating_Rounds_Sorted>;
};

/** aggregate fields of "rating_rounds_sorted" */
export type Rating_Rounds_Sorted_Aggregate_Fields = {
  __typename?: 'rating_rounds_sorted_aggregate_fields';
  avg?: Maybe<Rating_Rounds_Sorted_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rating_Rounds_Sorted_Max_Fields>;
  min?: Maybe<Rating_Rounds_Sorted_Min_Fields>;
  stddev?: Maybe<Rating_Rounds_Sorted_Stddev_Fields>;
  stddev_pop?: Maybe<Rating_Rounds_Sorted_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rating_Rounds_Sorted_Stddev_Samp_Fields>;
  sum?: Maybe<Rating_Rounds_Sorted_Sum_Fields>;
  var_pop?: Maybe<Rating_Rounds_Sorted_Var_Pop_Fields>;
  var_samp?: Maybe<Rating_Rounds_Sorted_Var_Samp_Fields>;
  variance?: Maybe<Rating_Rounds_Sorted_Variance_Fields>;
};


/** aggregate fields of "rating_rounds_sorted" */
export type Rating_Rounds_Sorted_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rating_Rounds_Sorted_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Rating_Rounds_Sorted_Avg_Fields = {
  __typename?: 'rating_rounds_sorted_avg_fields';
  edition_id?: Maybe<Scalars['Float']>;
  goal?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  prev_round_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "rating_rounds_sorted". All fields are combined with a logical 'AND'. */
export type Rating_Rounds_Sorted_Bool_Exp = {
  _and?: Maybe<Array<Rating_Rounds_Sorted_Bool_Exp>>;
  _not?: Maybe<Rating_Rounds_Sorted_Bool_Exp>;
  _or?: Maybe<Array<Rating_Rounds_Sorted_Bool_Exp>>;
  closed?: Maybe<Boolean_Comparison_Exp>;
  edition?: Maybe<Editions_Bool_Exp>;
  edition_id?: Maybe<Int_Comparison_Exp>;
  end_at?: Maybe<Timestamptz_Comparison_Exp>;
  goal?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  level?: Maybe<Int_Comparison_Exp>;
  prev_round_id?: Maybe<Int_Comparison_Exp>;
  start_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Rating_Rounds_Sorted_Max_Fields = {
  __typename?: 'rating_rounds_sorted_max_fields';
  edition_id?: Maybe<Scalars['Int']>;
  end_at?: Maybe<Scalars['timestamptz']>;
  goal?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  prev_round_id?: Maybe<Scalars['Int']>;
  start_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Rating_Rounds_Sorted_Min_Fields = {
  __typename?: 'rating_rounds_sorted_min_fields';
  edition_id?: Maybe<Scalars['Int']>;
  end_at?: Maybe<Scalars['timestamptz']>;
  goal?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  prev_round_id?: Maybe<Scalars['Int']>;
  start_at?: Maybe<Scalars['timestamptz']>;
};

/** Ordering options when selecting data from "rating_rounds_sorted". */
export type Rating_Rounds_Sorted_Order_By = {
  closed?: Maybe<Order_By>;
  edition?: Maybe<Editions_Order_By>;
  edition_id?: Maybe<Order_By>;
  end_at?: Maybe<Order_By>;
  goal?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  prev_round_id?: Maybe<Order_By>;
  start_at?: Maybe<Order_By>;
};

/** select columns of table "rating_rounds_sorted" */
export enum Rating_Rounds_Sorted_Select_Column {
  /** column name */
  Closed = 'closed',
  /** column name */
  EditionId = 'edition_id',
  /** column name */
  EndAt = 'end_at',
  /** column name */
  Goal = 'goal',
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  PrevRoundId = 'prev_round_id',
  /** column name */
  StartAt = 'start_at'
}

/** aggregate stddev on columns */
export type Rating_Rounds_Sorted_Stddev_Fields = {
  __typename?: 'rating_rounds_sorted_stddev_fields';
  edition_id?: Maybe<Scalars['Float']>;
  goal?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  prev_round_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Rating_Rounds_Sorted_Stddev_Pop_Fields = {
  __typename?: 'rating_rounds_sorted_stddev_pop_fields';
  edition_id?: Maybe<Scalars['Float']>;
  goal?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  prev_round_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Rating_Rounds_Sorted_Stddev_Samp_Fields = {
  __typename?: 'rating_rounds_sorted_stddev_samp_fields';
  edition_id?: Maybe<Scalars['Float']>;
  goal?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  prev_round_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Rating_Rounds_Sorted_Sum_Fields = {
  __typename?: 'rating_rounds_sorted_sum_fields';
  edition_id?: Maybe<Scalars['Int']>;
  goal?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  prev_round_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Rating_Rounds_Sorted_Var_Pop_Fields = {
  __typename?: 'rating_rounds_sorted_var_pop_fields';
  edition_id?: Maybe<Scalars['Float']>;
  goal?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  prev_round_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Rating_Rounds_Sorted_Var_Samp_Fields = {
  __typename?: 'rating_rounds_sorted_var_samp_fields';
  edition_id?: Maybe<Scalars['Float']>;
  goal?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  prev_round_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Rating_Rounds_Sorted_Variance_Fields = {
  __typename?: 'rating_rounds_sorted_variance_fields';
  edition_id?: Maybe<Scalars['Float']>;
  goal?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  prev_round_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev on columns */
export type Rating_Rounds_Stddev_Fields = {
  __typename?: 'rating_rounds_stddev_fields';
  edition_id?: Maybe<Scalars['Float']>;
  goal?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  prev_round_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "rating_rounds" */
export type Rating_Rounds_Stddev_Order_By = {
  edition_id?: Maybe<Order_By>;
  goal?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prev_round_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rating_Rounds_Stddev_Pop_Fields = {
  __typename?: 'rating_rounds_stddev_pop_fields';
  edition_id?: Maybe<Scalars['Float']>;
  goal?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  prev_round_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "rating_rounds" */
export type Rating_Rounds_Stddev_Pop_Order_By = {
  edition_id?: Maybe<Order_By>;
  goal?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prev_round_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rating_Rounds_Stddev_Samp_Fields = {
  __typename?: 'rating_rounds_stddev_samp_fields';
  edition_id?: Maybe<Scalars['Float']>;
  goal?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  prev_round_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "rating_rounds" */
export type Rating_Rounds_Stddev_Samp_Order_By = {
  edition_id?: Maybe<Order_By>;
  goal?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prev_round_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Rating_Rounds_Sum_Fields = {
  __typename?: 'rating_rounds_sum_fields';
  edition_id?: Maybe<Scalars['Int']>;
  goal?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  prev_round_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "rating_rounds" */
export type Rating_Rounds_Sum_Order_By = {
  edition_id?: Maybe<Order_By>;
  goal?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prev_round_id?: Maybe<Order_By>;
};

/** update columns of table "rating_rounds" */
export enum Rating_Rounds_Update_Column {
  /** column name */
  Closed = 'closed',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EditionId = 'edition_id',
  /** column name */
  EndAt = 'end_at',
  /** column name */
  Goal = 'goal',
  /** column name */
  Id = 'id',
  /** column name */
  PrevRoundId = 'prev_round_id',
  /** column name */
  StartAt = 'start_at',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Rating_Rounds_Var_Pop_Fields = {
  __typename?: 'rating_rounds_var_pop_fields';
  edition_id?: Maybe<Scalars['Float']>;
  goal?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  prev_round_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "rating_rounds" */
export type Rating_Rounds_Var_Pop_Order_By = {
  edition_id?: Maybe<Order_By>;
  goal?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prev_round_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rating_Rounds_Var_Samp_Fields = {
  __typename?: 'rating_rounds_var_samp_fields';
  edition_id?: Maybe<Scalars['Float']>;
  goal?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  prev_round_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "rating_rounds" */
export type Rating_Rounds_Var_Samp_Order_By = {
  edition_id?: Maybe<Order_By>;
  goal?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prev_round_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Rating_Rounds_Variance_Fields = {
  __typename?: 'rating_rounds_variance_fields';
  edition_id?: Maybe<Scalars['Float']>;
  goal?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  prev_round_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "rating_rounds" */
export type Rating_Rounds_Variance_Order_By = {
  edition_id?: Maybe<Order_By>;
  goal?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  prev_round_id?: Maybe<Order_By>;
};

/** columns and relationships of "ratings" */
export type Ratings = {
  __typename?: 'ratings';
  /** An object relationship */
  application: Applications;
  application_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['String'];
  id: Scalars['uuid'];
  /** An object relationship */
  message: Messages;
  message_id: Scalars['Int'];
  /** An object relationship */
  rating_round: Rating_Rounds;
  round_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  value: Scalars['Int'];
};

/** aggregated selection of "ratings" */
export type Ratings_Aggregate = {
  __typename?: 'ratings_aggregate';
  aggregate?: Maybe<Ratings_Aggregate_Fields>;
  nodes: Array<Ratings>;
};

/** aggregate fields of "ratings" */
export type Ratings_Aggregate_Fields = {
  __typename?: 'ratings_aggregate_fields';
  avg?: Maybe<Ratings_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Ratings_Max_Fields>;
  min?: Maybe<Ratings_Min_Fields>;
  stddev?: Maybe<Ratings_Stddev_Fields>;
  stddev_pop?: Maybe<Ratings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ratings_Stddev_Samp_Fields>;
  sum?: Maybe<Ratings_Sum_Fields>;
  var_pop?: Maybe<Ratings_Var_Pop_Fields>;
  var_samp?: Maybe<Ratings_Var_Samp_Fields>;
  variance?: Maybe<Ratings_Variance_Fields>;
};


/** aggregate fields of "ratings" */
export type Ratings_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Ratings_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ratings" */
export type Ratings_Aggregate_Order_By = {
  avg?: Maybe<Ratings_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Ratings_Max_Order_By>;
  min?: Maybe<Ratings_Min_Order_By>;
  stddev?: Maybe<Ratings_Stddev_Order_By>;
  stddev_pop?: Maybe<Ratings_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Ratings_Stddev_Samp_Order_By>;
  sum?: Maybe<Ratings_Sum_Order_By>;
  var_pop?: Maybe<Ratings_Var_Pop_Order_By>;
  var_samp?: Maybe<Ratings_Var_Samp_Order_By>;
  variance?: Maybe<Ratings_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ratings" */
export type Ratings_Arr_Rel_Insert_Input = {
  data: Array<Ratings_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Ratings_On_Conflict>;
};

/** aggregate avg on columns */
export type Ratings_Avg_Fields = {
  __typename?: 'ratings_avg_fields';
  message_id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ratings" */
export type Ratings_Avg_Order_By = {
  message_id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ratings". All fields are combined with a logical 'AND'. */
export type Ratings_Bool_Exp = {
  _and?: Maybe<Array<Ratings_Bool_Exp>>;
  _not?: Maybe<Ratings_Bool_Exp>;
  _or?: Maybe<Array<Ratings_Bool_Exp>>;
  application?: Maybe<Applications_Bool_Exp>;
  application_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  message?: Maybe<Messages_Bool_Exp>;
  message_id?: Maybe<Int_Comparison_Exp>;
  rating_round?: Maybe<Rating_Rounds_Bool_Exp>;
  round_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  value?: Maybe<Int_Comparison_Exp>;
};

/** columns and relationships of "ratings_by_application" */
export type Ratings_By_Application = {
  __typename?: 'ratings_by_application';
  /** An object relationship */
  application?: Maybe<Applications>;
  avg?: Maybe<Scalars['numeric']>;
  avg_total?: Maybe<Scalars['numeric']>;
  count?: Maybe<Scalars['bigint']>;
  /** An object relationship */
  edition?: Maybe<Editions>;
  edition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  rating_round?: Maybe<Rating_Rounds>;
  round_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "ratings_by_application" */
export type Ratings_By_Application_Aggregate = {
  __typename?: 'ratings_by_application_aggregate';
  aggregate?: Maybe<Ratings_By_Application_Aggregate_Fields>;
  nodes: Array<Ratings_By_Application>;
};

/** aggregate fields of "ratings_by_application" */
export type Ratings_By_Application_Aggregate_Fields = {
  __typename?: 'ratings_by_application_aggregate_fields';
  avg?: Maybe<Ratings_By_Application_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Ratings_By_Application_Max_Fields>;
  min?: Maybe<Ratings_By_Application_Min_Fields>;
  stddev?: Maybe<Ratings_By_Application_Stddev_Fields>;
  stddev_pop?: Maybe<Ratings_By_Application_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ratings_By_Application_Stddev_Samp_Fields>;
  sum?: Maybe<Ratings_By_Application_Sum_Fields>;
  var_pop?: Maybe<Ratings_By_Application_Var_Pop_Fields>;
  var_samp?: Maybe<Ratings_By_Application_Var_Samp_Fields>;
  variance?: Maybe<Ratings_By_Application_Variance_Fields>;
};


/** aggregate fields of "ratings_by_application" */
export type Ratings_By_Application_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Ratings_By_Application_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Ratings_By_Application_Avg_Fields = {
  __typename?: 'ratings_by_application_avg_fields';
  avg?: Maybe<Scalars['Float']>;
  avg_total?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  edition_id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "ratings_by_application". All fields are combined with a logical 'AND'. */
export type Ratings_By_Application_Bool_Exp = {
  _and?: Maybe<Array<Ratings_By_Application_Bool_Exp>>;
  _not?: Maybe<Ratings_By_Application_Bool_Exp>;
  _or?: Maybe<Array<Ratings_By_Application_Bool_Exp>>;
  application?: Maybe<Applications_Bool_Exp>;
  avg?: Maybe<Numeric_Comparison_Exp>;
  avg_total?: Maybe<Numeric_Comparison_Exp>;
  count?: Maybe<Bigint_Comparison_Exp>;
  edition?: Maybe<Editions_Bool_Exp>;
  edition_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  rating_round?: Maybe<Rating_Rounds_Bool_Exp>;
  round_id?: Maybe<Int_Comparison_Exp>;
};

/** input type for inserting data into table "ratings_by_application" */
export type Ratings_By_Application_Insert_Input = {
  application?: Maybe<Applications_Obj_Rel_Insert_Input>;
  avg?: Maybe<Scalars['numeric']>;
  avg_total?: Maybe<Scalars['numeric']>;
  count?: Maybe<Scalars['bigint']>;
  edition?: Maybe<Editions_Obj_Rel_Insert_Input>;
  edition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  rating_round?: Maybe<Rating_Rounds_Obj_Rel_Insert_Input>;
  round_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Ratings_By_Application_Max_Fields = {
  __typename?: 'ratings_by_application_max_fields';
  avg?: Maybe<Scalars['numeric']>;
  avg_total?: Maybe<Scalars['numeric']>;
  count?: Maybe<Scalars['bigint']>;
  edition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  round_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Ratings_By_Application_Min_Fields = {
  __typename?: 'ratings_by_application_min_fields';
  avg?: Maybe<Scalars['numeric']>;
  avg_total?: Maybe<Scalars['numeric']>;
  count?: Maybe<Scalars['bigint']>;
  edition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  round_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting object relation for remote table "ratings_by_application" */
export type Ratings_By_Application_Obj_Rel_Insert_Input = {
  data: Ratings_By_Application_Insert_Input;
};

/** Ordering options when selecting data from "ratings_by_application". */
export type Ratings_By_Application_Order_By = {
  application?: Maybe<Applications_Order_By>;
  avg?: Maybe<Order_By>;
  avg_total?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  edition?: Maybe<Editions_Order_By>;
  edition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  rating_round?: Maybe<Rating_Rounds_Order_By>;
  round_id?: Maybe<Order_By>;
};

/** select columns of table "ratings_by_application" */
export enum Ratings_By_Application_Select_Column {
  /** column name */
  Avg = 'avg',
  /** column name */
  AvgTotal = 'avg_total',
  /** column name */
  Count = 'count',
  /** column name */
  EditionId = 'edition_id',
  /** column name */
  Id = 'id',
  /** column name */
  RoundId = 'round_id'
}

/** aggregate stddev on columns */
export type Ratings_By_Application_Stddev_Fields = {
  __typename?: 'ratings_by_application_stddev_fields';
  avg?: Maybe<Scalars['Float']>;
  avg_total?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  edition_id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Ratings_By_Application_Stddev_Pop_Fields = {
  __typename?: 'ratings_by_application_stddev_pop_fields';
  avg?: Maybe<Scalars['Float']>;
  avg_total?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  edition_id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Ratings_By_Application_Stddev_Samp_Fields = {
  __typename?: 'ratings_by_application_stddev_samp_fields';
  avg?: Maybe<Scalars['Float']>;
  avg_total?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  edition_id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Ratings_By_Application_Sum_Fields = {
  __typename?: 'ratings_by_application_sum_fields';
  avg?: Maybe<Scalars['numeric']>;
  avg_total?: Maybe<Scalars['numeric']>;
  count?: Maybe<Scalars['bigint']>;
  edition_id?: Maybe<Scalars['Int']>;
  round_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Ratings_By_Application_Var_Pop_Fields = {
  __typename?: 'ratings_by_application_var_pop_fields';
  avg?: Maybe<Scalars['Float']>;
  avg_total?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  edition_id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Ratings_By_Application_Var_Samp_Fields = {
  __typename?: 'ratings_by_application_var_samp_fields';
  avg?: Maybe<Scalars['Float']>;
  avg_total?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  edition_id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Ratings_By_Application_Variance_Fields = {
  __typename?: 'ratings_by_application_variance_fields';
  avg?: Maybe<Scalars['Float']>;
  avg_total?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  edition_id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
};

/** unique or primary key constraints on table "ratings" */
export enum Ratings_Constraint {
  /** unique or primary key constraint */
  RatingsMessageIdKey = 'ratings_message_id_key',
  /** unique or primary key constraint */
  RatingsPkey = 'ratings_pkey',
  /** unique or primary key constraint */
  RatingsRoundIdApplicationIdCreatedByKey = 'ratings_round_id_application_id_created_by_key'
}

/** input type for incrementing numeric columns in table "ratings" */
export type Ratings_Inc_Input = {
  message_id?: Maybe<Scalars['Int']>;
  round_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "ratings" */
export type Ratings_Insert_Input = {
  application?: Maybe<Applications_Obj_Rel_Insert_Input>;
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Messages_Obj_Rel_Insert_Input>;
  message_id?: Maybe<Scalars['Int']>;
  rating_round?: Maybe<Rating_Rounds_Obj_Rel_Insert_Input>;
  round_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Ratings_Max_Fields = {
  __typename?: 'ratings_max_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  message_id?: Maybe<Scalars['Int']>;
  round_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "ratings" */
export type Ratings_Max_Order_By = {
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Ratings_Min_Fields = {
  __typename?: 'ratings_min_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  message_id?: Maybe<Scalars['Int']>;
  round_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "ratings" */
export type Ratings_Min_Order_By = {
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "ratings" */
export type Ratings_Mutation_Response = {
  __typename?: 'ratings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ratings>;
};

/** input type for inserting object relation for remote table "ratings" */
export type Ratings_Obj_Rel_Insert_Input = {
  data: Ratings_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Ratings_On_Conflict>;
};

/** on conflict condition type for table "ratings" */
export type Ratings_On_Conflict = {
  constraint: Ratings_Constraint;
  update_columns: Array<Ratings_Update_Column>;
  where?: Maybe<Ratings_Bool_Exp>;
};

/** Ordering options when selecting data from "ratings". */
export type Ratings_Order_By = {
  application?: Maybe<Applications_Order_By>;
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Messages_Order_By>;
  message_id?: Maybe<Order_By>;
  rating_round?: Maybe<Rating_Rounds_Order_By>;
  round_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: ratings */
export type Ratings_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "ratings" */
export enum Ratings_Select_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  MessageId = 'message_id',
  /** column name */
  RoundId = 'round_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "ratings" */
export type Ratings_Set_Input = {
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  message_id?: Maybe<Scalars['Int']>;
  round_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Ratings_Stddev_Fields = {
  __typename?: 'ratings_stddev_fields';
  message_id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ratings" */
export type Ratings_Stddev_Order_By = {
  message_id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ratings_Stddev_Pop_Fields = {
  __typename?: 'ratings_stddev_pop_fields';
  message_id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ratings" */
export type Ratings_Stddev_Pop_Order_By = {
  message_id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ratings_Stddev_Samp_Fields = {
  __typename?: 'ratings_stddev_samp_fields';
  message_id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ratings" */
export type Ratings_Stddev_Samp_Order_By = {
  message_id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Ratings_Sum_Fields = {
  __typename?: 'ratings_sum_fields';
  message_id?: Maybe<Scalars['Int']>;
  round_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ratings" */
export type Ratings_Sum_Order_By = {
  message_id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** update columns of table "ratings" */
export enum Ratings_Update_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  MessageId = 'message_id',
  /** column name */
  RoundId = 'round_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Ratings_Var_Pop_Fields = {
  __typename?: 'ratings_var_pop_fields';
  message_id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ratings" */
export type Ratings_Var_Pop_Order_By = {
  message_id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ratings_Var_Samp_Fields = {
  __typename?: 'ratings_var_samp_fields';
  message_id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ratings" */
export type Ratings_Var_Samp_Order_By = {
  message_id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Ratings_Variance_Fields = {
  __typename?: 'ratings_variance_fields';
  message_id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ratings" */
export type Ratings_Variance_Order_By = {
  message_id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Search_Applications_Args = {
  search?: Maybe<Scalars['String']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applications_aggregate: Applications_Aggregate;
  /** fetch data from the table: "applications" using primary key columns */
  applications_by_pk?: Maybe<Applications>;
  /** fetch data from the table: "category_mediums" */
  category_mediums: Array<Category_Mediums>;
  /** fetch aggregated fields from the table: "category_mediums" */
  category_mediums_aggregate: Category_Mediums_Aggregate;
  /** fetch data from the table: "category_mediums" using primary key columns */
  category_mediums_by_pk?: Maybe<Category_Mediums>;
  /** fetch data from the table: "category_tags" */
  category_tags: Array<Category_Tags>;
  /** fetch aggregated fields from the table: "category_tags" */
  category_tags_aggregate: Category_Tags_Aggregate;
  /** fetch data from the table: "category_tags" using primary key columns */
  category_tags_by_pk?: Maybe<Category_Tags>;
  /** fetch data from the table: "editions" */
  editions: Array<Editions>;
  /** fetch aggregated fields from the table: "editions" */
  editions_aggregate: Editions_Aggregate;
  /** fetch data from the table: "editions" using primary key columns */
  editions_by_pk?: Maybe<Editions>;
  /** An array relationship */
  eliminations: Array<Eliminations>;
  /** An aggregate relationship */
  eliminations_aggregate: Eliminations_Aggregate;
  /** fetch data from the table: "eliminations" using primary key columns */
  eliminations_by_pk?: Maybe<Eliminations>;
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table: "payments" */
  payments: Array<Payments>;
  /** fetch aggregated fields from the table: "payments" */
  payments_aggregate: Payments_Aggregate;
  /** fetch data from the table: "payments" using primary key columns */
  payments_by_pk?: Maybe<Payments>;
  /** An array relationship */
  rating_rounds: Array<Rating_Rounds>;
  /** An aggregate relationship */
  rating_rounds_aggregate: Rating_Rounds_Aggregate;
  /** fetch data from the table: "rating_rounds" using primary key columns */
  rating_rounds_by_pk?: Maybe<Rating_Rounds>;
  /** fetch data from the table: "rating_rounds_sorted" */
  rating_rounds_sorted: Array<Rating_Rounds_Sorted>;
  /** fetch aggregated fields from the table: "rating_rounds_sorted" */
  rating_rounds_sorted_aggregate: Rating_Rounds_Sorted_Aggregate;
  /** An array relationship */
  ratings: Array<Ratings>;
  /** An aggregate relationship */
  ratings_aggregate: Ratings_Aggregate;
  /** fetch data from the table: "ratings_by_application" */
  ratings_by_application: Array<Ratings_By_Application>;
  /** fetch aggregated fields from the table: "ratings_by_application" */
  ratings_by_application_aggregate: Ratings_By_Application_Aggregate;
  /** fetch data from the table: "ratings" using primary key columns */
  ratings_by_pk?: Maybe<Ratings>;
  /** execute function "search_applications" which returns "applications" */
  search_applications: Array<Applications>;
  /** execute function "search_applications" and query aggregates on result of table type "applications" */
  search_applications_aggregate: Applications_Aggregate;
  /** An array relationship */
  updates: Array<Updates>;
  /** An aggregate relationship */
  updates_aggregate: Updates_Aggregate;
  /** fetch data from the table: "updates" using primary key columns */
  updates_by_pk?: Maybe<Updates>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "users_online" */
  users_online: Array<Users_Online>;
  /** fetch aggregated fields from the table: "users_online" */
  users_online_aggregate: Users_Online_Aggregate;
  /** fetch data from the table: "wordlist" */
  wordlist: Array<Wordlist>;
  /** fetch aggregated fields from the table: "wordlist" */
  wordlist_aggregate: Wordlist_Aggregate;
  /** fetch data from the table: "wordlist" using primary key columns */
  wordlist_by_pk?: Maybe<Wordlist>;
  /** fetch data from the table: "work_files" */
  work_files: Array<Work_Files>;
  /** fetch aggregated fields from the table: "work_files" */
  work_files_aggregate: Work_Files_Aggregate;
  /** fetch data from the table: "work_files" using primary key columns */
  work_files_by_pk?: Maybe<Work_Files>;
  /** fetch data from the table: "work_specification_mediums" */
  work_specification_mediums: Array<Work_Specification_Mediums>;
  /** fetch aggregated fields from the table: "work_specification_mediums" */
  work_specification_mediums_aggregate: Work_Specification_Mediums_Aggregate;
  /** fetch data from the table: "work_specification_mediums" using primary key columns */
  work_specification_mediums_by_pk?: Maybe<Work_Specification_Mediums>;
  /** fetch data from the table: "work_specification_tags" */
  work_specification_tags: Array<Work_Specification_Tags>;
  /** fetch aggregated fields from the table: "work_specification_tags" */
  work_specification_tags_aggregate: Work_Specification_Tags_Aggregate;
  /** fetch data from the table: "work_specification_tags" using primary key columns */
  work_specification_tags_by_pk?: Maybe<Work_Specification_Tags>;
  /** fetch data from the table: "work_specifications" */
  work_specifications: Array<Work_Specifications>;
  /** fetch aggregated fields from the table: "work_specifications" */
  work_specifications_aggregate: Work_Specifications_Aggregate;
  /** fetch data from the table: "work_specifications" using primary key columns */
  work_specifications_by_pk?: Maybe<Work_Specifications>;
  /** An array relationship */
  works: Array<Works>;
  /** An aggregate relationship */
  works_aggregate: Works_Aggregate;
  /** fetch data from the table: "works" using primary key columns */
  works_by_pk?: Maybe<Works>;
};


export type Subscription_RootApplicationsArgs = {
  distinct_on?: Maybe<Array<Applications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applications_Order_By>>;
  where?: Maybe<Applications_Bool_Exp>;
};


export type Subscription_RootApplications_AggregateArgs = {
  distinct_on?: Maybe<Array<Applications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applications_Order_By>>;
  where?: Maybe<Applications_Bool_Exp>;
};


export type Subscription_RootApplications_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCategory_MediumsArgs = {
  distinct_on?: Maybe<Array<Category_Mediums_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Category_Mediums_Order_By>>;
  where?: Maybe<Category_Mediums_Bool_Exp>;
};


export type Subscription_RootCategory_Mediums_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_Mediums_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Category_Mediums_Order_By>>;
  where?: Maybe<Category_Mediums_Bool_Exp>;
};


export type Subscription_RootCategory_Mediums_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCategory_TagsArgs = {
  distinct_on?: Maybe<Array<Category_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Category_Tags_Order_By>>;
  where?: Maybe<Category_Tags_Bool_Exp>;
};


export type Subscription_RootCategory_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Category_Tags_Order_By>>;
  where?: Maybe<Category_Tags_Bool_Exp>;
};


export type Subscription_RootCategory_Tags_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootEditionsArgs = {
  distinct_on?: Maybe<Array<Editions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Editions_Order_By>>;
  where?: Maybe<Editions_Bool_Exp>;
};


export type Subscription_RootEditions_AggregateArgs = {
  distinct_on?: Maybe<Array<Editions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Editions_Order_By>>;
  where?: Maybe<Editions_Bool_Exp>;
};


export type Subscription_RootEditions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootEliminationsArgs = {
  distinct_on?: Maybe<Array<Eliminations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eliminations_Order_By>>;
  where?: Maybe<Eliminations_Bool_Exp>;
};


export type Subscription_RootEliminations_AggregateArgs = {
  distinct_on?: Maybe<Array<Eliminations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eliminations_Order_By>>;
  where?: Maybe<Eliminations_Bool_Exp>;
};


export type Subscription_RootEliminations_By_PkArgs = {
  application_id: Scalars['uuid'];
};


export type Subscription_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPaymentsArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Payments_Order_By>>;
  where?: Maybe<Payments_Bool_Exp>;
};


export type Subscription_RootPayments_AggregateArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Payments_Order_By>>;
  where?: Maybe<Payments_Bool_Exp>;
};


export type Subscription_RootPayments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRating_RoundsArgs = {
  distinct_on?: Maybe<Array<Rating_Rounds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Rounds_Order_By>>;
  where?: Maybe<Rating_Rounds_Bool_Exp>;
};


export type Subscription_RootRating_Rounds_AggregateArgs = {
  distinct_on?: Maybe<Array<Rating_Rounds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Rounds_Order_By>>;
  where?: Maybe<Rating_Rounds_Bool_Exp>;
};


export type Subscription_RootRating_Rounds_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRating_Rounds_SortedArgs = {
  distinct_on?: Maybe<Array<Rating_Rounds_Sorted_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Rounds_Sorted_Order_By>>;
  where?: Maybe<Rating_Rounds_Sorted_Bool_Exp>;
};


export type Subscription_RootRating_Rounds_Sorted_AggregateArgs = {
  distinct_on?: Maybe<Array<Rating_Rounds_Sorted_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Rounds_Sorted_Order_By>>;
  where?: Maybe<Rating_Rounds_Sorted_Bool_Exp>;
};


export type Subscription_RootRatingsArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};


export type Subscription_RootRatings_AggregateArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};


export type Subscription_RootRatings_By_ApplicationArgs = {
  distinct_on?: Maybe<Array<Ratings_By_Application_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_By_Application_Order_By>>;
  where?: Maybe<Ratings_By_Application_Bool_Exp>;
};


export type Subscription_RootRatings_By_Application_AggregateArgs = {
  distinct_on?: Maybe<Array<Ratings_By_Application_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_By_Application_Order_By>>;
  where?: Maybe<Ratings_By_Application_Bool_Exp>;
};


export type Subscription_RootRatings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSearch_ApplicationsArgs = {
  args: Search_Applications_Args;
  distinct_on?: Maybe<Array<Applications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applications_Order_By>>;
  where?: Maybe<Applications_Bool_Exp>;
};


export type Subscription_RootSearch_Applications_AggregateArgs = {
  args: Search_Applications_Args;
  distinct_on?: Maybe<Array<Applications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applications_Order_By>>;
  where?: Maybe<Applications_Bool_Exp>;
};


export type Subscription_RootUpdatesArgs = {
  distinct_on?: Maybe<Array<Updates_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Updates_Order_By>>;
  where?: Maybe<Updates_Bool_Exp>;
};


export type Subscription_RootUpdates_AggregateArgs = {
  distinct_on?: Maybe<Array<Updates_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Updates_Order_By>>;
  where?: Maybe<Updates_Bool_Exp>;
};


export type Subscription_RootUpdates_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootUsers_OnlineArgs = {
  distinct_on?: Maybe<Array<Users_Online_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Online_Order_By>>;
  where?: Maybe<Users_Online_Bool_Exp>;
};


export type Subscription_RootUsers_Online_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Online_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Online_Order_By>>;
  where?: Maybe<Users_Online_Bool_Exp>;
};


export type Subscription_RootWordlistArgs = {
  distinct_on?: Maybe<Array<Wordlist_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wordlist_Order_By>>;
  where?: Maybe<Wordlist_Bool_Exp>;
};


export type Subscription_RootWordlist_AggregateArgs = {
  distinct_on?: Maybe<Array<Wordlist_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wordlist_Order_By>>;
  where?: Maybe<Wordlist_Bool_Exp>;
};


export type Subscription_RootWordlist_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootWork_FilesArgs = {
  distinct_on?: Maybe<Array<Work_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Files_Order_By>>;
  where?: Maybe<Work_Files_Bool_Exp>;
};


export type Subscription_RootWork_Files_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Files_Order_By>>;
  where?: Maybe<Work_Files_Bool_Exp>;
};


export type Subscription_RootWork_Files_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWork_Specification_MediumsArgs = {
  distinct_on?: Maybe<Array<Work_Specification_Mediums_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Specification_Mediums_Order_By>>;
  where?: Maybe<Work_Specification_Mediums_Bool_Exp>;
};


export type Subscription_RootWork_Specification_Mediums_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Specification_Mediums_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Specification_Mediums_Order_By>>;
  where?: Maybe<Work_Specification_Mediums_Bool_Exp>;
};


export type Subscription_RootWork_Specification_Mediums_By_PkArgs = {
  medium_id: Scalars['uuid'];
  specification_id: Scalars['uuid'];
};


export type Subscription_RootWork_Specification_TagsArgs = {
  distinct_on?: Maybe<Array<Work_Specification_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Specification_Tags_Order_By>>;
  where?: Maybe<Work_Specification_Tags_Bool_Exp>;
};


export type Subscription_RootWork_Specification_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Specification_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Specification_Tags_Order_By>>;
  where?: Maybe<Work_Specification_Tags_Bool_Exp>;
};


export type Subscription_RootWork_Specification_Tags_By_PkArgs = {
  specification_id: Scalars['uuid'];
  tag_id: Scalars['uuid'];
};


export type Subscription_RootWork_SpecificationsArgs = {
  distinct_on?: Maybe<Array<Work_Specifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Specifications_Order_By>>;
  where?: Maybe<Work_Specifications_Bool_Exp>;
};


export type Subscription_RootWork_Specifications_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Specifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Specifications_Order_By>>;
  where?: Maybe<Work_Specifications_Bool_Exp>;
};


export type Subscription_RootWork_Specifications_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWorksArgs = {
  distinct_on?: Maybe<Array<Works_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Order_By>>;
  where?: Maybe<Works_Bool_Exp>;
};


export type Subscription_RootWorks_AggregateArgs = {
  distinct_on?: Maybe<Array<Works_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Order_By>>;
  where?: Maybe<Works_Bool_Exp>;
};


export type Subscription_RootWorks_By_PkArgs = {
  id: Scalars['uuid'];
};


/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "updates" */
export type Updates = {
  __typename?: 'updates';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  edition: Editions;
  edition_id: Scalars['Int'];
  id: Scalars['Int'];
  text_de?: Maybe<Scalars['String']>;
  text_en?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregated selection of "updates" */
export type Updates_Aggregate = {
  __typename?: 'updates_aggregate';
  aggregate?: Maybe<Updates_Aggregate_Fields>;
  nodes: Array<Updates>;
};

/** aggregate fields of "updates" */
export type Updates_Aggregate_Fields = {
  __typename?: 'updates_aggregate_fields';
  avg?: Maybe<Updates_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Updates_Max_Fields>;
  min?: Maybe<Updates_Min_Fields>;
  stddev?: Maybe<Updates_Stddev_Fields>;
  stddev_pop?: Maybe<Updates_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Updates_Stddev_Samp_Fields>;
  sum?: Maybe<Updates_Sum_Fields>;
  var_pop?: Maybe<Updates_Var_Pop_Fields>;
  var_samp?: Maybe<Updates_Var_Samp_Fields>;
  variance?: Maybe<Updates_Variance_Fields>;
};


/** aggregate fields of "updates" */
export type Updates_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Updates_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "updates" */
export type Updates_Aggregate_Order_By = {
  avg?: Maybe<Updates_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Updates_Max_Order_By>;
  min?: Maybe<Updates_Min_Order_By>;
  stddev?: Maybe<Updates_Stddev_Order_By>;
  stddev_pop?: Maybe<Updates_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Updates_Stddev_Samp_Order_By>;
  sum?: Maybe<Updates_Sum_Order_By>;
  var_pop?: Maybe<Updates_Var_Pop_Order_By>;
  var_samp?: Maybe<Updates_Var_Samp_Order_By>;
  variance?: Maybe<Updates_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "updates" */
export type Updates_Arr_Rel_Insert_Input = {
  data: Array<Updates_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Updates_On_Conflict>;
};

/** aggregate avg on columns */
export type Updates_Avg_Fields = {
  __typename?: 'updates_avg_fields';
  edition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "updates" */
export type Updates_Avg_Order_By = {
  edition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "updates". All fields are combined with a logical 'AND'. */
export type Updates_Bool_Exp = {
  _and?: Maybe<Array<Updates_Bool_Exp>>;
  _not?: Maybe<Updates_Bool_Exp>;
  _or?: Maybe<Array<Updates_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  edition?: Maybe<Editions_Bool_Exp>;
  edition_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  text_de?: Maybe<String_Comparison_Exp>;
  text_en?: Maybe<String_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "updates" */
export enum Updates_Constraint {
  /** unique or primary key constraint */
  UpdatesPkey = 'updates_pkey'
}

/** input type for incrementing numeric columns in table "updates" */
export type Updates_Inc_Input = {
  edition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "updates" */
export type Updates_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  edition?: Maybe<Editions_Obj_Rel_Insert_Input>;
  edition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  text_de?: Maybe<Scalars['String']>;
  text_en?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Updates_Max_Fields = {
  __typename?: 'updates_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  edition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  text_de?: Maybe<Scalars['String']>;
  text_en?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "updates" */
export type Updates_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  edition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  text_de?: Maybe<Order_By>;
  text_en?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Updates_Min_Fields = {
  __typename?: 'updates_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  edition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  text_de?: Maybe<Scalars['String']>;
  text_en?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "updates" */
export type Updates_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  edition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  text_de?: Maybe<Order_By>;
  text_en?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** response of any mutation on the table "updates" */
export type Updates_Mutation_Response = {
  __typename?: 'updates_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Updates>;
};

/** on conflict condition type for table "updates" */
export type Updates_On_Conflict = {
  constraint: Updates_Constraint;
  update_columns: Array<Updates_Update_Column>;
  where?: Maybe<Updates_Bool_Exp>;
};

/** Ordering options when selecting data from "updates". */
export type Updates_Order_By = {
  created_at?: Maybe<Order_By>;
  edition?: Maybe<Editions_Order_By>;
  edition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  text_de?: Maybe<Order_By>;
  text_en?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** primary key columns input for table: updates */
export type Updates_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "updates" */
export enum Updates_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EditionId = 'edition_id',
  /** column name */
  Id = 'id',
  /** column name */
  TextDe = 'text_de',
  /** column name */
  TextEn = 'text_en',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "updates" */
export type Updates_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  edition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  text_de?: Maybe<Scalars['String']>;
  text_en?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Updates_Stddev_Fields = {
  __typename?: 'updates_stddev_fields';
  edition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "updates" */
export type Updates_Stddev_Order_By = {
  edition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Updates_Stddev_Pop_Fields = {
  __typename?: 'updates_stddev_pop_fields';
  edition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "updates" */
export type Updates_Stddev_Pop_Order_By = {
  edition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Updates_Stddev_Samp_Fields = {
  __typename?: 'updates_stddev_samp_fields';
  edition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "updates" */
export type Updates_Stddev_Samp_Order_By = {
  edition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Updates_Sum_Fields = {
  __typename?: 'updates_sum_fields';
  edition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "updates" */
export type Updates_Sum_Order_By = {
  edition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "updates" */
export enum Updates_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EditionId = 'edition_id',
  /** column name */
  Id = 'id',
  /** column name */
  TextDe = 'text_de',
  /** column name */
  TextEn = 'text_en',
  /** column name */
  Url = 'url'
}

/** aggregate var_pop on columns */
export type Updates_Var_Pop_Fields = {
  __typename?: 'updates_var_pop_fields';
  edition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "updates" */
export type Updates_Var_Pop_Order_By = {
  edition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Updates_Var_Samp_Fields = {
  __typename?: 'updates_var_samp_fields';
  edition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "updates" */
export type Updates_Var_Samp_Order_By = {
  edition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Updates_Variance_Fields = {
  __typename?: 'updates_variance_fields';
  edition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "updates" */
export type Updates_Variance_Order_By = {
  edition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applications_aggregate: Applications_Aggregate;
  id: Scalars['String'];
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  ratings: Array<Ratings>;
  /** An aggregate relationship */
  ratings_aggregate: Ratings_Aggregate;
  type: Scalars['String'];
};


/** columns and relationships of "users" */
export type UsersApplicationsArgs = {
  distinct_on?: Maybe<Array<Applications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applications_Order_By>>;
  where?: Maybe<Applications_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersApplications_AggregateArgs = {
  distinct_on?: Maybe<Array<Applications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applications_Order_By>>;
  where?: Maybe<Applications_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersRatingsArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersRatings_AggregateArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  applications?: Maybe<Applications_Bool_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  ratings?: Maybe<Ratings_Bool_Exp>;
  type?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  applications?: Maybe<Applications_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  ratings?: Maybe<Ratings_Arr_Rel_Insert_Input>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** columns and relationships of "users_online" */
export type Users_Online = {
  __typename?: 'users_online';
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregated selection of "users_online" */
export type Users_Online_Aggregate = {
  __typename?: 'users_online_aggregate';
  aggregate?: Maybe<Users_Online_Aggregate_Fields>;
  nodes: Array<Users_Online>;
};

/** aggregate fields of "users_online" */
export type Users_Online_Aggregate_Fields = {
  __typename?: 'users_online_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Online_Max_Fields>;
  min?: Maybe<Users_Online_Min_Fields>;
};


/** aggregate fields of "users_online" */
export type Users_Online_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Online_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users_online". All fields are combined with a logical 'AND'. */
export type Users_Online_Bool_Exp = {
  _and?: Maybe<Array<Users_Online_Bool_Exp>>;
  _not?: Maybe<Users_Online_Bool_Exp>;
  _or?: Maybe<Array<Users_Online_Bool_Exp>>;
  id?: Maybe<String_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "users_online" */
export type Users_Online_Insert_Input = {
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Online_Max_Fields = {
  __typename?: 'users_online_max_fields';
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Online_Min_Fields = {
  __typename?: 'users_online_min_fields';
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users_online" */
export type Users_Online_Mutation_Response = {
  __typename?: 'users_online_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_Online>;
};

/** Ordering options when selecting data from "users_online". */
export type Users_Online_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** select columns of table "users_online" */
export enum Users_Online_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "users_online" */
export type Users_Online_Set_Input = {
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  applications_aggregate?: Maybe<Applications_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  ratings_aggregate?: Maybe<Ratings_Aggregate_Order_By>;
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type'
}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "wordlist" */
export type Wordlist = {
  __typename?: 'wordlist';
  id: Scalars['Int'];
  value: Scalars['String'];
};

/** aggregated selection of "wordlist" */
export type Wordlist_Aggregate = {
  __typename?: 'wordlist_aggregate';
  aggregate?: Maybe<Wordlist_Aggregate_Fields>;
  nodes: Array<Wordlist>;
};

/** aggregate fields of "wordlist" */
export type Wordlist_Aggregate_Fields = {
  __typename?: 'wordlist_aggregate_fields';
  avg?: Maybe<Wordlist_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Wordlist_Max_Fields>;
  min?: Maybe<Wordlist_Min_Fields>;
  stddev?: Maybe<Wordlist_Stddev_Fields>;
  stddev_pop?: Maybe<Wordlist_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Wordlist_Stddev_Samp_Fields>;
  sum?: Maybe<Wordlist_Sum_Fields>;
  var_pop?: Maybe<Wordlist_Var_Pop_Fields>;
  var_samp?: Maybe<Wordlist_Var_Samp_Fields>;
  variance?: Maybe<Wordlist_Variance_Fields>;
};


/** aggregate fields of "wordlist" */
export type Wordlist_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Wordlist_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Wordlist_Avg_Fields = {
  __typename?: 'wordlist_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "wordlist". All fields are combined with a logical 'AND'. */
export type Wordlist_Bool_Exp = {
  _and?: Maybe<Array<Wordlist_Bool_Exp>>;
  _not?: Maybe<Wordlist_Bool_Exp>;
  _or?: Maybe<Array<Wordlist_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "wordlist" */
export enum Wordlist_Constraint {
  /** unique or primary key constraint */
  WordlistPkey = 'wordlist_pkey'
}

/** input type for incrementing numeric columns in table "wordlist" */
export type Wordlist_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "wordlist" */
export type Wordlist_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Wordlist_Max_Fields = {
  __typename?: 'wordlist_max_fields';
  id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Wordlist_Min_Fields = {
  __typename?: 'wordlist_min_fields';
  id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "wordlist" */
export type Wordlist_Mutation_Response = {
  __typename?: 'wordlist_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Wordlist>;
};

/** on conflict condition type for table "wordlist" */
export type Wordlist_On_Conflict = {
  constraint: Wordlist_Constraint;
  update_columns: Array<Wordlist_Update_Column>;
  where?: Maybe<Wordlist_Bool_Exp>;
};

/** Ordering options when selecting data from "wordlist". */
export type Wordlist_Order_By = {
  id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: wordlist */
export type Wordlist_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "wordlist" */
export enum Wordlist_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "wordlist" */
export type Wordlist_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Wordlist_Stddev_Fields = {
  __typename?: 'wordlist_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Wordlist_Stddev_Pop_Fields = {
  __typename?: 'wordlist_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Wordlist_Stddev_Samp_Fields = {
  __typename?: 'wordlist_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Wordlist_Sum_Fields = {
  __typename?: 'wordlist_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "wordlist" */
export enum Wordlist_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Wordlist_Var_Pop_Fields = {
  __typename?: 'wordlist_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Wordlist_Var_Samp_Fields = {
  __typename?: 'wordlist_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Wordlist_Variance_Fields = {
  __typename?: 'wordlist_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "work_files" */
export type Work_Files = {
  __typename?: 'work_files';
  /** An object relationship */
  application: Applications;
  application_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  key: Scalars['String'];
  mimetype: Scalars['String'];
  order: Scalars['Int'];
  originalname: Scalars['String'];
  /** Password for Vimeo/YouTube Videos */
  password?: Maybe<Scalars['String']>;
  size: Scalars['numeric'];
  /** An object relationship */
  work: Works;
  work_id: Scalars['uuid'];
};

/** aggregated selection of "work_files" */
export type Work_Files_Aggregate = {
  __typename?: 'work_files_aggregate';
  aggregate?: Maybe<Work_Files_Aggregate_Fields>;
  nodes: Array<Work_Files>;
};

/** aggregate fields of "work_files" */
export type Work_Files_Aggregate_Fields = {
  __typename?: 'work_files_aggregate_fields';
  avg?: Maybe<Work_Files_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Work_Files_Max_Fields>;
  min?: Maybe<Work_Files_Min_Fields>;
  stddev?: Maybe<Work_Files_Stddev_Fields>;
  stddev_pop?: Maybe<Work_Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Work_Files_Stddev_Samp_Fields>;
  sum?: Maybe<Work_Files_Sum_Fields>;
  var_pop?: Maybe<Work_Files_Var_Pop_Fields>;
  var_samp?: Maybe<Work_Files_Var_Samp_Fields>;
  variance?: Maybe<Work_Files_Variance_Fields>;
};


/** aggregate fields of "work_files" */
export type Work_Files_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Work_Files_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "work_files" */
export type Work_Files_Aggregate_Order_By = {
  avg?: Maybe<Work_Files_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Work_Files_Max_Order_By>;
  min?: Maybe<Work_Files_Min_Order_By>;
  stddev?: Maybe<Work_Files_Stddev_Order_By>;
  stddev_pop?: Maybe<Work_Files_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Work_Files_Stddev_Samp_Order_By>;
  sum?: Maybe<Work_Files_Sum_Order_By>;
  var_pop?: Maybe<Work_Files_Var_Pop_Order_By>;
  var_samp?: Maybe<Work_Files_Var_Samp_Order_By>;
  variance?: Maybe<Work_Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "work_files" */
export type Work_Files_Arr_Rel_Insert_Input = {
  data: Array<Work_Files_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Work_Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Work_Files_Avg_Fields = {
  __typename?: 'work_files_avg_fields';
  order?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "work_files" */
export type Work_Files_Avg_Order_By = {
  order?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "work_files". All fields are combined with a logical 'AND'. */
export type Work_Files_Bool_Exp = {
  _and?: Maybe<Array<Work_Files_Bool_Exp>>;
  _not?: Maybe<Work_Files_Bool_Exp>;
  _or?: Maybe<Array<Work_Files_Bool_Exp>>;
  application?: Maybe<Applications_Bool_Exp>;
  application_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  key?: Maybe<String_Comparison_Exp>;
  mimetype?: Maybe<String_Comparison_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
  originalname?: Maybe<String_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  size?: Maybe<Numeric_Comparison_Exp>;
  work?: Maybe<Works_Bool_Exp>;
  work_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "work_files" */
export enum Work_Files_Constraint {
  /** unique or primary key constraint */
  WorkFilesPkey = 'work_files_pkey'
}

/** input type for incrementing numeric columns in table "work_files" */
export type Work_Files_Inc_Input = {
  order?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "work_files" */
export type Work_Files_Insert_Input = {
  application?: Maybe<Applications_Obj_Rel_Insert_Input>;
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  key?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  originalname?: Maybe<Scalars['String']>;
  /** Password for Vimeo/YouTube Videos */
  password?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['numeric']>;
  work?: Maybe<Works_Obj_Rel_Insert_Input>;
  work_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Work_Files_Max_Fields = {
  __typename?: 'work_files_max_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  key?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  originalname?: Maybe<Scalars['String']>;
  /** Password for Vimeo/YouTube Videos */
  password?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['numeric']>;
  work_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "work_files" */
export type Work_Files_Max_Order_By = {
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  mimetype?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  originalname?: Maybe<Order_By>;
  /** Password for Vimeo/YouTube Videos */
  password?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Work_Files_Min_Fields = {
  __typename?: 'work_files_min_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  key?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  originalname?: Maybe<Scalars['String']>;
  /** Password for Vimeo/YouTube Videos */
  password?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['numeric']>;
  work_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "work_files" */
export type Work_Files_Min_Order_By = {
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  mimetype?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  originalname?: Maybe<Order_By>;
  /** Password for Vimeo/YouTube Videos */
  password?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "work_files" */
export type Work_Files_Mutation_Response = {
  __typename?: 'work_files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Work_Files>;
};

/** on conflict condition type for table "work_files" */
export type Work_Files_On_Conflict = {
  constraint: Work_Files_Constraint;
  update_columns: Array<Work_Files_Update_Column>;
  where?: Maybe<Work_Files_Bool_Exp>;
};

/** Ordering options when selecting data from "work_files". */
export type Work_Files_Order_By = {
  application?: Maybe<Applications_Order_By>;
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  mimetype?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  originalname?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  work?: Maybe<Works_Order_By>;
  work_id?: Maybe<Order_By>;
};

/** primary key columns input for table: work_files */
export type Work_Files_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "work_files" */
export enum Work_Files_Select_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Mimetype = 'mimetype',
  /** column name */
  Order = 'order',
  /** column name */
  Originalname = 'originalname',
  /** column name */
  Password = 'password',
  /** column name */
  Size = 'size',
  /** column name */
  WorkId = 'work_id'
}

/** input type for updating data in table "work_files" */
export type Work_Files_Set_Input = {
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  key?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  originalname?: Maybe<Scalars['String']>;
  /** Password for Vimeo/YouTube Videos */
  password?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['numeric']>;
  work_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Work_Files_Stddev_Fields = {
  __typename?: 'work_files_stddev_fields';
  order?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "work_files" */
export type Work_Files_Stddev_Order_By = {
  order?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Work_Files_Stddev_Pop_Fields = {
  __typename?: 'work_files_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "work_files" */
export type Work_Files_Stddev_Pop_Order_By = {
  order?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Work_Files_Stddev_Samp_Fields = {
  __typename?: 'work_files_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "work_files" */
export type Work_Files_Stddev_Samp_Order_By = {
  order?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Work_Files_Sum_Fields = {
  __typename?: 'work_files_sum_fields';
  order?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "work_files" */
export type Work_Files_Sum_Order_By = {
  order?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
};

/** update columns of table "work_files" */
export enum Work_Files_Update_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Mimetype = 'mimetype',
  /** column name */
  Order = 'order',
  /** column name */
  Originalname = 'originalname',
  /** column name */
  Password = 'password',
  /** column name */
  Size = 'size',
  /** column name */
  WorkId = 'work_id'
}

/** aggregate var_pop on columns */
export type Work_Files_Var_Pop_Fields = {
  __typename?: 'work_files_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "work_files" */
export type Work_Files_Var_Pop_Order_By = {
  order?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Work_Files_Var_Samp_Fields = {
  __typename?: 'work_files_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "work_files" */
export type Work_Files_Var_Samp_Order_By = {
  order?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Work_Files_Variance_Fields = {
  __typename?: 'work_files_variance_fields';
  order?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "work_files" */
export type Work_Files_Variance_Order_By = {
  order?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
};

/** columns and relationships of "work_specification_mediums" */
export type Work_Specification_Mediums = {
  __typename?: 'work_specification_mediums';
  /** An object relationship */
  category_medium: Category_Mediums;
  medium_id: Scalars['uuid'];
  specification_id: Scalars['uuid'];
  /** An object relationship */
  works_specification: Work_Specifications;
};

/** aggregated selection of "work_specification_mediums" */
export type Work_Specification_Mediums_Aggregate = {
  __typename?: 'work_specification_mediums_aggregate';
  aggregate?: Maybe<Work_Specification_Mediums_Aggregate_Fields>;
  nodes: Array<Work_Specification_Mediums>;
};

/** aggregate fields of "work_specification_mediums" */
export type Work_Specification_Mediums_Aggregate_Fields = {
  __typename?: 'work_specification_mediums_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Work_Specification_Mediums_Max_Fields>;
  min?: Maybe<Work_Specification_Mediums_Min_Fields>;
};


/** aggregate fields of "work_specification_mediums" */
export type Work_Specification_Mediums_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Work_Specification_Mediums_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "work_specification_mediums" */
export type Work_Specification_Mediums_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Work_Specification_Mediums_Max_Order_By>;
  min?: Maybe<Work_Specification_Mediums_Min_Order_By>;
};

/** input type for inserting array relation for remote table "work_specification_mediums" */
export type Work_Specification_Mediums_Arr_Rel_Insert_Input = {
  data: Array<Work_Specification_Mediums_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Work_Specification_Mediums_On_Conflict>;
};

/** Boolean expression to filter rows from the table "work_specification_mediums". All fields are combined with a logical 'AND'. */
export type Work_Specification_Mediums_Bool_Exp = {
  _and?: Maybe<Array<Work_Specification_Mediums_Bool_Exp>>;
  _not?: Maybe<Work_Specification_Mediums_Bool_Exp>;
  _or?: Maybe<Array<Work_Specification_Mediums_Bool_Exp>>;
  category_medium?: Maybe<Category_Mediums_Bool_Exp>;
  medium_id?: Maybe<Uuid_Comparison_Exp>;
  specification_id?: Maybe<Uuid_Comparison_Exp>;
  works_specification?: Maybe<Work_Specifications_Bool_Exp>;
};

/** unique or primary key constraints on table "work_specification_mediums" */
export enum Work_Specification_Mediums_Constraint {
  /** unique or primary key constraint */
  WorkSpecificationMediumsSpecificationIdMediumIdKey = 'work_specification_mediums_specification_id_medium_id_key',
  /** unique or primary key constraint */
  WorksMediumsPkey = 'works_mediums_pkey'
}

/** input type for inserting data into table "work_specification_mediums" */
export type Work_Specification_Mediums_Insert_Input = {
  category_medium?: Maybe<Category_Mediums_Obj_Rel_Insert_Input>;
  medium_id?: Maybe<Scalars['uuid']>;
  specification_id?: Maybe<Scalars['uuid']>;
  works_specification?: Maybe<Work_Specifications_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Work_Specification_Mediums_Max_Fields = {
  __typename?: 'work_specification_mediums_max_fields';
  medium_id?: Maybe<Scalars['uuid']>;
  specification_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "work_specification_mediums" */
export type Work_Specification_Mediums_Max_Order_By = {
  medium_id?: Maybe<Order_By>;
  specification_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Work_Specification_Mediums_Min_Fields = {
  __typename?: 'work_specification_mediums_min_fields';
  medium_id?: Maybe<Scalars['uuid']>;
  specification_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "work_specification_mediums" */
export type Work_Specification_Mediums_Min_Order_By = {
  medium_id?: Maybe<Order_By>;
  specification_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "work_specification_mediums" */
export type Work_Specification_Mediums_Mutation_Response = {
  __typename?: 'work_specification_mediums_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Work_Specification_Mediums>;
};

/** on conflict condition type for table "work_specification_mediums" */
export type Work_Specification_Mediums_On_Conflict = {
  constraint: Work_Specification_Mediums_Constraint;
  update_columns: Array<Work_Specification_Mediums_Update_Column>;
  where?: Maybe<Work_Specification_Mediums_Bool_Exp>;
};

/** Ordering options when selecting data from "work_specification_mediums". */
export type Work_Specification_Mediums_Order_By = {
  category_medium?: Maybe<Category_Mediums_Order_By>;
  medium_id?: Maybe<Order_By>;
  specification_id?: Maybe<Order_By>;
  works_specification?: Maybe<Work_Specifications_Order_By>;
};

/** primary key columns input for table: work_specification_mediums */
export type Work_Specification_Mediums_Pk_Columns_Input = {
  medium_id: Scalars['uuid'];
  specification_id: Scalars['uuid'];
};

/** select columns of table "work_specification_mediums" */
export enum Work_Specification_Mediums_Select_Column {
  /** column name */
  MediumId = 'medium_id',
  /** column name */
  SpecificationId = 'specification_id'
}

/** input type for updating data in table "work_specification_mediums" */
export type Work_Specification_Mediums_Set_Input = {
  medium_id?: Maybe<Scalars['uuid']>;
  specification_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "work_specification_mediums" */
export enum Work_Specification_Mediums_Update_Column {
  /** column name */
  MediumId = 'medium_id',
  /** column name */
  SpecificationId = 'specification_id'
}

/** columns and relationships of "work_specification_tags" */
export type Work_Specification_Tags = {
  __typename?: 'work_specification_tags';
  specification_id: Scalars['uuid'];
  tag_id: Scalars['uuid'];
};

/** aggregated selection of "work_specification_tags" */
export type Work_Specification_Tags_Aggregate = {
  __typename?: 'work_specification_tags_aggregate';
  aggregate?: Maybe<Work_Specification_Tags_Aggregate_Fields>;
  nodes: Array<Work_Specification_Tags>;
};

/** aggregate fields of "work_specification_tags" */
export type Work_Specification_Tags_Aggregate_Fields = {
  __typename?: 'work_specification_tags_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Work_Specification_Tags_Max_Fields>;
  min?: Maybe<Work_Specification_Tags_Min_Fields>;
};


/** aggregate fields of "work_specification_tags" */
export type Work_Specification_Tags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Work_Specification_Tags_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "work_specification_tags". All fields are combined with a logical 'AND'. */
export type Work_Specification_Tags_Bool_Exp = {
  _and?: Maybe<Array<Work_Specification_Tags_Bool_Exp>>;
  _not?: Maybe<Work_Specification_Tags_Bool_Exp>;
  _or?: Maybe<Array<Work_Specification_Tags_Bool_Exp>>;
  specification_id?: Maybe<Uuid_Comparison_Exp>;
  tag_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "work_specification_tags" */
export enum Work_Specification_Tags_Constraint {
  /** unique or primary key constraint */
  WorkSpecificationTagsPkey = 'work_specification_tags_pkey'
}

/** input type for inserting data into table "work_specification_tags" */
export type Work_Specification_Tags_Insert_Input = {
  specification_id?: Maybe<Scalars['uuid']>;
  tag_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Work_Specification_Tags_Max_Fields = {
  __typename?: 'work_specification_tags_max_fields';
  specification_id?: Maybe<Scalars['uuid']>;
  tag_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Work_Specification_Tags_Min_Fields = {
  __typename?: 'work_specification_tags_min_fields';
  specification_id?: Maybe<Scalars['uuid']>;
  tag_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "work_specification_tags" */
export type Work_Specification_Tags_Mutation_Response = {
  __typename?: 'work_specification_tags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Work_Specification_Tags>;
};

/** on conflict condition type for table "work_specification_tags" */
export type Work_Specification_Tags_On_Conflict = {
  constraint: Work_Specification_Tags_Constraint;
  update_columns: Array<Work_Specification_Tags_Update_Column>;
  where?: Maybe<Work_Specification_Tags_Bool_Exp>;
};

/** Ordering options when selecting data from "work_specification_tags". */
export type Work_Specification_Tags_Order_By = {
  specification_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** primary key columns input for table: work_specification_tags */
export type Work_Specification_Tags_Pk_Columns_Input = {
  specification_id: Scalars['uuid'];
  tag_id: Scalars['uuid'];
};

/** select columns of table "work_specification_tags" */
export enum Work_Specification_Tags_Select_Column {
  /** column name */
  SpecificationId = 'specification_id',
  /** column name */
  TagId = 'tag_id'
}

/** input type for updating data in table "work_specification_tags" */
export type Work_Specification_Tags_Set_Input = {
  specification_id?: Maybe<Scalars['uuid']>;
  tag_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "work_specification_tags" */
export enum Work_Specification_Tags_Update_Column {
  /** column name */
  SpecificationId = 'specification_id',
  /** column name */
  TagId = 'tag_id'
}

/** columns and relationships of "work_specifications" */
export type Work_Specifications = {
  __typename?: 'work_specifications';
  /** An object relationship */
  application: Applications;
  application_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  dimensions_depth?: Maybe<Scalars['Int']>;
  dimensions_height?: Maybe<Scalars['Int']>;
  dimensions_width?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  material?: Maybe<Scalars['String']>;
  /** An array relationship */
  mediums: Array<Work_Specification_Mediums>;
  /** An aggregate relationship */
  mediums_aggregate: Work_Specification_Mediums_Aggregate;
  number_of_editions?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  work: Works;
  work_id: Scalars['uuid'];
  year?: Maybe<Scalars['String']>;
};


/** columns and relationships of "work_specifications" */
export type Work_SpecificationsMediumsArgs = {
  distinct_on?: Maybe<Array<Work_Specification_Mediums_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Specification_Mediums_Order_By>>;
  where?: Maybe<Work_Specification_Mediums_Bool_Exp>;
};


/** columns and relationships of "work_specifications" */
export type Work_SpecificationsMediums_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Specification_Mediums_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Specification_Mediums_Order_By>>;
  where?: Maybe<Work_Specification_Mediums_Bool_Exp>;
};

/** aggregated selection of "work_specifications" */
export type Work_Specifications_Aggregate = {
  __typename?: 'work_specifications_aggregate';
  aggregate?: Maybe<Work_Specifications_Aggregate_Fields>;
  nodes: Array<Work_Specifications>;
};

/** aggregate fields of "work_specifications" */
export type Work_Specifications_Aggregate_Fields = {
  __typename?: 'work_specifications_aggregate_fields';
  avg?: Maybe<Work_Specifications_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Work_Specifications_Max_Fields>;
  min?: Maybe<Work_Specifications_Min_Fields>;
  stddev?: Maybe<Work_Specifications_Stddev_Fields>;
  stddev_pop?: Maybe<Work_Specifications_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Work_Specifications_Stddev_Samp_Fields>;
  sum?: Maybe<Work_Specifications_Sum_Fields>;
  var_pop?: Maybe<Work_Specifications_Var_Pop_Fields>;
  var_samp?: Maybe<Work_Specifications_Var_Samp_Fields>;
  variance?: Maybe<Work_Specifications_Variance_Fields>;
};


/** aggregate fields of "work_specifications" */
export type Work_Specifications_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Work_Specifications_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "work_specifications" */
export type Work_Specifications_Aggregate_Order_By = {
  avg?: Maybe<Work_Specifications_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Work_Specifications_Max_Order_By>;
  min?: Maybe<Work_Specifications_Min_Order_By>;
  stddev?: Maybe<Work_Specifications_Stddev_Order_By>;
  stddev_pop?: Maybe<Work_Specifications_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Work_Specifications_Stddev_Samp_Order_By>;
  sum?: Maybe<Work_Specifications_Sum_Order_By>;
  var_pop?: Maybe<Work_Specifications_Var_Pop_Order_By>;
  var_samp?: Maybe<Work_Specifications_Var_Samp_Order_By>;
  variance?: Maybe<Work_Specifications_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "work_specifications" */
export type Work_Specifications_Arr_Rel_Insert_Input = {
  data: Array<Work_Specifications_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Work_Specifications_On_Conflict>;
};

/** aggregate avg on columns */
export type Work_Specifications_Avg_Fields = {
  __typename?: 'work_specifications_avg_fields';
  dimensions_depth?: Maybe<Scalars['Float']>;
  dimensions_height?: Maybe<Scalars['Float']>;
  dimensions_width?: Maybe<Scalars['Float']>;
  number_of_editions?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "work_specifications" */
export type Work_Specifications_Avg_Order_By = {
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "work_specifications". All fields are combined with a logical 'AND'. */
export type Work_Specifications_Bool_Exp = {
  _and?: Maybe<Array<Work_Specifications_Bool_Exp>>;
  _not?: Maybe<Work_Specifications_Bool_Exp>;
  _or?: Maybe<Array<Work_Specifications_Bool_Exp>>;
  application?: Maybe<Applications_Bool_Exp>;
  application_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  dimensions_depth?: Maybe<Int_Comparison_Exp>;
  dimensions_height?: Maybe<Int_Comparison_Exp>;
  dimensions_width?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  material?: Maybe<String_Comparison_Exp>;
  mediums?: Maybe<Work_Specification_Mediums_Bool_Exp>;
  number_of_editions?: Maybe<Int_Comparison_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  work?: Maybe<Works_Bool_Exp>;
  work_id?: Maybe<Uuid_Comparison_Exp>;
  year?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "work_specifications" */
export enum Work_Specifications_Constraint {
  /** unique or primary key constraint */
  WorksSpecificationsPkey = 'works_specifications_pkey'
}

/** input type for incrementing numeric columns in table "work_specifications" */
export type Work_Specifications_Inc_Input = {
  dimensions_depth?: Maybe<Scalars['Int']>;
  dimensions_height?: Maybe<Scalars['Int']>;
  dimensions_width?: Maybe<Scalars['Int']>;
  number_of_editions?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "work_specifications" */
export type Work_Specifications_Insert_Input = {
  application?: Maybe<Applications_Obj_Rel_Insert_Input>;
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  dimensions_depth?: Maybe<Scalars['Int']>;
  dimensions_height?: Maybe<Scalars['Int']>;
  dimensions_width?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  material?: Maybe<Scalars['String']>;
  mediums?: Maybe<Work_Specification_Mediums_Arr_Rel_Insert_Input>;
  number_of_editions?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  work?: Maybe<Works_Obj_Rel_Insert_Input>;
  work_id?: Maybe<Scalars['uuid']>;
  year?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Work_Specifications_Max_Fields = {
  __typename?: 'work_specifications_max_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  dimensions_depth?: Maybe<Scalars['Int']>;
  dimensions_height?: Maybe<Scalars['Int']>;
  dimensions_width?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  material?: Maybe<Scalars['String']>;
  number_of_editions?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  work_id?: Maybe<Scalars['uuid']>;
  year?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "work_specifications" */
export type Work_Specifications_Max_Order_By = {
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  material?: Maybe<Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Work_Specifications_Min_Fields = {
  __typename?: 'work_specifications_min_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  dimensions_depth?: Maybe<Scalars['Int']>;
  dimensions_height?: Maybe<Scalars['Int']>;
  dimensions_width?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  material?: Maybe<Scalars['String']>;
  number_of_editions?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  work_id?: Maybe<Scalars['uuid']>;
  year?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "work_specifications" */
export type Work_Specifications_Min_Order_By = {
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  material?: Maybe<Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** response of any mutation on the table "work_specifications" */
export type Work_Specifications_Mutation_Response = {
  __typename?: 'work_specifications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Work_Specifications>;
};

/** input type for inserting object relation for remote table "work_specifications" */
export type Work_Specifications_Obj_Rel_Insert_Input = {
  data: Work_Specifications_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Work_Specifications_On_Conflict>;
};

/** on conflict condition type for table "work_specifications" */
export type Work_Specifications_On_Conflict = {
  constraint: Work_Specifications_Constraint;
  update_columns: Array<Work_Specifications_Update_Column>;
  where?: Maybe<Work_Specifications_Bool_Exp>;
};

/** Ordering options when selecting data from "work_specifications". */
export type Work_Specifications_Order_By = {
  application?: Maybe<Applications_Order_By>;
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  material?: Maybe<Order_By>;
  mediums_aggregate?: Maybe<Work_Specification_Mediums_Aggregate_Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  work?: Maybe<Works_Order_By>;
  work_id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** primary key columns input for table: work_specifications */
export type Work_Specifications_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "work_specifications" */
export enum Work_Specifications_Select_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  DimensionsDepth = 'dimensions_depth',
  /** column name */
  DimensionsHeight = 'dimensions_height',
  /** column name */
  DimensionsWidth = 'dimensions_width',
  /** column name */
  Id = 'id',
  /** column name */
  Material = 'material',
  /** column name */
  NumberOfEditions = 'number_of_editions',
  /** column name */
  Order = 'order',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkId = 'work_id',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "work_specifications" */
export type Work_Specifications_Set_Input = {
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  dimensions_depth?: Maybe<Scalars['Int']>;
  dimensions_height?: Maybe<Scalars['Int']>;
  dimensions_width?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  material?: Maybe<Scalars['String']>;
  number_of_editions?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  work_id?: Maybe<Scalars['uuid']>;
  year?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Work_Specifications_Stddev_Fields = {
  __typename?: 'work_specifications_stddev_fields';
  dimensions_depth?: Maybe<Scalars['Float']>;
  dimensions_height?: Maybe<Scalars['Float']>;
  dimensions_width?: Maybe<Scalars['Float']>;
  number_of_editions?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "work_specifications" */
export type Work_Specifications_Stddev_Order_By = {
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Work_Specifications_Stddev_Pop_Fields = {
  __typename?: 'work_specifications_stddev_pop_fields';
  dimensions_depth?: Maybe<Scalars['Float']>;
  dimensions_height?: Maybe<Scalars['Float']>;
  dimensions_width?: Maybe<Scalars['Float']>;
  number_of_editions?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "work_specifications" */
export type Work_Specifications_Stddev_Pop_Order_By = {
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Work_Specifications_Stddev_Samp_Fields = {
  __typename?: 'work_specifications_stddev_samp_fields';
  dimensions_depth?: Maybe<Scalars['Float']>;
  dimensions_height?: Maybe<Scalars['Float']>;
  dimensions_width?: Maybe<Scalars['Float']>;
  number_of_editions?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "work_specifications" */
export type Work_Specifications_Stddev_Samp_Order_By = {
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Work_Specifications_Sum_Fields = {
  __typename?: 'work_specifications_sum_fields';
  dimensions_depth?: Maybe<Scalars['Int']>;
  dimensions_height?: Maybe<Scalars['Int']>;
  dimensions_width?: Maybe<Scalars['Int']>;
  number_of_editions?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "work_specifications" */
export type Work_Specifications_Sum_Order_By = {
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** update columns of table "work_specifications" */
export enum Work_Specifications_Update_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  DimensionsDepth = 'dimensions_depth',
  /** column name */
  DimensionsHeight = 'dimensions_height',
  /** column name */
  DimensionsWidth = 'dimensions_width',
  /** column name */
  Id = 'id',
  /** column name */
  Material = 'material',
  /** column name */
  NumberOfEditions = 'number_of_editions',
  /** column name */
  Order = 'order',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkId = 'work_id',
  /** column name */
  Year = 'year'
}

/** aggregate var_pop on columns */
export type Work_Specifications_Var_Pop_Fields = {
  __typename?: 'work_specifications_var_pop_fields';
  dimensions_depth?: Maybe<Scalars['Float']>;
  dimensions_height?: Maybe<Scalars['Float']>;
  dimensions_width?: Maybe<Scalars['Float']>;
  number_of_editions?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "work_specifications" */
export type Work_Specifications_Var_Pop_Order_By = {
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Work_Specifications_Var_Samp_Fields = {
  __typename?: 'work_specifications_var_samp_fields';
  dimensions_depth?: Maybe<Scalars['Float']>;
  dimensions_height?: Maybe<Scalars['Float']>;
  dimensions_width?: Maybe<Scalars['Float']>;
  number_of_editions?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "work_specifications" */
export type Work_Specifications_Var_Samp_Order_By = {
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Work_Specifications_Variance_Fields = {
  __typename?: 'work_specifications_variance_fields';
  dimensions_depth?: Maybe<Scalars['Float']>;
  dimensions_height?: Maybe<Scalars['Float']>;
  dimensions_width?: Maybe<Scalars['Float']>;
  number_of_editions?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "work_specifications" */
export type Work_Specifications_Variance_Order_By = {
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** columns and relationships of "works" */
export type Works = {
  __typename?: 'works';
  /** An object relationship */
  application: Applications;
  application_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  files: Array<Work_Files>;
  /** An aggregate relationship */
  files_aggregate: Work_Files_Aggregate;
  id: Scalars['uuid'];
  order?: Maybe<Scalars['numeric']>;
  portfolio?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  specifications: Array<Work_Specifications>;
  /** An aggregate relationship */
  specifications_aggregate: Work_Specifications_Aggregate;
  updated_at: Scalars['timestamptz'];
  video_password?: Maybe<Scalars['String']>;
  video_url?: Maybe<Scalars['String']>;
};


/** columns and relationships of "works" */
export type WorksFilesArgs = {
  distinct_on?: Maybe<Array<Work_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Files_Order_By>>;
  where?: Maybe<Work_Files_Bool_Exp>;
};


/** columns and relationships of "works" */
export type WorksFiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Files_Order_By>>;
  where?: Maybe<Work_Files_Bool_Exp>;
};


/** columns and relationships of "works" */
export type WorksSpecificationsArgs = {
  distinct_on?: Maybe<Array<Work_Specifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Specifications_Order_By>>;
  where?: Maybe<Work_Specifications_Bool_Exp>;
};


/** columns and relationships of "works" */
export type WorksSpecifications_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Specifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Specifications_Order_By>>;
  where?: Maybe<Work_Specifications_Bool_Exp>;
};

/** aggregated selection of "works" */
export type Works_Aggregate = {
  __typename?: 'works_aggregate';
  aggregate?: Maybe<Works_Aggregate_Fields>;
  nodes: Array<Works>;
};

/** aggregate fields of "works" */
export type Works_Aggregate_Fields = {
  __typename?: 'works_aggregate_fields';
  avg?: Maybe<Works_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Works_Max_Fields>;
  min?: Maybe<Works_Min_Fields>;
  stddev?: Maybe<Works_Stddev_Fields>;
  stddev_pop?: Maybe<Works_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Works_Stddev_Samp_Fields>;
  sum?: Maybe<Works_Sum_Fields>;
  var_pop?: Maybe<Works_Var_Pop_Fields>;
  var_samp?: Maybe<Works_Var_Samp_Fields>;
  variance?: Maybe<Works_Variance_Fields>;
};


/** aggregate fields of "works" */
export type Works_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Works_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "works" */
export type Works_Aggregate_Order_By = {
  avg?: Maybe<Works_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Works_Max_Order_By>;
  min?: Maybe<Works_Min_Order_By>;
  stddev?: Maybe<Works_Stddev_Order_By>;
  stddev_pop?: Maybe<Works_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Works_Stddev_Samp_Order_By>;
  sum?: Maybe<Works_Sum_Order_By>;
  var_pop?: Maybe<Works_Var_Pop_Order_By>;
  var_samp?: Maybe<Works_Var_Samp_Order_By>;
  variance?: Maybe<Works_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "works" */
export type Works_Arr_Rel_Insert_Input = {
  data: Array<Works_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Works_On_Conflict>;
};

/** aggregate avg on columns */
export type Works_Avg_Fields = {
  __typename?: 'works_avg_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "works" */
export type Works_Avg_Order_By = {
  order?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "works". All fields are combined with a logical 'AND'. */
export type Works_Bool_Exp = {
  _and?: Maybe<Array<Works_Bool_Exp>>;
  _not?: Maybe<Works_Bool_Exp>;
  _or?: Maybe<Array<Works_Bool_Exp>>;
  application?: Maybe<Applications_Bool_Exp>;
  application_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  files?: Maybe<Work_Files_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  order?: Maybe<Numeric_Comparison_Exp>;
  portfolio?: Maybe<Boolean_Comparison_Exp>;
  specifications?: Maybe<Work_Specifications_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  video_password?: Maybe<String_Comparison_Exp>;
  video_url?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "works" */
export enum Works_Constraint {
  /** unique or primary key constraint */
  WorksApplicationIdPortfolioKey = 'works_application_id_portfolio_key',
  /** unique or primary key constraint */
  WorksPkey = 'works_pkey'
}

/** input type for incrementing numeric columns in table "works" */
export type Works_Inc_Input = {
  order?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "works" */
export type Works_Insert_Input = {
  application?: Maybe<Applications_Obj_Rel_Insert_Input>;
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  files?: Maybe<Work_Files_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['numeric']>;
  portfolio?: Maybe<Scalars['Boolean']>;
  specifications?: Maybe<Work_Specifications_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  video_password?: Maybe<Scalars['String']>;
  video_url?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Works_Max_Fields = {
  __typename?: 'works_max_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  video_password?: Maybe<Scalars['String']>;
  video_url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "works" */
export type Works_Max_Order_By = {
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  video_password?: Maybe<Order_By>;
  video_url?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Works_Min_Fields = {
  __typename?: 'works_min_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  video_password?: Maybe<Scalars['String']>;
  video_url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "works" */
export type Works_Min_Order_By = {
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  video_password?: Maybe<Order_By>;
  video_url?: Maybe<Order_By>;
};

/** response of any mutation on the table "works" */
export type Works_Mutation_Response = {
  __typename?: 'works_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Works>;
};

/** input type for inserting object relation for remote table "works" */
export type Works_Obj_Rel_Insert_Input = {
  data: Works_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Works_On_Conflict>;
};

/** on conflict condition type for table "works" */
export type Works_On_Conflict = {
  constraint: Works_Constraint;
  update_columns: Array<Works_Update_Column>;
  where?: Maybe<Works_Bool_Exp>;
};

/** Ordering options when selecting data from "works". */
export type Works_Order_By = {
  application?: Maybe<Applications_Order_By>;
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  files_aggregate?: Maybe<Work_Files_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  portfolio?: Maybe<Order_By>;
  specifications_aggregate?: Maybe<Work_Specifications_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  video_password?: Maybe<Order_By>;
  video_url?: Maybe<Order_By>;
};

/** primary key columns input for table: works */
export type Works_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "works" */
export enum Works_Select_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  Portfolio = 'portfolio',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoPassword = 'video_password',
  /** column name */
  VideoUrl = 'video_url'
}

/** input type for updating data in table "works" */
export type Works_Set_Input = {
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['numeric']>;
  portfolio?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  video_password?: Maybe<Scalars['String']>;
  video_url?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Works_Stddev_Fields = {
  __typename?: 'works_stddev_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "works" */
export type Works_Stddev_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Works_Stddev_Pop_Fields = {
  __typename?: 'works_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "works" */
export type Works_Stddev_Pop_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Works_Stddev_Samp_Fields = {
  __typename?: 'works_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "works" */
export type Works_Stddev_Samp_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Works_Sum_Fields = {
  __typename?: 'works_sum_fields';
  order?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "works" */
export type Works_Sum_Order_By = {
  order?: Maybe<Order_By>;
};

/** update columns of table "works" */
export enum Works_Update_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  Portfolio = 'portfolio',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoPassword = 'video_password',
  /** column name */
  VideoUrl = 'video_url'
}

/** aggregate var_pop on columns */
export type Works_Var_Pop_Fields = {
  __typename?: 'works_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "works" */
export type Works_Var_Pop_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Works_Var_Samp_Fields = {
  __typename?: 'works_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "works" */
export type Works_Var_Samp_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Works_Variance_Fields = {
  __typename?: 'works_variance_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "works" */
export type Works_Variance_Order_By = {
  order?: Maybe<Order_By>;
};

export type PaymentFragment = (
  { __typename?: 'payments' }
  & Pick<Payments, 'id' | 'mimetype' | 'key' | 'originalname' | 'size' | 'application_id'>
);

export type ApplicationFragment = (
  { __typename?: 'applications' }
  & Pick<Applications, 'id' | 'name' | 'group' | 'created_at' | 'updated_at' | 'statement' | 'residency' | 'database' | 'disclaimer' | 'locked' | 'ready' | 'state'>
  & { payment?: Maybe<(
    { __typename?: 'payments' }
    & PaymentFragment
  )>, edition: (
    { __typename?: 'editions' }
    & Pick<Editions, 'id' | 'name'>
  ), files_aggregate: (
    { __typename?: 'work_files_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'work_files_aggregate_fields' }
      & Pick<Work_Files_Aggregate_Fields, 'count'>
      & { sum?: Maybe<(
        { __typename?: 'work_files_sum_fields' }
        & Pick<Work_Files_Sum_Fields, 'size'>
      )> }
    )> }
  ), works_aggregate: (
    { __typename?: 'works_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'works_aggregate_fields' }
      & Pick<Works_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type AdminApplicationFragment = (
  { __typename?: 'applications' }
  & Pick<Applications, 'internal_name' | 'rated_by_user' | 'winner'>
  & { elimination?: Maybe<(
    { __typename?: 'eliminations' }
    & EliminationFragment
  )>, files: Array<(
    { __typename?: 'work_files' }
    & WorkFileFragment
  )> }
);

export type JuryApplicationsFragment = (
  { __typename?: 'applications' }
  & Pick<Applications, 'id' | 'group' | 'created_at' | 'updated_at' | 'statement' | 'internal_name' | 'rated_by_user' | 'locked' | 'ready' | 'state' | 'winner'>
  & { elimination?: Maybe<(
    { __typename?: 'eliminations' }
    & EliminationFragment
  )>, files: Array<(
    { __typename?: 'work_files' }
    & WorkFileFragment
  )> }
);

export type EliminationFragment = (
  { __typename?: 'eliminations' }
  & Pick<Eliminations, 'application_id' | 'created_at' | 'round_id' | 'reason'>
  & { eliminated_by: (
    { __typename?: 'users' }
    & Pick<Users, 'name'>
  ), rating_round?: Maybe<(
    { __typename?: 'rating_rounds' }
    & Pick<Rating_Rounds, 'level'>
  )> }
);

export type GetApplicationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetApplicationsQuery = (
  { __typename?: 'query_root' }
  & { applications: Array<(
    { __typename?: 'applications' }
    & ApplicationFragment
  )>, applications_aggregate: (
    { __typename?: 'applications_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'applications_aggregate_fields' }
      & Pick<Applications_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type GetApplicationQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetApplicationQuery = (
  { __typename?: 'query_root' }
  & { applications_by_pk?: Maybe<(
    { __typename?: 'applications' }
    & ApplicationFragment
  )> }
);

export type AddApplicationMutationVariables = Exact<{
  edition_id: Scalars['Int'];
}>;


export type AddApplicationMutation = (
  { __typename?: 'mutation_root' }
  & { insert_applications_one?: Maybe<(
    { __typename?: 'applications' }
    & Pick<Applications, 'id'>
  )> }
);

export type UpdateApplicationMutationVariables = Exact<{
  id: Scalars['uuid'];
  data: Applications_Set_Input;
}>;


export type UpdateApplicationMutation = (
  { __typename?: 'mutation_root' }
  & { update_applications_by_pk?: Maybe<(
    { __typename?: 'applications' }
    & ApplicationFragment
  )> }
);

export type LockApplicationMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type LockApplicationMutation = (
  { __typename?: 'mutation_root' }
  & { update_applications_by_pk?: Maybe<(
    { __typename?: 'applications' }
    & Pick<Applications, 'id' | 'locked'>
  )> }
);

export type UnlockApplicationMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type UnlockApplicationMutation = (
  { __typename?: 'mutation_root' }
  & { update_applications_by_pk?: Maybe<(
    { __typename?: 'applications' }
    & Pick<Applications, 'id' | 'locked'>
  )> }
);

export type DeleteApplicationMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteApplicationMutation = (
  { __typename?: 'mutation_root' }
  & { delete_applications_by_pk?: Maybe<(
    { __typename?: 'applications' }
    & Pick<Applications, 'id'>
  )> }
);

export type AddPaymentMutationVariables = Exact<{
  application_id: Scalars['uuid'];
  id: Scalars['uuid'];
  key: Scalars['String'];
  mimetype: Scalars['String'];
  originalname: Scalars['String'];
  size: Scalars['numeric'];
}>;


export type AddPaymentMutation = (
  { __typename?: 'mutation_root' }
  & { update_applications_by_pk?: Maybe<(
    { __typename?: 'applications' }
    & Pick<Applications, 'id' | 'updated_at'>
  )>, insert_payments_one?: Maybe<(
    { __typename?: 'payments' }
    & PaymentFragment
  )> }
);

export type DeletePaymentMutationVariables = Exact<{
  id: Scalars['uuid'];
  application_id: Scalars['uuid'];
}>;


export type DeletePaymentMutation = (
  { __typename?: 'mutation_root' }
  & { update_applications_by_pk?: Maybe<(
    { __typename?: 'applications' }
    & Pick<Applications, 'id' | 'updated_at'>
  )>, delete_payments_by_pk?: Maybe<(
    { __typename?: 'payments' }
    & Pick<Payments, 'id' | 'application_id'>
  )> }
);

export type GetJuryApplicationsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GetJuryApplicationsSubscription = (
  { __typename?: 'subscription_root' }
  & { applications_aggregate: (
    { __typename?: 'applications_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'applications_aggregate_fields' }
      & Pick<Applications_Aggregate_Fields, 'count'>
    )>, nodes: Array<(
      { __typename?: 'applications' }
      & { rating_in_latest_round?: Maybe<(
        { __typename?: 'ratings_by_application' }
        & Pick<Ratings_By_Application, 'round_id' | 'avg' | 'avg_total' | 'count'>
      )>, ratings_aggregate: (
        { __typename?: 'ratings_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'ratings_aggregate_fields' }
          & Pick<Ratings_Aggregate_Fields, 'count'>
          & { stddev_samp?: Maybe<(
            { __typename?: 'ratings_stddev_samp_fields' }
            & Pick<Ratings_Stddev_Samp_Fields, 'value'>
          )>, var_samp?: Maybe<(
            { __typename?: 'ratings_var_samp_fields' }
            & Pick<Ratings_Var_Samp_Fields, 'value'>
          )>, avg?: Maybe<(
            { __typename?: 'ratings_avg_fields' }
            & Pick<Ratings_Avg_Fields, 'value'>
          )> }
        )> }
      ) }
      & JuryApplicationsFragment
    )> }
  ) }
);

export type GetJuryApplicationQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetJuryApplicationQuery = (
  { __typename?: 'query_root' }
  & { applications_by_pk?: Maybe<(
    { __typename?: 'applications' }
    & JuryApplicationsFragment
  )> }
);

export type GetAdminApplicationsByEditionQueryVariables = Exact<{
  edition_id?: Maybe<Scalars['Int']>;
}>;


export type GetAdminApplicationsByEditionQuery = (
  { __typename?: 'query_root' }
  & { applications: Array<(
    { __typename?: 'applications' }
    & { rating_in_latest_round?: Maybe<(
      { __typename?: 'ratings_by_application' }
      & Pick<Ratings_By_Application, 'round_id' | 'avg' | 'avg_total' | 'count'>
    )>, ratings_aggregate: (
      { __typename?: 'ratings_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'ratings_aggregate_fields' }
        & Pick<Ratings_Aggregate_Fields, 'count'>
        & { stddev_samp?: Maybe<(
          { __typename?: 'ratings_stddev_samp_fields' }
          & Pick<Ratings_Stddev_Samp_Fields, 'value'>
        )>, var_samp?: Maybe<(
          { __typename?: 'ratings_var_samp_fields' }
          & Pick<Ratings_Var_Samp_Fields, 'value'>
        )>, avg?: Maybe<(
          { __typename?: 'ratings_avg_fields' }
          & Pick<Ratings_Avg_Fields, 'value'>
        )> }
      )> }
    ) }
    & ApplicationFragment
    & AdminApplicationFragment
  )>, applications_aggregate: (
    { __typename?: 'applications_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'applications_aggregate_fields' }
      & Pick<Applications_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type GetAdminApplicationQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetAdminApplicationQuery = (
  { __typename?: 'query_root' }
  & { applications_by_pk?: Maybe<(
    { __typename?: 'applications' }
    & ApplicationFragment
    & AdminApplicationFragment
  )> }
);

export type GetAdminApplicationLiveQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetAdminApplicationLiveQuery = (
  { __typename?: 'query_root' }
  & { applications_by_pk?: Maybe<(
    { __typename?: 'applications' }
    & Pick<Applications, 'rated_by_user'>
  )> }
);

export type GetRemainingApplicationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRemainingApplicationsQuery = (
  { __typename?: 'query_root' }
  & { applications_aggregate: (
    { __typename?: 'applications_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'applications_aggregate_fields' }
      & Pick<Applications_Aggregate_Fields, 'count'>
    )>, nodes: Array<(
      { __typename?: 'applications' }
      & Pick<Applications, 'id' | 'internal_name'>
      & { rating_in_latest_round?: Maybe<(
        { __typename?: 'ratings_by_application' }
        & Pick<Ratings_By_Application, 'round_id' | 'avg' | 'avg_total' | 'count'>
      )> }
    )> }
  ) }
);

export type CreateNewAliasMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type CreateNewAliasMutation = (
  { __typename?: 'mutation_root' }
  & { update_applications_by_pk?: Maybe<(
    { __typename?: 'applications' }
    & Pick<Applications, 'id' | 'updated_at' | 'internal_name'>
  )> }
);

export type EliminateApplicationMutationVariables = Exact<{
  application_id: Scalars['uuid'];
  reason: Scalars['String'];
  round_id?: Maybe<Scalars['Int']>;
}>;


export type EliminateApplicationMutation = (
  { __typename?: 'mutation_root' }
  & { insert_eliminations_one?: Maybe<(
    { __typename?: 'eliminations' }
    & EliminationFragment
  )> }
);

export type DeleteEliminationMutationVariables = Exact<{
  application_id: Scalars['uuid'];
}>;


export type DeleteEliminationMutation = (
  { __typename?: 'mutation_root' }
  & { delete_eliminations_by_pk?: Maybe<(
    { __typename?: 'eliminations' }
    & Pick<Eliminations, 'application_id'>
  )> }
);

export type SearchApplicationsQueryVariables = Exact<{
  search: Scalars['String'];
  edition_id?: Maybe<Scalars['Int']>;
}>;


export type SearchApplicationsQuery = (
  { __typename?: 'query_root' }
  & { search_applications: Array<(
    { __typename?: 'applications' }
    & Pick<Applications, 'id' | 'internal_name'>
  )> }
);

export type BaseQueryVariables = Exact<{ [key: string]: never; }>;


export type BaseQuery = { __typename: 'query_root' };

export type UpdateUsernameMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type UpdateUsernameMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users_one?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'last_seen' | 'name' | 'type'>
  )> }
);

export type MediumFragment = (
  { __typename?: 'category_mediums' }
  & Pick<Category_Mediums, 'id' | 'name_en' | 'name_de'>
);

export type GetAllMediumsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMediumsQuery = (
  { __typename?: 'query_root' }
  & { category_mediums: Array<(
    { __typename?: 'category_mediums' }
    & MediumFragment
  )> }
);

export type GetMediumsOfSpecificationQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetMediumsOfSpecificationQuery = (
  { __typename?: 'query_root' }
  & { work_specification_mediums: Array<(
    { __typename?: 'work_specification_mediums' }
    & Pick<Work_Specification_Mediums, 'specification_id'>
    & { category_medium: (
      { __typename?: 'category_mediums' }
      & MediumFragment
    ) }
  )> }
);

export type UpdateMediumsOfSpecificationMutationVariables = Exact<{
  medium_id: Scalars['uuid'];
  specification_id: Scalars['uuid'];
}>;


export type UpdateMediumsOfSpecificationMutation = (
  { __typename?: 'mutation_root' }
  & { insert_work_specification_mediums?: Maybe<(
    { __typename?: 'work_specification_mediums_mutation_response' }
    & { returning: Array<(
      { __typename?: 'work_specification_mediums' }
      & Pick<Work_Specification_Mediums, 'specification_id'>
      & { category_medium: (
        { __typename?: 'category_mediums' }
        & MediumFragment
      ) }
    )> }
  )> }
);

export type DeleteMediumOfSpecificationMutationVariables = Exact<{
  medium_id: Scalars['uuid'];
  specification_id: Scalars['uuid'];
}>;


export type DeleteMediumOfSpecificationMutation = (
  { __typename?: 'mutation_root' }
  & { delete_work_specification_mediums_by_pk?: Maybe<(
    { __typename?: 'work_specification_mediums' }
    & Pick<Work_Specification_Mediums, 'medium_id' | 'specification_id'>
  )> }
);

export type MessageFragment = (
  { __typename?: 'messages' }
  & Pick<Messages, 'id' | 'text' | 'created_at' | 'application_id' | 'round_id'>
  & { user: (
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'name'>
  ), rating_round?: Maybe<(
    { __typename?: 'rating_rounds' }
    & Pick<Rating_Rounds, 'level'>
  )>, rating?: Maybe<(
    { __typename?: 'ratings' }
    & Pick<Ratings, 'value' | 'created_at'>
    & { rating_round: (
      { __typename?: 'rating_rounds' }
      & Pick<Rating_Rounds, 'level'>
    ) }
  )> }
);

export type SendMessageMutationVariables = Exact<{
  text: Scalars['String'];
  application_id: Scalars['uuid'];
  round_id?: Maybe<Scalars['Int']>;
}>;


export type SendMessageMutation = (
  { __typename?: 'mutation_root' }
  & { insert_messages_one?: Maybe<(
    { __typename?: 'messages' }
    & MessageFragment
  )> }
);

export type DeleteMessageMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteMessageMutation = (
  { __typename?: 'mutation_root' }
  & { delete_messages_by_pk?: Maybe<(
    { __typename?: 'messages' }
    & Pick<Messages, 'id'>
  )> }
);

export type GetMessagesQueryVariables = Exact<{
  application_id: Scalars['uuid'];
  last_received_id?: Maybe<Scalars['Int']>;
  last_received_ts?: Maybe<Scalars['timestamp']>;
}>;


export type GetMessagesQuery = (
  { __typename?: 'query_root' }
  & { messages: Array<(
    { __typename?: 'messages' }
    & MessageFragment
  )> }
);

export type GetMessagesCountLiveSubscriptionVariables = Exact<{
  application_id: Scalars['uuid'];
}>;


export type GetMessagesCountLiveSubscription = (
  { __typename?: 'subscription_root' }
  & { messages_aggregate: (
    { __typename?: 'messages_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'messages_aggregate_fields' }
      & Pick<Messages_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type GetLatestMessageLiveSubscriptionVariables = Exact<{
  application_id: Scalars['uuid'];
}>;


export type GetLatestMessageLiveSubscription = (
  { __typename?: 'subscription_root' }
  & { messages: Array<(
    { __typename?: 'messages' }
    & MessageFragment
  )> }
);

export type EditionFragment = (
  { __typename?: 'editions' }
  & Pick<Editions, 'id' | 'name' | 'current' | 'state' | 'application_end' | 'application_start'>
  & { applications_aggregate: (
    { __typename?: 'applications_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'applications_aggregate_fields' }
      & Pick<Applications_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type GetEditionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEditionQuery = (
  { __typename?: 'query_root' }
  & { editions: Array<(
    { __typename?: 'editions' }
    & EditionFragment
  )> }
);

export type EditionStateSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type EditionStateSubscription = (
  { __typename?: 'subscription_root' }
  & { editions: Array<(
    { __typename?: 'editions' }
    & Pick<Editions, 'state'>
  )> }
);

export type GetAllEditionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEditionsQuery = (
  { __typename?: 'query_root' }
  & { editions: Array<(
    { __typename?: 'editions' }
    & EditionFragment
  )> }
);

export type GetEditionStateAdminSubscriptionVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetEditionStateAdminSubscription = (
  { __typename?: 'subscription_root' }
  & { editions_by_pk?: Maybe<(
    { __typename?: 'editions' }
    & Pick<Editions, 'state'>
  )> }
);

export type GetEditionStatisticQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetEditionStatisticQuery = (
  { __typename?: 'query_root' }
  & { applications_total: (
    { __typename?: 'applications_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'applications_aggregate_fields' }
      & Pick<Applications_Aggregate_Fields, 'count'>
    )>, nodes: Array<(
      { __typename?: 'applications' }
      & Pick<Applications, 'state'>
    )> }
  ), applications_untouched: (
    { __typename?: 'applications_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'applications_aggregate_fields' }
      & Pick<Applications_Aggregate_Fields, 'count'>
    )>, nodes: Array<(
      { __typename?: 'applications' }
      & Pick<Applications, 'state'>
    )> }
  ), applications_edited: (
    { __typename?: 'applications_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'applications_aggregate_fields' }
      & Pick<Applications_Aggregate_Fields, 'count'>
    )>, nodes: Array<(
      { __typename?: 'applications' }
      & Pick<Applications, 'state'>
    )> }
  ), applications_ready: (
    { __typename?: 'applications_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'applications_aggregate_fields' }
      & Pick<Applications_Aggregate_Fields, 'count'>
    )>, nodes: Array<(
      { __typename?: 'applications' }
      & Pick<Applications, 'state'>
    )> }
  ), payments_aggregate: (
    { __typename?: 'payments_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'payments_aggregate_fields' }
      & Pick<Payments_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type CreateEditionMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateEditionMutation = (
  { __typename?: 'mutation_root' }
  & { insert_editions_one?: Maybe<(
    { __typename?: 'editions' }
    & EditionFragment
  )> }
);

export type RenameEditionMutationVariables = Exact<{
  id: Scalars['Int'];
  name: Scalars['String'];
}>;


export type RenameEditionMutation = (
  { __typename?: 'mutation_root' }
  & { update_editions_by_pk?: Maybe<(
    { __typename?: 'editions' }
    & EditionFragment
  )> }
);

export type SetEditionStatusMutationVariables = Exact<{
  id: Scalars['Int'];
  status: Scalars['Boolean'];
}>;


export type SetEditionStatusMutation = (
  { __typename?: 'mutation_root' }
  & { update_editions?: Maybe<(
    { __typename?: 'editions_mutation_response' }
    & Pick<Editions_Mutation_Response, 'affected_rows'>
  )>, update_editions_by_pk?: Maybe<(
    { __typename?: 'editions' }
    & EditionFragment
  )> }
);

export type UpdateEditionMutationVariables = Exact<{
  id: Scalars['Int'];
  application_end: Scalars['timestamptz'];
  application_start: Scalars['timestamptz'];
  name: Scalars['String'];
}>;


export type UpdateEditionMutation = (
  { __typename?: 'mutation_root' }
  & { update_editions_by_pk?: Maybe<(
    { __typename?: 'editions' }
    & EditionFragment
  )> }
);

export type SetEditionWinnerMutationVariables = Exact<{
  application_id?: Maybe<Scalars['uuid']>;
}>;


export type SetEditionWinnerMutation = (
  { __typename?: 'mutation_root' }
  & { update_editions?: Maybe<(
    { __typename?: 'editions_mutation_response' }
    & Pick<Editions_Mutation_Response, 'affected_rows'>
  )> }
);

export type AddRatingMutationVariables = Exact<{
  application_id: Scalars['uuid'];
  round_id: Scalars['Int'];
  value: Scalars['Int'];
  reason: Scalars['String'];
}>;


export type AddRatingMutation = (
  { __typename?: 'mutation_root' }
  & { insert_ratings_one?: Maybe<(
    { __typename?: 'ratings' }
    & Pick<Ratings, 'id'>
    & { application: (
      { __typename?: 'applications' }
      & Pick<Applications, 'rated_by_user'>
    ) }
  )> }
);

export type GetJuryStatisticSubscriptionVariables = Exact<{
  round_id: Scalars['Int'];
  _in: Array<Scalars['String']> | Scalars['String'];
}>;


export type GetJuryStatisticSubscription = (
  { __typename?: 'subscription_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'name'>
    & { ratings_aggregate: (
      { __typename?: 'ratings_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'ratings_aggregate_fields' }
        & Pick<Ratings_Aggregate_Fields, 'count'>
      )> }
    ) }
  )> }
);

export type RoundFragment = (
  { __typename?: 'rating_rounds' }
  & Pick<Rating_Rounds, 'id' | 'goal' | 'start_at' | 'end_at' | 'active' | 'closed' | 'level'>
  & { edition: (
    { __typename?: 'editions' }
    & Pick<Editions, 'id'>
    & { applications_aggregate: (
      { __typename?: 'applications_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'applications_aggregate_fields' }
        & Pick<Applications_Aggregate_Fields, 'count'>
      )> }
    ) }
  ), eliminations_aggregate: (
    { __typename?: 'eliminations_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'eliminations_aggregate_fields' }
      & Pick<Eliminations_Aggregate_Fields, 'count'>
    )>, nodes: Array<(
      { __typename?: 'eliminations' }
      & Pick<Eliminations, 'application_id'>
    )> }
  ) }
);

export type RoundSortedFragment = (
  { __typename?: 'rating_rounds_sorted' }
  & Pick<Rating_Rounds_Sorted, 'id' | 'goal' | 'start_at' | 'end_at' | 'closed' | 'level'>
  & { edition?: Maybe<(
    { __typename?: 'editions' }
    & { applications_aggregate: (
      { __typename?: 'applications_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'applications_aggregate_fields' }
        & Pick<Applications_Aggregate_Fields, 'count'>
      )> }
    ) }
  )> }
);

export type GetAllRoundsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRoundsQuery = (
  { __typename?: 'query_root' }
  & { rating_rounds_sorted: Array<(
    { __typename?: 'rating_rounds_sorted' }
    & RoundSortedFragment
  )>, rating_rounds: Array<(
    { __typename?: 'rating_rounds' }
    & RoundFragment
  )> }
);

export type CreateRoundMutationVariables = Exact<{
  edition_id: Scalars['Int'];
  end_at: Scalars['timestamptz'];
  goal?: Maybe<Scalars['Int']>;
  prev_round_id?: Maybe<Scalars['Int']>;
}>;


export type CreateRoundMutation = (
  { __typename?: 'mutation_root' }
  & { insert_rating_rounds_one?: Maybe<(
    { __typename?: 'rating_rounds' }
    & RoundFragment
  )> }
);

export type UpdateRoundMutationVariables = Exact<{
  round_id: Scalars['Int'];
  end_at: Scalars['timestamptz'];
  goal?: Maybe<Scalars['Int']>;
}>;


export type UpdateRoundMutation = (
  { __typename?: 'mutation_root' }
  & { update_rating_rounds_by_pk?: Maybe<(
    { __typename?: 'rating_rounds' }
    & RoundFragment
  )> }
);

export type CloseRoundMutationVariables = Exact<{
  round_id: Scalars['Int'];
  objects: Array<Eliminations_Insert_Input> | Eliminations_Insert_Input;
}>;


export type CloseRoundMutation = (
  { __typename?: 'mutation_root' }
  & { insert_eliminations?: Maybe<(
    { __typename?: 'eliminations_mutation_response' }
    & Pick<Eliminations_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'eliminations' }
      & EliminationFragment
    )> }
  )>, update_rating_rounds_by_pk?: Maybe<(
    { __typename?: 'rating_rounds' }
    & Pick<Rating_Rounds, 'id' | 'closed'>
  )> }
);

export type GetCurrentRoundSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentRoundSubscription = (
  { __typename?: 'subscription_root' }
  & { rating_rounds: Array<(
    { __typename?: 'rating_rounds' }
    & RoundFragment
  )> }
);

export type GetApplicationsToEliminateQueryVariables = Exact<{
  round_id: Scalars['Int'];
}>;


export type GetApplicationsToEliminateQuery = (
  { __typename?: 'query_root' }
  & { applications: Array<(
    { __typename?: 'applications' }
    & Pick<Applications, 'id'>
  )> }
);

export type GetRoundStatisticQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetRoundStatisticQuery = (
  { __typename?: 'query_root' }
  & { rating_rounds_by_pk?: Maybe<(
    { __typename?: 'rating_rounds' }
    & RoundFragment
  )>, out: (
    { __typename?: 'applications_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'applications_aggregate_fields' }
      & Pick<Applications_Aggregate_Fields, 'count'>
    )> }
  ), in: (
    { __typename?: 'applications_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'applications_aggregate_fields' }
      & Pick<Applications_Aggregate_Fields, 'count'>
    )> }
  ), rated: (
    { __typename?: 'applications_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'applications_aggregate_fields' }
      & Pick<Applications_Aggregate_Fields, 'count'>
    )> }
  ), total: (
    { __typename?: 'applications_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'applications_aggregate_fields' }
      & Pick<Applications_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type UpdateFragment = (
  { __typename?: 'updates' }
  & Pick<Updates, 'id' | 'created_at' | 'text_en' | 'text_de' | 'url'>
);

export type GetUpdatesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GetUpdatesSubscription = (
  { __typename?: 'subscription_root' }
  & { updates: Array<(
    { __typename?: 'updates' }
    & UpdateFragment
  )> }
);

export type AddUpdateMutationVariables = Exact<{
  object?: Maybe<Updates_Insert_Input>;
}>;


export type AddUpdateMutation = (
  { __typename?: 'mutation_root' }
  & { insert_updates_one?: Maybe<(
    { __typename?: 'updates' }
    & UpdateFragment
  )> }
);

export type EditUpdateMutationVariables = Exact<{
  id: Scalars['Int'];
  _set?: Maybe<Updates_Set_Input>;
}>;


export type EditUpdateMutation = (
  { __typename?: 'mutation_root' }
  & { update_updates_by_pk?: Maybe<(
    { __typename?: 'updates' }
    & UpdateFragment
  )> }
);

export type WorkFragment = (
  { __typename?: 'works' }
  & Pick<Works, 'id' | 'portfolio' | 'order'>
  & { files: Array<(
    { __typename?: 'work_files' }
    & WorkFileFragment
  )>, specifications: Array<(
    { __typename?: 'work_specifications' }
    & WorkSpecificationFragment
  )> }
);

export type FileFragment = (
  { __typename?: 'work_files' }
  & Pick<Work_Files, 'id' | 'mimetype' | 'key' | 'originalname' | 'size' | 'password'>
);

export type WorkFileFragment = (
  { __typename?: 'work_files' }
  & Pick<Work_Files, 'work_id' | 'application_id' | 'order'>
  & FileFragment
);

export type WorkSpecificationFragment = (
  { __typename?: 'work_specifications' }
  & Pick<Work_Specifications, 'id' | 'work_id' | 'application_id' | 'material' | 'year' | 'title' | 'order' | 'number_of_editions' | 'description' | 'dimensions_width' | 'dimensions_height' | 'dimensions_depth'>
  & { mediums: Array<(
    { __typename?: 'work_specification_mediums' }
    & Pick<Work_Specification_Mediums, 'specification_id'>
    & { category_medium: (
      { __typename?: 'category_mediums' }
      & MediumFragment
    ) }
  )> }
);

export type AddWorkMutationVariables = Exact<{
  application_id: Scalars['uuid'];
  portfolio?: Maybe<Scalars['Boolean']>;
}>;


export type AddWorkMutation = (
  { __typename?: 'mutation_root' }
  & { insert_works_one?: Maybe<(
    { __typename?: 'works' }
    & WorkFragment
  )> }
);

export type DeleteWorkMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteWorkMutation = (
  { __typename?: 'mutation_root' }
  & { delete_works_by_pk?: Maybe<(
    { __typename?: 'works' }
    & Pick<Works, 'id' | 'portfolio' | 'application_id'>
  )> }
);

export type AddPortfolioSpecificationMutationVariables = Exact<{
  application_id: Scalars['uuid'];
  work_id: Scalars['uuid'];
  order: Scalars['Int'];
}>;


export type AddPortfolioSpecificationMutation = (
  { __typename?: 'mutation_root' }
  & { insert_work_specifications_one?: Maybe<(
    { __typename?: 'work_specifications' }
    & WorkSpecificationFragment
  )> }
);

export type DeletePortfolioSpecificationMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeletePortfolioSpecificationMutation = (
  { __typename?: 'mutation_root' }
  & { delete_work_specifications_by_pk?: Maybe<(
    { __typename?: 'work_specifications' }
    & Pick<Work_Specifications, 'id' | 'work_id' | 'application_id'>
  )> }
);

export type AddWorkFileMutationVariables = Exact<{
  id: Scalars['uuid'];
  application_id: Scalars['uuid'];
  work_id: Scalars['uuid'];
  order: Scalars['Int'];
  key: Scalars['String'];
  mimetype: Scalars['String'];
  originalname: Scalars['String'];
  size: Scalars['numeric'];
  password?: Maybe<Scalars['String']>;
}>;


export type AddWorkFileMutation = (
  { __typename?: 'mutation_root' }
  & { update_applications_by_pk?: Maybe<(
    { __typename?: 'applications' }
    & Pick<Applications, 'id' | 'updated_at'>
  )>, insert_work_files_one?: Maybe<(
    { __typename?: 'work_files' }
    & WorkFileFragment
  )> }
);

export type DeleteWorkFileMutationVariables = Exact<{
  id: Scalars['uuid'];
  application_id: Scalars['uuid'];
}>;


export type DeleteWorkFileMutation = (
  { __typename?: 'mutation_root' }
  & { update_applications_by_pk?: Maybe<(
    { __typename?: 'applications' }
    & Pick<Applications, 'id' | 'updated_at'>
  )>, delete_work_files_by_pk?: Maybe<(
    { __typename?: 'work_files' }
    & Pick<Work_Files, 'id' | 'work_id'>
  )> }
);

export type GetWorksQueryVariables = Exact<{
  application_id: Scalars['uuid'];
}>;


export type GetWorksQuery = (
  { __typename?: 'query_root' }
  & { works: Array<(
    { __typename?: 'works' }
    & WorkFragment
  )> }
);

export type GetSingleWorksQueryVariables = Exact<{
  application_id: Scalars['uuid'];
}>;


export type GetSingleWorksQuery = (
  { __typename?: 'query_root' }
  & { works: Array<(
    { __typename?: 'works' }
    & WorkFragment
  )> }
);

export type GetPortfolioWorksQueryVariables = Exact<{
  application_id: Scalars['uuid'];
}>;


export type GetPortfolioWorksQuery = (
  { __typename?: 'query_root' }
  & { works: Array<(
    { __typename?: 'works' }
    & WorkFragment
  )> }
);

export type UpdateSpecificationMutationVariables = Exact<{
  id: Scalars['uuid'];
  set: Work_Specifications_Set_Input;
  application_id: Scalars['uuid'];
}>;


export type UpdateSpecificationMutation = (
  { __typename?: 'mutation_root' }
  & { update_applications_by_pk?: Maybe<(
    { __typename?: 'applications' }
    & Pick<Applications, 'id' | 'updated_at'>
  )>, update_work_specifications_by_pk?: Maybe<(
    { __typename?: 'work_specifications' }
    & WorkSpecificationFragment
  )> }
);

export type UpdateWorksOrderMutationVariables = Exact<{
  objects: Array<Works_Insert_Input> | Works_Insert_Input;
}>;


export type UpdateWorksOrderMutation = (
  { __typename?: 'mutation_root' }
  & { insert_works?: Maybe<(
    { __typename?: 'works_mutation_response' }
    & { returning: Array<(
      { __typename?: 'works' }
      & Pick<Works, 'id' | 'order'>
    )> }
  )> }
);

export type UpdateSpecificationsOrderMutationVariables = Exact<{
  objects: Array<Work_Specifications_Insert_Input> | Work_Specifications_Insert_Input;
}>;


export type UpdateSpecificationsOrderMutation = (
  { __typename?: 'mutation_root' }
  & { insert_work_specifications?: Maybe<(
    { __typename?: 'work_specifications_mutation_response' }
    & { returning: Array<(
      { __typename?: 'work_specifications' }
      & Pick<Work_Specifications, 'id' | 'order'>
    )> }
  )> }
);

export type UpdateWorkFilesOrderMutationVariables = Exact<{
  objects: Array<Work_Files_Insert_Input> | Work_Files_Insert_Input;
}>;


export type UpdateWorkFilesOrderMutation = (
  { __typename?: 'mutation_root' }
  & { insert_work_files?: Maybe<(
    { __typename?: 'work_files_mutation_response' }
    & { returning: Array<(
      { __typename?: 'work_files' }
      & Pick<Work_Files, 'id' | 'order'>
    )> }
  )> }
);

export const PaymentFragmentDoc = gql`
    fragment Payment on payments {
  id
  mimetype
  key
  originalname
  size
  application_id
}
    `;
export const ApplicationFragmentDoc = gql`
    fragment Application on applications {
  id
  name
  group
  created_at
  updated_at
  statement
  residency
  database
  disclaimer
  locked
  ready
  state
  payment {
    ...Payment
  }
  edition {
    id
    name
  }
  files_aggregate {
    aggregate {
      count
      sum {
        size
      }
    }
  }
  works_aggregate {
    aggregate {
      count
    }
  }
}
    ${PaymentFragmentDoc}`;
export const EliminationFragmentDoc = gql`
    fragment Elimination on eliminations {
  application_id
  created_at
  round_id
  eliminated_by {
    name
  }
  rating_round {
    level
  }
  reason
}
    `;
export const FileFragmentDoc = gql`
    fragment File on work_files {
  id
  mimetype
  key
  originalname
  size
  password
}
    `;
export const WorkFileFragmentDoc = gql`
    fragment WorkFile on work_files {
  work_id
  application_id
  order
  ...File
}
    ${FileFragmentDoc}`;
export const AdminApplicationFragmentDoc = gql`
    fragment AdminApplication on applications {
  internal_name
  rated_by_user
  winner
  elimination {
    ...Elimination
  }
  files(limit: 1, order_by: {order: asc_nulls_last}) {
    ...WorkFile
  }
}
    ${EliminationFragmentDoc}
${WorkFileFragmentDoc}`;
export const JuryApplicationsFragmentDoc = gql`
    fragment JuryApplications on applications {
  id
  group
  created_at
  updated_at
  statement
  internal_name
  rated_by_user
  locked
  ready
  state
  winner
  elimination {
    ...Elimination
  }
  files(limit: 1, order_by: {order: asc_nulls_last}) {
    ...WorkFile
  }
}
    ${EliminationFragmentDoc}
${WorkFileFragmentDoc}`;
export const MessageFragmentDoc = gql`
    fragment Message on messages {
  id
  text
  user {
    id
    name
  }
  created_at
  application_id
  round_id
  rating_round {
    level
  }
  rating {
    value
    created_at
    rating_round {
      level
    }
  }
}
    `;
export const EditionFragmentDoc = gql`
    fragment Edition on editions {
  id
  name
  current
  state
  application_end
  application_start
  applications_aggregate {
    aggregate {
      count
    }
  }
}
    `;
export const RoundFragmentDoc = gql`
    fragment Round on rating_rounds {
  id
  goal
  start_at
  end_at
  active
  closed
  level
  edition {
    id
    applications_aggregate(where: {_not: {elimination: {}}}) {
      aggregate {
        count
      }
    }
  }
  eliminations_aggregate {
    aggregate {
      count
    }
    nodes {
      application_id
    }
  }
}
    `;
export const RoundSortedFragmentDoc = gql`
    fragment RoundSorted on rating_rounds_sorted {
  id
  goal
  start_at
  end_at
  closed
  level
  edition {
    applications_aggregate(where: {_not: {elimination: {}}}) {
      aggregate {
        count
      }
    }
  }
}
    `;
export const UpdateFragmentDoc = gql`
    fragment Update on updates {
  id
  created_at
  text_en
  text_de
  url
}
    `;
export const MediumFragmentDoc = gql`
    fragment Medium on category_mediums {
  id
  name_en
  name_de
}
    `;
export const WorkSpecificationFragmentDoc = gql`
    fragment WorkSpecification on work_specifications {
  id
  work_id
  application_id
  material
  mediums {
    specification_id
    category_medium {
      ...Medium
    }
  }
  year
  title
  order
  number_of_editions
  description
  dimensions_width
  dimensions_height
  dimensions_depth
}
    ${MediumFragmentDoc}`;
export const WorkFragmentDoc = gql`
    fragment Work on works {
  id
  portfolio
  order
  files(order_by: {order: asc_nulls_last}) {
    ...WorkFile
  }
  specifications(order_by: {order: asc_nulls_last}) {
    ...WorkSpecification
  }
}
    ${WorkFileFragmentDoc}
${WorkSpecificationFragmentDoc}`;
export const GetApplicationsDocument = gql`
    query GetApplications {
  applications(order_by: {created_at: asc_nulls_first}) {
    ...Application
  }
  applications_aggregate {
    aggregate {
      count
    }
  }
}
    ${ApplicationFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetApplicationsGQL extends Apollo.Query<GetApplicationsQuery, GetApplicationsQueryVariables> {
    document = GetApplicationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetApplicationDocument = gql`
    query GetApplication($id: uuid!) {
  applications_by_pk(id: $id) {
    ...Application
  }
}
    ${ApplicationFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetApplicationGQL extends Apollo.Query<GetApplicationQuery, GetApplicationQueryVariables> {
    document = GetApplicationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddApplicationDocument = gql`
    mutation AddApplication($edition_id: Int!) {
  insert_applications_one(
    object: {edition_id: $edition_id, user: {data: {}, on_conflict: {constraint: users_pkey, update_columns: last_seen}}}
  ) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddApplicationGQL extends Apollo.Mutation<AddApplicationMutation, AddApplicationMutationVariables> {
    document = AddApplicationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateApplicationDocument = gql`
    mutation UpdateApplication($id: uuid!, $data: applications_set_input!) {
  update_applications_by_pk(pk_columns: {id: $id}, _set: $data) {
    ...Application
  }
}
    ${ApplicationFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateApplicationGQL extends Apollo.Mutation<UpdateApplicationMutation, UpdateApplicationMutationVariables> {
    document = UpdateApplicationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LockApplicationDocument = gql`
    mutation LockApplication($id: uuid!) {
  update_applications_by_pk(pk_columns: {id: $id}, _set: {locked: true}) {
    id
    locked
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LockApplicationGQL extends Apollo.Mutation<LockApplicationMutation, LockApplicationMutationVariables> {
    document = LockApplicationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UnlockApplicationDocument = gql`
    mutation UnlockApplication($id: uuid!) {
  update_applications_by_pk(pk_columns: {id: $id}, _set: {locked: false}) {
    id
    locked
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UnlockApplicationGQL extends Apollo.Mutation<UnlockApplicationMutation, UnlockApplicationMutationVariables> {
    document = UnlockApplicationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteApplicationDocument = gql`
    mutation DeleteApplication($id: uuid!) {
  delete_applications_by_pk(id: $id) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteApplicationGQL extends Apollo.Mutation<DeleteApplicationMutation, DeleteApplicationMutationVariables> {
    document = DeleteApplicationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddPaymentDocument = gql`
    mutation AddPayment($application_id: uuid!, $id: uuid!, $key: String!, $mimetype: String!, $originalname: String!, $size: numeric!) {
  update_applications_by_pk(
    pk_columns: {id: $application_id}
    _set: {updated_at: "now()"}
  ) {
    id
    updated_at
  }
  insert_payments_one(
    object: {application_id: $application_id, id: $id, key: $key, mimetype: $mimetype, size: $size, originalname: $originalname}
  ) {
    ...Payment
  }
}
    ${PaymentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AddPaymentGQL extends Apollo.Mutation<AddPaymentMutation, AddPaymentMutationVariables> {
    document = AddPaymentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletePaymentDocument = gql`
    mutation DeletePayment($id: uuid!, $application_id: uuid!) {
  update_applications_by_pk(
    pk_columns: {id: $application_id}
    _set: {updated_at: "now()"}
  ) {
    id
    updated_at
  }
  delete_payments_by_pk(id: $id) {
    id
    application_id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePaymentGQL extends Apollo.Mutation<DeletePaymentMutation, DeletePaymentMutationVariables> {
    document = DeletePaymentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetJuryApplicationsDocument = gql`
    subscription GetJuryApplications {
  applications_aggregate(
    where: {edition: {current: {_eq: true}}, _not: {elimination: {}}}
    order_by: {rating_in_latest_round: {avg: desc_nulls_first, count: desc_nulls_first}, ratings_aggregate: {stddev_samp: {value: desc_nulls_first}}}
  ) {
    aggregate {
      count
    }
    nodes {
      ...JuryApplications
      rating_in_latest_round {
        round_id
        avg
        avg_total
        count
      }
      ratings_aggregate {
        aggregate {
          count
          stddev_samp {
            value
          }
          var_samp {
            value
          }
          avg {
            value
          }
        }
      }
    }
  }
}
    ${JuryApplicationsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetJuryApplicationsGQL extends Apollo.Subscription<GetJuryApplicationsSubscription, GetJuryApplicationsSubscriptionVariables> {
    document = GetJuryApplicationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetJuryApplicationDocument = gql`
    query GetJuryApplication($id: uuid!) {
  applications_by_pk(id: $id) {
    ...JuryApplications
  }
}
    ${JuryApplicationsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetJuryApplicationGQL extends Apollo.Query<GetJuryApplicationQuery, GetJuryApplicationQueryVariables> {
    document = GetJuryApplicationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAdminApplicationsByEditionDocument = gql`
    query GetAdminApplicationsByEdition($edition_id: Int = -1) {
  applications(
    where: {edition_id: {_eq: $edition_id}}
    order_by: {created_at: asc_nulls_first, rating_in_latest_round: {avg: desc_nulls_first, count: desc_nulls_first}, ratings_aggregate: {stddev_samp: {value: desc_nulls_first}}, elimination: {created_at: asc_nulls_first}}
  ) {
    ...Application
    ...AdminApplication
    rating_in_latest_round {
      round_id
      avg
      avg_total
      count
    }
    ratings_aggregate {
      aggregate {
        count
        stddev_samp {
          value
        }
        var_samp {
          value
        }
        avg {
          value
        }
      }
    }
  }
  applications_aggregate {
    aggregate {
      count
    }
  }
}
    ${ApplicationFragmentDoc}
${AdminApplicationFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAdminApplicationsByEditionGQL extends Apollo.Query<GetAdminApplicationsByEditionQuery, GetAdminApplicationsByEditionQueryVariables> {
    document = GetAdminApplicationsByEditionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAdminApplicationDocument = gql`
    query GetAdminApplication($id: uuid!) {
  applications_by_pk(id: $id) {
    ...Application
    ...AdminApplication
  }
}
    ${ApplicationFragmentDoc}
${AdminApplicationFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAdminApplicationGQL extends Apollo.Query<GetAdminApplicationQuery, GetAdminApplicationQueryVariables> {
    document = GetAdminApplicationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAdminApplicationLiveDocument = gql`
    query GetAdminApplicationLive($id: uuid!) {
  applications_by_pk(id: $id) {
    rated_by_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAdminApplicationLiveGQL extends Apollo.Query<GetAdminApplicationLiveQuery, GetAdminApplicationLiveQueryVariables> {
    document = GetAdminApplicationLiveDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetRemainingApplicationsDocument = gql`
    query GetRemainingApplications {
  applications_aggregate(
    where: {edition: {current: {_eq: true}}, _not: {elimination: {}}}
    order_by: {rating_in_latest_round: {avg: desc_nulls_first, count: desc_nulls_last}, ratings_aggregate: {stddev_samp: {value: desc_nulls_last}}}
  ) {
    aggregate {
      count
    }
    nodes {
      id
      internal_name
      rating_in_latest_round {
        round_id
        avg
        avg_total
        count
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetRemainingApplicationsGQL extends Apollo.Query<GetRemainingApplicationsQuery, GetRemainingApplicationsQueryVariables> {
    document = GetRemainingApplicationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateNewAliasDocument = gql`
    mutation CreateNewAlias($id: uuid!) {
  update_applications_by_pk(pk_columns: {id: $id}, _set: {internal_name: null}) {
    id
    updated_at
    internal_name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateNewAliasGQL extends Apollo.Mutation<CreateNewAliasMutation, CreateNewAliasMutationVariables> {
    document = CreateNewAliasDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EliminateApplicationDocument = gql`
    mutation EliminateApplication($application_id: uuid!, $reason: String!, $round_id: Int) {
  insert_eliminations_one(
    object: {application_id: $application_id, reason: $reason, round_id: $round_id}
  ) {
    ...Elimination
  }
}
    ${EliminationFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EliminateApplicationGQL extends Apollo.Mutation<EliminateApplicationMutation, EliminateApplicationMutationVariables> {
    document = EliminateApplicationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteEliminationDocument = gql`
    mutation DeleteElimination($application_id: uuid!) {
  delete_eliminations_by_pk(application_id: $application_id) {
    application_id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteEliminationGQL extends Apollo.Mutation<DeleteEliminationMutation, DeleteEliminationMutationVariables> {
    document = DeleteEliminationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchApplicationsDocument = gql`
    query SearchApplications($search: String!, $edition_id: Int = -1) {
  search_applications(
    where: {edition_id: {_eq: $edition_id}, _not: {elimination: {}}}
    args: {search: $search}
  ) {
    id
    internal_name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchApplicationsGQL extends Apollo.Query<SearchApplicationsQuery, SearchApplicationsQueryVariables> {
    document = SearchApplicationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BaseDocument = gql`
    query Base {
  __typename
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BaseGQL extends Apollo.Query<BaseQuery, BaseQueryVariables> {
    document = BaseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateUsernameDocument = gql`
    mutation UpdateUsername($name: String!) {
  insert_users_one(
    object: {name: $name}
    on_conflict: {constraint: users_pkey, update_columns: [last_seen, name]}
  ) {
    id
    last_seen
    name
    type
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateUsernameGQL extends Apollo.Mutation<UpdateUsernameMutation, UpdateUsernameMutationVariables> {
    document = UpdateUsernameDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllMediumsDocument = gql`
    query GetAllMediums {
  category_mediums(order_by: {name_en: asc_nulls_last, name_de: asc_nulls_last}) {
    ...Medium
  }
}
    ${MediumFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllMediumsGQL extends Apollo.Query<GetAllMediumsQuery, GetAllMediumsQueryVariables> {
    document = GetAllMediumsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetMediumsOfSpecificationDocument = gql`
    query GetMediumsOfSpecification($id: uuid!) {
  work_specification_mediums(where: {specification_id: {_eq: $id}}) {
    specification_id
    category_medium {
      ...Medium
    }
  }
}
    ${MediumFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMediumsOfSpecificationGQL extends Apollo.Query<GetMediumsOfSpecificationQuery, GetMediumsOfSpecificationQueryVariables> {
    document = GetMediumsOfSpecificationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateMediumsOfSpecificationDocument = gql`
    mutation UpdateMediumsOfSpecification($medium_id: uuid!, $specification_id: uuid!) {
  insert_work_specification_mediums(
    objects: {specification_id: $specification_id, medium_id: $medium_id}
  ) {
    returning {
      specification_id
      category_medium {
        ...Medium
      }
    }
  }
}
    ${MediumFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateMediumsOfSpecificationGQL extends Apollo.Mutation<UpdateMediumsOfSpecificationMutation, UpdateMediumsOfSpecificationMutationVariables> {
    document = UpdateMediumsOfSpecificationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteMediumOfSpecificationDocument = gql`
    mutation DeleteMediumOfSpecification($medium_id: uuid!, $specification_id: uuid!) {
  delete_work_specification_mediums_by_pk(
    medium_id: $medium_id
    specification_id: $specification_id
  ) {
    medium_id
    specification_id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteMediumOfSpecificationGQL extends Apollo.Mutation<DeleteMediumOfSpecificationMutation, DeleteMediumOfSpecificationMutationVariables> {
    document = DeleteMediumOfSpecificationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SendMessageDocument = gql`
    mutation SendMessage($text: String!, $application_id: uuid!, $round_id: Int) {
  insert_messages_one(
    object: {application_id: $application_id, text: $text, round_id: $round_id}
  ) {
    ...Message
  }
}
    ${MessageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SendMessageGQL extends Apollo.Mutation<SendMessageMutation, SendMessageMutationVariables> {
    document = SendMessageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteMessageDocument = gql`
    mutation DeleteMessage($id: Int!) {
  delete_messages_by_pk(id: $id) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteMessageGQL extends Apollo.Mutation<DeleteMessageMutation, DeleteMessageMutationVariables> {
    document = DeleteMessageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetMessagesDocument = gql`
    query GetMessages($application_id: uuid!, $last_received_id: Int, $last_received_ts: timestamp) {
  messages(
    where: {_and: {application_id: {_eq: $application_id}, id: {_neq: $last_received_id}, created_at: {_gte: $last_received_ts}}}
    order_by: {id: desc}
  ) {
    ...Message
  }
}
    ${MessageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMessagesGQL extends Apollo.Query<GetMessagesQuery, GetMessagesQueryVariables> {
    document = GetMessagesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetMessagesCountLiveDocument = gql`
    subscription GetMessagesCountLive($application_id: uuid!) {
  messages_aggregate(
    where: {application_id: {_eq: $application_id}}
    order_by: {id: desc}
  ) {
    aggregate {
      count
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMessagesCountLiveGQL extends Apollo.Subscription<GetMessagesCountLiveSubscription, GetMessagesCountLiveSubscriptionVariables> {
    document = GetMessagesCountLiveDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetLatestMessageLiveDocument = gql`
    subscription GetLatestMessageLive($application_id: uuid!) {
  messages(
    order_by: {id: desc}
    limit: 1
    where: {application_id: {_eq: $application_id}}
  ) {
    ...Message
  }
}
    ${MessageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetLatestMessageLiveGQL extends Apollo.Subscription<GetLatestMessageLiveSubscription, GetLatestMessageLiveSubscriptionVariables> {
    document = GetLatestMessageLiveDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetEditionDocument = gql`
    query GetEdition {
  editions(where: {current: {_eq: true}}) {
    ...Edition
  }
}
    ${EditionFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEditionGQL extends Apollo.Query<GetEditionQuery, GetEditionQueryVariables> {
    document = GetEditionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EditionStateDocument = gql`
    subscription EditionState {
  editions(where: {current: {_eq: true}}) {
    state
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EditionStateGQL extends Apollo.Subscription<EditionStateSubscription, EditionStateSubscriptionVariables> {
    document = EditionStateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllEditionsDocument = gql`
    query GetAllEditions {
  editions(order_by: {application_start: asc}) {
    ...Edition
  }
}
    ${EditionFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllEditionsGQL extends Apollo.Query<GetAllEditionsQuery, GetAllEditionsQueryVariables> {
    document = GetAllEditionsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetEditionStateAdminDocument = gql`
    subscription GetEditionStateAdmin($id: Int!) {
  editions_by_pk(id: $id) {
    state
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEditionStateAdminGQL extends Apollo.Subscription<GetEditionStateAdminSubscription, GetEditionStateAdminSubscriptionVariables> {
    document = GetEditionStateAdminDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetEditionStatisticDocument = gql`
    query GetEditionStatistic($id: Int!) {
  applications_total: applications_aggregate(where: {edition: {id: {_eq: $id}}}) {
    aggregate {
      count
    }
    nodes {
      state
    }
  }
  applications_untouched: applications_aggregate(
    where: {_and: {edition: {id: {_eq: $id}}, _and: [{disclaimer: {_eq: false}}, {statement: {_eq: ""}}, {_not: {files: {}}}, {_not: {works: {}}}, {_not: {specifications: {}}}, {_not: {payment: {}}}]}}
  ) {
    aggregate {
      count
    }
    nodes {
      state
    }
  }
  applications_edited: applications_aggregate(
    where: {_and: {edition: {id: {_eq: $id}}, _or: [{disclaimer: {_eq: true}}, {statement: {_neq: ""}}, {files: {}}, {works: {}}, {specifications: {}}, {payment: {}}], _not: {_and: [{disclaimer: {_eq: true}}, {statement: {_neq: ""}}, {files: {}}, {works: {}}, {specifications: {}}, {payment: {}}]}}}
  ) {
    aggregate {
      count
    }
    nodes {
      state
    }
  }
  applications_ready: applications_aggregate(
    where: {_and: {edition: {id: {_eq: $id}}, _and: [{disclaimer: {_eq: true}}, {statement: {_neq: ""}}, {files: {}}, {works: {}}, {specifications: {}}, {payment: {}}]}}
  ) {
    aggregate {
      count
    }
    nodes {
      state
    }
  }
  payments_aggregate(where: {application: {edition: {id: {_eq: $id}}}}) {
    aggregate {
      count
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEditionStatisticGQL extends Apollo.Query<GetEditionStatisticQuery, GetEditionStatisticQueryVariables> {
    document = GetEditionStatisticDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateEditionDocument = gql`
    mutation CreateEdition($name: String!) {
  insert_editions_one(object: {name: $name}) {
    ...Edition
  }
}
    ${EditionFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateEditionGQL extends Apollo.Mutation<CreateEditionMutation, CreateEditionMutationVariables> {
    document = CreateEditionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RenameEditionDocument = gql`
    mutation RenameEdition($id: Int!, $name: String!) {
  update_editions_by_pk(pk_columns: {id: $id}, _set: {name: $name}) {
    ...Edition
  }
}
    ${EditionFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class RenameEditionGQL extends Apollo.Mutation<RenameEditionMutation, RenameEditionMutationVariables> {
    document = RenameEditionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SetEditionStatusDocument = gql`
    mutation SetEditionStatus($id: Int!, $status: Boolean!) {
  update_editions(_set: {current: null}, where: {current: {_is_null: false}}) {
    affected_rows
  }
  update_editions_by_pk(pk_columns: {id: $id}, _set: {current: $status}) {
    ...Edition
  }
}
    ${EditionFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SetEditionStatusGQL extends Apollo.Mutation<SetEditionStatusMutation, SetEditionStatusMutationVariables> {
    document = SetEditionStatusDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateEditionDocument = gql`
    mutation UpdateEdition($id: Int!, $application_end: timestamptz!, $application_start: timestamptz!, $name: String!) {
  update_editions_by_pk(
    pk_columns: {id: $id}
    _set: {application_end: $application_end, application_start: $application_start, name: $name}
  ) {
    ...Edition
  }
}
    ${EditionFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateEditionGQL extends Apollo.Mutation<UpdateEditionMutation, UpdateEditionMutationVariables> {
    document = UpdateEditionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SetEditionWinnerDocument = gql`
    mutation SetEditionWinner($application_id: uuid) {
  update_editions(
    where: {current: {_eq: true}}
    _set: {winner_id: $application_id}
  ) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SetEditionWinnerGQL extends Apollo.Mutation<SetEditionWinnerMutation, SetEditionWinnerMutationVariables> {
    document = SetEditionWinnerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddRatingDocument = gql`
    mutation AddRating($application_id: uuid!, $round_id: Int!, $value: Int!, $reason: String!) {
  insert_ratings_one(
    object: {application_id: $application_id, round_id: $round_id, value: $value, message: {data: {text: $reason, application_id: $application_id, round_id: $round_id}}}
  ) {
    id
    application {
      rated_by_user
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddRatingGQL extends Apollo.Mutation<AddRatingMutation, AddRatingMutationVariables> {
    document = AddRatingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetJuryStatisticDocument = gql`
    subscription GetJuryStatistic($round_id: Int!, $_in: [String!]!) {
  users(where: {id: {_in: $_in}}) {
    name
    ratings_aggregate(where: {round_id: {_eq: $round_id}}) {
      aggregate {
        count
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetJuryStatisticGQL extends Apollo.Subscription<GetJuryStatisticSubscription, GetJuryStatisticSubscriptionVariables> {
    document = GetJuryStatisticDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllRoundsDocument = gql`
    query GetAllRounds {
  rating_rounds_sorted(where: {_and: {edition: {current: {_eq: true}}}}) {
    ...RoundSorted
  }
  rating_rounds(where: {_and: {edition: {current: {_eq: true}}}}) {
    ...Round
  }
}
    ${RoundSortedFragmentDoc}
${RoundFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllRoundsGQL extends Apollo.Query<GetAllRoundsQuery, GetAllRoundsQueryVariables> {
    document = GetAllRoundsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateRoundDocument = gql`
    mutation CreateRound($edition_id: Int!, $end_at: timestamptz!, $goal: Int = 1, $prev_round_id: Int = null) {
  insert_rating_rounds_one(
    object: {edition_id: $edition_id, end_at: $end_at, goal: $goal, prev_round_id: $prev_round_id}
  ) {
    ...Round
  }
}
    ${RoundFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateRoundGQL extends Apollo.Mutation<CreateRoundMutation, CreateRoundMutationVariables> {
    document = CreateRoundDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateRoundDocument = gql`
    mutation UpdateRound($round_id: Int!, $end_at: timestamptz!, $goal: Int = 1) {
  update_rating_rounds_by_pk(
    pk_columns: {id: $round_id}
    _set: {end_at: $end_at, goal: $goal}
  ) {
    ...Round
  }
}
    ${RoundFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateRoundGQL extends Apollo.Mutation<UpdateRoundMutation, UpdateRoundMutationVariables> {
    document = UpdateRoundDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CloseRoundDocument = gql`
    mutation CloseRound($round_id: Int!, $objects: [eliminations_insert_input!]!) {
  insert_eliminations(objects: $objects) {
    returning {
      ...Elimination
    }
    affected_rows
  }
  update_rating_rounds_by_pk(pk_columns: {id: $round_id}, _set: {closed: true}) {
    id
    closed
  }
}
    ${EliminationFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CloseRoundGQL extends Apollo.Mutation<CloseRoundMutation, CloseRoundMutationVariables> {
    document = CloseRoundDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetCurrentRoundDocument = gql`
    subscription GetCurrentRound {
  rating_rounds(
    where: {_and: {edition: {current: {_eq: true}}, _not: {next_round: {}}}}
  ) {
    ...Round
  }
}
    ${RoundFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCurrentRoundGQL extends Apollo.Subscription<GetCurrentRoundSubscription, GetCurrentRoundSubscriptionVariables> {
    document = GetCurrentRoundDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetApplicationsToEliminateDocument = gql`
    query GetApplicationsToEliminate($round_id: Int!) {
  applications(
    where: {ratings: {rating_round: {id: {_eq: $round_id}}}, rating_in_latest_round: {round_id: {_eq: $round_id}, avg: {_lt: 5}}, _not: {elimination: {}}}
  ) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetApplicationsToEliminateGQL extends Apollo.Query<GetApplicationsToEliminateQuery, GetApplicationsToEliminateQueryVariables> {
    document = GetApplicationsToEliminateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetRoundStatisticDocument = gql`
    query GetRoundStatistic($id: Int!) {
  rating_rounds_by_pk(id: $id) {
    ...Round
  }
  out: applications_aggregate(
    where: {ratings: {rating_round: {id: {_eq: $id}}}, rating_in_latest_round: {round_id: {_eq: $id}, avg: {_lt: 5}}, _not: {elimination: {}}}
  ) {
    aggregate {
      count
    }
  }
  in: applications_aggregate(
    where: {ratings: {rating_round: {id: {_eq: $id}}}, rating_in_latest_round: {round_id: {_eq: $id}, avg: {_gte: 5}}, _not: {elimination: {}}}
  ) {
    aggregate {
      count
    }
  }
  rated: applications_aggregate(
    where: {ratings: {rating_round: {id: {_eq: $id}}}}
  ) {
    aggregate {
      count
    }
  }
  total: applications_aggregate(where: {_not: {elimination: {}}}) {
    aggregate {
      count
    }
  }
}
    ${RoundFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetRoundStatisticGQL extends Apollo.Query<GetRoundStatisticQuery, GetRoundStatisticQueryVariables> {
    document = GetRoundStatisticDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUpdatesDocument = gql`
    subscription GetUpdates {
  updates(order_by: {created_at: desc}) {
    ...Update
  }
}
    ${UpdateFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUpdatesGQL extends Apollo.Subscription<GetUpdatesSubscription, GetUpdatesSubscriptionVariables> {
    document = GetUpdatesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddUpdateDocument = gql`
    mutation AddUpdate($object: updates_insert_input = {text_de: "", text_en: "", url: ""}) {
  insert_updates_one(object: $object) {
    ...Update
  }
}
    ${UpdateFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AddUpdateGQL extends Apollo.Mutation<AddUpdateMutation, AddUpdateMutationVariables> {
    document = AddUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EditUpdateDocument = gql`
    mutation EditUpdate($id: Int!, $_set: updates_set_input = {}) {
  update_updates_by_pk(pk_columns: {id: $id}, _set: $_set) {
    ...Update
  }
}
    ${UpdateFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EditUpdateGQL extends Apollo.Mutation<EditUpdateMutation, EditUpdateMutationVariables> {
    document = EditUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddWorkDocument = gql`
    mutation AddWork($application_id: uuid!, $portfolio: Boolean) {
  insert_works_one(
    object: {application_id: $application_id, portfolio: $portfolio, specifications: {data: {application_id: $application_id, order: 0}}}
  ) {
    ...Work
  }
}
    ${WorkFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AddWorkGQL extends Apollo.Mutation<AddWorkMutation, AddWorkMutationVariables> {
    document = AddWorkDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteWorkDocument = gql`
    mutation DeleteWork($id: uuid!) {
  delete_works_by_pk(id: $id) {
    id
    portfolio
    application_id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteWorkGQL extends Apollo.Mutation<DeleteWorkMutation, DeleteWorkMutationVariables> {
    document = DeleteWorkDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddPortfolioSpecificationDocument = gql`
    mutation AddPortfolioSpecification($application_id: uuid!, $work_id: uuid!, $order: Int!) {
  insert_work_specifications_one(
    object: {application_id: $application_id, work_id: $work_id, order: $order}
  ) {
    ...WorkSpecification
  }
}
    ${WorkSpecificationFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AddPortfolioSpecificationGQL extends Apollo.Mutation<AddPortfolioSpecificationMutation, AddPortfolioSpecificationMutationVariables> {
    document = AddPortfolioSpecificationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletePortfolioSpecificationDocument = gql`
    mutation DeletePortfolioSpecification($id: uuid!) {
  delete_work_specifications_by_pk(id: $id) {
    id
    work_id
    application_id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePortfolioSpecificationGQL extends Apollo.Mutation<DeletePortfolioSpecificationMutation, DeletePortfolioSpecificationMutationVariables> {
    document = DeletePortfolioSpecificationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddWorkFileDocument = gql`
    mutation AddWorkFile($id: uuid!, $application_id: uuid!, $work_id: uuid!, $order: Int!, $key: String!, $mimetype: String!, $originalname: String!, $size: numeric!, $password: String = "") {
  update_applications_by_pk(
    pk_columns: {id: $application_id}
    _set: {updated_at: "now()"}
  ) {
    id
    updated_at
  }
  insert_work_files_one(
    object: {id: $id, application_id: $application_id, key: $key, mimetype: $mimetype, order: $order, originalname: $originalname, size: $size, work_id: $work_id, password: $password}
  ) {
    ...WorkFile
  }
}
    ${WorkFileFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AddWorkFileGQL extends Apollo.Mutation<AddWorkFileMutation, AddWorkFileMutationVariables> {
    document = AddWorkFileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteWorkFileDocument = gql`
    mutation DeleteWorkFile($id: uuid!, $application_id: uuid!) {
  update_applications_by_pk(
    pk_columns: {id: $application_id}
    _set: {updated_at: "now()"}
  ) {
    id
    updated_at
  }
  delete_work_files_by_pk(id: $id) {
    id
    work_id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteWorkFileGQL extends Apollo.Mutation<DeleteWorkFileMutation, DeleteWorkFileMutationVariables> {
    document = DeleteWorkFileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetWorksDocument = gql`
    query GetWorks($application_id: uuid!) {
  works(
    where: {application_id: {_eq: $application_id}, files: {}}
    order_by: {portfolio: asc_nulls_last, order: asc_nulls_last}
  ) {
    ...Work
  }
}
    ${WorkFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetWorksGQL extends Apollo.Query<GetWorksQuery, GetWorksQueryVariables> {
    document = GetWorksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetSingleWorksDocument = gql`
    query GetSingleWorks($application_id: uuid!) {
  works(
    where: {application_id: {_eq: $application_id}, portfolio: {_is_null: true}}
    order_by: {order: asc_nulls_last}
  ) {
    ...Work
  }
}
    ${WorkFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSingleWorksGQL extends Apollo.Query<GetSingleWorksQuery, GetSingleWorksQueryVariables> {
    document = GetSingleWorksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetPortfolioWorksDocument = gql`
    query GetPortfolioWorks($application_id: uuid!) {
  works(
    where: {application_id: {_eq: $application_id}, portfolio: {_eq: true}}
    order_by: {order: asc_nulls_last}
  ) {
    ...Work
  }
}
    ${WorkFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPortfolioWorksGQL extends Apollo.Query<GetPortfolioWorksQuery, GetPortfolioWorksQueryVariables> {
    document = GetPortfolioWorksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateSpecificationDocument = gql`
    mutation UpdateSpecification($id: uuid!, $set: work_specifications_set_input!, $application_id: uuid!) {
  update_applications_by_pk(
    pk_columns: {id: $application_id}
    _set: {updated_at: "now()"}
  ) {
    id
    updated_at
  }
  update_work_specifications_by_pk(pk_columns: {id: $id}, _set: $set) {
    ...WorkSpecification
  }
}
    ${WorkSpecificationFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateSpecificationGQL extends Apollo.Mutation<UpdateSpecificationMutation, UpdateSpecificationMutationVariables> {
    document = UpdateSpecificationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateWorksOrderDocument = gql`
    mutation UpdateWorksOrder($objects: [works_insert_input!]!) {
  insert_works(
    objects: $objects
    on_conflict: {constraint: works_pkey, update_columns: [order]}
  ) {
    returning {
      id
      order
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateWorksOrderGQL extends Apollo.Mutation<UpdateWorksOrderMutation, UpdateWorksOrderMutationVariables> {
    document = UpdateWorksOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateSpecificationsOrderDocument = gql`
    mutation UpdateSpecificationsOrder($objects: [work_specifications_insert_input!]!) {
  insert_work_specifications(
    objects: $objects
    on_conflict: {constraint: works_specifications_pkey, update_columns: [order]}
  ) {
    returning {
      id
      order
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateSpecificationsOrderGQL extends Apollo.Mutation<UpdateSpecificationsOrderMutation, UpdateSpecificationsOrderMutationVariables> {
    document = UpdateSpecificationsOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateWorkFilesOrderDocument = gql`
    mutation UpdateWorkFilesOrder($objects: [work_files_insert_input!]!) {
  insert_work_files(
    objects: $objects
    on_conflict: {constraint: work_files_pkey, update_columns: [order]}
  ) {
    returning {
      id
      order
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateWorkFilesOrderGQL extends Apollo.Mutation<UpdateWorkFilesOrderMutation, UpdateWorkFilesOrderMutationVariables> {
    document = UpdateWorkFilesOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    