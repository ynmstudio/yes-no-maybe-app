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
  date: any;
  numeric: any;
  timestamptz: any;
  uuid: any;
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
  /** An array relationship */
  files: Array<Works_Files>;
  /** An aggregated array relationship */
  files_aggregate: Works_Files_Aggregate;
  group: Scalars['Boolean'];
  id: Scalars['uuid'];
  internal_name?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  payment_file?: Maybe<Scalars['String']>;
  /** An array relationship */
  ratings: Array<Ratings>;
  /** An aggregated array relationship */
  ratings_aggregate: Ratings_Aggregate;
  residency: Scalars['Boolean'];
  /** An array relationship */
  specifications: Array<Works_Specifications>;
  /** An aggregated array relationship */
  specifications_aggregate: Works_Specifications_Aggregate;
  statement?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  /** An array relationship */
  works: Array<Works>;
  /** An aggregated array relationship */
  works_aggregate: Works_Aggregate;
};


/** columns and relationships of "applications" */
export type ApplicationsFilesArgs = {
  distinct_on?: Maybe<Array<Works_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Files_Order_By>>;
  where?: Maybe<Works_Files_Bool_Exp>;
};


/** columns and relationships of "applications" */
export type ApplicationsFiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Works_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Files_Order_By>>;
  where?: Maybe<Works_Files_Bool_Exp>;
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
  distinct_on?: Maybe<Array<Works_Specifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Specifications_Order_By>>;
  where?: Maybe<Works_Specifications_Bool_Exp>;
};


