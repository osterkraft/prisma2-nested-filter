/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as ctx from "../src/types"
import * as photon from "@generated/photon"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BooleanFilter: { // input type
    equals?: boolean | null; // Boolean
    not?: boolean | null; // Boolean
  }
  NullableStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: string | null; // String
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  PostCreateManyWithoutPostsInput: { // input type
    connect?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    create?: NexusGenInputs['PostCreateWithoutAuthorInput'][] | null; // [PostCreateWithoutAuthorInput!]
  }
  PostCreateWithoutAuthorInput: { // input type
    content?: string | null; // String
    createdAt?: any | null; // DateTime
    id?: string | null; // ID
    published?: boolean | null; // Boolean
    tags?: NexusGenInputs['TagCreateManyWithoutTagsInput'] | null; // TagCreateManyWithoutTagsInput
    title: string; // String!
    updatedAt?: any | null; // DateTime
  }
  PostTagsFilter: { // input type
    equals?: any | null; // DateTime
    gt?: any | null; // DateTime
    gte?: any | null; // DateTime
    in?: any[] | null; // [DateTime!]
    lt?: any | null; // DateTime
    lte?: any | null; // DateTime
    not?: any | null; // DateTime
    notIn?: any[] | null; // [DateTime!]
  }
  PostTagsWhereInput: { // input type
    AND?: NexusGenInputs['PostTagsWhereInput'][] | null; // [PostTagsWhereInput!]
    createdAt?: NexusGenInputs['PostTagsFilter'] | null; // PostTagsFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['PostTagsWhereInput'][] | null; // [PostTagsWhereInput!]
    OR?: NexusGenInputs['PostTagsWhereInput'][] | null; // [PostTagsWhereInput!]
    posts?: NexusGenInputs['PostTagsFilter'] | null; // PostTagsFilter
    updatedAt?: NexusGenInputs['PostTagsFilter'] | null; // PostTagsFilter
  }
  PostWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  QueryFindManyPostFilter: { // input type
    equals?: any | null; // DateTime
    gt?: any | null; // DateTime
    gte?: any | null; // DateTime
    in?: any[] | null; // [DateTime!]
    lt?: any | null; // DateTime
    lte?: any | null; // DateTime
    not?: any | null; // DateTime
    notIn?: any[] | null; // [DateTime!]
  }
  QueryFindManyPostWhereInput: { // input type
    AND?: NexusGenInputs['QueryFindManyPostWhereInput'][] | null; // [QueryFindManyPostWhereInput!]
    author?: NexusGenInputs['QueryFindManyPostWhereInput'] | null; // QueryFindManyPostWhereInput
    content?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    createdAt?: NexusGenInputs['QueryFindManyPostFilter'] | null; // QueryFindManyPostFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['QueryFindManyPostWhereInput'][] | null; // [QueryFindManyPostWhereInput!]
    OR?: NexusGenInputs['QueryFindManyPostWhereInput'][] | null; // [QueryFindManyPostWhereInput!]
    published?: NexusGenInputs['BooleanFilter'] | null; // BooleanFilter
    tags?: NexusGenInputs['QueryFindManyPostFilter'] | null; // QueryFindManyPostFilter
    title?: NexusGenInputs['StringFilter'] | null; // StringFilter
    updatedAt?: NexusGenInputs['QueryFindManyPostFilter'] | null; // QueryFindManyPostFilter
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: string | null; // String
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  TagCreateInput: { // input type
    createdAt?: any | null; // DateTime
    id?: string | null; // ID
    name: string; // String!
    posts?: NexusGenInputs['PostCreateManyWithoutPostsInput'] | null; // PostCreateManyWithoutPostsInput
    updatedAt?: any | null; // DateTime
  }
  TagCreateManyWithoutTagsInput: { // input type
    connect?: NexusGenInputs['TagWhereUniqueInput'][] | null; // [TagWhereUniqueInput!]
    create?: NexusGenInputs['TagCreateWithoutPostsInput'][] | null; // [TagCreateWithoutPostsInput!]
  }
  TagCreateWithoutPostsInput: { // input type
    createdAt?: any | null; // DateTime
    id?: string | null; // ID
    name: string; // String!
    updatedAt?: any | null; // DateTime
  }
  TagWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  UserCreateInput: { // input type
    email: string; // String!
    id?: string | null; // ID
    name?: string | null; // String
    posts?: NexusGenInputs['PostCreateManyWithoutPostsInput'] | null; // PostCreateManyWithoutPostsInput
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Mutation: {};
  Post: photon.Post;
  Query: {};
  Tag: photon.Tag;
  User: photon.User;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  BooleanFilter: NexusGenInputs['BooleanFilter'];
  NullableStringFilter: NexusGenInputs['NullableStringFilter'];
  PostCreateManyWithoutPostsInput: NexusGenInputs['PostCreateManyWithoutPostsInput'];
  PostCreateWithoutAuthorInput: NexusGenInputs['PostCreateWithoutAuthorInput'];
  PostTagsFilter: NexusGenInputs['PostTagsFilter'];
  PostTagsWhereInput: NexusGenInputs['PostTagsWhereInput'];
  PostWhereUniqueInput: NexusGenInputs['PostWhereUniqueInput'];
  QueryFindManyPostFilter: NexusGenInputs['QueryFindManyPostFilter'];
  QueryFindManyPostWhereInput: NexusGenInputs['QueryFindManyPostWhereInput'];
  StringFilter: NexusGenInputs['StringFilter'];
  TagCreateInput: NexusGenInputs['TagCreateInput'];
  TagCreateManyWithoutTagsInput: NexusGenInputs['TagCreateManyWithoutTagsInput'];
  TagCreateWithoutPostsInput: NexusGenInputs['TagCreateWithoutPostsInput'];
  TagWhereUniqueInput: NexusGenInputs['TagWhereUniqueInput'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
}

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createDraft: NexusGenRootTypes['Post']; // Post!
    createTag: NexusGenRootTypes['Tag']; // Tag!
    deleteOnePost: NexusGenRootTypes['Post'] | null; // Post
    publish: NexusGenRootTypes['Post'] | null; // Post
    signupUser: NexusGenRootTypes['User']; // User!
  }
  Post: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    content: string | null; // String
    createdAt: any; // DateTime!
    id: string; // ID!
    published: boolean; // Boolean!
    tags: NexusGenRootTypes['Tag'][] | null; // [Tag!]
    title: string; // String!
    updatedAt: any; // DateTime!
  }
  Query: { // field return type
    feed: NexusGenRootTypes['Post'][]; // [Post!]!
    filterPosts: NexusGenRootTypes['Post'][]; // [Post!]!
    post: NexusGenRootTypes['Post'] | null; // Post
    posts: NexusGenRootTypes['Post'][] | null; // [Post!]
    users: NexusGenRootTypes['User'][] | null; // [User!]
  }
  Tag: { // field return type
    createdAt: any; // DateTime!
    id: string; // ID!
    name: string; // String!
    updatedAt: any; // DateTime!
  }
  User: { // field return type
    email: string; // String!
    id: string; // ID!
    name: string | null; // String
    posts: NexusGenRootTypes['Post'][] | null; // [Post!]
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createDraft: { // args
      authorEmail?: string | null; // String
      content?: string | null; // String
      title?: string | null; // String
    }
    createTag: { // args
      data: NexusGenInputs['TagCreateInput']; // TagCreateInput!
    }
    deleteOnePost: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    publish: { // args
      id?: string | null; // ID
    }
    signupUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
  }
  Post: {
    tags: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
      where?: NexusGenInputs['PostTagsWhereInput'] | null; // PostTagsWhereInput
    }
  }
  Query: {
    filterPosts: { // args
      searchString?: string | null; // String
    }
    post: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    posts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
      where?: NexusGenInputs['QueryFindManyPostWhereInput'] | null; // QueryFindManyPostWhereInput
    }
    users: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  User: {
    posts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Mutation" | "Post" | "Query" | "Tag" | "User";

export type NexusGenInputNames = "BooleanFilter" | "NullableStringFilter" | "PostCreateManyWithoutPostsInput" | "PostCreateWithoutAuthorInput" | "PostTagsFilter" | "PostTagsWhereInput" | "PostWhereUniqueInput" | "QueryFindManyPostFilter" | "QueryFindManyPostWhereInput" | "StringFilter" | "TagCreateInput" | "TagCreateManyWithoutTagsInput" | "TagCreateWithoutPostsInput" | "TagWhereUniqueInput" | "UserCreateInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ctx.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}