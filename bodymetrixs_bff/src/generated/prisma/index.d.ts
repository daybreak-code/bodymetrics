
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Measurement
 * 
 */
export type Measurement = $Result.DefaultSelection<Prisma.$MeasurementPayload>
/**
 * Model Disease
 * 
 */
export type Disease = $Result.DefaultSelection<Prisma.$DiseasePayload>
/**
 * Model Medication
 * 
 */
export type Medication = $Result.DefaultSelection<Prisma.$MedicationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.measurement`: Exposes CRUD operations for the **Measurement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Measurements
    * const measurements = await prisma.measurement.findMany()
    * ```
    */
  get measurement(): Prisma.MeasurementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disease`: Exposes CRUD operations for the **Disease** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diseases
    * const diseases = await prisma.disease.findMany()
    * ```
    */
  get disease(): Prisma.DiseaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medication`: Exposes CRUD operations for the **Medication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medications
    * const medications = await prisma.medication.findMany()
    * ```
    */
  get medication(): Prisma.MedicationDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Measurement: 'Measurement',
    Disease: 'Disease',
    Medication: 'Medication'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "measurement" | "disease" | "medication"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Measurement: {
        payload: Prisma.$MeasurementPayload<ExtArgs>
        fields: Prisma.MeasurementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeasurementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeasurementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          findFirst: {
            args: Prisma.MeasurementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeasurementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          findMany: {
            args: Prisma.MeasurementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>[]
          }
          create: {
            args: Prisma.MeasurementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          createMany: {
            args: Prisma.MeasurementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeasurementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>[]
          }
          delete: {
            args: Prisma.MeasurementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          update: {
            args: Prisma.MeasurementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          deleteMany: {
            args: Prisma.MeasurementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeasurementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeasurementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>[]
          }
          upsert: {
            args: Prisma.MeasurementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          aggregate: {
            args: Prisma.MeasurementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeasurement>
          }
          groupBy: {
            args: Prisma.MeasurementGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeasurementGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeasurementCountArgs<ExtArgs>
            result: $Utils.Optional<MeasurementCountAggregateOutputType> | number
          }
        }
      }
      Disease: {
        payload: Prisma.$DiseasePayload<ExtArgs>
        fields: Prisma.DiseaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiseaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiseaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          findFirst: {
            args: Prisma.DiseaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiseaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          findMany: {
            args: Prisma.DiseaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>[]
          }
          create: {
            args: Prisma.DiseaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          createMany: {
            args: Prisma.DiseaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiseaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>[]
          }
          delete: {
            args: Prisma.DiseaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          update: {
            args: Prisma.DiseaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          deleteMany: {
            args: Prisma.DiseaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiseaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiseaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>[]
          }
          upsert: {
            args: Prisma.DiseaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          aggregate: {
            args: Prisma.DiseaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisease>
          }
          groupBy: {
            args: Prisma.DiseaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiseaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiseaseCountArgs<ExtArgs>
            result: $Utils.Optional<DiseaseCountAggregateOutputType> | number
          }
        }
      }
      Medication: {
        payload: Prisma.$MedicationPayload<ExtArgs>
        fields: Prisma.MedicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findFirst: {
            args: Prisma.MedicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findMany: {
            args: Prisma.MedicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          create: {
            args: Prisma.MedicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          createMany: {
            args: Prisma.MedicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          delete: {
            args: Prisma.MedicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          update: {
            args: Prisma.MedicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          deleteMany: {
            args: Prisma.MedicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          upsert: {
            args: Prisma.MedicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          aggregate: {
            args: Prisma.MedicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedication>
          }
          groupBy: {
            args: Prisma.MedicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicationCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    measurement?: MeasurementOmit
    disease?: DiseaseOmit
    medication?: MedicationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    measurements: number
    diseases: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    measurements?: boolean | UserCountOutputTypeCountMeasurementsArgs
    diseases?: boolean | UserCountOutputTypeCountDiseasesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMeasurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeasurementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDiseasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiseaseWhereInput
  }


  /**
   * Count Type DiseaseCountOutputType
   */

  export type DiseaseCountOutputType = {
    medications: number
  }

  export type DiseaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | DiseaseCountOutputTypeCountMedicationsArgs
  }

  // Custom InputTypes
  /**
   * DiseaseCountOutputType without action
   */
  export type DiseaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseCountOutputType
     */
    select?: DiseaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiseaseCountOutputType without action
   */
  export type DiseaseCountOutputTypeCountMedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    avatar: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    avatar: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    measurements?: boolean | User$measurementsArgs<ExtArgs>
    diseases?: boolean | User$diseasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "avatar", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    measurements?: boolean | User$measurementsArgs<ExtArgs>
    diseases?: boolean | User$diseasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      measurements: Prisma.$MeasurementPayload<ExtArgs>[]
      diseases: Prisma.$DiseasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      avatar: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    measurements<T extends User$measurementsArgs<ExtArgs> = {}>(args?: Subset<T, User$measurementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    diseases<T extends User$diseasesArgs<ExtArgs> = {}>(args?: Subset<T, User$diseasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.measurements
   */
  export type User$measurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    where?: MeasurementWhereInput
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    cursor?: MeasurementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * User.diseases
   */
  export type User$diseasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    where?: DiseaseWhereInput
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    cursor?: DiseaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiseaseScalarFieldEnum | DiseaseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Measurement
   */

  export type AggregateMeasurement = {
    _count: MeasurementCountAggregateOutputType | null
    _avg: MeasurementAvgAggregateOutputType | null
    _sum: MeasurementSumAggregateOutputType | null
    _min: MeasurementMinAggregateOutputType | null
    _max: MeasurementMaxAggregateOutputType | null
  }

  export type MeasurementAvgAggregateOutputType = {
    weight: number | null
    height: number | null
    armCircumference: number | null
    legCircumference: number | null
    waistCircumference: number | null
    chestCircumference: number | null
    hipCircumference: number | null
    neckCircumference: number | null
    bmi: number | null
  }

  export type MeasurementSumAggregateOutputType = {
    weight: number | null
    height: number | null
    armCircumference: number | null
    legCircumference: number | null
    waistCircumference: number | null
    chestCircumference: number | null
    hipCircumference: number | null
    neckCircumference: number | null
    bmi: number | null
  }

  export type MeasurementMinAggregateOutputType = {
    id: string | null
    date: Date | null
    weight: number | null
    height: number | null
    armCircumference: number | null
    legCircumference: number | null
    waistCircumference: number | null
    chestCircumference: number | null
    hipCircumference: number | null
    neckCircumference: number | null
    bmi: number | null
    userId: string | null
  }

  export type MeasurementMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    weight: number | null
    height: number | null
    armCircumference: number | null
    legCircumference: number | null
    waistCircumference: number | null
    chestCircumference: number | null
    hipCircumference: number | null
    neckCircumference: number | null
    bmi: number | null
    userId: string | null
  }

  export type MeasurementCountAggregateOutputType = {
    id: number
    date: number
    weight: number
    height: number
    armCircumference: number
    legCircumference: number
    waistCircumference: number
    chestCircumference: number
    hipCircumference: number
    neckCircumference: number
    bmi: number
    userId: number
    _all: number
  }


  export type MeasurementAvgAggregateInputType = {
    weight?: true
    height?: true
    armCircumference?: true
    legCircumference?: true
    waistCircumference?: true
    chestCircumference?: true
    hipCircumference?: true
    neckCircumference?: true
    bmi?: true
  }

  export type MeasurementSumAggregateInputType = {
    weight?: true
    height?: true
    armCircumference?: true
    legCircumference?: true
    waistCircumference?: true
    chestCircumference?: true
    hipCircumference?: true
    neckCircumference?: true
    bmi?: true
  }

  export type MeasurementMinAggregateInputType = {
    id?: true
    date?: true
    weight?: true
    height?: true
    armCircumference?: true
    legCircumference?: true
    waistCircumference?: true
    chestCircumference?: true
    hipCircumference?: true
    neckCircumference?: true
    bmi?: true
    userId?: true
  }

  export type MeasurementMaxAggregateInputType = {
    id?: true
    date?: true
    weight?: true
    height?: true
    armCircumference?: true
    legCircumference?: true
    waistCircumference?: true
    chestCircumference?: true
    hipCircumference?: true
    neckCircumference?: true
    bmi?: true
    userId?: true
  }

  export type MeasurementCountAggregateInputType = {
    id?: true
    date?: true
    weight?: true
    height?: true
    armCircumference?: true
    legCircumference?: true
    waistCircumference?: true
    chestCircumference?: true
    hipCircumference?: true
    neckCircumference?: true
    bmi?: true
    userId?: true
    _all?: true
  }

  export type MeasurementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Measurement to aggregate.
     */
    where?: MeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Measurements
    **/
    _count?: true | MeasurementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeasurementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeasurementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeasurementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeasurementMaxAggregateInputType
  }

  export type GetMeasurementAggregateType<T extends MeasurementAggregateArgs> = {
        [P in keyof T & keyof AggregateMeasurement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeasurement[P]>
      : GetScalarType<T[P], AggregateMeasurement[P]>
  }




  export type MeasurementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeasurementWhereInput
    orderBy?: MeasurementOrderByWithAggregationInput | MeasurementOrderByWithAggregationInput[]
    by: MeasurementScalarFieldEnum[] | MeasurementScalarFieldEnum
    having?: MeasurementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeasurementCountAggregateInputType | true
    _avg?: MeasurementAvgAggregateInputType
    _sum?: MeasurementSumAggregateInputType
    _min?: MeasurementMinAggregateInputType
    _max?: MeasurementMaxAggregateInputType
  }

  export type MeasurementGroupByOutputType = {
    id: string
    date: Date
    weight: number | null
    height: number | null
    armCircumference: number | null
    legCircumference: number | null
    waistCircumference: number | null
    chestCircumference: number | null
    hipCircumference: number | null
    neckCircumference: number | null
    bmi: number | null
    userId: string
    _count: MeasurementCountAggregateOutputType | null
    _avg: MeasurementAvgAggregateOutputType | null
    _sum: MeasurementSumAggregateOutputType | null
    _min: MeasurementMinAggregateOutputType | null
    _max: MeasurementMaxAggregateOutputType | null
  }

  type GetMeasurementGroupByPayload<T extends MeasurementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeasurementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeasurementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeasurementGroupByOutputType[P]>
            : GetScalarType<T[P], MeasurementGroupByOutputType[P]>
        }
      >
    >


  export type MeasurementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    weight?: boolean
    height?: boolean
    armCircumference?: boolean
    legCircumference?: boolean
    waistCircumference?: boolean
    chestCircumference?: boolean
    hipCircumference?: boolean
    neckCircumference?: boolean
    bmi?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurement"]>

  export type MeasurementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    weight?: boolean
    height?: boolean
    armCircumference?: boolean
    legCircumference?: boolean
    waistCircumference?: boolean
    chestCircumference?: boolean
    hipCircumference?: boolean
    neckCircumference?: boolean
    bmi?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurement"]>

  export type MeasurementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    weight?: boolean
    height?: boolean
    armCircumference?: boolean
    legCircumference?: boolean
    waistCircumference?: boolean
    chestCircumference?: boolean
    hipCircumference?: boolean
    neckCircumference?: boolean
    bmi?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurement"]>

  export type MeasurementSelectScalar = {
    id?: boolean
    date?: boolean
    weight?: boolean
    height?: boolean
    armCircumference?: boolean
    legCircumference?: boolean
    waistCircumference?: boolean
    chestCircumference?: boolean
    hipCircumference?: boolean
    neckCircumference?: boolean
    bmi?: boolean
    userId?: boolean
  }

  export type MeasurementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "weight" | "height" | "armCircumference" | "legCircumference" | "waistCircumference" | "chestCircumference" | "hipCircumference" | "neckCircumference" | "bmi" | "userId", ExtArgs["result"]["measurement"]>
  export type MeasurementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeasurementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeasurementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MeasurementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Measurement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      weight: number | null
      height: number | null
      armCircumference: number | null
      legCircumference: number | null
      waistCircumference: number | null
      chestCircumference: number | null
      hipCircumference: number | null
      neckCircumference: number | null
      bmi: number | null
      userId: string
    }, ExtArgs["result"]["measurement"]>
    composites: {}
  }

  type MeasurementGetPayload<S extends boolean | null | undefined | MeasurementDefaultArgs> = $Result.GetResult<Prisma.$MeasurementPayload, S>

  type MeasurementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeasurementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeasurementCountAggregateInputType | true
    }

  export interface MeasurementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Measurement'], meta: { name: 'Measurement' } }
    /**
     * Find zero or one Measurement that matches the filter.
     * @param {MeasurementFindUniqueArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeasurementFindUniqueArgs>(args: SelectSubset<T, MeasurementFindUniqueArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Measurement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeasurementFindUniqueOrThrowArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeasurementFindUniqueOrThrowArgs>(args: SelectSubset<T, MeasurementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Measurement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementFindFirstArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeasurementFindFirstArgs>(args?: SelectSubset<T, MeasurementFindFirstArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Measurement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementFindFirstOrThrowArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeasurementFindFirstOrThrowArgs>(args?: SelectSubset<T, MeasurementFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Measurements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Measurements
     * const measurements = await prisma.measurement.findMany()
     * 
     * // Get first 10 Measurements
     * const measurements = await prisma.measurement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const measurementWithIdOnly = await prisma.measurement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeasurementFindManyArgs>(args?: SelectSubset<T, MeasurementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Measurement.
     * @param {MeasurementCreateArgs} args - Arguments to create a Measurement.
     * @example
     * // Create one Measurement
     * const Measurement = await prisma.measurement.create({
     *   data: {
     *     // ... data to create a Measurement
     *   }
     * })
     * 
     */
    create<T extends MeasurementCreateArgs>(args: SelectSubset<T, MeasurementCreateArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Measurements.
     * @param {MeasurementCreateManyArgs} args - Arguments to create many Measurements.
     * @example
     * // Create many Measurements
     * const measurement = await prisma.measurement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeasurementCreateManyArgs>(args?: SelectSubset<T, MeasurementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Measurements and returns the data saved in the database.
     * @param {MeasurementCreateManyAndReturnArgs} args - Arguments to create many Measurements.
     * @example
     * // Create many Measurements
     * const measurement = await prisma.measurement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Measurements and only return the `id`
     * const measurementWithIdOnly = await prisma.measurement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeasurementCreateManyAndReturnArgs>(args?: SelectSubset<T, MeasurementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Measurement.
     * @param {MeasurementDeleteArgs} args - Arguments to delete one Measurement.
     * @example
     * // Delete one Measurement
     * const Measurement = await prisma.measurement.delete({
     *   where: {
     *     // ... filter to delete one Measurement
     *   }
     * })
     * 
     */
    delete<T extends MeasurementDeleteArgs>(args: SelectSubset<T, MeasurementDeleteArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Measurement.
     * @param {MeasurementUpdateArgs} args - Arguments to update one Measurement.
     * @example
     * // Update one Measurement
     * const measurement = await prisma.measurement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeasurementUpdateArgs>(args: SelectSubset<T, MeasurementUpdateArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Measurements.
     * @param {MeasurementDeleteManyArgs} args - Arguments to filter Measurements to delete.
     * @example
     * // Delete a few Measurements
     * const { count } = await prisma.measurement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeasurementDeleteManyArgs>(args?: SelectSubset<T, MeasurementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Measurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Measurements
     * const measurement = await prisma.measurement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeasurementUpdateManyArgs>(args: SelectSubset<T, MeasurementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Measurements and returns the data updated in the database.
     * @param {MeasurementUpdateManyAndReturnArgs} args - Arguments to update many Measurements.
     * @example
     * // Update many Measurements
     * const measurement = await prisma.measurement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Measurements and only return the `id`
     * const measurementWithIdOnly = await prisma.measurement.updateManyAndReturn({
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
    updateManyAndReturn<T extends MeasurementUpdateManyAndReturnArgs>(args: SelectSubset<T, MeasurementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Measurement.
     * @param {MeasurementUpsertArgs} args - Arguments to update or create a Measurement.
     * @example
     * // Update or create a Measurement
     * const measurement = await prisma.measurement.upsert({
     *   create: {
     *     // ... data to create a Measurement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Measurement we want to update
     *   }
     * })
     */
    upsert<T extends MeasurementUpsertArgs>(args: SelectSubset<T, MeasurementUpsertArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Measurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementCountArgs} args - Arguments to filter Measurements to count.
     * @example
     * // Count the number of Measurements
     * const count = await prisma.measurement.count({
     *   where: {
     *     // ... the filter for the Measurements we want to count
     *   }
     * })
    **/
    count<T extends MeasurementCountArgs>(
      args?: Subset<T, MeasurementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeasurementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Measurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeasurementAggregateArgs>(args: Subset<T, MeasurementAggregateArgs>): Prisma.PrismaPromise<GetMeasurementAggregateType<T>>

    /**
     * Group by Measurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementGroupByArgs} args - Group by arguments.
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
      T extends MeasurementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeasurementGroupByArgs['orderBy'] }
        : { orderBy?: MeasurementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MeasurementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeasurementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Measurement model
   */
  readonly fields: MeasurementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Measurement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeasurementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Measurement model
   */
  interface MeasurementFieldRefs {
    readonly id: FieldRef<"Measurement", 'String'>
    readonly date: FieldRef<"Measurement", 'DateTime'>
    readonly weight: FieldRef<"Measurement", 'Float'>
    readonly height: FieldRef<"Measurement", 'Float'>
    readonly armCircumference: FieldRef<"Measurement", 'Float'>
    readonly legCircumference: FieldRef<"Measurement", 'Float'>
    readonly waistCircumference: FieldRef<"Measurement", 'Float'>
    readonly chestCircumference: FieldRef<"Measurement", 'Float'>
    readonly hipCircumference: FieldRef<"Measurement", 'Float'>
    readonly neckCircumference: FieldRef<"Measurement", 'Float'>
    readonly bmi: FieldRef<"Measurement", 'Float'>
    readonly userId: FieldRef<"Measurement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Measurement findUnique
   */
  export type MeasurementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurement to fetch.
     */
    where: MeasurementWhereUniqueInput
  }

  /**
   * Measurement findUniqueOrThrow
   */
  export type MeasurementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurement to fetch.
     */
    where: MeasurementWhereUniqueInput
  }

  /**
   * Measurement findFirst
   */
  export type MeasurementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurement to fetch.
     */
    where?: MeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Measurements.
     */
    cursor?: MeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Measurements.
     */
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * Measurement findFirstOrThrow
   */
  export type MeasurementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurement to fetch.
     */
    where?: MeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Measurements.
     */
    cursor?: MeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Measurements.
     */
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * Measurement findMany
   */
  export type MeasurementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurements to fetch.
     */
    where?: MeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Measurements.
     */
    cursor?: MeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * Measurement create
   */
  export type MeasurementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * The data needed to create a Measurement.
     */
    data: XOR<MeasurementCreateInput, MeasurementUncheckedCreateInput>
  }

  /**
   * Measurement createMany
   */
  export type MeasurementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Measurements.
     */
    data: MeasurementCreateManyInput | MeasurementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Measurement createManyAndReturn
   */
  export type MeasurementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * The data used to create many Measurements.
     */
    data: MeasurementCreateManyInput | MeasurementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Measurement update
   */
  export type MeasurementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * The data needed to update a Measurement.
     */
    data: XOR<MeasurementUpdateInput, MeasurementUncheckedUpdateInput>
    /**
     * Choose, which Measurement to update.
     */
    where: MeasurementWhereUniqueInput
  }

  /**
   * Measurement updateMany
   */
  export type MeasurementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Measurements.
     */
    data: XOR<MeasurementUpdateManyMutationInput, MeasurementUncheckedUpdateManyInput>
    /**
     * Filter which Measurements to update
     */
    where?: MeasurementWhereInput
    /**
     * Limit how many Measurements to update.
     */
    limit?: number
  }

  /**
   * Measurement updateManyAndReturn
   */
  export type MeasurementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * The data used to update Measurements.
     */
    data: XOR<MeasurementUpdateManyMutationInput, MeasurementUncheckedUpdateManyInput>
    /**
     * Filter which Measurements to update
     */
    where?: MeasurementWhereInput
    /**
     * Limit how many Measurements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Measurement upsert
   */
  export type MeasurementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * The filter to search for the Measurement to update in case it exists.
     */
    where: MeasurementWhereUniqueInput
    /**
     * In case the Measurement found by the `where` argument doesn't exist, create a new Measurement with this data.
     */
    create: XOR<MeasurementCreateInput, MeasurementUncheckedCreateInput>
    /**
     * In case the Measurement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeasurementUpdateInput, MeasurementUncheckedUpdateInput>
  }

  /**
   * Measurement delete
   */
  export type MeasurementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter which Measurement to delete.
     */
    where: MeasurementWhereUniqueInput
  }

  /**
   * Measurement deleteMany
   */
  export type MeasurementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Measurements to delete
     */
    where?: MeasurementWhereInput
    /**
     * Limit how many Measurements to delete.
     */
    limit?: number
  }

  /**
   * Measurement without action
   */
  export type MeasurementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
  }


  /**
   * Model Disease
   */

  export type AggregateDisease = {
    _count: DiseaseCountAggregateOutputType | null
    _min: DiseaseMinAggregateOutputType | null
    _max: DiseaseMaxAggregateOutputType | null
  }

  export type DiseaseMinAggregateOutputType = {
    id: string | null
    name: string | null
    symptoms: string | null
    onsetDate: Date | null
    isPrivate: boolean | null
    userId: string | null
  }

  export type DiseaseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    symptoms: string | null
    onsetDate: Date | null
    isPrivate: boolean | null
    userId: string | null
  }

  export type DiseaseCountAggregateOutputType = {
    id: number
    name: number
    symptoms: number
    onsetDate: number
    isPrivate: number
    userId: number
    _all: number
  }


  export type DiseaseMinAggregateInputType = {
    id?: true
    name?: true
    symptoms?: true
    onsetDate?: true
    isPrivate?: true
    userId?: true
  }

  export type DiseaseMaxAggregateInputType = {
    id?: true
    name?: true
    symptoms?: true
    onsetDate?: true
    isPrivate?: true
    userId?: true
  }

  export type DiseaseCountAggregateInputType = {
    id?: true
    name?: true
    symptoms?: true
    onsetDate?: true
    isPrivate?: true
    userId?: true
    _all?: true
  }

  export type DiseaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disease to aggregate.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diseases
    **/
    _count?: true | DiseaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiseaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiseaseMaxAggregateInputType
  }

  export type GetDiseaseAggregateType<T extends DiseaseAggregateArgs> = {
        [P in keyof T & keyof AggregateDisease]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisease[P]>
      : GetScalarType<T[P], AggregateDisease[P]>
  }




  export type DiseaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiseaseWhereInput
    orderBy?: DiseaseOrderByWithAggregationInput | DiseaseOrderByWithAggregationInput[]
    by: DiseaseScalarFieldEnum[] | DiseaseScalarFieldEnum
    having?: DiseaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiseaseCountAggregateInputType | true
    _min?: DiseaseMinAggregateInputType
    _max?: DiseaseMaxAggregateInputType
  }

  export type DiseaseGroupByOutputType = {
    id: string
    name: string
    symptoms: string
    onsetDate: Date
    isPrivate: boolean
    userId: string
    _count: DiseaseCountAggregateOutputType | null
    _min: DiseaseMinAggregateOutputType | null
    _max: DiseaseMaxAggregateOutputType | null
  }

  type GetDiseaseGroupByPayload<T extends DiseaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiseaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiseaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiseaseGroupByOutputType[P]>
            : GetScalarType<T[P], DiseaseGroupByOutputType[P]>
        }
      >
    >


  export type DiseaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    symptoms?: boolean
    onsetDate?: boolean
    isPrivate?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    medications?: boolean | Disease$medicationsArgs<ExtArgs>
    _count?: boolean | DiseaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disease"]>

  export type DiseaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    symptoms?: boolean
    onsetDate?: boolean
    isPrivate?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disease"]>

  export type DiseaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    symptoms?: boolean
    onsetDate?: boolean
    isPrivate?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disease"]>

  export type DiseaseSelectScalar = {
    id?: boolean
    name?: boolean
    symptoms?: boolean
    onsetDate?: boolean
    isPrivate?: boolean
    userId?: boolean
  }

  export type DiseaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "symptoms" | "onsetDate" | "isPrivate" | "userId", ExtArgs["result"]["disease"]>
  export type DiseaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    medications?: boolean | Disease$medicationsArgs<ExtArgs>
    _count?: boolean | DiseaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiseaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DiseaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DiseasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disease"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      medications: Prisma.$MedicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      symptoms: string
      onsetDate: Date
      isPrivate: boolean
      userId: string
    }, ExtArgs["result"]["disease"]>
    composites: {}
  }

  type DiseaseGetPayload<S extends boolean | null | undefined | DiseaseDefaultArgs> = $Result.GetResult<Prisma.$DiseasePayload, S>

  type DiseaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiseaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiseaseCountAggregateInputType | true
    }

  export interface DiseaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disease'], meta: { name: 'Disease' } }
    /**
     * Find zero or one Disease that matches the filter.
     * @param {DiseaseFindUniqueArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiseaseFindUniqueArgs>(args: SelectSubset<T, DiseaseFindUniqueArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disease that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiseaseFindUniqueOrThrowArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiseaseFindUniqueOrThrowArgs>(args: SelectSubset<T, DiseaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disease that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseFindFirstArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiseaseFindFirstArgs>(args?: SelectSubset<T, DiseaseFindFirstArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disease that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseFindFirstOrThrowArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiseaseFindFirstOrThrowArgs>(args?: SelectSubset<T, DiseaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diseases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diseases
     * const diseases = await prisma.disease.findMany()
     * 
     * // Get first 10 Diseases
     * const diseases = await prisma.disease.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diseaseWithIdOnly = await prisma.disease.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiseaseFindManyArgs>(args?: SelectSubset<T, DiseaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disease.
     * @param {DiseaseCreateArgs} args - Arguments to create a Disease.
     * @example
     * // Create one Disease
     * const Disease = await prisma.disease.create({
     *   data: {
     *     // ... data to create a Disease
     *   }
     * })
     * 
     */
    create<T extends DiseaseCreateArgs>(args: SelectSubset<T, DiseaseCreateArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diseases.
     * @param {DiseaseCreateManyArgs} args - Arguments to create many Diseases.
     * @example
     * // Create many Diseases
     * const disease = await prisma.disease.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiseaseCreateManyArgs>(args?: SelectSubset<T, DiseaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diseases and returns the data saved in the database.
     * @param {DiseaseCreateManyAndReturnArgs} args - Arguments to create many Diseases.
     * @example
     * // Create many Diseases
     * const disease = await prisma.disease.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diseases and only return the `id`
     * const diseaseWithIdOnly = await prisma.disease.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiseaseCreateManyAndReturnArgs>(args?: SelectSubset<T, DiseaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Disease.
     * @param {DiseaseDeleteArgs} args - Arguments to delete one Disease.
     * @example
     * // Delete one Disease
     * const Disease = await prisma.disease.delete({
     *   where: {
     *     // ... filter to delete one Disease
     *   }
     * })
     * 
     */
    delete<T extends DiseaseDeleteArgs>(args: SelectSubset<T, DiseaseDeleteArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disease.
     * @param {DiseaseUpdateArgs} args - Arguments to update one Disease.
     * @example
     * // Update one Disease
     * const disease = await prisma.disease.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiseaseUpdateArgs>(args: SelectSubset<T, DiseaseUpdateArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diseases.
     * @param {DiseaseDeleteManyArgs} args - Arguments to filter Diseases to delete.
     * @example
     * // Delete a few Diseases
     * const { count } = await prisma.disease.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiseaseDeleteManyArgs>(args?: SelectSubset<T, DiseaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diseases
     * const disease = await prisma.disease.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiseaseUpdateManyArgs>(args: SelectSubset<T, DiseaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diseases and returns the data updated in the database.
     * @param {DiseaseUpdateManyAndReturnArgs} args - Arguments to update many Diseases.
     * @example
     * // Update many Diseases
     * const disease = await prisma.disease.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diseases and only return the `id`
     * const diseaseWithIdOnly = await prisma.disease.updateManyAndReturn({
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
    updateManyAndReturn<T extends DiseaseUpdateManyAndReturnArgs>(args: SelectSubset<T, DiseaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Disease.
     * @param {DiseaseUpsertArgs} args - Arguments to update or create a Disease.
     * @example
     * // Update or create a Disease
     * const disease = await prisma.disease.upsert({
     *   create: {
     *     // ... data to create a Disease
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disease we want to update
     *   }
     * })
     */
    upsert<T extends DiseaseUpsertArgs>(args: SelectSubset<T, DiseaseUpsertArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseCountArgs} args - Arguments to filter Diseases to count.
     * @example
     * // Count the number of Diseases
     * const count = await prisma.disease.count({
     *   where: {
     *     // ... the filter for the Diseases we want to count
     *   }
     * })
    **/
    count<T extends DiseaseCountArgs>(
      args?: Subset<T, DiseaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiseaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiseaseAggregateArgs>(args: Subset<T, DiseaseAggregateArgs>): Prisma.PrismaPromise<GetDiseaseAggregateType<T>>

    /**
     * Group by Disease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseGroupByArgs} args - Group by arguments.
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
      T extends DiseaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiseaseGroupByArgs['orderBy'] }
        : { orderBy?: DiseaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiseaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiseaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disease model
   */
  readonly fields: DiseaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disease.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiseaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medications<T extends Disease$medicationsArgs<ExtArgs> = {}>(args?: Subset<T, Disease$medicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Disease model
   */
  interface DiseaseFieldRefs {
    readonly id: FieldRef<"Disease", 'String'>
    readonly name: FieldRef<"Disease", 'String'>
    readonly symptoms: FieldRef<"Disease", 'String'>
    readonly onsetDate: FieldRef<"Disease", 'DateTime'>
    readonly isPrivate: FieldRef<"Disease", 'Boolean'>
    readonly userId: FieldRef<"Disease", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Disease findUnique
   */
  export type DiseaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease findUniqueOrThrow
   */
  export type DiseaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease findFirst
   */
  export type DiseaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diseases.
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diseases.
     */
    distinct?: DiseaseScalarFieldEnum | DiseaseScalarFieldEnum[]
  }

  /**
   * Disease findFirstOrThrow
   */
  export type DiseaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diseases.
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diseases.
     */
    distinct?: DiseaseScalarFieldEnum | DiseaseScalarFieldEnum[]
  }

  /**
   * Disease findMany
   */
  export type DiseaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Diseases to fetch.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diseases.
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    distinct?: DiseaseScalarFieldEnum | DiseaseScalarFieldEnum[]
  }

  /**
   * Disease create
   */
  export type DiseaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Disease.
     */
    data: XOR<DiseaseCreateInput, DiseaseUncheckedCreateInput>
  }

  /**
   * Disease createMany
   */
  export type DiseaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diseases.
     */
    data: DiseaseCreateManyInput | DiseaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disease createManyAndReturn
   */
  export type DiseaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * The data used to create many Diseases.
     */
    data: DiseaseCreateManyInput | DiseaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Disease update
   */
  export type DiseaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Disease.
     */
    data: XOR<DiseaseUpdateInput, DiseaseUncheckedUpdateInput>
    /**
     * Choose, which Disease to update.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease updateMany
   */
  export type DiseaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diseases.
     */
    data: XOR<DiseaseUpdateManyMutationInput, DiseaseUncheckedUpdateManyInput>
    /**
     * Filter which Diseases to update
     */
    where?: DiseaseWhereInput
    /**
     * Limit how many Diseases to update.
     */
    limit?: number
  }

  /**
   * Disease updateManyAndReturn
   */
  export type DiseaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * The data used to update Diseases.
     */
    data: XOR<DiseaseUpdateManyMutationInput, DiseaseUncheckedUpdateManyInput>
    /**
     * Filter which Diseases to update
     */
    where?: DiseaseWhereInput
    /**
     * Limit how many Diseases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Disease upsert
   */
  export type DiseaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Disease to update in case it exists.
     */
    where: DiseaseWhereUniqueInput
    /**
     * In case the Disease found by the `where` argument doesn't exist, create a new Disease with this data.
     */
    create: XOR<DiseaseCreateInput, DiseaseUncheckedCreateInput>
    /**
     * In case the Disease was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiseaseUpdateInput, DiseaseUncheckedUpdateInput>
  }

  /**
   * Disease delete
   */
  export type DiseaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter which Disease to delete.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease deleteMany
   */
  export type DiseaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diseases to delete
     */
    where?: DiseaseWhereInput
    /**
     * Limit how many Diseases to delete.
     */
    limit?: number
  }

  /**
   * Disease.medications
   */
  export type Disease$medicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    cursor?: MedicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Disease without action
   */
  export type DiseaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
  }


  /**
   * Model Medication
   */

  export type AggregateMedication = {
    _count: MedicationCountAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  export type MedicationMinAggregateOutputType = {
    id: string | null
    name: string | null
    dosage: string | null
    reminderTime: string | null
    diseaseId: string | null
  }

  export type MedicationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    dosage: string | null
    reminderTime: string | null
    diseaseId: string | null
  }

  export type MedicationCountAggregateOutputType = {
    id: number
    name: number
    dosage: number
    reminderTime: number
    diseaseId: number
    _all: number
  }


  export type MedicationMinAggregateInputType = {
    id?: true
    name?: true
    dosage?: true
    reminderTime?: true
    diseaseId?: true
  }

  export type MedicationMaxAggregateInputType = {
    id?: true
    name?: true
    dosage?: true
    reminderTime?: true
    diseaseId?: true
  }

  export type MedicationCountAggregateInputType = {
    id?: true
    name?: true
    dosage?: true
    reminderTime?: true
    diseaseId?: true
    _all?: true
  }

  export type MedicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medication to aggregate.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medications
    **/
    _count?: true | MedicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationMaxAggregateInputType
  }

  export type GetMedicationAggregateType<T extends MedicationAggregateArgs> = {
        [P in keyof T & keyof AggregateMedication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedication[P]>
      : GetScalarType<T[P], AggregateMedication[P]>
  }




  export type MedicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithAggregationInput | MedicationOrderByWithAggregationInput[]
    by: MedicationScalarFieldEnum[] | MedicationScalarFieldEnum
    having?: MedicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationCountAggregateInputType | true
    _min?: MedicationMinAggregateInputType
    _max?: MedicationMaxAggregateInputType
  }

  export type MedicationGroupByOutputType = {
    id: string
    name: string
    dosage: string
    reminderTime: string | null
    diseaseId: string
    _count: MedicationCountAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  type GetMedicationGroupByPayload<T extends MedicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationGroupByOutputType[P]>
        }
      >
    >


  export type MedicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dosage?: boolean
    reminderTime?: boolean
    diseaseId?: boolean
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dosage?: boolean
    reminderTime?: boolean
    diseaseId?: boolean
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dosage?: boolean
    reminderTime?: boolean
    diseaseId?: boolean
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectScalar = {
    id?: boolean
    name?: boolean
    dosage?: boolean
    reminderTime?: boolean
    diseaseId?: boolean
  }

  export type MedicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "dosage" | "reminderTime" | "diseaseId", ExtArgs["result"]["medication"]>
  export type MedicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }
  export type MedicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }
  export type MedicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }

  export type $MedicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medication"
    objects: {
      disease: Prisma.$DiseasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      dosage: string
      reminderTime: string | null
      diseaseId: string
    }, ExtArgs["result"]["medication"]>
    composites: {}
  }

  type MedicationGetPayload<S extends boolean | null | undefined | MedicationDefaultArgs> = $Result.GetResult<Prisma.$MedicationPayload, S>

  type MedicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicationCountAggregateInputType | true
    }

  export interface MedicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medication'], meta: { name: 'Medication' } }
    /**
     * Find zero or one Medication that matches the filter.
     * @param {MedicationFindUniqueArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationFindUniqueArgs>(args: SelectSubset<T, MedicationFindUniqueArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicationFindUniqueOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationFindFirstArgs>(args?: SelectSubset<T, MedicationFindFirstArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medications
     * const medications = await prisma.medication.findMany()
     * 
     * // Get first 10 Medications
     * const medications = await prisma.medication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicationWithIdOnly = await prisma.medication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicationFindManyArgs>(args?: SelectSubset<T, MedicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medication.
     * @param {MedicationCreateArgs} args - Arguments to create a Medication.
     * @example
     * // Create one Medication
     * const Medication = await prisma.medication.create({
     *   data: {
     *     // ... data to create a Medication
     *   }
     * })
     * 
     */
    create<T extends MedicationCreateArgs>(args: SelectSubset<T, MedicationCreateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medications.
     * @param {MedicationCreateManyArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationCreateManyArgs>(args?: SelectSubset<T, MedicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medications and returns the data saved in the database.
     * @param {MedicationCreateManyAndReturnArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicationCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medication.
     * @param {MedicationDeleteArgs} args - Arguments to delete one Medication.
     * @example
     * // Delete one Medication
     * const Medication = await prisma.medication.delete({
     *   where: {
     *     // ... filter to delete one Medication
     *   }
     * })
     * 
     */
    delete<T extends MedicationDeleteArgs>(args: SelectSubset<T, MedicationDeleteArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medication.
     * @param {MedicationUpdateArgs} args - Arguments to update one Medication.
     * @example
     * // Update one Medication
     * const medication = await prisma.medication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationUpdateArgs>(args: SelectSubset<T, MedicationUpdateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medications.
     * @param {MedicationDeleteManyArgs} args - Arguments to filter Medications to delete.
     * @example
     * // Delete a few Medications
     * const { count } = await prisma.medication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationDeleteManyArgs>(args?: SelectSubset<T, MedicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationUpdateManyArgs>(args: SelectSubset<T, MedicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications and returns the data updated in the database.
     * @param {MedicationUpdateManyAndReturnArgs} args - Arguments to update many Medications.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.updateManyAndReturn({
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
    updateManyAndReturn<T extends MedicationUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medication.
     * @param {MedicationUpsertArgs} args - Arguments to update or create a Medication.
     * @example
     * // Update or create a Medication
     * const medication = await prisma.medication.upsert({
     *   create: {
     *     // ... data to create a Medication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medication we want to update
     *   }
     * })
     */
    upsert<T extends MedicationUpsertArgs>(args: SelectSubset<T, MedicationUpsertArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationCountArgs} args - Arguments to filter Medications to count.
     * @example
     * // Count the number of Medications
     * const count = await prisma.medication.count({
     *   where: {
     *     // ... the filter for the Medications we want to count
     *   }
     * })
    **/
    count<T extends MedicationCountArgs>(
      args?: Subset<T, MedicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicationAggregateArgs>(args: Subset<T, MedicationAggregateArgs>): Prisma.PrismaPromise<GetMedicationAggregateType<T>>

    /**
     * Group by Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationGroupByArgs} args - Group by arguments.
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
      T extends MedicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationGroupByArgs['orderBy'] }
        : { orderBy?: MedicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medication model
   */
  readonly fields: MedicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disease<T extends DiseaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiseaseDefaultArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Medication model
   */
  interface MedicationFieldRefs {
    readonly id: FieldRef<"Medication", 'String'>
    readonly name: FieldRef<"Medication", 'String'>
    readonly dosage: FieldRef<"Medication", 'String'>
    readonly reminderTime: FieldRef<"Medication", 'String'>
    readonly diseaseId: FieldRef<"Medication", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Medication findUnique
   */
  export type MedicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findUniqueOrThrow
   */
  export type MedicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findFirst
   */
  export type MedicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findFirstOrThrow
   */
  export type MedicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findMany
   */
  export type MedicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medications to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication create
   */
  export type MedicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Medication.
     */
    data: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
  }

  /**
   * Medication createMany
   */
  export type MedicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medication createManyAndReturn
   */
  export type MedicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medication update
   */
  export type MedicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Medication.
     */
    data: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
    /**
     * Choose, which Medication to update.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication updateMany
   */
  export type MedicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
  }

  /**
   * Medication updateManyAndReturn
   */
  export type MedicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medication upsert
   */
  export type MedicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Medication to update in case it exists.
     */
    where: MedicationWhereUniqueInput
    /**
     * In case the Medication found by the `where` argument doesn't exist, create a new Medication with this data.
     */
    create: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
    /**
     * In case the Medication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
  }

  /**
   * Medication delete
   */
  export type MedicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter which Medication to delete.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication deleteMany
   */
  export type MedicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medications to delete
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to delete.
     */
    limit?: number
  }

  /**
   * Medication without action
   */
  export type MedicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    avatar: 'avatar'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MeasurementScalarFieldEnum: {
    id: 'id',
    date: 'date',
    weight: 'weight',
    height: 'height',
    armCircumference: 'armCircumference',
    legCircumference: 'legCircumference',
    waistCircumference: 'waistCircumference',
    chestCircumference: 'chestCircumference',
    hipCircumference: 'hipCircumference',
    neckCircumference: 'neckCircumference',
    bmi: 'bmi',
    userId: 'userId'
  };

  export type MeasurementScalarFieldEnum = (typeof MeasurementScalarFieldEnum)[keyof typeof MeasurementScalarFieldEnum]


  export const DiseaseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    symptoms: 'symptoms',
    onsetDate: 'onsetDate',
    isPrivate: 'isPrivate',
    userId: 'userId'
  };

  export type DiseaseScalarFieldEnum = (typeof DiseaseScalarFieldEnum)[keyof typeof DiseaseScalarFieldEnum]


  export const MedicationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    dosage: 'dosage',
    reminderTime: 'reminderTime',
    diseaseId: 'diseaseId'
  };

  export type MedicationScalarFieldEnum = (typeof MedicationScalarFieldEnum)[keyof typeof MedicationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    measurements?: MeasurementListRelationFilter
    diseases?: DiseaseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    measurements?: MeasurementOrderByRelationAggregateInput
    diseases?: DiseaseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    measurements?: MeasurementListRelationFilter
    diseases?: DiseaseListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type MeasurementWhereInput = {
    AND?: MeasurementWhereInput | MeasurementWhereInput[]
    OR?: MeasurementWhereInput[]
    NOT?: MeasurementWhereInput | MeasurementWhereInput[]
    id?: StringFilter<"Measurement"> | string
    date?: DateTimeFilter<"Measurement"> | Date | string
    weight?: FloatNullableFilter<"Measurement"> | number | null
    height?: FloatNullableFilter<"Measurement"> | number | null
    armCircumference?: FloatNullableFilter<"Measurement"> | number | null
    legCircumference?: FloatNullableFilter<"Measurement"> | number | null
    waistCircumference?: FloatNullableFilter<"Measurement"> | number | null
    chestCircumference?: FloatNullableFilter<"Measurement"> | number | null
    hipCircumference?: FloatNullableFilter<"Measurement"> | number | null
    neckCircumference?: FloatNullableFilter<"Measurement"> | number | null
    bmi?: FloatNullableFilter<"Measurement"> | number | null
    userId?: StringFilter<"Measurement"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MeasurementOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    armCircumference?: SortOrderInput | SortOrder
    legCircumference?: SortOrderInput | SortOrder
    waistCircumference?: SortOrderInput | SortOrder
    chestCircumference?: SortOrderInput | SortOrder
    hipCircumference?: SortOrderInput | SortOrder
    neckCircumference?: SortOrderInput | SortOrder
    bmi?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MeasurementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MeasurementWhereInput | MeasurementWhereInput[]
    OR?: MeasurementWhereInput[]
    NOT?: MeasurementWhereInput | MeasurementWhereInput[]
    date?: DateTimeFilter<"Measurement"> | Date | string
    weight?: FloatNullableFilter<"Measurement"> | number | null
    height?: FloatNullableFilter<"Measurement"> | number | null
    armCircumference?: FloatNullableFilter<"Measurement"> | number | null
    legCircumference?: FloatNullableFilter<"Measurement"> | number | null
    waistCircumference?: FloatNullableFilter<"Measurement"> | number | null
    chestCircumference?: FloatNullableFilter<"Measurement"> | number | null
    hipCircumference?: FloatNullableFilter<"Measurement"> | number | null
    neckCircumference?: FloatNullableFilter<"Measurement"> | number | null
    bmi?: FloatNullableFilter<"Measurement"> | number | null
    userId?: StringFilter<"Measurement"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MeasurementOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    armCircumference?: SortOrderInput | SortOrder
    legCircumference?: SortOrderInput | SortOrder
    waistCircumference?: SortOrderInput | SortOrder
    chestCircumference?: SortOrderInput | SortOrder
    hipCircumference?: SortOrderInput | SortOrder
    neckCircumference?: SortOrderInput | SortOrder
    bmi?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: MeasurementCountOrderByAggregateInput
    _avg?: MeasurementAvgOrderByAggregateInput
    _max?: MeasurementMaxOrderByAggregateInput
    _min?: MeasurementMinOrderByAggregateInput
    _sum?: MeasurementSumOrderByAggregateInput
  }

  export type MeasurementScalarWhereWithAggregatesInput = {
    AND?: MeasurementScalarWhereWithAggregatesInput | MeasurementScalarWhereWithAggregatesInput[]
    OR?: MeasurementScalarWhereWithAggregatesInput[]
    NOT?: MeasurementScalarWhereWithAggregatesInput | MeasurementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Measurement"> | string
    date?: DateTimeWithAggregatesFilter<"Measurement"> | Date | string
    weight?: FloatNullableWithAggregatesFilter<"Measurement"> | number | null
    height?: FloatNullableWithAggregatesFilter<"Measurement"> | number | null
    armCircumference?: FloatNullableWithAggregatesFilter<"Measurement"> | number | null
    legCircumference?: FloatNullableWithAggregatesFilter<"Measurement"> | number | null
    waistCircumference?: FloatNullableWithAggregatesFilter<"Measurement"> | number | null
    chestCircumference?: FloatNullableWithAggregatesFilter<"Measurement"> | number | null
    hipCircumference?: FloatNullableWithAggregatesFilter<"Measurement"> | number | null
    neckCircumference?: FloatNullableWithAggregatesFilter<"Measurement"> | number | null
    bmi?: FloatNullableWithAggregatesFilter<"Measurement"> | number | null
    userId?: StringWithAggregatesFilter<"Measurement"> | string
  }

  export type DiseaseWhereInput = {
    AND?: DiseaseWhereInput | DiseaseWhereInput[]
    OR?: DiseaseWhereInput[]
    NOT?: DiseaseWhereInput | DiseaseWhereInput[]
    id?: StringFilter<"Disease"> | string
    name?: StringFilter<"Disease"> | string
    symptoms?: StringFilter<"Disease"> | string
    onsetDate?: DateTimeFilter<"Disease"> | Date | string
    isPrivate?: BoolFilter<"Disease"> | boolean
    userId?: StringFilter<"Disease"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    medications?: MedicationListRelationFilter
  }

  export type DiseaseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    symptoms?: SortOrder
    onsetDate?: SortOrder
    isPrivate?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    medications?: MedicationOrderByRelationAggregateInput
  }

  export type DiseaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DiseaseWhereInput | DiseaseWhereInput[]
    OR?: DiseaseWhereInput[]
    NOT?: DiseaseWhereInput | DiseaseWhereInput[]
    name?: StringFilter<"Disease"> | string
    symptoms?: StringFilter<"Disease"> | string
    onsetDate?: DateTimeFilter<"Disease"> | Date | string
    isPrivate?: BoolFilter<"Disease"> | boolean
    userId?: StringFilter<"Disease"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    medications?: MedicationListRelationFilter
  }, "id">

  export type DiseaseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    symptoms?: SortOrder
    onsetDate?: SortOrder
    isPrivate?: SortOrder
    userId?: SortOrder
    _count?: DiseaseCountOrderByAggregateInput
    _max?: DiseaseMaxOrderByAggregateInput
    _min?: DiseaseMinOrderByAggregateInput
  }

  export type DiseaseScalarWhereWithAggregatesInput = {
    AND?: DiseaseScalarWhereWithAggregatesInput | DiseaseScalarWhereWithAggregatesInput[]
    OR?: DiseaseScalarWhereWithAggregatesInput[]
    NOT?: DiseaseScalarWhereWithAggregatesInput | DiseaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Disease"> | string
    name?: StringWithAggregatesFilter<"Disease"> | string
    symptoms?: StringWithAggregatesFilter<"Disease"> | string
    onsetDate?: DateTimeWithAggregatesFilter<"Disease"> | Date | string
    isPrivate?: BoolWithAggregatesFilter<"Disease"> | boolean
    userId?: StringWithAggregatesFilter<"Disease"> | string
  }

  export type MedicationWhereInput = {
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    id?: StringFilter<"Medication"> | string
    name?: StringFilter<"Medication"> | string
    dosage?: StringFilter<"Medication"> | string
    reminderTime?: StringNullableFilter<"Medication"> | string | null
    diseaseId?: StringFilter<"Medication"> | string
    disease?: XOR<DiseaseScalarRelationFilter, DiseaseWhereInput>
  }

  export type MedicationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    reminderTime?: SortOrderInput | SortOrder
    diseaseId?: SortOrder
    disease?: DiseaseOrderByWithRelationInput
  }

  export type MedicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    name?: StringFilter<"Medication"> | string
    dosage?: StringFilter<"Medication"> | string
    reminderTime?: StringNullableFilter<"Medication"> | string | null
    diseaseId?: StringFilter<"Medication"> | string
    disease?: XOR<DiseaseScalarRelationFilter, DiseaseWhereInput>
  }, "id">

  export type MedicationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    reminderTime?: SortOrderInput | SortOrder
    diseaseId?: SortOrder
    _count?: MedicationCountOrderByAggregateInput
    _max?: MedicationMaxOrderByAggregateInput
    _min?: MedicationMinOrderByAggregateInput
  }

  export type MedicationScalarWhereWithAggregatesInput = {
    AND?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    OR?: MedicationScalarWhereWithAggregatesInput[]
    NOT?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Medication"> | string
    name?: StringWithAggregatesFilter<"Medication"> | string
    dosage?: StringWithAggregatesFilter<"Medication"> | string
    reminderTime?: StringNullableWithAggregatesFilter<"Medication"> | string | null
    diseaseId?: StringWithAggregatesFilter<"Medication"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    avatar?: string | null
    measurements?: MeasurementCreateNestedManyWithoutUserInput
    diseases?: DiseaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    avatar?: string | null
    measurements?: MeasurementUncheckedCreateNestedManyWithoutUserInput
    diseases?: DiseaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    measurements?: MeasurementUpdateManyWithoutUserNestedInput
    diseases?: DiseaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    measurements?: MeasurementUncheckedUpdateManyWithoutUserNestedInput
    diseases?: DiseaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    avatar?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MeasurementCreateInput = {
    id?: string
    date: Date | string
    weight?: number | null
    height?: number | null
    armCircumference?: number | null
    legCircumference?: number | null
    waistCircumference?: number | null
    chestCircumference?: number | null
    hipCircumference?: number | null
    neckCircumference?: number | null
    bmi?: number | null
    user: UserCreateNestedOneWithoutMeasurementsInput
  }

  export type MeasurementUncheckedCreateInput = {
    id?: string
    date: Date | string
    weight?: number | null
    height?: number | null
    armCircumference?: number | null
    legCircumference?: number | null
    waistCircumference?: number | null
    chestCircumference?: number | null
    hipCircumference?: number | null
    neckCircumference?: number | null
    bmi?: number | null
    userId: string
  }

  export type MeasurementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    armCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    legCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    waistCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    chestCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    hipCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    neckCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutMeasurementsNestedInput
  }

  export type MeasurementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    armCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    legCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    waistCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    chestCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    hipCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    neckCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MeasurementCreateManyInput = {
    id?: string
    date: Date | string
    weight?: number | null
    height?: number | null
    armCircumference?: number | null
    legCircumference?: number | null
    waistCircumference?: number | null
    chestCircumference?: number | null
    hipCircumference?: number | null
    neckCircumference?: number | null
    bmi?: number | null
    userId: string
  }

  export type MeasurementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    armCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    legCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    waistCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    chestCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    hipCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    neckCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MeasurementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    armCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    legCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    waistCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    chestCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    hipCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    neckCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DiseaseCreateInput = {
    id?: string
    name: string
    symptoms: string
    onsetDate: Date | string
    isPrivate?: boolean
    user: UserCreateNestedOneWithoutDiseasesInput
    medications?: MedicationCreateNestedManyWithoutDiseaseInput
  }

  export type DiseaseUncheckedCreateInput = {
    id?: string
    name: string
    symptoms: string
    onsetDate: Date | string
    isPrivate?: boolean
    userId: string
    medications?: MedicationUncheckedCreateNestedManyWithoutDiseaseInput
  }

  export type DiseaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symptoms?: StringFieldUpdateOperationsInput | string
    onsetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutDiseasesNestedInput
    medications?: MedicationUpdateManyWithoutDiseaseNestedInput
  }

  export type DiseaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symptoms?: StringFieldUpdateOperationsInput | string
    onsetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    medications?: MedicationUncheckedUpdateManyWithoutDiseaseNestedInput
  }

  export type DiseaseCreateManyInput = {
    id?: string
    name: string
    symptoms: string
    onsetDate: Date | string
    isPrivate?: boolean
    userId: string
  }

  export type DiseaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symptoms?: StringFieldUpdateOperationsInput | string
    onsetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DiseaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symptoms?: StringFieldUpdateOperationsInput | string
    onsetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MedicationCreateInput = {
    id?: string
    name: string
    dosage: string
    reminderTime?: string | null
    disease: DiseaseCreateNestedOneWithoutMedicationsInput
  }

  export type MedicationUncheckedCreateInput = {
    id?: string
    name: string
    dosage: string
    reminderTime?: string | null
    diseaseId: string
  }

  export type MedicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    reminderTime?: NullableStringFieldUpdateOperationsInput | string | null
    disease?: DiseaseUpdateOneRequiredWithoutMedicationsNestedInput
  }

  export type MedicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    reminderTime?: NullableStringFieldUpdateOperationsInput | string | null
    diseaseId?: StringFieldUpdateOperationsInput | string
  }

  export type MedicationCreateManyInput = {
    id?: string
    name: string
    dosage: string
    reminderTime?: string | null
    diseaseId: string
  }

  export type MedicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    reminderTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    reminderTime?: NullableStringFieldUpdateOperationsInput | string | null
    diseaseId?: StringFieldUpdateOperationsInput | string
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

  export type MeasurementListRelationFilter = {
    every?: MeasurementWhereInput
    some?: MeasurementWhereInput
    none?: MeasurementWhereInput
  }

  export type DiseaseListRelationFilter = {
    every?: DiseaseWhereInput
    some?: DiseaseWhereInput
    none?: DiseaseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MeasurementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiseaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MeasurementCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    armCircumference?: SortOrder
    legCircumference?: SortOrder
    waistCircumference?: SortOrder
    chestCircumference?: SortOrder
    hipCircumference?: SortOrder
    neckCircumference?: SortOrder
    bmi?: SortOrder
    userId?: SortOrder
  }

  export type MeasurementAvgOrderByAggregateInput = {
    weight?: SortOrder
    height?: SortOrder
    armCircumference?: SortOrder
    legCircumference?: SortOrder
    waistCircumference?: SortOrder
    chestCircumference?: SortOrder
    hipCircumference?: SortOrder
    neckCircumference?: SortOrder
    bmi?: SortOrder
  }

  export type MeasurementMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    armCircumference?: SortOrder
    legCircumference?: SortOrder
    waistCircumference?: SortOrder
    chestCircumference?: SortOrder
    hipCircumference?: SortOrder
    neckCircumference?: SortOrder
    bmi?: SortOrder
    userId?: SortOrder
  }

  export type MeasurementMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    armCircumference?: SortOrder
    legCircumference?: SortOrder
    waistCircumference?: SortOrder
    chestCircumference?: SortOrder
    hipCircumference?: SortOrder
    neckCircumference?: SortOrder
    bmi?: SortOrder
    userId?: SortOrder
  }

  export type MeasurementSumOrderByAggregateInput = {
    weight?: SortOrder
    height?: SortOrder
    armCircumference?: SortOrder
    legCircumference?: SortOrder
    waistCircumference?: SortOrder
    chestCircumference?: SortOrder
    hipCircumference?: SortOrder
    neckCircumference?: SortOrder
    bmi?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MedicationListRelationFilter = {
    every?: MedicationWhereInput
    some?: MedicationWhereInput
    none?: MedicationWhereInput
  }

  export type MedicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiseaseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symptoms?: SortOrder
    onsetDate?: SortOrder
    isPrivate?: SortOrder
    userId?: SortOrder
  }

  export type DiseaseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symptoms?: SortOrder
    onsetDate?: SortOrder
    isPrivate?: SortOrder
    userId?: SortOrder
  }

  export type DiseaseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symptoms?: SortOrder
    onsetDate?: SortOrder
    isPrivate?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DiseaseScalarRelationFilter = {
    is?: DiseaseWhereInput
    isNot?: DiseaseWhereInput
  }

  export type MedicationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    reminderTime?: SortOrder
    diseaseId?: SortOrder
  }

  export type MedicationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    reminderTime?: SortOrder
    diseaseId?: SortOrder
  }

  export type MedicationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    reminderTime?: SortOrder
    diseaseId?: SortOrder
  }

  export type MeasurementCreateNestedManyWithoutUserInput = {
    create?: XOR<MeasurementCreateWithoutUserInput, MeasurementUncheckedCreateWithoutUserInput> | MeasurementCreateWithoutUserInput[] | MeasurementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutUserInput | MeasurementCreateOrConnectWithoutUserInput[]
    createMany?: MeasurementCreateManyUserInputEnvelope
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
  }

  export type DiseaseCreateNestedManyWithoutUserInput = {
    create?: XOR<DiseaseCreateWithoutUserInput, DiseaseUncheckedCreateWithoutUserInput> | DiseaseCreateWithoutUserInput[] | DiseaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiseaseCreateOrConnectWithoutUserInput | DiseaseCreateOrConnectWithoutUserInput[]
    createMany?: DiseaseCreateManyUserInputEnvelope
    connect?: DiseaseWhereUniqueInput | DiseaseWhereUniqueInput[]
  }

  export type MeasurementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MeasurementCreateWithoutUserInput, MeasurementUncheckedCreateWithoutUserInput> | MeasurementCreateWithoutUserInput[] | MeasurementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutUserInput | MeasurementCreateOrConnectWithoutUserInput[]
    createMany?: MeasurementCreateManyUserInputEnvelope
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
  }

  export type DiseaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DiseaseCreateWithoutUserInput, DiseaseUncheckedCreateWithoutUserInput> | DiseaseCreateWithoutUserInput[] | DiseaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiseaseCreateOrConnectWithoutUserInput | DiseaseCreateOrConnectWithoutUserInput[]
    createMany?: DiseaseCreateManyUserInputEnvelope
    connect?: DiseaseWhereUniqueInput | DiseaseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MeasurementUpdateManyWithoutUserNestedInput = {
    create?: XOR<MeasurementCreateWithoutUserInput, MeasurementUncheckedCreateWithoutUserInput> | MeasurementCreateWithoutUserInput[] | MeasurementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutUserInput | MeasurementCreateOrConnectWithoutUserInput[]
    upsert?: MeasurementUpsertWithWhereUniqueWithoutUserInput | MeasurementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MeasurementCreateManyUserInputEnvelope
    set?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    disconnect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    delete?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    update?: MeasurementUpdateWithWhereUniqueWithoutUserInput | MeasurementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MeasurementUpdateManyWithWhereWithoutUserInput | MeasurementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
  }

  export type DiseaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<DiseaseCreateWithoutUserInput, DiseaseUncheckedCreateWithoutUserInput> | DiseaseCreateWithoutUserInput[] | DiseaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiseaseCreateOrConnectWithoutUserInput | DiseaseCreateOrConnectWithoutUserInput[]
    upsert?: DiseaseUpsertWithWhereUniqueWithoutUserInput | DiseaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DiseaseCreateManyUserInputEnvelope
    set?: DiseaseWhereUniqueInput | DiseaseWhereUniqueInput[]
    disconnect?: DiseaseWhereUniqueInput | DiseaseWhereUniqueInput[]
    delete?: DiseaseWhereUniqueInput | DiseaseWhereUniqueInput[]
    connect?: DiseaseWhereUniqueInput | DiseaseWhereUniqueInput[]
    update?: DiseaseUpdateWithWhereUniqueWithoutUserInput | DiseaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DiseaseUpdateManyWithWhereWithoutUserInput | DiseaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DiseaseScalarWhereInput | DiseaseScalarWhereInput[]
  }

  export type MeasurementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MeasurementCreateWithoutUserInput, MeasurementUncheckedCreateWithoutUserInput> | MeasurementCreateWithoutUserInput[] | MeasurementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutUserInput | MeasurementCreateOrConnectWithoutUserInput[]
    upsert?: MeasurementUpsertWithWhereUniqueWithoutUserInput | MeasurementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MeasurementCreateManyUserInputEnvelope
    set?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    disconnect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    delete?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    update?: MeasurementUpdateWithWhereUniqueWithoutUserInput | MeasurementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MeasurementUpdateManyWithWhereWithoutUserInput | MeasurementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
  }

  export type DiseaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DiseaseCreateWithoutUserInput, DiseaseUncheckedCreateWithoutUserInput> | DiseaseCreateWithoutUserInput[] | DiseaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiseaseCreateOrConnectWithoutUserInput | DiseaseCreateOrConnectWithoutUserInput[]
    upsert?: DiseaseUpsertWithWhereUniqueWithoutUserInput | DiseaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DiseaseCreateManyUserInputEnvelope
    set?: DiseaseWhereUniqueInput | DiseaseWhereUniqueInput[]
    disconnect?: DiseaseWhereUniqueInput | DiseaseWhereUniqueInput[]
    delete?: DiseaseWhereUniqueInput | DiseaseWhereUniqueInput[]
    connect?: DiseaseWhereUniqueInput | DiseaseWhereUniqueInput[]
    update?: DiseaseUpdateWithWhereUniqueWithoutUserInput | DiseaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DiseaseUpdateManyWithWhereWithoutUserInput | DiseaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DiseaseScalarWhereInput | DiseaseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMeasurementsInput = {
    create?: XOR<UserCreateWithoutMeasurementsInput, UserUncheckedCreateWithoutMeasurementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeasurementsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMeasurementsNestedInput = {
    create?: XOR<UserCreateWithoutMeasurementsInput, UserUncheckedCreateWithoutMeasurementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeasurementsInput
    upsert?: UserUpsertWithoutMeasurementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMeasurementsInput, UserUpdateWithoutMeasurementsInput>, UserUncheckedUpdateWithoutMeasurementsInput>
  }

  export type UserCreateNestedOneWithoutDiseasesInput = {
    create?: XOR<UserCreateWithoutDiseasesInput, UserUncheckedCreateWithoutDiseasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDiseasesInput
    connect?: UserWhereUniqueInput
  }

  export type MedicationCreateNestedManyWithoutDiseaseInput = {
    create?: XOR<MedicationCreateWithoutDiseaseInput, MedicationUncheckedCreateWithoutDiseaseInput> | MedicationCreateWithoutDiseaseInput[] | MedicationUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutDiseaseInput | MedicationCreateOrConnectWithoutDiseaseInput[]
    createMany?: MedicationCreateManyDiseaseInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type MedicationUncheckedCreateNestedManyWithoutDiseaseInput = {
    create?: XOR<MedicationCreateWithoutDiseaseInput, MedicationUncheckedCreateWithoutDiseaseInput> | MedicationCreateWithoutDiseaseInput[] | MedicationUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutDiseaseInput | MedicationCreateOrConnectWithoutDiseaseInput[]
    createMany?: MedicationCreateManyDiseaseInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutDiseasesNestedInput = {
    create?: XOR<UserCreateWithoutDiseasesInput, UserUncheckedCreateWithoutDiseasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDiseasesInput
    upsert?: UserUpsertWithoutDiseasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDiseasesInput, UserUpdateWithoutDiseasesInput>, UserUncheckedUpdateWithoutDiseasesInput>
  }

  export type MedicationUpdateManyWithoutDiseaseNestedInput = {
    create?: XOR<MedicationCreateWithoutDiseaseInput, MedicationUncheckedCreateWithoutDiseaseInput> | MedicationCreateWithoutDiseaseInput[] | MedicationUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutDiseaseInput | MedicationCreateOrConnectWithoutDiseaseInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutDiseaseInput | MedicationUpsertWithWhereUniqueWithoutDiseaseInput[]
    createMany?: MedicationCreateManyDiseaseInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutDiseaseInput | MedicationUpdateWithWhereUniqueWithoutDiseaseInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutDiseaseInput | MedicationUpdateManyWithWhereWithoutDiseaseInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type MedicationUncheckedUpdateManyWithoutDiseaseNestedInput = {
    create?: XOR<MedicationCreateWithoutDiseaseInput, MedicationUncheckedCreateWithoutDiseaseInput> | MedicationCreateWithoutDiseaseInput[] | MedicationUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutDiseaseInput | MedicationCreateOrConnectWithoutDiseaseInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutDiseaseInput | MedicationUpsertWithWhereUniqueWithoutDiseaseInput[]
    createMany?: MedicationCreateManyDiseaseInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutDiseaseInput | MedicationUpdateWithWhereUniqueWithoutDiseaseInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutDiseaseInput | MedicationUpdateManyWithWhereWithoutDiseaseInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type DiseaseCreateNestedOneWithoutMedicationsInput = {
    create?: XOR<DiseaseCreateWithoutMedicationsInput, DiseaseUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: DiseaseCreateOrConnectWithoutMedicationsInput
    connect?: DiseaseWhereUniqueInput
  }

  export type DiseaseUpdateOneRequiredWithoutMedicationsNestedInput = {
    create?: XOR<DiseaseCreateWithoutMedicationsInput, DiseaseUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: DiseaseCreateOrConnectWithoutMedicationsInput
    upsert?: DiseaseUpsertWithoutMedicationsInput
    connect?: DiseaseWhereUniqueInput
    update?: XOR<XOR<DiseaseUpdateToOneWithWhereWithoutMedicationsInput, DiseaseUpdateWithoutMedicationsInput>, DiseaseUncheckedUpdateWithoutMedicationsInput>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MeasurementCreateWithoutUserInput = {
    id?: string
    date: Date | string
    weight?: number | null
    height?: number | null
    armCircumference?: number | null
    legCircumference?: number | null
    waistCircumference?: number | null
    chestCircumference?: number | null
    hipCircumference?: number | null
    neckCircumference?: number | null
    bmi?: number | null
  }

  export type MeasurementUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    weight?: number | null
    height?: number | null
    armCircumference?: number | null
    legCircumference?: number | null
    waistCircumference?: number | null
    chestCircumference?: number | null
    hipCircumference?: number | null
    neckCircumference?: number | null
    bmi?: number | null
  }

  export type MeasurementCreateOrConnectWithoutUserInput = {
    where: MeasurementWhereUniqueInput
    create: XOR<MeasurementCreateWithoutUserInput, MeasurementUncheckedCreateWithoutUserInput>
  }

  export type MeasurementCreateManyUserInputEnvelope = {
    data: MeasurementCreateManyUserInput | MeasurementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DiseaseCreateWithoutUserInput = {
    id?: string
    name: string
    symptoms: string
    onsetDate: Date | string
    isPrivate?: boolean
    medications?: MedicationCreateNestedManyWithoutDiseaseInput
  }

  export type DiseaseUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    symptoms: string
    onsetDate: Date | string
    isPrivate?: boolean
    medications?: MedicationUncheckedCreateNestedManyWithoutDiseaseInput
  }

  export type DiseaseCreateOrConnectWithoutUserInput = {
    where: DiseaseWhereUniqueInput
    create: XOR<DiseaseCreateWithoutUserInput, DiseaseUncheckedCreateWithoutUserInput>
  }

  export type DiseaseCreateManyUserInputEnvelope = {
    data: DiseaseCreateManyUserInput | DiseaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MeasurementUpsertWithWhereUniqueWithoutUserInput = {
    where: MeasurementWhereUniqueInput
    update: XOR<MeasurementUpdateWithoutUserInput, MeasurementUncheckedUpdateWithoutUserInput>
    create: XOR<MeasurementCreateWithoutUserInput, MeasurementUncheckedCreateWithoutUserInput>
  }

  export type MeasurementUpdateWithWhereUniqueWithoutUserInput = {
    where: MeasurementWhereUniqueInput
    data: XOR<MeasurementUpdateWithoutUserInput, MeasurementUncheckedUpdateWithoutUserInput>
  }

  export type MeasurementUpdateManyWithWhereWithoutUserInput = {
    where: MeasurementScalarWhereInput
    data: XOR<MeasurementUpdateManyMutationInput, MeasurementUncheckedUpdateManyWithoutUserInput>
  }

  export type MeasurementScalarWhereInput = {
    AND?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
    OR?: MeasurementScalarWhereInput[]
    NOT?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
    id?: StringFilter<"Measurement"> | string
    date?: DateTimeFilter<"Measurement"> | Date | string
    weight?: FloatNullableFilter<"Measurement"> | number | null
    height?: FloatNullableFilter<"Measurement"> | number | null
    armCircumference?: FloatNullableFilter<"Measurement"> | number | null
    legCircumference?: FloatNullableFilter<"Measurement"> | number | null
    waistCircumference?: FloatNullableFilter<"Measurement"> | number | null
    chestCircumference?: FloatNullableFilter<"Measurement"> | number | null
    hipCircumference?: FloatNullableFilter<"Measurement"> | number | null
    neckCircumference?: FloatNullableFilter<"Measurement"> | number | null
    bmi?: FloatNullableFilter<"Measurement"> | number | null
    userId?: StringFilter<"Measurement"> | string
  }

  export type DiseaseUpsertWithWhereUniqueWithoutUserInput = {
    where: DiseaseWhereUniqueInput
    update: XOR<DiseaseUpdateWithoutUserInput, DiseaseUncheckedUpdateWithoutUserInput>
    create: XOR<DiseaseCreateWithoutUserInput, DiseaseUncheckedCreateWithoutUserInput>
  }

  export type DiseaseUpdateWithWhereUniqueWithoutUserInput = {
    where: DiseaseWhereUniqueInput
    data: XOR<DiseaseUpdateWithoutUserInput, DiseaseUncheckedUpdateWithoutUserInput>
  }

  export type DiseaseUpdateManyWithWhereWithoutUserInput = {
    where: DiseaseScalarWhereInput
    data: XOR<DiseaseUpdateManyMutationInput, DiseaseUncheckedUpdateManyWithoutUserInput>
  }

  export type DiseaseScalarWhereInput = {
    AND?: DiseaseScalarWhereInput | DiseaseScalarWhereInput[]
    OR?: DiseaseScalarWhereInput[]
    NOT?: DiseaseScalarWhereInput | DiseaseScalarWhereInput[]
    id?: StringFilter<"Disease"> | string
    name?: StringFilter<"Disease"> | string
    symptoms?: StringFilter<"Disease"> | string
    onsetDate?: DateTimeFilter<"Disease"> | Date | string
    isPrivate?: BoolFilter<"Disease"> | boolean
    userId?: StringFilter<"Disease"> | string
  }

  export type UserCreateWithoutMeasurementsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatar?: string | null
    diseases?: DiseaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMeasurementsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatar?: string | null
    diseases?: DiseaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMeasurementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMeasurementsInput, UserUncheckedCreateWithoutMeasurementsInput>
  }

  export type UserUpsertWithoutMeasurementsInput = {
    update: XOR<UserUpdateWithoutMeasurementsInput, UserUncheckedUpdateWithoutMeasurementsInput>
    create: XOR<UserCreateWithoutMeasurementsInput, UserUncheckedCreateWithoutMeasurementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMeasurementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMeasurementsInput, UserUncheckedUpdateWithoutMeasurementsInput>
  }

  export type UserUpdateWithoutMeasurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    diseases?: DiseaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMeasurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    diseases?: DiseaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDiseasesInput = {
    id?: string
    name: string
    email: string
    password: string
    avatar?: string | null
    measurements?: MeasurementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDiseasesInput = {
    id?: string
    name: string
    email: string
    password: string
    avatar?: string | null
    measurements?: MeasurementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDiseasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDiseasesInput, UserUncheckedCreateWithoutDiseasesInput>
  }

  export type MedicationCreateWithoutDiseaseInput = {
    id?: string
    name: string
    dosage: string
    reminderTime?: string | null
  }

  export type MedicationUncheckedCreateWithoutDiseaseInput = {
    id?: string
    name: string
    dosage: string
    reminderTime?: string | null
  }

  export type MedicationCreateOrConnectWithoutDiseaseInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutDiseaseInput, MedicationUncheckedCreateWithoutDiseaseInput>
  }

  export type MedicationCreateManyDiseaseInputEnvelope = {
    data: MedicationCreateManyDiseaseInput | MedicationCreateManyDiseaseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDiseasesInput = {
    update: XOR<UserUpdateWithoutDiseasesInput, UserUncheckedUpdateWithoutDiseasesInput>
    create: XOR<UserCreateWithoutDiseasesInput, UserUncheckedCreateWithoutDiseasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDiseasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDiseasesInput, UserUncheckedUpdateWithoutDiseasesInput>
  }

  export type UserUpdateWithoutDiseasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    measurements?: MeasurementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDiseasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    measurements?: MeasurementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MedicationUpsertWithWhereUniqueWithoutDiseaseInput = {
    where: MedicationWhereUniqueInput
    update: XOR<MedicationUpdateWithoutDiseaseInput, MedicationUncheckedUpdateWithoutDiseaseInput>
    create: XOR<MedicationCreateWithoutDiseaseInput, MedicationUncheckedCreateWithoutDiseaseInput>
  }

  export type MedicationUpdateWithWhereUniqueWithoutDiseaseInput = {
    where: MedicationWhereUniqueInput
    data: XOR<MedicationUpdateWithoutDiseaseInput, MedicationUncheckedUpdateWithoutDiseaseInput>
  }

  export type MedicationUpdateManyWithWhereWithoutDiseaseInput = {
    where: MedicationScalarWhereInput
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyWithoutDiseaseInput>
  }

  export type MedicationScalarWhereInput = {
    AND?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
    OR?: MedicationScalarWhereInput[]
    NOT?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
    id?: StringFilter<"Medication"> | string
    name?: StringFilter<"Medication"> | string
    dosage?: StringFilter<"Medication"> | string
    reminderTime?: StringNullableFilter<"Medication"> | string | null
    diseaseId?: StringFilter<"Medication"> | string
  }

  export type DiseaseCreateWithoutMedicationsInput = {
    id?: string
    name: string
    symptoms: string
    onsetDate: Date | string
    isPrivate?: boolean
    user: UserCreateNestedOneWithoutDiseasesInput
  }

  export type DiseaseUncheckedCreateWithoutMedicationsInput = {
    id?: string
    name: string
    symptoms: string
    onsetDate: Date | string
    isPrivate?: boolean
    userId: string
  }

  export type DiseaseCreateOrConnectWithoutMedicationsInput = {
    where: DiseaseWhereUniqueInput
    create: XOR<DiseaseCreateWithoutMedicationsInput, DiseaseUncheckedCreateWithoutMedicationsInput>
  }

  export type DiseaseUpsertWithoutMedicationsInput = {
    update: XOR<DiseaseUpdateWithoutMedicationsInput, DiseaseUncheckedUpdateWithoutMedicationsInput>
    create: XOR<DiseaseCreateWithoutMedicationsInput, DiseaseUncheckedCreateWithoutMedicationsInput>
    where?: DiseaseWhereInput
  }

  export type DiseaseUpdateToOneWithWhereWithoutMedicationsInput = {
    where?: DiseaseWhereInput
    data: XOR<DiseaseUpdateWithoutMedicationsInput, DiseaseUncheckedUpdateWithoutMedicationsInput>
  }

  export type DiseaseUpdateWithoutMedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symptoms?: StringFieldUpdateOperationsInput | string
    onsetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutDiseasesNestedInput
  }

  export type DiseaseUncheckedUpdateWithoutMedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symptoms?: StringFieldUpdateOperationsInput | string
    onsetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MeasurementCreateManyUserInput = {
    id?: string
    date: Date | string
    weight?: number | null
    height?: number | null
    armCircumference?: number | null
    legCircumference?: number | null
    waistCircumference?: number | null
    chestCircumference?: number | null
    hipCircumference?: number | null
    neckCircumference?: number | null
    bmi?: number | null
  }

  export type DiseaseCreateManyUserInput = {
    id?: string
    name: string
    symptoms: string
    onsetDate: Date | string
    isPrivate?: boolean
  }

  export type MeasurementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    armCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    legCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    waistCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    chestCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    hipCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    neckCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MeasurementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    armCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    legCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    waistCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    chestCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    hipCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    neckCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MeasurementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    armCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    legCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    waistCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    chestCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    hipCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    neckCircumference?: NullableFloatFieldUpdateOperationsInput | number | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type DiseaseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symptoms?: StringFieldUpdateOperationsInput | string
    onsetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    medications?: MedicationUpdateManyWithoutDiseaseNestedInput
  }

  export type DiseaseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symptoms?: StringFieldUpdateOperationsInput | string
    onsetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    medications?: MedicationUncheckedUpdateManyWithoutDiseaseNestedInput
  }

  export type DiseaseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symptoms?: StringFieldUpdateOperationsInput | string
    onsetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MedicationCreateManyDiseaseInput = {
    id?: string
    name: string
    dosage: string
    reminderTime?: string | null
  }

  export type MedicationUpdateWithoutDiseaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    reminderTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicationUncheckedUpdateWithoutDiseaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    reminderTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicationUncheckedUpdateManyWithoutDiseaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    reminderTime?: NullableStringFieldUpdateOperationsInput | string | null
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