/** columns and relationships of "applications" */
export type ApplicationsSpecifications_AggregateArgs = {
  distinct_on?: Maybe<Array<Works_Specifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Specifications_Order_By>>;
  where?: Maybe<Works_Specifications_Bool_Exp>;
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
  count?: Maybe<Scalars['Int']>;
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
  _and?: Maybe<Array<Maybe<Applications_Bool_Exp>>>;
  _not?: Maybe<Applications_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Applications_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by?: Maybe<String_Comparison_Exp>;
  database?: Maybe<Boolean_Comparison_Exp>;
  disclaimer?: Maybe<Boolean_Comparison_Exp>;
  edition?: Maybe<Editions_Bool_Exp>;
  edition_id?: Maybe<Int_Comparison_Exp>;
  files?: Maybe<Works_Files_Bool_Exp>;
  group?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  internal_name?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  payment_file?: Maybe<String_Comparison_Exp>;
  ratings?: Maybe<Ratings_Bool_Exp>;
  residency?: Maybe<Boolean_Comparison_Exp>;
  specifications?: Maybe<Works_Specifications_Bool_Exp>;
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

/** input type for incrementing integer column in table "applications" */
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
  files?: Maybe<Works_Files_Arr_Rel_Insert_Input>;
  group?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  internal_name?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  payment_file?: Maybe<Scalars['String']>;
  ratings?: Maybe<Ratings_Arr_Rel_Insert_Input>;
  residency?: Maybe<Scalars['Boolean']>;
  specifications?: Maybe<Works_Specifications_Arr_Rel_Insert_Input>;
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
  payment_file?: Maybe<Scalars['String']>;
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
  payment_file?: Maybe<Order_By>;
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
  payment_file?: Maybe<Scalars['String']>;
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
  payment_file?: Maybe<Order_By>;
  statement?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "applications" */
export type Applications_Mutation_Response = {
  __typename?: 'applications_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Applications>;
};

/** input type for inserting object relation for remote table "applications" */
export type Applications_Obj_Rel_Insert_Input = {
  data: Applications_Insert_Input;
  on_conflict?: Maybe<Applications_On_Conflict>;
};

/** on conflict condition type for table "applications" */
export type Applications_On_Conflict = {
  constraint: Applications_Constraint;
  update_columns: Array<Applications_Update_Column>;
  where?: Maybe<Applications_Bool_Exp>;
};

/** ordering options when selecting data from "applications" */
export type Applications_Order_By = {
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  database?: Maybe<Order_By>;
  disclaimer?: Maybe<Order_By>;
  edition?: Maybe<Editions_Order_By>;
  edition_id?: Maybe<Order_By>;
  files_aggregate?: Maybe<Works_Files_Aggregate_Order_By>;
  group?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  internal_name?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  payment_file?: Maybe<Order_By>;
  ratings_aggregate?: Maybe<Ratings_Aggregate_Order_By>;
  residency?: Maybe<Order_By>;
  specifications_aggregate?: Maybe<Works_Specifications_Aggregate_Order_By>;
  statement?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  works_aggregate?: Maybe<Works_Aggregate_Order_By>;
};

/** primary key columns input for table: "applications" */
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
  Name = 'name',
  /** column name */
  PaymentFile = 'payment_file',
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
  name?: Maybe<Scalars['String']>;
  payment_file?: Maybe<Scalars['String']>;
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
  Name = 'name',
  /** column name */
  PaymentFile = 'payment_file',
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

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
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


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "editions" */
export type Editions = {
  __typename?: 'editions';
  application_end: Scalars['timestamptz'];
  application_start: Scalars['timestamptz'];
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregated array relationship */
  applications_aggregate: Applications_Aggregate;
  created_at: Scalars['timestamptz'];
  current?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  rating_rounds: Array<Rating_Rounds>;
  /** An aggregated array relationship */
  rating_rounds_aggregate: Rating_Rounds_Aggregate;
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
  count?: Maybe<Scalars['Int']>;
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

/** order by aggregate values of table "editions" */
export type Editions_Aggregate_Order_By = {
  avg?: Maybe<Editions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Editions_Max_Order_By>;
  min?: Maybe<Editions_Min_Order_By>;
  stddev?: Maybe<Editions_Stddev_Order_By>;
  stddev_pop?: Maybe<Editions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Editions_Stddev_Samp_Order_By>;
  sum?: Maybe<Editions_Sum_Order_By>;
  var_pop?: Maybe<Editions_Var_Pop_Order_By>;
  var_samp?: Maybe<Editions_Var_Samp_Order_By>;
  variance?: Maybe<Editions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "editions" */
export type Editions_Arr_Rel_Insert_Input = {
  data: Array<Editions_Insert_Input>;
  on_conflict?: Maybe<Editions_On_Conflict>;
};

/** aggregate avg on columns */
export type Editions_Avg_Fields = {
  __typename?: 'editions_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "editions" */
export type Editions_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "editions". All fields are combined with a logical 'AND'. */
export type Editions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Editions_Bool_Exp>>>;
  _not?: Maybe<Editions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Editions_Bool_Exp>>>;
  application_end?: Maybe<Timestamptz_Comparison_Exp>;
  application_start?: Maybe<Timestamptz_Comparison_Exp>;
  applications?: Maybe<Applications_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  current?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  rating_rounds?: Maybe<Rating_Rounds_Bool_Exp>;
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

/** input type for incrementing integer column in table "editions" */
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
};

/** aggregate max on columns */
export type Editions_Max_Fields = {
  __typename?: 'editions_max_fields';
  application_end?: Maybe<Scalars['timestamptz']>;
  application_start?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "editions" */
export type Editions_Max_Order_By = {
  application_end?: Maybe<Order_By>;
  application_start?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Editions_Min_Fields = {
  __typename?: 'editions_min_fields';
  application_end?: Maybe<Scalars['timestamptz']>;
  application_start?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "editions" */
export type Editions_Min_Order_By = {
  application_end?: Maybe<Order_By>;
  application_start?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "editions" */
export type Editions_Mutation_Response = {
  __typename?: 'editions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Editions>;
};

/** input type for inserting object relation for remote table "editions" */
export type Editions_Obj_Rel_Insert_Input = {
  data: Editions_Insert_Input;
  on_conflict?: Maybe<Editions_On_Conflict>;
};

/** on conflict condition type for table "editions" */
export type Editions_On_Conflict = {
  constraint: Editions_Constraint;
  update_columns: Array<Editions_Update_Column>;
  where?: Maybe<Editions_Bool_Exp>;
};

/** ordering options when selecting data from "editions" */
export type Editions_Order_By = {
  application_end?: Maybe<Order_By>;
  application_start?: Maybe<Order_By>;
  applications_aggregate?: Maybe<Applications_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  current?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  rating_rounds_aggregate?: Maybe<Rating_Rounds_Aggregate_Order_By>;
};

/** primary key columns input for table: "editions" */
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
  Name = 'name'
}

/** input type for updating data in table "editions" */
export type Editions_Set_Input = {
  application_end?: Maybe<Scalars['timestamptz']>;
  application_start?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  current?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Editions_Stddev_Fields = {
  __typename?: 'editions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "editions" */
export type Editions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Editions_Stddev_Pop_Fields = {
  __typename?: 'editions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "editions" */
export type Editions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Editions_Stddev_Samp_Fields = {
  __typename?: 'editions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "editions" */
export type Editions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Editions_Sum_Fields = {
  __typename?: 'editions_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "editions" */
export type Editions_Sum_Order_By = {
  id?: Maybe<Order_By>;
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
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Editions_Var_Pop_Fields = {
  __typename?: 'editions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "editions" */
export type Editions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Editions_Var_Samp_Fields = {
  __typename?: 'editions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "editions" */
export type Editions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Editions_Variance_Fields = {
  __typename?: 'editions_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "editions" */
export type Editions_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
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

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "applications" */
  delete_applications?: Maybe<Applications_Mutation_Response>;
  /** delete single row from the table: "applications" */
  delete_applications_by_pk?: Maybe<Applications>;
  /** delete data from the table: "editions" */
  delete_editions?: Maybe<Editions_Mutation_Response>;
  /** delete single row from the table: "editions" */
  delete_editions_by_pk?: Maybe<Editions>;
  /** delete data from the table: "rating_rounds" */
  delete_rating_rounds?: Maybe<Rating_Rounds_Mutation_Response>;
  /** delete single row from the table: "rating_rounds" */
  delete_rating_rounds_by_pk?: Maybe<Rating_Rounds>;
  /** delete data from the table: "ratings" */
  delete_ratings?: Maybe<Ratings_Mutation_Response>;
  /** delete single row from the table: "ratings" */
  delete_ratings_by_pk?: Maybe<Ratings>;
  /** delete data from the table: "types_medium" */
  delete_types_medium?: Maybe<Types_Medium_Mutation_Response>;
  /** delete single row from the table: "types_medium" */
  delete_types_medium_by_pk?: Maybe<Types_Medium>;
  /** delete data from the table: "types_tags" */
  delete_types_tags?: Maybe<Types_Tags_Mutation_Response>;
  /** delete single row from the table: "types_tags" */
  delete_types_tags_by_pk?: Maybe<Types_Tags>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "wordlist" */
  delete_wordlist?: Maybe<Wordlist_Mutation_Response>;
  /** delete single row from the table: "wordlist" */
  delete_wordlist_by_pk?: Maybe<Wordlist>;
  /** delete data from the table: "works" */
  delete_works?: Maybe<Works_Mutation_Response>;
  /** delete single row from the table: "works" */
  delete_works_by_pk?: Maybe<Works>;
  /** delete data from the table: "works_files" */
  delete_works_files?: Maybe<Works_Files_Mutation_Response>;
  /** delete single row from the table: "works_files" */
  delete_works_files_by_pk?: Maybe<Works_Files>;
  /** delete data from the table: "works_specifications" */
  delete_works_specifications?: Maybe<Works_Specifications_Mutation_Response>;
  /** delete single row from the table: "works_specifications" */
  delete_works_specifications_by_pk?: Maybe<Works_Specifications>;
  /** insert data into the table: "applications" */
  insert_applications?: Maybe<Applications_Mutation_Response>;
  /** insert a single row into the table: "applications" */
  insert_applications_one?: Maybe<Applications>;
  /** insert data into the table: "editions" */
  insert_editions?: Maybe<Editions_Mutation_Response>;
  /** insert a single row into the table: "editions" */
  insert_editions_one?: Maybe<Editions>;
  /** insert data into the table: "rating_rounds" */
  insert_rating_rounds?: Maybe<Rating_Rounds_Mutation_Response>;
  /** insert a single row into the table: "rating_rounds" */
  insert_rating_rounds_one?: Maybe<Rating_Rounds>;
  /** insert data into the table: "ratings" */
  insert_ratings?: Maybe<Ratings_Mutation_Response>;
  /** insert a single row into the table: "ratings" */
  insert_ratings_one?: Maybe<Ratings>;
  /** insert data into the table: "types_medium" */
  insert_types_medium?: Maybe<Types_Medium_Mutation_Response>;
  /** insert a single row into the table: "types_medium" */
  insert_types_medium_one?: Maybe<Types_Medium>;
  /** insert data into the table: "types_tags" */
  insert_types_tags?: Maybe<Types_Tags_Mutation_Response>;
  /** insert a single row into the table: "types_tags" */
  insert_types_tags_one?: Maybe<Types_Tags>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "wordlist" */
  insert_wordlist?: Maybe<Wordlist_Mutation_Response>;
  /** insert a single row into the table: "wordlist" */
  insert_wordlist_one?: Maybe<Wordlist>;
  /** insert data into the table: "works" */
  insert_works?: Maybe<Works_Mutation_Response>;
  /** insert data into the table: "works_files" */
  insert_works_files?: Maybe<Works_Files_Mutation_Response>;
  /** insert a single row into the table: "works_files" */
  insert_works_files_one?: Maybe<Works_Files>;
  /** insert a single row into the table: "works" */
  insert_works_one?: Maybe<Works>;
  /** insert data into the table: "works_specifications" */
  insert_works_specifications?: Maybe<Works_Specifications_Mutation_Response>;
  /** insert a single row into the table: "works_specifications" */
  insert_works_specifications_one?: Maybe<Works_Specifications>;
  /** update data of the table: "applications" */
  update_applications?: Maybe<Applications_Mutation_Response>;
  /** update single row of the table: "applications" */
  update_applications_by_pk?: Maybe<Applications>;
  /** update data of the table: "editions" */
  update_editions?: Maybe<Editions_Mutation_Response>;
  /** update single row of the table: "editions" */
  update_editions_by_pk?: Maybe<Editions>;
  /** update data of the table: "rating_rounds" */
  update_rating_rounds?: Maybe<Rating_Rounds_Mutation_Response>;
  /** update single row of the table: "rating_rounds" */
  update_rating_rounds_by_pk?: Maybe<Rating_Rounds>;
  /** update data of the table: "ratings" */
  update_ratings?: Maybe<Ratings_Mutation_Response>;
  /** update single row of the table: "ratings" */
  update_ratings_by_pk?: Maybe<Ratings>;
  /** update data of the table: "types_medium" */
  update_types_medium?: Maybe<Types_Medium_Mutation_Response>;
  /** update single row of the table: "types_medium" */
  update_types_medium_by_pk?: Maybe<Types_Medium>;
  /** update data of the table: "types_tags" */
  update_types_tags?: Maybe<Types_Tags_Mutation_Response>;
  /** update single row of the table: "types_tags" */
  update_types_tags_by_pk?: Maybe<Types_Tags>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "wordlist" */
  update_wordlist?: Maybe<Wordlist_Mutation_Response>;
  /** update single row of the table: "wordlist" */
  update_wordlist_by_pk?: Maybe<Wordlist>;
  /** update data of the table: "works" */
  update_works?: Maybe<Works_Mutation_Response>;
  /** update single row of the table: "works" */
  update_works_by_pk?: Maybe<Works>;
  /** update data of the table: "works_files" */
  update_works_files?: Maybe<Works_Files_Mutation_Response>;
  /** update single row of the table: "works_files" */
  update_works_files_by_pk?: Maybe<Works_Files>;
  /** update data of the table: "works_specifications" */
  update_works_specifications?: Maybe<Works_Specifications_Mutation_Response>;
  /** update single row of the table: "works_specifications" */
  update_works_specifications_by_pk?: Maybe<Works_Specifications>;
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
export type Mutation_RootDelete_EditionsArgs = {
  where: Editions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Editions_By_PkArgs = {
  id: Scalars['Int'];
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
export type Mutation_RootDelete_Types_MediumArgs = {
  where: Types_Medium_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Types_Medium_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Types_TagsArgs = {
  where: Types_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Types_Tags_By_PkArgs = {
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
export type Mutation_RootDelete_WordlistArgs = {
  where: Wordlist_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Wordlist_By_PkArgs = {
  id: Scalars['Int'];
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
export type Mutation_RootDelete_Works_FilesArgs = {
  where: Works_Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Works_Files_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Works_SpecificationsArgs = {
  where: Works_Specifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Works_Specifications_By_PkArgs = {
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
export type Mutation_RootInsert_Types_MediumArgs = {
  objects: Array<Types_Medium_Insert_Input>;
  on_conflict?: Maybe<Types_Medium_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Types_Medium_OneArgs = {
  object: Types_Medium_Insert_Input;
  on_conflict?: Maybe<Types_Medium_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Types_TagsArgs = {
  objects: Array<Types_Tags_Insert_Input>;
  on_conflict?: Maybe<Types_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Types_Tags_OneArgs = {
  object: Types_Tags_Insert_Input;
  on_conflict?: Maybe<Types_Tags_On_Conflict>;
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
export type Mutation_RootInsert_WorksArgs = {
  objects: Array<Works_Insert_Input>;
  on_conflict?: Maybe<Works_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Works_FilesArgs = {
  objects: Array<Works_Files_Insert_Input>;
  on_conflict?: Maybe<Works_Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Works_Files_OneArgs = {
  object: Works_Files_Insert_Input;
  on_conflict?: Maybe<Works_Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Works_OneArgs = {
  object: Works_Insert_Input;
  on_conflict?: Maybe<Works_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Works_SpecificationsArgs = {
  objects: Array<Works_Specifications_Insert_Input>;
  on_conflict?: Maybe<Works_Specifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Works_Specifications_OneArgs = {
  object: Works_Specifications_Insert_Input;
  on_conflict?: Maybe<Works_Specifications_On_Conflict>;
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
export type Mutation_RootUpdate_Types_MediumArgs = {
  _inc?: Maybe<Types_Medium_Inc_Input>;
  _set?: Maybe<Types_Medium_Set_Input>;
  where: Types_Medium_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Types_Medium_By_PkArgs = {
  _inc?: Maybe<Types_Medium_Inc_Input>;
  _set?: Maybe<Types_Medium_Set_Input>;
  pk_columns: Types_Medium_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Types_TagsArgs = {
  _inc?: Maybe<Types_Tags_Inc_Input>;
  _set?: Maybe<Types_Tags_Set_Input>;
  where: Types_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Types_Tags_By_PkArgs = {
  _inc?: Maybe<Types_Tags_Inc_Input>;
  _set?: Maybe<Types_Tags_Set_Input>;
  pk_columns: Types_Tags_Pk_Columns_Input;
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


/** mutation root */
export type Mutation_RootUpdate_Works_FilesArgs = {
  _inc?: Maybe<Works_Files_Inc_Input>;
  _set?: Maybe<Works_Files_Set_Input>;
  where: Works_Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Works_Files_By_PkArgs = {
  _inc?: Maybe<Works_Files_Inc_Input>;
  _set?: Maybe<Works_Files_Set_Input>;
  pk_columns: Works_Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Works_SpecificationsArgs = {
  _inc?: Maybe<Works_Specifications_Inc_Input>;
  _set?: Maybe<Works_Specifications_Set_Input>;
  where: Works_Specifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Works_Specifications_By_PkArgs = {
  _inc?: Maybe<Works_Specifications_Inc_Input>;
  _set?: Maybe<Works_Specifications_Set_Input>;
  pk_columns: Works_Specifications_Pk_Columns_Input;
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
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
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "applications" */
  applications: Array<Applications>;
  /** fetch aggregated fields from the table: "applications" */
  applications_aggregate: Applications_Aggregate;
  /** fetch data from the table: "applications" using primary key columns */
  applications_by_pk?: Maybe<Applications>;
  /** fetch data from the table: "editions" */
  editions: Array<Editions>;
  /** fetch aggregated fields from the table: "editions" */
  editions_aggregate: Editions_Aggregate;
  /** fetch data from the table: "editions" using primary key columns */
  editions_by_pk?: Maybe<Editions>;
  /** fetch data from the table: "rating_rounds" */
  rating_rounds: Array<Rating_Rounds>;
  /** fetch aggregated fields from the table: "rating_rounds" */
  rating_rounds_aggregate: Rating_Rounds_Aggregate;
  /** fetch data from the table: "rating_rounds" using primary key columns */
  rating_rounds_by_pk?: Maybe<Rating_Rounds>;
  /** fetch data from the table: "ratings" */
  ratings: Array<Ratings>;
  /** fetch aggregated fields from the table: "ratings" */
  ratings_aggregate: Ratings_Aggregate;
  /** fetch data from the table: "ratings" using primary key columns */
  ratings_by_pk?: Maybe<Ratings>;
  /** fetch data from the table: "types_medium" */
  types_medium: Array<Types_Medium>;
  /** fetch aggregated fields from the table: "types_medium" */
  types_medium_aggregate: Types_Medium_Aggregate;
  /** fetch data from the table: "types_medium" using primary key columns */
  types_medium_by_pk?: Maybe<Types_Medium>;
  /** fetch data from the table: "types_tags" */
  types_tags: Array<Types_Tags>;
  /** fetch aggregated fields from the table: "types_tags" */
  types_tags_aggregate: Types_Tags_Aggregate;
  /** fetch data from the table: "types_tags" using primary key columns */
  types_tags_by_pk?: Maybe<Types_Tags>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "wordlist" */
  wordlist: Array<Wordlist>;
  /** fetch aggregated fields from the table: "wordlist" */
  wordlist_aggregate: Wordlist_Aggregate;
  /** fetch data from the table: "wordlist" using primary key columns */
  wordlist_by_pk?: Maybe<Wordlist>;
  /** fetch data from the table: "works" */
  works: Array<Works>;
  /** fetch aggregated fields from the table: "works" */
  works_aggregate: Works_Aggregate;
  /** fetch data from the table: "works" using primary key columns */
  works_by_pk?: Maybe<Works>;
  /** fetch data from the table: "works_files" */
  works_files: Array<Works_Files>;
  /** fetch aggregated fields from the table: "works_files" */
  works_files_aggregate: Works_Files_Aggregate;
  /** fetch data from the table: "works_files" using primary key columns */
  works_files_by_pk?: Maybe<Works_Files>;
  /** fetch data from the table: "works_specifications" */
  works_specifications: Array<Works_Specifications>;
  /** fetch aggregated fields from the table: "works_specifications" */
  works_specifications_aggregate: Works_Specifications_Aggregate;
  /** fetch data from the table: "works_specifications" using primary key columns */
  works_specifications_by_pk?: Maybe<Works_Specifications>;
};


/** query root */
export type Query_RootApplicationsArgs = {
  distinct_on?: Maybe<Array<Applications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applications_Order_By>>;
  where?: Maybe<Applications_Bool_Exp>;
};


/** query root */
export type Query_RootApplications_AggregateArgs = {
  distinct_on?: Maybe<Array<Applications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applications_Order_By>>;
  where?: Maybe<Applications_Bool_Exp>;
};


/** query root */
export type Query_RootApplications_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootEditionsArgs = {
  distinct_on?: Maybe<Array<Editions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Editions_Order_By>>;
  where?: Maybe<Editions_Bool_Exp>;
};


/** query root */
export type Query_RootEditions_AggregateArgs = {
  distinct_on?: Maybe<Array<Editions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Editions_Order_By>>;
  where?: Maybe<Editions_Bool_Exp>;
};


/** query root */
export type Query_RootEditions_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRating_RoundsArgs = {
  distinct_on?: Maybe<Array<Rating_Rounds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Rounds_Order_By>>;
  where?: Maybe<Rating_Rounds_Bool_Exp>;
};


/** query root */
export type Query_RootRating_Rounds_AggregateArgs = {
  distinct_on?: Maybe<Array<Rating_Rounds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Rounds_Order_By>>;
  where?: Maybe<Rating_Rounds_Bool_Exp>;
};


/** query root */
export type Query_RootRating_Rounds_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRatingsArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};


/** query root */
export type Query_RootRatings_AggregateArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};


/** query root */
export type Query_RootRatings_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootTypes_MediumArgs = {
  distinct_on?: Maybe<Array<Types_Medium_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Types_Medium_Order_By>>;
  where?: Maybe<Types_Medium_Bool_Exp>;
};


/** query root */
export type Query_RootTypes_Medium_AggregateArgs = {
  distinct_on?: Maybe<Array<Types_Medium_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Types_Medium_Order_By>>;
  where?: Maybe<Types_Medium_Bool_Exp>;
};


/** query root */
export type Query_RootTypes_Medium_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootTypes_TagsArgs = {
  distinct_on?: Maybe<Array<Types_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Types_Tags_Order_By>>;
  where?: Maybe<Types_Tags_Bool_Exp>;
};


/** query root */
export type Query_RootTypes_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Types_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Types_Tags_Order_By>>;
  where?: Maybe<Types_Tags_Bool_Exp>;
};


/** query root */
export type Query_RootTypes_Tags_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootWordlistArgs = {
  distinct_on?: Maybe<Array<Wordlist_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wordlist_Order_By>>;
  where?: Maybe<Wordlist_Bool_Exp>;
};


/** query root */
export type Query_RootWordlist_AggregateArgs = {
  distinct_on?: Maybe<Array<Wordlist_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wordlist_Order_By>>;
  where?: Maybe<Wordlist_Bool_Exp>;
};


/** query root */
export type Query_RootWordlist_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootWorksArgs = {
  distinct_on?: Maybe<Array<Works_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Order_By>>;
  where?: Maybe<Works_Bool_Exp>;
};


/** query root */
export type Query_RootWorks_AggregateArgs = {
  distinct_on?: Maybe<Array<Works_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Order_By>>;
  where?: Maybe<Works_Bool_Exp>;
};


/** query root */
export type Query_RootWorks_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootWorks_FilesArgs = {
  distinct_on?: Maybe<Array<Works_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Files_Order_By>>;
  where?: Maybe<Works_Files_Bool_Exp>;
};


/** query root */
export type Query_RootWorks_Files_AggregateArgs = {
  distinct_on?: Maybe<Array<Works_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Files_Order_By>>;
  where?: Maybe<Works_Files_Bool_Exp>;
};


/** query root */
export type Query_RootWorks_Files_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootWorks_SpecificationsArgs = {
  distinct_on?: Maybe<Array<Works_Specifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Specifications_Order_By>>;
  where?: Maybe<Works_Specifications_Bool_Exp>;
};


/** query root */
export type Query_RootWorks_Specifications_AggregateArgs = {
  distinct_on?: Maybe<Array<Works_Specifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Specifications_Order_By>>;
  where?: Maybe<Works_Specifications_Bool_Exp>;
};


/** query root */
export type Query_RootWorks_Specifications_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "rating_rounds" */
export type Rating_Rounds = {
  __typename?: 'rating_rounds';
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  edition: Editions;
  edition_id: Scalars['Int'];
  end_at: Scalars['timestamptz'];
  goal: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  next_round?: Maybe<Rating_Rounds>;
  /** An object relationship */
  prev_round?: Maybe<Rating_Rounds>;
  prev_round_id?: Maybe<Scalars['Int']>;
  start_at: Scalars['timestamptz'];
  updated_at?: Maybe<Scalars['timestamptz']>;
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
  count?: Maybe<Scalars['Int']>;
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
  _and?: Maybe<Array<Maybe<Rating_Rounds_Bool_Exp>>>;
  _not?: Maybe<Rating_Rounds_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Rating_Rounds_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  edition?: Maybe<Editions_Bool_Exp>;
  edition_id?: Maybe<Int_Comparison_Exp>;
  end_at?: Maybe<Timestamptz_Comparison_Exp>;
  goal?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  next_round?: Maybe<Rating_Rounds_Bool_Exp>;
  prev_round?: Maybe<Rating_Rounds_Bool_Exp>;
  prev_round_id?: Maybe<Int_Comparison_Exp>;
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

/** input type for incrementing integer column in table "rating_rounds" */
export type Rating_Rounds_Inc_Input = {
  edition_id?: Maybe<Scalars['Int']>;
  goal?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  prev_round_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "rating_rounds" */
export type Rating_Rounds_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  edition?: Maybe<Editions_Obj_Rel_Insert_Input>;
  edition_id?: Maybe<Scalars['Int']>;
  end_at?: Maybe<Scalars['timestamptz']>;
  goal?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  next_round?: Maybe<Rating_Rounds_Obj_Rel_Insert_Input>;
  prev_round?: Maybe<Rating_Rounds_Obj_Rel_Insert_Input>;
  prev_round_id?: Maybe<Scalars['Int']>;
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
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Rating_Rounds>;
};

/** input type for inserting object relation for remote table "rating_rounds" */
export type Rating_Rounds_Obj_Rel_Insert_Input = {
  data: Rating_Rounds_Insert_Input;
  on_conflict?: Maybe<Rating_Rounds_On_Conflict>;
};

/** on conflict condition type for table "rating_rounds" */
export type Rating_Rounds_On_Conflict = {
  constraint: Rating_Rounds_Constraint;
  update_columns: Array<Rating_Rounds_Update_Column>;
  where?: Maybe<Rating_Rounds_Bool_Exp>;
};

/** ordering options when selecting data from "rating_rounds" */
export type Rating_Rounds_Order_By = {
  created_at?: Maybe<Order_By>;
  edition?: Maybe<Editions_Order_By>;
  edition_id?: Maybe<Order_By>;
  end_at?: Maybe<Order_By>;
  goal?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  next_round?: Maybe<Rating_Rounds_Order_By>;
  prev_round?: Maybe<Rating_Rounds_Order_By>;
  prev_round_id?: Maybe<Order_By>;
  start_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "rating_rounds" */
export type Rating_Rounds_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "rating_rounds" */
export enum Rating_Rounds_Select_Column {
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
  created_at?: Maybe<Scalars['timestamptz']>;
  edition_id?: Maybe<Scalars['Int']>;
  end_at?: Maybe<Scalars['timestamptz']>;
  goal?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  prev_round_id?: Maybe<Scalars['Int']>;
  start_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
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
  application_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['uuid'];
  id: Scalars['uuid'];
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
  count?: Maybe<Scalars['Int']>;
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
  on_conflict?: Maybe<Ratings_On_Conflict>;
};

/** aggregate avg on columns */
export type Ratings_Avg_Fields = {
  __typename?: 'ratings_avg_fields';
  round_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ratings" */
export type Ratings_Avg_Order_By = {
  round_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ratings". All fields are combined with a logical 'AND'. */
export type Ratings_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Ratings_Bool_Exp>>>;
  _not?: Maybe<Ratings_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Ratings_Bool_Exp>>>;
  application_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  round_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  value?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "ratings" */
export enum Ratings_Constraint {
  /** unique or primary key constraint */
  RatingsPkey = 'ratings_pkey',
  /** unique or primary key constraint */
  RatingsRoundIdApplicationIdCreatedByKey = 'ratings_round_id_application_id_created_by_key'
}

/** input type for incrementing integer column in table "ratings" */
export type Ratings_Inc_Input = {
  round_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "ratings" */
export type Ratings_Insert_Input = {
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  round_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Ratings_Max_Fields = {
  __typename?: 'ratings_max_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
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
  round_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Ratings_Min_Fields = {
  __typename?: 'ratings_min_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
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
  round_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "ratings" */
export type Ratings_Mutation_Response = {
  __typename?: 'ratings_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Ratings>;
};

/** input type for inserting object relation for remote table "ratings" */
export type Ratings_Obj_Rel_Insert_Input = {
  data: Ratings_Insert_Input;
  on_conflict?: Maybe<Ratings_On_Conflict>;
};

/** on conflict condition type for table "ratings" */
export type Ratings_On_Conflict = {
  constraint: Ratings_Constraint;
  update_columns: Array<Ratings_Update_Column>;
  where?: Maybe<Ratings_Bool_Exp>;
};

/** ordering options when selecting data from "ratings" */
export type Ratings_Order_By = {
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "ratings" */
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
  created_by?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  round_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Ratings_Stddev_Fields = {
  __typename?: 'ratings_stddev_fields';
  round_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ratings" */
export type Ratings_Stddev_Order_By = {
  round_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ratings_Stddev_Pop_Fields = {
  __typename?: 'ratings_stddev_pop_fields';
  round_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ratings" */
export type Ratings_Stddev_Pop_Order_By = {
  round_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ratings_Stddev_Samp_Fields = {
  __typename?: 'ratings_stddev_samp_fields';
  round_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ratings" */
export type Ratings_Stddev_Samp_Order_By = {
  round_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Ratings_Sum_Fields = {
  __typename?: 'ratings_sum_fields';
  round_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ratings" */
export type Ratings_Sum_Order_By = {
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
  RoundId = 'round_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Ratings_Var_Pop_Fields = {
  __typename?: 'ratings_var_pop_fields';
  round_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ratings" */
export type Ratings_Var_Pop_Order_By = {
  round_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ratings_Var_Samp_Fields = {
  __typename?: 'ratings_var_samp_fields';
  round_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ratings" */
export type Ratings_Var_Samp_Order_By = {
  round_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Ratings_Variance_Fields = {
  __typename?: 'ratings_variance_fields';
  round_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ratings" */
export type Ratings_Variance_Order_By = {
  round_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "applications" */
  applications: Array<Applications>;
  /** fetch aggregated fields from the table: "applications" */
  applications_aggregate: Applications_Aggregate;
  /** fetch data from the table: "applications" using primary key columns */
  applications_by_pk?: Maybe<Applications>;
  /** fetch data from the table: "editions" */
  editions: Array<Editions>;
  /** fetch aggregated fields from the table: "editions" */
  editions_aggregate: Editions_Aggregate;
  /** fetch data from the table: "editions" using primary key columns */
  editions_by_pk?: Maybe<Editions>;
  /** fetch data from the table: "rating_rounds" */
  rating_rounds: Array<Rating_Rounds>;
  /** fetch aggregated fields from the table: "rating_rounds" */
  rating_rounds_aggregate: Rating_Rounds_Aggregate;
  /** fetch data from the table: "rating_rounds" using primary key columns */
  rating_rounds_by_pk?: Maybe<Rating_Rounds>;
  /** fetch data from the table: "ratings" */
  ratings: Array<Ratings>;
  /** fetch aggregated fields from the table: "ratings" */
  ratings_aggregate: Ratings_Aggregate;
  /** fetch data from the table: "ratings" using primary key columns */
  ratings_by_pk?: Maybe<Ratings>;
  /** fetch data from the table: "types_medium" */
  types_medium: Array<Types_Medium>;
  /** fetch aggregated fields from the table: "types_medium" */
  types_medium_aggregate: Types_Medium_Aggregate;
  /** fetch data from the table: "types_medium" using primary key columns */
  types_medium_by_pk?: Maybe<Types_Medium>;
  /** fetch data from the table: "types_tags" */
  types_tags: Array<Types_Tags>;
  /** fetch aggregated fields from the table: "types_tags" */
  types_tags_aggregate: Types_Tags_Aggregate;
  /** fetch data from the table: "types_tags" using primary key columns */
  types_tags_by_pk?: Maybe<Types_Tags>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "wordlist" */
  wordlist: Array<Wordlist>;
  /** fetch aggregated fields from the table: "wordlist" */
  wordlist_aggregate: Wordlist_Aggregate;
  /** fetch data from the table: "wordlist" using primary key columns */
  wordlist_by_pk?: Maybe<Wordlist>;
  /** fetch data from the table: "works" */
  works: Array<Works>;
  /** fetch aggregated fields from the table: "works" */
  works_aggregate: Works_Aggregate;
  /** fetch data from the table: "works" using primary key columns */
  works_by_pk?: Maybe<Works>;
  /** fetch data from the table: "works_files" */
  works_files: Array<Works_Files>;
  /** fetch aggregated fields from the table: "works_files" */
  works_files_aggregate: Works_Files_Aggregate;
  /** fetch data from the table: "works_files" using primary key columns */
  works_files_by_pk?: Maybe<Works_Files>;
  /** fetch data from the table: "works_specifications" */
  works_specifications: Array<Works_Specifications>;
  /** fetch aggregated fields from the table: "works_specifications" */
  works_specifications_aggregate: Works_Specifications_Aggregate;
  /** fetch data from the table: "works_specifications" using primary key columns */
  works_specifications_by_pk?: Maybe<Works_Specifications>;
};


/** subscription root */
export type Subscription_RootApplicationsArgs = {
  distinct_on?: Maybe<Array<Applications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applications_Order_By>>;
  where?: Maybe<Applications_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootApplications_AggregateArgs = {
  distinct_on?: Maybe<Array<Applications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Applications_Order_By>>;
  where?: Maybe<Applications_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootApplications_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootEditionsArgs = {
  distinct_on?: Maybe<Array<Editions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Editions_Order_By>>;
  where?: Maybe<Editions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEditions_AggregateArgs = {
  distinct_on?: Maybe<Array<Editions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Editions_Order_By>>;
  where?: Maybe<Editions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEditions_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRating_RoundsArgs = {
  distinct_on?: Maybe<Array<Rating_Rounds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Rounds_Order_By>>;
  where?: Maybe<Rating_Rounds_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRating_Rounds_AggregateArgs = {
  distinct_on?: Maybe<Array<Rating_Rounds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Rounds_Order_By>>;
  where?: Maybe<Rating_Rounds_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRating_Rounds_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRatingsArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRatings_AggregateArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRatings_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootTypes_MediumArgs = {
  distinct_on?: Maybe<Array<Types_Medium_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Types_Medium_Order_By>>;
  where?: Maybe<Types_Medium_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTypes_Medium_AggregateArgs = {
  distinct_on?: Maybe<Array<Types_Medium_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Types_Medium_Order_By>>;
  where?: Maybe<Types_Medium_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTypes_Medium_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTypes_TagsArgs = {
  distinct_on?: Maybe<Array<Types_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Types_Tags_Order_By>>;
  where?: Maybe<Types_Tags_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTypes_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Types_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Types_Tags_Order_By>>;
  where?: Maybe<Types_Tags_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTypes_Tags_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootWordlistArgs = {
  distinct_on?: Maybe<Array<Wordlist_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wordlist_Order_By>>;
  where?: Maybe<Wordlist_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWordlist_AggregateArgs = {
  distinct_on?: Maybe<Array<Wordlist_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wordlist_Order_By>>;
  where?: Maybe<Wordlist_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWordlist_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootWorksArgs = {
  distinct_on?: Maybe<Array<Works_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Order_By>>;
  where?: Maybe<Works_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWorks_AggregateArgs = {
  distinct_on?: Maybe<Array<Works_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Order_By>>;
  where?: Maybe<Works_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWorks_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootWorks_FilesArgs = {
  distinct_on?: Maybe<Array<Works_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Files_Order_By>>;
  where?: Maybe<Works_Files_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWorks_Files_AggregateArgs = {
  distinct_on?: Maybe<Array<Works_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Files_Order_By>>;
  where?: Maybe<Works_Files_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWorks_Files_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootWorks_SpecificationsArgs = {
  distinct_on?: Maybe<Array<Works_Specifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Specifications_Order_By>>;
  where?: Maybe<Works_Specifications_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWorks_Specifications_AggregateArgs = {
  distinct_on?: Maybe<Array<Works_Specifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Specifications_Order_By>>;
  where?: Maybe<Works_Specifications_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWorks_Specifications_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
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

/** columns and relationships of "types_medium" */
export type Types_Medium = {
  __typename?: 'types_medium';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "types_medium" */
export type Types_Medium_Aggregate = {
  __typename?: 'types_medium_aggregate';
  aggregate?: Maybe<Types_Medium_Aggregate_Fields>;
  nodes: Array<Types_Medium>;
};

/** aggregate fields of "types_medium" */
export type Types_Medium_Aggregate_Fields = {
  __typename?: 'types_medium_aggregate_fields';
  avg?: Maybe<Types_Medium_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Types_Medium_Max_Fields>;
  min?: Maybe<Types_Medium_Min_Fields>;
  stddev?: Maybe<Types_Medium_Stddev_Fields>;
  stddev_pop?: Maybe<Types_Medium_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Types_Medium_Stddev_Samp_Fields>;
  sum?: Maybe<Types_Medium_Sum_Fields>;
  var_pop?: Maybe<Types_Medium_Var_Pop_Fields>;
  var_samp?: Maybe<Types_Medium_Var_Samp_Fields>;
  variance?: Maybe<Types_Medium_Variance_Fields>;
};


/** aggregate fields of "types_medium" */
export type Types_Medium_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Types_Medium_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "types_medium" */
export type Types_Medium_Aggregate_Order_By = {
  avg?: Maybe<Types_Medium_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Types_Medium_Max_Order_By>;
  min?: Maybe<Types_Medium_Min_Order_By>;
  stddev?: Maybe<Types_Medium_Stddev_Order_By>;
  stddev_pop?: Maybe<Types_Medium_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Types_Medium_Stddev_Samp_Order_By>;
  sum?: Maybe<Types_Medium_Sum_Order_By>;
  var_pop?: Maybe<Types_Medium_Var_Pop_Order_By>;
  var_samp?: Maybe<Types_Medium_Var_Samp_Order_By>;
  variance?: Maybe<Types_Medium_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "types_medium" */
export type Types_Medium_Arr_Rel_Insert_Input = {
  data: Array<Types_Medium_Insert_Input>;
  on_conflict?: Maybe<Types_Medium_On_Conflict>;
};

/** aggregate avg on columns */
export type Types_Medium_Avg_Fields = {
  __typename?: 'types_medium_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "types_medium" */
export type Types_Medium_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "types_medium". All fields are combined with a logical 'AND'. */
export type Types_Medium_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Types_Medium_Bool_Exp>>>;
  _not?: Maybe<Types_Medium_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Types_Medium_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "types_medium" */
export enum Types_Medium_Constraint {
  /** unique or primary key constraint */
  TypesMediumPkey = 'types_medium_pkey'
}

/** input type for incrementing integer column in table "types_medium" */
export type Types_Medium_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "types_medium" */
export type Types_Medium_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Types_Medium_Max_Fields = {
  __typename?: 'types_medium_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "types_medium" */
export type Types_Medium_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Types_Medium_Min_Fields = {
  __typename?: 'types_medium_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "types_medium" */
export type Types_Medium_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "types_medium" */
export type Types_Medium_Mutation_Response = {
  __typename?: 'types_medium_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Types_Medium>;
};

/** input type for inserting object relation for remote table "types_medium" */
export type Types_Medium_Obj_Rel_Insert_Input = {
  data: Types_Medium_Insert_Input;
  on_conflict?: Maybe<Types_Medium_On_Conflict>;
};

/** on conflict condition type for table "types_medium" */
export type Types_Medium_On_Conflict = {
  constraint: Types_Medium_Constraint;
  update_columns: Array<Types_Medium_Update_Column>;
  where?: Maybe<Types_Medium_Bool_Exp>;
};

/** ordering options when selecting data from "types_medium" */
export type Types_Medium_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "types_medium" */
export type Types_Medium_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "types_medium" */
export enum Types_Medium_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "types_medium" */
export type Types_Medium_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Types_Medium_Stddev_Fields = {
  __typename?: 'types_medium_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "types_medium" */
export type Types_Medium_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Types_Medium_Stddev_Pop_Fields = {
  __typename?: 'types_medium_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "types_medium" */
export type Types_Medium_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Types_Medium_Stddev_Samp_Fields = {
  __typename?: 'types_medium_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "types_medium" */
export type Types_Medium_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Types_Medium_Sum_Fields = {
  __typename?: 'types_medium_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "types_medium" */
export type Types_Medium_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "types_medium" */
export enum Types_Medium_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Types_Medium_Var_Pop_Fields = {
  __typename?: 'types_medium_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "types_medium" */
export type Types_Medium_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Types_Medium_Var_Samp_Fields = {
  __typename?: 'types_medium_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "types_medium" */
export type Types_Medium_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Types_Medium_Variance_Fields = {
  __typename?: 'types_medium_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "types_medium" */
export type Types_Medium_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "types_tags" */
export type Types_Tags = {
  __typename?: 'types_tags';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "types_tags" */
export type Types_Tags_Aggregate = {
  __typename?: 'types_tags_aggregate';
  aggregate?: Maybe<Types_Tags_Aggregate_Fields>;
  nodes: Array<Types_Tags>;
};

/** aggregate fields of "types_tags" */
export type Types_Tags_Aggregate_Fields = {
  __typename?: 'types_tags_aggregate_fields';
  avg?: Maybe<Types_Tags_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Types_Tags_Max_Fields>;
  min?: Maybe<Types_Tags_Min_Fields>;
  stddev?: Maybe<Types_Tags_Stddev_Fields>;
  stddev_pop?: Maybe<Types_Tags_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Types_Tags_Stddev_Samp_Fields>;
  sum?: Maybe<Types_Tags_Sum_Fields>;
  var_pop?: Maybe<Types_Tags_Var_Pop_Fields>;
  var_samp?: Maybe<Types_Tags_Var_Samp_Fields>;
  variance?: Maybe<Types_Tags_Variance_Fields>;
};


/** aggregate fields of "types_tags" */
export type Types_Tags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Types_Tags_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "types_tags" */
export type Types_Tags_Aggregate_Order_By = {
  avg?: Maybe<Types_Tags_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Types_Tags_Max_Order_By>;
  min?: Maybe<Types_Tags_Min_Order_By>;
  stddev?: Maybe<Types_Tags_Stddev_Order_By>;
  stddev_pop?: Maybe<Types_Tags_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Types_Tags_Stddev_Samp_Order_By>;
  sum?: Maybe<Types_Tags_Sum_Order_By>;
  var_pop?: Maybe<Types_Tags_Var_Pop_Order_By>;
  var_samp?: Maybe<Types_Tags_Var_Samp_Order_By>;
  variance?: Maybe<Types_Tags_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "types_tags" */
export type Types_Tags_Arr_Rel_Insert_Input = {
  data: Array<Types_Tags_Insert_Input>;
  on_conflict?: Maybe<Types_Tags_On_Conflict>;
};

/** aggregate avg on columns */
export type Types_Tags_Avg_Fields = {
  __typename?: 'types_tags_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "types_tags" */
export type Types_Tags_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "types_tags". All fields are combined with a logical 'AND'. */
export type Types_Tags_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Types_Tags_Bool_Exp>>>;
  _not?: Maybe<Types_Tags_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Types_Tags_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "types_tags" */
export enum Types_Tags_Constraint {
  /** unique or primary key constraint */
  TypesTagsPkey = 'types_tags_pkey'
}

/** input type for incrementing integer column in table "types_tags" */
export type Types_Tags_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "types_tags" */
export type Types_Tags_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Types_Tags_Max_Fields = {
  __typename?: 'types_tags_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "types_tags" */
export type Types_Tags_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Types_Tags_Min_Fields = {
  __typename?: 'types_tags_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "types_tags" */
export type Types_Tags_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "types_tags" */
export type Types_Tags_Mutation_Response = {
  __typename?: 'types_tags_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Types_Tags>;
};

/** input type for inserting object relation for remote table "types_tags" */
export type Types_Tags_Obj_Rel_Insert_Input = {
  data: Types_Tags_Insert_Input;
  on_conflict?: Maybe<Types_Tags_On_Conflict>;
};

/** on conflict condition type for table "types_tags" */
export type Types_Tags_On_Conflict = {
  constraint: Types_Tags_Constraint;
  update_columns: Array<Types_Tags_Update_Column>;
  where?: Maybe<Types_Tags_Bool_Exp>;
};

/** ordering options when selecting data from "types_tags" */
export type Types_Tags_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "types_tags" */
export type Types_Tags_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "types_tags" */
export enum Types_Tags_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "types_tags" */
export type Types_Tags_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Types_Tags_Stddev_Fields = {
  __typename?: 'types_tags_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "types_tags" */
export type Types_Tags_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Types_Tags_Stddev_Pop_Fields = {
  __typename?: 'types_tags_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "types_tags" */
export type Types_Tags_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Types_Tags_Stddev_Samp_Fields = {
  __typename?: 'types_tags_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "types_tags" */
export type Types_Tags_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Types_Tags_Sum_Fields = {
  __typename?: 'types_tags_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "types_tags" */
export type Types_Tags_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "types_tags" */
export enum Types_Tags_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Types_Tags_Var_Pop_Fields = {
  __typename?: 'types_tags_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "types_tags" */
export type Types_Tags_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Types_Tags_Var_Samp_Fields = {
  __typename?: 'types_tags_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "types_tags" */
export type Types_Tags_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Types_Tags_Variance_Fields = {
  __typename?: 'types_tags_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "types_tags" */
export type Types_Tags_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  id: Scalars['String'];
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  type: Scalars['String'];
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
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  id?: Maybe<String_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersNameKey = 'users_name_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
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

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
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


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
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
  count?: Maybe<Scalars['Int']>;
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

/** order by aggregate values of table "wordlist" */
export type Wordlist_Aggregate_Order_By = {
  avg?: Maybe<Wordlist_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Wordlist_Max_Order_By>;
  min?: Maybe<Wordlist_Min_Order_By>;
  stddev?: Maybe<Wordlist_Stddev_Order_By>;
  stddev_pop?: Maybe<Wordlist_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Wordlist_Stddev_Samp_Order_By>;
  sum?: Maybe<Wordlist_Sum_Order_By>;
  var_pop?: Maybe<Wordlist_Var_Pop_Order_By>;
  var_samp?: Maybe<Wordlist_Var_Samp_Order_By>;
  variance?: Maybe<Wordlist_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "wordlist" */
export type Wordlist_Arr_Rel_Insert_Input = {
  data: Array<Wordlist_Insert_Input>;
  on_conflict?: Maybe<Wordlist_On_Conflict>;
};

/** aggregate avg on columns */
export type Wordlist_Avg_Fields = {
  __typename?: 'wordlist_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "wordlist" */
export type Wordlist_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "wordlist". All fields are combined with a logical 'AND'. */
export type Wordlist_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Wordlist_Bool_Exp>>>;
  _not?: Maybe<Wordlist_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Wordlist_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "wordlist" */
export enum Wordlist_Constraint {
  /** unique or primary key constraint */
  WordlistPkey = 'wordlist_pkey'
}

/** input type for incrementing integer column in table "wordlist" */
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

/** order by max() on columns of table "wordlist" */
export type Wordlist_Max_Order_By = {
  id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Wordlist_Min_Fields = {
  __typename?: 'wordlist_min_fields';
  id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "wordlist" */
export type Wordlist_Min_Order_By = {
  id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "wordlist" */
export type Wordlist_Mutation_Response = {
  __typename?: 'wordlist_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Wordlist>;
};

/** input type for inserting object relation for remote table "wordlist" */
export type Wordlist_Obj_Rel_Insert_Input = {
  data: Wordlist_Insert_Input;
  on_conflict?: Maybe<Wordlist_On_Conflict>;
};

/** on conflict condition type for table "wordlist" */
export type Wordlist_On_Conflict = {
  constraint: Wordlist_Constraint;
  update_columns: Array<Wordlist_Update_Column>;
  where?: Maybe<Wordlist_Bool_Exp>;
};

/** ordering options when selecting data from "wordlist" */
export type Wordlist_Order_By = {
  id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "wordlist" */
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

/** order by stddev() on columns of table "wordlist" */
export type Wordlist_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Wordlist_Stddev_Pop_Fields = {
  __typename?: 'wordlist_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "wordlist" */
export type Wordlist_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Wordlist_Stddev_Samp_Fields = {
  __typename?: 'wordlist_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "wordlist" */
export type Wordlist_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Wordlist_Sum_Fields = {
  __typename?: 'wordlist_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "wordlist" */
export type Wordlist_Sum_Order_By = {
  id?: Maybe<Order_By>;
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

/** order by var_pop() on columns of table "wordlist" */
export type Wordlist_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Wordlist_Var_Samp_Fields = {
  __typename?: 'wordlist_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "wordlist" */
export type Wordlist_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Wordlist_Variance_Fields = {
  __typename?: 'wordlist_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "wordlist" */
export type Wordlist_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "works" */
export type Works = {
  __typename?: 'works';
  /** An object relationship */
  application: Applications;
  application_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  files: Array<Works_Files>;
  /** An aggregated array relationship */
  files_aggregate: Works_Files_Aggregate;
  id: Scalars['uuid'];
  order?: Maybe<Scalars['numeric']>;
  portfolio?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  specifications: Array<Works_Specifications>;
  /** An aggregated array relationship */
  specifications_aggregate: Works_Specifications_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "works" */
export type WorksFilesArgs = {
  distinct_on?: Maybe<Array<Works_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Files_Order_By>>;
  where?: Maybe<Works_Files_Bool_Exp>;
};


/** columns and relationships of "works" */
export type WorksFiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Works_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Files_Order_By>>;
  where?: Maybe<Works_Files_Bool_Exp>;
};


/** columns and relationships of "works" */
export type WorksSpecificationsArgs = {
  distinct_on?: Maybe<Array<Works_Specifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Specifications_Order_By>>;
  where?: Maybe<Works_Specifications_Bool_Exp>;
};


/** columns and relationships of "works" */
export type WorksSpecifications_AggregateArgs = {
  distinct_on?: Maybe<Array<Works_Specifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Specifications_Order_By>>;
  where?: Maybe<Works_Specifications_Bool_Exp>;
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
  count?: Maybe<Scalars['Int']>;
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
  _and?: Maybe<Array<Maybe<Works_Bool_Exp>>>;
  _not?: Maybe<Works_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Works_Bool_Exp>>>;
  application?: Maybe<Applications_Bool_Exp>;
  application_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  files?: Maybe<Works_Files_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  order?: Maybe<Numeric_Comparison_Exp>;
  portfolio?: Maybe<Boolean_Comparison_Exp>;
  specifications?: Maybe<Works_Specifications_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "works" */
export enum Works_Constraint {
  /** unique or primary key constraint */
  WorksApplicationIdPortfolioKey = 'works_application_id_portfolio_key',
  /** unique or primary key constraint */
  WorksPkey = 'works_pkey'
}

/** columns and relationships of "works_files" */
export type Works_Files = {
  __typename?: 'works_files';
  /** An object relationship */
  application: Applications;
  application_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  key: Scalars['String'];
  mimetype: Scalars['String'];
  order: Scalars['Int'];
  originalname: Scalars['String'];
  size: Scalars['numeric'];
  /** An object relationship */
  work: Works;
  work_id: Scalars['uuid'];
};

/** aggregated selection of "works_files" */
export type Works_Files_Aggregate = {
  __typename?: 'works_files_aggregate';
  aggregate?: Maybe<Works_Files_Aggregate_Fields>;
  nodes: Array<Works_Files>;
};

/** aggregate fields of "works_files" */
export type Works_Files_Aggregate_Fields = {
  __typename?: 'works_files_aggregate_fields';
  avg?: Maybe<Works_Files_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Works_Files_Max_Fields>;
  min?: Maybe<Works_Files_Min_Fields>;
  stddev?: Maybe<Works_Files_Stddev_Fields>;
  stddev_pop?: Maybe<Works_Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Works_Files_Stddev_Samp_Fields>;
  sum?: Maybe<Works_Files_Sum_Fields>;
  var_pop?: Maybe<Works_Files_Var_Pop_Fields>;
  var_samp?: Maybe<Works_Files_Var_Samp_Fields>;
  variance?: Maybe<Works_Files_Variance_Fields>;
};


/** aggregate fields of "works_files" */
export type Works_Files_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Works_Files_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "works_files" */
export type Works_Files_Aggregate_Order_By = {
  avg?: Maybe<Works_Files_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Works_Files_Max_Order_By>;
  min?: Maybe<Works_Files_Min_Order_By>;
  stddev?: Maybe<Works_Files_Stddev_Order_By>;
  stddev_pop?: Maybe<Works_Files_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Works_Files_Stddev_Samp_Order_By>;
  sum?: Maybe<Works_Files_Sum_Order_By>;
  var_pop?: Maybe<Works_Files_Var_Pop_Order_By>;
  var_samp?: Maybe<Works_Files_Var_Samp_Order_By>;
  variance?: Maybe<Works_Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "works_files" */
export type Works_Files_Arr_Rel_Insert_Input = {
  data: Array<Works_Files_Insert_Input>;
  on_conflict?: Maybe<Works_Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Works_Files_Avg_Fields = {
  __typename?: 'works_files_avg_fields';
  order?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "works_files" */
export type Works_Files_Avg_Order_By = {
  order?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "works_files". All fields are combined with a logical 'AND'. */
export type Works_Files_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Works_Files_Bool_Exp>>>;
  _not?: Maybe<Works_Files_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Works_Files_Bool_Exp>>>;
  application?: Maybe<Applications_Bool_Exp>;
  application_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  key?: Maybe<String_Comparison_Exp>;
  mimetype?: Maybe<String_Comparison_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
  originalname?: Maybe<String_Comparison_Exp>;
  size?: Maybe<Numeric_Comparison_Exp>;
  work?: Maybe<Works_Bool_Exp>;
  work_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "works_files" */
export enum Works_Files_Constraint {
  /** unique or primary key constraint */
  WorksFilesPkey = 'works_files_pkey'
}

/** input type for incrementing integer column in table "works_files" */
export type Works_Files_Inc_Input = {
  order?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "works_files" */
export type Works_Files_Insert_Input = {
  application?: Maybe<Applications_Obj_Rel_Insert_Input>;
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  key?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  originalname?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['numeric']>;
  work?: Maybe<Works_Obj_Rel_Insert_Input>;
  work_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Works_Files_Max_Fields = {
  __typename?: 'works_files_max_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  key?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  originalname?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['numeric']>;
  work_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "works_files" */
export type Works_Files_Max_Order_By = {
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  mimetype?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  originalname?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Works_Files_Min_Fields = {
  __typename?: 'works_files_min_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  key?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  originalname?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['numeric']>;
  work_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "works_files" */
export type Works_Files_Min_Order_By = {
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  mimetype?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  originalname?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "works_files" */
export type Works_Files_Mutation_Response = {
  __typename?: 'works_files_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Works_Files>;
};

/** input type for inserting object relation for remote table "works_files" */
export type Works_Files_Obj_Rel_Insert_Input = {
  data: Works_Files_Insert_Input;
  on_conflict?: Maybe<Works_Files_On_Conflict>;
};

/** on conflict condition type for table "works_files" */
export type Works_Files_On_Conflict = {
  constraint: Works_Files_Constraint;
  update_columns: Array<Works_Files_Update_Column>;
  where?: Maybe<Works_Files_Bool_Exp>;
};

/** ordering options when selecting data from "works_files" */
export type Works_Files_Order_By = {
  application?: Maybe<Applications_Order_By>;
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  mimetype?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  originalname?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  work?: Maybe<Works_Order_By>;
  work_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "works_files" */
export type Works_Files_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "works_files" */
export enum Works_Files_Select_Column {
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
  Size = 'size',
  /** column name */
  WorkId = 'work_id'
}

/** input type for updating data in table "works_files" */
export type Works_Files_Set_Input = {
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  key?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  originalname?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['numeric']>;
  work_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Works_Files_Stddev_Fields = {
  __typename?: 'works_files_stddev_fields';
  order?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "works_files" */
export type Works_Files_Stddev_Order_By = {
  order?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Works_Files_Stddev_Pop_Fields = {
  __typename?: 'works_files_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "works_files" */
export type Works_Files_Stddev_Pop_Order_By = {
  order?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Works_Files_Stddev_Samp_Fields = {
  __typename?: 'works_files_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "works_files" */
export type Works_Files_Stddev_Samp_Order_By = {
  order?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Works_Files_Sum_Fields = {
  __typename?: 'works_files_sum_fields';
  order?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "works_files" */
export type Works_Files_Sum_Order_By = {
  order?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
};

/** update columns of table "works_files" */
export enum Works_Files_Update_Column {
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
  Size = 'size',
  /** column name */
  WorkId = 'work_id'
}

/** aggregate var_pop on columns */
export type Works_Files_Var_Pop_Fields = {
  __typename?: 'works_files_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "works_files" */
export type Works_Files_Var_Pop_Order_By = {
  order?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Works_Files_Var_Samp_Fields = {
  __typename?: 'works_files_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "works_files" */
export type Works_Files_Var_Samp_Order_By = {
  order?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Works_Files_Variance_Fields = {
  __typename?: 'works_files_variance_fields';
  order?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "works_files" */
export type Works_Files_Variance_Order_By = {
  order?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
};

/** input type for incrementing integer column in table "works" */
export type Works_Inc_Input = {
  order?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "works" */
export type Works_Insert_Input = {
  application?: Maybe<Applications_Obj_Rel_Insert_Input>;
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  files?: Maybe<Works_Files_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['numeric']>;
  portfolio?: Maybe<Scalars['Boolean']>;
  specifications?: Maybe<Works_Specifications_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Works_Max_Fields = {
  __typename?: 'works_max_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "works" */
export type Works_Max_Order_By = {
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Works_Min_Fields = {
  __typename?: 'works_min_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "works" */
export type Works_Min_Order_By = {
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "works" */
export type Works_Mutation_Response = {
  __typename?: 'works_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Works>;
};

/** input type for inserting object relation for remote table "works" */
export type Works_Obj_Rel_Insert_Input = {
  data: Works_Insert_Input;
  on_conflict?: Maybe<Works_On_Conflict>;
};

/** on conflict condition type for table "works" */
export type Works_On_Conflict = {
  constraint: Works_Constraint;
  update_columns: Array<Works_Update_Column>;
  where?: Maybe<Works_Bool_Exp>;
};

/** ordering options when selecting data from "works" */
export type Works_Order_By = {
  application?: Maybe<Applications_Order_By>;
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  files_aggregate?: Maybe<Works_Files_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  portfolio?: Maybe<Order_By>;
  specifications_aggregate?: Maybe<Works_Specifications_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "works" */
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
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "works" */
export type Works_Set_Input = {
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['numeric']>;
  portfolio?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "works_specifications" */
export type Works_Specifications = {
  __typename?: 'works_specifications';
  /** An object relationship */
  application: Applications;
  application_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  dimensions_depth?: Maybe<Scalars['Int']>;
  dimensions_height?: Maybe<Scalars['Int']>;
  dimensions_width?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  medium?: Maybe<Scalars['String']>;
  number_of_editions?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  work: Works;
  work_id: Scalars['uuid'];
  year?: Maybe<Scalars['date']>;
};

/** aggregated selection of "works_specifications" */
export type Works_Specifications_Aggregate = {
  __typename?: 'works_specifications_aggregate';
  aggregate?: Maybe<Works_Specifications_Aggregate_Fields>;
  nodes: Array<Works_Specifications>;
};

/** aggregate fields of "works_specifications" */
export type Works_Specifications_Aggregate_Fields = {
  __typename?: 'works_specifications_aggregate_fields';
  avg?: Maybe<Works_Specifications_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Works_Specifications_Max_Fields>;
  min?: Maybe<Works_Specifications_Min_Fields>;
  stddev?: Maybe<Works_Specifications_Stddev_Fields>;
  stddev_pop?: Maybe<Works_Specifications_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Works_Specifications_Stddev_Samp_Fields>;
  sum?: Maybe<Works_Specifications_Sum_Fields>;
  var_pop?: Maybe<Works_Specifications_Var_Pop_Fields>;
  var_samp?: Maybe<Works_Specifications_Var_Samp_Fields>;
  variance?: Maybe<Works_Specifications_Variance_Fields>;
};


/** aggregate fields of "works_specifications" */
export type Works_Specifications_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Works_Specifications_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "works_specifications" */
export type Works_Specifications_Aggregate_Order_By = {
  avg?: Maybe<Works_Specifications_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Works_Specifications_Max_Order_By>;
  min?: Maybe<Works_Specifications_Min_Order_By>;
  stddev?: Maybe<Works_Specifications_Stddev_Order_By>;
  stddev_pop?: Maybe<Works_Specifications_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Works_Specifications_Stddev_Samp_Order_By>;
  sum?: Maybe<Works_Specifications_Sum_Order_By>;
  var_pop?: Maybe<Works_Specifications_Var_Pop_Order_By>;
  var_samp?: Maybe<Works_Specifications_Var_Samp_Order_By>;
  variance?: Maybe<Works_Specifications_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "works_specifications" */
export type Works_Specifications_Arr_Rel_Insert_Input = {
  data: Array<Works_Specifications_Insert_Input>;
  on_conflict?: Maybe<Works_Specifications_On_Conflict>;
};

/** aggregate avg on columns */
export type Works_Specifications_Avg_Fields = {
  __typename?: 'works_specifications_avg_fields';
  dimensions_depth?: Maybe<Scalars['Float']>;
  dimensions_height?: Maybe<Scalars['Float']>;
  dimensions_width?: Maybe<Scalars['Float']>;
  number_of_editions?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "works_specifications" */
export type Works_Specifications_Avg_Order_By = {
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "works_specifications". All fields are combined with a logical 'AND'. */
export type Works_Specifications_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Works_Specifications_Bool_Exp>>>;
  _not?: Maybe<Works_Specifications_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Works_Specifications_Bool_Exp>>>;
  application?: Maybe<Applications_Bool_Exp>;
  application_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  dimensions_depth?: Maybe<Int_Comparison_Exp>;
  dimensions_height?: Maybe<Int_Comparison_Exp>;
  dimensions_width?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  medium?: Maybe<String_Comparison_Exp>;
  number_of_editions?: Maybe<Int_Comparison_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  work?: Maybe<Works_Bool_Exp>;
  work_id?: Maybe<Uuid_Comparison_Exp>;
  year?: Maybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "works_specifications" */
export enum Works_Specifications_Constraint {
  /** unique or primary key constraint */
  WorksSpecificationsPkey = 'works_specifications_pkey'
}

/** input type for incrementing integer column in table "works_specifications" */
export type Works_Specifications_Inc_Input = {
  dimensions_depth?: Maybe<Scalars['Int']>;
  dimensions_height?: Maybe<Scalars['Int']>;
  dimensions_width?: Maybe<Scalars['Int']>;
  number_of_editions?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "works_specifications" */
export type Works_Specifications_Insert_Input = {
  application?: Maybe<Applications_Obj_Rel_Insert_Input>;
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  dimensions_depth?: Maybe<Scalars['Int']>;
  dimensions_height?: Maybe<Scalars['Int']>;
  dimensions_width?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  medium?: Maybe<Scalars['String']>;
  number_of_editions?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  work?: Maybe<Works_Obj_Rel_Insert_Input>;
  work_id?: Maybe<Scalars['uuid']>;
  year?: Maybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Works_Specifications_Max_Fields = {
  __typename?: 'works_specifications_max_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  dimensions_depth?: Maybe<Scalars['Int']>;
  dimensions_height?: Maybe<Scalars['Int']>;
  dimensions_width?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  medium?: Maybe<Scalars['String']>;
  number_of_editions?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  work_id?: Maybe<Scalars['uuid']>;
  year?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "works_specifications" */
export type Works_Specifications_Max_Order_By = {
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  medium?: Maybe<Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Works_Specifications_Min_Fields = {
  __typename?: 'works_specifications_min_fields';
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  dimensions_depth?: Maybe<Scalars['Int']>;
  dimensions_height?: Maybe<Scalars['Int']>;
  dimensions_width?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  medium?: Maybe<Scalars['String']>;
  number_of_editions?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  work_id?: Maybe<Scalars['uuid']>;
  year?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "works_specifications" */
export type Works_Specifications_Min_Order_By = {
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  medium?: Maybe<Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** response of any mutation on the table "works_specifications" */
export type Works_Specifications_Mutation_Response = {
  __typename?: 'works_specifications_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Works_Specifications>;
};

/** input type for inserting object relation for remote table "works_specifications" */
export type Works_Specifications_Obj_Rel_Insert_Input = {
  data: Works_Specifications_Insert_Input;
  on_conflict?: Maybe<Works_Specifications_On_Conflict>;
};

/** on conflict condition type for table "works_specifications" */
export type Works_Specifications_On_Conflict = {
  constraint: Works_Specifications_Constraint;
  update_columns: Array<Works_Specifications_Update_Column>;
  where?: Maybe<Works_Specifications_Bool_Exp>;
};

/** ordering options when selecting data from "works_specifications" */
export type Works_Specifications_Order_By = {
  application?: Maybe<Applications_Order_By>;
  application_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  medium?: Maybe<Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  work?: Maybe<Works_Order_By>;
  work_id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** primary key columns input for table: "works_specifications" */
export type Works_Specifications_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "works_specifications" */
export enum Works_Specifications_Select_Column {
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
  Medium = 'medium',
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

/** input type for updating data in table "works_specifications" */
export type Works_Specifications_Set_Input = {
  application_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  dimensions_depth?: Maybe<Scalars['Int']>;
  dimensions_height?: Maybe<Scalars['Int']>;
  dimensions_width?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  medium?: Maybe<Scalars['String']>;
  number_of_editions?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  work_id?: Maybe<Scalars['uuid']>;
  year?: Maybe<Scalars['date']>;
};

/** aggregate stddev on columns */
export type Works_Specifications_Stddev_Fields = {
  __typename?: 'works_specifications_stddev_fields';
  dimensions_depth?: Maybe<Scalars['Float']>;
  dimensions_height?: Maybe<Scalars['Float']>;
  dimensions_width?: Maybe<Scalars['Float']>;
  number_of_editions?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "works_specifications" */
export type Works_Specifications_Stddev_Order_By = {
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Works_Specifications_Stddev_Pop_Fields = {
  __typename?: 'works_specifications_stddev_pop_fields';
  dimensions_depth?: Maybe<Scalars['Float']>;
  dimensions_height?: Maybe<Scalars['Float']>;
  dimensions_width?: Maybe<Scalars['Float']>;
  number_of_editions?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "works_specifications" */
export type Works_Specifications_Stddev_Pop_Order_By = {
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Works_Specifications_Stddev_Samp_Fields = {
  __typename?: 'works_specifications_stddev_samp_fields';
  dimensions_depth?: Maybe<Scalars['Float']>;
  dimensions_height?: Maybe<Scalars['Float']>;
  dimensions_width?: Maybe<Scalars['Float']>;
  number_of_editions?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "works_specifications" */
export type Works_Specifications_Stddev_Samp_Order_By = {
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Works_Specifications_Sum_Fields = {
  __typename?: 'works_specifications_sum_fields';
  dimensions_depth?: Maybe<Scalars['Int']>;
  dimensions_height?: Maybe<Scalars['Int']>;
  dimensions_width?: Maybe<Scalars['Int']>;
  number_of_editions?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "works_specifications" */
export type Works_Specifications_Sum_Order_By = {
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** update columns of table "works_specifications" */
export enum Works_Specifications_Update_Column {
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
  Medium = 'medium',
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
export type Works_Specifications_Var_Pop_Fields = {
  __typename?: 'works_specifications_var_pop_fields';
  dimensions_depth?: Maybe<Scalars['Float']>;
  dimensions_height?: Maybe<Scalars['Float']>;
  dimensions_width?: Maybe<Scalars['Float']>;
  number_of_editions?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "works_specifications" */
export type Works_Specifications_Var_Pop_Order_By = {
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Works_Specifications_Var_Samp_Fields = {
  __typename?: 'works_specifications_var_samp_fields';
  dimensions_depth?: Maybe<Scalars['Float']>;
  dimensions_height?: Maybe<Scalars['Float']>;
  dimensions_width?: Maybe<Scalars['Float']>;
  number_of_editions?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "works_specifications" */
export type Works_Specifications_Var_Samp_Order_By = {
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Works_Specifications_Variance_Fields = {
  __typename?: 'works_specifications_variance_fields';
  dimensions_depth?: Maybe<Scalars['Float']>;
  dimensions_height?: Maybe<Scalars['Float']>;
  dimensions_width?: Maybe<Scalars['Float']>;
  number_of_editions?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "works_specifications" */
export type Works_Specifications_Variance_Order_By = {
  dimensions_depth?: Maybe<Order_By>;
  dimensions_height?: Maybe<Order_By>;
  dimensions_width?: Maybe<Order_By>;
  number_of_editions?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
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
  UpdatedAt = 'updated_at'
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

export type ApplicationFragment = (
  { __typename?: 'applications' }
  & Pick<Applications, 'id' | 'name' | 'group' | 'created_at' | 'updated_at' | 'statement' | 'residency' | 'database' | 'disclaimer' | 'payment_file'>
  & { edition: (
    { __typename?: 'editions' }
    & Pick<Editions, 'name'>
  ), files_aggregate: (
    { __typename?: 'works_files_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'works_files_aggregate_fields' }
      & Pick<Works_Files_Aggregate_Fields, 'count'>
      & { sum?: Maybe<(
        { __typename?: 'works_files_sum_fields' }
        & Pick<Works_Files_Sum_Fields, 'size'>
      )> }
    )> }
  ) }
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

export type GetApplicationsByEditionQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetApplicationsByEditionQuery = (
  { __typename?: 'query_root' }
  & { applications: Array<(
    { __typename?: 'applications' }
    & ApplicationFragment
  )> }
);

export type BaseQueryVariables = Exact<{ [key: string]: never; }>;


export type BaseQuery = { __typename: 'query_root' };

export type EditionFragment = (
  { __typename?: 'editions' }
  & Pick<Editions, 'id' | 'name' | 'current' | 'application_end' | 'application_start'>
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

export type GetAllEditionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEditionsQuery = (
  { __typename?: 'query_root' }
  & { editions: Array<(
    { __typename?: 'editions' }
    & EditionFragment
  )> }
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

export type SetCurrentEditionMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type SetCurrentEditionMutation = (
  { __typename?: 'mutation_root' }
  & { update_editions?: Maybe<(
    { __typename?: 'editions_mutation_response' }
    & Pick<Editions_Mutation_Response, 'affected_rows'>
  )>, update_editions_by_pk?: Maybe<(
    { __typename?: 'editions' }
    & EditionFragment
  )> }
);

export type DisableEditionsMutationVariables = Exact<{ [key: string]: never; }>;


export type DisableEditionsMutation = (
  { __typename?: 'mutation_root' }
  & { update_editions?: Maybe<(
    { __typename?: 'editions_mutation_response' }
    & Pick<Editions_Mutation_Response, 'affected_rows'>
  )> }
);

export type GetCurrentRoundQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentRoundQuery = (
  { __typename?: 'query_root' }
  & { rating_rounds: Array<(
    { __typename?: 'rating_rounds' }
    & Pick<Rating_Rounds, 'id'>
  )> }
);

export type WorkFragment = (
  { __typename?: 'works' }
  & Pick<Works, 'id' | 'portfolio'>
  & { files: Array<(
    { __typename?: 'works_files' }
    & WorkFileFragment
  )>, specifications: Array<(
    { __typename?: 'works_specifications' }
    & WorkSpecificationFragment
  )> }
);

export type WorkFileFragment = (
  { __typename?: 'works_files' }
  & Pick<Works_Files, 'id' | 'work_id' | 'application_id' | 'order' | 'mimetype' | 'key' | 'originalname' | 'size'>
);

export type WorkSpecificationFragment = (
  { __typename?: 'works_specifications' }
  & Pick<Works_Specifications, 'id' | 'work_id' | 'application_id' | 'medium' | 'year' | 'title' | 'order' | 'number_of_editions' | 'description' | 'dimensions_width' | 'dimensions_height' | 'dimensions_depth'>
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

export type AddPortfolioSpecificationMutationVariables = Exact<{
  application_id: Scalars['uuid'];
  work_id: Scalars['uuid'];
  order: Scalars['Int'];
}>;


export type AddPortfolioSpecificationMutation = (
  { __typename?: 'mutation_root' }
  & { insert_works_specifications_one?: Maybe<(
    { __typename?: 'works_specifications' }
    & WorkSpecificationFragment
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
  set: Works_Specifications_Set_Input;
  application_id: Scalars['uuid'];
}>;


export type UpdateSpecificationMutation = (
  { __typename?: 'mutation_root' }
  & { update_applications_by_pk?: Maybe<(
    { __typename?: 'applications' }
    & Pick<Applications, 'id' | 'updated_at'>
  )>, update_works_specifications_by_pk?: Maybe<(
    { __typename?: 'works_specifications' }
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
  objects: Array<Works_Specifications_Insert_Input> | Works_Specifications_Insert_Input;
}>;


export type UpdateSpecificationsOrderMutation = (
  { __typename?: 'mutation_root' }
  & { insert_works_specifications?: Maybe<(
    { __typename?: 'works_specifications_mutation_response' }
    & { returning: Array<(
      { __typename?: 'works_specifications' }
      & Pick<Works_Specifications, 'id' | 'order'>
    )> }
  )> }
);

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
  payment_file
  edition {
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
}
    `;
export const EditionFragmentDoc = gql`
    fragment Edition on editions {
  id
  name
  current
  application_end
  application_start
  applications_aggregate {
    aggregate {
      count
    }
  }
}
    `;
export const WorkFileFragmentDoc = gql`
    fragment WorkFile on works_files {
  id
  work_id
  application_id
  order
  mimetype
  key
  originalname
  size
}
    `;
export const WorkSpecificationFragmentDoc = gql`
    fragment WorkSpecification on works_specifications {
  id
  work_id
  application_id
  medium
  year
  title
  order
  number_of_editions
  description
  dimensions_width
  dimensions_height
  dimensions_depth
}
    `;
export const WorkFragmentDoc = gql`
    fragment Work on works {
  id
  portfolio
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
  applications {
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
export const GetApplicationsByEditionDocument = gql`
    query GetApplicationsByEdition($id: Int!) {
  applications(where: {edition: {id: {_eq: $id}}}) {
    ...Application
  }
}
    ${ApplicationFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetApplicationsByEditionGQL extends Apollo.Query<GetApplicationsByEditionQuery, GetApplicationsByEditionQueryVariables> {
    document = GetApplicationsByEditionDocument;
    
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
export const GetAllEditionsDocument = gql`
    query GetAllEditions {
  editions {
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
export const SetCurrentEditionDocument = gql`
    mutation SetCurrentEdition($id: Int!) {
  update_editions(_set: {current: null}, where: {current: {_eq: true}}) {
    affected_rows
  }
  update_editions_by_pk(pk_columns: {id: $id}, _set: {current: true}) {
    ...Edition
  }
}
    ${EditionFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SetCurrentEditionGQL extends Apollo.Mutation<SetCurrentEditionMutation, SetCurrentEditionMutationVariables> {
    document = SetCurrentEditionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DisableEditionsDocument = gql`
    mutation DisableEditions {
  update_editions(_set: {current: null}, where: {current: {_eq: true}}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DisableEditionsGQL extends Apollo.Mutation<DisableEditionsMutation, DisableEditionsMutationVariables> {
    document = DisableEditionsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetCurrentRoundDocument = gql`
    query GetCurrentRound {
  rating_rounds(
    where: {_and: {edition: {current: {_eq: true}}, _not: {next_round: {}}}}
  ) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCurrentRoundGQL extends Apollo.Query<GetCurrentRoundQuery, GetCurrentRoundQueryVariables> {
    document = GetCurrentRoundDocument;
    
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
export const AddPortfolioSpecificationDocument = gql`
    mutation AddPortfolioSpecification($application_id: uuid!, $work_id: uuid!, $order: Int!) {
  insert_works_specifications_one(
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
    mutation UpdateSpecification($id: uuid!, $set: works_specifications_set_input!, $application_id: uuid!) {
  update_applications_by_pk(
    pk_columns: {id: $application_id}
    _set: {updated_at: "now()"}
  ) {
    id
    updated_at
  }
  update_works_specifications_by_pk(pk_columns: {id: $id}, _set: $set) {
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
    mutation UpdateSpecificationsOrder($objects: [works_specifications_insert_input!]!) {
  insert_works_specifications(
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

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    