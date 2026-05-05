
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Site
 * 
 */
export type Site = $Result.DefaultSelection<Prisma.$SitePayload>
/**
 * Model Page
 * 
 */
export type Page = $Result.DefaultSelection<Prisma.$PagePayload>
/**
 * Model PageVersion
 * 
 */
export type PageVersion = $Result.DefaultSelection<Prisma.$PageVersionPayload>
/**
 * Model CrawlLog
 * 
 */
export type CrawlLog = $Result.DefaultSelection<Prisma.$CrawlLogPayload>
/**
 * Model AppSetting
 * 
 */
export type AppSetting = $Result.DefaultSelection<Prisma.$AppSettingPayload>
/**
 * Model Keyword
 * 
 */
export type Keyword = $Result.DefaultSelection<Prisma.$KeywordPayload>
/**
 * Model KeywordCluster
 * 
 */
export type KeywordCluster = $Result.DefaultSelection<Prisma.$KeywordClusterPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Sites
 * const sites = await prisma.site.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Sites
   * const sites = await prisma.site.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.site`: Exposes CRUD operations for the **Site** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sites
    * const sites = await prisma.site.findMany()
    * ```
    */
  get site(): Prisma.SiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.page`: Exposes CRUD operations for the **Page** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pages
    * const pages = await prisma.page.findMany()
    * ```
    */
  get page(): Prisma.PageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pageVersion`: Exposes CRUD operations for the **PageVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageVersions
    * const pageVersions = await prisma.pageVersion.findMany()
    * ```
    */
  get pageVersion(): Prisma.PageVersionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crawlLog`: Exposes CRUD operations for the **CrawlLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CrawlLogs
    * const crawlLogs = await prisma.crawlLog.findMany()
    * ```
    */
  get crawlLog(): Prisma.CrawlLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appSetting`: Exposes CRUD operations for the **AppSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppSettings
    * const appSettings = await prisma.appSetting.findMany()
    * ```
    */
  get appSetting(): Prisma.AppSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keyword`: Exposes CRUD operations for the **Keyword** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keywords
    * const keywords = await prisma.keyword.findMany()
    * ```
    */
  get keyword(): Prisma.KeywordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keywordCluster`: Exposes CRUD operations for the **KeywordCluster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KeywordClusters
    * const keywordClusters = await prisma.keywordCluster.findMany()
    * ```
    */
  get keywordCluster(): Prisma.KeywordClusterDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Site: 'Site',
    Page: 'Page',
    PageVersion: 'PageVersion',
    CrawlLog: 'CrawlLog',
    AppSetting: 'AppSetting',
    Keyword: 'Keyword',
    KeywordCluster: 'KeywordCluster'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "site" | "page" | "pageVersion" | "crawlLog" | "appSetting" | "keyword" | "keywordCluster"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Site: {
        payload: Prisma.$SitePayload<ExtArgs>
        fields: Prisma.SiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findFirst: {
            args: Prisma.SiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findMany: {
            args: Prisma.SiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          create: {
            args: Prisma.SiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          createMany: {
            args: Prisma.SiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          delete: {
            args: Prisma.SiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          update: {
            args: Prisma.SiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          deleteMany: {
            args: Prisma.SiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          upsert: {
            args: Prisma.SiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          aggregate: {
            args: Prisma.SiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSite>
          }
          groupBy: {
            args: Prisma.SiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteCountArgs<ExtArgs>
            result: $Utils.Optional<SiteCountAggregateOutputType> | number
          }
        }
      }
      Page: {
        payload: Prisma.$PagePayload<ExtArgs>
        fields: Prisma.PageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findFirst: {
            args: Prisma.PageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findMany: {
            args: Prisma.PageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          create: {
            args: Prisma.PageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          createMany: {
            args: Prisma.PageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          delete: {
            args: Prisma.PageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          update: {
            args: Prisma.PageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          deleteMany: {
            args: Prisma.PageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          upsert: {
            args: Prisma.PageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          aggregate: {
            args: Prisma.PageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePage>
          }
          groupBy: {
            args: Prisma.PageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageCountArgs<ExtArgs>
            result: $Utils.Optional<PageCountAggregateOutputType> | number
          }
        }
      }
      PageVersion: {
        payload: Prisma.$PageVersionPayload<ExtArgs>
        fields: Prisma.PageVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVersionPayload>
          }
          findFirst: {
            args: Prisma.PageVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVersionPayload>
          }
          findMany: {
            args: Prisma.PageVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVersionPayload>[]
          }
          create: {
            args: Prisma.PageVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVersionPayload>
          }
          createMany: {
            args: Prisma.PageVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVersionPayload>[]
          }
          delete: {
            args: Prisma.PageVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVersionPayload>
          }
          update: {
            args: Prisma.PageVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVersionPayload>
          }
          deleteMany: {
            args: Prisma.PageVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageVersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVersionPayload>[]
          }
          upsert: {
            args: Prisma.PageVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVersionPayload>
          }
          aggregate: {
            args: Prisma.PageVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePageVersion>
          }
          groupBy: {
            args: Prisma.PageVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageVersionCountArgs<ExtArgs>
            result: $Utils.Optional<PageVersionCountAggregateOutputType> | number
          }
        }
      }
      CrawlLog: {
        payload: Prisma.$CrawlLogPayload<ExtArgs>
        fields: Prisma.CrawlLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CrawlLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CrawlLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlLogPayload>
          }
          findFirst: {
            args: Prisma.CrawlLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CrawlLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlLogPayload>
          }
          findMany: {
            args: Prisma.CrawlLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlLogPayload>[]
          }
          create: {
            args: Prisma.CrawlLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlLogPayload>
          }
          createMany: {
            args: Prisma.CrawlLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CrawlLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlLogPayload>[]
          }
          delete: {
            args: Prisma.CrawlLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlLogPayload>
          }
          update: {
            args: Prisma.CrawlLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlLogPayload>
          }
          deleteMany: {
            args: Prisma.CrawlLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CrawlLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CrawlLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlLogPayload>[]
          }
          upsert: {
            args: Prisma.CrawlLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlLogPayload>
          }
          aggregate: {
            args: Prisma.CrawlLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrawlLog>
          }
          groupBy: {
            args: Prisma.CrawlLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<CrawlLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.CrawlLogCountArgs<ExtArgs>
            result: $Utils.Optional<CrawlLogCountAggregateOutputType> | number
          }
        }
      }
      AppSetting: {
        payload: Prisma.$AppSettingPayload<ExtArgs>
        fields: Prisma.AppSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          findFirst: {
            args: Prisma.AppSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          findMany: {
            args: Prisma.AppSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>[]
          }
          create: {
            args: Prisma.AppSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          createMany: {
            args: Prisma.AppSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>[]
          }
          delete: {
            args: Prisma.AppSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          update: {
            args: Prisma.AppSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          deleteMany: {
            args: Prisma.AppSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>[]
          }
          upsert: {
            args: Prisma.AppSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          aggregate: {
            args: Prisma.AppSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppSetting>
          }
          groupBy: {
            args: Prisma.AppSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppSettingCountArgs<ExtArgs>
            result: $Utils.Optional<AppSettingCountAggregateOutputType> | number
          }
        }
      }
      Keyword: {
        payload: Prisma.$KeywordPayload<ExtArgs>
        fields: Prisma.KeywordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeywordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeywordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          findFirst: {
            args: Prisma.KeywordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeywordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          findMany: {
            args: Prisma.KeywordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>[]
          }
          create: {
            args: Prisma.KeywordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          createMany: {
            args: Prisma.KeywordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KeywordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>[]
          }
          delete: {
            args: Prisma.KeywordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          update: {
            args: Prisma.KeywordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          deleteMany: {
            args: Prisma.KeywordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeywordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KeywordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>[]
          }
          upsert: {
            args: Prisma.KeywordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          aggregate: {
            args: Prisma.KeywordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeyword>
          }
          groupBy: {
            args: Prisma.KeywordGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeywordGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeywordCountArgs<ExtArgs>
            result: $Utils.Optional<KeywordCountAggregateOutputType> | number
          }
        }
      }
      KeywordCluster: {
        payload: Prisma.$KeywordClusterPayload<ExtArgs>
        fields: Prisma.KeywordClusterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeywordClusterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordClusterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeywordClusterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordClusterPayload>
          }
          findFirst: {
            args: Prisma.KeywordClusterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordClusterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeywordClusterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordClusterPayload>
          }
          findMany: {
            args: Prisma.KeywordClusterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordClusterPayload>[]
          }
          create: {
            args: Prisma.KeywordClusterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordClusterPayload>
          }
          createMany: {
            args: Prisma.KeywordClusterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KeywordClusterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordClusterPayload>[]
          }
          delete: {
            args: Prisma.KeywordClusterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordClusterPayload>
          }
          update: {
            args: Prisma.KeywordClusterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordClusterPayload>
          }
          deleteMany: {
            args: Prisma.KeywordClusterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeywordClusterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KeywordClusterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordClusterPayload>[]
          }
          upsert: {
            args: Prisma.KeywordClusterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordClusterPayload>
          }
          aggregate: {
            args: Prisma.KeywordClusterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeywordCluster>
          }
          groupBy: {
            args: Prisma.KeywordClusterGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeywordClusterGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeywordClusterCountArgs<ExtArgs>
            result: $Utils.Optional<KeywordClusterCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    site?: SiteOmit
    page?: PageOmit
    pageVersion?: PageVersionOmit
    crawlLog?: CrawlLogOmit
    appSetting?: AppSettingOmit
    keyword?: KeywordOmit
    keywordCluster?: KeywordClusterOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SiteCountOutputType
   */

  export type SiteCountOutputType = {
    crawlLogs: number
    pages: number
    keywords: number
  }

  export type SiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crawlLogs?: boolean | SiteCountOutputTypeCountCrawlLogsArgs
    pages?: boolean | SiteCountOutputTypeCountPagesArgs
    keywords?: boolean | SiteCountOutputTypeCountKeywordsArgs
  }

  // Custom InputTypes
  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteCountOutputType
     */
    select?: SiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountCrawlLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrawlLogWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountKeywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeywordWhereInput
  }


  /**
   * Count Type PageCountOutputType
   */

  export type PageCountOutputType = {
    versions: number
    keywordEntities: number
  }

  export type PageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | PageCountOutputTypeCountVersionsArgs
    keywordEntities?: boolean | PageCountOutputTypeCountKeywordEntitiesArgs
  }

  // Custom InputTypes
  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCountOutputType
     */
    select?: PageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageVersionWhereInput
  }

  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeCountKeywordEntitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeywordWhereInput
  }


  /**
   * Count Type KeywordClusterCountOutputType
   */

  export type KeywordClusterCountOutputType = {
    keywords: number
  }

  export type KeywordClusterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keywords?: boolean | KeywordClusterCountOutputTypeCountKeywordsArgs
  }

  // Custom InputTypes
  /**
   * KeywordClusterCountOutputType without action
   */
  export type KeywordClusterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordClusterCountOutputType
     */
    select?: KeywordClusterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KeywordClusterCountOutputType without action
   */
  export type KeywordClusterCountOutputTypeCountKeywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeywordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Site
   */

  export type AggregateSite = {
    _count: SiteCountAggregateOutputType | null
    _avg: SiteAvgAggregateOutputType | null
    _sum: SiteSumAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  export type SiteAvgAggregateOutputType = {
    progress: number | null
    pagesCount: number | null
    seoScore: number | null
  }

  export type SiteSumAggregateOutputType = {
    progress: number | null
    pagesCount: number | null
    seoScore: number | null
  }

  export type SiteMinAggregateOutputType = {
    id: string | null
    name: string | null
    domain: string | null
    country: string | null
    status: string | null
    progress: number | null
    pagesCount: number | null
    seoScore: number | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    domain: string | null
    country: string | null
    status: string | null
    progress: number | null
    pagesCount: number | null
    seoScore: number | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteCountAggregateOutputType = {
    id: number
    name: number
    domain: number
    country: number
    status: number
    progress: number
    pagesCount: number
    seoScore: number
    language: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SiteAvgAggregateInputType = {
    progress?: true
    pagesCount?: true
    seoScore?: true
  }

  export type SiteSumAggregateInputType = {
    progress?: true
    pagesCount?: true
    seoScore?: true
  }

  export type SiteMinAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    country?: true
    status?: true
    progress?: true
    pagesCount?: true
    seoScore?: true
    language?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteMaxAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    country?: true
    status?: true
    progress?: true
    pagesCount?: true
    seoScore?: true
    language?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteCountAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    country?: true
    status?: true
    progress?: true
    pagesCount?: true
    seoScore?: true
    language?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Site to aggregate.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sites
    **/
    _count?: true | SiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteMaxAggregateInputType
  }

  export type GetSiteAggregateType<T extends SiteAggregateArgs> = {
        [P in keyof T & keyof AggregateSite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSite[P]>
      : GetScalarType<T[P], AggregateSite[P]>
  }




  export type SiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithAggregationInput | SiteOrderByWithAggregationInput[]
    by: SiteScalarFieldEnum[] | SiteScalarFieldEnum
    having?: SiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteCountAggregateInputType | true
    _avg?: SiteAvgAggregateInputType
    _sum?: SiteSumAggregateInputType
    _min?: SiteMinAggregateInputType
    _max?: SiteMaxAggregateInputType
  }

  export type SiteGroupByOutputType = {
    id: string
    name: string
    domain: string
    country: string
    status: string
    progress: number
    pagesCount: number
    seoScore: number
    language: string
    createdAt: Date
    updatedAt: Date
    _count: SiteCountAggregateOutputType | null
    _avg: SiteAvgAggregateOutputType | null
    _sum: SiteSumAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  type GetSiteGroupByPayload<T extends SiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteGroupByOutputType[P]>
            : GetScalarType<T[P], SiteGroupByOutputType[P]>
        }
      >
    >


  export type SiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    country?: boolean
    status?: boolean
    progress?: boolean
    pagesCount?: boolean
    seoScore?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    crawlLogs?: boolean | Site$crawlLogsArgs<ExtArgs>
    pages?: boolean | Site$pagesArgs<ExtArgs>
    keywords?: boolean | Site$keywordsArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    country?: boolean
    status?: boolean
    progress?: boolean
    pagesCount?: boolean
    seoScore?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["site"]>

  export type SiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    country?: boolean
    status?: boolean
    progress?: boolean
    pagesCount?: boolean
    seoScore?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["site"]>

  export type SiteSelectScalar = {
    id?: boolean
    name?: boolean
    domain?: boolean
    country?: boolean
    status?: boolean
    progress?: boolean
    pagesCount?: boolean
    seoScore?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "domain" | "country" | "status" | "progress" | "pagesCount" | "seoScore" | "language" | "createdAt" | "updatedAt", ExtArgs["result"]["site"]>
  export type SiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crawlLogs?: boolean | Site$crawlLogsArgs<ExtArgs>
    pages?: boolean | Site$pagesArgs<ExtArgs>
    keywords?: boolean | Site$keywordsArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Site"
    objects: {
      crawlLogs: Prisma.$CrawlLogPayload<ExtArgs>[]
      pages: Prisma.$PagePayload<ExtArgs>[]
      keywords: Prisma.$KeywordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      domain: string
      country: string
      status: string
      progress: number
      pagesCount: number
      seoScore: number
      language: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["site"]>
    composites: {}
  }

  type SiteGetPayload<S extends boolean | null | undefined | SiteDefaultArgs> = $Result.GetResult<Prisma.$SitePayload, S>

  type SiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteCountAggregateInputType | true
    }

  export interface SiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Site'], meta: { name: 'Site' } }
    /**
     * Find zero or one Site that matches the filter.
     * @param {SiteFindUniqueArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteFindUniqueArgs>(args: SelectSubset<T, SiteFindUniqueArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Site that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteFindUniqueOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteFindFirstArgs>(args?: SelectSubset<T, SiteFindFirstArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sites
     * const sites = await prisma.site.findMany()
     * 
     * // Get first 10 Sites
     * const sites = await prisma.site.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteWithIdOnly = await prisma.site.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteFindManyArgs>(args?: SelectSubset<T, SiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Site.
     * @param {SiteCreateArgs} args - Arguments to create a Site.
     * @example
     * // Create one Site
     * const Site = await prisma.site.create({
     *   data: {
     *     // ... data to create a Site
     *   }
     * })
     * 
     */
    create<T extends SiteCreateArgs>(args: SelectSubset<T, SiteCreateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sites.
     * @param {SiteCreateManyArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteCreateManyArgs>(args?: SelectSubset<T, SiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sites and returns the data saved in the database.
     * @param {SiteCreateManyAndReturnArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Site.
     * @param {SiteDeleteArgs} args - Arguments to delete one Site.
     * @example
     * // Delete one Site
     * const Site = await prisma.site.delete({
     *   where: {
     *     // ... filter to delete one Site
     *   }
     * })
     * 
     */
    delete<T extends SiteDeleteArgs>(args: SelectSubset<T, SiteDeleteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Site.
     * @param {SiteUpdateArgs} args - Arguments to update one Site.
     * @example
     * // Update one Site
     * const site = await prisma.site.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteUpdateArgs>(args: SelectSubset<T, SiteUpdateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sites.
     * @param {SiteDeleteManyArgs} args - Arguments to filter Sites to delete.
     * @example
     * // Delete a few Sites
     * const { count } = await prisma.site.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteDeleteManyArgs>(args?: SelectSubset<T, SiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteUpdateManyArgs>(args: SelectSubset<T, SiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites and returns the data updated in the database.
     * @param {SiteUpdateManyAndReturnArgs} args - Arguments to update many Sites.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Site.
     * @param {SiteUpsertArgs} args - Arguments to update or create a Site.
     * @example
     * // Update or create a Site
     * const site = await prisma.site.upsert({
     *   create: {
     *     // ... data to create a Site
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Site we want to update
     *   }
     * })
     */
    upsert<T extends SiteUpsertArgs>(args: SelectSubset<T, SiteUpsertArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteCountArgs} args - Arguments to filter Sites to count.
     * @example
     * // Count the number of Sites
     * const count = await prisma.site.count({
     *   where: {
     *     // ... the filter for the Sites we want to count
     *   }
     * })
    **/
    count<T extends SiteCountArgs>(
      args?: Subset<T, SiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteAggregateArgs>(args: Subset<T, SiteAggregateArgs>): Prisma.PrismaPromise<GetSiteAggregateType<T>>

    /**
     * Group by Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteGroupByArgs['orderBy'] }
        : { orderBy?: SiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Site model
   */
  readonly fields: SiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Site.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    crawlLogs<T extends Site$crawlLogsArgs<ExtArgs> = {}>(args?: Subset<T, Site$crawlLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pages<T extends Site$pagesArgs<ExtArgs> = {}>(args?: Subset<T, Site$pagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    keywords<T extends Site$keywordsArgs<ExtArgs> = {}>(args?: Subset<T, Site$keywordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Site model
   */
  interface SiteFieldRefs {
    readonly id: FieldRef<"Site", 'String'>
    readonly name: FieldRef<"Site", 'String'>
    readonly domain: FieldRef<"Site", 'String'>
    readonly country: FieldRef<"Site", 'String'>
    readonly status: FieldRef<"Site", 'String'>
    readonly progress: FieldRef<"Site", 'Int'>
    readonly pagesCount: FieldRef<"Site", 'Int'>
    readonly seoScore: FieldRef<"Site", 'Int'>
    readonly language: FieldRef<"Site", 'String'>
    readonly createdAt: FieldRef<"Site", 'DateTime'>
    readonly updatedAt: FieldRef<"Site", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Site findUnique
   */
  export type SiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findUniqueOrThrow
   */
  export type SiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findFirst
   */
  export type SiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findFirstOrThrow
   */
  export type SiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findMany
   */
  export type SiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Sites to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site create
   */
  export type SiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Site.
     */
    data: XOR<SiteCreateInput, SiteUncheckedCreateInput>
  }

  /**
   * Site createMany
   */
  export type SiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Site createManyAndReturn
   */
  export type SiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Site update
   */
  export type SiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Site.
     */
    data: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
    /**
     * Choose, which Site to update.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site updateMany
   */
  export type SiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
  }

  /**
   * Site updateManyAndReturn
   */
  export type SiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
  }

  /**
   * Site upsert
   */
  export type SiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Site to update in case it exists.
     */
    where: SiteWhereUniqueInput
    /**
     * In case the Site found by the `where` argument doesn't exist, create a new Site with this data.
     */
    create: XOR<SiteCreateInput, SiteUncheckedCreateInput>
    /**
     * In case the Site was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
  }

  /**
   * Site delete
   */
  export type SiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter which Site to delete.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site deleteMany
   */
  export type SiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sites to delete
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to delete.
     */
    limit?: number
  }

  /**
   * Site.crawlLogs
   */
  export type Site$crawlLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
    where?: CrawlLogWhereInput
    orderBy?: CrawlLogOrderByWithRelationInput | CrawlLogOrderByWithRelationInput[]
    cursor?: CrawlLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CrawlLogScalarFieldEnum | CrawlLogScalarFieldEnum[]
  }

  /**
   * Site.pages
   */
  export type Site$pagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    where?: PageWhereInput
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    cursor?: PageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Site.keywords
   */
  export type Site$keywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    where?: KeywordWhereInput
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    cursor?: KeywordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Site without action
   */
  export type SiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
  }


  /**
   * Model Page
   */

  export type AggregatePage = {
    _count: PageCountAggregateOutputType | null
    _avg: PageAvgAggregateOutputType | null
    _sum: PageSumAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  export type PageAvgAggregateOutputType = {
    wordCount: number | null
    seoScore: number | null
    uxScore: number | null
    performance: number | null
  }

  export type PageSumAggregateOutputType = {
    wordCount: number | null
    seoScore: number | null
    uxScore: number | null
    performance: number | null
  }

  export type PageMinAggregateOutputType = {
    id: string | null
    url: string | null
    siteId: string | null
    title: string | null
    description: string | null
    h1: string | null
    wordCount: number | null
    content: string | null
    intent: string | null
    seoScore: number | null
    uxScore: number | null
    performance: number | null
    lastCrawledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    siteId: string | null
    title: string | null
    description: string | null
    h1: string | null
    wordCount: number | null
    content: string | null
    intent: string | null
    seoScore: number | null
    uxScore: number | null
    performance: number | null
    lastCrawledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageCountAggregateOutputType = {
    id: number
    url: number
    siteId: number
    title: number
    description: number
    h1: number
    h2: number
    h3: number
    wordCount: number
    content: number
    keywords: number
    intent: number
    seoScore: number
    uxScore: number
    performance: number
    issues: number
    suggestions: number
    lastCrawledAt: number
    images: number
    sections: number
    links: number
    technical: number
    accessibility: number
    indexing: number
    pageSpeed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PageAvgAggregateInputType = {
    wordCount?: true
    seoScore?: true
    uxScore?: true
    performance?: true
  }

  export type PageSumAggregateInputType = {
    wordCount?: true
    seoScore?: true
    uxScore?: true
    performance?: true
  }

  export type PageMinAggregateInputType = {
    id?: true
    url?: true
    siteId?: true
    title?: true
    description?: true
    h1?: true
    wordCount?: true
    content?: true
    intent?: true
    seoScore?: true
    uxScore?: true
    performance?: true
    lastCrawledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageMaxAggregateInputType = {
    id?: true
    url?: true
    siteId?: true
    title?: true
    description?: true
    h1?: true
    wordCount?: true
    content?: true
    intent?: true
    seoScore?: true
    uxScore?: true
    performance?: true
    lastCrawledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageCountAggregateInputType = {
    id?: true
    url?: true
    siteId?: true
    title?: true
    description?: true
    h1?: true
    h2?: true
    h3?: true
    wordCount?: true
    content?: true
    keywords?: true
    intent?: true
    seoScore?: true
    uxScore?: true
    performance?: true
    issues?: true
    suggestions?: true
    lastCrawledAt?: true
    images?: true
    sections?: true
    links?: true
    technical?: true
    accessibility?: true
    indexing?: true
    pageSpeed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page to aggregate.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pages
    **/
    _count?: true | PageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageMaxAggregateInputType
  }

  export type GetPageAggregateType<T extends PageAggregateArgs> = {
        [P in keyof T & keyof AggregatePage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage[P]>
      : GetScalarType<T[P], AggregatePage[P]>
  }




  export type PageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
    orderBy?: PageOrderByWithAggregationInput | PageOrderByWithAggregationInput[]
    by: PageScalarFieldEnum[] | PageScalarFieldEnum
    having?: PageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageCountAggregateInputType | true
    _avg?: PageAvgAggregateInputType
    _sum?: PageSumAggregateInputType
    _min?: PageMinAggregateInputType
    _max?: PageMaxAggregateInputType
  }

  export type PageGroupByOutputType = {
    id: string
    url: string
    siteId: string
    title: string | null
    description: string | null
    h1: string | null
    h2: JsonValue | null
    h3: JsonValue | null
    wordCount: number | null
    content: string | null
    keywords: JsonValue | null
    intent: string | null
    seoScore: number | null
    uxScore: number | null
    performance: number | null
    issues: JsonValue | null
    suggestions: JsonValue | null
    lastCrawledAt: Date | null
    images: JsonValue | null
    sections: JsonValue | null
    links: JsonValue | null
    technical: JsonValue | null
    accessibility: JsonValue | null
    indexing: JsonValue | null
    pageSpeed: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: PageCountAggregateOutputType | null
    _avg: PageAvgAggregateOutputType | null
    _sum: PageSumAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  type GetPageGroupByPayload<T extends PageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageGroupByOutputType[P]>
            : GetScalarType<T[P], PageGroupByOutputType[P]>
        }
      >
    >


  export type PageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    siteId?: boolean
    title?: boolean
    description?: boolean
    h1?: boolean
    h2?: boolean
    h3?: boolean
    wordCount?: boolean
    content?: boolean
    keywords?: boolean
    intent?: boolean
    seoScore?: boolean
    uxScore?: boolean
    performance?: boolean
    issues?: boolean
    suggestions?: boolean
    lastCrawledAt?: boolean
    images?: boolean
    sections?: boolean
    links?: boolean
    technical?: boolean
    accessibility?: boolean
    indexing?: boolean
    pageSpeed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    versions?: boolean | Page$versionsArgs<ExtArgs>
    keywordEntities?: boolean | Page$keywordEntitiesArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    siteId?: boolean
    title?: boolean
    description?: boolean
    h1?: boolean
    h2?: boolean
    h3?: boolean
    wordCount?: boolean
    content?: boolean
    keywords?: boolean
    intent?: boolean
    seoScore?: boolean
    uxScore?: boolean
    performance?: boolean
    issues?: boolean
    suggestions?: boolean
    lastCrawledAt?: boolean
    images?: boolean
    sections?: boolean
    links?: boolean
    technical?: boolean
    accessibility?: boolean
    indexing?: boolean
    pageSpeed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    siteId?: boolean
    title?: boolean
    description?: boolean
    h1?: boolean
    h2?: boolean
    h3?: boolean
    wordCount?: boolean
    content?: boolean
    keywords?: boolean
    intent?: boolean
    seoScore?: boolean
    uxScore?: boolean
    performance?: boolean
    issues?: boolean
    suggestions?: boolean
    lastCrawledAt?: boolean
    images?: boolean
    sections?: boolean
    links?: boolean
    technical?: boolean
    accessibility?: boolean
    indexing?: boolean
    pageSpeed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectScalar = {
    id?: boolean
    url?: boolean
    siteId?: boolean
    title?: boolean
    description?: boolean
    h1?: boolean
    h2?: boolean
    h3?: boolean
    wordCount?: boolean
    content?: boolean
    keywords?: boolean
    intent?: boolean
    seoScore?: boolean
    uxScore?: boolean
    performance?: boolean
    issues?: boolean
    suggestions?: boolean
    lastCrawledAt?: boolean
    images?: boolean
    sections?: boolean
    links?: boolean
    technical?: boolean
    accessibility?: boolean
    indexing?: boolean
    pageSpeed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "siteId" | "title" | "description" | "h1" | "h2" | "h3" | "wordCount" | "content" | "keywords" | "intent" | "seoScore" | "uxScore" | "performance" | "issues" | "suggestions" | "lastCrawledAt" | "images" | "sections" | "links" | "technical" | "accessibility" | "indexing" | "pageSpeed" | "createdAt" | "updatedAt", ExtArgs["result"]["page"]>
  export type PageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    versions?: boolean | Page$versionsArgs<ExtArgs>
    keywordEntities?: boolean | Page$keywordEntitiesArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }
  export type PageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }

  export type $PagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Page"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      versions: Prisma.$PageVersionPayload<ExtArgs>[]
      keywordEntities: Prisma.$KeywordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      siteId: string
      title: string | null
      description: string | null
      h1: string | null
      h2: Prisma.JsonValue | null
      h3: Prisma.JsonValue | null
      wordCount: number | null
      content: string | null
      keywords: Prisma.JsonValue | null
      intent: string | null
      seoScore: number | null
      uxScore: number | null
      performance: number | null
      issues: Prisma.JsonValue | null
      suggestions: Prisma.JsonValue | null
      lastCrawledAt: Date | null
      images: Prisma.JsonValue | null
      sections: Prisma.JsonValue | null
      links: Prisma.JsonValue | null
      technical: Prisma.JsonValue | null
      accessibility: Prisma.JsonValue | null
      indexing: Prisma.JsonValue | null
      pageSpeed: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["page"]>
    composites: {}
  }

  type PageGetPayload<S extends boolean | null | undefined | PageDefaultArgs> = $Result.GetResult<Prisma.$PagePayload, S>

  type PageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageCountAggregateInputType | true
    }

  export interface PageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Page'], meta: { name: 'Page' } }
    /**
     * Find zero or one Page that matches the filter.
     * @param {PageFindUniqueArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageFindUniqueArgs>(args: SelectSubset<T, PageFindUniqueArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Page that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageFindUniqueOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageFindUniqueOrThrowArgs>(args: SelectSubset<T, PageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageFindFirstArgs>(args?: SelectSubset<T, PageFindFirstArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageFindFirstOrThrowArgs>(args?: SelectSubset<T, PageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pages
     * const pages = await prisma.page.findMany()
     * 
     * // Get first 10 Pages
     * const pages = await prisma.page.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageWithIdOnly = await prisma.page.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageFindManyArgs>(args?: SelectSubset<T, PageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Page.
     * @param {PageCreateArgs} args - Arguments to create a Page.
     * @example
     * // Create one Page
     * const Page = await prisma.page.create({
     *   data: {
     *     // ... data to create a Page
     *   }
     * })
     * 
     */
    create<T extends PageCreateArgs>(args: SelectSubset<T, PageCreateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pages.
     * @param {PageCreateManyArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageCreateManyArgs>(args?: SelectSubset<T, PageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pages and returns the data saved in the database.
     * @param {PageCreateManyAndReturnArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageCreateManyAndReturnArgs>(args?: SelectSubset<T, PageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Page.
     * @param {PageDeleteArgs} args - Arguments to delete one Page.
     * @example
     * // Delete one Page
     * const Page = await prisma.page.delete({
     *   where: {
     *     // ... filter to delete one Page
     *   }
     * })
     * 
     */
    delete<T extends PageDeleteArgs>(args: SelectSubset<T, PageDeleteArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Page.
     * @param {PageUpdateArgs} args - Arguments to update one Page.
     * @example
     * // Update one Page
     * const page = await prisma.page.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageUpdateArgs>(args: SelectSubset<T, PageUpdateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pages.
     * @param {PageDeleteManyArgs} args - Arguments to filter Pages to delete.
     * @example
     * // Delete a few Pages
     * const { count } = await prisma.page.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageDeleteManyArgs>(args?: SelectSubset<T, PageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageUpdateManyArgs>(args: SelectSubset<T, PageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages and returns the data updated in the database.
     * @param {PageUpdateManyAndReturnArgs} args - Arguments to update many Pages.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageUpdateManyAndReturnArgs>(args: SelectSubset<T, PageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Page.
     * @param {PageUpsertArgs} args - Arguments to update or create a Page.
     * @example
     * // Update or create a Page
     * const page = await prisma.page.upsert({
     *   create: {
     *     // ... data to create a Page
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page we want to update
     *   }
     * })
     */
    upsert<T extends PageUpsertArgs>(args: SelectSubset<T, PageUpsertArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCountArgs} args - Arguments to filter Pages to count.
     * @example
     * // Count the number of Pages
     * const count = await prisma.page.count({
     *   where: {
     *     // ... the filter for the Pages we want to count
     *   }
     * })
    **/
    count<T extends PageCountArgs>(
      args?: Subset<T, PageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PageAggregateArgs>(args: Subset<T, PageAggregateArgs>): Prisma.PrismaPromise<GetPageAggregateType<T>>

    /**
     * Group by Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageGroupByArgs['orderBy'] }
        : { orderBy?: PageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Page model
   */
  readonly fields: PageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    versions<T extends Page$versionsArgs<ExtArgs> = {}>(args?: Subset<T, Page$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    keywordEntities<T extends Page$keywordEntitiesArgs<ExtArgs> = {}>(args?: Subset<T, Page$keywordEntitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Page model
   */
  interface PageFieldRefs {
    readonly id: FieldRef<"Page", 'String'>
    readonly url: FieldRef<"Page", 'String'>
    readonly siteId: FieldRef<"Page", 'String'>
    readonly title: FieldRef<"Page", 'String'>
    readonly description: FieldRef<"Page", 'String'>
    readonly h1: FieldRef<"Page", 'String'>
    readonly h2: FieldRef<"Page", 'Json'>
    readonly h3: FieldRef<"Page", 'Json'>
    readonly wordCount: FieldRef<"Page", 'Int'>
    readonly content: FieldRef<"Page", 'String'>
    readonly keywords: FieldRef<"Page", 'Json'>
    readonly intent: FieldRef<"Page", 'String'>
    readonly seoScore: FieldRef<"Page", 'Int'>
    readonly uxScore: FieldRef<"Page", 'Int'>
    readonly performance: FieldRef<"Page", 'Int'>
    readonly issues: FieldRef<"Page", 'Json'>
    readonly suggestions: FieldRef<"Page", 'Json'>
    readonly lastCrawledAt: FieldRef<"Page", 'DateTime'>
    readonly images: FieldRef<"Page", 'Json'>
    readonly sections: FieldRef<"Page", 'Json'>
    readonly links: FieldRef<"Page", 'Json'>
    readonly technical: FieldRef<"Page", 'Json'>
    readonly accessibility: FieldRef<"Page", 'Json'>
    readonly indexing: FieldRef<"Page", 'Json'>
    readonly pageSpeed: FieldRef<"Page", 'Json'>
    readonly createdAt: FieldRef<"Page", 'DateTime'>
    readonly updatedAt: FieldRef<"Page", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Page findUnique
   */
  export type PageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findUniqueOrThrow
   */
  export type PageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findFirst
   */
  export type PageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findFirstOrThrow
   */
  export type PageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findMany
   */
  export type PageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Pages to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page create
   */
  export type PageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to create a Page.
     */
    data: XOR<PageCreateInput, PageUncheckedCreateInput>
  }

  /**
   * Page createMany
   */
  export type PageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Page createManyAndReturn
   */
  export type PageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Page update
   */
  export type PageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to update a Page.
     */
    data: XOR<PageUpdateInput, PageUncheckedUpdateInput>
    /**
     * Choose, which Page to update.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page updateMany
   */
  export type PageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
  }

  /**
   * Page updateManyAndReturn
   */
  export type PageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Page upsert
   */
  export type PageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The filter to search for the Page to update in case it exists.
     */
    where: PageWhereUniqueInput
    /**
     * In case the Page found by the `where` argument doesn't exist, create a new Page with this data.
     */
    create: XOR<PageCreateInput, PageUncheckedCreateInput>
    /**
     * In case the Page was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageUpdateInput, PageUncheckedUpdateInput>
  }

  /**
   * Page delete
   */
  export type PageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter which Page to delete.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page deleteMany
   */
  export type PageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pages to delete
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to delete.
     */
    limit?: number
  }

  /**
   * Page.versions
   */
  export type Page$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVersion
     */
    select?: PageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVersion
     */
    omit?: PageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVersionInclude<ExtArgs> | null
    where?: PageVersionWhereInput
    orderBy?: PageVersionOrderByWithRelationInput | PageVersionOrderByWithRelationInput[]
    cursor?: PageVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageVersionScalarFieldEnum | PageVersionScalarFieldEnum[]
  }

  /**
   * Page.keywordEntities
   */
  export type Page$keywordEntitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    where?: KeywordWhereInput
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    cursor?: KeywordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Page without action
   */
  export type PageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
  }


  /**
   * Model PageVersion
   */

  export type AggregatePageVersion = {
    _count: PageVersionCountAggregateOutputType | null
    _avg: PageVersionAvgAggregateOutputType | null
    _sum: PageVersionSumAggregateOutputType | null
    _min: PageVersionMinAggregateOutputType | null
    _max: PageVersionMaxAggregateOutputType | null
  }

  export type PageVersionAvgAggregateOutputType = {
    version: number | null
    wordCount: number | null
    seoScore: number | null
    uxScore: number | null
    performance: number | null
  }

  export type PageVersionSumAggregateOutputType = {
    version: number | null
    wordCount: number | null
    seoScore: number | null
    uxScore: number | null
    performance: number | null
  }

  export type PageVersionMinAggregateOutputType = {
    id: string | null
    pageId: string | null
    version: number | null
    url: string | null
    title: string | null
    description: string | null
    h1: string | null
    wordCount: number | null
    content: string | null
    intent: string | null
    seoScore: number | null
    uxScore: number | null
    performance: number | null
    createdAt: Date | null
  }

  export type PageVersionMaxAggregateOutputType = {
    id: string | null
    pageId: string | null
    version: number | null
    url: string | null
    title: string | null
    description: string | null
    h1: string | null
    wordCount: number | null
    content: string | null
    intent: string | null
    seoScore: number | null
    uxScore: number | null
    performance: number | null
    createdAt: Date | null
  }

  export type PageVersionCountAggregateOutputType = {
    id: number
    pageId: number
    version: number
    url: number
    title: number
    description: number
    h1: number
    h2: number
    h3: number
    wordCount: number
    content: number
    issues: number
    suggestions: number
    keywords: number
    intent: number
    seoScore: number
    uxScore: number
    performance: number
    images: number
    sections: number
    links: number
    technical: number
    accessibility: number
    indexing: number
    pageSpeed: number
    createdAt: number
    _all: number
  }


  export type PageVersionAvgAggregateInputType = {
    version?: true
    wordCount?: true
    seoScore?: true
    uxScore?: true
    performance?: true
  }

  export type PageVersionSumAggregateInputType = {
    version?: true
    wordCount?: true
    seoScore?: true
    uxScore?: true
    performance?: true
  }

  export type PageVersionMinAggregateInputType = {
    id?: true
    pageId?: true
    version?: true
    url?: true
    title?: true
    description?: true
    h1?: true
    wordCount?: true
    content?: true
    intent?: true
    seoScore?: true
    uxScore?: true
    performance?: true
    createdAt?: true
  }

  export type PageVersionMaxAggregateInputType = {
    id?: true
    pageId?: true
    version?: true
    url?: true
    title?: true
    description?: true
    h1?: true
    wordCount?: true
    content?: true
    intent?: true
    seoScore?: true
    uxScore?: true
    performance?: true
    createdAt?: true
  }

  export type PageVersionCountAggregateInputType = {
    id?: true
    pageId?: true
    version?: true
    url?: true
    title?: true
    description?: true
    h1?: true
    h2?: true
    h3?: true
    wordCount?: true
    content?: true
    issues?: true
    suggestions?: true
    keywords?: true
    intent?: true
    seoScore?: true
    uxScore?: true
    performance?: true
    images?: true
    sections?: true
    links?: true
    technical?: true
    accessibility?: true
    indexing?: true
    pageSpeed?: true
    createdAt?: true
    _all?: true
  }

  export type PageVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageVersion to aggregate.
     */
    where?: PageVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageVersions to fetch.
     */
    orderBy?: PageVersionOrderByWithRelationInput | PageVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageVersions
    **/
    _count?: true | PageVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageVersionMaxAggregateInputType
  }

  export type GetPageVersionAggregateType<T extends PageVersionAggregateArgs> = {
        [P in keyof T & keyof AggregatePageVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageVersion[P]>
      : GetScalarType<T[P], AggregatePageVersion[P]>
  }




  export type PageVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageVersionWhereInput
    orderBy?: PageVersionOrderByWithAggregationInput | PageVersionOrderByWithAggregationInput[]
    by: PageVersionScalarFieldEnum[] | PageVersionScalarFieldEnum
    having?: PageVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageVersionCountAggregateInputType | true
    _avg?: PageVersionAvgAggregateInputType
    _sum?: PageVersionSumAggregateInputType
    _min?: PageVersionMinAggregateInputType
    _max?: PageVersionMaxAggregateInputType
  }

  export type PageVersionGroupByOutputType = {
    id: string
    pageId: string
    version: number
    url: string
    title: string | null
    description: string | null
    h1: string | null
    h2: JsonValue | null
    h3: JsonValue | null
    wordCount: number | null
    content: string | null
    issues: JsonValue | null
    suggestions: JsonValue | null
    keywords: JsonValue | null
    intent: string | null
    seoScore: number | null
    uxScore: number | null
    performance: number | null
    images: JsonValue | null
    sections: JsonValue | null
    links: JsonValue | null
    technical: JsonValue | null
    accessibility: JsonValue | null
    indexing: JsonValue | null
    pageSpeed: JsonValue | null
    createdAt: Date
    _count: PageVersionCountAggregateOutputType | null
    _avg: PageVersionAvgAggregateOutputType | null
    _sum: PageVersionSumAggregateOutputType | null
    _min: PageVersionMinAggregateOutputType | null
    _max: PageVersionMaxAggregateOutputType | null
  }

  type GetPageVersionGroupByPayload<T extends PageVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageVersionGroupByOutputType[P]>
            : GetScalarType<T[P], PageVersionGroupByOutputType[P]>
        }
      >
    >


  export type PageVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageId?: boolean
    version?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    h1?: boolean
    h2?: boolean
    h3?: boolean
    wordCount?: boolean
    content?: boolean
    issues?: boolean
    suggestions?: boolean
    keywords?: boolean
    intent?: boolean
    seoScore?: boolean
    uxScore?: boolean
    performance?: boolean
    images?: boolean
    sections?: boolean
    links?: boolean
    technical?: boolean
    accessibility?: boolean
    indexing?: boolean
    pageSpeed?: boolean
    createdAt?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageVersion"]>

  export type PageVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageId?: boolean
    version?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    h1?: boolean
    h2?: boolean
    h3?: boolean
    wordCount?: boolean
    content?: boolean
    issues?: boolean
    suggestions?: boolean
    keywords?: boolean
    intent?: boolean
    seoScore?: boolean
    uxScore?: boolean
    performance?: boolean
    images?: boolean
    sections?: boolean
    links?: boolean
    technical?: boolean
    accessibility?: boolean
    indexing?: boolean
    pageSpeed?: boolean
    createdAt?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageVersion"]>

  export type PageVersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageId?: boolean
    version?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    h1?: boolean
    h2?: boolean
    h3?: boolean
    wordCount?: boolean
    content?: boolean
    issues?: boolean
    suggestions?: boolean
    keywords?: boolean
    intent?: boolean
    seoScore?: boolean
    uxScore?: boolean
    performance?: boolean
    images?: boolean
    sections?: boolean
    links?: boolean
    technical?: boolean
    accessibility?: boolean
    indexing?: boolean
    pageSpeed?: boolean
    createdAt?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageVersion"]>

  export type PageVersionSelectScalar = {
    id?: boolean
    pageId?: boolean
    version?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    h1?: boolean
    h2?: boolean
    h3?: boolean
    wordCount?: boolean
    content?: boolean
    issues?: boolean
    suggestions?: boolean
    keywords?: boolean
    intent?: boolean
    seoScore?: boolean
    uxScore?: boolean
    performance?: boolean
    images?: boolean
    sections?: boolean
    links?: boolean
    technical?: boolean
    accessibility?: boolean
    indexing?: boolean
    pageSpeed?: boolean
    createdAt?: boolean
  }

  export type PageVersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pageId" | "version" | "url" | "title" | "description" | "h1" | "h2" | "h3" | "wordCount" | "content" | "issues" | "suggestions" | "keywords" | "intent" | "seoScore" | "uxScore" | "performance" | "images" | "sections" | "links" | "technical" | "accessibility" | "indexing" | "pageSpeed" | "createdAt", ExtArgs["result"]["pageVersion"]>
  export type PageVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
  }
  export type PageVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
  }
  export type PageVersionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
  }

  export type $PageVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PageVersion"
    objects: {
      page: Prisma.$PagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pageId: string
      version: number
      url: string
      title: string | null
      description: string | null
      h1: string | null
      h2: Prisma.JsonValue | null
      h3: Prisma.JsonValue | null
      wordCount: number | null
      content: string | null
      issues: Prisma.JsonValue | null
      suggestions: Prisma.JsonValue | null
      keywords: Prisma.JsonValue | null
      intent: string | null
      seoScore: number | null
      uxScore: number | null
      performance: number | null
      images: Prisma.JsonValue | null
      sections: Prisma.JsonValue | null
      links: Prisma.JsonValue | null
      technical: Prisma.JsonValue | null
      accessibility: Prisma.JsonValue | null
      indexing: Prisma.JsonValue | null
      pageSpeed: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["pageVersion"]>
    composites: {}
  }

  type PageVersionGetPayload<S extends boolean | null | undefined | PageVersionDefaultArgs> = $Result.GetResult<Prisma.$PageVersionPayload, S>

  type PageVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageVersionCountAggregateInputType | true
    }

  export interface PageVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PageVersion'], meta: { name: 'PageVersion' } }
    /**
     * Find zero or one PageVersion that matches the filter.
     * @param {PageVersionFindUniqueArgs} args - Arguments to find a PageVersion
     * @example
     * // Get one PageVersion
     * const pageVersion = await prisma.pageVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageVersionFindUniqueArgs>(args: SelectSubset<T, PageVersionFindUniqueArgs<ExtArgs>>): Prisma__PageVersionClient<$Result.GetResult<Prisma.$PageVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PageVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageVersionFindUniqueOrThrowArgs} args - Arguments to find a PageVersion
     * @example
     * // Get one PageVersion
     * const pageVersion = await prisma.pageVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, PageVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageVersionClient<$Result.GetResult<Prisma.$PageVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVersionFindFirstArgs} args - Arguments to find a PageVersion
     * @example
     * // Get one PageVersion
     * const pageVersion = await prisma.pageVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageVersionFindFirstArgs>(args?: SelectSubset<T, PageVersionFindFirstArgs<ExtArgs>>): Prisma__PageVersionClient<$Result.GetResult<Prisma.$PageVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVersionFindFirstOrThrowArgs} args - Arguments to find a PageVersion
     * @example
     * // Get one PageVersion
     * const pageVersion = await prisma.pageVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, PageVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageVersionClient<$Result.GetResult<Prisma.$PageVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PageVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageVersions
     * const pageVersions = await prisma.pageVersion.findMany()
     * 
     * // Get first 10 PageVersions
     * const pageVersions = await prisma.pageVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageVersionWithIdOnly = await prisma.pageVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageVersionFindManyArgs>(args?: SelectSubset<T, PageVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PageVersion.
     * @param {PageVersionCreateArgs} args - Arguments to create a PageVersion.
     * @example
     * // Create one PageVersion
     * const PageVersion = await prisma.pageVersion.create({
     *   data: {
     *     // ... data to create a PageVersion
     *   }
     * })
     * 
     */
    create<T extends PageVersionCreateArgs>(args: SelectSubset<T, PageVersionCreateArgs<ExtArgs>>): Prisma__PageVersionClient<$Result.GetResult<Prisma.$PageVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PageVersions.
     * @param {PageVersionCreateManyArgs} args - Arguments to create many PageVersions.
     * @example
     * // Create many PageVersions
     * const pageVersion = await prisma.pageVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageVersionCreateManyArgs>(args?: SelectSubset<T, PageVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PageVersions and returns the data saved in the database.
     * @param {PageVersionCreateManyAndReturnArgs} args - Arguments to create many PageVersions.
     * @example
     * // Create many PageVersions
     * const pageVersion = await prisma.pageVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PageVersions and only return the `id`
     * const pageVersionWithIdOnly = await prisma.pageVersion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, PageVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PageVersion.
     * @param {PageVersionDeleteArgs} args - Arguments to delete one PageVersion.
     * @example
     * // Delete one PageVersion
     * const PageVersion = await prisma.pageVersion.delete({
     *   where: {
     *     // ... filter to delete one PageVersion
     *   }
     * })
     * 
     */
    delete<T extends PageVersionDeleteArgs>(args: SelectSubset<T, PageVersionDeleteArgs<ExtArgs>>): Prisma__PageVersionClient<$Result.GetResult<Prisma.$PageVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PageVersion.
     * @param {PageVersionUpdateArgs} args - Arguments to update one PageVersion.
     * @example
     * // Update one PageVersion
     * const pageVersion = await prisma.pageVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageVersionUpdateArgs>(args: SelectSubset<T, PageVersionUpdateArgs<ExtArgs>>): Prisma__PageVersionClient<$Result.GetResult<Prisma.$PageVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PageVersions.
     * @param {PageVersionDeleteManyArgs} args - Arguments to filter PageVersions to delete.
     * @example
     * // Delete a few PageVersions
     * const { count } = await prisma.pageVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageVersionDeleteManyArgs>(args?: SelectSubset<T, PageVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageVersions
     * const pageVersion = await prisma.pageVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageVersionUpdateManyArgs>(args: SelectSubset<T, PageVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageVersions and returns the data updated in the database.
     * @param {PageVersionUpdateManyAndReturnArgs} args - Arguments to update many PageVersions.
     * @example
     * // Update many PageVersions
     * const pageVersion = await prisma.pageVersion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PageVersions and only return the `id`
     * const pageVersionWithIdOnly = await prisma.pageVersion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageVersionUpdateManyAndReturnArgs>(args: SelectSubset<T, PageVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PageVersion.
     * @param {PageVersionUpsertArgs} args - Arguments to update or create a PageVersion.
     * @example
     * // Update or create a PageVersion
     * const pageVersion = await prisma.pageVersion.upsert({
     *   create: {
     *     // ... data to create a PageVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageVersion we want to update
     *   }
     * })
     */
    upsert<T extends PageVersionUpsertArgs>(args: SelectSubset<T, PageVersionUpsertArgs<ExtArgs>>): Prisma__PageVersionClient<$Result.GetResult<Prisma.$PageVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PageVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVersionCountArgs} args - Arguments to filter PageVersions to count.
     * @example
     * // Count the number of PageVersions
     * const count = await prisma.pageVersion.count({
     *   where: {
     *     // ... the filter for the PageVersions we want to count
     *   }
     * })
    **/
    count<T extends PageVersionCountArgs>(
      args?: Subset<T, PageVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PageVersionAggregateArgs>(args: Subset<T, PageVersionAggregateArgs>): Prisma.PrismaPromise<GetPageVersionAggregateType<T>>

    /**
     * Group by PageVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PageVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageVersionGroupByArgs['orderBy'] }
        : { orderBy?: PageVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PageVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PageVersion model
   */
  readonly fields: PageVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    page<T extends PageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PageDefaultArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PageVersion model
   */
  interface PageVersionFieldRefs {
    readonly id: FieldRef<"PageVersion", 'String'>
    readonly pageId: FieldRef<"PageVersion", 'String'>
    readonly version: FieldRef<"PageVersion", 'Int'>
    readonly url: FieldRef<"PageVersion", 'String'>
    readonly title: FieldRef<"PageVersion", 'String'>
    readonly description: FieldRef<"PageVersion", 'String'>
    readonly h1: FieldRef<"PageVersion", 'String'>
    readonly h2: FieldRef<"PageVersion", 'Json'>
    readonly h3: FieldRef<"PageVersion", 'Json'>
    readonly wordCount: FieldRef<"PageVersion", 'Int'>
    readonly content: FieldRef<"PageVersion", 'String'>
    readonly issues: FieldRef<"PageVersion", 'Json'>
    readonly suggestions: FieldRef<"PageVersion", 'Json'>
    readonly keywords: FieldRef<"PageVersion", 'Json'>
    readonly intent: FieldRef<"PageVersion", 'String'>
    readonly seoScore: FieldRef<"PageVersion", 'Int'>
    readonly uxScore: FieldRef<"PageVersion", 'Int'>
    readonly performance: FieldRef<"PageVersion", 'Int'>
    readonly images: FieldRef<"PageVersion", 'Json'>
    readonly sections: FieldRef<"PageVersion", 'Json'>
    readonly links: FieldRef<"PageVersion", 'Json'>
    readonly technical: FieldRef<"PageVersion", 'Json'>
    readonly accessibility: FieldRef<"PageVersion", 'Json'>
    readonly indexing: FieldRef<"PageVersion", 'Json'>
    readonly pageSpeed: FieldRef<"PageVersion", 'Json'>
    readonly createdAt: FieldRef<"PageVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PageVersion findUnique
   */
  export type PageVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVersion
     */
    select?: PageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVersion
     */
    omit?: PageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVersionInclude<ExtArgs> | null
    /**
     * Filter, which PageVersion to fetch.
     */
    where: PageVersionWhereUniqueInput
  }

  /**
   * PageVersion findUniqueOrThrow
   */
  export type PageVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVersion
     */
    select?: PageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVersion
     */
    omit?: PageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVersionInclude<ExtArgs> | null
    /**
     * Filter, which PageVersion to fetch.
     */
    where: PageVersionWhereUniqueInput
  }

  /**
   * PageVersion findFirst
   */
  export type PageVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVersion
     */
    select?: PageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVersion
     */
    omit?: PageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVersionInclude<ExtArgs> | null
    /**
     * Filter, which PageVersion to fetch.
     */
    where?: PageVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageVersions to fetch.
     */
    orderBy?: PageVersionOrderByWithRelationInput | PageVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageVersions.
     */
    cursor?: PageVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageVersions.
     */
    distinct?: PageVersionScalarFieldEnum | PageVersionScalarFieldEnum[]
  }

  /**
   * PageVersion findFirstOrThrow
   */
  export type PageVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVersion
     */
    select?: PageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVersion
     */
    omit?: PageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVersionInclude<ExtArgs> | null
    /**
     * Filter, which PageVersion to fetch.
     */
    where?: PageVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageVersions to fetch.
     */
    orderBy?: PageVersionOrderByWithRelationInput | PageVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageVersions.
     */
    cursor?: PageVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageVersions.
     */
    distinct?: PageVersionScalarFieldEnum | PageVersionScalarFieldEnum[]
  }

  /**
   * PageVersion findMany
   */
  export type PageVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVersion
     */
    select?: PageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVersion
     */
    omit?: PageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVersionInclude<ExtArgs> | null
    /**
     * Filter, which PageVersions to fetch.
     */
    where?: PageVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageVersions to fetch.
     */
    orderBy?: PageVersionOrderByWithRelationInput | PageVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageVersions.
     */
    cursor?: PageVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageVersions.
     */
    distinct?: PageVersionScalarFieldEnum | PageVersionScalarFieldEnum[]
  }

  /**
   * PageVersion create
   */
  export type PageVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVersion
     */
    select?: PageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVersion
     */
    omit?: PageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a PageVersion.
     */
    data: XOR<PageVersionCreateInput, PageVersionUncheckedCreateInput>
  }

  /**
   * PageVersion createMany
   */
  export type PageVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PageVersions.
     */
    data: PageVersionCreateManyInput | PageVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PageVersion createManyAndReturn
   */
  export type PageVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVersion
     */
    select?: PageVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageVersion
     */
    omit?: PageVersionOmit<ExtArgs> | null
    /**
     * The data used to create many PageVersions.
     */
    data: PageVersionCreateManyInput | PageVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageVersion update
   */
  export type PageVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVersion
     */
    select?: PageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVersion
     */
    omit?: PageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a PageVersion.
     */
    data: XOR<PageVersionUpdateInput, PageVersionUncheckedUpdateInput>
    /**
     * Choose, which PageVersion to update.
     */
    where: PageVersionWhereUniqueInput
  }

  /**
   * PageVersion updateMany
   */
  export type PageVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PageVersions.
     */
    data: XOR<PageVersionUpdateManyMutationInput, PageVersionUncheckedUpdateManyInput>
    /**
     * Filter which PageVersions to update
     */
    where?: PageVersionWhereInput
    /**
     * Limit how many PageVersions to update.
     */
    limit?: number
  }

  /**
   * PageVersion updateManyAndReturn
   */
  export type PageVersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVersion
     */
    select?: PageVersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageVersion
     */
    omit?: PageVersionOmit<ExtArgs> | null
    /**
     * The data used to update PageVersions.
     */
    data: XOR<PageVersionUpdateManyMutationInput, PageVersionUncheckedUpdateManyInput>
    /**
     * Filter which PageVersions to update
     */
    where?: PageVersionWhereInput
    /**
     * Limit how many PageVersions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVersionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageVersion upsert
   */
  export type PageVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVersion
     */
    select?: PageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVersion
     */
    omit?: PageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the PageVersion to update in case it exists.
     */
    where: PageVersionWhereUniqueInput
    /**
     * In case the PageVersion found by the `where` argument doesn't exist, create a new PageVersion with this data.
     */
    create: XOR<PageVersionCreateInput, PageVersionUncheckedCreateInput>
    /**
     * In case the PageVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageVersionUpdateInput, PageVersionUncheckedUpdateInput>
  }

  /**
   * PageVersion delete
   */
  export type PageVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVersion
     */
    select?: PageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVersion
     */
    omit?: PageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVersionInclude<ExtArgs> | null
    /**
     * Filter which PageVersion to delete.
     */
    where: PageVersionWhereUniqueInput
  }

  /**
   * PageVersion deleteMany
   */
  export type PageVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageVersions to delete
     */
    where?: PageVersionWhereInput
    /**
     * Limit how many PageVersions to delete.
     */
    limit?: number
  }

  /**
   * PageVersion without action
   */
  export type PageVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVersion
     */
    select?: PageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVersion
     */
    omit?: PageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVersionInclude<ExtArgs> | null
  }


  /**
   * Model CrawlLog
   */

  export type AggregateCrawlLog = {
    _count: CrawlLogCountAggregateOutputType | null
    _min: CrawlLogMinAggregateOutputType | null
    _max: CrawlLogMaxAggregateOutputType | null
  }

  export type CrawlLogMinAggregateOutputType = {
    id: string | null
    siteId: string | null
    level: string | null
    message: string | null
    url: string | null
    createdAt: Date | null
  }

  export type CrawlLogMaxAggregateOutputType = {
    id: string | null
    siteId: string | null
    level: string | null
    message: string | null
    url: string | null
    createdAt: Date | null
  }

  export type CrawlLogCountAggregateOutputType = {
    id: number
    siteId: number
    level: number
    message: number
    url: number
    createdAt: number
    _all: number
  }


  export type CrawlLogMinAggregateInputType = {
    id?: true
    siteId?: true
    level?: true
    message?: true
    url?: true
    createdAt?: true
  }

  export type CrawlLogMaxAggregateInputType = {
    id?: true
    siteId?: true
    level?: true
    message?: true
    url?: true
    createdAt?: true
  }

  export type CrawlLogCountAggregateInputType = {
    id?: true
    siteId?: true
    level?: true
    message?: true
    url?: true
    createdAt?: true
    _all?: true
  }

  export type CrawlLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrawlLog to aggregate.
     */
    where?: CrawlLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlLogs to fetch.
     */
    orderBy?: CrawlLogOrderByWithRelationInput | CrawlLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CrawlLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CrawlLogs
    **/
    _count?: true | CrawlLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CrawlLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CrawlLogMaxAggregateInputType
  }

  export type GetCrawlLogAggregateType<T extends CrawlLogAggregateArgs> = {
        [P in keyof T & keyof AggregateCrawlLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrawlLog[P]>
      : GetScalarType<T[P], AggregateCrawlLog[P]>
  }




  export type CrawlLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrawlLogWhereInput
    orderBy?: CrawlLogOrderByWithAggregationInput | CrawlLogOrderByWithAggregationInput[]
    by: CrawlLogScalarFieldEnum[] | CrawlLogScalarFieldEnum
    having?: CrawlLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CrawlLogCountAggregateInputType | true
    _min?: CrawlLogMinAggregateInputType
    _max?: CrawlLogMaxAggregateInputType
  }

  export type CrawlLogGroupByOutputType = {
    id: string
    siteId: string
    level: string
    message: string
    url: string | null
    createdAt: Date
    _count: CrawlLogCountAggregateOutputType | null
    _min: CrawlLogMinAggregateOutputType | null
    _max: CrawlLogMaxAggregateOutputType | null
  }

  type GetCrawlLogGroupByPayload<T extends CrawlLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CrawlLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CrawlLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CrawlLogGroupByOutputType[P]>
            : GetScalarType<T[P], CrawlLogGroupByOutputType[P]>
        }
      >
    >


  export type CrawlLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    level?: boolean
    message?: boolean
    url?: boolean
    createdAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crawlLog"]>

  export type CrawlLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    level?: boolean
    message?: boolean
    url?: boolean
    createdAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crawlLog"]>

  export type CrawlLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    level?: boolean
    message?: boolean
    url?: boolean
    createdAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crawlLog"]>

  export type CrawlLogSelectScalar = {
    id?: boolean
    siteId?: boolean
    level?: boolean
    message?: boolean
    url?: boolean
    createdAt?: boolean
  }

  export type CrawlLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "siteId" | "level" | "message" | "url" | "createdAt", ExtArgs["result"]["crawlLog"]>
  export type CrawlLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }
  export type CrawlLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }
  export type CrawlLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }

  export type $CrawlLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CrawlLog"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      siteId: string
      level: string
      message: string
      url: string | null
      createdAt: Date
    }, ExtArgs["result"]["crawlLog"]>
    composites: {}
  }

  type CrawlLogGetPayload<S extends boolean | null | undefined | CrawlLogDefaultArgs> = $Result.GetResult<Prisma.$CrawlLogPayload, S>

  type CrawlLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CrawlLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CrawlLogCountAggregateInputType | true
    }

  export interface CrawlLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CrawlLog'], meta: { name: 'CrawlLog' } }
    /**
     * Find zero or one CrawlLog that matches the filter.
     * @param {CrawlLogFindUniqueArgs} args - Arguments to find a CrawlLog
     * @example
     * // Get one CrawlLog
     * const crawlLog = await prisma.crawlLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CrawlLogFindUniqueArgs>(args: SelectSubset<T, CrawlLogFindUniqueArgs<ExtArgs>>): Prisma__CrawlLogClient<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CrawlLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CrawlLogFindUniqueOrThrowArgs} args - Arguments to find a CrawlLog
     * @example
     * // Get one CrawlLog
     * const crawlLog = await prisma.crawlLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CrawlLogFindUniqueOrThrowArgs>(args: SelectSubset<T, CrawlLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CrawlLogClient<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrawlLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlLogFindFirstArgs} args - Arguments to find a CrawlLog
     * @example
     * // Get one CrawlLog
     * const crawlLog = await prisma.crawlLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CrawlLogFindFirstArgs>(args?: SelectSubset<T, CrawlLogFindFirstArgs<ExtArgs>>): Prisma__CrawlLogClient<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrawlLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlLogFindFirstOrThrowArgs} args - Arguments to find a CrawlLog
     * @example
     * // Get one CrawlLog
     * const crawlLog = await prisma.crawlLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CrawlLogFindFirstOrThrowArgs>(args?: SelectSubset<T, CrawlLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__CrawlLogClient<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CrawlLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CrawlLogs
     * const crawlLogs = await prisma.crawlLog.findMany()
     * 
     * // Get first 10 CrawlLogs
     * const crawlLogs = await prisma.crawlLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const crawlLogWithIdOnly = await prisma.crawlLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CrawlLogFindManyArgs>(args?: SelectSubset<T, CrawlLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CrawlLog.
     * @param {CrawlLogCreateArgs} args - Arguments to create a CrawlLog.
     * @example
     * // Create one CrawlLog
     * const CrawlLog = await prisma.crawlLog.create({
     *   data: {
     *     // ... data to create a CrawlLog
     *   }
     * })
     * 
     */
    create<T extends CrawlLogCreateArgs>(args: SelectSubset<T, CrawlLogCreateArgs<ExtArgs>>): Prisma__CrawlLogClient<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CrawlLogs.
     * @param {CrawlLogCreateManyArgs} args - Arguments to create many CrawlLogs.
     * @example
     * // Create many CrawlLogs
     * const crawlLog = await prisma.crawlLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CrawlLogCreateManyArgs>(args?: SelectSubset<T, CrawlLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CrawlLogs and returns the data saved in the database.
     * @param {CrawlLogCreateManyAndReturnArgs} args - Arguments to create many CrawlLogs.
     * @example
     * // Create many CrawlLogs
     * const crawlLog = await prisma.crawlLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CrawlLogs and only return the `id`
     * const crawlLogWithIdOnly = await prisma.crawlLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CrawlLogCreateManyAndReturnArgs>(args?: SelectSubset<T, CrawlLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CrawlLog.
     * @param {CrawlLogDeleteArgs} args - Arguments to delete one CrawlLog.
     * @example
     * // Delete one CrawlLog
     * const CrawlLog = await prisma.crawlLog.delete({
     *   where: {
     *     // ... filter to delete one CrawlLog
     *   }
     * })
     * 
     */
    delete<T extends CrawlLogDeleteArgs>(args: SelectSubset<T, CrawlLogDeleteArgs<ExtArgs>>): Prisma__CrawlLogClient<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CrawlLog.
     * @param {CrawlLogUpdateArgs} args - Arguments to update one CrawlLog.
     * @example
     * // Update one CrawlLog
     * const crawlLog = await prisma.crawlLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CrawlLogUpdateArgs>(args: SelectSubset<T, CrawlLogUpdateArgs<ExtArgs>>): Prisma__CrawlLogClient<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CrawlLogs.
     * @param {CrawlLogDeleteManyArgs} args - Arguments to filter CrawlLogs to delete.
     * @example
     * // Delete a few CrawlLogs
     * const { count } = await prisma.crawlLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CrawlLogDeleteManyArgs>(args?: SelectSubset<T, CrawlLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrawlLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CrawlLogs
     * const crawlLog = await prisma.crawlLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CrawlLogUpdateManyArgs>(args: SelectSubset<T, CrawlLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrawlLogs and returns the data updated in the database.
     * @param {CrawlLogUpdateManyAndReturnArgs} args - Arguments to update many CrawlLogs.
     * @example
     * // Update many CrawlLogs
     * const crawlLog = await prisma.crawlLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CrawlLogs and only return the `id`
     * const crawlLogWithIdOnly = await prisma.crawlLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CrawlLogUpdateManyAndReturnArgs>(args: SelectSubset<T, CrawlLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CrawlLog.
     * @param {CrawlLogUpsertArgs} args - Arguments to update or create a CrawlLog.
     * @example
     * // Update or create a CrawlLog
     * const crawlLog = await prisma.crawlLog.upsert({
     *   create: {
     *     // ... data to create a CrawlLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CrawlLog we want to update
     *   }
     * })
     */
    upsert<T extends CrawlLogUpsertArgs>(args: SelectSubset<T, CrawlLogUpsertArgs<ExtArgs>>): Prisma__CrawlLogClient<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CrawlLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlLogCountArgs} args - Arguments to filter CrawlLogs to count.
     * @example
     * // Count the number of CrawlLogs
     * const count = await prisma.crawlLog.count({
     *   where: {
     *     // ... the filter for the CrawlLogs we want to count
     *   }
     * })
    **/
    count<T extends CrawlLogCountArgs>(
      args?: Subset<T, CrawlLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CrawlLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CrawlLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CrawlLogAggregateArgs>(args: Subset<T, CrawlLogAggregateArgs>): Prisma.PrismaPromise<GetCrawlLogAggregateType<T>>

    /**
     * Group by CrawlLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CrawlLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CrawlLogGroupByArgs['orderBy'] }
        : { orderBy?: CrawlLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CrawlLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrawlLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CrawlLog model
   */
  readonly fields: CrawlLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CrawlLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CrawlLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CrawlLog model
   */
  interface CrawlLogFieldRefs {
    readonly id: FieldRef<"CrawlLog", 'String'>
    readonly siteId: FieldRef<"CrawlLog", 'String'>
    readonly level: FieldRef<"CrawlLog", 'String'>
    readonly message: FieldRef<"CrawlLog", 'String'>
    readonly url: FieldRef<"CrawlLog", 'String'>
    readonly createdAt: FieldRef<"CrawlLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CrawlLog findUnique
   */
  export type CrawlLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
    /**
     * Filter, which CrawlLog to fetch.
     */
    where: CrawlLogWhereUniqueInput
  }

  /**
   * CrawlLog findUniqueOrThrow
   */
  export type CrawlLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
    /**
     * Filter, which CrawlLog to fetch.
     */
    where: CrawlLogWhereUniqueInput
  }

  /**
   * CrawlLog findFirst
   */
  export type CrawlLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
    /**
     * Filter, which CrawlLog to fetch.
     */
    where?: CrawlLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlLogs to fetch.
     */
    orderBy?: CrawlLogOrderByWithRelationInput | CrawlLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrawlLogs.
     */
    cursor?: CrawlLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrawlLogs.
     */
    distinct?: CrawlLogScalarFieldEnum | CrawlLogScalarFieldEnum[]
  }

  /**
   * CrawlLog findFirstOrThrow
   */
  export type CrawlLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
    /**
     * Filter, which CrawlLog to fetch.
     */
    where?: CrawlLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlLogs to fetch.
     */
    orderBy?: CrawlLogOrderByWithRelationInput | CrawlLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrawlLogs.
     */
    cursor?: CrawlLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrawlLogs.
     */
    distinct?: CrawlLogScalarFieldEnum | CrawlLogScalarFieldEnum[]
  }

  /**
   * CrawlLog findMany
   */
  export type CrawlLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
    /**
     * Filter, which CrawlLogs to fetch.
     */
    where?: CrawlLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlLogs to fetch.
     */
    orderBy?: CrawlLogOrderByWithRelationInput | CrawlLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CrawlLogs.
     */
    cursor?: CrawlLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrawlLogs.
     */
    distinct?: CrawlLogScalarFieldEnum | CrawlLogScalarFieldEnum[]
  }

  /**
   * CrawlLog create
   */
  export type CrawlLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
    /**
     * The data needed to create a CrawlLog.
     */
    data: XOR<CrawlLogCreateInput, CrawlLogUncheckedCreateInput>
  }

  /**
   * CrawlLog createMany
   */
  export type CrawlLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CrawlLogs.
     */
    data: CrawlLogCreateManyInput | CrawlLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CrawlLog createManyAndReturn
   */
  export type CrawlLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * The data used to create many CrawlLogs.
     */
    data: CrawlLogCreateManyInput | CrawlLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CrawlLog update
   */
  export type CrawlLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
    /**
     * The data needed to update a CrawlLog.
     */
    data: XOR<CrawlLogUpdateInput, CrawlLogUncheckedUpdateInput>
    /**
     * Choose, which CrawlLog to update.
     */
    where: CrawlLogWhereUniqueInput
  }

  /**
   * CrawlLog updateMany
   */
  export type CrawlLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CrawlLogs.
     */
    data: XOR<CrawlLogUpdateManyMutationInput, CrawlLogUncheckedUpdateManyInput>
    /**
     * Filter which CrawlLogs to update
     */
    where?: CrawlLogWhereInput
    /**
     * Limit how many CrawlLogs to update.
     */
    limit?: number
  }

  /**
   * CrawlLog updateManyAndReturn
   */
  export type CrawlLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * The data used to update CrawlLogs.
     */
    data: XOR<CrawlLogUpdateManyMutationInput, CrawlLogUncheckedUpdateManyInput>
    /**
     * Filter which CrawlLogs to update
     */
    where?: CrawlLogWhereInput
    /**
     * Limit how many CrawlLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CrawlLog upsert
   */
  export type CrawlLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
    /**
     * The filter to search for the CrawlLog to update in case it exists.
     */
    where: CrawlLogWhereUniqueInput
    /**
     * In case the CrawlLog found by the `where` argument doesn't exist, create a new CrawlLog with this data.
     */
    create: XOR<CrawlLogCreateInput, CrawlLogUncheckedCreateInput>
    /**
     * In case the CrawlLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CrawlLogUpdateInput, CrawlLogUncheckedUpdateInput>
  }

  /**
   * CrawlLog delete
   */
  export type CrawlLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
    /**
     * Filter which CrawlLog to delete.
     */
    where: CrawlLogWhereUniqueInput
  }

  /**
   * CrawlLog deleteMany
   */
  export type CrawlLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrawlLogs to delete
     */
    where?: CrawlLogWhereInput
    /**
     * Limit how many CrawlLogs to delete.
     */
    limit?: number
  }

  /**
   * CrawlLog without action
   */
  export type CrawlLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
  }


  /**
   * Model AppSetting
   */

  export type AggregateAppSetting = {
    _count: AppSettingCountAggregateOutputType | null
    _min: AppSettingMinAggregateOutputType | null
    _max: AppSettingMaxAggregateOutputType | null
  }

  export type AppSettingMinAggregateOutputType = {
    id: string | null
    key: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppSettingMaxAggregateOutputType = {
    id: string | null
    key: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppSettingCountAggregateOutputType = {
    id: number
    key: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppSettingMinAggregateInputType = {
    id?: true
    key?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppSettingMaxAggregateInputType = {
    id?: true
    key?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppSettingCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSetting to aggregate.
     */
    where?: AppSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingOrderByWithRelationInput | AppSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppSettings
    **/
    _count?: true | AppSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppSettingMaxAggregateInputType
  }

  export type GetAppSettingAggregateType<T extends AppSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateAppSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppSetting[P]>
      : GetScalarType<T[P], AggregateAppSetting[P]>
  }




  export type AppSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppSettingWhereInput
    orderBy?: AppSettingOrderByWithAggregationInput | AppSettingOrderByWithAggregationInput[]
    by: AppSettingScalarFieldEnum[] | AppSettingScalarFieldEnum
    having?: AppSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppSettingCountAggregateInputType | true
    _min?: AppSettingMinAggregateInputType
    _max?: AppSettingMaxAggregateInputType
  }

  export type AppSettingGroupByOutputType = {
    id: string
    key: string
    value: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: AppSettingCountAggregateOutputType | null
    _min: AppSettingMinAggregateOutputType | null
    _max: AppSettingMaxAggregateOutputType | null
  }

  type GetAppSettingGroupByPayload<T extends AppSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppSettingGroupByOutputType[P]>
            : GetScalarType<T[P], AppSettingGroupByOutputType[P]>
        }
      >
    >


  export type AppSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appSetting"]>

  export type AppSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appSetting"]>

  export type AppSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appSetting"]>

  export type AppSettingSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "createdAt" | "updatedAt", ExtArgs["result"]["appSetting"]>

  export type $AppSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appSetting"]>
    composites: {}
  }

  type AppSettingGetPayload<S extends boolean | null | undefined | AppSettingDefaultArgs> = $Result.GetResult<Prisma.$AppSettingPayload, S>

  type AppSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppSettingCountAggregateInputType | true
    }

  export interface AppSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppSetting'], meta: { name: 'AppSetting' } }
    /**
     * Find zero or one AppSetting that matches the filter.
     * @param {AppSettingFindUniqueArgs} args - Arguments to find a AppSetting
     * @example
     * // Get one AppSetting
     * const appSetting = await prisma.appSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppSettingFindUniqueArgs>(args: SelectSubset<T, AppSettingFindUniqueArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppSettingFindUniqueOrThrowArgs} args - Arguments to find a AppSetting
     * @example
     * // Get one AppSetting
     * const appSetting = await prisma.appSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, AppSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingFindFirstArgs} args - Arguments to find a AppSetting
     * @example
     * // Get one AppSetting
     * const appSetting = await prisma.appSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppSettingFindFirstArgs>(args?: SelectSubset<T, AppSettingFindFirstArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingFindFirstOrThrowArgs} args - Arguments to find a AppSetting
     * @example
     * // Get one AppSetting
     * const appSetting = await prisma.appSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, AppSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppSettings
     * const appSettings = await prisma.appSetting.findMany()
     * 
     * // Get first 10 AppSettings
     * const appSettings = await prisma.appSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appSettingWithIdOnly = await prisma.appSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppSettingFindManyArgs>(args?: SelectSubset<T, AppSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppSetting.
     * @param {AppSettingCreateArgs} args - Arguments to create a AppSetting.
     * @example
     * // Create one AppSetting
     * const AppSetting = await prisma.appSetting.create({
     *   data: {
     *     // ... data to create a AppSetting
     *   }
     * })
     * 
     */
    create<T extends AppSettingCreateArgs>(args: SelectSubset<T, AppSettingCreateArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppSettings.
     * @param {AppSettingCreateManyArgs} args - Arguments to create many AppSettings.
     * @example
     * // Create many AppSettings
     * const appSetting = await prisma.appSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppSettingCreateManyArgs>(args?: SelectSubset<T, AppSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppSettings and returns the data saved in the database.
     * @param {AppSettingCreateManyAndReturnArgs} args - Arguments to create many AppSettings.
     * @example
     * // Create many AppSettings
     * const appSetting = await prisma.appSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppSettings and only return the `id`
     * const appSettingWithIdOnly = await prisma.appSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, AppSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppSetting.
     * @param {AppSettingDeleteArgs} args - Arguments to delete one AppSetting.
     * @example
     * // Delete one AppSetting
     * const AppSetting = await prisma.appSetting.delete({
     *   where: {
     *     // ... filter to delete one AppSetting
     *   }
     * })
     * 
     */
    delete<T extends AppSettingDeleteArgs>(args: SelectSubset<T, AppSettingDeleteArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppSetting.
     * @param {AppSettingUpdateArgs} args - Arguments to update one AppSetting.
     * @example
     * // Update one AppSetting
     * const appSetting = await prisma.appSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppSettingUpdateArgs>(args: SelectSubset<T, AppSettingUpdateArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppSettings.
     * @param {AppSettingDeleteManyArgs} args - Arguments to filter AppSettings to delete.
     * @example
     * // Delete a few AppSettings
     * const { count } = await prisma.appSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppSettingDeleteManyArgs>(args?: SelectSubset<T, AppSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppSettings
     * const appSetting = await prisma.appSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppSettingUpdateManyArgs>(args: SelectSubset<T, AppSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppSettings and returns the data updated in the database.
     * @param {AppSettingUpdateManyAndReturnArgs} args - Arguments to update many AppSettings.
     * @example
     * // Update many AppSettings
     * const appSetting = await prisma.appSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppSettings and only return the `id`
     * const appSettingWithIdOnly = await prisma.appSetting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, AppSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppSetting.
     * @param {AppSettingUpsertArgs} args - Arguments to update or create a AppSetting.
     * @example
     * // Update or create a AppSetting
     * const appSetting = await prisma.appSetting.upsert({
     *   create: {
     *     // ... data to create a AppSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppSetting we want to update
     *   }
     * })
     */
    upsert<T extends AppSettingUpsertArgs>(args: SelectSubset<T, AppSettingUpsertArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingCountArgs} args - Arguments to filter AppSettings to count.
     * @example
     * // Count the number of AppSettings
     * const count = await prisma.appSetting.count({
     *   where: {
     *     // ... the filter for the AppSettings we want to count
     *   }
     * })
    **/
    count<T extends AppSettingCountArgs>(
      args?: Subset<T, AppSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppSettingAggregateArgs>(args: Subset<T, AppSettingAggregateArgs>): Prisma.PrismaPromise<GetAppSettingAggregateType<T>>

    /**
     * Group by AppSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppSettingGroupByArgs['orderBy'] }
        : { orderBy?: AppSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppSetting model
   */
  readonly fields: AppSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AppSetting model
   */
  interface AppSettingFieldRefs {
    readonly id: FieldRef<"AppSetting", 'String'>
    readonly key: FieldRef<"AppSetting", 'String'>
    readonly value: FieldRef<"AppSetting", 'Json'>
    readonly createdAt: FieldRef<"AppSetting", 'DateTime'>
    readonly updatedAt: FieldRef<"AppSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppSetting findUnique
   */
  export type AppSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * Filter, which AppSetting to fetch.
     */
    where: AppSettingWhereUniqueInput
  }

  /**
   * AppSetting findUniqueOrThrow
   */
  export type AppSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * Filter, which AppSetting to fetch.
     */
    where: AppSettingWhereUniqueInput
  }

  /**
   * AppSetting findFirst
   */
  export type AppSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * Filter, which AppSetting to fetch.
     */
    where?: AppSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingOrderByWithRelationInput | AppSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSettings.
     */
    cursor?: AppSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSettings.
     */
    distinct?: AppSettingScalarFieldEnum | AppSettingScalarFieldEnum[]
  }

  /**
   * AppSetting findFirstOrThrow
   */
  export type AppSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * Filter, which AppSetting to fetch.
     */
    where?: AppSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingOrderByWithRelationInput | AppSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSettings.
     */
    cursor?: AppSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSettings.
     */
    distinct?: AppSettingScalarFieldEnum | AppSettingScalarFieldEnum[]
  }

  /**
   * AppSetting findMany
   */
  export type AppSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * Filter, which AppSettings to fetch.
     */
    where?: AppSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingOrderByWithRelationInput | AppSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppSettings.
     */
    cursor?: AppSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSettings.
     */
    distinct?: AppSettingScalarFieldEnum | AppSettingScalarFieldEnum[]
  }

  /**
   * AppSetting create
   */
  export type AppSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a AppSetting.
     */
    data: XOR<AppSettingCreateInput, AppSettingUncheckedCreateInput>
  }

  /**
   * AppSetting createMany
   */
  export type AppSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppSettings.
     */
    data: AppSettingCreateManyInput | AppSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppSetting createManyAndReturn
   */
  export type AppSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * The data used to create many AppSettings.
     */
    data: AppSettingCreateManyInput | AppSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppSetting update
   */
  export type AppSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a AppSetting.
     */
    data: XOR<AppSettingUpdateInput, AppSettingUncheckedUpdateInput>
    /**
     * Choose, which AppSetting to update.
     */
    where: AppSettingWhereUniqueInput
  }

  /**
   * AppSetting updateMany
   */
  export type AppSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppSettings.
     */
    data: XOR<AppSettingUpdateManyMutationInput, AppSettingUncheckedUpdateManyInput>
    /**
     * Filter which AppSettings to update
     */
    where?: AppSettingWhereInput
    /**
     * Limit how many AppSettings to update.
     */
    limit?: number
  }

  /**
   * AppSetting updateManyAndReturn
   */
  export type AppSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * The data used to update AppSettings.
     */
    data: XOR<AppSettingUpdateManyMutationInput, AppSettingUncheckedUpdateManyInput>
    /**
     * Filter which AppSettings to update
     */
    where?: AppSettingWhereInput
    /**
     * Limit how many AppSettings to update.
     */
    limit?: number
  }

  /**
   * AppSetting upsert
   */
  export type AppSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the AppSetting to update in case it exists.
     */
    where: AppSettingWhereUniqueInput
    /**
     * In case the AppSetting found by the `where` argument doesn't exist, create a new AppSetting with this data.
     */
    create: XOR<AppSettingCreateInput, AppSettingUncheckedCreateInput>
    /**
     * In case the AppSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppSettingUpdateInput, AppSettingUncheckedUpdateInput>
  }

  /**
   * AppSetting delete
   */
  export type AppSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * Filter which AppSetting to delete.
     */
    where: AppSettingWhereUniqueInput
  }

  /**
   * AppSetting deleteMany
   */
  export type AppSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSettings to delete
     */
    where?: AppSettingWhereInput
    /**
     * Limit how many AppSettings to delete.
     */
    limit?: number
  }

  /**
   * AppSetting without action
   */
  export type AppSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
  }


  /**
   * Model Keyword
   */

  export type AggregateKeyword = {
    _count: KeywordCountAggregateOutputType | null
    _avg: KeywordAvgAggregateOutputType | null
    _sum: KeywordSumAggregateOutputType | null
    _min: KeywordMinAggregateOutputType | null
    _max: KeywordMaxAggregateOutputType | null
  }

  export type KeywordAvgAggregateOutputType = {
    priority: number | null
  }

  export type KeywordSumAggregateOutputType = {
    priority: number | null
  }

  export type KeywordMinAggregateOutputType = {
    id: string | null
    keyword: string | null
    normalized: string | null
    source: string | null
    intent: string | null
    cluster: string | null
    country: string | null
    language: string | null
    pageId: string | null
    siteId: string | null
    clusterId: string | null
    priority: number | null
    createdAt: Date | null
  }

  export type KeywordMaxAggregateOutputType = {
    id: string | null
    keyword: string | null
    normalized: string | null
    source: string | null
    intent: string | null
    cluster: string | null
    country: string | null
    language: string | null
    pageId: string | null
    siteId: string | null
    clusterId: string | null
    priority: number | null
    createdAt: Date | null
  }

  export type KeywordCountAggregateOutputType = {
    id: number
    keyword: number
    normalized: number
    source: number
    intent: number
    cluster: number
    country: number
    language: number
    pageId: number
    siteId: number
    clusterId: number
    priority: number
    createdAt: number
    _all: number
  }


  export type KeywordAvgAggregateInputType = {
    priority?: true
  }

  export type KeywordSumAggregateInputType = {
    priority?: true
  }

  export type KeywordMinAggregateInputType = {
    id?: true
    keyword?: true
    normalized?: true
    source?: true
    intent?: true
    cluster?: true
    country?: true
    language?: true
    pageId?: true
    siteId?: true
    clusterId?: true
    priority?: true
    createdAt?: true
  }

  export type KeywordMaxAggregateInputType = {
    id?: true
    keyword?: true
    normalized?: true
    source?: true
    intent?: true
    cluster?: true
    country?: true
    language?: true
    pageId?: true
    siteId?: true
    clusterId?: true
    priority?: true
    createdAt?: true
  }

  export type KeywordCountAggregateInputType = {
    id?: true
    keyword?: true
    normalized?: true
    source?: true
    intent?: true
    cluster?: true
    country?: true
    language?: true
    pageId?: true
    siteId?: true
    clusterId?: true
    priority?: true
    createdAt?: true
    _all?: true
  }

  export type KeywordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keyword to aggregate.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Keywords
    **/
    _count?: true | KeywordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KeywordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KeywordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeywordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeywordMaxAggregateInputType
  }

  export type GetKeywordAggregateType<T extends KeywordAggregateArgs> = {
        [P in keyof T & keyof AggregateKeyword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeyword[P]>
      : GetScalarType<T[P], AggregateKeyword[P]>
  }




  export type KeywordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeywordWhereInput
    orderBy?: KeywordOrderByWithAggregationInput | KeywordOrderByWithAggregationInput[]
    by: KeywordScalarFieldEnum[] | KeywordScalarFieldEnum
    having?: KeywordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeywordCountAggregateInputType | true
    _avg?: KeywordAvgAggregateInputType
    _sum?: KeywordSumAggregateInputType
    _min?: KeywordMinAggregateInputType
    _max?: KeywordMaxAggregateInputType
  }

  export type KeywordGroupByOutputType = {
    id: string
    keyword: string
    normalized: string
    source: string
    intent: string | null
    cluster: string | null
    country: string
    language: string
    pageId: string | null
    siteId: string | null
    clusterId: string | null
    priority: number | null
    createdAt: Date
    _count: KeywordCountAggregateOutputType | null
    _avg: KeywordAvgAggregateOutputType | null
    _sum: KeywordSumAggregateOutputType | null
    _min: KeywordMinAggregateOutputType | null
    _max: KeywordMaxAggregateOutputType | null
  }

  type GetKeywordGroupByPayload<T extends KeywordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeywordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeywordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeywordGroupByOutputType[P]>
            : GetScalarType<T[P], KeywordGroupByOutputType[P]>
        }
      >
    >


  export type KeywordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    normalized?: boolean
    source?: boolean
    intent?: boolean
    cluster?: boolean
    country?: boolean
    language?: boolean
    pageId?: boolean
    siteId?: boolean
    clusterId?: boolean
    priority?: boolean
    createdAt?: boolean
    page?: boolean | Keyword$pageArgs<ExtArgs>
    site?: boolean | Keyword$siteArgs<ExtArgs>
    keywordCluster?: boolean | Keyword$keywordClusterArgs<ExtArgs>
  }, ExtArgs["result"]["keyword"]>

  export type KeywordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    normalized?: boolean
    source?: boolean
    intent?: boolean
    cluster?: boolean
    country?: boolean
    language?: boolean
    pageId?: boolean
    siteId?: boolean
    clusterId?: boolean
    priority?: boolean
    createdAt?: boolean
    page?: boolean | Keyword$pageArgs<ExtArgs>
    site?: boolean | Keyword$siteArgs<ExtArgs>
    keywordCluster?: boolean | Keyword$keywordClusterArgs<ExtArgs>
  }, ExtArgs["result"]["keyword"]>

  export type KeywordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    normalized?: boolean
    source?: boolean
    intent?: boolean
    cluster?: boolean
    country?: boolean
    language?: boolean
    pageId?: boolean
    siteId?: boolean
    clusterId?: boolean
    priority?: boolean
    createdAt?: boolean
    page?: boolean | Keyword$pageArgs<ExtArgs>
    site?: boolean | Keyword$siteArgs<ExtArgs>
    keywordCluster?: boolean | Keyword$keywordClusterArgs<ExtArgs>
  }, ExtArgs["result"]["keyword"]>

  export type KeywordSelectScalar = {
    id?: boolean
    keyword?: boolean
    normalized?: boolean
    source?: boolean
    intent?: boolean
    cluster?: boolean
    country?: boolean
    language?: boolean
    pageId?: boolean
    siteId?: boolean
    clusterId?: boolean
    priority?: boolean
    createdAt?: boolean
  }

  export type KeywordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keyword" | "normalized" | "source" | "intent" | "cluster" | "country" | "language" | "pageId" | "siteId" | "clusterId" | "priority" | "createdAt", ExtArgs["result"]["keyword"]>
  export type KeywordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | Keyword$pageArgs<ExtArgs>
    site?: boolean | Keyword$siteArgs<ExtArgs>
    keywordCluster?: boolean | Keyword$keywordClusterArgs<ExtArgs>
  }
  export type KeywordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | Keyword$pageArgs<ExtArgs>
    site?: boolean | Keyword$siteArgs<ExtArgs>
    keywordCluster?: boolean | Keyword$keywordClusterArgs<ExtArgs>
  }
  export type KeywordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | Keyword$pageArgs<ExtArgs>
    site?: boolean | Keyword$siteArgs<ExtArgs>
    keywordCluster?: boolean | Keyword$keywordClusterArgs<ExtArgs>
  }

  export type $KeywordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Keyword"
    objects: {
      page: Prisma.$PagePayload<ExtArgs> | null
      site: Prisma.$SitePayload<ExtArgs> | null
      keywordCluster: Prisma.$KeywordClusterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      keyword: string
      normalized: string
      source: string
      intent: string | null
      cluster: string | null
      country: string
      language: string
      pageId: string | null
      siteId: string | null
      clusterId: string | null
      priority: number | null
      createdAt: Date
    }, ExtArgs["result"]["keyword"]>
    composites: {}
  }

  type KeywordGetPayload<S extends boolean | null | undefined | KeywordDefaultArgs> = $Result.GetResult<Prisma.$KeywordPayload, S>

  type KeywordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeywordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeywordCountAggregateInputType | true
    }

  export interface KeywordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Keyword'], meta: { name: 'Keyword' } }
    /**
     * Find zero or one Keyword that matches the filter.
     * @param {KeywordFindUniqueArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeywordFindUniqueArgs>(args: SelectSubset<T, KeywordFindUniqueArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Keyword that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeywordFindUniqueOrThrowArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeywordFindUniqueOrThrowArgs>(args: SelectSubset<T, KeywordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keyword that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindFirstArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeywordFindFirstArgs>(args?: SelectSubset<T, KeywordFindFirstArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keyword that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindFirstOrThrowArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeywordFindFirstOrThrowArgs>(args?: SelectSubset<T, KeywordFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Keywords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keywords
     * const keywords = await prisma.keyword.findMany()
     * 
     * // Get first 10 Keywords
     * const keywords = await prisma.keyword.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keywordWithIdOnly = await prisma.keyword.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeywordFindManyArgs>(args?: SelectSubset<T, KeywordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Keyword.
     * @param {KeywordCreateArgs} args - Arguments to create a Keyword.
     * @example
     * // Create one Keyword
     * const Keyword = await prisma.keyword.create({
     *   data: {
     *     // ... data to create a Keyword
     *   }
     * })
     * 
     */
    create<T extends KeywordCreateArgs>(args: SelectSubset<T, KeywordCreateArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Keywords.
     * @param {KeywordCreateManyArgs} args - Arguments to create many Keywords.
     * @example
     * // Create many Keywords
     * const keyword = await prisma.keyword.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeywordCreateManyArgs>(args?: SelectSubset<T, KeywordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Keywords and returns the data saved in the database.
     * @param {KeywordCreateManyAndReturnArgs} args - Arguments to create many Keywords.
     * @example
     * // Create many Keywords
     * const keyword = await prisma.keyword.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Keywords and only return the `id`
     * const keywordWithIdOnly = await prisma.keyword.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KeywordCreateManyAndReturnArgs>(args?: SelectSubset<T, KeywordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Keyword.
     * @param {KeywordDeleteArgs} args - Arguments to delete one Keyword.
     * @example
     * // Delete one Keyword
     * const Keyword = await prisma.keyword.delete({
     *   where: {
     *     // ... filter to delete one Keyword
     *   }
     * })
     * 
     */
    delete<T extends KeywordDeleteArgs>(args: SelectSubset<T, KeywordDeleteArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Keyword.
     * @param {KeywordUpdateArgs} args - Arguments to update one Keyword.
     * @example
     * // Update one Keyword
     * const keyword = await prisma.keyword.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeywordUpdateArgs>(args: SelectSubset<T, KeywordUpdateArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Keywords.
     * @param {KeywordDeleteManyArgs} args - Arguments to filter Keywords to delete.
     * @example
     * // Delete a few Keywords
     * const { count } = await prisma.keyword.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeywordDeleteManyArgs>(args?: SelectSubset<T, KeywordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keywords
     * const keyword = await prisma.keyword.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeywordUpdateManyArgs>(args: SelectSubset<T, KeywordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keywords and returns the data updated in the database.
     * @param {KeywordUpdateManyAndReturnArgs} args - Arguments to update many Keywords.
     * @example
     * // Update many Keywords
     * const keyword = await prisma.keyword.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Keywords and only return the `id`
     * const keywordWithIdOnly = await prisma.keyword.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KeywordUpdateManyAndReturnArgs>(args: SelectSubset<T, KeywordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Keyword.
     * @param {KeywordUpsertArgs} args - Arguments to update or create a Keyword.
     * @example
     * // Update or create a Keyword
     * const keyword = await prisma.keyword.upsert({
     *   create: {
     *     // ... data to create a Keyword
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Keyword we want to update
     *   }
     * })
     */
    upsert<T extends KeywordUpsertArgs>(args: SelectSubset<T, KeywordUpsertArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Keywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordCountArgs} args - Arguments to filter Keywords to count.
     * @example
     * // Count the number of Keywords
     * const count = await prisma.keyword.count({
     *   where: {
     *     // ... the filter for the Keywords we want to count
     *   }
     * })
    **/
    count<T extends KeywordCountArgs>(
      args?: Subset<T, KeywordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeywordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Keyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KeywordAggregateArgs>(args: Subset<T, KeywordAggregateArgs>): Prisma.PrismaPromise<GetKeywordAggregateType<T>>

    /**
     * Group by Keyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KeywordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeywordGroupByArgs['orderBy'] }
        : { orderBy?: KeywordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KeywordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeywordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Keyword model
   */
  readonly fields: KeywordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Keyword.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeywordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    page<T extends Keyword$pageArgs<ExtArgs> = {}>(args?: Subset<T, Keyword$pageArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    site<T extends Keyword$siteArgs<ExtArgs> = {}>(args?: Subset<T, Keyword$siteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    keywordCluster<T extends Keyword$keywordClusterArgs<ExtArgs> = {}>(args?: Subset<T, Keyword$keywordClusterArgs<ExtArgs>>): Prisma__KeywordClusterClient<$Result.GetResult<Prisma.$KeywordClusterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Keyword model
   */
  interface KeywordFieldRefs {
    readonly id: FieldRef<"Keyword", 'String'>
    readonly keyword: FieldRef<"Keyword", 'String'>
    readonly normalized: FieldRef<"Keyword", 'String'>
    readonly source: FieldRef<"Keyword", 'String'>
    readonly intent: FieldRef<"Keyword", 'String'>
    readonly cluster: FieldRef<"Keyword", 'String'>
    readonly country: FieldRef<"Keyword", 'String'>
    readonly language: FieldRef<"Keyword", 'String'>
    readonly pageId: FieldRef<"Keyword", 'String'>
    readonly siteId: FieldRef<"Keyword", 'String'>
    readonly clusterId: FieldRef<"Keyword", 'String'>
    readonly priority: FieldRef<"Keyword", 'Int'>
    readonly createdAt: FieldRef<"Keyword", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Keyword findUnique
   */
  export type KeywordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword findUniqueOrThrow
   */
  export type KeywordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword findFirst
   */
  export type KeywordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keywords.
     */
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword findFirstOrThrow
   */
  export type KeywordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keywords.
     */
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword findMany
   */
  export type KeywordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keywords to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keywords.
     */
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword create
   */
  export type KeywordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The data needed to create a Keyword.
     */
    data: XOR<KeywordCreateInput, KeywordUncheckedCreateInput>
  }

  /**
   * Keyword createMany
   */
  export type KeywordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Keywords.
     */
    data: KeywordCreateManyInput | KeywordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Keyword createManyAndReturn
   */
  export type KeywordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * The data used to create many Keywords.
     */
    data: KeywordCreateManyInput | KeywordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Keyword update
   */
  export type KeywordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The data needed to update a Keyword.
     */
    data: XOR<KeywordUpdateInput, KeywordUncheckedUpdateInput>
    /**
     * Choose, which Keyword to update.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword updateMany
   */
  export type KeywordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Keywords.
     */
    data: XOR<KeywordUpdateManyMutationInput, KeywordUncheckedUpdateManyInput>
    /**
     * Filter which Keywords to update
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to update.
     */
    limit?: number
  }

  /**
   * Keyword updateManyAndReturn
   */
  export type KeywordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * The data used to update Keywords.
     */
    data: XOR<KeywordUpdateManyMutationInput, KeywordUncheckedUpdateManyInput>
    /**
     * Filter which Keywords to update
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Keyword upsert
   */
  export type KeywordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The filter to search for the Keyword to update in case it exists.
     */
    where: KeywordWhereUniqueInput
    /**
     * In case the Keyword found by the `where` argument doesn't exist, create a new Keyword with this data.
     */
    create: XOR<KeywordCreateInput, KeywordUncheckedCreateInput>
    /**
     * In case the Keyword was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeywordUpdateInput, KeywordUncheckedUpdateInput>
  }

  /**
   * Keyword delete
   */
  export type KeywordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter which Keyword to delete.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword deleteMany
   */
  export type KeywordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keywords to delete
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to delete.
     */
    limit?: number
  }

  /**
   * Keyword.page
   */
  export type Keyword$pageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    where?: PageWhereInput
  }

  /**
   * Keyword.site
   */
  export type Keyword$siteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    where?: SiteWhereInput
  }

  /**
   * Keyword.keywordCluster
   */
  export type Keyword$keywordClusterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordCluster
     */
    select?: KeywordClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordCluster
     */
    omit?: KeywordClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordClusterInclude<ExtArgs> | null
    where?: KeywordClusterWhereInput
  }

  /**
   * Keyword without action
   */
  export type KeywordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
  }


  /**
   * Model KeywordCluster
   */

  export type AggregateKeywordCluster = {
    _count: KeywordClusterCountAggregateOutputType | null
    _min: KeywordClusterMinAggregateOutputType | null
    _max: KeywordClusterMaxAggregateOutputType | null
  }

  export type KeywordClusterMinAggregateOutputType = {
    id: string | null
    name: string | null
    siteId: string | null
    country: string | null
    language: string | null
    createdAt: Date | null
  }

  export type KeywordClusterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    siteId: string | null
    country: string | null
    language: string | null
    createdAt: Date | null
  }

  export type KeywordClusterCountAggregateOutputType = {
    id: number
    name: number
    siteId: number
    country: number
    language: number
    createdAt: number
    _all: number
  }


  export type KeywordClusterMinAggregateInputType = {
    id?: true
    name?: true
    siteId?: true
    country?: true
    language?: true
    createdAt?: true
  }

  export type KeywordClusterMaxAggregateInputType = {
    id?: true
    name?: true
    siteId?: true
    country?: true
    language?: true
    createdAt?: true
  }

  export type KeywordClusterCountAggregateInputType = {
    id?: true
    name?: true
    siteId?: true
    country?: true
    language?: true
    createdAt?: true
    _all?: true
  }

  export type KeywordClusterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KeywordCluster to aggregate.
     */
    where?: KeywordClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeywordClusters to fetch.
     */
    orderBy?: KeywordClusterOrderByWithRelationInput | KeywordClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeywordClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeywordClusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeywordClusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KeywordClusters
    **/
    _count?: true | KeywordClusterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeywordClusterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeywordClusterMaxAggregateInputType
  }

  export type GetKeywordClusterAggregateType<T extends KeywordClusterAggregateArgs> = {
        [P in keyof T & keyof AggregateKeywordCluster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeywordCluster[P]>
      : GetScalarType<T[P], AggregateKeywordCluster[P]>
  }




  export type KeywordClusterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeywordClusterWhereInput
    orderBy?: KeywordClusterOrderByWithAggregationInput | KeywordClusterOrderByWithAggregationInput[]
    by: KeywordClusterScalarFieldEnum[] | KeywordClusterScalarFieldEnum
    having?: KeywordClusterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeywordClusterCountAggregateInputType | true
    _min?: KeywordClusterMinAggregateInputType
    _max?: KeywordClusterMaxAggregateInputType
  }

  export type KeywordClusterGroupByOutputType = {
    id: string
    name: string
    siteId: string
    country: string
    language: string
    createdAt: Date
    _count: KeywordClusterCountAggregateOutputType | null
    _min: KeywordClusterMinAggregateOutputType | null
    _max: KeywordClusterMaxAggregateOutputType | null
  }

  type GetKeywordClusterGroupByPayload<T extends KeywordClusterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeywordClusterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeywordClusterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeywordClusterGroupByOutputType[P]>
            : GetScalarType<T[P], KeywordClusterGroupByOutputType[P]>
        }
      >
    >


  export type KeywordClusterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    siteId?: boolean
    country?: boolean
    language?: boolean
    createdAt?: boolean
    keywords?: boolean | KeywordCluster$keywordsArgs<ExtArgs>
    _count?: boolean | KeywordClusterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keywordCluster"]>

  export type KeywordClusterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    siteId?: boolean
    country?: boolean
    language?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["keywordCluster"]>

  export type KeywordClusterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    siteId?: boolean
    country?: boolean
    language?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["keywordCluster"]>

  export type KeywordClusterSelectScalar = {
    id?: boolean
    name?: boolean
    siteId?: boolean
    country?: boolean
    language?: boolean
    createdAt?: boolean
  }

  export type KeywordClusterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "siteId" | "country" | "language" | "createdAt", ExtArgs["result"]["keywordCluster"]>
  export type KeywordClusterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keywords?: boolean | KeywordCluster$keywordsArgs<ExtArgs>
    _count?: boolean | KeywordClusterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KeywordClusterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KeywordClusterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KeywordClusterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KeywordCluster"
    objects: {
      keywords: Prisma.$KeywordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      siteId: string
      country: string
      language: string
      createdAt: Date
    }, ExtArgs["result"]["keywordCluster"]>
    composites: {}
  }

  type KeywordClusterGetPayload<S extends boolean | null | undefined | KeywordClusterDefaultArgs> = $Result.GetResult<Prisma.$KeywordClusterPayload, S>

  type KeywordClusterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeywordClusterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeywordClusterCountAggregateInputType | true
    }

  export interface KeywordClusterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KeywordCluster'], meta: { name: 'KeywordCluster' } }
    /**
     * Find zero or one KeywordCluster that matches the filter.
     * @param {KeywordClusterFindUniqueArgs} args - Arguments to find a KeywordCluster
     * @example
     * // Get one KeywordCluster
     * const keywordCluster = await prisma.keywordCluster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeywordClusterFindUniqueArgs>(args: SelectSubset<T, KeywordClusterFindUniqueArgs<ExtArgs>>): Prisma__KeywordClusterClient<$Result.GetResult<Prisma.$KeywordClusterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KeywordCluster that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeywordClusterFindUniqueOrThrowArgs} args - Arguments to find a KeywordCluster
     * @example
     * // Get one KeywordCluster
     * const keywordCluster = await prisma.keywordCluster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeywordClusterFindUniqueOrThrowArgs>(args: SelectSubset<T, KeywordClusterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeywordClusterClient<$Result.GetResult<Prisma.$KeywordClusterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KeywordCluster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordClusterFindFirstArgs} args - Arguments to find a KeywordCluster
     * @example
     * // Get one KeywordCluster
     * const keywordCluster = await prisma.keywordCluster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeywordClusterFindFirstArgs>(args?: SelectSubset<T, KeywordClusterFindFirstArgs<ExtArgs>>): Prisma__KeywordClusterClient<$Result.GetResult<Prisma.$KeywordClusterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KeywordCluster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordClusterFindFirstOrThrowArgs} args - Arguments to find a KeywordCluster
     * @example
     * // Get one KeywordCluster
     * const keywordCluster = await prisma.keywordCluster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeywordClusterFindFirstOrThrowArgs>(args?: SelectSubset<T, KeywordClusterFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeywordClusterClient<$Result.GetResult<Prisma.$KeywordClusterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KeywordClusters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordClusterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KeywordClusters
     * const keywordClusters = await prisma.keywordCluster.findMany()
     * 
     * // Get first 10 KeywordClusters
     * const keywordClusters = await prisma.keywordCluster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keywordClusterWithIdOnly = await prisma.keywordCluster.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeywordClusterFindManyArgs>(args?: SelectSubset<T, KeywordClusterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordClusterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KeywordCluster.
     * @param {KeywordClusterCreateArgs} args - Arguments to create a KeywordCluster.
     * @example
     * // Create one KeywordCluster
     * const KeywordCluster = await prisma.keywordCluster.create({
     *   data: {
     *     // ... data to create a KeywordCluster
     *   }
     * })
     * 
     */
    create<T extends KeywordClusterCreateArgs>(args: SelectSubset<T, KeywordClusterCreateArgs<ExtArgs>>): Prisma__KeywordClusterClient<$Result.GetResult<Prisma.$KeywordClusterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KeywordClusters.
     * @param {KeywordClusterCreateManyArgs} args - Arguments to create many KeywordClusters.
     * @example
     * // Create many KeywordClusters
     * const keywordCluster = await prisma.keywordCluster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeywordClusterCreateManyArgs>(args?: SelectSubset<T, KeywordClusterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KeywordClusters and returns the data saved in the database.
     * @param {KeywordClusterCreateManyAndReturnArgs} args - Arguments to create many KeywordClusters.
     * @example
     * // Create many KeywordClusters
     * const keywordCluster = await prisma.keywordCluster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KeywordClusters and only return the `id`
     * const keywordClusterWithIdOnly = await prisma.keywordCluster.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KeywordClusterCreateManyAndReturnArgs>(args?: SelectSubset<T, KeywordClusterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordClusterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KeywordCluster.
     * @param {KeywordClusterDeleteArgs} args - Arguments to delete one KeywordCluster.
     * @example
     * // Delete one KeywordCluster
     * const KeywordCluster = await prisma.keywordCluster.delete({
     *   where: {
     *     // ... filter to delete one KeywordCluster
     *   }
     * })
     * 
     */
    delete<T extends KeywordClusterDeleteArgs>(args: SelectSubset<T, KeywordClusterDeleteArgs<ExtArgs>>): Prisma__KeywordClusterClient<$Result.GetResult<Prisma.$KeywordClusterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KeywordCluster.
     * @param {KeywordClusterUpdateArgs} args - Arguments to update one KeywordCluster.
     * @example
     * // Update one KeywordCluster
     * const keywordCluster = await prisma.keywordCluster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeywordClusterUpdateArgs>(args: SelectSubset<T, KeywordClusterUpdateArgs<ExtArgs>>): Prisma__KeywordClusterClient<$Result.GetResult<Prisma.$KeywordClusterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KeywordClusters.
     * @param {KeywordClusterDeleteManyArgs} args - Arguments to filter KeywordClusters to delete.
     * @example
     * // Delete a few KeywordClusters
     * const { count } = await prisma.keywordCluster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeywordClusterDeleteManyArgs>(args?: SelectSubset<T, KeywordClusterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KeywordClusters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordClusterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KeywordClusters
     * const keywordCluster = await prisma.keywordCluster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeywordClusterUpdateManyArgs>(args: SelectSubset<T, KeywordClusterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KeywordClusters and returns the data updated in the database.
     * @param {KeywordClusterUpdateManyAndReturnArgs} args - Arguments to update many KeywordClusters.
     * @example
     * // Update many KeywordClusters
     * const keywordCluster = await prisma.keywordCluster.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KeywordClusters and only return the `id`
     * const keywordClusterWithIdOnly = await prisma.keywordCluster.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KeywordClusterUpdateManyAndReturnArgs>(args: SelectSubset<T, KeywordClusterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordClusterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KeywordCluster.
     * @param {KeywordClusterUpsertArgs} args - Arguments to update or create a KeywordCluster.
     * @example
     * // Update or create a KeywordCluster
     * const keywordCluster = await prisma.keywordCluster.upsert({
     *   create: {
     *     // ... data to create a KeywordCluster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KeywordCluster we want to update
     *   }
     * })
     */
    upsert<T extends KeywordClusterUpsertArgs>(args: SelectSubset<T, KeywordClusterUpsertArgs<ExtArgs>>): Prisma__KeywordClusterClient<$Result.GetResult<Prisma.$KeywordClusterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KeywordClusters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordClusterCountArgs} args - Arguments to filter KeywordClusters to count.
     * @example
     * // Count the number of KeywordClusters
     * const count = await prisma.keywordCluster.count({
     *   where: {
     *     // ... the filter for the KeywordClusters we want to count
     *   }
     * })
    **/
    count<T extends KeywordClusterCountArgs>(
      args?: Subset<T, KeywordClusterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeywordClusterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KeywordCluster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordClusterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KeywordClusterAggregateArgs>(args: Subset<T, KeywordClusterAggregateArgs>): Prisma.PrismaPromise<GetKeywordClusterAggregateType<T>>

    /**
     * Group by KeywordCluster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordClusterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KeywordClusterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeywordClusterGroupByArgs['orderBy'] }
        : { orderBy?: KeywordClusterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KeywordClusterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeywordClusterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KeywordCluster model
   */
  readonly fields: KeywordClusterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KeywordCluster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeywordClusterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    keywords<T extends KeywordCluster$keywordsArgs<ExtArgs> = {}>(args?: Subset<T, KeywordCluster$keywordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KeywordCluster model
   */
  interface KeywordClusterFieldRefs {
    readonly id: FieldRef<"KeywordCluster", 'String'>
    readonly name: FieldRef<"KeywordCluster", 'String'>
    readonly siteId: FieldRef<"KeywordCluster", 'String'>
    readonly country: FieldRef<"KeywordCluster", 'String'>
    readonly language: FieldRef<"KeywordCluster", 'String'>
    readonly createdAt: FieldRef<"KeywordCluster", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KeywordCluster findUnique
   */
  export type KeywordClusterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordCluster
     */
    select?: KeywordClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordCluster
     */
    omit?: KeywordClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordClusterInclude<ExtArgs> | null
    /**
     * Filter, which KeywordCluster to fetch.
     */
    where: KeywordClusterWhereUniqueInput
  }

  /**
   * KeywordCluster findUniqueOrThrow
   */
  export type KeywordClusterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordCluster
     */
    select?: KeywordClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordCluster
     */
    omit?: KeywordClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordClusterInclude<ExtArgs> | null
    /**
     * Filter, which KeywordCluster to fetch.
     */
    where: KeywordClusterWhereUniqueInput
  }

  /**
   * KeywordCluster findFirst
   */
  export type KeywordClusterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordCluster
     */
    select?: KeywordClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordCluster
     */
    omit?: KeywordClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordClusterInclude<ExtArgs> | null
    /**
     * Filter, which KeywordCluster to fetch.
     */
    where?: KeywordClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeywordClusters to fetch.
     */
    orderBy?: KeywordClusterOrderByWithRelationInput | KeywordClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KeywordClusters.
     */
    cursor?: KeywordClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeywordClusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeywordClusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KeywordClusters.
     */
    distinct?: KeywordClusterScalarFieldEnum | KeywordClusterScalarFieldEnum[]
  }

  /**
   * KeywordCluster findFirstOrThrow
   */
  export type KeywordClusterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordCluster
     */
    select?: KeywordClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordCluster
     */
    omit?: KeywordClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordClusterInclude<ExtArgs> | null
    /**
     * Filter, which KeywordCluster to fetch.
     */
    where?: KeywordClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeywordClusters to fetch.
     */
    orderBy?: KeywordClusterOrderByWithRelationInput | KeywordClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KeywordClusters.
     */
    cursor?: KeywordClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeywordClusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeywordClusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KeywordClusters.
     */
    distinct?: KeywordClusterScalarFieldEnum | KeywordClusterScalarFieldEnum[]
  }

  /**
   * KeywordCluster findMany
   */
  export type KeywordClusterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordCluster
     */
    select?: KeywordClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordCluster
     */
    omit?: KeywordClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordClusterInclude<ExtArgs> | null
    /**
     * Filter, which KeywordClusters to fetch.
     */
    where?: KeywordClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeywordClusters to fetch.
     */
    orderBy?: KeywordClusterOrderByWithRelationInput | KeywordClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KeywordClusters.
     */
    cursor?: KeywordClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeywordClusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeywordClusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KeywordClusters.
     */
    distinct?: KeywordClusterScalarFieldEnum | KeywordClusterScalarFieldEnum[]
  }

  /**
   * KeywordCluster create
   */
  export type KeywordClusterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordCluster
     */
    select?: KeywordClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordCluster
     */
    omit?: KeywordClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordClusterInclude<ExtArgs> | null
    /**
     * The data needed to create a KeywordCluster.
     */
    data: XOR<KeywordClusterCreateInput, KeywordClusterUncheckedCreateInput>
  }

  /**
   * KeywordCluster createMany
   */
  export type KeywordClusterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KeywordClusters.
     */
    data: KeywordClusterCreateManyInput | KeywordClusterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KeywordCluster createManyAndReturn
   */
  export type KeywordClusterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordCluster
     */
    select?: KeywordClusterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordCluster
     */
    omit?: KeywordClusterOmit<ExtArgs> | null
    /**
     * The data used to create many KeywordClusters.
     */
    data: KeywordClusterCreateManyInput | KeywordClusterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KeywordCluster update
   */
  export type KeywordClusterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordCluster
     */
    select?: KeywordClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordCluster
     */
    omit?: KeywordClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordClusterInclude<ExtArgs> | null
    /**
     * The data needed to update a KeywordCluster.
     */
    data: XOR<KeywordClusterUpdateInput, KeywordClusterUncheckedUpdateInput>
    /**
     * Choose, which KeywordCluster to update.
     */
    where: KeywordClusterWhereUniqueInput
  }

  /**
   * KeywordCluster updateMany
   */
  export type KeywordClusterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KeywordClusters.
     */
    data: XOR<KeywordClusterUpdateManyMutationInput, KeywordClusterUncheckedUpdateManyInput>
    /**
     * Filter which KeywordClusters to update
     */
    where?: KeywordClusterWhereInput
    /**
     * Limit how many KeywordClusters to update.
     */
    limit?: number
  }

  /**
   * KeywordCluster updateManyAndReturn
   */
  export type KeywordClusterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordCluster
     */
    select?: KeywordClusterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordCluster
     */
    omit?: KeywordClusterOmit<ExtArgs> | null
    /**
     * The data used to update KeywordClusters.
     */
    data: XOR<KeywordClusterUpdateManyMutationInput, KeywordClusterUncheckedUpdateManyInput>
    /**
     * Filter which KeywordClusters to update
     */
    where?: KeywordClusterWhereInput
    /**
     * Limit how many KeywordClusters to update.
     */
    limit?: number
  }

  /**
   * KeywordCluster upsert
   */
  export type KeywordClusterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordCluster
     */
    select?: KeywordClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordCluster
     */
    omit?: KeywordClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordClusterInclude<ExtArgs> | null
    /**
     * The filter to search for the KeywordCluster to update in case it exists.
     */
    where: KeywordClusterWhereUniqueInput
    /**
     * In case the KeywordCluster found by the `where` argument doesn't exist, create a new KeywordCluster with this data.
     */
    create: XOR<KeywordClusterCreateInput, KeywordClusterUncheckedCreateInput>
    /**
     * In case the KeywordCluster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeywordClusterUpdateInput, KeywordClusterUncheckedUpdateInput>
  }

  /**
   * KeywordCluster delete
   */
  export type KeywordClusterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordCluster
     */
    select?: KeywordClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordCluster
     */
    omit?: KeywordClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordClusterInclude<ExtArgs> | null
    /**
     * Filter which KeywordCluster to delete.
     */
    where: KeywordClusterWhereUniqueInput
  }

  /**
   * KeywordCluster deleteMany
   */
  export type KeywordClusterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KeywordClusters to delete
     */
    where?: KeywordClusterWhereInput
    /**
     * Limit how many KeywordClusters to delete.
     */
    limit?: number
  }

  /**
   * KeywordCluster.keywords
   */
  export type KeywordCluster$keywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    where?: KeywordWhereInput
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    cursor?: KeywordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * KeywordCluster without action
   */
  export type KeywordClusterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordCluster
     */
    select?: KeywordClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordCluster
     */
    omit?: KeywordClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordClusterInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SiteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    domain: 'domain',
    country: 'country',
    status: 'status',
    progress: 'progress',
    pagesCount: 'pagesCount',
    seoScore: 'seoScore',
    language: 'language',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SiteScalarFieldEnum = (typeof SiteScalarFieldEnum)[keyof typeof SiteScalarFieldEnum]


  export const PageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    siteId: 'siteId',
    title: 'title',
    description: 'description',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    wordCount: 'wordCount',
    content: 'content',
    keywords: 'keywords',
    intent: 'intent',
    seoScore: 'seoScore',
    uxScore: 'uxScore',
    performance: 'performance',
    issues: 'issues',
    suggestions: 'suggestions',
    lastCrawledAt: 'lastCrawledAt',
    images: 'images',
    sections: 'sections',
    links: 'links',
    technical: 'technical',
    accessibility: 'accessibility',
    indexing: 'indexing',
    pageSpeed: 'pageSpeed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PageScalarFieldEnum = (typeof PageScalarFieldEnum)[keyof typeof PageScalarFieldEnum]


  export const PageVersionScalarFieldEnum: {
    id: 'id',
    pageId: 'pageId',
    version: 'version',
    url: 'url',
    title: 'title',
    description: 'description',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    wordCount: 'wordCount',
    content: 'content',
    issues: 'issues',
    suggestions: 'suggestions',
    keywords: 'keywords',
    intent: 'intent',
    seoScore: 'seoScore',
    uxScore: 'uxScore',
    performance: 'performance',
    images: 'images',
    sections: 'sections',
    links: 'links',
    technical: 'technical',
    accessibility: 'accessibility',
    indexing: 'indexing',
    pageSpeed: 'pageSpeed',
    createdAt: 'createdAt'
  };

  export type PageVersionScalarFieldEnum = (typeof PageVersionScalarFieldEnum)[keyof typeof PageVersionScalarFieldEnum]


  export const CrawlLogScalarFieldEnum: {
    id: 'id',
    siteId: 'siteId',
    level: 'level',
    message: 'message',
    url: 'url',
    createdAt: 'createdAt'
  };

  export type CrawlLogScalarFieldEnum = (typeof CrawlLogScalarFieldEnum)[keyof typeof CrawlLogScalarFieldEnum]


  export const AppSettingScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppSettingScalarFieldEnum = (typeof AppSettingScalarFieldEnum)[keyof typeof AppSettingScalarFieldEnum]


  export const KeywordScalarFieldEnum: {
    id: 'id',
    keyword: 'keyword',
    normalized: 'normalized',
    source: 'source',
    intent: 'intent',
    cluster: 'cluster',
    country: 'country',
    language: 'language',
    pageId: 'pageId',
    siteId: 'siteId',
    clusterId: 'clusterId',
    priority: 'priority',
    createdAt: 'createdAt'
  };

  export type KeywordScalarFieldEnum = (typeof KeywordScalarFieldEnum)[keyof typeof KeywordScalarFieldEnum]


  export const KeywordClusterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    siteId: 'siteId',
    country: 'country',
    language: 'language',
    createdAt: 'createdAt'
  };

  export type KeywordClusterScalarFieldEnum = (typeof KeywordClusterScalarFieldEnum)[keyof typeof KeywordClusterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SiteWhereInput = {
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    id?: StringFilter<"Site"> | string
    name?: StringFilter<"Site"> | string
    domain?: StringFilter<"Site"> | string
    country?: StringFilter<"Site"> | string
    status?: StringFilter<"Site"> | string
    progress?: IntFilter<"Site"> | number
    pagesCount?: IntFilter<"Site"> | number
    seoScore?: IntFilter<"Site"> | number
    language?: StringFilter<"Site"> | string
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    crawlLogs?: CrawlLogListRelationFilter
    pages?: PageListRelationFilter
    keywords?: KeywordListRelationFilter
  }

  export type SiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    country?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    pagesCount?: SortOrder
    seoScore?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    crawlLogs?: CrawlLogOrderByRelationAggregateInput
    pages?: PageOrderByRelationAggregateInput
    keywords?: KeywordOrderByRelationAggregateInput
  }

  export type SiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    domain?: string
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    name?: StringFilter<"Site"> | string
    country?: StringFilter<"Site"> | string
    status?: StringFilter<"Site"> | string
    progress?: IntFilter<"Site"> | number
    pagesCount?: IntFilter<"Site"> | number
    seoScore?: IntFilter<"Site"> | number
    language?: StringFilter<"Site"> | string
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    crawlLogs?: CrawlLogListRelationFilter
    pages?: PageListRelationFilter
    keywords?: KeywordListRelationFilter
  }, "id" | "domain">

  export type SiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    country?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    pagesCount?: SortOrder
    seoScore?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteCountOrderByAggregateInput
    _avg?: SiteAvgOrderByAggregateInput
    _max?: SiteMaxOrderByAggregateInput
    _min?: SiteMinOrderByAggregateInput
    _sum?: SiteSumOrderByAggregateInput
  }

  export type SiteScalarWhereWithAggregatesInput = {
    AND?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    OR?: SiteScalarWhereWithAggregatesInput[]
    NOT?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Site"> | string
    name?: StringWithAggregatesFilter<"Site"> | string
    domain?: StringWithAggregatesFilter<"Site"> | string
    country?: StringWithAggregatesFilter<"Site"> | string
    status?: StringWithAggregatesFilter<"Site"> | string
    progress?: IntWithAggregatesFilter<"Site"> | number
    pagesCount?: IntWithAggregatesFilter<"Site"> | number
    seoScore?: IntWithAggregatesFilter<"Site"> | number
    language?: StringWithAggregatesFilter<"Site"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
  }

  export type PageWhereInput = {
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    id?: StringFilter<"Page"> | string
    url?: StringFilter<"Page"> | string
    siteId?: StringFilter<"Page"> | string
    title?: StringNullableFilter<"Page"> | string | null
    description?: StringNullableFilter<"Page"> | string | null
    h1?: StringNullableFilter<"Page"> | string | null
    h2?: JsonNullableFilter<"Page">
    h3?: JsonNullableFilter<"Page">
    wordCount?: IntNullableFilter<"Page"> | number | null
    content?: StringNullableFilter<"Page"> | string | null
    keywords?: JsonNullableFilter<"Page">
    intent?: StringNullableFilter<"Page"> | string | null
    seoScore?: IntNullableFilter<"Page"> | number | null
    uxScore?: IntNullableFilter<"Page"> | number | null
    performance?: IntNullableFilter<"Page"> | number | null
    issues?: JsonNullableFilter<"Page">
    suggestions?: JsonNullableFilter<"Page">
    lastCrawledAt?: DateTimeNullableFilter<"Page"> | Date | string | null
    images?: JsonNullableFilter<"Page">
    sections?: JsonNullableFilter<"Page">
    links?: JsonNullableFilter<"Page">
    technical?: JsonNullableFilter<"Page">
    accessibility?: JsonNullableFilter<"Page">
    indexing?: JsonNullableFilter<"Page">
    pageSpeed?: JsonNullableFilter<"Page">
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    versions?: PageVersionListRelationFilter
    keywordEntities?: KeywordListRelationFilter
  }

  export type PageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    siteId?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    h1?: SortOrderInput | SortOrder
    h2?: SortOrderInput | SortOrder
    h3?: SortOrderInput | SortOrder
    wordCount?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    intent?: SortOrderInput | SortOrder
    seoScore?: SortOrderInput | SortOrder
    uxScore?: SortOrderInput | SortOrder
    performance?: SortOrderInput | SortOrder
    issues?: SortOrderInput | SortOrder
    suggestions?: SortOrderInput | SortOrder
    lastCrawledAt?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    sections?: SortOrderInput | SortOrder
    links?: SortOrderInput | SortOrder
    technical?: SortOrderInput | SortOrder
    accessibility?: SortOrderInput | SortOrder
    indexing?: SortOrderInput | SortOrder
    pageSpeed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    site?: SiteOrderByWithRelationInput
    versions?: PageVersionOrderByRelationAggregateInput
    keywordEntities?: KeywordOrderByRelationAggregateInput
  }

  export type PageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    siteId?: StringFilter<"Page"> | string
    title?: StringNullableFilter<"Page"> | string | null
    description?: StringNullableFilter<"Page"> | string | null
    h1?: StringNullableFilter<"Page"> | string | null
    h2?: JsonNullableFilter<"Page">
    h3?: JsonNullableFilter<"Page">
    wordCount?: IntNullableFilter<"Page"> | number | null
    content?: StringNullableFilter<"Page"> | string | null
    keywords?: JsonNullableFilter<"Page">
    intent?: StringNullableFilter<"Page"> | string | null
    seoScore?: IntNullableFilter<"Page"> | number | null
    uxScore?: IntNullableFilter<"Page"> | number | null
    performance?: IntNullableFilter<"Page"> | number | null
    issues?: JsonNullableFilter<"Page">
    suggestions?: JsonNullableFilter<"Page">
    lastCrawledAt?: DateTimeNullableFilter<"Page"> | Date | string | null
    images?: JsonNullableFilter<"Page">
    sections?: JsonNullableFilter<"Page">
    links?: JsonNullableFilter<"Page">
    technical?: JsonNullableFilter<"Page">
    accessibility?: JsonNullableFilter<"Page">
    indexing?: JsonNullableFilter<"Page">
    pageSpeed?: JsonNullableFilter<"Page">
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    versions?: PageVersionListRelationFilter
    keywordEntities?: KeywordListRelationFilter
  }, "id" | "url">

  export type PageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    siteId?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    h1?: SortOrderInput | SortOrder
    h2?: SortOrderInput | SortOrder
    h3?: SortOrderInput | SortOrder
    wordCount?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    intent?: SortOrderInput | SortOrder
    seoScore?: SortOrderInput | SortOrder
    uxScore?: SortOrderInput | SortOrder
    performance?: SortOrderInput | SortOrder
    issues?: SortOrderInput | SortOrder
    suggestions?: SortOrderInput | SortOrder
    lastCrawledAt?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    sections?: SortOrderInput | SortOrder
    links?: SortOrderInput | SortOrder
    technical?: SortOrderInput | SortOrder
    accessibility?: SortOrderInput | SortOrder
    indexing?: SortOrderInput | SortOrder
    pageSpeed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PageCountOrderByAggregateInput
    _avg?: PageAvgOrderByAggregateInput
    _max?: PageMaxOrderByAggregateInput
    _min?: PageMinOrderByAggregateInput
    _sum?: PageSumOrderByAggregateInput
  }

  export type PageScalarWhereWithAggregatesInput = {
    AND?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    OR?: PageScalarWhereWithAggregatesInput[]
    NOT?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Page"> | string
    url?: StringWithAggregatesFilter<"Page"> | string
    siteId?: StringWithAggregatesFilter<"Page"> | string
    title?: StringNullableWithAggregatesFilter<"Page"> | string | null
    description?: StringNullableWithAggregatesFilter<"Page"> | string | null
    h1?: StringNullableWithAggregatesFilter<"Page"> | string | null
    h2?: JsonNullableWithAggregatesFilter<"Page">
    h3?: JsonNullableWithAggregatesFilter<"Page">
    wordCount?: IntNullableWithAggregatesFilter<"Page"> | number | null
    content?: StringNullableWithAggregatesFilter<"Page"> | string | null
    keywords?: JsonNullableWithAggregatesFilter<"Page">
    intent?: StringNullableWithAggregatesFilter<"Page"> | string | null
    seoScore?: IntNullableWithAggregatesFilter<"Page"> | number | null
    uxScore?: IntNullableWithAggregatesFilter<"Page"> | number | null
    performance?: IntNullableWithAggregatesFilter<"Page"> | number | null
    issues?: JsonNullableWithAggregatesFilter<"Page">
    suggestions?: JsonNullableWithAggregatesFilter<"Page">
    lastCrawledAt?: DateTimeNullableWithAggregatesFilter<"Page"> | Date | string | null
    images?: JsonNullableWithAggregatesFilter<"Page">
    sections?: JsonNullableWithAggregatesFilter<"Page">
    links?: JsonNullableWithAggregatesFilter<"Page">
    technical?: JsonNullableWithAggregatesFilter<"Page">
    accessibility?: JsonNullableWithAggregatesFilter<"Page">
    indexing?: JsonNullableWithAggregatesFilter<"Page">
    pageSpeed?: JsonNullableWithAggregatesFilter<"Page">
    createdAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
  }

  export type PageVersionWhereInput = {
    AND?: PageVersionWhereInput | PageVersionWhereInput[]
    OR?: PageVersionWhereInput[]
    NOT?: PageVersionWhereInput | PageVersionWhereInput[]
    id?: StringFilter<"PageVersion"> | string
    pageId?: StringFilter<"PageVersion"> | string
    version?: IntFilter<"PageVersion"> | number
    url?: StringFilter<"PageVersion"> | string
    title?: StringNullableFilter<"PageVersion"> | string | null
    description?: StringNullableFilter<"PageVersion"> | string | null
    h1?: StringNullableFilter<"PageVersion"> | string | null
    h2?: JsonNullableFilter<"PageVersion">
    h3?: JsonNullableFilter<"PageVersion">
    wordCount?: IntNullableFilter<"PageVersion"> | number | null
    content?: StringNullableFilter<"PageVersion"> | string | null
    issues?: JsonNullableFilter<"PageVersion">
    suggestions?: JsonNullableFilter<"PageVersion">
    keywords?: JsonNullableFilter<"PageVersion">
    intent?: StringNullableFilter<"PageVersion"> | string | null
    seoScore?: IntNullableFilter<"PageVersion"> | number | null
    uxScore?: IntNullableFilter<"PageVersion"> | number | null
    performance?: IntNullableFilter<"PageVersion"> | number | null
    images?: JsonNullableFilter<"PageVersion">
    sections?: JsonNullableFilter<"PageVersion">
    links?: JsonNullableFilter<"PageVersion">
    technical?: JsonNullableFilter<"PageVersion">
    accessibility?: JsonNullableFilter<"PageVersion">
    indexing?: JsonNullableFilter<"PageVersion">
    pageSpeed?: JsonNullableFilter<"PageVersion">
    createdAt?: DateTimeFilter<"PageVersion"> | Date | string
    page?: XOR<PageScalarRelationFilter, PageWhereInput>
  }

  export type PageVersionOrderByWithRelationInput = {
    id?: SortOrder
    pageId?: SortOrder
    version?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    h1?: SortOrderInput | SortOrder
    h2?: SortOrderInput | SortOrder
    h3?: SortOrderInput | SortOrder
    wordCount?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    issues?: SortOrderInput | SortOrder
    suggestions?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    intent?: SortOrderInput | SortOrder
    seoScore?: SortOrderInput | SortOrder
    uxScore?: SortOrderInput | SortOrder
    performance?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    sections?: SortOrderInput | SortOrder
    links?: SortOrderInput | SortOrder
    technical?: SortOrderInput | SortOrder
    accessibility?: SortOrderInput | SortOrder
    indexing?: SortOrderInput | SortOrder
    pageSpeed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    page?: PageOrderByWithRelationInput
  }

  export type PageVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PageVersionWhereInput | PageVersionWhereInput[]
    OR?: PageVersionWhereInput[]
    NOT?: PageVersionWhereInput | PageVersionWhereInput[]
    pageId?: StringFilter<"PageVersion"> | string
    version?: IntFilter<"PageVersion"> | number
    url?: StringFilter<"PageVersion"> | string
    title?: StringNullableFilter<"PageVersion"> | string | null
    description?: StringNullableFilter<"PageVersion"> | string | null
    h1?: StringNullableFilter<"PageVersion"> | string | null
    h2?: JsonNullableFilter<"PageVersion">
    h3?: JsonNullableFilter<"PageVersion">
    wordCount?: IntNullableFilter<"PageVersion"> | number | null
    content?: StringNullableFilter<"PageVersion"> | string | null
    issues?: JsonNullableFilter<"PageVersion">
    suggestions?: JsonNullableFilter<"PageVersion">
    keywords?: JsonNullableFilter<"PageVersion">
    intent?: StringNullableFilter<"PageVersion"> | string | null
    seoScore?: IntNullableFilter<"PageVersion"> | number | null
    uxScore?: IntNullableFilter<"PageVersion"> | number | null
    performance?: IntNullableFilter<"PageVersion"> | number | null
    images?: JsonNullableFilter<"PageVersion">
    sections?: JsonNullableFilter<"PageVersion">
    links?: JsonNullableFilter<"PageVersion">
    technical?: JsonNullableFilter<"PageVersion">
    accessibility?: JsonNullableFilter<"PageVersion">
    indexing?: JsonNullableFilter<"PageVersion">
    pageSpeed?: JsonNullableFilter<"PageVersion">
    createdAt?: DateTimeFilter<"PageVersion"> | Date | string
    page?: XOR<PageScalarRelationFilter, PageWhereInput>
  }, "id">

  export type PageVersionOrderByWithAggregationInput = {
    id?: SortOrder
    pageId?: SortOrder
    version?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    h1?: SortOrderInput | SortOrder
    h2?: SortOrderInput | SortOrder
    h3?: SortOrderInput | SortOrder
    wordCount?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    issues?: SortOrderInput | SortOrder
    suggestions?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    intent?: SortOrderInput | SortOrder
    seoScore?: SortOrderInput | SortOrder
    uxScore?: SortOrderInput | SortOrder
    performance?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    sections?: SortOrderInput | SortOrder
    links?: SortOrderInput | SortOrder
    technical?: SortOrderInput | SortOrder
    accessibility?: SortOrderInput | SortOrder
    indexing?: SortOrderInput | SortOrder
    pageSpeed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PageVersionCountOrderByAggregateInput
    _avg?: PageVersionAvgOrderByAggregateInput
    _max?: PageVersionMaxOrderByAggregateInput
    _min?: PageVersionMinOrderByAggregateInput
    _sum?: PageVersionSumOrderByAggregateInput
  }

  export type PageVersionScalarWhereWithAggregatesInput = {
    AND?: PageVersionScalarWhereWithAggregatesInput | PageVersionScalarWhereWithAggregatesInput[]
    OR?: PageVersionScalarWhereWithAggregatesInput[]
    NOT?: PageVersionScalarWhereWithAggregatesInput | PageVersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PageVersion"> | string
    pageId?: StringWithAggregatesFilter<"PageVersion"> | string
    version?: IntWithAggregatesFilter<"PageVersion"> | number
    url?: StringWithAggregatesFilter<"PageVersion"> | string
    title?: StringNullableWithAggregatesFilter<"PageVersion"> | string | null
    description?: StringNullableWithAggregatesFilter<"PageVersion"> | string | null
    h1?: StringNullableWithAggregatesFilter<"PageVersion"> | string | null
    h2?: JsonNullableWithAggregatesFilter<"PageVersion">
    h3?: JsonNullableWithAggregatesFilter<"PageVersion">
    wordCount?: IntNullableWithAggregatesFilter<"PageVersion"> | number | null
    content?: StringNullableWithAggregatesFilter<"PageVersion"> | string | null
    issues?: JsonNullableWithAggregatesFilter<"PageVersion">
    suggestions?: JsonNullableWithAggregatesFilter<"PageVersion">
    keywords?: JsonNullableWithAggregatesFilter<"PageVersion">
    intent?: StringNullableWithAggregatesFilter<"PageVersion"> | string | null
    seoScore?: IntNullableWithAggregatesFilter<"PageVersion"> | number | null
    uxScore?: IntNullableWithAggregatesFilter<"PageVersion"> | number | null
    performance?: IntNullableWithAggregatesFilter<"PageVersion"> | number | null
    images?: JsonNullableWithAggregatesFilter<"PageVersion">
    sections?: JsonNullableWithAggregatesFilter<"PageVersion">
    links?: JsonNullableWithAggregatesFilter<"PageVersion">
    technical?: JsonNullableWithAggregatesFilter<"PageVersion">
    accessibility?: JsonNullableWithAggregatesFilter<"PageVersion">
    indexing?: JsonNullableWithAggregatesFilter<"PageVersion">
    pageSpeed?: JsonNullableWithAggregatesFilter<"PageVersion">
    createdAt?: DateTimeWithAggregatesFilter<"PageVersion"> | Date | string
  }

  export type CrawlLogWhereInput = {
    AND?: CrawlLogWhereInput | CrawlLogWhereInput[]
    OR?: CrawlLogWhereInput[]
    NOT?: CrawlLogWhereInput | CrawlLogWhereInput[]
    id?: StringFilter<"CrawlLog"> | string
    siteId?: StringFilter<"CrawlLog"> | string
    level?: StringFilter<"CrawlLog"> | string
    message?: StringFilter<"CrawlLog"> | string
    url?: StringNullableFilter<"CrawlLog"> | string | null
    createdAt?: DateTimeFilter<"CrawlLog"> | Date | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
  }

  export type CrawlLogOrderByWithRelationInput = {
    id?: SortOrder
    siteId?: SortOrder
    level?: SortOrder
    message?: SortOrder
    url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    site?: SiteOrderByWithRelationInput
  }

  export type CrawlLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CrawlLogWhereInput | CrawlLogWhereInput[]
    OR?: CrawlLogWhereInput[]
    NOT?: CrawlLogWhereInput | CrawlLogWhereInput[]
    siteId?: StringFilter<"CrawlLog"> | string
    level?: StringFilter<"CrawlLog"> | string
    message?: StringFilter<"CrawlLog"> | string
    url?: StringNullableFilter<"CrawlLog"> | string | null
    createdAt?: DateTimeFilter<"CrawlLog"> | Date | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
  }, "id">

  export type CrawlLogOrderByWithAggregationInput = {
    id?: SortOrder
    siteId?: SortOrder
    level?: SortOrder
    message?: SortOrder
    url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CrawlLogCountOrderByAggregateInput
    _max?: CrawlLogMaxOrderByAggregateInput
    _min?: CrawlLogMinOrderByAggregateInput
  }

  export type CrawlLogScalarWhereWithAggregatesInput = {
    AND?: CrawlLogScalarWhereWithAggregatesInput | CrawlLogScalarWhereWithAggregatesInput[]
    OR?: CrawlLogScalarWhereWithAggregatesInput[]
    NOT?: CrawlLogScalarWhereWithAggregatesInput | CrawlLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CrawlLog"> | string
    siteId?: StringWithAggregatesFilter<"CrawlLog"> | string
    level?: StringWithAggregatesFilter<"CrawlLog"> | string
    message?: StringWithAggregatesFilter<"CrawlLog"> | string
    url?: StringNullableWithAggregatesFilter<"CrawlLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CrawlLog"> | Date | string
  }

  export type AppSettingWhereInput = {
    AND?: AppSettingWhereInput | AppSettingWhereInput[]
    OR?: AppSettingWhereInput[]
    NOT?: AppSettingWhereInput | AppSettingWhereInput[]
    id?: StringFilter<"AppSetting"> | string
    key?: StringFilter<"AppSetting"> | string
    value?: JsonNullableFilter<"AppSetting">
    createdAt?: DateTimeFilter<"AppSetting"> | Date | string
    updatedAt?: DateTimeFilter<"AppSetting"> | Date | string
  }

  export type AppSettingOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: AppSettingWhereInput | AppSettingWhereInput[]
    OR?: AppSettingWhereInput[]
    NOT?: AppSettingWhereInput | AppSettingWhereInput[]
    value?: JsonNullableFilter<"AppSetting">
    createdAt?: DateTimeFilter<"AppSetting"> | Date | string
    updatedAt?: DateTimeFilter<"AppSetting"> | Date | string
  }, "id" | "key">

  export type AppSettingOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppSettingCountOrderByAggregateInput
    _max?: AppSettingMaxOrderByAggregateInput
    _min?: AppSettingMinOrderByAggregateInput
  }

  export type AppSettingScalarWhereWithAggregatesInput = {
    AND?: AppSettingScalarWhereWithAggregatesInput | AppSettingScalarWhereWithAggregatesInput[]
    OR?: AppSettingScalarWhereWithAggregatesInput[]
    NOT?: AppSettingScalarWhereWithAggregatesInput | AppSettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppSetting"> | string
    key?: StringWithAggregatesFilter<"AppSetting"> | string
    value?: JsonNullableWithAggregatesFilter<"AppSetting">
    createdAt?: DateTimeWithAggregatesFilter<"AppSetting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AppSetting"> | Date | string
  }

  export type KeywordWhereInput = {
    AND?: KeywordWhereInput | KeywordWhereInput[]
    OR?: KeywordWhereInput[]
    NOT?: KeywordWhereInput | KeywordWhereInput[]
    id?: StringFilter<"Keyword"> | string
    keyword?: StringFilter<"Keyword"> | string
    normalized?: StringFilter<"Keyword"> | string
    source?: StringFilter<"Keyword"> | string
    intent?: StringNullableFilter<"Keyword"> | string | null
    cluster?: StringNullableFilter<"Keyword"> | string | null
    country?: StringFilter<"Keyword"> | string
    language?: StringFilter<"Keyword"> | string
    pageId?: StringNullableFilter<"Keyword"> | string | null
    siteId?: StringNullableFilter<"Keyword"> | string | null
    clusterId?: StringNullableFilter<"Keyword"> | string | null
    priority?: IntNullableFilter<"Keyword"> | number | null
    createdAt?: DateTimeFilter<"Keyword"> | Date | string
    page?: XOR<PageNullableScalarRelationFilter, PageWhereInput> | null
    site?: XOR<SiteNullableScalarRelationFilter, SiteWhereInput> | null
    keywordCluster?: XOR<KeywordClusterNullableScalarRelationFilter, KeywordClusterWhereInput> | null
  }

  export type KeywordOrderByWithRelationInput = {
    id?: SortOrder
    keyword?: SortOrder
    normalized?: SortOrder
    source?: SortOrder
    intent?: SortOrderInput | SortOrder
    cluster?: SortOrderInput | SortOrder
    country?: SortOrder
    language?: SortOrder
    pageId?: SortOrderInput | SortOrder
    siteId?: SortOrderInput | SortOrder
    clusterId?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    page?: PageOrderByWithRelationInput
    site?: SiteOrderByWithRelationInput
    keywordCluster?: KeywordClusterOrderByWithRelationInput
  }

  export type KeywordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KeywordWhereInput | KeywordWhereInput[]
    OR?: KeywordWhereInput[]
    NOT?: KeywordWhereInput | KeywordWhereInput[]
    keyword?: StringFilter<"Keyword"> | string
    normalized?: StringFilter<"Keyword"> | string
    source?: StringFilter<"Keyword"> | string
    intent?: StringNullableFilter<"Keyword"> | string | null
    cluster?: StringNullableFilter<"Keyword"> | string | null
    country?: StringFilter<"Keyword"> | string
    language?: StringFilter<"Keyword"> | string
    pageId?: StringNullableFilter<"Keyword"> | string | null
    siteId?: StringNullableFilter<"Keyword"> | string | null
    clusterId?: StringNullableFilter<"Keyword"> | string | null
    priority?: IntNullableFilter<"Keyword"> | number | null
    createdAt?: DateTimeFilter<"Keyword"> | Date | string
    page?: XOR<PageNullableScalarRelationFilter, PageWhereInput> | null
    site?: XOR<SiteNullableScalarRelationFilter, SiteWhereInput> | null
    keywordCluster?: XOR<KeywordClusterNullableScalarRelationFilter, KeywordClusterWhereInput> | null
  }, "id">

  export type KeywordOrderByWithAggregationInput = {
    id?: SortOrder
    keyword?: SortOrder
    normalized?: SortOrder
    source?: SortOrder
    intent?: SortOrderInput | SortOrder
    cluster?: SortOrderInput | SortOrder
    country?: SortOrder
    language?: SortOrder
    pageId?: SortOrderInput | SortOrder
    siteId?: SortOrderInput | SortOrder
    clusterId?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: KeywordCountOrderByAggregateInput
    _avg?: KeywordAvgOrderByAggregateInput
    _max?: KeywordMaxOrderByAggregateInput
    _min?: KeywordMinOrderByAggregateInput
    _sum?: KeywordSumOrderByAggregateInput
  }

  export type KeywordScalarWhereWithAggregatesInput = {
    AND?: KeywordScalarWhereWithAggregatesInput | KeywordScalarWhereWithAggregatesInput[]
    OR?: KeywordScalarWhereWithAggregatesInput[]
    NOT?: KeywordScalarWhereWithAggregatesInput | KeywordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Keyword"> | string
    keyword?: StringWithAggregatesFilter<"Keyword"> | string
    normalized?: StringWithAggregatesFilter<"Keyword"> | string
    source?: StringWithAggregatesFilter<"Keyword"> | string
    intent?: StringNullableWithAggregatesFilter<"Keyword"> | string | null
    cluster?: StringNullableWithAggregatesFilter<"Keyword"> | string | null
    country?: StringWithAggregatesFilter<"Keyword"> | string
    language?: StringWithAggregatesFilter<"Keyword"> | string
    pageId?: StringNullableWithAggregatesFilter<"Keyword"> | string | null
    siteId?: StringNullableWithAggregatesFilter<"Keyword"> | string | null
    clusterId?: StringNullableWithAggregatesFilter<"Keyword"> | string | null
    priority?: IntNullableWithAggregatesFilter<"Keyword"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Keyword"> | Date | string
  }

  export type KeywordClusterWhereInput = {
    AND?: KeywordClusterWhereInput | KeywordClusterWhereInput[]
    OR?: KeywordClusterWhereInput[]
    NOT?: KeywordClusterWhereInput | KeywordClusterWhereInput[]
    id?: StringFilter<"KeywordCluster"> | string
    name?: StringFilter<"KeywordCluster"> | string
    siteId?: StringFilter<"KeywordCluster"> | string
    country?: StringFilter<"KeywordCluster"> | string
    language?: StringFilter<"KeywordCluster"> | string
    createdAt?: DateTimeFilter<"KeywordCluster"> | Date | string
    keywords?: KeywordListRelationFilter
  }

  export type KeywordClusterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    siteId?: SortOrder
    country?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    keywords?: KeywordOrderByRelationAggregateInput
  }

  export type KeywordClusterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KeywordClusterWhereInput | KeywordClusterWhereInput[]
    OR?: KeywordClusterWhereInput[]
    NOT?: KeywordClusterWhereInput | KeywordClusterWhereInput[]
    name?: StringFilter<"KeywordCluster"> | string
    siteId?: StringFilter<"KeywordCluster"> | string
    country?: StringFilter<"KeywordCluster"> | string
    language?: StringFilter<"KeywordCluster"> | string
    createdAt?: DateTimeFilter<"KeywordCluster"> | Date | string
    keywords?: KeywordListRelationFilter
  }, "id">

  export type KeywordClusterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    siteId?: SortOrder
    country?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    _count?: KeywordClusterCountOrderByAggregateInput
    _max?: KeywordClusterMaxOrderByAggregateInput
    _min?: KeywordClusterMinOrderByAggregateInput
  }

  export type KeywordClusterScalarWhereWithAggregatesInput = {
    AND?: KeywordClusterScalarWhereWithAggregatesInput | KeywordClusterScalarWhereWithAggregatesInput[]
    OR?: KeywordClusterScalarWhereWithAggregatesInput[]
    NOT?: KeywordClusterScalarWhereWithAggregatesInput | KeywordClusterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KeywordCluster"> | string
    name?: StringWithAggregatesFilter<"KeywordCluster"> | string
    siteId?: StringWithAggregatesFilter<"KeywordCluster"> | string
    country?: StringWithAggregatesFilter<"KeywordCluster"> | string
    language?: StringWithAggregatesFilter<"KeywordCluster"> | string
    createdAt?: DateTimeWithAggregatesFilter<"KeywordCluster"> | Date | string
  }

  export type SiteCreateInput = {
    id?: string
    name: string
    domain: string
    country?: string
    status?: string
    progress?: number
    pagesCount?: number
    seoScore?: number
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    crawlLogs?: CrawlLogCreateNestedManyWithoutSiteInput
    pages?: PageCreateNestedManyWithoutSiteInput
    keywords?: KeywordCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateInput = {
    id?: string
    name: string
    domain: string
    country?: string
    status?: string
    progress?: number
    pagesCount?: number
    seoScore?: number
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    crawlLogs?: CrawlLogUncheckedCreateNestedManyWithoutSiteInput
    pages?: PageUncheckedCreateNestedManyWithoutSiteInput
    keywords?: KeywordUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    pagesCount?: IntFieldUpdateOperationsInput | number
    seoScore?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crawlLogs?: CrawlLogUpdateManyWithoutSiteNestedInput
    pages?: PageUpdateManyWithoutSiteNestedInput
    keywords?: KeywordUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    pagesCount?: IntFieldUpdateOperationsInput | number
    seoScore?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crawlLogs?: CrawlLogUncheckedUpdateManyWithoutSiteNestedInput
    pages?: PageUncheckedUpdateManyWithoutSiteNestedInput
    keywords?: KeywordUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteCreateManyInput = {
    id?: string
    name: string
    domain: string
    country?: string
    status?: string
    progress?: number
    pagesCount?: number
    seoScore?: number
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    pagesCount?: IntFieldUpdateOperationsInput | number
    seoScore?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    pagesCount?: IntFieldUpdateOperationsInput | number
    seoScore?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageCreateInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    h1?: string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: number | null
    content?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: string | null
    seoScore?: number | null
    uxScore?: number | null
    performance?: number | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    lastCrawledAt?: Date | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    site: SiteCreateNestedOneWithoutPagesInput
    versions?: PageVersionCreateNestedManyWithoutPageInput
    keywordEntities?: KeywordCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateInput = {
    id?: string
    url: string
    siteId: string
    title?: string | null
    description?: string | null
    h1?: string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: number | null
    content?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: string | null
    seoScore?: number | null
    uxScore?: number | null
    performance?: number | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    lastCrawledAt?: Date | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: PageVersionUncheckedCreateNestedManyWithoutPageInput
    keywordEntities?: KeywordUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    h1?: NullableStringFieldUpdateOperationsInput | string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    seoScore?: NullableIntFieldUpdateOperationsInput | number | null
    uxScore?: NullableIntFieldUpdateOperationsInput | number | null
    performance?: NullableIntFieldUpdateOperationsInput | number | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    lastCrawledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutPagesNestedInput
    versions?: PageVersionUpdateManyWithoutPageNestedInput
    keywordEntities?: KeywordUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    h1?: NullableStringFieldUpdateOperationsInput | string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    seoScore?: NullableIntFieldUpdateOperationsInput | number | null
    uxScore?: NullableIntFieldUpdateOperationsInput | number | null
    performance?: NullableIntFieldUpdateOperationsInput | number | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    lastCrawledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: PageVersionUncheckedUpdateManyWithoutPageNestedInput
    keywordEntities?: KeywordUncheckedUpdateManyWithoutPageNestedInput
  }

  export type PageCreateManyInput = {
    id?: string
    url: string
    siteId: string
    title?: string | null
    description?: string | null
    h1?: string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: number | null
    content?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: string | null
    seoScore?: number | null
    uxScore?: number | null
    performance?: number | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    lastCrawledAt?: Date | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    h1?: NullableStringFieldUpdateOperationsInput | string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    seoScore?: NullableIntFieldUpdateOperationsInput | number | null
    uxScore?: NullableIntFieldUpdateOperationsInput | number | null
    performance?: NullableIntFieldUpdateOperationsInput | number | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    lastCrawledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    h1?: NullableStringFieldUpdateOperationsInput | string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    seoScore?: NullableIntFieldUpdateOperationsInput | number | null
    uxScore?: NullableIntFieldUpdateOperationsInput | number | null
    performance?: NullableIntFieldUpdateOperationsInput | number | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    lastCrawledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageVersionCreateInput = {
    id?: string
    version: number
    url: string
    title?: string | null
    description?: string | null
    h1?: string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: number | null
    content?: string | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: string | null
    seoScore?: number | null
    uxScore?: number | null
    performance?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    page: PageCreateNestedOneWithoutVersionsInput
  }

  export type PageVersionUncheckedCreateInput = {
    id?: string
    pageId: string
    version: number
    url: string
    title?: string | null
    description?: string | null
    h1?: string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: number | null
    content?: string | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: string | null
    seoScore?: number | null
    uxScore?: number | null
    performance?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PageVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    h1?: NullableStringFieldUpdateOperationsInput | string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    seoScore?: NullableIntFieldUpdateOperationsInput | number | null
    uxScore?: NullableIntFieldUpdateOperationsInput | number | null
    performance?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: PageUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type PageVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    h1?: NullableStringFieldUpdateOperationsInput | string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    seoScore?: NullableIntFieldUpdateOperationsInput | number | null
    uxScore?: NullableIntFieldUpdateOperationsInput | number | null
    performance?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageVersionCreateManyInput = {
    id?: string
    pageId: string
    version: number
    url: string
    title?: string | null
    description?: string | null
    h1?: string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: number | null
    content?: string | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: string | null
    seoScore?: number | null
    uxScore?: number | null
    performance?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PageVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    h1?: NullableStringFieldUpdateOperationsInput | string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    seoScore?: NullableIntFieldUpdateOperationsInput | number | null
    uxScore?: NullableIntFieldUpdateOperationsInput | number | null
    performance?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    h1?: NullableStringFieldUpdateOperationsInput | string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    seoScore?: NullableIntFieldUpdateOperationsInput | number | null
    uxScore?: NullableIntFieldUpdateOperationsInput | number | null
    performance?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlLogCreateInput = {
    id?: string
    level?: string
    message: string
    url?: string | null
    createdAt?: Date | string
    site: SiteCreateNestedOneWithoutCrawlLogsInput
  }

  export type CrawlLogUncheckedCreateInput = {
    id?: string
    siteId: string
    level?: string
    message: string
    url?: string | null
    createdAt?: Date | string
  }

  export type CrawlLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutCrawlLogsNestedInput
  }

  export type CrawlLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlLogCreateManyInput = {
    id?: string
    siteId: string
    level?: string
    message: string
    url?: string | null
    createdAt?: Date | string
  }

  export type CrawlLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingCreateInput = {
    id?: string
    key: string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppSettingUncheckedCreateInput = {
    id?: string
    key: string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppSettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingCreateManyInput = {
    id?: string
    key: string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppSettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordCreateInput = {
    id?: string
    keyword: string
    normalized: string
    source: string
    intent?: string | null
    cluster?: string | null
    country?: string
    language?: string
    priority?: number | null
    createdAt?: Date | string
    page?: PageCreateNestedOneWithoutKeywordEntitiesInput
    site?: SiteCreateNestedOneWithoutKeywordsInput
    keywordCluster?: KeywordClusterCreateNestedOneWithoutKeywordsInput
  }

  export type KeywordUncheckedCreateInput = {
    id?: string
    keyword: string
    normalized: string
    source: string
    intent?: string | null
    cluster?: string | null
    country?: string
    language?: string
    pageId?: string | null
    siteId?: string | null
    clusterId?: string | null
    priority?: number | null
    createdAt?: Date | string
  }

  export type KeywordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    normalized?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: PageUpdateOneWithoutKeywordEntitiesNestedInput
    site?: SiteUpdateOneWithoutKeywordsNestedInput
    keywordCluster?: KeywordClusterUpdateOneWithoutKeywordsNestedInput
  }

  export type KeywordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    normalized?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
    clusterId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordCreateManyInput = {
    id?: string
    keyword: string
    normalized: string
    source: string
    intent?: string | null
    cluster?: string | null
    country?: string
    language?: string
    pageId?: string | null
    siteId?: string | null
    clusterId?: string | null
    priority?: number | null
    createdAt?: Date | string
  }

  export type KeywordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    normalized?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    normalized?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
    clusterId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordClusterCreateInput = {
    id?: string
    name: string
    siteId: string
    country?: string
    language?: string
    createdAt?: Date | string
    keywords?: KeywordCreateNestedManyWithoutKeywordClusterInput
  }

  export type KeywordClusterUncheckedCreateInput = {
    id?: string
    name: string
    siteId: string
    country?: string
    language?: string
    createdAt?: Date | string
    keywords?: KeywordUncheckedCreateNestedManyWithoutKeywordClusterInput
  }

  export type KeywordClusterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keywords?: KeywordUpdateManyWithoutKeywordClusterNestedInput
  }

  export type KeywordClusterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keywords?: KeywordUncheckedUpdateManyWithoutKeywordClusterNestedInput
  }

  export type KeywordClusterCreateManyInput = {
    id?: string
    name: string
    siteId: string
    country?: string
    language?: string
    createdAt?: Date | string
  }

  export type KeywordClusterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordClusterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CrawlLogListRelationFilter = {
    every?: CrawlLogWhereInput
    some?: CrawlLogWhereInput
    none?: CrawlLogWhereInput
  }

  export type PageListRelationFilter = {
    every?: PageWhereInput
    some?: PageWhereInput
    none?: PageWhereInput
  }

  export type KeywordListRelationFilter = {
    every?: KeywordWhereInput
    some?: KeywordWhereInput
    none?: KeywordWhereInput
  }

  export type CrawlLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KeywordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SiteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    country?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    pagesCount?: SortOrder
    seoScore?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteAvgOrderByAggregateInput = {
    progress?: SortOrder
    pagesCount?: SortOrder
    seoScore?: SortOrder
  }

  export type SiteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    country?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    pagesCount?: SortOrder
    seoScore?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    country?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    pagesCount?: SortOrder
    seoScore?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSumOrderByAggregateInput = {
    progress?: SortOrder
    pagesCount?: SortOrder
    seoScore?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SiteScalarRelationFilter = {
    is?: SiteWhereInput
    isNot?: SiteWhereInput
  }

  export type PageVersionListRelationFilter = {
    every?: PageVersionWhereInput
    some?: PageVersionWhereInput
    none?: PageVersionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PageVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    siteId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    h1?: SortOrder
    h2?: SortOrder
    h3?: SortOrder
    wordCount?: SortOrder
    content?: SortOrder
    keywords?: SortOrder
    intent?: SortOrder
    seoScore?: SortOrder
    uxScore?: SortOrder
    performance?: SortOrder
    issues?: SortOrder
    suggestions?: SortOrder
    lastCrawledAt?: SortOrder
    images?: SortOrder
    sections?: SortOrder
    links?: SortOrder
    technical?: SortOrder
    accessibility?: SortOrder
    indexing?: SortOrder
    pageSpeed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageAvgOrderByAggregateInput = {
    wordCount?: SortOrder
    seoScore?: SortOrder
    uxScore?: SortOrder
    performance?: SortOrder
  }

  export type PageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    siteId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    h1?: SortOrder
    wordCount?: SortOrder
    content?: SortOrder
    intent?: SortOrder
    seoScore?: SortOrder
    uxScore?: SortOrder
    performance?: SortOrder
    lastCrawledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    siteId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    h1?: SortOrder
    wordCount?: SortOrder
    content?: SortOrder
    intent?: SortOrder
    seoScore?: SortOrder
    uxScore?: SortOrder
    performance?: SortOrder
    lastCrawledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageSumOrderByAggregateInput = {
    wordCount?: SortOrder
    seoScore?: SortOrder
    uxScore?: SortOrder
    performance?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PageScalarRelationFilter = {
    is?: PageWhereInput
    isNot?: PageWhereInput
  }

  export type PageVersionCountOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    version?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    h1?: SortOrder
    h2?: SortOrder
    h3?: SortOrder
    wordCount?: SortOrder
    content?: SortOrder
    issues?: SortOrder
    suggestions?: SortOrder
    keywords?: SortOrder
    intent?: SortOrder
    seoScore?: SortOrder
    uxScore?: SortOrder
    performance?: SortOrder
    images?: SortOrder
    sections?: SortOrder
    links?: SortOrder
    technical?: SortOrder
    accessibility?: SortOrder
    indexing?: SortOrder
    pageSpeed?: SortOrder
    createdAt?: SortOrder
  }

  export type PageVersionAvgOrderByAggregateInput = {
    version?: SortOrder
    wordCount?: SortOrder
    seoScore?: SortOrder
    uxScore?: SortOrder
    performance?: SortOrder
  }

  export type PageVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    version?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    h1?: SortOrder
    wordCount?: SortOrder
    content?: SortOrder
    intent?: SortOrder
    seoScore?: SortOrder
    uxScore?: SortOrder
    performance?: SortOrder
    createdAt?: SortOrder
  }

  export type PageVersionMinOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    version?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    h1?: SortOrder
    wordCount?: SortOrder
    content?: SortOrder
    intent?: SortOrder
    seoScore?: SortOrder
    uxScore?: SortOrder
    performance?: SortOrder
    createdAt?: SortOrder
  }

  export type PageVersionSumOrderByAggregateInput = {
    version?: SortOrder
    wordCount?: SortOrder
    seoScore?: SortOrder
    uxScore?: SortOrder
    performance?: SortOrder
  }

  export type CrawlLogCountOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    level?: SortOrder
    message?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type CrawlLogMaxOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    level?: SortOrder
    message?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type CrawlLogMinOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    level?: SortOrder
    message?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type AppSettingCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageNullableScalarRelationFilter = {
    is?: PageWhereInput | null
    isNot?: PageWhereInput | null
  }

  export type SiteNullableScalarRelationFilter = {
    is?: SiteWhereInput | null
    isNot?: SiteWhereInput | null
  }

  export type KeywordClusterNullableScalarRelationFilter = {
    is?: KeywordClusterWhereInput | null
    isNot?: KeywordClusterWhereInput | null
  }

  export type KeywordCountOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    normalized?: SortOrder
    source?: SortOrder
    intent?: SortOrder
    cluster?: SortOrder
    country?: SortOrder
    language?: SortOrder
    pageId?: SortOrder
    siteId?: SortOrder
    clusterId?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type KeywordAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type KeywordMaxOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    normalized?: SortOrder
    source?: SortOrder
    intent?: SortOrder
    cluster?: SortOrder
    country?: SortOrder
    language?: SortOrder
    pageId?: SortOrder
    siteId?: SortOrder
    clusterId?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type KeywordMinOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    normalized?: SortOrder
    source?: SortOrder
    intent?: SortOrder
    cluster?: SortOrder
    country?: SortOrder
    language?: SortOrder
    pageId?: SortOrder
    siteId?: SortOrder
    clusterId?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type KeywordSumOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type KeywordClusterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    siteId?: SortOrder
    country?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
  }

  export type KeywordClusterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    siteId?: SortOrder
    country?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
  }

  export type KeywordClusterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    siteId?: SortOrder
    country?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
  }

  export type CrawlLogCreateNestedManyWithoutSiteInput = {
    create?: XOR<CrawlLogCreateWithoutSiteInput, CrawlLogUncheckedCreateWithoutSiteInput> | CrawlLogCreateWithoutSiteInput[] | CrawlLogUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: CrawlLogCreateOrConnectWithoutSiteInput | CrawlLogCreateOrConnectWithoutSiteInput[]
    createMany?: CrawlLogCreateManySiteInputEnvelope
    connect?: CrawlLogWhereUniqueInput | CrawlLogWhereUniqueInput[]
  }

  export type PageCreateNestedManyWithoutSiteInput = {
    create?: XOR<PageCreateWithoutSiteInput, PageUncheckedCreateWithoutSiteInput> | PageCreateWithoutSiteInput[] | PageUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: PageCreateOrConnectWithoutSiteInput | PageCreateOrConnectWithoutSiteInput[]
    createMany?: PageCreateManySiteInputEnvelope
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
  }

  export type KeywordCreateNestedManyWithoutSiteInput = {
    create?: XOR<KeywordCreateWithoutSiteInput, KeywordUncheckedCreateWithoutSiteInput> | KeywordCreateWithoutSiteInput[] | KeywordUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutSiteInput | KeywordCreateOrConnectWithoutSiteInput[]
    createMany?: KeywordCreateManySiteInputEnvelope
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
  }

  export type CrawlLogUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<CrawlLogCreateWithoutSiteInput, CrawlLogUncheckedCreateWithoutSiteInput> | CrawlLogCreateWithoutSiteInput[] | CrawlLogUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: CrawlLogCreateOrConnectWithoutSiteInput | CrawlLogCreateOrConnectWithoutSiteInput[]
    createMany?: CrawlLogCreateManySiteInputEnvelope
    connect?: CrawlLogWhereUniqueInput | CrawlLogWhereUniqueInput[]
  }

  export type PageUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<PageCreateWithoutSiteInput, PageUncheckedCreateWithoutSiteInput> | PageCreateWithoutSiteInput[] | PageUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: PageCreateOrConnectWithoutSiteInput | PageCreateOrConnectWithoutSiteInput[]
    createMany?: PageCreateManySiteInputEnvelope
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
  }

  export type KeywordUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<KeywordCreateWithoutSiteInput, KeywordUncheckedCreateWithoutSiteInput> | KeywordCreateWithoutSiteInput[] | KeywordUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutSiteInput | KeywordCreateOrConnectWithoutSiteInput[]
    createMany?: KeywordCreateManySiteInputEnvelope
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CrawlLogUpdateManyWithoutSiteNestedInput = {
    create?: XOR<CrawlLogCreateWithoutSiteInput, CrawlLogUncheckedCreateWithoutSiteInput> | CrawlLogCreateWithoutSiteInput[] | CrawlLogUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: CrawlLogCreateOrConnectWithoutSiteInput | CrawlLogCreateOrConnectWithoutSiteInput[]
    upsert?: CrawlLogUpsertWithWhereUniqueWithoutSiteInput | CrawlLogUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: CrawlLogCreateManySiteInputEnvelope
    set?: CrawlLogWhereUniqueInput | CrawlLogWhereUniqueInput[]
    disconnect?: CrawlLogWhereUniqueInput | CrawlLogWhereUniqueInput[]
    delete?: CrawlLogWhereUniqueInput | CrawlLogWhereUniqueInput[]
    connect?: CrawlLogWhereUniqueInput | CrawlLogWhereUniqueInput[]
    update?: CrawlLogUpdateWithWhereUniqueWithoutSiteInput | CrawlLogUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: CrawlLogUpdateManyWithWhereWithoutSiteInput | CrawlLogUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: CrawlLogScalarWhereInput | CrawlLogScalarWhereInput[]
  }

  export type PageUpdateManyWithoutSiteNestedInput = {
    create?: XOR<PageCreateWithoutSiteInput, PageUncheckedCreateWithoutSiteInput> | PageCreateWithoutSiteInput[] | PageUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: PageCreateOrConnectWithoutSiteInput | PageCreateOrConnectWithoutSiteInput[]
    upsert?: PageUpsertWithWhereUniqueWithoutSiteInput | PageUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: PageCreateManySiteInputEnvelope
    set?: PageWhereUniqueInput | PageWhereUniqueInput[]
    disconnect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    delete?: PageWhereUniqueInput | PageWhereUniqueInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    update?: PageUpdateWithWhereUniqueWithoutSiteInput | PageUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: PageUpdateManyWithWhereWithoutSiteInput | PageUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: PageScalarWhereInput | PageScalarWhereInput[]
  }

  export type KeywordUpdateManyWithoutSiteNestedInput = {
    create?: XOR<KeywordCreateWithoutSiteInput, KeywordUncheckedCreateWithoutSiteInput> | KeywordCreateWithoutSiteInput[] | KeywordUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutSiteInput | KeywordCreateOrConnectWithoutSiteInput[]
    upsert?: KeywordUpsertWithWhereUniqueWithoutSiteInput | KeywordUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: KeywordCreateManySiteInputEnvelope
    set?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    disconnect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    delete?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    update?: KeywordUpdateWithWhereUniqueWithoutSiteInput | KeywordUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: KeywordUpdateManyWithWhereWithoutSiteInput | KeywordUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
  }

  export type CrawlLogUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<CrawlLogCreateWithoutSiteInput, CrawlLogUncheckedCreateWithoutSiteInput> | CrawlLogCreateWithoutSiteInput[] | CrawlLogUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: CrawlLogCreateOrConnectWithoutSiteInput | CrawlLogCreateOrConnectWithoutSiteInput[]
    upsert?: CrawlLogUpsertWithWhereUniqueWithoutSiteInput | CrawlLogUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: CrawlLogCreateManySiteInputEnvelope
    set?: CrawlLogWhereUniqueInput | CrawlLogWhereUniqueInput[]
    disconnect?: CrawlLogWhereUniqueInput | CrawlLogWhereUniqueInput[]
    delete?: CrawlLogWhereUniqueInput | CrawlLogWhereUniqueInput[]
    connect?: CrawlLogWhereUniqueInput | CrawlLogWhereUniqueInput[]
    update?: CrawlLogUpdateWithWhereUniqueWithoutSiteInput | CrawlLogUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: CrawlLogUpdateManyWithWhereWithoutSiteInput | CrawlLogUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: CrawlLogScalarWhereInput | CrawlLogScalarWhereInput[]
  }

  export type PageUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<PageCreateWithoutSiteInput, PageUncheckedCreateWithoutSiteInput> | PageCreateWithoutSiteInput[] | PageUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: PageCreateOrConnectWithoutSiteInput | PageCreateOrConnectWithoutSiteInput[]
    upsert?: PageUpsertWithWhereUniqueWithoutSiteInput | PageUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: PageCreateManySiteInputEnvelope
    set?: PageWhereUniqueInput | PageWhereUniqueInput[]
    disconnect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    delete?: PageWhereUniqueInput | PageWhereUniqueInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    update?: PageUpdateWithWhereUniqueWithoutSiteInput | PageUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: PageUpdateManyWithWhereWithoutSiteInput | PageUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: PageScalarWhereInput | PageScalarWhereInput[]
  }

  export type KeywordUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<KeywordCreateWithoutSiteInput, KeywordUncheckedCreateWithoutSiteInput> | KeywordCreateWithoutSiteInput[] | KeywordUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutSiteInput | KeywordCreateOrConnectWithoutSiteInput[]
    upsert?: KeywordUpsertWithWhereUniqueWithoutSiteInput | KeywordUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: KeywordCreateManySiteInputEnvelope
    set?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    disconnect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    delete?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    update?: KeywordUpdateWithWhereUniqueWithoutSiteInput | KeywordUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: KeywordUpdateManyWithWhereWithoutSiteInput | KeywordUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
  }

  export type SiteCreateNestedOneWithoutPagesInput = {
    create?: XOR<SiteCreateWithoutPagesInput, SiteUncheckedCreateWithoutPagesInput>
    connectOrCreate?: SiteCreateOrConnectWithoutPagesInput
    connect?: SiteWhereUniqueInput
  }

  export type PageVersionCreateNestedManyWithoutPageInput = {
    create?: XOR<PageVersionCreateWithoutPageInput, PageVersionUncheckedCreateWithoutPageInput> | PageVersionCreateWithoutPageInput[] | PageVersionUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageVersionCreateOrConnectWithoutPageInput | PageVersionCreateOrConnectWithoutPageInput[]
    createMany?: PageVersionCreateManyPageInputEnvelope
    connect?: PageVersionWhereUniqueInput | PageVersionWhereUniqueInput[]
  }

  export type KeywordCreateNestedManyWithoutPageInput = {
    create?: XOR<KeywordCreateWithoutPageInput, KeywordUncheckedCreateWithoutPageInput> | KeywordCreateWithoutPageInput[] | KeywordUncheckedCreateWithoutPageInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutPageInput | KeywordCreateOrConnectWithoutPageInput[]
    createMany?: KeywordCreateManyPageInputEnvelope
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
  }

  export type PageVersionUncheckedCreateNestedManyWithoutPageInput = {
    create?: XOR<PageVersionCreateWithoutPageInput, PageVersionUncheckedCreateWithoutPageInput> | PageVersionCreateWithoutPageInput[] | PageVersionUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageVersionCreateOrConnectWithoutPageInput | PageVersionCreateOrConnectWithoutPageInput[]
    createMany?: PageVersionCreateManyPageInputEnvelope
    connect?: PageVersionWhereUniqueInput | PageVersionWhereUniqueInput[]
  }

  export type KeywordUncheckedCreateNestedManyWithoutPageInput = {
    create?: XOR<KeywordCreateWithoutPageInput, KeywordUncheckedCreateWithoutPageInput> | KeywordCreateWithoutPageInput[] | KeywordUncheckedCreateWithoutPageInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutPageInput | KeywordCreateOrConnectWithoutPageInput[]
    createMany?: KeywordCreateManyPageInputEnvelope
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SiteUpdateOneRequiredWithoutPagesNestedInput = {
    create?: XOR<SiteCreateWithoutPagesInput, SiteUncheckedCreateWithoutPagesInput>
    connectOrCreate?: SiteCreateOrConnectWithoutPagesInput
    upsert?: SiteUpsertWithoutPagesInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutPagesInput, SiteUpdateWithoutPagesInput>, SiteUncheckedUpdateWithoutPagesInput>
  }

  export type PageVersionUpdateManyWithoutPageNestedInput = {
    create?: XOR<PageVersionCreateWithoutPageInput, PageVersionUncheckedCreateWithoutPageInput> | PageVersionCreateWithoutPageInput[] | PageVersionUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageVersionCreateOrConnectWithoutPageInput | PageVersionCreateOrConnectWithoutPageInput[]
    upsert?: PageVersionUpsertWithWhereUniqueWithoutPageInput | PageVersionUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: PageVersionCreateManyPageInputEnvelope
    set?: PageVersionWhereUniqueInput | PageVersionWhereUniqueInput[]
    disconnect?: PageVersionWhereUniqueInput | PageVersionWhereUniqueInput[]
    delete?: PageVersionWhereUniqueInput | PageVersionWhereUniqueInput[]
    connect?: PageVersionWhereUniqueInput | PageVersionWhereUniqueInput[]
    update?: PageVersionUpdateWithWhereUniqueWithoutPageInput | PageVersionUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: PageVersionUpdateManyWithWhereWithoutPageInput | PageVersionUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: PageVersionScalarWhereInput | PageVersionScalarWhereInput[]
  }

  export type KeywordUpdateManyWithoutPageNestedInput = {
    create?: XOR<KeywordCreateWithoutPageInput, KeywordUncheckedCreateWithoutPageInput> | KeywordCreateWithoutPageInput[] | KeywordUncheckedCreateWithoutPageInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutPageInput | KeywordCreateOrConnectWithoutPageInput[]
    upsert?: KeywordUpsertWithWhereUniqueWithoutPageInput | KeywordUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: KeywordCreateManyPageInputEnvelope
    set?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    disconnect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    delete?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    update?: KeywordUpdateWithWhereUniqueWithoutPageInput | KeywordUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: KeywordUpdateManyWithWhereWithoutPageInput | KeywordUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
  }

  export type PageVersionUncheckedUpdateManyWithoutPageNestedInput = {
    create?: XOR<PageVersionCreateWithoutPageInput, PageVersionUncheckedCreateWithoutPageInput> | PageVersionCreateWithoutPageInput[] | PageVersionUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageVersionCreateOrConnectWithoutPageInput | PageVersionCreateOrConnectWithoutPageInput[]
    upsert?: PageVersionUpsertWithWhereUniqueWithoutPageInput | PageVersionUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: PageVersionCreateManyPageInputEnvelope
    set?: PageVersionWhereUniqueInput | PageVersionWhereUniqueInput[]
    disconnect?: PageVersionWhereUniqueInput | PageVersionWhereUniqueInput[]
    delete?: PageVersionWhereUniqueInput | PageVersionWhereUniqueInput[]
    connect?: PageVersionWhereUniqueInput | PageVersionWhereUniqueInput[]
    update?: PageVersionUpdateWithWhereUniqueWithoutPageInput | PageVersionUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: PageVersionUpdateManyWithWhereWithoutPageInput | PageVersionUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: PageVersionScalarWhereInput | PageVersionScalarWhereInput[]
  }

  export type KeywordUncheckedUpdateManyWithoutPageNestedInput = {
    create?: XOR<KeywordCreateWithoutPageInput, KeywordUncheckedCreateWithoutPageInput> | KeywordCreateWithoutPageInput[] | KeywordUncheckedCreateWithoutPageInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutPageInput | KeywordCreateOrConnectWithoutPageInput[]
    upsert?: KeywordUpsertWithWhereUniqueWithoutPageInput | KeywordUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: KeywordCreateManyPageInputEnvelope
    set?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    disconnect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    delete?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    update?: KeywordUpdateWithWhereUniqueWithoutPageInput | KeywordUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: KeywordUpdateManyWithWhereWithoutPageInput | KeywordUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
  }

  export type PageCreateNestedOneWithoutVersionsInput = {
    create?: XOR<PageCreateWithoutVersionsInput, PageUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: PageCreateOrConnectWithoutVersionsInput
    connect?: PageWhereUniqueInput
  }

  export type PageUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<PageCreateWithoutVersionsInput, PageUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: PageCreateOrConnectWithoutVersionsInput
    upsert?: PageUpsertWithoutVersionsInput
    connect?: PageWhereUniqueInput
    update?: XOR<XOR<PageUpdateToOneWithWhereWithoutVersionsInput, PageUpdateWithoutVersionsInput>, PageUncheckedUpdateWithoutVersionsInput>
  }

  export type SiteCreateNestedOneWithoutCrawlLogsInput = {
    create?: XOR<SiteCreateWithoutCrawlLogsInput, SiteUncheckedCreateWithoutCrawlLogsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutCrawlLogsInput
    connect?: SiteWhereUniqueInput
  }

  export type SiteUpdateOneRequiredWithoutCrawlLogsNestedInput = {
    create?: XOR<SiteCreateWithoutCrawlLogsInput, SiteUncheckedCreateWithoutCrawlLogsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutCrawlLogsInput
    upsert?: SiteUpsertWithoutCrawlLogsInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutCrawlLogsInput, SiteUpdateWithoutCrawlLogsInput>, SiteUncheckedUpdateWithoutCrawlLogsInput>
  }

  export type PageCreateNestedOneWithoutKeywordEntitiesInput = {
    create?: XOR<PageCreateWithoutKeywordEntitiesInput, PageUncheckedCreateWithoutKeywordEntitiesInput>
    connectOrCreate?: PageCreateOrConnectWithoutKeywordEntitiesInput
    connect?: PageWhereUniqueInput
  }

  export type SiteCreateNestedOneWithoutKeywordsInput = {
    create?: XOR<SiteCreateWithoutKeywordsInput, SiteUncheckedCreateWithoutKeywordsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutKeywordsInput
    connect?: SiteWhereUniqueInput
  }

  export type KeywordClusterCreateNestedOneWithoutKeywordsInput = {
    create?: XOR<KeywordClusterCreateWithoutKeywordsInput, KeywordClusterUncheckedCreateWithoutKeywordsInput>
    connectOrCreate?: KeywordClusterCreateOrConnectWithoutKeywordsInput
    connect?: KeywordClusterWhereUniqueInput
  }

  export type PageUpdateOneWithoutKeywordEntitiesNestedInput = {
    create?: XOR<PageCreateWithoutKeywordEntitiesInput, PageUncheckedCreateWithoutKeywordEntitiesInput>
    connectOrCreate?: PageCreateOrConnectWithoutKeywordEntitiesInput
    upsert?: PageUpsertWithoutKeywordEntitiesInput
    disconnect?: PageWhereInput | boolean
    delete?: PageWhereInput | boolean
    connect?: PageWhereUniqueInput
    update?: XOR<XOR<PageUpdateToOneWithWhereWithoutKeywordEntitiesInput, PageUpdateWithoutKeywordEntitiesInput>, PageUncheckedUpdateWithoutKeywordEntitiesInput>
  }

  export type SiteUpdateOneWithoutKeywordsNestedInput = {
    create?: XOR<SiteCreateWithoutKeywordsInput, SiteUncheckedCreateWithoutKeywordsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutKeywordsInput
    upsert?: SiteUpsertWithoutKeywordsInput
    disconnect?: SiteWhereInput | boolean
    delete?: SiteWhereInput | boolean
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutKeywordsInput, SiteUpdateWithoutKeywordsInput>, SiteUncheckedUpdateWithoutKeywordsInput>
  }

  export type KeywordClusterUpdateOneWithoutKeywordsNestedInput = {
    create?: XOR<KeywordClusterCreateWithoutKeywordsInput, KeywordClusterUncheckedCreateWithoutKeywordsInput>
    connectOrCreate?: KeywordClusterCreateOrConnectWithoutKeywordsInput
    upsert?: KeywordClusterUpsertWithoutKeywordsInput
    disconnect?: KeywordClusterWhereInput | boolean
    delete?: KeywordClusterWhereInput | boolean
    connect?: KeywordClusterWhereUniqueInput
    update?: XOR<XOR<KeywordClusterUpdateToOneWithWhereWithoutKeywordsInput, KeywordClusterUpdateWithoutKeywordsInput>, KeywordClusterUncheckedUpdateWithoutKeywordsInput>
  }

  export type KeywordCreateNestedManyWithoutKeywordClusterInput = {
    create?: XOR<KeywordCreateWithoutKeywordClusterInput, KeywordUncheckedCreateWithoutKeywordClusterInput> | KeywordCreateWithoutKeywordClusterInput[] | KeywordUncheckedCreateWithoutKeywordClusterInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutKeywordClusterInput | KeywordCreateOrConnectWithoutKeywordClusterInput[]
    createMany?: KeywordCreateManyKeywordClusterInputEnvelope
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
  }

  export type KeywordUncheckedCreateNestedManyWithoutKeywordClusterInput = {
    create?: XOR<KeywordCreateWithoutKeywordClusterInput, KeywordUncheckedCreateWithoutKeywordClusterInput> | KeywordCreateWithoutKeywordClusterInput[] | KeywordUncheckedCreateWithoutKeywordClusterInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutKeywordClusterInput | KeywordCreateOrConnectWithoutKeywordClusterInput[]
    createMany?: KeywordCreateManyKeywordClusterInputEnvelope
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
  }

  export type KeywordUpdateManyWithoutKeywordClusterNestedInput = {
    create?: XOR<KeywordCreateWithoutKeywordClusterInput, KeywordUncheckedCreateWithoutKeywordClusterInput> | KeywordCreateWithoutKeywordClusterInput[] | KeywordUncheckedCreateWithoutKeywordClusterInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutKeywordClusterInput | KeywordCreateOrConnectWithoutKeywordClusterInput[]
    upsert?: KeywordUpsertWithWhereUniqueWithoutKeywordClusterInput | KeywordUpsertWithWhereUniqueWithoutKeywordClusterInput[]
    createMany?: KeywordCreateManyKeywordClusterInputEnvelope
    set?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    disconnect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    delete?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    update?: KeywordUpdateWithWhereUniqueWithoutKeywordClusterInput | KeywordUpdateWithWhereUniqueWithoutKeywordClusterInput[]
    updateMany?: KeywordUpdateManyWithWhereWithoutKeywordClusterInput | KeywordUpdateManyWithWhereWithoutKeywordClusterInput[]
    deleteMany?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
  }

  export type KeywordUncheckedUpdateManyWithoutKeywordClusterNestedInput = {
    create?: XOR<KeywordCreateWithoutKeywordClusterInput, KeywordUncheckedCreateWithoutKeywordClusterInput> | KeywordCreateWithoutKeywordClusterInput[] | KeywordUncheckedCreateWithoutKeywordClusterInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutKeywordClusterInput | KeywordCreateOrConnectWithoutKeywordClusterInput[]
    upsert?: KeywordUpsertWithWhereUniqueWithoutKeywordClusterInput | KeywordUpsertWithWhereUniqueWithoutKeywordClusterInput[]
    createMany?: KeywordCreateManyKeywordClusterInputEnvelope
    set?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    disconnect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    delete?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    update?: KeywordUpdateWithWhereUniqueWithoutKeywordClusterInput | KeywordUpdateWithWhereUniqueWithoutKeywordClusterInput[]
    updateMany?: KeywordUpdateManyWithWhereWithoutKeywordClusterInput | KeywordUpdateManyWithWhereWithoutKeywordClusterInput[]
    deleteMany?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CrawlLogCreateWithoutSiteInput = {
    id?: string
    level?: string
    message: string
    url?: string | null
    createdAt?: Date | string
  }

  export type CrawlLogUncheckedCreateWithoutSiteInput = {
    id?: string
    level?: string
    message: string
    url?: string | null
    createdAt?: Date | string
  }

  export type CrawlLogCreateOrConnectWithoutSiteInput = {
    where: CrawlLogWhereUniqueInput
    create: XOR<CrawlLogCreateWithoutSiteInput, CrawlLogUncheckedCreateWithoutSiteInput>
  }

  export type CrawlLogCreateManySiteInputEnvelope = {
    data: CrawlLogCreateManySiteInput | CrawlLogCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type PageCreateWithoutSiteInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    h1?: string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: number | null
    content?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: string | null
    seoScore?: number | null
    uxScore?: number | null
    performance?: number | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    lastCrawledAt?: Date | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: PageVersionCreateNestedManyWithoutPageInput
    keywordEntities?: KeywordCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateWithoutSiteInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    h1?: string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: number | null
    content?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: string | null
    seoScore?: number | null
    uxScore?: number | null
    performance?: number | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    lastCrawledAt?: Date | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: PageVersionUncheckedCreateNestedManyWithoutPageInput
    keywordEntities?: KeywordUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageCreateOrConnectWithoutSiteInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutSiteInput, PageUncheckedCreateWithoutSiteInput>
  }

  export type PageCreateManySiteInputEnvelope = {
    data: PageCreateManySiteInput | PageCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type KeywordCreateWithoutSiteInput = {
    id?: string
    keyword: string
    normalized: string
    source: string
    intent?: string | null
    cluster?: string | null
    country?: string
    language?: string
    priority?: number | null
    createdAt?: Date | string
    page?: PageCreateNestedOneWithoutKeywordEntitiesInput
    keywordCluster?: KeywordClusterCreateNestedOneWithoutKeywordsInput
  }

  export type KeywordUncheckedCreateWithoutSiteInput = {
    id?: string
    keyword: string
    normalized: string
    source: string
    intent?: string | null
    cluster?: string | null
    country?: string
    language?: string
    pageId?: string | null
    clusterId?: string | null
    priority?: number | null
    createdAt?: Date | string
  }

  export type KeywordCreateOrConnectWithoutSiteInput = {
    where: KeywordWhereUniqueInput
    create: XOR<KeywordCreateWithoutSiteInput, KeywordUncheckedCreateWithoutSiteInput>
  }

  export type KeywordCreateManySiteInputEnvelope = {
    data: KeywordCreateManySiteInput | KeywordCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type CrawlLogUpsertWithWhereUniqueWithoutSiteInput = {
    where: CrawlLogWhereUniqueInput
    update: XOR<CrawlLogUpdateWithoutSiteInput, CrawlLogUncheckedUpdateWithoutSiteInput>
    create: XOR<CrawlLogCreateWithoutSiteInput, CrawlLogUncheckedCreateWithoutSiteInput>
  }

  export type CrawlLogUpdateWithWhereUniqueWithoutSiteInput = {
    where: CrawlLogWhereUniqueInput
    data: XOR<CrawlLogUpdateWithoutSiteInput, CrawlLogUncheckedUpdateWithoutSiteInput>
  }

  export type CrawlLogUpdateManyWithWhereWithoutSiteInput = {
    where: CrawlLogScalarWhereInput
    data: XOR<CrawlLogUpdateManyMutationInput, CrawlLogUncheckedUpdateManyWithoutSiteInput>
  }

  export type CrawlLogScalarWhereInput = {
    AND?: CrawlLogScalarWhereInput | CrawlLogScalarWhereInput[]
    OR?: CrawlLogScalarWhereInput[]
    NOT?: CrawlLogScalarWhereInput | CrawlLogScalarWhereInput[]
    id?: StringFilter<"CrawlLog"> | string
    siteId?: StringFilter<"CrawlLog"> | string
    level?: StringFilter<"CrawlLog"> | string
    message?: StringFilter<"CrawlLog"> | string
    url?: StringNullableFilter<"CrawlLog"> | string | null
    createdAt?: DateTimeFilter<"CrawlLog"> | Date | string
  }

  export type PageUpsertWithWhereUniqueWithoutSiteInput = {
    where: PageWhereUniqueInput
    update: XOR<PageUpdateWithoutSiteInput, PageUncheckedUpdateWithoutSiteInput>
    create: XOR<PageCreateWithoutSiteInput, PageUncheckedCreateWithoutSiteInput>
  }

  export type PageUpdateWithWhereUniqueWithoutSiteInput = {
    where: PageWhereUniqueInput
    data: XOR<PageUpdateWithoutSiteInput, PageUncheckedUpdateWithoutSiteInput>
  }

  export type PageUpdateManyWithWhereWithoutSiteInput = {
    where: PageScalarWhereInput
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyWithoutSiteInput>
  }

  export type PageScalarWhereInput = {
    AND?: PageScalarWhereInput | PageScalarWhereInput[]
    OR?: PageScalarWhereInput[]
    NOT?: PageScalarWhereInput | PageScalarWhereInput[]
    id?: StringFilter<"Page"> | string
    url?: StringFilter<"Page"> | string
    siteId?: StringFilter<"Page"> | string
    title?: StringNullableFilter<"Page"> | string | null
    description?: StringNullableFilter<"Page"> | string | null
    h1?: StringNullableFilter<"Page"> | string | null
    h2?: JsonNullableFilter<"Page">
    h3?: JsonNullableFilter<"Page">
    wordCount?: IntNullableFilter<"Page"> | number | null
    content?: StringNullableFilter<"Page"> | string | null
    keywords?: JsonNullableFilter<"Page">
    intent?: StringNullableFilter<"Page"> | string | null
    seoScore?: IntNullableFilter<"Page"> | number | null
    uxScore?: IntNullableFilter<"Page"> | number | null
    performance?: IntNullableFilter<"Page"> | number | null
    issues?: JsonNullableFilter<"Page">
    suggestions?: JsonNullableFilter<"Page">
    lastCrawledAt?: DateTimeNullableFilter<"Page"> | Date | string | null
    images?: JsonNullableFilter<"Page">
    sections?: JsonNullableFilter<"Page">
    links?: JsonNullableFilter<"Page">
    technical?: JsonNullableFilter<"Page">
    accessibility?: JsonNullableFilter<"Page">
    indexing?: JsonNullableFilter<"Page">
    pageSpeed?: JsonNullableFilter<"Page">
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
  }

  export type KeywordUpsertWithWhereUniqueWithoutSiteInput = {
    where: KeywordWhereUniqueInput
    update: XOR<KeywordUpdateWithoutSiteInput, KeywordUncheckedUpdateWithoutSiteInput>
    create: XOR<KeywordCreateWithoutSiteInput, KeywordUncheckedCreateWithoutSiteInput>
  }

  export type KeywordUpdateWithWhereUniqueWithoutSiteInput = {
    where: KeywordWhereUniqueInput
    data: XOR<KeywordUpdateWithoutSiteInput, KeywordUncheckedUpdateWithoutSiteInput>
  }

  export type KeywordUpdateManyWithWhereWithoutSiteInput = {
    where: KeywordScalarWhereInput
    data: XOR<KeywordUpdateManyMutationInput, KeywordUncheckedUpdateManyWithoutSiteInput>
  }

  export type KeywordScalarWhereInput = {
    AND?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
    OR?: KeywordScalarWhereInput[]
    NOT?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
    id?: StringFilter<"Keyword"> | string
    keyword?: StringFilter<"Keyword"> | string
    normalized?: StringFilter<"Keyword"> | string
    source?: StringFilter<"Keyword"> | string
    intent?: StringNullableFilter<"Keyword"> | string | null
    cluster?: StringNullableFilter<"Keyword"> | string | null
    country?: StringFilter<"Keyword"> | string
    language?: StringFilter<"Keyword"> | string
    pageId?: StringNullableFilter<"Keyword"> | string | null
    siteId?: StringNullableFilter<"Keyword"> | string | null
    clusterId?: StringNullableFilter<"Keyword"> | string | null
    priority?: IntNullableFilter<"Keyword"> | number | null
    createdAt?: DateTimeFilter<"Keyword"> | Date | string
  }

  export type SiteCreateWithoutPagesInput = {
    id?: string
    name: string
    domain: string
    country?: string
    status?: string
    progress?: number
    pagesCount?: number
    seoScore?: number
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    crawlLogs?: CrawlLogCreateNestedManyWithoutSiteInput
    keywords?: KeywordCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutPagesInput = {
    id?: string
    name: string
    domain: string
    country?: string
    status?: string
    progress?: number
    pagesCount?: number
    seoScore?: number
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    crawlLogs?: CrawlLogUncheckedCreateNestedManyWithoutSiteInput
    keywords?: KeywordUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutPagesInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutPagesInput, SiteUncheckedCreateWithoutPagesInput>
  }

  export type PageVersionCreateWithoutPageInput = {
    id?: string
    version: number
    url: string
    title?: string | null
    description?: string | null
    h1?: string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: number | null
    content?: string | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: string | null
    seoScore?: number | null
    uxScore?: number | null
    performance?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PageVersionUncheckedCreateWithoutPageInput = {
    id?: string
    version: number
    url: string
    title?: string | null
    description?: string | null
    h1?: string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: number | null
    content?: string | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: string | null
    seoScore?: number | null
    uxScore?: number | null
    performance?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PageVersionCreateOrConnectWithoutPageInput = {
    where: PageVersionWhereUniqueInput
    create: XOR<PageVersionCreateWithoutPageInput, PageVersionUncheckedCreateWithoutPageInput>
  }

  export type PageVersionCreateManyPageInputEnvelope = {
    data: PageVersionCreateManyPageInput | PageVersionCreateManyPageInput[]
    skipDuplicates?: boolean
  }

  export type KeywordCreateWithoutPageInput = {
    id?: string
    keyword: string
    normalized: string
    source: string
    intent?: string | null
    cluster?: string | null
    country?: string
    language?: string
    priority?: number | null
    createdAt?: Date | string
    site?: SiteCreateNestedOneWithoutKeywordsInput
    keywordCluster?: KeywordClusterCreateNestedOneWithoutKeywordsInput
  }

  export type KeywordUncheckedCreateWithoutPageInput = {
    id?: string
    keyword: string
    normalized: string
    source: string
    intent?: string | null
    cluster?: string | null
    country?: string
    language?: string
    siteId?: string | null
    clusterId?: string | null
    priority?: number | null
    createdAt?: Date | string
  }

  export type KeywordCreateOrConnectWithoutPageInput = {
    where: KeywordWhereUniqueInput
    create: XOR<KeywordCreateWithoutPageInput, KeywordUncheckedCreateWithoutPageInput>
  }

  export type KeywordCreateManyPageInputEnvelope = {
    data: KeywordCreateManyPageInput | KeywordCreateManyPageInput[]
    skipDuplicates?: boolean
  }

  export type SiteUpsertWithoutPagesInput = {
    update: XOR<SiteUpdateWithoutPagesInput, SiteUncheckedUpdateWithoutPagesInput>
    create: XOR<SiteCreateWithoutPagesInput, SiteUncheckedCreateWithoutPagesInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutPagesInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutPagesInput, SiteUncheckedUpdateWithoutPagesInput>
  }

  export type SiteUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    pagesCount?: IntFieldUpdateOperationsInput | number
    seoScore?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crawlLogs?: CrawlLogUpdateManyWithoutSiteNestedInput
    keywords?: KeywordUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    pagesCount?: IntFieldUpdateOperationsInput | number
    seoScore?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crawlLogs?: CrawlLogUncheckedUpdateManyWithoutSiteNestedInput
    keywords?: KeywordUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type PageVersionUpsertWithWhereUniqueWithoutPageInput = {
    where: PageVersionWhereUniqueInput
    update: XOR<PageVersionUpdateWithoutPageInput, PageVersionUncheckedUpdateWithoutPageInput>
    create: XOR<PageVersionCreateWithoutPageInput, PageVersionUncheckedCreateWithoutPageInput>
  }

  export type PageVersionUpdateWithWhereUniqueWithoutPageInput = {
    where: PageVersionWhereUniqueInput
    data: XOR<PageVersionUpdateWithoutPageInput, PageVersionUncheckedUpdateWithoutPageInput>
  }

  export type PageVersionUpdateManyWithWhereWithoutPageInput = {
    where: PageVersionScalarWhereInput
    data: XOR<PageVersionUpdateManyMutationInput, PageVersionUncheckedUpdateManyWithoutPageInput>
  }

  export type PageVersionScalarWhereInput = {
    AND?: PageVersionScalarWhereInput | PageVersionScalarWhereInput[]
    OR?: PageVersionScalarWhereInput[]
    NOT?: PageVersionScalarWhereInput | PageVersionScalarWhereInput[]
    id?: StringFilter<"PageVersion"> | string
    pageId?: StringFilter<"PageVersion"> | string
    version?: IntFilter<"PageVersion"> | number
    url?: StringFilter<"PageVersion"> | string
    title?: StringNullableFilter<"PageVersion"> | string | null
    description?: StringNullableFilter<"PageVersion"> | string | null
    h1?: StringNullableFilter<"PageVersion"> | string | null
    h2?: JsonNullableFilter<"PageVersion">
    h3?: JsonNullableFilter<"PageVersion">
    wordCount?: IntNullableFilter<"PageVersion"> | number | null
    content?: StringNullableFilter<"PageVersion"> | string | null
    issues?: JsonNullableFilter<"PageVersion">
    suggestions?: JsonNullableFilter<"PageVersion">
    keywords?: JsonNullableFilter<"PageVersion">
    intent?: StringNullableFilter<"PageVersion"> | string | null
    seoScore?: IntNullableFilter<"PageVersion"> | number | null
    uxScore?: IntNullableFilter<"PageVersion"> | number | null
    performance?: IntNullableFilter<"PageVersion"> | number | null
    images?: JsonNullableFilter<"PageVersion">
    sections?: JsonNullableFilter<"PageVersion">
    links?: JsonNullableFilter<"PageVersion">
    technical?: JsonNullableFilter<"PageVersion">
    accessibility?: JsonNullableFilter<"PageVersion">
    indexing?: JsonNullableFilter<"PageVersion">
    pageSpeed?: JsonNullableFilter<"PageVersion">
    createdAt?: DateTimeFilter<"PageVersion"> | Date | string
  }

  export type KeywordUpsertWithWhereUniqueWithoutPageInput = {
    where: KeywordWhereUniqueInput
    update: XOR<KeywordUpdateWithoutPageInput, KeywordUncheckedUpdateWithoutPageInput>
    create: XOR<KeywordCreateWithoutPageInput, KeywordUncheckedCreateWithoutPageInput>
  }

  export type KeywordUpdateWithWhereUniqueWithoutPageInput = {
    where: KeywordWhereUniqueInput
    data: XOR<KeywordUpdateWithoutPageInput, KeywordUncheckedUpdateWithoutPageInput>
  }

  export type KeywordUpdateManyWithWhereWithoutPageInput = {
    where: KeywordScalarWhereInput
    data: XOR<KeywordUpdateManyMutationInput, KeywordUncheckedUpdateManyWithoutPageInput>
  }

  export type PageCreateWithoutVersionsInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    h1?: string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: number | null
    content?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: string | null
    seoScore?: number | null
    uxScore?: number | null
    performance?: number | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    lastCrawledAt?: Date | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    site: SiteCreateNestedOneWithoutPagesInput
    keywordEntities?: KeywordCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateWithoutVersionsInput = {
    id?: string
    url: string
    siteId: string
    title?: string | null
    description?: string | null
    h1?: string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: number | null
    content?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: string | null
    seoScore?: number | null
    uxScore?: number | null
    performance?: number | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    lastCrawledAt?: Date | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    keywordEntities?: KeywordUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageCreateOrConnectWithoutVersionsInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutVersionsInput, PageUncheckedCreateWithoutVersionsInput>
  }

  export type PageUpsertWithoutVersionsInput = {
    update: XOR<PageUpdateWithoutVersionsInput, PageUncheckedUpdateWithoutVersionsInput>
    create: XOR<PageCreateWithoutVersionsInput, PageUncheckedCreateWithoutVersionsInput>
    where?: PageWhereInput
  }

  export type PageUpdateToOneWithWhereWithoutVersionsInput = {
    where?: PageWhereInput
    data: XOR<PageUpdateWithoutVersionsInput, PageUncheckedUpdateWithoutVersionsInput>
  }

  export type PageUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    h1?: NullableStringFieldUpdateOperationsInput | string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    seoScore?: NullableIntFieldUpdateOperationsInput | number | null
    uxScore?: NullableIntFieldUpdateOperationsInput | number | null
    performance?: NullableIntFieldUpdateOperationsInput | number | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    lastCrawledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutPagesNestedInput
    keywordEntities?: KeywordUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    h1?: NullableStringFieldUpdateOperationsInput | string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    seoScore?: NullableIntFieldUpdateOperationsInput | number | null
    uxScore?: NullableIntFieldUpdateOperationsInput | number | null
    performance?: NullableIntFieldUpdateOperationsInput | number | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    lastCrawledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keywordEntities?: KeywordUncheckedUpdateManyWithoutPageNestedInput
  }

  export type SiteCreateWithoutCrawlLogsInput = {
    id?: string
    name: string
    domain: string
    country?: string
    status?: string
    progress?: number
    pagesCount?: number
    seoScore?: number
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageCreateNestedManyWithoutSiteInput
    keywords?: KeywordCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutCrawlLogsInput = {
    id?: string
    name: string
    domain: string
    country?: string
    status?: string
    progress?: number
    pagesCount?: number
    seoScore?: number
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageUncheckedCreateNestedManyWithoutSiteInput
    keywords?: KeywordUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutCrawlLogsInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutCrawlLogsInput, SiteUncheckedCreateWithoutCrawlLogsInput>
  }

  export type SiteUpsertWithoutCrawlLogsInput = {
    update: XOR<SiteUpdateWithoutCrawlLogsInput, SiteUncheckedUpdateWithoutCrawlLogsInput>
    create: XOR<SiteCreateWithoutCrawlLogsInput, SiteUncheckedCreateWithoutCrawlLogsInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutCrawlLogsInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutCrawlLogsInput, SiteUncheckedUpdateWithoutCrawlLogsInput>
  }

  export type SiteUpdateWithoutCrawlLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    pagesCount?: IntFieldUpdateOperationsInput | number
    seoScore?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUpdateManyWithoutSiteNestedInput
    keywords?: KeywordUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutCrawlLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    pagesCount?: IntFieldUpdateOperationsInput | number
    seoScore?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUncheckedUpdateManyWithoutSiteNestedInput
    keywords?: KeywordUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type PageCreateWithoutKeywordEntitiesInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    h1?: string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: number | null
    content?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: string | null
    seoScore?: number | null
    uxScore?: number | null
    performance?: number | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    lastCrawledAt?: Date | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    site: SiteCreateNestedOneWithoutPagesInput
    versions?: PageVersionCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateWithoutKeywordEntitiesInput = {
    id?: string
    url: string
    siteId: string
    title?: string | null
    description?: string | null
    h1?: string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: number | null
    content?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: string | null
    seoScore?: number | null
    uxScore?: number | null
    performance?: number | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    lastCrawledAt?: Date | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: PageVersionUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageCreateOrConnectWithoutKeywordEntitiesInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutKeywordEntitiesInput, PageUncheckedCreateWithoutKeywordEntitiesInput>
  }

  export type SiteCreateWithoutKeywordsInput = {
    id?: string
    name: string
    domain: string
    country?: string
    status?: string
    progress?: number
    pagesCount?: number
    seoScore?: number
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    crawlLogs?: CrawlLogCreateNestedManyWithoutSiteInput
    pages?: PageCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutKeywordsInput = {
    id?: string
    name: string
    domain: string
    country?: string
    status?: string
    progress?: number
    pagesCount?: number
    seoScore?: number
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    crawlLogs?: CrawlLogUncheckedCreateNestedManyWithoutSiteInput
    pages?: PageUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutKeywordsInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutKeywordsInput, SiteUncheckedCreateWithoutKeywordsInput>
  }

  export type KeywordClusterCreateWithoutKeywordsInput = {
    id?: string
    name: string
    siteId: string
    country?: string
    language?: string
    createdAt?: Date | string
  }

  export type KeywordClusterUncheckedCreateWithoutKeywordsInput = {
    id?: string
    name: string
    siteId: string
    country?: string
    language?: string
    createdAt?: Date | string
  }

  export type KeywordClusterCreateOrConnectWithoutKeywordsInput = {
    where: KeywordClusterWhereUniqueInput
    create: XOR<KeywordClusterCreateWithoutKeywordsInput, KeywordClusterUncheckedCreateWithoutKeywordsInput>
  }

  export type PageUpsertWithoutKeywordEntitiesInput = {
    update: XOR<PageUpdateWithoutKeywordEntitiesInput, PageUncheckedUpdateWithoutKeywordEntitiesInput>
    create: XOR<PageCreateWithoutKeywordEntitiesInput, PageUncheckedCreateWithoutKeywordEntitiesInput>
    where?: PageWhereInput
  }

  export type PageUpdateToOneWithWhereWithoutKeywordEntitiesInput = {
    where?: PageWhereInput
    data: XOR<PageUpdateWithoutKeywordEntitiesInput, PageUncheckedUpdateWithoutKeywordEntitiesInput>
  }

  export type PageUpdateWithoutKeywordEntitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    h1?: NullableStringFieldUpdateOperationsInput | string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    seoScore?: NullableIntFieldUpdateOperationsInput | number | null
    uxScore?: NullableIntFieldUpdateOperationsInput | number | null
    performance?: NullableIntFieldUpdateOperationsInput | number | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    lastCrawledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutPagesNestedInput
    versions?: PageVersionUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateWithoutKeywordEntitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    h1?: NullableStringFieldUpdateOperationsInput | string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    seoScore?: NullableIntFieldUpdateOperationsInput | number | null
    uxScore?: NullableIntFieldUpdateOperationsInput | number | null
    performance?: NullableIntFieldUpdateOperationsInput | number | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    lastCrawledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: PageVersionUncheckedUpdateManyWithoutPageNestedInput
  }

  export type SiteUpsertWithoutKeywordsInput = {
    update: XOR<SiteUpdateWithoutKeywordsInput, SiteUncheckedUpdateWithoutKeywordsInput>
    create: XOR<SiteCreateWithoutKeywordsInput, SiteUncheckedCreateWithoutKeywordsInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutKeywordsInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutKeywordsInput, SiteUncheckedUpdateWithoutKeywordsInput>
  }

  export type SiteUpdateWithoutKeywordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    pagesCount?: IntFieldUpdateOperationsInput | number
    seoScore?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crawlLogs?: CrawlLogUpdateManyWithoutSiteNestedInput
    pages?: PageUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutKeywordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    pagesCount?: IntFieldUpdateOperationsInput | number
    seoScore?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crawlLogs?: CrawlLogUncheckedUpdateManyWithoutSiteNestedInput
    pages?: PageUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type KeywordClusterUpsertWithoutKeywordsInput = {
    update: XOR<KeywordClusterUpdateWithoutKeywordsInput, KeywordClusterUncheckedUpdateWithoutKeywordsInput>
    create: XOR<KeywordClusterCreateWithoutKeywordsInput, KeywordClusterUncheckedCreateWithoutKeywordsInput>
    where?: KeywordClusterWhereInput
  }

  export type KeywordClusterUpdateToOneWithWhereWithoutKeywordsInput = {
    where?: KeywordClusterWhereInput
    data: XOR<KeywordClusterUpdateWithoutKeywordsInput, KeywordClusterUncheckedUpdateWithoutKeywordsInput>
  }

  export type KeywordClusterUpdateWithoutKeywordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordClusterUncheckedUpdateWithoutKeywordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordCreateWithoutKeywordClusterInput = {
    id?: string
    keyword: string
    normalized: string
    source: string
    intent?: string | null
    cluster?: string | null
    country?: string
    language?: string
    priority?: number | null
    createdAt?: Date | string
    page?: PageCreateNestedOneWithoutKeywordEntitiesInput
    site?: SiteCreateNestedOneWithoutKeywordsInput
  }

  export type KeywordUncheckedCreateWithoutKeywordClusterInput = {
    id?: string
    keyword: string
    normalized: string
    source: string
    intent?: string | null
    cluster?: string | null
    country?: string
    language?: string
    pageId?: string | null
    siteId?: string | null
    priority?: number | null
    createdAt?: Date | string
  }

  export type KeywordCreateOrConnectWithoutKeywordClusterInput = {
    where: KeywordWhereUniqueInput
    create: XOR<KeywordCreateWithoutKeywordClusterInput, KeywordUncheckedCreateWithoutKeywordClusterInput>
  }

  export type KeywordCreateManyKeywordClusterInputEnvelope = {
    data: KeywordCreateManyKeywordClusterInput | KeywordCreateManyKeywordClusterInput[]
    skipDuplicates?: boolean
  }

  export type KeywordUpsertWithWhereUniqueWithoutKeywordClusterInput = {
    where: KeywordWhereUniqueInput
    update: XOR<KeywordUpdateWithoutKeywordClusterInput, KeywordUncheckedUpdateWithoutKeywordClusterInput>
    create: XOR<KeywordCreateWithoutKeywordClusterInput, KeywordUncheckedCreateWithoutKeywordClusterInput>
  }

  export type KeywordUpdateWithWhereUniqueWithoutKeywordClusterInput = {
    where: KeywordWhereUniqueInput
    data: XOR<KeywordUpdateWithoutKeywordClusterInput, KeywordUncheckedUpdateWithoutKeywordClusterInput>
  }

  export type KeywordUpdateManyWithWhereWithoutKeywordClusterInput = {
    where: KeywordScalarWhereInput
    data: XOR<KeywordUpdateManyMutationInput, KeywordUncheckedUpdateManyWithoutKeywordClusterInput>
  }

  export type CrawlLogCreateManySiteInput = {
    id?: string
    level?: string
    message: string
    url?: string | null
    createdAt?: Date | string
  }

  export type PageCreateManySiteInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    h1?: string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: number | null
    content?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: string | null
    seoScore?: number | null
    uxScore?: number | null
    performance?: number | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    lastCrawledAt?: Date | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KeywordCreateManySiteInput = {
    id?: string
    keyword: string
    normalized: string
    source: string
    intent?: string | null
    cluster?: string | null
    country?: string
    language?: string
    pageId?: string | null
    clusterId?: string | null
    priority?: number | null
    createdAt?: Date | string
  }

  export type CrawlLogUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlLogUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlLogUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    h1?: NullableStringFieldUpdateOperationsInput | string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    seoScore?: NullableIntFieldUpdateOperationsInput | number | null
    uxScore?: NullableIntFieldUpdateOperationsInput | number | null
    performance?: NullableIntFieldUpdateOperationsInput | number | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    lastCrawledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: PageVersionUpdateManyWithoutPageNestedInput
    keywordEntities?: KeywordUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    h1?: NullableStringFieldUpdateOperationsInput | string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    seoScore?: NullableIntFieldUpdateOperationsInput | number | null
    uxScore?: NullableIntFieldUpdateOperationsInput | number | null
    performance?: NullableIntFieldUpdateOperationsInput | number | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    lastCrawledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: PageVersionUncheckedUpdateManyWithoutPageNestedInput
    keywordEntities?: KeywordUncheckedUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    h1?: NullableStringFieldUpdateOperationsInput | string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    seoScore?: NullableIntFieldUpdateOperationsInput | number | null
    uxScore?: NullableIntFieldUpdateOperationsInput | number | null
    performance?: NullableIntFieldUpdateOperationsInput | number | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    lastCrawledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    normalized?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: PageUpdateOneWithoutKeywordEntitiesNestedInput
    keywordCluster?: KeywordClusterUpdateOneWithoutKeywordsNestedInput
  }

  export type KeywordUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    normalized?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    clusterId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    normalized?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    clusterId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageVersionCreateManyPageInput = {
    id?: string
    version: number
    url: string
    title?: string | null
    description?: string | null
    h1?: string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: number | null
    content?: string | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: string | null
    seoScore?: number | null
    uxScore?: number | null
    performance?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type KeywordCreateManyPageInput = {
    id?: string
    keyword: string
    normalized: string
    source: string
    intent?: string | null
    cluster?: string | null
    country?: string
    language?: string
    siteId?: string | null
    clusterId?: string | null
    priority?: number | null
    createdAt?: Date | string
  }

  export type PageVersionUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    h1?: NullableStringFieldUpdateOperationsInput | string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    seoScore?: NullableIntFieldUpdateOperationsInput | number | null
    uxScore?: NullableIntFieldUpdateOperationsInput | number | null
    performance?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageVersionUncheckedUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    h1?: NullableStringFieldUpdateOperationsInput | string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    seoScore?: NullableIntFieldUpdateOperationsInput | number | null
    uxScore?: NullableIntFieldUpdateOperationsInput | number | null
    performance?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageVersionUncheckedUpdateManyWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    h1?: NullableStringFieldUpdateOperationsInput | string | null
    h2?: NullableJsonNullValueInput | InputJsonValue
    h3?: NullableJsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    issues?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableJsonNullValueInput | InputJsonValue
    keywords?: NullableJsonNullValueInput | InputJsonValue
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    seoScore?: NullableIntFieldUpdateOperationsInput | number | null
    uxScore?: NullableIntFieldUpdateOperationsInput | number | null
    performance?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    sections?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    technical?: NullableJsonNullValueInput | InputJsonValue
    accessibility?: NullableJsonNullValueInput | InputJsonValue
    indexing?: NullableJsonNullValueInput | InputJsonValue
    pageSpeed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    normalized?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneWithoutKeywordsNestedInput
    keywordCluster?: KeywordClusterUpdateOneWithoutKeywordsNestedInput
  }

  export type KeywordUncheckedUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    normalized?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
    clusterId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordUncheckedUpdateManyWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    normalized?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
    clusterId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordCreateManyKeywordClusterInput = {
    id?: string
    keyword: string
    normalized: string
    source: string
    intent?: string | null
    cluster?: string | null
    country?: string
    language?: string
    pageId?: string | null
    siteId?: string | null
    priority?: number | null
    createdAt?: Date | string
  }

  export type KeywordUpdateWithoutKeywordClusterInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    normalized?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: PageUpdateOneWithoutKeywordEntitiesNestedInput
    site?: SiteUpdateOneWithoutKeywordsNestedInput
  }

  export type KeywordUncheckedUpdateWithoutKeywordClusterInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    normalized?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordUncheckedUpdateManyWithoutKeywordClusterInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    normalized?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}