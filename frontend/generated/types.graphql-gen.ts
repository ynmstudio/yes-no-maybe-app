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

/** columns and relationships of "editions" */
export type Editions = {
  __typename?: 'editions';
  current?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  name: Scalars['String'];
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
  current?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "editions" */
export enum Editions_Constraint {
  /** unique or primary key constraint */
  EditionsCurrentKey = 'editions_current_key',
  /** unique or primary key constraint */
  EditionsPkey = 'editions_pkey'
}

/** input type for incrementing integer column in table "editions" */
export type Editions_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "editions" */
export type Editions_Insert_Input = {
  current?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Editions_Max_Fields = {
  __typename?: 'editions_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "editions" */
export type Editions_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Editions_Min_Fields = {
  __typename?: 'editions_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "editions" */
export type Editions_Min_Order_By = {
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
  current?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "editions" */
export type Editions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "editions" */
export enum Editions_Select_Column {
  /** column name */
  Current = 'current',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "editions" */
export type Editions_Set_Input = {
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
  /** delete data from the table: "editions" */
  delete_editions?: Maybe<Editions_Mutation_Response>;
  /** delete single row from the table: "editions" */
  delete_editions_by_pk?: Maybe<Editions>;
  /** insert data into the table: "editions" */
  insert_editions?: Maybe<Editions_Mutation_Response>;
  /** insert a single row into the table: "editions" */
  insert_editions_one?: Maybe<Editions>;
  /** update data of the table: "editions" */
  update_editions?: Maybe<Editions_Mutation_Response>;
  /** update single row of the table: "editions" */
  update_editions_by_pk?: Maybe<Editions>;
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
  /** fetch data from the table: "editions" */
  editions: Array<Editions>;
  /** fetch aggregated fields from the table: "editions" */
  editions_aggregate: Editions_Aggregate;
  /** fetch data from the table: "editions" using primary key columns */
  editions_by_pk?: Maybe<Editions>;
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
  /** fetch data from the table: "editions" */
  editions: Array<Editions>;
  /** fetch aggregated fields from the table: "editions" */
  editions_aggregate: Editions_Aggregate;
  /** fetch data from the table: "editions" using primary key columns */
  editions_by_pk?: Maybe<Editions>;
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

export type BaseQueryVariables = Exact<{ [key: string]: never; }>;


export type BaseQuery = { __typename: 'query_root' };

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
    & Pick<Editions, 'name'>
  )> }
);

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
export const SetCurrentEditionDocument = gql`
    mutation SetCurrentEdition($id: Int!) {
  update_editions(_set: {current: null}, where: {current: {_eq: true}}) {
    affected_rows
  }
  update_editions_by_pk(pk_columns: {id: $id}, _set: {current: true}) {
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SetCurrentEditionGQL extends Apollo.Mutation<SetCurrentEditionMutation, SetCurrentEditionMutationVariables> {
    document = SetCurrentEditionDocument;
    
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
    