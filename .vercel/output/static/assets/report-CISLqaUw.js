import { n as e } from "./chunk-Bh1tDfsg.js";
import { G as t, o as n } from "./useStore-75krDqnZ.js";
import { a as r, i, n as a, s as o, t as s } from "./button-DASjVavO.js";
import { a as c, f as l, n as u, o as d, s as f } from "./Logo-B79n9_zK.js";
import { t as p } from "./useMutation-BNzYlUKz.js";
import { t as m } from "./loader-circle-CHqB8Jlp.js";
import { t as h } from "./shield-check-DYzUTOe_.js";
import {
  F as g,
  _,
  a as v,
  c as y,
  d as b,
  f as x,
  g as S,
  h as C,
  l as w,
  m as T,
  o as E,
  p as D,
  s as O,
  u as k,
  v as A,
  w as j,
} from "./index-B9tAZozu.js";
import { t as M } from "./input-nIY2wL7O.js";
import { t as N } from "./label-CAs18j5_.js";
import { t as ee } from "./textarea-Dy7XALEH.js";
var te = d(`check`, [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]]),
  ne = d(`chevron-down`, [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]]),
  re = d(`chevron-up`, [[`path`, { d: `m18 15-6-6-6 6`, key: `153udz` }]]),
  P;
(function (e) {
  e.assertEqual = (e) => {};
  function t(e) {}
  e.assertIs = t;
  function n(e) {
    throw Error();
  }
  ((e.assertNever = n),
    (e.arrayToEnum = (e) => {
      let t = {};
      for (let n of e) t[n] = n;
      return t;
    }),
    (e.getValidEnumValues = (t) => {
      let n = e.objectKeys(t).filter((e) => typeof t[t[e]] != `number`),
        r = {};
      for (let e of n) r[e] = t[e];
      return e.objectValues(r);
    }),
    (e.objectValues = (t) =>
      e.objectKeys(t).map(function (e) {
        return t[e];
      })),
    (e.objectKeys =
      typeof Object.keys == `function`
        ? (e) => Object.keys(e)
        : (e) => {
            let t = [];
            for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t;
          }),
    (e.find = (e, t) => {
      for (let n of e) if (t(n)) return n;
    }),
    (e.isInteger =
      typeof Number.isInteger == `function`
        ? (e) => Number.isInteger(e)
        : (e) => typeof e == `number` && Number.isFinite(e) && Math.floor(e) === e));
  function r(e, t = ` | `) {
    return e.map((e) => (typeof e == `string` ? `'${e}'` : e)).join(t);
  }
  ((e.joinValues = r),
    (e.jsonStringifyReplacer = (e, t) => (typeof t == `bigint` ? t.toString() : t)));
})((P ||= {}));
var ie;
(function (e) {
  e.mergeShapes = (e, t) => ({ ...e, ...t });
})((ie ||= {}));
var F = P.arrayToEnum([
    `string`,
    `nan`,
    `number`,
    `integer`,
    `float`,
    `boolean`,
    `date`,
    `bigint`,
    `symbol`,
    `function`,
    `undefined`,
    `null`,
    `array`,
    `object`,
    `unknown`,
    `promise`,
    `void`,
    `never`,
    `map`,
    `set`,
  ]),
  I = (e) => {
    switch (typeof e) {
      case `undefined`:
        return F.undefined;
      case `string`:
        return F.string;
      case `number`:
        return Number.isNaN(e) ? F.nan : F.number;
      case `boolean`:
        return F.boolean;
      case `function`:
        return F.function;
      case `bigint`:
        return F.bigint;
      case `symbol`:
        return F.symbol;
      case `object`:
        return Array.isArray(e)
          ? F.array
          : e === null
            ? F.null
            : e.then && typeof e.then == `function` && e.catch && typeof e.catch == `function`
              ? F.promise
              : typeof Map < `u` && e instanceof Map
                ? F.map
                : typeof Set < `u` && e instanceof Set
                  ? F.set
                  : typeof Date < `u` && e instanceof Date
                    ? F.date
                    : F.object;
      default:
        return F.unknown;
    }
  },
  L = P.arrayToEnum([
    `invalid_type`,
    `invalid_literal`,
    `custom`,
    `invalid_union`,
    `invalid_union_discriminator`,
    `invalid_enum_value`,
    `unrecognized_keys`,
    `invalid_arguments`,
    `invalid_return_type`,
    `invalid_date`,
    `invalid_string`,
    `too_small`,
    `too_big`,
    `invalid_intersection_types`,
    `not_multiple_of`,
    `not_finite`,
  ]),
  R = class e extends Error {
    get errors() {
      return this.issues;
    }
    constructor(e) {
      (super(),
        (this.issues = []),
        (this.addIssue = (e) => {
          this.issues = [...this.issues, e];
        }),
        (this.addIssues = (e = []) => {
          this.issues = [...this.issues, ...e];
        }));
      let t = new.target.prototype;
      (Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : (this.__proto__ = t),
        (this.name = `ZodError`),
        (this.issues = e));
    }
    format(e) {
      let t =
          e ||
          function (e) {
            return e.message;
          },
        n = { _errors: [] },
        r = (e) => {
          for (let i of e.issues)
            if (i.code === `invalid_union`) i.unionErrors.map(r);
            else if (i.code === `invalid_return_type`) r(i.returnTypeError);
            else if (i.code === `invalid_arguments`) r(i.argumentsError);
            else if (i.path.length === 0) n._errors.push(t(i));
            else {
              let e = n,
                r = 0;
              for (; r < i.path.length; ) {
                let n = i.path[r];
                (r === i.path.length - 1
                  ? ((e[n] = e[n] || { _errors: [] }), e[n]._errors.push(t(i)))
                  : (e[n] = e[n] || { _errors: [] }),
                  (e = e[n]),
                  r++);
              }
            }
        };
      return (r(this), n);
    }
    static assert(t) {
      if (!(t instanceof e)) throw Error(`Not a ZodError: ${t}`);
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, P.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(e = (e) => e.message) {
      let t = {},
        n = [];
      for (let r of this.issues)
        if (r.path.length > 0) {
          let n = r.path[0];
          ((t[n] = t[n] || []), t[n].push(e(r)));
        } else n.push(e(r));
      return { formErrors: n, fieldErrors: t };
    }
    get formErrors() {
      return this.flatten();
    }
  };
R.create = (e) => new R(e);
var ae = (e, t) => {
    let n;
    switch (e.code) {
      case L.invalid_type:
        n =
          e.received === F.undefined
            ? `Required`
            : `Expected ${e.expected}, received ${e.received}`;
        break;
      case L.invalid_literal:
        n = `Invalid literal value, expected ${JSON.stringify(e.expected, P.jsonStringifyReplacer)}`;
        break;
      case L.unrecognized_keys:
        n = `Unrecognized key(s) in object: ${P.joinValues(e.keys, `, `)}`;
        break;
      case L.invalid_union:
        n = `Invalid input`;
        break;
      case L.invalid_union_discriminator:
        n = `Invalid discriminator value. Expected ${P.joinValues(e.options)}`;
        break;
      case L.invalid_enum_value:
        n = `Invalid enum value. Expected ${P.joinValues(e.options)}, received '${e.received}'`;
        break;
      case L.invalid_arguments:
        n = `Invalid function arguments`;
        break;
      case L.invalid_return_type:
        n = `Invalid function return type`;
        break;
      case L.invalid_date:
        n = `Invalid date`;
        break;
      case L.invalid_string:
        typeof e.validation == `object`
          ? `includes` in e.validation
            ? ((n = `Invalid input: must include "${e.validation.includes}"`),
              typeof e.validation.position == `number` &&
                (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
            : `startsWith` in e.validation
              ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
              : `endsWith` in e.validation
                ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
                : P.assertNever(e.validation)
          : (n = e.validation === `regex` ? `Invalid` : `Invalid ${e.validation}`);
        break;
      case L.too_small:
        n =
          e.type === `array`
            ? `Array must contain ${e.exact ? `exactly` : e.inclusive ? `at least` : `more than`} ${e.minimum} element(s)`
            : e.type === `string`
              ? `String must contain ${e.exact ? `exactly` : e.inclusive ? `at least` : `over`} ${e.minimum} character(s)`
              : e.type === `number` || e.type === `bigint`
                ? `Number must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${e.minimum}`
                : e.type === `date`
                  ? `Date must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(e.minimum))}`
                  : `Invalid input`;
        break;
      case L.too_big:
        n =
          e.type === `array`
            ? `Array must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `less than`} ${e.maximum} element(s)`
            : e.type === `string`
              ? `String must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `under`} ${e.maximum} character(s)`
              : e.type === `number`
                ? `Number must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}`
                : e.type === `bigint`
                  ? `BigInt must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}`
                  : e.type === `date`
                    ? `Date must be ${e.exact ? `exactly` : e.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(e.maximum))}`
                    : `Invalid input`;
        break;
      case L.custom:
        n = `Invalid input`;
        break;
      case L.invalid_intersection_types:
        n = `Intersection results could not be merged`;
        break;
      case L.not_multiple_of:
        n = `Number must be a multiple of ${e.multipleOf}`;
        break;
      case L.not_finite:
        n = `Number must be finite`;
        break;
      default:
        ((n = t.defaultError), P.assertNever(e));
    }
    return { message: n };
  },
  oe = ae;
function se() {
  return oe;
}
var ce = (e) => {
  let { data: t, path: n, errorMaps: r, issueData: i } = e,
    a = [...n, ...(i.path || [])],
    o = { ...i, path: a };
  if (i.message !== void 0) return { ...i, path: a, message: i.message };
  let s = ``,
    c = r
      .filter((e) => !!e)
      .slice()
      .reverse();
  for (let e of c) s = e(o, { data: t, defaultError: s }).message;
  return { ...i, path: a, message: s };
};
function z(e, t) {
  let n = se(),
    r = ce({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, n, n === ae ? void 0 : ae].filter(
        (e) => !!e,
      ),
    });
  e.common.issues.push(r);
}
var B = class e {
    constructor() {
      this.value = `valid`;
    }
    dirty() {
      this.value === `valid` && (this.value = `dirty`);
    }
    abort() {
      this.value !== `aborted` && (this.value = `aborted`);
    }
    static mergeArray(e, t) {
      let n = [];
      for (let r of t) {
        if (r.status === `aborted`) return V;
        (r.status === `dirty` && e.dirty(), n.push(r.value));
      }
      return { status: e.value, value: n };
    }
    static async mergeObjectAsync(t, n) {
      let r = [];
      for (let e of n) {
        let t = await e.key,
          n = await e.value;
        r.push({ key: t, value: n });
      }
      return e.mergeObjectSync(t, r);
    }
    static mergeObjectSync(e, t) {
      let n = {};
      for (let r of t) {
        let { key: t, value: i } = r;
        if (t.status === `aborted` || i.status === `aborted`) return V;
        (t.status === `dirty` && e.dirty(),
          i.status === `dirty` && e.dirty(),
          t.value !== `__proto__` && (i.value !== void 0 || r.alwaysSet) && (n[t.value] = i.value));
      }
      return { status: e.value, value: n };
    }
  },
  V = Object.freeze({ status: `aborted` }),
  le = (e) => ({ status: `dirty`, value: e }),
  H = (e) => ({ status: `valid`, value: e }),
  ue = (e) => e.status === `aborted`,
  de = (e) => e.status === `dirty`,
  fe = (e) => e.status === `valid`,
  pe = (e) => typeof Promise < `u` && e instanceof Promise,
  U;
(function (e) {
  ((e.errToObj = (e) => (typeof e == `string` ? { message: e } : e || {})),
    (e.toString = (e) => (typeof e == `string` ? e : e?.message)));
})((U ||= {}));
var me = class {
    constructor(e, t, n, r) {
      ((this._cachedPath = []),
        (this.parent = e),
        (this.data = t),
        (this._path = n),
        (this._key = r));
    }
    get path() {
      return (
        this._cachedPath.length ||
          (Array.isArray(this._key)
            ? this._cachedPath.push(...this._path, ...this._key)
            : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
      );
    }
  },
  he = (e, t) => {
    if (fe(t)) return { success: !0, data: t.value };
    if (!e.common.issues.length) throw Error(`Validation failed but no issues detected.`);
    return {
      success: !1,
      get error() {
        if (this._error) return this._error;
        let t = new R(e.common.issues);
        return ((this._error = t), this._error);
      },
    };
  };
function W(e) {
  if (!e) return {};
  let { errorMap: t, invalid_type_error: n, required_error: r, description: i } = e;
  if (t && (n || r))
    throw Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return t
    ? { errorMap: t, description: i }
    : {
        errorMap: (t, i) => {
          let { message: a } = e;
          return t.code === `invalid_enum_value`
            ? { message: a ?? i.defaultError }
            : i.data === void 0
              ? { message: a ?? r ?? i.defaultError }
              : t.code === `invalid_type`
                ? { message: a ?? n ?? i.defaultError }
                : { message: i.defaultError };
        },
        description: i,
      };
}
var G = class {
    get description() {
      return this._def.description;
    }
    _getType(e) {
      return I(e.data);
    }
    _getOrReturnCtx(e, t) {
      return (
        t || {
          common: e.parent.common,
          data: e.data,
          parsedType: I(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        }
      );
    }
    _processInputParams(e) {
      return {
        status: new B(),
        ctx: {
          common: e.parent.common,
          data: e.data,
          parsedType: I(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        },
      };
    }
    _parseSync(e) {
      let t = this._parse(e);
      if (pe(t)) throw Error(`Synchronous parse encountered promise.`);
      return t;
    }
    _parseAsync(e) {
      let t = this._parse(e);
      return Promise.resolve(t);
    }
    parse(e, t) {
      let n = this.safeParse(e, t);
      if (n.success) return n.data;
      throw n.error;
    }
    safeParse(e, t) {
      let n = {
        common: { issues: [], async: t?.async ?? !1, contextualErrorMap: t?.errorMap },
        path: t?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: I(e),
      };
      return he(n, this._parseSync({ data: e, path: n.path, parent: n }));
    }
    "~validate"(e) {
      let t = {
        common: { issues: [], async: !!this[`~standard`].async },
        path: [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: I(e),
      };
      if (!this[`~standard`].async)
        try {
          let n = this._parseSync({ data: e, path: [], parent: t });
          return fe(n) ? { value: n.value } : { issues: t.common.issues };
        } catch (e) {
          (e?.message?.toLowerCase()?.includes(`encountered`) && (this[`~standard`].async = !0),
            (t.common = { issues: [], async: !0 }));
        }
      return this._parseAsync({ data: e, path: [], parent: t }).then((e) =>
        fe(e) ? { value: e.value } : { issues: t.common.issues },
      );
    }
    async parseAsync(e, t) {
      let n = await this.safeParseAsync(e, t);
      if (n.success) return n.data;
      throw n.error;
    }
    async safeParseAsync(e, t) {
      let n = {
          common: { issues: [], contextualErrorMap: t?.errorMap, async: !0 },
          path: t?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: I(e),
        },
        r = this._parse({ data: e, path: n.path, parent: n });
      return he(n, await (pe(r) ? r : Promise.resolve(r)));
    }
    refine(e, t) {
      let n = (e) =>
        typeof t == `string` || t === void 0 ? { message: t } : typeof t == `function` ? t(e) : t;
      return this._refinement((t, r) => {
        let i = e(t),
          a = () => r.addIssue({ code: L.custom, ...n(t) });
        return typeof Promise < `u` && i instanceof Promise
          ? i.then((e) => (e ? !0 : (a(), !1)))
          : i
            ? !0
            : (a(), !1);
      });
    }
    refinement(e, t) {
      return this._refinement((n, r) =>
        e(n) ? !0 : (r.addIssue(typeof t == `function` ? t(n, r) : t), !1),
      );
    }
    _refinement(e) {
      return new _t({
        schema: this,
        typeName: q.ZodEffects,
        effect: { type: `refinement`, refinement: e },
      });
    }
    superRefine(e) {
      return this._refinement(e);
    }
    constructor(e) {
      ((this.spa = this.safeParseAsync),
        (this._def = e),
        (this.parse = this.parse.bind(this)),
        (this.safeParse = this.safeParse.bind(this)),
        (this.parseAsync = this.parseAsync.bind(this)),
        (this.safeParseAsync = this.safeParseAsync.bind(this)),
        (this.spa = this.spa.bind(this)),
        (this.refine = this.refine.bind(this)),
        (this.refinement = this.refinement.bind(this)),
        (this.superRefine = this.superRefine.bind(this)),
        (this.optional = this.optional.bind(this)),
        (this.nullable = this.nullable.bind(this)),
        (this.nullish = this.nullish.bind(this)),
        (this.array = this.array.bind(this)),
        (this.promise = this.promise.bind(this)),
        (this.or = this.or.bind(this)),
        (this.and = this.and.bind(this)),
        (this.transform = this.transform.bind(this)),
        (this.brand = this.brand.bind(this)),
        (this.default = this.default.bind(this)),
        (this.catch = this.catch.bind(this)),
        (this.describe = this.describe.bind(this)),
        (this.pipe = this.pipe.bind(this)),
        (this.readonly = this.readonly.bind(this)),
        (this.isNullable = this.isNullable.bind(this)),
        (this.isOptional = this.isOptional.bind(this)),
        (this[`~standard`] = { version: 1, vendor: `zod`, validate: (e) => this[`~validate`](e) }));
    }
    optional() {
      return vt.create(this, this._def);
    }
    nullable() {
      return yt.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return $e.create(this);
    }
    promise() {
      return gt.create(this, this._def);
    }
    or(e) {
      return tt.create([this, e], this._def);
    }
    and(e) {
      return at.create(this, e, this._def);
    }
    transform(e) {
      return new _t({
        ...W(this._def),
        schema: this,
        typeName: q.ZodEffects,
        effect: { type: `transform`, transform: e },
      });
    }
    default(e) {
      let t = typeof e == `function` ? e : () => e;
      return new bt({ ...W(this._def), innerType: this, defaultValue: t, typeName: q.ZodDefault });
    }
    brand() {
      return new Ct({ typeName: q.ZodBranded, type: this, ...W(this._def) });
    }
    catch(e) {
      let t = typeof e == `function` ? e : () => e;
      return new xt({ ...W(this._def), innerType: this, catchValue: t, typeName: q.ZodCatch });
    }
    describe(e) {
      let t = this.constructor;
      return new t({ ...this._def, description: e });
    }
    pipe(e) {
      return wt.create(this, e);
    }
    readonly() {
      return Tt.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  },
  ge = /^c[^\s-]{8,}$/i,
  _e = /^[0-9a-z]+$/,
  ve = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  ye = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  be = /^[a-z0-9_-]{21}$/i,
  xe = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  Se =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Ce = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  we = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`,
  Te,
  Ee =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  De =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  Oe =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  ke =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  Ae = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  je = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  Me = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`,
  Ne = RegExp(`^${Me}$`);
function Pe(e) {
  let t = `[0-5]\\d`;
  e.precision ? (t = `${t}\\.\\d{${e.precision}}`) : (e.precision ?? (t = `${t}(\\.\\d+)?`));
  let n = e.precision ? `+` : `?`;
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function Fe(e) {
  return RegExp(`^${Pe(e)}$`);
}
function Ie(e) {
  let t = `${Me}T${Pe(e)}`,
    n = [];
  return (
    n.push(e.local ? `Z?` : `Z`),
    e.offset && n.push(`([+-]\\d{2}:?\\d{2})`),
    (t = `${t}(${n.join(`|`)})`),
    RegExp(`^${t}$`)
  );
}
function Le(e, t) {
  return !!(((t === `v4` || !t) && Ee.test(e)) || ((t === `v6` || !t) && Oe.test(e)));
}
function Re(e, t) {
  if (!xe.test(e)) return !1;
  try {
    let [n] = e.split(`.`);
    if (!n) return !1;
    let r = n
        .replace(/-/g, `+`)
        .replace(/_/g, `/`)
        .padEnd(n.length + ((4 - (n.length % 4)) % 4), `=`),
      i = JSON.parse(atob(r));
    return !(
      typeof i != `object` ||
      !i ||
      (`typ` in i && i?.typ !== `JWT`) ||
      !i.alg ||
      (t && i.alg !== t)
    );
  } catch {
    return !1;
  }
}
function ze(e, t) {
  return !!(((t === `v4` || !t) && De.test(e)) || ((t === `v6` || !t) && ke.test(e)));
}
var Be = class e extends G {
  _parse(e) {
    if ((this._def.coerce && (e.data = String(e.data)), this._getType(e) !== F.string)) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { code: L.invalid_type, expected: F.string, received: t.parsedType }), V);
    }
    let t = new B(),
      n;
    for (let r of this._def.checks)
      if (r.kind === `min`)
        e.data.length < r.value &&
          ((n = this._getOrReturnCtx(e, n)),
          z(n, {
            code: L.too_small,
            minimum: r.value,
            type: `string`,
            inclusive: !0,
            exact: !1,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `max`)
        e.data.length > r.value &&
          ((n = this._getOrReturnCtx(e, n)),
          z(n, {
            code: L.too_big,
            maximum: r.value,
            type: `string`,
            inclusive: !0,
            exact: !1,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `length`) {
        let i = e.data.length > r.value,
          a = e.data.length < r.value;
        (i || a) &&
          ((n = this._getOrReturnCtx(e, n)),
          i
            ? z(n, {
                code: L.too_big,
                maximum: r.value,
                type: `string`,
                inclusive: !0,
                exact: !0,
                message: r.message,
              })
            : a &&
              z(n, {
                code: L.too_small,
                minimum: r.value,
                type: `string`,
                inclusive: !0,
                exact: !0,
                message: r.message,
              }),
          t.dirty());
      } else if (r.kind === `email`)
        Ce.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          z(n, { validation: `email`, code: L.invalid_string, message: r.message }),
          t.dirty());
      else if (r.kind === `emoji`)
        ((Te ||= new RegExp(we, `u`)),
          Te.test(e.data) ||
            ((n = this._getOrReturnCtx(e, n)),
            z(n, { validation: `emoji`, code: L.invalid_string, message: r.message }),
            t.dirty()));
      else if (r.kind === `uuid`)
        ye.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          z(n, { validation: `uuid`, code: L.invalid_string, message: r.message }),
          t.dirty());
      else if (r.kind === `nanoid`)
        be.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          z(n, { validation: `nanoid`, code: L.invalid_string, message: r.message }),
          t.dirty());
      else if (r.kind === `cuid`)
        ge.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          z(n, { validation: `cuid`, code: L.invalid_string, message: r.message }),
          t.dirty());
      else if (r.kind === `cuid2`)
        _e.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          z(n, { validation: `cuid2`, code: L.invalid_string, message: r.message }),
          t.dirty());
      else if (r.kind === `ulid`)
        ve.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          z(n, { validation: `ulid`, code: L.invalid_string, message: r.message }),
          t.dirty());
      else if (r.kind === `url`)
        try {
          new URL(e.data);
        } catch {
          ((n = this._getOrReturnCtx(e, n)),
            z(n, { validation: `url`, code: L.invalid_string, message: r.message }),
            t.dirty());
        }
      else
        r.kind === `regex`
          ? ((r.regex.lastIndex = 0),
            r.regex.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              z(n, { validation: `regex`, code: L.invalid_string, message: r.message }),
              t.dirty()))
          : r.kind === `trim`
            ? (e.data = e.data.trim())
            : r.kind === `includes`
              ? e.data.includes(r.value, r.position) ||
                ((n = this._getOrReturnCtx(e, n)),
                z(n, {
                  code: L.invalid_string,
                  validation: { includes: r.value, position: r.position },
                  message: r.message,
                }),
                t.dirty())
              : r.kind === `toLowerCase`
                ? (e.data = e.data.toLowerCase())
                : r.kind === `toUpperCase`
                  ? (e.data = e.data.toUpperCase())
                  : r.kind === `startsWith`
                    ? e.data.startsWith(r.value) ||
                      ((n = this._getOrReturnCtx(e, n)),
                      z(n, {
                        code: L.invalid_string,
                        validation: { startsWith: r.value },
                        message: r.message,
                      }),
                      t.dirty())
                    : r.kind === `endsWith`
                      ? e.data.endsWith(r.value) ||
                        ((n = this._getOrReturnCtx(e, n)),
                        z(n, {
                          code: L.invalid_string,
                          validation: { endsWith: r.value },
                          message: r.message,
                        }),
                        t.dirty())
                      : r.kind === `datetime`
                        ? Ie(r).test(e.data) ||
                          ((n = this._getOrReturnCtx(e, n)),
                          z(n, {
                            code: L.invalid_string,
                            validation: `datetime`,
                            message: r.message,
                          }),
                          t.dirty())
                        : r.kind === `date`
                          ? Ne.test(e.data) ||
                            ((n = this._getOrReturnCtx(e, n)),
                            z(n, {
                              code: L.invalid_string,
                              validation: `date`,
                              message: r.message,
                            }),
                            t.dirty())
                          : r.kind === `time`
                            ? Fe(r).test(e.data) ||
                              ((n = this._getOrReturnCtx(e, n)),
                              z(n, {
                                code: L.invalid_string,
                                validation: `time`,
                                message: r.message,
                              }),
                              t.dirty())
                            : r.kind === `duration`
                              ? Se.test(e.data) ||
                                ((n = this._getOrReturnCtx(e, n)),
                                z(n, {
                                  validation: `duration`,
                                  code: L.invalid_string,
                                  message: r.message,
                                }),
                                t.dirty())
                              : r.kind === `ip`
                                ? Le(e.data, r.version) ||
                                  ((n = this._getOrReturnCtx(e, n)),
                                  z(n, {
                                    validation: `ip`,
                                    code: L.invalid_string,
                                    message: r.message,
                                  }),
                                  t.dirty())
                                : r.kind === `jwt`
                                  ? Re(e.data, r.alg) ||
                                    ((n = this._getOrReturnCtx(e, n)),
                                    z(n, {
                                      validation: `jwt`,
                                      code: L.invalid_string,
                                      message: r.message,
                                    }),
                                    t.dirty())
                                  : r.kind === `cidr`
                                    ? ze(e.data, r.version) ||
                                      ((n = this._getOrReturnCtx(e, n)),
                                      z(n, {
                                        validation: `cidr`,
                                        code: L.invalid_string,
                                        message: r.message,
                                      }),
                                      t.dirty())
                                    : r.kind === `base64`
                                      ? Ae.test(e.data) ||
                                        ((n = this._getOrReturnCtx(e, n)),
                                        z(n, {
                                          validation: `base64`,
                                          code: L.invalid_string,
                                          message: r.message,
                                        }),
                                        t.dirty())
                                      : r.kind === `base64url`
                                        ? je.test(e.data) ||
                                          ((n = this._getOrReturnCtx(e, n)),
                                          z(n, {
                                            validation: `base64url`,
                                            code: L.invalid_string,
                                            message: r.message,
                                          }),
                                          t.dirty())
                                        : P.assertNever(r);
    return { status: t.value, value: e.data };
  }
  _regex(e, t, n) {
    return this.refinement((t) => e.test(t), {
      validation: t,
      code: L.invalid_string,
      ...U.errToObj(n),
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(e) {
    return this._addCheck({ kind: `email`, ...U.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: `url`, ...U.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: `emoji`, ...U.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: `uuid`, ...U.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: `nanoid`, ...U.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: `cuid`, ...U.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: `cuid2`, ...U.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: `ulid`, ...U.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: `base64`, ...U.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({ kind: `base64url`, ...U.errToObj(e) });
  }
  jwt(e) {
    return this._addCheck({ kind: `jwt`, ...U.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: `ip`, ...U.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: `cidr`, ...U.errToObj(e) });
  }
  datetime(e) {
    return typeof e == `string`
      ? this._addCheck({ kind: `datetime`, precision: null, offset: !1, local: !1, message: e })
      : this._addCheck({
          kind: `datetime`,
          precision: e?.precision === void 0 ? null : e?.precision,
          offset: e?.offset ?? !1,
          local: e?.local ?? !1,
          ...U.errToObj(e?.message),
        });
  }
  date(e) {
    return this._addCheck({ kind: `date`, message: e });
  }
  time(e) {
    return typeof e == `string`
      ? this._addCheck({ kind: `time`, precision: null, message: e })
      : this._addCheck({
          kind: `time`,
          precision: e?.precision === void 0 ? null : e?.precision,
          ...U.errToObj(e?.message),
        });
  }
  duration(e) {
    return this._addCheck({ kind: `duration`, ...U.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({ kind: `regex`, regex: e, ...U.errToObj(t) });
  }
  includes(e, t) {
    return this._addCheck({
      kind: `includes`,
      value: e,
      position: t?.position,
      ...U.errToObj(t?.message),
    });
  }
  startsWith(e, t) {
    return this._addCheck({ kind: `startsWith`, value: e, ...U.errToObj(t) });
  }
  endsWith(e, t) {
    return this._addCheck({ kind: `endsWith`, value: e, ...U.errToObj(t) });
  }
  min(e, t) {
    return this._addCheck({ kind: `min`, value: e, ...U.errToObj(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: `max`, value: e, ...U.errToObj(t) });
  }
  length(e, t) {
    return this._addCheck({ kind: `length`, value: e, ...U.errToObj(t) });
  }
  nonempty(e) {
    return this.min(1, U.errToObj(e));
  }
  trim() {
    return new e({ ...this._def, checks: [...this._def.checks, { kind: `trim` }] });
  }
  toLowerCase() {
    return new e({ ...this._def, checks: [...this._def.checks, { kind: `toLowerCase` }] });
  }
  toUpperCase() {
    return new e({ ...this._def, checks: [...this._def.checks, { kind: `toUpperCase` }] });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === `datetime`);
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === `date`);
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === `time`);
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === `duration`);
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === `email`);
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === `url`);
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === `emoji`);
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === `uuid`);
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === `nanoid`);
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === `cuid`);
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === `cuid2`);
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === `ulid`);
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === `ip`);
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === `cidr`);
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === `base64`);
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === `base64url`);
  }
  get minLength() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e;
  }
};
Be.create = (e) => new Be({ checks: [], typeName: q.ZodString, coerce: e?.coerce ?? !1, ...W(e) });
function Ve(e, t) {
  let n = (e.toString().split(`.`)[1] || ``).length,
    r = (t.toString().split(`.`)[1] || ``).length,
    i = n > r ? n : r;
  return (
    (Number.parseInt(e.toFixed(i).replace(`.`, ``)) %
      Number.parseInt(t.toFixed(i).replace(`.`, ``))) /
    10 ** i
  );
}
var He = class e extends G {
  constructor() {
    (super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf));
  }
  _parse(e) {
    if ((this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== F.number)) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { code: L.invalid_type, expected: F.number, received: t.parsedType }), V);
    }
    let t,
      n = new B();
    for (let r of this._def.checks)
      r.kind === `int`
        ? P.isInteger(e.data) ||
          ((t = this._getOrReturnCtx(e, t)),
          z(t, {
            code: L.invalid_type,
            expected: `integer`,
            received: `float`,
            message: r.message,
          }),
          n.dirty())
        : r.kind === `min`
          ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
            ((t = this._getOrReturnCtx(e, t)),
            z(t, {
              code: L.too_small,
              minimum: r.value,
              type: `number`,
              inclusive: r.inclusive,
              exact: !1,
              message: r.message,
            }),
            n.dirty())
          : r.kind === `max`
            ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
              ((t = this._getOrReturnCtx(e, t)),
              z(t, {
                code: L.too_big,
                maximum: r.value,
                type: `number`,
                inclusive: r.inclusive,
                exact: !1,
                message: r.message,
              }),
              n.dirty())
            : r.kind === `multipleOf`
              ? Ve(e.data, r.value) !== 0 &&
                ((t = this._getOrReturnCtx(e, t)),
                z(t, { code: L.not_multiple_of, multipleOf: r.value, message: r.message }),
                n.dirty())
              : r.kind === `finite`
                ? Number.isFinite(e.data) ||
                  ((t = this._getOrReturnCtx(e, t)),
                  z(t, { code: L.not_finite, message: r.message }),
                  n.dirty())
                : P.assertNever(r);
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit(`min`, e, !0, U.toString(t));
  }
  gt(e, t) {
    return this.setLimit(`min`, e, !1, U.toString(t));
  }
  lte(e, t) {
    return this.setLimit(`max`, e, !0, U.toString(t));
  }
  lt(e, t) {
    return this.setLimit(`max`, e, !1, U.toString(t));
  }
  setLimit(t, n, r, i) {
    return new e({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: n, inclusive: r, message: U.toString(i) }],
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(e) {
    return this._addCheck({ kind: `int`, message: U.toString(e) });
  }
  positive(e) {
    return this._addCheck({ kind: `min`, value: 0, inclusive: !1, message: U.toString(e) });
  }
  negative(e) {
    return this._addCheck({ kind: `max`, value: 0, inclusive: !1, message: U.toString(e) });
  }
  nonpositive(e) {
    return this._addCheck({ kind: `max`, value: 0, inclusive: !0, message: U.toString(e) });
  }
  nonnegative(e) {
    return this._addCheck({ kind: `min`, value: 0, inclusive: !0, message: U.toString(e) });
  }
  multipleOf(e, t) {
    return this._addCheck({ kind: `multipleOf`, value: e, message: U.toString(t) });
  }
  finite(e) {
    return this._addCheck({ kind: `finite`, message: U.toString(e) });
  }
  safe(e) {
    return this._addCheck({
      kind: `min`,
      inclusive: !0,
      value: -(2 ** 53 - 1),
      message: U.toString(e),
    })._addCheck({ kind: `max`, inclusive: !0, value: 2 ** 53 - 1, message: U.toString(e) });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(
      (e) => e.kind === `int` || (e.kind === `multipleOf` && P.isInteger(e.value)),
    );
  }
  get isFinite() {
    let e = null,
      t = null;
    for (let n of this._def.checks)
      if (n.kind === `finite` || n.kind === `int` || n.kind === `multipleOf`) return !0;
      else
        n.kind === `min`
          ? (t === null || n.value > t) && (t = n.value)
          : n.kind === `max` && (e === null || n.value < e) && (e = n.value);
    return Number.isFinite(t) && Number.isFinite(e);
  }
};
He.create = (e) => new He({ checks: [], typeName: q.ZodNumber, coerce: e?.coerce || !1, ...W(e) });
var Ue = class e extends G {
  constructor() {
    (super(...arguments), (this.min = this.gte), (this.max = this.lte));
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    if (this._getType(e) !== F.bigint) return this._getInvalidInput(e);
    let t,
      n = new B();
    for (let r of this._def.checks)
      r.kind === `min`
        ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
          ((t = this._getOrReturnCtx(e, t)),
          z(t, {
            code: L.too_small,
            type: `bigint`,
            minimum: r.value,
            inclusive: r.inclusive,
            message: r.message,
          }),
          n.dirty())
        : r.kind === `max`
          ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
            ((t = this._getOrReturnCtx(e, t)),
            z(t, {
              code: L.too_big,
              type: `bigint`,
              maximum: r.value,
              inclusive: r.inclusive,
              message: r.message,
            }),
            n.dirty())
          : r.kind === `multipleOf`
            ? e.data % r.value !== BigInt(0) &&
              ((t = this._getOrReturnCtx(e, t)),
              z(t, { code: L.not_multiple_of, multipleOf: r.value, message: r.message }),
              n.dirty())
            : P.assertNever(r);
    return { status: n.value, value: e.data };
  }
  _getInvalidInput(e) {
    let t = this._getOrReturnCtx(e);
    return (z(t, { code: L.invalid_type, expected: F.bigint, received: t.parsedType }), V);
  }
  gte(e, t) {
    return this.setLimit(`min`, e, !0, U.toString(t));
  }
  gt(e, t) {
    return this.setLimit(`min`, e, !1, U.toString(t));
  }
  lte(e, t) {
    return this.setLimit(`max`, e, !0, U.toString(t));
  }
  lt(e, t) {
    return this.setLimit(`max`, e, !1, U.toString(t));
  }
  setLimit(t, n, r, i) {
    return new e({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: n, inclusive: r, message: U.toString(i) }],
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(e) {
    return this._addCheck({ kind: `min`, value: BigInt(0), inclusive: !1, message: U.toString(e) });
  }
  negative(e) {
    return this._addCheck({ kind: `max`, value: BigInt(0), inclusive: !1, message: U.toString(e) });
  }
  nonpositive(e) {
    return this._addCheck({ kind: `max`, value: BigInt(0), inclusive: !0, message: U.toString(e) });
  }
  nonnegative(e) {
    return this._addCheck({ kind: `min`, value: BigInt(0), inclusive: !0, message: U.toString(e) });
  }
  multipleOf(e, t) {
    return this._addCheck({ kind: `multipleOf`, value: e, message: U.toString(t) });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e;
  }
};
Ue.create = (e) => new Ue({ checks: [], typeName: q.ZodBigInt, coerce: e?.coerce ?? !1, ...W(e) });
var We = class extends G {
  _parse(e) {
    if ((this._def.coerce && (e.data = !!e.data), this._getType(e) !== F.boolean)) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { code: L.invalid_type, expected: F.boolean, received: t.parsedType }), V);
    }
    return H(e.data);
  }
};
We.create = (e) => new We({ typeName: q.ZodBoolean, coerce: e?.coerce || !1, ...W(e) });
var Ge = class e extends G {
  _parse(e) {
    if ((this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== F.date)) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { code: L.invalid_type, expected: F.date, received: t.parsedType }), V);
    }
    if (Number.isNaN(e.data.getTime()))
      return (z(this._getOrReturnCtx(e), { code: L.invalid_date }), V);
    let t = new B(),
      n;
    for (let r of this._def.checks)
      r.kind === `min`
        ? e.data.getTime() < r.value &&
          ((n = this._getOrReturnCtx(e, n)),
          z(n, {
            code: L.too_small,
            message: r.message,
            inclusive: !0,
            exact: !1,
            minimum: r.value,
            type: `date`,
          }),
          t.dirty())
        : r.kind === `max`
          ? e.data.getTime() > r.value &&
            ((n = this._getOrReturnCtx(e, n)),
            z(n, {
              code: L.too_big,
              message: r.message,
              inclusive: !0,
              exact: !1,
              maximum: r.value,
              type: `date`,
            }),
            t.dirty())
          : P.assertNever(r);
    return { status: t.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(e, t) {
    return this._addCheck({ kind: `min`, value: e.getTime(), message: U.toString(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: `max`, value: e.getTime(), message: U.toString(t) });
  }
  get minDate() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e == null ? null : new Date(e);
  }
  get maxDate() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e == null ? null : new Date(e);
  }
};
Ge.create = (e) => new Ge({ checks: [], coerce: e?.coerce || !1, typeName: q.ZodDate, ...W(e) });
var Ke = class extends G {
  _parse(e) {
    if (this._getType(e) !== F.symbol) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { code: L.invalid_type, expected: F.symbol, received: t.parsedType }), V);
    }
    return H(e.data);
  }
};
Ke.create = (e) => new Ke({ typeName: q.ZodSymbol, ...W(e) });
var qe = class extends G {
  _parse(e) {
    if (this._getType(e) !== F.undefined) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { code: L.invalid_type, expected: F.undefined, received: t.parsedType }), V);
    }
    return H(e.data);
  }
};
qe.create = (e) => new qe({ typeName: q.ZodUndefined, ...W(e) });
var Je = class extends G {
  _parse(e) {
    if (this._getType(e) !== F.null) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { code: L.invalid_type, expected: F.null, received: t.parsedType }), V);
    }
    return H(e.data);
  }
};
Je.create = (e) => new Je({ typeName: q.ZodNull, ...W(e) });
var Ye = class extends G {
  constructor() {
    (super(...arguments), (this._any = !0));
  }
  _parse(e) {
    return H(e.data);
  }
};
Ye.create = (e) => new Ye({ typeName: q.ZodAny, ...W(e) });
var Xe = class extends G {
  constructor() {
    (super(...arguments), (this._unknown = !0));
  }
  _parse(e) {
    return H(e.data);
  }
};
Xe.create = (e) => new Xe({ typeName: q.ZodUnknown, ...W(e) });
var Ze = class extends G {
  _parse(e) {
    let t = this._getOrReturnCtx(e);
    return (z(t, { code: L.invalid_type, expected: F.never, received: t.parsedType }), V);
  }
};
Ze.create = (e) => new Ze({ typeName: q.ZodNever, ...W(e) });
var Qe = class extends G {
  _parse(e) {
    if (this._getType(e) !== F.undefined) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { code: L.invalid_type, expected: F.void, received: t.parsedType }), V);
    }
    return H(e.data);
  }
};
Qe.create = (e) => new Qe({ typeName: q.ZodVoid, ...W(e) });
var $e = class e extends G {
  _parse(e) {
    let { ctx: t, status: n } = this._processInputParams(e),
      r = this._def;
    if (t.parsedType !== F.array)
      return (z(t, { code: L.invalid_type, expected: F.array, received: t.parsedType }), V);
    if (r.exactLength !== null) {
      let e = t.data.length > r.exactLength.value,
        i = t.data.length < r.exactLength.value;
      (e || i) &&
        (z(t, {
          code: e ? L.too_big : L.too_small,
          minimum: i ? r.exactLength.value : void 0,
          maximum: e ? r.exactLength.value : void 0,
          type: `array`,
          inclusive: !0,
          exact: !0,
          message: r.exactLength.message,
        }),
        n.dirty());
    }
    if (
      (r.minLength !== null &&
        t.data.length < r.minLength.value &&
        (z(t, {
          code: L.too_small,
          minimum: r.minLength.value,
          type: `array`,
          inclusive: !0,
          exact: !1,
          message: r.minLength.message,
        }),
        n.dirty()),
      r.maxLength !== null &&
        t.data.length > r.maxLength.value &&
        (z(t, {
          code: L.too_big,
          maximum: r.maxLength.value,
          type: `array`,
          inclusive: !0,
          exact: !1,
          message: r.maxLength.message,
        }),
        n.dirty()),
      t.common.async)
    )
      return Promise.all(
        [...t.data].map((e, n) => r.type._parseAsync(new me(t, e, t.path, n))),
      ).then((e) => B.mergeArray(n, e));
    let i = [...t.data].map((e, n) => r.type._parseSync(new me(t, e, t.path, n)));
    return B.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new e({ ...this._def, minLength: { value: t, message: U.toString(n) } });
  }
  max(t, n) {
    return new e({ ...this._def, maxLength: { value: t, message: U.toString(n) } });
  }
  length(t, n) {
    return new e({ ...this._def, exactLength: { value: t, message: U.toString(n) } });
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
$e.create = (e, t) =>
  new $e({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: q.ZodArray,
    ...W(t),
  });
function et(e) {
  if (e instanceof K) {
    let t = {};
    for (let n in e.shape) {
      let r = e.shape[n];
      t[n] = vt.create(et(r));
    }
    return new K({ ...e._def, shape: () => t });
  } else if (e instanceof $e) return new $e({ ...e._def, type: et(e.element) });
  else if (e instanceof vt) return vt.create(et(e.unwrap()));
  else if (e instanceof yt) return yt.create(et(e.unwrap()));
  else if (e instanceof ot) return ot.create(e.items.map((e) => et(e)));
  else return e;
}
var K = class e extends G {
  constructor() {
    (super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend));
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let e = this._def.shape(),
      t = P.objectKeys(e);
    return ((this._cached = { shape: e, keys: t }), this._cached);
  }
  _parse(e) {
    if (this._getType(e) !== F.object) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { code: L.invalid_type, expected: F.object, received: t.parsedType }), V);
    }
    let { status: t, ctx: n } = this._processInputParams(e),
      { shape: r, keys: i } = this._getCached(),
      a = [];
    if (!(this._def.catchall instanceof Ze && this._def.unknownKeys === `strip`))
      for (let e in n.data) i.includes(e) || a.push(e);
    let o = [];
    for (let e of i) {
      let t = r[e],
        i = n.data[e];
      o.push({
        key: { status: `valid`, value: e },
        value: t._parse(new me(n, i, n.path, e)),
        alwaysSet: e in n.data,
      });
    }
    if (this._def.catchall instanceof Ze) {
      let e = this._def.unknownKeys;
      if (e === `passthrough`)
        for (let e of a)
          o.push({
            key: { status: `valid`, value: e },
            value: { status: `valid`, value: n.data[e] },
          });
      else if (e === `strict`)
        a.length > 0 && (z(n, { code: L.unrecognized_keys, keys: a }), t.dirty());
      else if (e !== `strip`) throw Error(`Internal ZodObject error: invalid unknownKeys value.`);
    } else {
      let e = this._def.catchall;
      for (let t of a) {
        let r = n.data[t];
        o.push({
          key: { status: `valid`, value: t },
          value: e._parse(new me(n, r, n.path, t)),
          alwaysSet: t in n.data,
        });
      }
    }
    return n.common.async
      ? Promise.resolve()
          .then(async () => {
            let e = [];
            for (let t of o) {
              let n = await t.key,
                r = await t.value;
              e.push({ key: n, value: r, alwaysSet: t.alwaysSet });
            }
            return e;
          })
          .then((e) => B.mergeObjectSync(t, e))
      : B.mergeObjectSync(t, o);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      U.errToObj,
      new e({
        ...this._def,
        unknownKeys: `strict`,
        ...(t === void 0
          ? {}
          : {
              errorMap: (e, n) => {
                let r = this._def.errorMap?.(e, n).message ?? n.defaultError;
                return e.code === `unrecognized_keys`
                  ? { message: U.errToObj(t).message ?? r }
                  : { message: r };
              },
            }),
      })
    );
  }
  strip() {
    return new e({ ...this._def, unknownKeys: `strip` });
  }
  passthrough() {
    return new e({ ...this._def, unknownKeys: `passthrough` });
  }
  extend(t) {
    return new e({ ...this._def, shape: () => ({ ...this._def.shape(), ...t }) });
  }
  merge(t) {
    return new e({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: q.ZodObject,
    });
  }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  catchall(t) {
    return new e({ ...this._def, catchall: t });
  }
  pick(t) {
    let n = {};
    for (let e of P.objectKeys(t)) t[e] && this.shape[e] && (n[e] = this.shape[e]);
    return new e({ ...this._def, shape: () => n });
  }
  omit(t) {
    let n = {};
    for (let e of P.objectKeys(this.shape)) t[e] || (n[e] = this.shape[e]);
    return new e({ ...this._def, shape: () => n });
  }
  deepPartial() {
    return et(this);
  }
  partial(t) {
    let n = {};
    for (let e of P.objectKeys(this.shape)) {
      let r = this.shape[e];
      t && !t[e] ? (n[e] = r) : (n[e] = r.optional());
    }
    return new e({ ...this._def, shape: () => n });
  }
  required(t) {
    let n = {};
    for (let e of P.objectKeys(this.shape))
      if (t && !t[e]) n[e] = this.shape[e];
      else {
        let t = this.shape[e];
        for (; t instanceof vt; ) t = t._def.innerType;
        n[e] = t;
      }
    return new e({ ...this._def, shape: () => n });
  }
  keyof() {
    return pt(P.objectKeys(this.shape));
  }
};
((K.create = (e, t) =>
  new K({
    shape: () => e,
    unknownKeys: `strip`,
    catchall: Ze.create(),
    typeName: q.ZodObject,
    ...W(t),
  })),
  (K.strictCreate = (e, t) =>
    new K({
      shape: () => e,
      unknownKeys: `strict`,
      catchall: Ze.create(),
      typeName: q.ZodObject,
      ...W(t),
    })),
  (K.lazycreate = (e, t) =>
    new K({
      shape: e,
      unknownKeys: `strip`,
      catchall: Ze.create(),
      typeName: q.ZodObject,
      ...W(t),
    })));
var tt = class extends G {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      n = this._def.options;
    function r(e) {
      for (let t of e) if (t.result.status === `valid`) return t.result;
      for (let n of e)
        if (n.result.status === `dirty`)
          return (t.common.issues.push(...n.ctx.common.issues), n.result);
      let n = e.map((e) => new R(e.ctx.common.issues));
      return (z(t, { code: L.invalid_union, unionErrors: n }), V);
    }
    if (t.common.async)
      return Promise.all(
        n.map(async (e) => {
          let n = { ...t, common: { ...t.common, issues: [] }, parent: null };
          return { result: await e._parseAsync({ data: t.data, path: t.path, parent: n }), ctx: n };
        }),
      ).then(r);
    {
      let e,
        r = [];
      for (let i of n) {
        let n = { ...t, common: { ...t.common, issues: [] }, parent: null },
          a = i._parseSync({ data: t.data, path: t.path, parent: n });
        if (a.status === `valid`) return a;
        (a.status === `dirty` && !e && (e = { result: a, ctx: n }),
          n.common.issues.length && r.push(n.common.issues));
      }
      if (e) return (t.common.issues.push(...e.ctx.common.issues), e.result);
      let i = r.map((e) => new R(e));
      return (z(t, { code: L.invalid_union, unionErrors: i }), V);
    }
  }
  get options() {
    return this._def.options;
  }
};
tt.create = (e, t) => new tt({ options: e, typeName: q.ZodUnion, ...W(t) });
var nt = (e) =>
    e instanceof dt
      ? nt(e.schema)
      : e instanceof _t
        ? nt(e.innerType())
        : e instanceof ft
          ? [e.value]
          : e instanceof mt
            ? e.options
            : e instanceof ht
              ? P.objectValues(e.enum)
              : e instanceof bt
                ? nt(e._def.innerType)
                : e instanceof qe
                  ? [void 0]
                  : e instanceof Je
                    ? [null]
                    : e instanceof vt
                      ? [void 0, ...nt(e.unwrap())]
                      : e instanceof yt
                        ? [null, ...nt(e.unwrap())]
                        : e instanceof Ct || e instanceof Tt
                          ? nt(e.unwrap())
                          : e instanceof xt
                            ? nt(e._def.innerType)
                            : [],
  rt = class e extends G {
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      if (t.parsedType !== F.object)
        return (z(t, { code: L.invalid_type, expected: F.object, received: t.parsedType }), V);
      let n = this.discriminator,
        r = t.data[n],
        i = this.optionsMap.get(r);
      return i
        ? t.common.async
          ? i._parseAsync({ data: t.data, path: t.path, parent: t })
          : i._parseSync({ data: t.data, path: t.path, parent: t })
        : (z(t, {
            code: L.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [n],
          }),
          V);
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    static create(t, n, r) {
      let i = new Map();
      for (let e of n) {
        let n = nt(e.shape[t]);
        if (!n.length)
          throw Error(
            `A discriminator value for key \`${t}\` could not be extracted from all schema options`,
          );
        for (let r of n) {
          if (i.has(r))
            throw Error(`Discriminator property ${String(t)} has duplicate value ${String(r)}`);
          i.set(r, e);
        }
      }
      return new e({
        typeName: q.ZodDiscriminatedUnion,
        discriminator: t,
        options: n,
        optionsMap: i,
        ...W(r),
      });
    }
  };
function it(e, t) {
  let n = I(e),
    r = I(t);
  if (e === t) return { valid: !0, data: e };
  if (n === F.object && r === F.object) {
    let n = P.objectKeys(t),
      r = P.objectKeys(e).filter((e) => n.indexOf(e) !== -1),
      i = { ...e, ...t };
    for (let n of r) {
      let r = it(e[n], t[n]);
      if (!r.valid) return { valid: !1 };
      i[n] = r.data;
    }
    return { valid: !0, data: i };
  } else if (n === F.array && r === F.array) {
    if (e.length !== t.length) return { valid: !1 };
    let n = [];
    for (let r = 0; r < e.length; r++) {
      let i = e[r],
        a = t[r],
        o = it(i, a);
      if (!o.valid) return { valid: !1 };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  } else if (n === F.date && r === F.date && +e == +t) return { valid: !0, data: e };
  else return { valid: !1 };
}
var at = class extends G {
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e),
      r = (e, r) => {
        if (ue(e) || ue(r)) return V;
        let i = it(e.value, r.value);
        return i.valid
          ? ((de(e) || de(r)) && t.dirty(), { status: t.value, value: i.data })
          : (z(n, { code: L.invalid_intersection_types }), V);
      };
    return n.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseAsync({ data: n.data, path: n.path, parent: n }),
        ]).then(([e, t]) => r(e, t))
      : r(
          this._def.left._parseSync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseSync({ data: n.data, path: n.path, parent: n }),
        );
  }
};
at.create = (e, t, n) => new at({ left: e, right: t, typeName: q.ZodIntersection, ...W(n) });
var ot = class e extends G {
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== F.array)
      return (z(n, { code: L.invalid_type, expected: F.array, received: n.parsedType }), V);
    if (n.data.length < this._def.items.length)
      return (
        z(n, {
          code: L.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: `array`,
        }),
        V
      );
    !this._def.rest &&
      n.data.length > this._def.items.length &&
      (z(n, {
        code: L.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: `array`,
      }),
      t.dirty());
    let r = [...n.data]
      .map((e, t) => {
        let r = this._def.items[t] || this._def.rest;
        return r ? r._parse(new me(n, e, n.path, t)) : null;
      })
      .filter((e) => !!e);
    return n.common.async ? Promise.all(r).then((e) => B.mergeArray(t, e)) : B.mergeArray(t, r);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new e({ ...this._def, rest: t });
  }
};
ot.create = (e, t) => {
  if (!Array.isArray(e)) throw Error(`You must pass an array of schemas to z.tuple([ ... ])`);
  return new ot({ items: e, typeName: q.ZodTuple, rest: null, ...W(t) });
};
var st = class e extends G {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let { status: t, ctx: n } = this._processInputParams(e);
      if (n.parsedType !== F.object)
        return (z(n, { code: L.invalid_type, expected: F.object, received: n.parsedType }), V);
      let r = [],
        i = this._def.keyType,
        a = this._def.valueType;
      for (let e in n.data)
        r.push({
          key: i._parse(new me(n, e, n.path, e)),
          value: a._parse(new me(n, n.data[e], n.path, e)),
          alwaysSet: e in n.data,
        });
      return n.common.async ? B.mergeObjectAsync(t, r) : B.mergeObjectSync(t, r);
    }
    get element() {
      return this._def.valueType;
    }
    static create(t, n, r) {
      return n instanceof G
        ? new e({ keyType: t, valueType: n, typeName: q.ZodRecord, ...W(r) })
        : new e({ keyType: Be.create(), valueType: t, typeName: q.ZodRecord, ...W(n) });
    }
  },
  ct = class extends G {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let { status: t, ctx: n } = this._processInputParams(e);
      if (n.parsedType !== F.map)
        return (z(n, { code: L.invalid_type, expected: F.map, received: n.parsedType }), V);
      let r = this._def.keyType,
        i = this._def.valueType,
        a = [...n.data.entries()].map(([e, t], a) => ({
          key: r._parse(new me(n, e, n.path, [a, `key`])),
          value: i._parse(new me(n, t, n.path, [a, `value`])),
        }));
      if (n.common.async) {
        let e = new Map();
        return Promise.resolve().then(async () => {
          for (let n of a) {
            let r = await n.key,
              i = await n.value;
            if (r.status === `aborted` || i.status === `aborted`) return V;
            ((r.status === `dirty` || i.status === `dirty`) && t.dirty(), e.set(r.value, i.value));
          }
          return { status: t.value, value: e };
        });
      } else {
        let e = new Map();
        for (let n of a) {
          let r = n.key,
            i = n.value;
          if (r.status === `aborted` || i.status === `aborted`) return V;
          ((r.status === `dirty` || i.status === `dirty`) && t.dirty(), e.set(r.value, i.value));
        }
        return { status: t.value, value: e };
      }
    }
  };
ct.create = (e, t, n) => new ct({ valueType: t, keyType: e, typeName: q.ZodMap, ...W(n) });
var lt = class e extends G {
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== F.set)
      return (z(n, { code: L.invalid_type, expected: F.set, received: n.parsedType }), V);
    let r = this._def;
    (r.minSize !== null &&
      n.data.size < r.minSize.value &&
      (z(n, {
        code: L.too_small,
        minimum: r.minSize.value,
        type: `set`,
        inclusive: !0,
        exact: !1,
        message: r.minSize.message,
      }),
      t.dirty()),
      r.maxSize !== null &&
        n.data.size > r.maxSize.value &&
        (z(n, {
          code: L.too_big,
          maximum: r.maxSize.value,
          type: `set`,
          inclusive: !0,
          exact: !1,
          message: r.maxSize.message,
        }),
        t.dirty()));
    let i = this._def.valueType;
    function a(e) {
      let n = new Set();
      for (let r of e) {
        if (r.status === `aborted`) return V;
        (r.status === `dirty` && t.dirty(), n.add(r.value));
      }
      return { status: t.value, value: n };
    }
    let o = [...n.data.values()].map((e, t) => i._parse(new me(n, e, n.path, t)));
    return n.common.async ? Promise.all(o).then((e) => a(e)) : a(o);
  }
  min(t, n) {
    return new e({ ...this._def, minSize: { value: t, message: U.toString(n) } });
  }
  max(t, n) {
    return new e({ ...this._def, maxSize: { value: t, message: U.toString(n) } });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
lt.create = (e, t) =>
  new lt({ valueType: e, minSize: null, maxSize: null, typeName: q.ZodSet, ...W(t) });
var ut = class e extends G {
    constructor() {
      (super(...arguments), (this.validate = this.implement));
    }
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      if (t.parsedType !== F.function)
        return (z(t, { code: L.invalid_type, expected: F.function, received: t.parsedType }), V);
      function n(e, n) {
        return ce({
          data: e,
          path: t.path,
          errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, se(), ae].filter((e) => !!e),
          issueData: { code: L.invalid_arguments, argumentsError: n },
        });
      }
      function r(e, n) {
        return ce({
          data: e,
          path: t.path,
          errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, se(), ae].filter((e) => !!e),
          issueData: { code: L.invalid_return_type, returnTypeError: n },
        });
      }
      let i = { errorMap: t.common.contextualErrorMap },
        a = t.data;
      if (this._def.returns instanceof gt) {
        let e = this;
        return H(async function (...t) {
          let o = new R([]),
            s = await e._def.args.parseAsync(t, i).catch((e) => {
              throw (o.addIssue(n(t, e)), o);
            }),
            c = await Reflect.apply(a, this, s);
          return await e._def.returns._def.type.parseAsync(c, i).catch((e) => {
            throw (o.addIssue(r(c, e)), o);
          });
        });
      } else {
        let e = this;
        return H(function (...t) {
          let o = e._def.args.safeParse(t, i);
          if (!o.success) throw new R([n(t, o.error)]);
          let s = Reflect.apply(a, this, o.data),
            c = e._def.returns.safeParse(s, i);
          if (!c.success) throw new R([r(s, c.error)]);
          return c.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...t) {
      return new e({ ...this._def, args: ot.create(t).rest(Xe.create()) });
    }
    returns(t) {
      return new e({ ...this._def, returns: t });
    }
    implement(e) {
      return this.parse(e);
    }
    strictImplement(e) {
      return this.parse(e);
    }
    static create(t, n, r) {
      return new e({
        args: t || ot.create([]).rest(Xe.create()),
        returns: n || Xe.create(),
        typeName: q.ZodFunction,
        ...W(r),
      });
    }
  },
  dt = class extends G {
    get schema() {
      return this._def.getter();
    }
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
    }
  };
dt.create = (e, t) => new dt({ getter: e, typeName: q.ZodLazy, ...W(t) });
var ft = class extends G {
  _parse(e) {
    if (e.data !== this._def.value) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { received: t.data, code: L.invalid_literal, expected: this._def.value }), V);
    }
    return { status: `valid`, value: e.data };
  }
  get value() {
    return this._def.value;
  }
};
ft.create = (e, t) => new ft({ value: e, typeName: q.ZodLiteral, ...W(t) });
function pt(e, t) {
  return new mt({ values: e, typeName: q.ZodEnum, ...W(t) });
}
var mt = class e extends G {
  _parse(e) {
    if (typeof e.data != `string`) {
      let t = this._getOrReturnCtx(e),
        n = this._def.values;
      return (z(t, { expected: P.joinValues(n), received: t.parsedType, code: L.invalid_type }), V);
    }
    if (((this._cache ||= new Set(this._def.values)), !this._cache.has(e.data))) {
      let t = this._getOrReturnCtx(e),
        n = this._def.values;
      return (z(t, { received: t.data, code: L.invalid_enum_value, options: n }), V);
    }
    return H(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Values() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  extract(t, n = this._def) {
    return e.create(t, { ...this._def, ...n });
  }
  exclude(t, n = this._def) {
    return e.create(
      this.options.filter((e) => !t.includes(e)),
      { ...this._def, ...n },
    );
  }
};
mt.create = pt;
var ht = class extends G {
  _parse(e) {
    let t = P.getValidEnumValues(this._def.values),
      n = this._getOrReturnCtx(e);
    if (n.parsedType !== F.string && n.parsedType !== F.number) {
      let e = P.objectValues(t);
      return (z(n, { expected: P.joinValues(e), received: n.parsedType, code: L.invalid_type }), V);
    }
    if (
      ((this._cache ||= new Set(P.getValidEnumValues(this._def.values))), !this._cache.has(e.data))
    ) {
      let e = P.objectValues(t);
      return (z(n, { received: n.data, code: L.invalid_enum_value, options: e }), V);
    }
    return H(e.data);
  }
  get enum() {
    return this._def.values;
  }
};
ht.create = (e, t) => new ht({ values: e, typeName: q.ZodNativeEnum, ...W(t) });
var gt = class extends G {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    let { ctx: t } = this._processInputParams(e);
    return t.parsedType !== F.promise && t.common.async === !1
      ? (z(t, { code: L.invalid_type, expected: F.promise, received: t.parsedType }), V)
      : H(
          (t.parsedType === F.promise ? t.data : Promise.resolve(t.data)).then((e) =>
            this._def.type.parseAsync(e, { path: t.path, errorMap: t.common.contextualErrorMap }),
          ),
        );
  }
};
gt.create = (e, t) => new gt({ type: e, typeName: q.ZodPromise, ...W(t) });
var _t = class extends G {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === q.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e),
      r = this._def.effect || null,
      i = {
        addIssue: (e) => {
          (z(n, e), e.fatal ? t.abort() : t.dirty());
        },
        get path() {
          return n.path;
        },
      };
    if (((i.addIssue = i.addIssue.bind(i)), r.type === `preprocess`)) {
      let e = r.transform(n.data, i);
      if (n.common.async)
        return Promise.resolve(e).then(async (e) => {
          if (t.value === `aborted`) return V;
          let r = await this._def.schema._parseAsync({ data: e, path: n.path, parent: n });
          return r.status === `aborted`
            ? V
            : r.status === `dirty` || t.value === `dirty`
              ? le(r.value)
              : r;
        });
      {
        if (t.value === `aborted`) return V;
        let r = this._def.schema._parseSync({ data: e, path: n.path, parent: n });
        return r.status === `aborted`
          ? V
          : r.status === `dirty` || t.value === `dirty`
            ? le(r.value)
            : r;
      }
    }
    if (r.type === `refinement`) {
      let e = (e) => {
        let t = r.refinement(e, i);
        if (n.common.async) return Promise.resolve(t);
        if (t instanceof Promise)
          throw Error(
            `Async refinement encountered during synchronous parse operation. Use .parseAsync instead.`,
          );
        return e;
      };
      if (n.common.async === !1) {
        let r = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
        return r.status === `aborted`
          ? V
          : (r.status === `dirty` && t.dirty(), e(r.value), { status: t.value, value: r.value });
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((n) =>
            n.status === `aborted`
              ? V
              : (n.status === `dirty` && t.dirty(),
                e(n.value).then(() => ({ status: t.value, value: n.value }))),
          );
    }
    if (r.type === `transform`)
      if (n.common.async === !1) {
        let e = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
        if (!fe(e)) return V;
        let a = r.transform(e.value, i);
        if (a instanceof Promise)
          throw Error(
            `Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`,
          );
        return { status: t.value, value: a };
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((e) =>
            fe(e)
              ? Promise.resolve(r.transform(e.value, i)).then((e) => ({
                  status: t.value,
                  value: e,
                }))
              : V,
          );
    P.assertNever(r);
  }
};
((_t.create = (e, t, n) => new _t({ schema: e, typeName: q.ZodEffects, effect: t, ...W(n) })),
  (_t.createWithPreprocess = (e, t, n) =>
    new _t({
      schema: t,
      effect: { type: `preprocess`, transform: e },
      typeName: q.ZodEffects,
      ...W(n),
    })));
var vt = class extends G {
  _parse(e) {
    return this._getType(e) === F.undefined ? H(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
vt.create = (e, t) => new vt({ innerType: e, typeName: q.ZodOptional, ...W(t) });
var yt = class extends G {
  _parse(e) {
    return this._getType(e) === F.null ? H(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
yt.create = (e, t) => new yt({ innerType: e, typeName: q.ZodNullable, ...W(t) });
var bt = class extends G {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      n = t.data;
    return (
      t.parsedType === F.undefined && (n = this._def.defaultValue()),
      this._def.innerType._parse({ data: n, path: t.path, parent: t })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
};
bt.create = (e, t) =>
  new bt({
    innerType: e,
    typeName: q.ZodDefault,
    defaultValue: typeof t.default == `function` ? t.default : () => t.default,
    ...W(t),
  });
var xt = class extends G {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      n = { ...t, common: { ...t.common, issues: [] } },
      r = this._def.innerType._parse({ data: n.data, path: n.path, parent: { ...n } });
    return pe(r)
      ? r.then((e) => ({
          status: `valid`,
          value:
            e.status === `valid`
              ? e.value
              : this._def.catchValue({
                  get error() {
                    return new R(n.common.issues);
                  },
                  input: n.data,
                }),
        }))
      : {
          status: `valid`,
          value:
            r.status === `valid`
              ? r.value
              : this._def.catchValue({
                  get error() {
                    return new R(n.common.issues);
                  },
                  input: n.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
xt.create = (e, t) =>
  new xt({
    innerType: e,
    typeName: q.ZodCatch,
    catchValue: typeof t.catch == `function` ? t.catch : () => t.catch,
    ...W(t),
  });
var St = class extends G {
  _parse(e) {
    if (this._getType(e) !== F.nan) {
      let t = this._getOrReturnCtx(e);
      return (z(t, { code: L.invalid_type, expected: F.nan, received: t.parsedType }), V);
    }
    return { status: `valid`, value: e.data };
  }
};
St.create = (e) => new St({ typeName: q.ZodNaN, ...W(e) });
var Ct = class extends G {
    _parse(e) {
      let { ctx: t } = this._processInputParams(e),
        n = t.data;
      return this._def.type._parse({ data: n, path: t.path, parent: t });
    }
    unwrap() {
      return this._def.type;
    }
  },
  wt = class e extends G {
    _parse(e) {
      let { status: t, ctx: n } = this._processInputParams(e);
      if (n.common.async)
        return (async () => {
          let e = await this._def.in._parseAsync({ data: n.data, path: n.path, parent: n });
          return e.status === `aborted`
            ? V
            : e.status === `dirty`
              ? (t.dirty(), le(e.value))
              : this._def.out._parseAsync({ data: e.value, path: n.path, parent: n });
        })();
      {
        let e = this._def.in._parseSync({ data: n.data, path: n.path, parent: n });
        return e.status === `aborted`
          ? V
          : e.status === `dirty`
            ? (t.dirty(), { status: `dirty`, value: e.value })
            : this._def.out._parseSync({ data: e.value, path: n.path, parent: n });
      }
    }
    static create(t, n) {
      return new e({ in: t, out: n, typeName: q.ZodPipeline });
    }
  },
  Tt = class extends G {
    _parse(e) {
      let t = this._def.innerType._parse(e),
        n = (e) => (fe(e) && (e.value = Object.freeze(e.value)), e);
      return pe(t) ? t.then((e) => n(e)) : n(t);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
((Tt.create = (e, t) => new Tt({ innerType: e, typeName: q.ZodReadonly, ...W(t) })), K.lazycreate);
var q;
(function (e) {
  ((e.ZodString = `ZodString`),
    (e.ZodNumber = `ZodNumber`),
    (e.ZodNaN = `ZodNaN`),
    (e.ZodBigInt = `ZodBigInt`),
    (e.ZodBoolean = `ZodBoolean`),
    (e.ZodDate = `ZodDate`),
    (e.ZodSymbol = `ZodSymbol`),
    (e.ZodUndefined = `ZodUndefined`),
    (e.ZodNull = `ZodNull`),
    (e.ZodAny = `ZodAny`),
    (e.ZodUnknown = `ZodUnknown`),
    (e.ZodNever = `ZodNever`),
    (e.ZodVoid = `ZodVoid`),
    (e.ZodArray = `ZodArray`),
    (e.ZodObject = `ZodObject`),
    (e.ZodUnion = `ZodUnion`),
    (e.ZodDiscriminatedUnion = `ZodDiscriminatedUnion`),
    (e.ZodIntersection = `ZodIntersection`),
    (e.ZodTuple = `ZodTuple`),
    (e.ZodRecord = `ZodRecord`),
    (e.ZodMap = `ZodMap`),
    (e.ZodSet = `ZodSet`),
    (e.ZodFunction = `ZodFunction`),
    (e.ZodLazy = `ZodLazy`),
    (e.ZodLiteral = `ZodLiteral`),
    (e.ZodEnum = `ZodEnum`),
    (e.ZodEffects = `ZodEffects`),
    (e.ZodNativeEnum = `ZodNativeEnum`),
    (e.ZodOptional = `ZodOptional`),
    (e.ZodNullable = `ZodNullable`),
    (e.ZodDefault = `ZodDefault`),
    (e.ZodCatch = `ZodCatch`),
    (e.ZodPromise = `ZodPromise`),
    (e.ZodBranded = `ZodBranded`),
    (e.ZodPipeline = `ZodPipeline`),
    (e.ZodReadonly = `ZodReadonly`));
})((q ||= {}));
var Et = Be.create;
(He.create,
  St.create,
  Ue.create,
  We.create,
  Ge.create,
  Ke.create,
  qe.create,
  Je.create,
  Ye.create,
  Xe.create,
  Ze.create,
  Qe.create,
  $e.create);
var Dt = K.create;
(K.strictCreate,
  tt.create,
  rt.create,
  at.create,
  ot.create,
  st.create,
  ct.create,
  lt.create,
  ut.create,
  dt.create,
  ft.create);
var Ot = mt.create;
(ht.create, gt.create, _t.create, vt.create, yt.create, _t.createWithPreprocess, wt.create);
var J = e(t(), 1),
  kt = e(o(), 1);
function At(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var Y = n();
function jt(e) {
  let t = e + `CollectionProvider`,
    [n, a] = _(t),
    [o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    c = (e) => {
      let { scope: t, children: n } = e,
        r = J.useRef(null),
        i = J.useRef(new Map()).current;
      return (0, Y.jsx)(o, { scope: t, itemMap: i, collectionRef: r, children: n });
    };
  c.displayName = t;
  let l = e + `CollectionSlot`,
    u = i(l),
    d = J.forwardRef((e, t) => {
      let { scope: n, children: i } = e;
      return (0, Y.jsx)(u, { ref: r(t, s(l, n).collectionRef), children: i });
    });
  d.displayName = l;
  let f = e + `CollectionItemSlot`,
    p = `data-radix-collection-item`,
    m = i(f),
    h = J.forwardRef((e, t) => {
      let { scope: n, children: i, ...a } = e,
        o = J.useRef(null),
        c = r(t, o),
        l = s(f, n);
      return (
        J.useEffect(() => (l.itemMap.set(o, { ref: o, ...a }), () => void l.itemMap.delete(o))),
        (0, Y.jsx)(m, { [p]: ``, ref: c, children: i })
      );
    });
  h.displayName = f;
  function g(t) {
    let n = s(e + `CollectionConsumer`, t);
    return J.useCallback(() => {
      let e = n.collectionRef.current;
      if (!e) return [];
      let t = Array.from(e.querySelectorAll(`[${p}]`));
      return Array.from(n.itemMap.values()).sort(
        (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current),
      );
    }, [n.collectionRef, n.itemMap]);
  }
  return [{ Provider: c, Slot: d, ItemSlot: h }, g, a];
}
var Mt = J.createContext(void 0);
function Nt(e) {
  let t = J.useContext(Mt);
  return e || t || `ltr`;
}
var Pt = [`top`, `right`, `bottom`, `left`],
  Ft = Math.min,
  X = Math.max,
  It = Math.round,
  Lt = Math.floor,
  Rt = (e) => ({ x: e, y: e }),
  zt = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function Bt(e, t, n) {
  return X(e, Ft(t, n));
}
function Vt(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Ht(e) {
  return e.split(`-`)[0];
}
function Ut(e) {
  return e.split(`-`)[1];
}
function Wt(e) {
  return e === `x` ? `y` : `x`;
}
function Gt(e) {
  return e === `y` ? `height` : `width`;
}
function Kt(e) {
  let t = e[0];
  return t === `t` || t === `b` ? `y` : `x`;
}
function qt(e) {
  return Wt(Kt(e));
}
function Jt(e, t, n) {
  n === void 0 && (n = !1);
  let r = Ut(e),
    i = qt(e),
    a = Gt(i),
    o =
      i === `x`
        ? r === (n ? `end` : `start`)
          ? `right`
          : `left`
        : r === `start`
          ? `bottom`
          : `top`;
  return (t.reference[a] > t.floating[a] && (o = rn(o)), [o, rn(o)]);
}
function Yt(e) {
  let t = rn(e);
  return [Xt(e), t, Xt(t)];
}
function Xt(e) {
  return e.includes(`start`) ? e.replace(`start`, `end`) : e.replace(`end`, `start`);
}
var Zt = [`left`, `right`],
  Qt = [`right`, `left`],
  $t = [`top`, `bottom`],
  en = [`bottom`, `top`];
function tn(e, t, n) {
  switch (e) {
    case `top`:
    case `bottom`:
      return n ? (t ? Qt : Zt) : t ? Zt : Qt;
    case `left`:
    case `right`:
      return t ? $t : en;
    default:
      return [];
  }
}
function nn(e, t, n, r) {
  let i = Ut(e),
    a = tn(Ht(e), n === `start`, r);
  return (i && ((a = a.map((e) => e + `-` + i)), t && (a = a.concat(a.map(Xt)))), a);
}
function rn(e) {
  let t = Ht(e);
  return zt[t] + e.slice(t.length);
}
function an(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function on(e) {
  return typeof e == `number` ? { top: e, right: e, bottom: e, left: e } : an(e);
}
function sn(e) {
  let { x: t, y: n, width: r, height: i } = e;
  return { width: r, height: i, top: n, left: t, right: t + r, bottom: n + i, x: t, y: n };
}
function cn(e, t, n) {
  let { reference: r, floating: i } = e,
    a = Kt(t),
    o = qt(t),
    s = Gt(o),
    c = Ht(t),
    l = a === `y`,
    u = r.x + r.width / 2 - i.width / 2,
    d = r.y + r.height / 2 - i.height / 2,
    f = r[s] / 2 - i[s] / 2,
    p;
  switch (c) {
    case `top`:
      p = { x: u, y: r.y - i.height };
      break;
    case `bottom`:
      p = { x: u, y: r.y + r.height };
      break;
    case `right`:
      p = { x: r.x + r.width, y: d };
      break;
    case `left`:
      p = { x: r.x - i.width, y: d };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (Ut(t)) {
    case `start`:
      p[o] -= f * (n && l ? -1 : 1);
      break;
    case `end`:
      p[o] += f * (n && l ? -1 : 1);
      break;
  }
  return p;
}
async function ln(e, t) {
  t === void 0 && (t = {});
  let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e,
    {
      boundary: c = `clippingAncestors`,
      rootBoundary: l = `viewport`,
      elementContext: u = `floating`,
      altBoundary: d = !1,
      padding: f = 0,
    } = Vt(t, e),
    p = on(f),
    m = o[d ? (u === `floating` ? `reference` : `floating`) : u],
    h = sn(
      await i.getClippingRect({
        element:
          ((await (i.isElement == null ? void 0 : i.isElement(m))) ?? !0)
            ? m
            : m.contextElement ||
              (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating))),
        boundary: c,
        rootBoundary: l,
        strategy: s,
      }),
    ),
    g =
      u === `floating`
        ? { x: n, y: r, width: a.floating.width, height: a.floating.height }
        : a.reference,
    _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)),
    v = ((await (i.isElement == null ? void 0 : i.isElement(_))) &&
      (await (i.getScale == null ? void 0 : i.getScale(_)))) || { x: 1, y: 1 },
    y = sn(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: o,
            rect: g,
            offsetParent: _,
            strategy: s,
          })
        : g,
    );
  return {
    top: (h.top - y.top + p.top) / v.y,
    bottom: (y.bottom - h.bottom + p.bottom) / v.y,
    left: (h.left - y.left + p.left) / v.x,
    right: (y.right - h.right + p.right) / v.x,
  };
}
var un = 50,
  dn = async (e, t, n) => {
    let { placement: r = `bottom`, strategy: i = `absolute`, middleware: a = [], platform: o } = n,
      s = o.detectOverflow ? o : { ...o, detectOverflow: ln },
      c = await (o.isRTL == null ? void 0 : o.isRTL(t)),
      l = await o.getElementRects({ reference: e, floating: t, strategy: i }),
      { x: u, y: d } = cn(l, r, c),
      f = r,
      p = 0,
      m = {};
    for (let n = 0; n < a.length; n++) {
      let h = a[n];
      if (!h) continue;
      let { name: g, fn: _ } = h,
        {
          x: v,
          y,
          data: b,
          reset: x,
        } = await _({
          x: u,
          y: d,
          initialPlacement: r,
          placement: f,
          strategy: i,
          middlewareData: m,
          rects: l,
          platform: s,
          elements: { reference: e, floating: t },
        });
      ((u = v ?? u),
        (d = y ?? d),
        (m[g] = { ...m[g], ...b }),
        x &&
          p < un &&
          (p++,
          typeof x == `object` &&
            (x.placement && (f = x.placement),
            x.rects &&
              (l =
                x.rects === !0
                  ? await o.getElementRects({ reference: e, floating: t, strategy: i })
                  : x.rects),
            ({ x: u, y: d } = cn(l, f, c))),
          (n = -1)));
    }
    return { x: u, y: d, placement: f, strategy: i, middlewareData: m };
  },
  fn = (e) => ({
    name: `arrow`,
    options: e,
    async fn(t) {
      let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t,
        { element: l, padding: u = 0 } = Vt(e, t) || {};
      if (l == null) return {};
      let d = on(u),
        f = { x: n, y: r },
        p = qt(i),
        m = Gt(p),
        h = await o.getDimensions(l),
        g = p === `y`,
        _ = g ? `top` : `left`,
        v = g ? `bottom` : `right`,
        y = g ? `clientHeight` : `clientWidth`,
        b = a.reference[m] + a.reference[p] - f[p] - a.floating[m],
        x = f[p] - a.reference[p],
        S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)),
        C = S ? S[y] : 0;
      (!C || !(await (o.isElement == null ? void 0 : o.isElement(S)))) &&
        (C = s.floating[y] || a.floating[m]);
      let w = b / 2 - x / 2,
        T = C / 2 - h[m] / 2 - 1,
        E = Ft(d[_], T),
        D = Ft(d[v], T),
        O = E,
        k = C - h[m] - D,
        A = C / 2 - h[m] / 2 + w,
        j = Bt(O, A, k),
        M =
          !c.arrow &&
          Ut(i) != null &&
          A !== j &&
          a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0,
        N = M ? (A < O ? A - O : A - k) : 0;
      return {
        [p]: f[p] + N,
        data: { [p]: j, centerOffset: A - j - N, ...(M && { alignmentOffset: N }) },
        reset: M,
      };
    },
  }),
  pn = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `flip`,
        options: e,
        async fn(t) {
          var n;
          let {
              placement: r,
              middlewareData: i,
              rects: a,
              initialPlacement: o,
              platform: s,
              elements: c,
            } = t,
            {
              mainAxis: l = !0,
              crossAxis: u = !0,
              fallbackPlacements: d,
              fallbackStrategy: f = `bestFit`,
              fallbackAxisSideDirection: p = `none`,
              flipAlignment: m = !0,
              ...h
            } = Vt(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          let g = Ht(r),
            _ = Kt(o),
            v = Ht(o) === o,
            y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)),
            b = d || (v || !m ? [rn(o)] : Yt(o)),
            x = p !== `none`;
          !d && x && b.push(...nn(o, m, p, y));
          let S = [o, ...b],
            C = await s.detectOverflow(t, h),
            w = [],
            T = i.flip?.overflows || [];
          if ((l && w.push(C[g]), u)) {
            let e = Jt(r, a, y);
            w.push(C[e[0]], C[e[1]]);
          }
          if (((T = [...T, { placement: r, overflows: w }]), !w.every((e) => e <= 0))) {
            let e = (i.flip?.index || 0) + 1,
              t = S[e];
            if (
              t &&
              (!(u === `alignment` && _ !== Kt(t)) ||
                T.every((e) => (Kt(e.placement) === _ ? e.overflows[0] > 0 : !0)))
            )
              return { data: { index: e, overflows: T }, reset: { placement: t } };
            let n = T.filter((e) => e.overflows[0] <= 0).sort(
              (e, t) => e.overflows[1] - t.overflows[1],
            )[0]?.placement;
            if (!n)
              switch (f) {
                case `bestFit`: {
                  let e = T.filter((e) => {
                    if (x) {
                      let t = Kt(e.placement);
                      return t === _ || t === `y`;
                    }
                    return !0;
                  })
                    .map((e) => [
                      e.placement,
                      e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0),
                    ])
                    .sort((e, t) => e[1] - t[1])[0]?.[0];
                  e && (n = e);
                  break;
                }
                case `initialPlacement`:
                  n = o;
                  break;
              }
            if (r !== n) return { reset: { placement: n } };
          }
          return {};
        },
      }
    );
  };
function mn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function hn(e) {
  return Pt.some((t) => e[t] >= 0);
}
var gn = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `hide`,
        options: e,
        async fn(t) {
          let { rects: n, platform: r } = t,
            { strategy: i = `referenceHidden`, ...a } = Vt(e, t);
          switch (i) {
            case `referenceHidden`: {
              let e = mn(
                await r.detectOverflow(t, { ...a, elementContext: `reference` }),
                n.reference,
              );
              return { data: { referenceHiddenOffsets: e, referenceHidden: hn(e) } };
            }
            case `escaped`: {
              let e = mn(await r.detectOverflow(t, { ...a, altBoundary: !0 }), n.floating);
              return { data: { escapedOffsets: e, escaped: hn(e) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  _n = new Set([`left`, `top`]);
async function vn(e, t) {
  let { placement: n, platform: r, elements: i } = e,
    a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    o = Ht(n),
    s = Ut(n),
    c = Kt(n) === `y`,
    l = _n.has(o) ? -1 : 1,
    u = a && c ? -1 : 1,
    d = Vt(t, e),
    {
      mainAxis: f,
      crossAxis: p,
      alignmentAxis: m,
    } = typeof d == `number`
      ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
      : { mainAxis: d.mainAxis || 0, crossAxis: d.crossAxis || 0, alignmentAxis: d.alignmentAxis };
  return (
    s && typeof m == `number` && (p = s === `end` ? m * -1 : m),
    c ? { x: p * u, y: f * l } : { x: f * l, y: p * u }
  );
}
var yn = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: `offset`,
        options: e,
        async fn(t) {
          var n;
          let { x: r, y: i, placement: a, middlewareData: o } = t,
            s = await vn(t, e);
          return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset
            ? {}
            : { x: r + s.x, y: i + s.y, data: { ...s, placement: a } };
        },
      }
    );
  },
  bn = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `shift`,
        options: e,
        async fn(t) {
          let { x: n, y: r, placement: i, platform: a } = t,
            {
              mainAxis: o = !0,
              crossAxis: s = !1,
              limiter: c = {
                fn: (e) => {
                  let { x: t, y: n } = e;
                  return { x: t, y: n };
                },
              },
              ...l
            } = Vt(e, t),
            u = { x: n, y: r },
            d = await a.detectOverflow(t, l),
            f = Kt(Ht(i)),
            p = Wt(f),
            m = u[p],
            h = u[f];
          if (o) {
            let e = p === `y` ? `top` : `left`,
              t = p === `y` ? `bottom` : `right`,
              n = m + d[e],
              r = m - d[t];
            m = Bt(n, m, r);
          }
          if (s) {
            let e = f === `y` ? `top` : `left`,
              t = f === `y` ? `bottom` : `right`,
              n = h + d[e],
              r = h - d[t];
            h = Bt(n, h, r);
          }
          let g = c.fn({ ...t, [p]: m, [f]: h });
          return { ...g, data: { x: g.x - n, y: g.y - r, enabled: { [p]: o, [f]: s } } };
        },
      }
    );
  },
  xn = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t,
            { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = Vt(e, t),
            u = { x: n, y: r },
            d = Kt(i),
            f = Wt(d),
            p = u[f],
            m = u[d],
            h = Vt(s, t),
            g =
              typeof h == `number`
                ? { mainAxis: h, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...h };
          if (c) {
            let e = f === `y` ? `height` : `width`,
              t = a.reference[f] - a.floating[e] + g.mainAxis,
              n = a.reference[f] + a.reference[e] - g.mainAxis;
            p < t ? (p = t) : p > n && (p = n);
          }
          if (l) {
            let e = f === `y` ? `width` : `height`,
              t = _n.has(Ht(i)),
              n =
                a.reference[d] -
                a.floating[e] +
                ((t && o.offset?.[d]) || 0) +
                (t ? 0 : g.crossAxis),
              r =
                a.reference[d] +
                a.reference[e] +
                (t ? 0 : o.offset?.[d] || 0) -
                (t ? g.crossAxis : 0);
            m < n ? (m = n) : m > r && (m = r);
          }
          return { [f]: p, [d]: m };
        },
      }
    );
  },
  Sn = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `size`,
        options: e,
        async fn(t) {
          var n, r;
          let { placement: i, rects: a, platform: o, elements: s } = t,
            { apply: c = () => {}, ...l } = Vt(e, t),
            u = await o.detectOverflow(t, l),
            d = Ht(i),
            f = Ut(i),
            p = Kt(i) === `y`,
            { width: m, height: h } = a.floating,
            g,
            _;
          d === `top` || d === `bottom`
            ? ((g = d),
              (_ =
                f === ((await (o.isRTL == null ? void 0 : o.isRTL(s.floating))) ? `start` : `end`)
                  ? `left`
                  : `right`))
            : ((_ = d), (g = f === `end` ? `top` : `bottom`));
          let v = h - u.top - u.bottom,
            y = m - u.left - u.right,
            b = Ft(h - u[g], v),
            x = Ft(m - u[_], y),
            S = !t.middlewareData.shift,
            C = b,
            w = x;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (C = v),
            S && !f)
          ) {
            let e = X(u.left, 0),
              t = X(u.right, 0),
              n = X(u.top, 0),
              r = X(u.bottom, 0);
            p
              ? (w = m - 2 * (e !== 0 || t !== 0 ? e + t : X(u.left, u.right)))
              : (C = h - 2 * (n !== 0 || r !== 0 ? n + r : X(u.top, u.bottom)));
          }
          await c({ ...t, availableWidth: w, availableHeight: C });
          let T = await o.getDimensions(s.floating);
          return m !== T.width || h !== T.height ? { reset: { rects: !0 } } : {};
        },
      }
    );
  };
function Cn() {
  return typeof window < `u`;
}
function wn(e) {
  return En(e) ? (e.nodeName || ``).toLowerCase() : `#document`;
}
function Z(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Tn(e) {
  return ((En(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function En(e) {
  return Cn() ? e instanceof Node || e instanceof Z(e).Node : !1;
}
function Q(e) {
  return Cn() ? e instanceof Element || e instanceof Z(e).Element : !1;
}
function Dn(e) {
  return Cn() ? e instanceof HTMLElement || e instanceof Z(e).HTMLElement : !1;
}
function On(e) {
  return !Cn() || typeof ShadowRoot > `u`
    ? !1
    : e instanceof ShadowRoot || e instanceof Z(e).ShadowRoot;
}
function kn(e) {
  let { overflow: t, overflowX: n, overflowY: r, display: i } = $(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== `inline` && i !== `contents`;
}
function An(e) {
  return /^(table|td|th)$/.test(wn(e));
}
function jn(e) {
  try {
    if (e.matches(`:popover-open`)) return !0;
  } catch {}
  try {
    return e.matches(`:modal`);
  } catch {
    return !1;
  }
}
var Mn = /transform|translate|scale|rotate|perspective|filter/,
  Nn = /paint|layout|strict|content/,
  Pn = (e) => !!e && e !== `none`,
  Fn;
function In(e) {
  let t = Q(e) ? $(e) : e;
  return (
    Pn(t.transform) ||
    Pn(t.translate) ||
    Pn(t.scale) ||
    Pn(t.rotate) ||
    Pn(t.perspective) ||
    (!Rn() && (Pn(t.backdropFilter) || Pn(t.filter))) ||
    Mn.test(t.willChange || ``) ||
    Nn.test(t.contain || ``)
  );
}
function Ln(e) {
  let t = Vn(e);
  for (; Dn(t) && !zn(t); ) {
    if (In(t)) return t;
    if (jn(t)) return null;
    t = Vn(t);
  }
  return null;
}
function Rn() {
  return (
    (Fn ??= typeof CSS < `u` && CSS.supports && CSS.supports(`-webkit-backdrop-filter`, `none`)),
    Fn
  );
}
function zn(e) {
  return /^(html|body|#document)$/.test(wn(e));
}
function $(e) {
  return Z(e).getComputedStyle(e);
}
function Bn(e) {
  return Q(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Vn(e) {
  if (wn(e) === `html`) return e;
  let t = e.assignedSlot || e.parentNode || (On(e) && e.host) || Tn(e);
  return On(t) ? t.host : t;
}
function Hn(e) {
  let t = Vn(e);
  return zn(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : Dn(t) && kn(t) ? t : Hn(t);
}
function Un(e, t, n) {
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  let r = Hn(e),
    i = r === e.ownerDocument?.body,
    a = Z(r);
  if (i) {
    let e = Wn(a);
    return t.concat(a, a.visualViewport || [], kn(r) ? r : [], e && n ? Un(e) : []);
  } else return t.concat(r, Un(r, [], n));
}
function Wn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Gn(e) {
  let t = $(e),
    n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0,
    i = Dn(e),
    a = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    s = It(n) !== a || It(r) !== o;
  return (s && ((n = a), (r = o)), { width: n, height: r, $: s });
}
function Kn(e) {
  return Q(e) ? e : e.contextElement;
}
function qn(e) {
  let t = Kn(e);
  if (!Dn(t)) return Rt(1);
  let n = t.getBoundingClientRect(),
    { width: r, height: i, $: a } = Gn(t),
    o = (a ? It(n.width) : n.width) / r,
    s = (a ? It(n.height) : n.height) / i;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: o, y: s }
  );
}
var Jn = Rt(0);
function Yn(e) {
  let t = Z(e);
  return !Rn() || !t.visualViewport
    ? Jn
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Xn(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== Z(e)) ? !1 : t);
}
function Zn(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  let i = e.getBoundingClientRect(),
    a = Kn(e),
    o = Rt(1);
  t && (r ? Q(r) && (o = qn(r)) : (o = qn(e)));
  let s = Xn(a, n, r) ? Yn(a) : Rt(0),
    c = (i.left + s.x) / o.x,
    l = (i.top + s.y) / o.y,
    u = i.width / o.x,
    d = i.height / o.y;
  if (a) {
    let e = Z(a),
      t = r && Q(r) ? Z(r) : r,
      n = e,
      i = Wn(n);
    for (; i && r && t !== n; ) {
      let e = qn(i),
        t = i.getBoundingClientRect(),
        r = $(i),
        a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
        o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
      ((c *= e.x), (l *= e.y), (u *= e.x), (d *= e.y), (c += a), (l += o), (n = Z(i)), (i = Wn(n)));
    }
  }
  return sn({ width: u, height: d, x: c, y: l });
}
function Qn(e, t) {
  let n = Bn(e).scrollLeft;
  return t ? t.left + n : Zn(Tn(e)).left + n;
}
function $n(e, t) {
  let n = e.getBoundingClientRect();
  return { x: n.left + t.scrollLeft - Qn(e, n), y: n.top + t.scrollTop };
}
function er(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
    a = i === `fixed`,
    o = Tn(r),
    s = t ? jn(t.floating) : !1;
  if (r === o || (s && a)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    l = Rt(1),
    u = Rt(0),
    d = Dn(r);
  if ((d || (!d && !a)) && ((wn(r) !== `body` || kn(o)) && (c = Bn(r)), d)) {
    let e = Zn(r);
    ((l = qn(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop));
  }
  let f = o && !d && !a ? $n(o, c) : Rt(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + f.y,
  };
}
function tr(e) {
  return Array.from(e.getClientRects());
}
function nr(e) {
  let t = Tn(e),
    n = Bn(e),
    r = e.ownerDocument.body,
    i = X(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    a = X(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
    o = -n.scrollLeft + Qn(e),
    s = -n.scrollTop;
  return (
    $(r).direction === `rtl` && (o += X(t.clientWidth, r.clientWidth) - i),
    { width: i, height: a, x: o, y: s }
  );
}
var rr = 25;
function ir(e, t) {
  let n = Z(e),
    r = Tn(e),
    i = n.visualViewport,
    a = r.clientWidth,
    o = r.clientHeight,
    s = 0,
    c = 0;
  if (i) {
    ((a = i.width), (o = i.height));
    let e = Rn();
    (!e || (e && t === `fixed`)) && ((s = i.offsetLeft), (c = i.offsetTop));
  }
  let l = Qn(r);
  if (l <= 0) {
    let e = r.ownerDocument,
      t = e.body,
      n = getComputedStyle(t),
      i =
        (e.compatMode === `CSS1Compat` && parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
        0,
      o = Math.abs(r.clientWidth - t.clientWidth - i);
    o <= rr && (a -= o);
  } else l <= rr && (a += l);
  return { width: a, height: o, x: s, y: c };
}
function ar(e, t) {
  let n = Zn(e, !0, t === `fixed`),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    a = Dn(e) ? qn(e) : Rt(1);
  return { width: e.clientWidth * a.x, height: e.clientHeight * a.y, x: i * a.x, y: r * a.y };
}
function or(e, t, n) {
  let r;
  if (t === `viewport`) r = ir(e, n);
  else if (t === `document`) r = nr(Tn(e));
  else if (Q(t)) r = ar(t, n);
  else {
    let n = Yn(e);
    r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
  }
  return sn(r);
}
function sr(e, t) {
  let n = Vn(e);
  return n === t || !Q(n) || zn(n) ? !1 : $(n).position === `fixed` || sr(n, t);
}
function cr(e, t) {
  let n = t.get(e);
  if (n) return n;
  let r = Un(e, [], !1).filter((e) => Q(e) && wn(e) !== `body`),
    i = null,
    a = $(e).position === `fixed`,
    o = a ? Vn(e) : e;
  for (; Q(o) && !zn(o); ) {
    let t = $(o),
      n = In(o);
    (!n && t.position === `fixed` && (i = null),
      (
        a
          ? !n && !i
          : (!n &&
              t.position === `static` &&
              i &&
              (i.position === `absolute` || i.position === `fixed`)) ||
            (kn(o) && !n && sr(e, o))
      )
        ? (r = r.filter((e) => e !== o))
        : (i = t),
      (o = Vn(o)));
  }
  return (t.set(e, r), r);
}
function lr(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
    a = [...(n === `clippingAncestors` ? (jn(t) ? [] : cr(t, this._c)) : [].concat(n)), r],
    o = or(t, a[0], i),
    s = o.top,
    c = o.right,
    l = o.bottom,
    u = o.left;
  for (let e = 1; e < a.length; e++) {
    let n = or(t, a[e], i);
    ((s = X(n.top, s)), (c = Ft(n.right, c)), (l = Ft(n.bottom, l)), (u = X(n.left, u)));
  }
  return { width: c - u, height: l - s, x: u, y: s };
}
function ur(e) {
  let { width: t, height: n } = Gn(e);
  return { width: t, height: n };
}
function dr(e, t, n) {
  let r = Dn(t),
    i = Tn(t),
    a = n === `fixed`,
    o = Zn(e, !0, a, t),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = Rt(0);
  function l() {
    c.x = Qn(i);
  }
  if (r || (!r && !a))
    if (((wn(t) !== `body` || kn(i)) && (s = Bn(t)), r)) {
      let e = Zn(t, !0, a, t);
      ((c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop));
    } else i && l();
  a && !r && i && l();
  let u = i && !r && !a ? $n(i, s) : Rt(0);
  return {
    x: o.left + s.scrollLeft - c.x - u.x,
    y: o.top + s.scrollTop - c.y - u.y,
    width: o.width,
    height: o.height,
  };
}
function fr(e) {
  return $(e).position === `static`;
}
function pr(e, t) {
  if (!Dn(e) || $(e).position === `fixed`) return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (Tn(e) === n && (n = n.ownerDocument.body), n);
}
function mr(e, t) {
  let n = Z(e);
  if (jn(e)) return n;
  if (!Dn(e)) {
    let t = Vn(e);
    for (; t && !zn(t); ) {
      if (Q(t) && !fr(t)) return t;
      t = Vn(t);
    }
    return n;
  }
  let r = pr(e, t);
  for (; r && An(r) && fr(r); ) r = pr(r, t);
  return r && zn(r) && fr(r) && !In(r) ? n : r || Ln(e) || n;
}
var hr = async function (e) {
  let t = this.getOffsetParent || mr,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: dr(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function gr(e) {
  return $(e).direction === `rtl`;
}
var _r = {
  convertOffsetParentRelativeRectToViewportRelativeRect: er,
  getDocumentElement: Tn,
  getClippingRect: lr,
  getOffsetParent: mr,
  getElementRects: hr,
  getClientRects: tr,
  getDimensions: ur,
  getScale: qn,
  isElement: Q,
  isRTL: gr,
};
function vr(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function yr(e, t) {
  let n = null,
    r,
    i = Tn(e);
  function a() {
    var e;
    (clearTimeout(r), (e = n) == null || e.disconnect(), (n = null));
  }
  function o(s, c) {
    (s === void 0 && (s = !1), c === void 0 && (c = 1), a());
    let l = e.getBoundingClientRect(),
      { left: u, top: d, width: f, height: p } = l;
    if ((s || t(), !f || !p)) return;
    let m = Lt(d),
      h = Lt(i.clientWidth - (u + f)),
      g = Lt(i.clientHeight - (d + p)),
      _ = Lt(u),
      v = {
        rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
        threshold: X(0, Ft(1, c)) || 1,
      },
      y = !0;
    function b(t) {
      let n = t[0].intersectionRatio;
      if (n !== c) {
        if (!y) return o();
        n
          ? o(!1, n)
          : (r = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      (n === 1 && !vr(l, e.getBoundingClientRect()) && o(), (y = !1));
    }
    try {
      n = new IntersectionObserver(b, { ...v, root: i.ownerDocument });
    } catch {
      n = new IntersectionObserver(b, v);
    }
    n.observe(e);
  }
  return (o(!0), a);
}
function br(e, t, n, r) {
  r === void 0 && (r = {});
  let {
      ancestorScroll: i = !0,
      ancestorResize: a = !0,
      elementResize: o = typeof ResizeObserver == `function`,
      layoutShift: s = typeof IntersectionObserver == `function`,
      animationFrame: c = !1,
    } = r,
    l = Kn(e),
    u = i || a ? [...(l ? Un(l) : []), ...(t ? Un(t) : [])] : [];
  u.forEach((e) => {
    (i && e.addEventListener(`scroll`, n, { passive: !0 }), a && e.addEventListener(`resize`, n));
  });
  let d = l && s ? yr(l, n) : null,
    f = -1,
    p = null;
  o &&
    ((p = new ResizeObserver((e) => {
      let [r] = e;
      (r &&
        r.target === l &&
        p &&
        t &&
        (p.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var e;
          (e = p) == null || e.observe(t);
        }))),
        n());
    })),
    l && !c && p.observe(l),
    t && p.observe(t));
  let m,
    h = c ? Zn(e) : null;
  c && g();
  function g() {
    let t = Zn(e);
    (h && !vr(h, t) && n(), (h = t), (m = requestAnimationFrame(g)));
  }
  return (
    n(),
    () => {
      var e;
      (u.forEach((e) => {
        (i && e.removeEventListener(`scroll`, n), a && e.removeEventListener(`resize`, n));
      }),
        d?.(),
        (e = p) == null || e.disconnect(),
        (p = null),
        c && cancelAnimationFrame(m));
    }
  );
}
var xr = yn,
  Sr = bn,
  Cr = pn,
  wr = Sn,
  Tr = gn,
  Er = fn,
  Dr = xn,
  Or = (e, t, n) => {
    let r = new Map(),
      i = { platform: _r, ...n },
      a = { ...i.platform, _c: r };
    return dn(e, t, { ...i, platform: a });
  },
  kr = typeof document < `u` ? J.useLayoutEffect : function () {};
function Ar(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == `function` && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == `object`) {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ar(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length)) return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0; ) {
      let n = i[r];
      if (!(n === `_owner` && e.$$typeof) && !Ar(e[n], t[n])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function jr(e) {
  return typeof window > `u` ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Mr(e, t) {
  let n = jr(e);
  return Math.round(t * n) / n;
}
function Nr(e) {
  let t = J.useRef(e);
  return (
    kr(() => {
      t.current = e;
    }),
    t
  );
}
function Pr(e) {
  e === void 0 && (e = {});
  let {
      placement: t = `bottom`,
      strategy: n = `absolute`,
      middleware: r = [],
      platform: i,
      elements: { reference: a, floating: o } = {},
      transform: s = !0,
      whileElementsMounted: c,
      open: l,
    } = e,
    [u, d] = J.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, p] = J.useState(r);
  Ar(f, r) || p(r);
  let [m, h] = J.useState(null),
    [g, _] = J.useState(null),
    v = J.useCallback((e) => {
      e !== S.current && ((S.current = e), h(e));
    }, []),
    y = J.useCallback((e) => {
      e !== C.current && ((C.current = e), _(e));
    }, []),
    b = a || m,
    x = o || g,
    S = J.useRef(null),
    C = J.useRef(null),
    w = J.useRef(u),
    T = c != null,
    E = Nr(c),
    D = Nr(i),
    O = Nr(l),
    k = J.useCallback(() => {
      if (!S.current || !C.current) return;
      let e = { placement: t, strategy: n, middleware: f };
      (D.current && (e.platform = D.current),
        Or(S.current, C.current, e).then((e) => {
          let t = { ...e, isPositioned: O.current !== !1 };
          A.current &&
            !Ar(w.current, t) &&
            ((w.current = t),
            kt.flushSync(() => {
              d(t);
            }));
        }));
    }, [f, t, n, D, O]);
  kr(() => {
    l === !1 &&
      w.current.isPositioned &&
      ((w.current.isPositioned = !1), d((e) => ({ ...e, isPositioned: !1 })));
  }, [l]);
  let A = J.useRef(!1);
  (kr(
    () => (
      (A.current = !0),
      () => {
        A.current = !1;
      }
    ),
    [],
  ),
    kr(() => {
      if ((b && (S.current = b), x && (C.current = x), b && x)) {
        if (E.current) return E.current(b, x, k);
        k();
      }
    }, [b, x, k, E, T]));
  let j = J.useMemo(() => ({ reference: S, floating: C, setReference: v, setFloating: y }), [v, y]),
    M = J.useMemo(() => ({ reference: b, floating: x }), [b, x]),
    N = J.useMemo(() => {
      let e = { position: n, left: 0, top: 0 };
      if (!M.floating) return e;
      let t = Mr(M.floating, u.x),
        r = Mr(M.floating, u.y);
      return s
        ? {
            ...e,
            transform: `translate(` + t + `px, ` + r + `px)`,
            ...(jr(M.floating) >= 1.5 && { willChange: `transform` }),
          }
        : { position: n, left: t, top: r };
    }, [n, s, M.floating, u.x, u.y]);
  return J.useMemo(
    () => ({ ...u, update: k, refs: j, elements: M, floatingStyles: N }),
    [u, k, j, M, N],
  );
}
var Fr = (e) => {
    function t(e) {
      return {}.hasOwnProperty.call(e, `current`);
    }
    return {
      name: `arrow`,
      options: e,
      fn(n) {
        let { element: r, padding: i } = typeof e == `function` ? e(n) : e;
        return r && t(r)
          ? r.current == null
            ? {}
            : Er({ element: r.current, padding: i }).fn(n)
          : r
            ? Er({ element: r, padding: i }).fn(n)
            : {};
      },
    };
  },
  Ir = (e, t) => {
    let n = xr(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Lr = (e, t) => {
    let n = Sr(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Rr = (e, t) => ({ fn: Dr(e).fn, options: [e, t] }),
  zr = (e, t) => {
    let n = Cr(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Br = (e, t) => {
    let n = wr(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Vr = (e, t) => {
    let n = Tr(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Hr = (e, t) => {
    let n = Fr(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Ur = `Arrow`,
  Wr = J.forwardRef((e, t) => {
    let { children: n, width: r = 10, height: i = 5, ...a } = e;
    return (0, Y.jsx)(u.svg, {
      ...a,
      ref: t,
      width: r,
      height: i,
      viewBox: `0 0 30 10`,
      preserveAspectRatio: `none`,
      children: e.asChild ? n : (0, Y.jsx)(`polygon`, { points: `0,0 30,0 15,10` }),
    });
  });
Wr.displayName = Ur;
var Gr = Wr;
function Kr(e) {
  let [t, n] = J.useState(void 0);
  return (
    S(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        let t = new ResizeObserver((t) => {
          if (!Array.isArray(t) || !t.length) return;
          let r = t[0],
            i,
            a;
          if (`borderBoxSize` in r) {
            let e = r.borderBoxSize,
              t = Array.isArray(e) ? e[0] : e;
            ((i = t.inlineSize), (a = t.blockSize));
          } else ((i = e.offsetWidth), (a = e.offsetHeight));
          n({ width: i, height: a });
        });
        return (t.observe(e, { box: `border-box` }), () => t.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var qr = `Popper`,
  [Jr, Yr] = _(qr),
  [Xr, Zr] = Jr(qr),
  Qr = (e) => {
    let { __scopePopper: t, children: n } = e,
      [r, i] = J.useState(null),
      [a, o] = J.useState(void 0);
    return (0, Y.jsx)(Xr, {
      scope: t,
      anchor: r,
      onAnchorChange: i,
      placementState: a,
      setPlacementState: o,
      children: n,
    });
  };
Qr.displayName = qr;
var $r = `PopperAnchor`,
  ei = J.forwardRef((e, t) => {
    let { __scopePopper: n, virtualRef: i, ...a } = e,
      o = Zr($r, n),
      s = J.useRef(null),
      c = o.onAnchorChange,
      l = r(
        t,
        J.useCallback(
          (e) => {
            ((s.current = e), e && c(e));
          },
          [c],
        ),
      ),
      d = J.useRef(null);
    J.useEffect(() => {
      if (!i) return;
      let e = d.current;
      ((d.current = i.current), e !== d.current && c(d.current));
    });
    let f = o.placementState && ui(o.placementState),
      p = f?.[0],
      m = f?.[1];
    return i
      ? null
      : (0, Y.jsx)(u.div, {
          "data-radix-popper-side": p,
          "data-radix-popper-align": m,
          ...a,
          ref: l,
        });
  });
ei.displayName = $r;
var ti = `PopperContent`,
  [ni, ri] = Jr(ti),
  ii = J.forwardRef((e, t) => {
    let {
        __scopePopper: n,
        side: i = `bottom`,
        sideOffset: a = 0,
        align: o = `center`,
        alignOffset: s = 0,
        arrowPadding: c = 0,
        avoidCollisions: l = !0,
        collisionBoundary: d = [],
        collisionPadding: f = 0,
        sticky: p = `partial`,
        hideWhenDetached: m = !1,
        updatePositionStrategy: h = `optimized`,
        onPlaced: g,
        ..._
      } = e,
      v = Zr(ti, n),
      [y, b] = J.useState(null),
      x = r(t, (e) => b(e)),
      [C, w] = J.useState(null),
      T = Kr(C),
      E = T?.width ?? 0,
      O = T?.height ?? 0,
      k = i + (o === `center` ? `` : `-` + o),
      A = typeof f == `number` ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f },
      j = Array.isArray(d) ? d : [d],
      M = j.length > 0,
      N = { padding: A, boundary: j.filter(ci), altBoundary: M },
      {
        refs: ee,
        floatingStyles: te,
        placement: ne,
        isPositioned: re,
        middlewareData: P,
      } = Pr({
        strategy: `fixed`,
        placement: k,
        whileElementsMounted: (...e) => br(...e, { animationFrame: h === `always` }),
        elements: { reference: v.anchor },
        middleware: [
          Ir({ mainAxis: a + O, alignmentAxis: s }),
          l && Lr({ mainAxis: !0, crossAxis: !1, limiter: p === `partial` ? Rr() : void 0, ...N }),
          l && zr({ ...N }),
          Br({
            ...N,
            apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
              let { width: i, height: a } = t.reference,
                o = e.floating.style;
              (o.setProperty(`--radix-popper-available-width`, `${n}px`),
                o.setProperty(`--radix-popper-available-height`, `${r}px`),
                o.setProperty(`--radix-popper-anchor-width`, `${i}px`),
                o.setProperty(`--radix-popper-anchor-height`, `${a}px`));
            },
          }),
          C && Hr({ element: C, padding: c }),
          li({ arrowWidth: E, arrowHeight: O }),
          m && Vr({ strategy: `referenceHidden`, ...N, boundary: M ? N.boundary : void 0 }),
        ],
      }),
      ie = v.setPlacementState;
    S(
      () => (
        ie(ne),
        () => {
          ie(void 0);
        }
      ),
      [ne, ie],
    );
    let [F, I] = ui(ne),
      L = D(g);
    S(() => {
      re && L?.();
    }, [re, L]);
    let R = P.arrow?.x,
      ae = P.arrow?.y,
      oe = P.arrow?.centerOffset !== 0,
      [se, ce] = J.useState();
    return (
      S(() => {
        y && ce(window.getComputedStyle(y).zIndex);
      }, [y]),
      (0, Y.jsx)(`div`, {
        ref: ee.setFloating,
        "data-radix-popper-content-wrapper": ``,
        style: {
          ...te,
          transform: re ? te.transform : `translate(0, -200%)`,
          minWidth: `max-content`,
          zIndex: se,
          "--radix-popper-transform-origin": [P.transformOrigin?.x, P.transformOrigin?.y].join(` `),
          ...(P.hide?.referenceHidden && { visibility: `hidden`, pointerEvents: `none` }),
        },
        dir: e.dir,
        children: (0, Y.jsx)(ni, {
          scope: n,
          placedSide: F,
          placedAlign: I,
          onArrowChange: w,
          arrowX: R,
          arrowY: ae,
          shouldHideArrow: oe,
          children: (0, Y.jsx)(u.div, {
            "data-side": F,
            "data-align": I,
            ..._,
            ref: x,
            style: { ..._.style, animation: re ? void 0 : `none` },
          }),
        }),
      })
    );
  });
ii.displayName = ti;
var ai = `PopperArrow`,
  oi = { top: `bottom`, right: `left`, bottom: `top`, left: `right` },
  si = J.forwardRef(function (e, t) {
    let { __scopePopper: n, ...r } = e,
      i = ri(ai, n),
      a = oi[i.placedSide];
    return (0, Y.jsx)(`span`, {
      ref: i.onArrowChange,
      style: {
        position: `absolute`,
        left: i.arrowX,
        top: i.arrowY,
        [a]: 0,
        transformOrigin: { top: ``, right: `0 0`, bottom: `center 0`, left: `100% 0` }[
          i.placedSide
        ],
        transform: {
          top: `translateY(100%)`,
          right: `translateY(50%) rotate(90deg) translateX(-50%)`,
          bottom: `rotate(180deg)`,
          left: `translateY(50%) rotate(-90deg) translateX(50%)`,
        }[i.placedSide],
        visibility: i.shouldHideArrow ? `hidden` : void 0,
      },
      children: (0, Y.jsx)(Gr, { ...r, ref: t, style: { ...r.style, display: `block` } }),
    });
  });
si.displayName = ai;
function ci(e) {
  return e !== null;
}
var li = (e) => ({
  name: `transformOrigin`,
  options: e,
  fn(t) {
    let { placement: n, rects: r, middlewareData: i } = t,
      a = i.arrow?.centerOffset !== 0,
      o = a ? 0 : e.arrowWidth,
      s = a ? 0 : e.arrowHeight,
      [c, l] = ui(n),
      u = { start: `0%`, center: `50%`, end: `100%` }[l],
      d = (i.arrow?.x ?? 0) + o / 2,
      f = (i.arrow?.y ?? 0) + s / 2,
      p = ``,
      m = ``;
    return (
      c === `bottom`
        ? ((p = a ? u : `${d}px`), (m = `${-s}px`))
        : c === `top`
          ? ((p = a ? u : `${d}px`), (m = `${r.floating.height + s}px`))
          : c === `right`
            ? ((p = `${-s}px`), (m = a ? u : `${f}px`))
            : c === `left` && ((p = `${r.floating.width + s}px`), (m = a ? u : `${f}px`)),
      { data: { x: p, y: m } }
    );
  },
});
function ui(e) {
  let [t, n = `center`] = e.split(`-`);
  return [t, n];
}
var di = Qr,
  fi = ei,
  pi = ii,
  mi = si;
function hi(e) {
  let t = J.useRef({ value: e, previous: e });
  return J.useMemo(
    () => (
      t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
var gi = Object.freeze({
    position: `absolute`,
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: `hidden`,
    clip: `rect(0, 0, 0, 0)`,
    whiteSpace: `nowrap`,
    wordWrap: `normal`,
  }),
  _i = `VisuallyHidden`,
  vi = J.forwardRef((e, t) => (0, Y.jsx)(u.span, { ...e, ref: t, style: { ...gi, ...e.style } }));
vi.displayName = _i;
var yi = [` `, `Enter`, `ArrowUp`, `ArrowDown`],
  bi = [` `, `Enter`],
  xi = `Select`,
  [Si, Ci, wi] = jt(xi),
  [Ti, Ei] = _(xi, [wi, Yr]),
  Di = Yr(),
  [Oi, ki] = Ti(xi),
  [Ai, ji] = Ti(xi),
  Mi = `SelectProvider`;
function Ni(e) {
  let {
      __scopeSelect: t,
      children: n,
      open: r,
      defaultOpen: i,
      onOpenChange: a,
      value: o,
      defaultValue: s,
      onValueChange: c,
      dir: l,
      name: u,
      autoComplete: d,
      disabled: f,
      required: p,
      form: m,
      internal_do_not_use_render: h,
    } = e,
    g = Di(t),
    [_, v] = J.useState(null),
    [y, b] = J.useState(null),
    [x, S] = J.useState(!1),
    w = Nt(l),
    [E, D] = T({ prop: r, defaultProp: i ?? !1, onChange: a, caller: xi }),
    [O, k] = T({ prop: o, defaultProp: s, onChange: c, caller: xi }),
    A = J.useRef(null),
    j = _ ? !!m || !!_.closest(`form`) : !0,
    [M, N] = J.useState(new Set()),
    ee = C(),
    te = Array.from(M)
      .map((e) => e.props.value)
      .join(`;`),
    ne = J.useCallback((e) => {
      N((t) => new Set(t).add(e));
    }, []),
    re = J.useCallback((e) => {
      N((t) => {
        let n = new Set(t);
        return (n.delete(e), n);
      });
    }, []),
    P = {
      required: p,
      trigger: _,
      onTriggerChange: v,
      valueNode: y,
      onValueNodeChange: b,
      valueNodeHasChildren: x,
      onValueNodeHasChildrenChange: S,
      contentId: ee,
      value: O,
      onValueChange: k,
      open: E,
      onOpenChange: D,
      dir: w,
      triggerPointerDownPosRef: A,
      disabled: f,
      name: u,
      autoComplete: d,
      form: m,
      nativeOptions: M,
      nativeSelectKey: te,
      isFormControl: j,
    };
  return (0, Y.jsx)(di, {
    ...g,
    children: (0, Y.jsx)(Oi, {
      scope: t,
      ...P,
      children: (0, Y.jsx)(Si.Provider, {
        scope: t,
        children: (0, Y.jsx)(Ai, {
          scope: t,
          onNativeOptionAdd: ne,
          onNativeOptionRemove: re,
          children: Na(h) ? h(P) : n,
        }),
      }),
    }),
  });
}
Ni.displayName = Mi;
var Pi = (e) => {
  let { __scopeSelect: t, children: n, ...r } = e;
  return (0, Y.jsx)(Ni, {
    __scopeSelect: t,
    ...r,
    internal_do_not_use_render: ({ isFormControl: e }) =>
      (0, Y.jsxs)(Y.Fragment, { children: [n, e ? (0, Y.jsx)(Ma, { __scopeSelect: t }) : null] }),
  });
};
Pi.displayName = xi;
var Fi = `SelectTrigger`,
  Ii = J.forwardRef((e, t) => {
    let { __scopeSelect: n, disabled: i = !1, ...a } = e,
      o = Di(n),
      s = ki(Fi, n),
      c = s.disabled || i,
      l = r(t, s.onTriggerChange),
      d = Ci(n),
      f = J.useRef(`touch`),
      [p, m, h] = Fa((e) => {
        let t = d().filter((e) => !e.disabled),
          n = Ia(
            t,
            e,
            t.find((e) => e.value === s.value),
          );
        n !== void 0 && s.onValueChange(n.value);
      }),
      g = (e) => {
        (c || (s.onOpenChange(!0), h()),
          e &&
            (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY),
            }));
      };
    return (0, Y.jsx)(fi, {
      asChild: !0,
      ...o,
      children: (0, Y.jsx)(u.button, {
        type: `button`,
        role: `combobox`,
        "aria-controls": s.open ? s.contentId : void 0,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": `none`,
        dir: s.dir,
        "data-state": s.open ? `open` : `closed`,
        disabled: c,
        "data-disabled": c ? `` : void 0,
        "data-placeholder": Pa(s.value) ? `` : void 0,
        ...a,
        ref: l,
        onClick: A(a.onClick, (e) => {
          (e.currentTarget.focus(), f.current !== `mouse` && g(e));
        }),
        onPointerDown: A(a.onPointerDown, (e) => {
          f.current = e.pointerType;
          let t = e.target;
          (t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId),
            e.button === 0 &&
              e.ctrlKey === !1 &&
              e.pointerType === `mouse` &&
              (g(e), e.preventDefault()));
        }),
        onKeyDown: A(a.onKeyDown, (e) => {
          let t = p.current !== ``;
          (!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && m(e.key),
            !(t && e.key === ` `) && yi.includes(e.key) && (g(), e.preventDefault()));
        }),
      }),
    });
  });
Ii.displayName = Fi;
var Li = `SelectValue`,
  Ri = J.forwardRef((e, t) => {
    let { __scopeSelect: n, className: i, style: a, children: o, placeholder: s = ``, ...c } = e,
      l = ki(Li, n),
      { onValueNodeHasChildrenChange: d } = l,
      f = o !== void 0,
      p = r(t, l.onValueNodeChange);
    S(() => {
      d(f);
    }, [d, f]);
    let m = Pa(l.value);
    return (0, Y.jsx)(u.span, {
      ...c,
      asChild: m ? !1 : c.asChild,
      ref: p,
      style: { pointerEvents: `none` },
      children: (0, Y.jsx)(J.Fragment, { children: m ? s : o }, m ? `placeholder` : `value`),
    });
  });
Ri.displayName = Li;
var zi = `SelectIcon`,
  Bi = J.forwardRef((e, t) => {
    let { __scopeSelect: n, children: r, ...i } = e;
    return (0, Y.jsx)(u.span, { "aria-hidden": !0, ...i, ref: t, children: r || `▼` });
  });
Bi.displayName = zi;
var Vi = `SelectPortal`,
  [Hi, Ui] = Ti(Vi, { forceMount: void 0 }),
  Wi = (e) => {
    let { __scopeSelect: t, forceMount: n, ...r } = e;
    return (0, Y.jsx)(Hi, {
      scope: e.__scopeSelect,
      forceMount: n,
      children: (0, Y.jsx)(k, { asChild: !0, ...r }),
    });
  };
Wi.displayName = Vi;
var Gi = `SelectContent`,
  Ki = J.forwardRef((e, t) => {
    let n = Ui(Gi, e.__scopeSelect),
      { forceMount: r = n.forceMount, ...i } = e,
      a = ki(Gi, e.__scopeSelect),
      [o, s] = J.useState();
    return (
      S(() => {
        s(new DocumentFragment());
      }, []),
      (0, Y.jsx)(w, {
        present: r || a.open,
        children: ({ present: e }) =>
          e ? (0, Y.jsx)($i, { ...i, ref: t }) : (0, Y.jsx)(qi, { ...i, fragment: o }),
      })
    );
  });
Ki.displayName = Gi;
var qi = J.forwardRef((e, t) => {
  let { __scopeSelect: n, children: r, fragment: i } = e;
  return i
    ? kt.createPortal(
        (0, Y.jsx)(Yi, {
          scope: n,
          children: (0, Y.jsx)(Si.Slot, {
            scope: n,
            children: (0, Y.jsx)(`div`, { ref: t, children: r }),
          }),
        }),
        i,
      )
    : null;
});
qi.displayName = `SelectContentFragment`;
var Ji = 10,
  [Yi, Xi] = Ti(Gi),
  Zi = `SelectContentImpl`,
  Qi = i(`SelectContent.RemoveScroll`),
  $i = J.forwardRef((e, t) => {
    let { __scopeSelect: n } = e,
      {
        position: i = `item-aligned`,
        onCloseAutoFocus: a,
        onEscapeKeyDown: o,
        onPointerDownOutside: s,
        side: c,
        sideOffset: l,
        align: u,
        alignOffset: d,
        arrowPadding: f,
        collisionBoundary: p,
        collisionPadding: m,
        sticky: h,
        hideWhenDetached: g,
        avoidCollisions: _,
        ...v
      } = e,
      S = ki(Gi, n),
      [C, w] = J.useState(null),
      [T, D] = J.useState(null),
      k = r(t, (e) => w(e)),
      [j, M] = J.useState(null),
      [N, ee] = J.useState(null),
      te = Ci(n),
      [ne, re] = J.useState(!1),
      P = J.useRef(!1);
    (J.useEffect(() => {
      if (C) return E(C);
    }, [C]),
      y());
    let ie = J.useCallback(
        (e) => {
          let [t, ...n] = te().map((e) => e.ref.current),
            [r] = n.slice(-1),
            i = document.activeElement;
          for (let n of e)
            if (
              n === i ||
              (n?.scrollIntoView({ block: `nearest` }),
              n === t && T && (T.scrollTop = 0),
              n === r && T && (T.scrollTop = T.scrollHeight),
              n?.focus(),
              document.activeElement !== i)
            )
              return;
        },
        [te, T],
      ),
      F = J.useCallback(() => ie([j, C]), [ie, j, C]);
    J.useEffect(() => {
      ne && F();
    }, [ne, F]);
    let { onOpenChange: I, triggerPointerDownPosRef: L } = S;
    (J.useEffect(() => {
      if (C) {
        let e = { x: 0, y: 0 },
          t = (t) => {
            e = {
              x: Math.abs(Math.round(t.pageX) - (L.current?.x ?? 0)),
              y: Math.abs(Math.round(t.pageY) - (L.current?.y ?? 0)),
            };
          },
          n = (n) => {
            (e.x <= 10 && e.y <= 10 ? n.preventDefault() : n.composedPath().includes(C) || I(!1),
              document.removeEventListener(`pointermove`, t),
              (L.current = null));
          };
        return (
          L.current !== null &&
            (document.addEventListener(`pointermove`, t),
            document.addEventListener(`pointerup`, n, { capture: !0, once: !0 })),
          () => {
            (document.removeEventListener(`pointermove`, t),
              document.removeEventListener(`pointerup`, n, { capture: !0 }));
          }
        );
      }
    }, [C, I, L]),
      J.useEffect(() => {
        let e = () => I(!1);
        return (
          window.addEventListener(`blur`, e),
          window.addEventListener(`resize`, e),
          () => {
            (window.removeEventListener(`blur`, e), window.removeEventListener(`resize`, e));
          }
        );
      }, [I]));
    let [R, ae] = Fa((e) => {
        let t = te().filter((e) => !e.disabled),
          n = Ia(
            t,
            e,
            t.find((e) => e.ref.current === document.activeElement),
          );
        n && setTimeout(() => n.ref.current?.focus());
      }),
      oe = J.useCallback(
        (e, t, n) => {
          let r = !P.current && !n;
          ((S.value !== void 0 && S.value === t) || r) && (M(e), r && (P.current = !0));
        },
        [S.value],
      ),
      se = J.useCallback(() => C?.focus(), [C]),
      ce = J.useCallback(
        (e, t, n) => {
          let r = !P.current && !n;
          ((S.value !== void 0 && S.value === t) || r) && ee(e);
        },
        [S.value],
      ),
      z = i === `popper` ? ra : ta,
      B =
        z === ra
          ? {
              side: c,
              sideOffset: l,
              align: u,
              alignOffset: d,
              arrowPadding: f,
              collisionBoundary: p,
              collisionPadding: m,
              sticky: h,
              hideWhenDetached: g,
              avoidCollisions: _,
            }
          : {};
    return (0, Y.jsx)(Yi, {
      scope: n,
      content: C,
      viewport: T,
      onViewportChange: D,
      itemRefCallback: oe,
      selectedItem: j,
      onItemLeave: se,
      itemTextRefCallback: ce,
      focusSelectedItem: F,
      selectedItemText: N,
      position: i,
      isPositioned: ne,
      searchRef: R,
      children: (0, Y.jsx)(O, {
        as: Qi,
        allowPinchZoom: !0,
        children: (0, Y.jsx)(b, {
          asChild: !0,
          trapped: S.open,
          onMountAutoFocus: (e) => {
            e.preventDefault();
          },
          onUnmountAutoFocus: A(a, (e) => {
            (S.trigger?.focus({ preventScroll: !0 }), e.preventDefault());
          }),
          children: (0, Y.jsx)(x, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: o,
            onPointerDownOutside: s,
            onFocusOutside: (e) => e.preventDefault(),
            onDismiss: () => S.onOpenChange(!1),
            children: (0, Y.jsx)(z, {
              role: `listbox`,
              id: S.contentId,
              "data-state": S.open ? `open` : `closed`,
              dir: S.dir,
              onContextMenu: (e) => e.preventDefault(),
              ...v,
              ...B,
              onPlaced: () => re(!0),
              ref: k,
              style: { display: `flex`, flexDirection: `column`, outline: `none`, ...v.style },
              onKeyDown: A(v.onKeyDown, (e) => {
                let t = e.ctrlKey || e.altKey || e.metaKey;
                if (
                  (e.key === `Tab` && e.preventDefault(),
                  !t && e.key.length === 1 && ae(e.key),
                  [`ArrowUp`, `ArrowDown`, `Home`, `End`].includes(e.key))
                ) {
                  let t = te()
                    .filter((e) => !e.disabled)
                    .map((e) => e.ref.current);
                  if (
                    ([`ArrowUp`, `End`].includes(e.key) && (t = t.slice().reverse()),
                    [`ArrowUp`, `ArrowDown`].includes(e.key))
                  ) {
                    let n = e.target,
                      r = t.indexOf(n);
                    t = t.slice(r + 1);
                  }
                  (setTimeout(() => ie(t)), e.preventDefault());
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
$i.displayName = Zi;
var ea = `SelectItemAlignedPosition`,
  ta = J.forwardRef((e, t) => {
    let { __scopeSelect: n, onPlaced: i, ...a } = e,
      o = ki(Gi, n),
      s = Xi(Gi, n),
      [c, l] = J.useState(null),
      [d, f] = J.useState(null),
      p = r(t, (e) => f(e)),
      m = Ci(n),
      h = J.useRef(!1),
      g = J.useRef(!0),
      { viewport: _, selectedItem: v, selectedItemText: y, focusSelectedItem: b } = s,
      x = J.useCallback(() => {
        if (o.trigger && o.valueNode && c && d && _ && v && y) {
          let e = o.trigger.getBoundingClientRect(),
            t = d.getBoundingClientRect(),
            n = o.valueNode.getBoundingClientRect(),
            r = y.getBoundingClientRect();
          if (o.dir !== `rtl`) {
            let i = r.left - t.left,
              a = n.left - i,
              o = e.left - a,
              s = e.width + o,
              l = Math.max(s, t.width),
              u = window.innerWidth - Ji,
              d = At(a, [Ji, Math.max(Ji, u - l)]);
            ((c.style.minWidth = s + `px`), (c.style.left = d + `px`));
          } else {
            let i = t.right - r.right,
              a = window.innerWidth - n.right - i,
              o = window.innerWidth - e.right - a,
              s = e.width + o,
              l = Math.max(s, t.width),
              u = window.innerWidth - Ji,
              d = At(a, [Ji, Math.max(Ji, u - l)]);
            ((c.style.minWidth = s + `px`), (c.style.right = d + `px`));
          }
          let a = m(),
            s = window.innerHeight - Ji * 2,
            l = _.scrollHeight,
            u = window.getComputedStyle(d),
            f = parseInt(u.borderTopWidth, 10),
            p = parseInt(u.paddingTop, 10),
            g = parseInt(u.borderBottomWidth, 10),
            b = parseInt(u.paddingBottom, 10),
            x = f + p + l + b + g,
            S = Math.min(v.offsetHeight * 5, x),
            C = window.getComputedStyle(_),
            w = parseInt(C.paddingTop, 10),
            T = parseInt(C.paddingBottom, 10),
            E = e.top + e.height / 2 - Ji,
            D = s - E,
            O = v.offsetHeight / 2,
            k = v.offsetTop + O,
            A = f + p + k,
            j = x - A;
          if (A <= E) {
            let e = a.length > 0 && v === a[a.length - 1].ref.current;
            c.style.bottom = `0px`;
            let t = d.clientHeight - _.offsetTop - _.offsetHeight,
              n = A + Math.max(D, O + (e ? T : 0) + t + g);
            c.style.height = n + `px`;
          } else {
            let e = a.length > 0 && v === a[0].ref.current;
            c.style.top = `0px`;
            let t = Math.max(E, f + _.offsetTop + (e ? w : 0) + O) + j;
            ((c.style.height = t + `px`), (_.scrollTop = A - E + _.offsetTop));
          }
          ((c.style.margin = `${Ji}px 0`),
            (c.style.minHeight = S + `px`),
            (c.style.maxHeight = s + `px`),
            i?.(),
            requestAnimationFrame(() => (h.current = !0)));
        }
      }, [m, o.trigger, o.valueNode, c, d, _, v, y, o.dir, i]);
    S(() => x(), [x]);
    let [C, w] = J.useState();
    return (
      S(() => {
        d && w(window.getComputedStyle(d).zIndex);
      }, [d]),
      (0, Y.jsx)(ia, {
        scope: n,
        contentWrapper: c,
        shouldExpandOnScrollRef: h,
        onScrollButtonChange: J.useCallback(
          (e) => {
            e && g.current === !0 && (x(), b?.(), (g.current = !1));
          },
          [x, b],
        ),
        children: (0, Y.jsx)(`div`, {
          ref: l,
          style: { display: `flex`, flexDirection: `column`, position: `fixed`, zIndex: C },
          children: (0, Y.jsx)(u.div, {
            ...a,
            ref: p,
            style: { boxSizing: `border-box`, maxHeight: `100%`, ...a.style },
          }),
        }),
      })
    );
  });
ta.displayName = ea;
var na = `SelectPopperPosition`,
  ra = J.forwardRef((e, t) => {
    let { __scopeSelect: n, align: r = `start`, collisionPadding: i = Ji, ...a } = e,
      o = Di(n);
    return (0, Y.jsx)(pi, {
      ...o,
      ...a,
      ref: t,
      align: r,
      collisionPadding: i,
      style: {
        boxSizing: `border-box`,
        ...a.style,
        "--radix-select-content-transform-origin": `var(--radix-popper-transform-origin)`,
        "--radix-select-content-available-width": `var(--radix-popper-available-width)`,
        "--radix-select-content-available-height": `var(--radix-popper-available-height)`,
        "--radix-select-trigger-width": `var(--radix-popper-anchor-width)`,
        "--radix-select-trigger-height": `var(--radix-popper-anchor-height)`,
      },
    });
  });
ra.displayName = na;
var [ia, aa] = Ti(Gi, {}),
  oa = `SelectViewport`,
  sa = J.forwardRef((e, t) => {
    let { __scopeSelect: n, nonce: i, ...a } = e,
      o = Xi(oa, n),
      s = aa(oa, n),
      c = r(t, o.onViewportChange),
      l = J.useRef(0);
    return (0, Y.jsxs)(Y.Fragment, {
      children: [
        (0, Y.jsx)(`style`, {
          dangerouslySetInnerHTML: {
            __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`,
          },
          nonce: i,
        }),
        (0, Y.jsx)(Si.Slot, {
          scope: n,
          children: (0, Y.jsx)(u.div, {
            "data-radix-select-viewport": ``,
            role: `presentation`,
            ...a,
            ref: c,
            style: { position: `relative`, flex: 1, overflow: `hidden auto`, ...a.style },
            onScroll: A(a.onScroll, (e) => {
              let t = e.currentTarget,
                { contentWrapper: n, shouldExpandOnScrollRef: r } = s;
              if (r?.current && n) {
                let e = Math.abs(l.current - t.scrollTop);
                if (e > 0) {
                  let r = window.innerHeight - Ji * 2,
                    i = parseFloat(n.style.minHeight),
                    a = parseFloat(n.style.height),
                    o = Math.max(i, a);
                  if (o < r) {
                    let i = o + e,
                      a = Math.min(r, i),
                      s = i - a;
                    ((n.style.height = a + `px`),
                      n.style.bottom === `0px` &&
                        ((t.scrollTop = s > 0 ? s : 0), (n.style.justifyContent = `flex-end`)));
                  }
                }
              }
              l.current = t.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
sa.displayName = oa;
var ca = `SelectGroup`,
  [la, ua] = Ti(ca),
  da = J.forwardRef((e, t) => {
    let { __scopeSelect: n, ...r } = e,
      i = C();
    return (0, Y.jsx)(la, {
      scope: n,
      id: i,
      children: (0, Y.jsx)(u.div, { role: `group`, "aria-labelledby": i, ...r, ref: t }),
    });
  });
da.displayName = ca;
var fa = `SelectLabel`,
  pa = J.forwardRef((e, t) => {
    let { __scopeSelect: n, ...r } = e,
      i = ua(fa, n);
    return (0, Y.jsx)(u.div, { id: i.id, ...r, ref: t });
  });
pa.displayName = fa;
var ma = `SelectItem`,
  [ha, ga] = Ti(ma),
  _a = J.forwardRef((e, t) => {
    let { __scopeSelect: n, value: i, disabled: a = !1, textValue: o, ...s } = e,
      c = ki(ma, n),
      l = Xi(ma, n),
      d = c.value === i,
      [f, p] = J.useState(o ?? ``),
      [m, h] = J.useState(!1),
      g = r(t, (e) => l.itemRefCallback?.(e, i, a)),
      _ = C(),
      v = J.useRef(`touch`),
      y = () => {
        a || (c.onValueChange(i), c.onOpenChange(!1));
      };
    return (0, Y.jsx)(ha, {
      scope: n,
      value: i,
      disabled: a,
      textId: _,
      isSelected: d,
      onItemTextChange: J.useCallback((e) => {
        p((t) => t || (e?.textContent ?? ``).trim());
      }, []),
      children: (0, Y.jsx)(Si.ItemSlot, {
        scope: n,
        value: i,
        disabled: a,
        textValue: f,
        children: (0, Y.jsx)(u.div, {
          role: `option`,
          "aria-labelledby": _,
          "data-highlighted": m ? `` : void 0,
          "aria-selected": d && m,
          "data-state": d ? `checked` : `unchecked`,
          "aria-disabled": a || void 0,
          "data-disabled": a ? `` : void 0,
          tabIndex: a ? void 0 : -1,
          ...s,
          ref: g,
          onFocus: A(s.onFocus, () => h(!0)),
          onBlur: A(s.onBlur, () => h(!1)),
          onClick: A(s.onClick, () => {
            v.current !== `mouse` && y();
          }),
          onPointerUp: A(s.onPointerUp, () => {
            v.current === `mouse` && y();
          }),
          onPointerDown: A(s.onPointerDown, (e) => {
            v.current = e.pointerType;
          }),
          onPointerMove: A(s.onPointerMove, (e) => {
            ((v.current = e.pointerType),
              a
                ? l.onItemLeave?.()
                : v.current === `mouse` && e.currentTarget.focus({ preventScroll: !0 }));
          }),
          onPointerLeave: A(s.onPointerLeave, (e) => {
            e.currentTarget === document.activeElement && l.onItemLeave?.();
          }),
          onKeyDown: A(s.onKeyDown, (e) => {
            (l.searchRef?.current !== `` && e.key === ` `) ||
              (bi.includes(e.key) && y(), e.key === ` ` && e.preventDefault());
          }),
        }),
      }),
    });
  });
_a.displayName = ma;
var va = `SelectItemText`,
  ya = J.forwardRef((e, t) => {
    let { __scopeSelect: n, className: i, style: a, ...o } = e,
      s = ki(va, n),
      c = Xi(va, n),
      l = ga(va, n),
      d = ji(va, n),
      [f, p] = J.useState(null),
      m = r(
        t,
        (e) => p(e),
        l.onItemTextChange,
        (e) => c.itemTextRefCallback?.(e, l.value, l.disabled),
      ),
      h = f?.textContent,
      g = J.useMemo(
        () => (0, Y.jsx)(`option`, { value: l.value, disabled: l.disabled, children: h }, l.value),
        [l.disabled, l.value, h],
      ),
      { onNativeOptionAdd: _, onNativeOptionRemove: v } = d;
    return (
      S(() => (_(g), () => v(g)), [_, v, g]),
      (0, Y.jsxs)(Y.Fragment, {
        children: [
          (0, Y.jsx)(u.span, { id: l.textId, ...o, ref: m }),
          l.isSelected && s.valueNode && !s.valueNodeHasChildren && !Pa(s.value)
            ? kt.createPortal(o.children, s.valueNode)
            : null,
        ],
      })
    );
  });
ya.displayName = va;
var ba = `SelectItemIndicator`,
  xa = J.forwardRef((e, t) => {
    let { __scopeSelect: n, ...r } = e;
    return ga(ba, n).isSelected ? (0, Y.jsx)(u.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  });
xa.displayName = ba;
var Sa = `SelectScrollUpButton`,
  Ca = J.forwardRef((e, t) => {
    let n = Xi(Sa, e.__scopeSelect),
      i = aa(Sa, e.__scopeSelect),
      [a, o] = J.useState(!1),
      s = r(t, i.onScrollButtonChange);
    return (
      S(() => {
        if (n.viewport && n.isPositioned) {
          let e = function () {
              o(t.scrollTop > 0);
            },
            t = n.viewport;
          return (e(), t.addEventListener(`scroll`, e), () => t.removeEventListener(`scroll`, e));
        }
      }, [n.viewport, n.isPositioned]),
      a
        ? (0, Y.jsx)(Ea, {
            ...e,
            ref: s,
            onAutoScroll: () => {
              let { viewport: e, selectedItem: t } = n;
              e && t && (e.scrollTop -= t.offsetHeight);
            },
          })
        : null
    );
  });
Ca.displayName = Sa;
var wa = `SelectScrollDownButton`,
  Ta = J.forwardRef((e, t) => {
    let n = Xi(wa, e.__scopeSelect),
      i = aa(wa, e.__scopeSelect),
      [a, o] = J.useState(!1),
      s = r(t, i.onScrollButtonChange);
    return (
      S(() => {
        if (n.viewport && n.isPositioned) {
          let e = function () {
              let e = t.scrollHeight - t.clientHeight;
              o(Math.ceil(t.scrollTop) < e);
            },
            t = n.viewport;
          return (e(), t.addEventListener(`scroll`, e), () => t.removeEventListener(`scroll`, e));
        }
      }, [n.viewport, n.isPositioned]),
      a
        ? (0, Y.jsx)(Ea, {
            ...e,
            ref: s,
            onAutoScroll: () => {
              let { viewport: e, selectedItem: t } = n;
              e && t && (e.scrollTop += t.offsetHeight);
            },
          })
        : null
    );
  });
Ta.displayName = wa;
var Ea = J.forwardRef((e, t) => {
    let { __scopeSelect: n, onAutoScroll: r, ...i } = e,
      a = Xi(`SelectScrollButton`, n),
      o = J.useRef(null),
      s = Ci(n),
      c = J.useCallback(() => {
        o.current !== null && (window.clearInterval(o.current), (o.current = null));
      }, []);
    return (
      J.useEffect(() => () => c(), [c]),
      S(() => {
        s()
          .find((e) => e.ref.current === document.activeElement)
          ?.ref.current?.scrollIntoView({ block: `nearest` });
      }, [s]),
      (0, Y.jsx)(u.div, {
        "aria-hidden": !0,
        ...i,
        ref: t,
        style: { flexShrink: 0, ...i.style },
        onPointerDown: A(i.onPointerDown, () => {
          o.current === null && (o.current = window.setInterval(r, 50));
        }),
        onPointerMove: A(i.onPointerMove, () => {
          (a.onItemLeave?.(), o.current === null && (o.current = window.setInterval(r, 50)));
        }),
        onPointerLeave: A(i.onPointerLeave, () => {
          c();
        }),
      })
    );
  }),
  Da = `SelectSeparator`,
  Oa = J.forwardRef((e, t) => {
    let { __scopeSelect: n, ...r } = e;
    return (0, Y.jsx)(u.div, { "aria-hidden": !0, ...r, ref: t });
  });
Oa.displayName = Da;
var ka = `SelectArrow`,
  Aa = J.forwardRef((e, t) => {
    let { __scopeSelect: n, ...r } = e,
      i = Di(n);
    return Xi(ka, n).position === `popper` ? (0, Y.jsx)(mi, { ...i, ...r, ref: t }) : null;
  });
Aa.displayName = ka;
var ja = `SelectBubbleInput`,
  Ma = J.forwardRef(({ __scopeSelect: e, ...t }, n) => {
    let i = ki(ja, e),
      {
        value: a,
        onValueChange: o,
        required: s,
        disabled: c,
        name: l,
        autoComplete: d,
        form: f,
      } = i,
      { nativeOptions: p, nativeSelectKey: m } = i,
      h = J.useRef(null),
      g = r(n, h),
      _ = a ?? ``,
      v = hi(_),
      y = Array.from(p).some((e) => (e.props.value ?? ``) === ``);
    return (
      J.useEffect(() => {
        let e = h.current;
        if (!e) return;
        let t = window.HTMLSelectElement.prototype,
          n = Object.getOwnPropertyDescriptor(t, `value`).set;
        if (v !== _ && n) {
          let t = new Event(`change`, { bubbles: !0 });
          (n.call(e, _), e.dispatchEvent(t));
        }
      }, [v, _]),
      (0, Y.jsxs)(
        u.select,
        {
          "aria-hidden": !0,
          required: s,
          tabIndex: -1,
          name: l,
          autoComplete: d,
          disabled: c,
          form: f,
          onChange: (e) => o(e.target.value),
          ...t,
          style: { ...gi, ...t.style },
          ref: g,
          defaultValue: _,
          children: [Pa(a) && !y ? (0, Y.jsx)(`option`, { value: `` }) : null, Array.from(p)],
        },
        m,
      )
    );
  });
Ma.displayName = ja;
function Na(e) {
  return typeof e == `function`;
}
function Pa(e) {
  return e === `` || e === void 0;
}
function Fa(e) {
  let t = D(e),
    n = J.useRef(``),
    r = J.useRef(0),
    i = J.useCallback(
      (e) => {
        let i = n.current + e;
        (t(i),
          (function e(t) {
            ((n.current = t),
              window.clearTimeout(r.current),
              t !== `` && (r.current = window.setTimeout(() => e(``), 1e3)));
          })(i));
      },
      [t],
    ),
    a = J.useCallback(() => {
      ((n.current = ``), window.clearTimeout(r.current));
    }, []);
  return (J.useEffect(() => () => window.clearTimeout(r.current), []), [n, i, a]);
}
function Ia(e, t, n) {
  let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1,
    a = La(e, Math.max(i, 0));
  r.length === 1 && (a = a.filter((e) => e !== n));
  let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
  return o === n ? void 0 : o;
}
function La(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Ra = Pi,
  za = Ri,
  Ba = J.forwardRef(({ className: e, children: t, ...n }, r) =>
    (0, Y.jsxs)(Ii, {
      ref: r,
      className: a(
        `flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1`,
        e,
      ),
      ...n,
      children: [
        t,
        (0, Y.jsx)(Bi, {
          asChild: !0,
          children: (0, Y.jsx)(ne, { className: `h-4 w-4 opacity-50` }),
        }),
      ],
    }),
  );
Ba.displayName = Ii.displayName;
var Va = J.forwardRef(({ className: e, ...t }, n) =>
  (0, Y.jsx)(Ca, {
    ref: n,
    className: a(`flex cursor-default items-center justify-center py-1`, e),
    ...t,
    children: (0, Y.jsx)(re, { className: `h-4 w-4` }),
  }),
);
Va.displayName = Ca.displayName;
var Ha = J.forwardRef(({ className: e, ...t }, n) =>
  (0, Y.jsx)(Ta, {
    ref: n,
    className: a(`flex cursor-default items-center justify-center py-1`, e),
    ...t,
    children: (0, Y.jsx)(ne, { className: `h-4 w-4` }),
  }),
);
Ha.displayName = Ta.displayName;
var Ua = J.forwardRef(({ className: e, children: t, position: n = `popper`, ...r }, i) =>
  (0, Y.jsx)(Wi, {
    children: (0, Y.jsxs)(Ki, {
      ref: i,
      className: a(
        `relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)`,
        n === `popper` &&
          `data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1`,
        e,
      ),
      position: n,
      ...r,
      children: [
        (0, Y.jsx)(Va, {}),
        (0, Y.jsx)(sa, {
          className: a(
            `p-1`,
            n === `popper` &&
              `h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]`,
          ),
          children: t,
        }),
        (0, Y.jsx)(Ha, {}),
      ],
    }),
  }),
);
Ua.displayName = Ki.displayName;
var Wa = J.forwardRef(({ className: e, ...t }, n) =>
  (0, Y.jsx)(pa, { ref: n, className: a(`px-2 py-1.5 text-sm font-semibold`, e), ...t }),
);
Wa.displayName = pa.displayName;
var Ga = J.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, Y.jsxs)(_a, {
    ref: r,
    className: a(
      `relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      e,
    ),
    ...n,
    children: [
      (0, Y.jsx)(`span`, {
        className: `absolute right-2 flex h-3.5 w-3.5 items-center justify-center`,
        children: (0, Y.jsx)(xa, { children: (0, Y.jsx)(te, { className: `h-4 w-4` }) }),
      }),
      (0, Y.jsx)(ya, { children: t }),
    ],
  }),
);
Ga.displayName = _a.displayName;
var Ka = J.forwardRef(({ className: e, ...t }, n) =>
  (0, Y.jsx)(Oa, { ref: n, className: a(`-mx-1 my-1 h-px bg-muted`, e), ...t }),
);
Ka.displayName = Oa.displayName;
var qa = [`PageUp`, `PageDown`],
  Ja = [`ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`],
  Ya = {
    "from-left": [`Home`, `PageDown`, `ArrowDown`, `ArrowLeft`],
    "from-right": [`Home`, `PageDown`, `ArrowDown`, `ArrowRight`],
    "from-bottom": [`Home`, `PageDown`, `ArrowDown`, `ArrowLeft`],
    "from-top": [`Home`, `PageDown`, `ArrowUp`, `ArrowLeft`],
  },
  Xa = `Slider`,
  [Za, Qa, $a] = jt(Xa),
  [eo, to] = _(Xa, [$a]),
  [no, ro] = eo(Xa),
  io = J.forwardRef((e, t) => {
    let {
        name: n,
        min: r = 0,
        max: i = 100,
        step: a = 1,
        orientation: o = `horizontal`,
        disabled: s = !1,
        minStepsBetweenThumbs: c = 0,
        defaultValue: l = [r],
        value: u,
        onValueChange: d = () => {},
        onValueCommit: f = () => {},
        inverted: p = !1,
        form: m,
        ...h
      } = e,
      g = J.useRef(new Set()),
      _ = J.useRef(0),
      v = J.useRef(!1),
      y = o === `horizontal` ? so : co,
      [b = [], x] = T({
        prop: u,
        defaultProp: l,
        onChange: (e) => {
          ([...g.current][_.current]?.focus({ preventScroll: !0, focusVisible: v.current }),
            (v.current = !1),
            d(e));
        },
      }),
      S = J.useRef(b);
    function C(e) {
      D(e, Oo(b, e));
    }
    function w(e) {
      D(e, _.current);
    }
    function E() {
      let e = S.current[_.current];
      b[_.current] !== e && f(b);
    }
    function D(e, t, { commit: n } = { commit: !1 }) {
      let o = No(a),
        s = At(Po(Math.round((e - r) / a) * a + r, o), [r, i]);
      x((e = []) => {
        let r = To(e, s, t);
        if (jo(r, c * a)) {
          _.current = r.indexOf(s);
          let t = String(r) !== String(e);
          return (t && n && f(r), t ? r : e);
        } else return e;
      });
    }
    return (0, Y.jsx)(no, {
      scope: e.__scopeSlider,
      name: n,
      disabled: s,
      min: r,
      max: i,
      valueIndexToChangeRef: _,
      thumbs: g.current,
      values: b,
      orientation: o,
      form: m,
      children: (0, Y.jsx)(Za.Provider, {
        scope: e.__scopeSlider,
        children: (0, Y.jsx)(Za.Slot, {
          scope: e.__scopeSlider,
          children: (0, Y.jsx)(y, {
            "aria-disabled": s,
            "data-disabled": s ? `` : void 0,
            ...h,
            ref: t,
            onPointerDown: A(h.onPointerDown, () => {
              s || ((S.current = b), (v.current = !1));
            }),
            min: r,
            max: i,
            inverted: p,
            onSlideStart: s ? void 0 : C,
            onSlideMove: s ? void 0 : w,
            onSlideEnd: s ? void 0 : E,
            onHomeKeyDown: () => {
              s || ((v.current = !0), D(r, 0, { commit: !0 }));
            },
            onEndKeyDown: () => {
              s || ((v.current = !0), D(i, b.length - 1, { commit: !0 }));
            },
            onStepKeyDown: ({ event: e, direction: t }) => {
              if (!s) {
                v.current = !0;
                let n = qa.includes(e.key) || (e.shiftKey && Ja.includes(e.key)) ? 10 : 1,
                  r = _.current,
                  i = b[r];
                D(i + a * n * t, r, { commit: !0 });
              }
            },
          }),
        }),
      }),
    });
  });
io.displayName = Xa;
var [ao, oo] = eo(Xa, { startEdge: `left`, endEdge: `right`, size: `width`, direction: 1 }),
  so = J.forwardRef((e, t) => {
    let {
        min: n,
        max: i,
        dir: a,
        inverted: o,
        onSlideStart: s,
        onSlideMove: c,
        onSlideEnd: l,
        onStepKeyDown: u,
        ...d
      } = e,
      [f, p] = J.useState(null),
      m = r(t, (e) => p(e)),
      h = J.useRef(void 0),
      g = Nt(a),
      _ = g === `ltr`,
      v = (_ && !o) || (!_ && o);
    function y(e) {
      let t = h.current || f.getBoundingClientRect(),
        r = Mo([0, t.width], v ? [n, i] : [i, n]);
      return ((h.current = t), r(e - t.left));
    }
    return (0, Y.jsx)(ao, {
      scope: e.__scopeSlider,
      startEdge: v ? `left` : `right`,
      endEdge: v ? `right` : `left`,
      direction: v ? 1 : -1,
      size: `width`,
      children: (0, Y.jsx)(lo, {
        dir: g,
        "data-orientation": `horizontal`,
        ...d,
        ref: m,
        style: { ...d.style, "--radix-slider-thumb-transform": `translateX(-50%)` },
        onSlideStart: (e) => {
          let t = y(e.clientX);
          s?.(t);
        },
        onSlideMove: (e) => {
          let t = y(e.clientX);
          c?.(t);
        },
        onSlideEnd: () => {
          ((h.current = void 0), l?.());
        },
        onStepKeyDown: (e) => {
          let t = Ya[v ? `from-left` : `from-right`].includes(e.key);
          u?.({ event: e, direction: t ? -1 : 1 });
        },
      }),
    });
  }),
  co = J.forwardRef((e, t) => {
    let {
        min: n,
        max: i,
        inverted: a,
        onSlideStart: o,
        onSlideMove: s,
        onSlideEnd: c,
        onStepKeyDown: l,
        ...u
      } = e,
      d = J.useRef(null),
      f = r(t, d),
      p = J.useRef(void 0),
      m = !a;
    function h(e) {
      let t = p.current || d.current.getBoundingClientRect(),
        r = Mo([0, t.height], m ? [i, n] : [n, i]);
      return ((p.current = t), r(e - t.top));
    }
    return (0, Y.jsx)(ao, {
      scope: e.__scopeSlider,
      startEdge: m ? `bottom` : `top`,
      endEdge: m ? `top` : `bottom`,
      size: `height`,
      direction: m ? 1 : -1,
      children: (0, Y.jsx)(lo, {
        "data-orientation": `vertical`,
        ...u,
        ref: f,
        style: { ...u.style, "--radix-slider-thumb-transform": `translateY(50%)` },
        onSlideStart: (e) => {
          let t = h(e.clientY);
          o?.(t);
        },
        onSlideMove: (e) => {
          let t = h(e.clientY);
          s?.(t);
        },
        onSlideEnd: () => {
          ((p.current = void 0), c?.());
        },
        onStepKeyDown: (e) => {
          let t = Ya[m ? `from-bottom` : `from-top`].includes(e.key);
          l?.({ event: e, direction: t ? -1 : 1 });
        },
      }),
    });
  }),
  lo = J.forwardRef((e, t) => {
    let {
        __scopeSlider: n,
        onSlideStart: r,
        onSlideMove: i,
        onSlideEnd: a,
        onHomeKeyDown: o,
        onEndKeyDown: s,
        onStepKeyDown: c,
        ...l
      } = e,
      d = ro(Xa, n);
    return (0, Y.jsx)(u.span, {
      ...l,
      ref: t,
      onKeyDown: A(e.onKeyDown, (e) => {
        e.key === `Home`
          ? (o(e), e.preventDefault())
          : e.key === `End`
            ? (s(e), e.preventDefault())
            : qa.concat(Ja).includes(e.key) && (c(e), e.preventDefault());
      }),
      onPointerDown: A(e.onPointerDown, (e) => {
        let t = e.target;
        (t.setPointerCapture(e.pointerId),
          e.preventDefault(),
          d.thumbs.has(t) ? t.focus({ preventScroll: !0, focusVisible: !1 }) : r(e));
      }),
      onPointerMove: A(e.onPointerMove, (e) => {
        e.target.hasPointerCapture(e.pointerId) && i(e);
      }),
      onPointerUp: A(e.onPointerUp, (e) => {
        let t = e.target;
        t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e));
      }),
    });
  }),
  uo = `SliderTrack`,
  fo = J.forwardRef((e, t) => {
    let { __scopeSlider: n, ...r } = e,
      i = ro(uo, n);
    return (0, Y.jsx)(u.span, {
      "data-disabled": i.disabled ? `` : void 0,
      "data-orientation": i.orientation,
      ...r,
      ref: t,
    });
  });
fo.displayName = uo;
var po = `SliderRange`,
  mo = J.forwardRef((e, t) => {
    let { __scopeSlider: n, ...i } = e,
      a = ro(po, n),
      o = oo(po, n),
      s = r(t, J.useRef(null)),
      c = a.values.length,
      l = a.values.map((e) => Eo(e, a.min, a.max)),
      d = c > 1 ? Math.min(...l) : 0,
      f = 100 - Math.max(...l);
    return (0, Y.jsx)(u.span, {
      "data-orientation": a.orientation,
      "data-disabled": a.disabled ? `` : void 0,
      ...i,
      ref: s,
      style: { ...e.style, [o.startEdge]: d + `%`, [o.endEdge]: f + `%` },
    });
  });
mo.displayName = po;
var ho = `SliderThumb`,
  [go, _o] = eo(ho),
  vo = `SliderThumbProvider`;
function yo(e) {
  let { __scopeSlider: t, name: n, children: r, internal_do_not_use_render: i } = e,
    a = ro(vo, t),
    o = Qa(t),
    [s, c] = J.useState(null),
    l = J.useMemo(() => (s ? o().findIndex((e) => e.ref.current === s) : -1), [o, s]),
    u = Kr(s),
    d = s ? !!a.form || !!s.closest(`form`) : !0,
    f = a.values[l],
    p = n ?? (a.name ? a.name + (a.values.length > 1 ? `[]` : ``) : void 0),
    m = f === void 0 ? 0 : Eo(f, a.min, a.max);
  J.useEffect(() => {
    if (s)
      return (
        a.thumbs.add(s),
        () => {
          a.thumbs.delete(s);
        }
      );
  }, [s, a.thumbs]);
  let h = {
    value: f,
    name: p,
    form: a.form,
    isFormControl: d,
    index: l,
    thumb: s,
    onThumbChange: c,
    percent: m,
    size: u,
  };
  return (0, Y.jsx)(go, { scope: t, ...h, children: Fo(i) ? i(h) : r });
}
yo.displayName = vo;
var bo = `SliderThumbTrigger`,
  xo = J.forwardRef((e, t) => {
    let { __scopeSlider: n, ...i } = e,
      a = ro(bo, n),
      o = oo(bo, n),
      { index: s, value: c, percent: l, size: d, onThumbChange: f } = _o(bo, n),
      p = r(t, (e) => f(e)),
      m = Do(s, a.values.length),
      h = d?.[o.size],
      g = h ? ko(h, l, o.direction) : 0;
    return (0, Y.jsx)(`span`, {
      style: {
        transform: `var(--radix-slider-thumb-transform)`,
        position: `absolute`,
        [o.startEdge]: `calc(${l}% + ${g}px)`,
      },
      children: (0, Y.jsx)(Za.ItemSlot, {
        scope: n,
        children: (0, Y.jsx)(u.span, {
          role: `slider`,
          "aria-label": e[`aria-label`] || m,
          "aria-valuemin": a.min,
          "aria-valuenow": c,
          "aria-valuemax": a.max,
          "aria-orientation": a.orientation,
          "data-orientation": a.orientation,
          "data-disabled": a.disabled ? `` : void 0,
          tabIndex: a.disabled ? void 0 : 0,
          ...i,
          ref: p,
          style: c === void 0 ? { display: `none` } : e.style,
          onFocus: A(e.onFocus, () => {
            a.valueIndexToChangeRef.current = s;
          }),
        }),
      }),
    });
  });
xo.displayName = bo;
var So = J.forwardRef((e, t) => {
  let { __scopeSlider: n, name: r, ...i } = e;
  return (0, Y.jsx)(yo, {
    __scopeSlider: n,
    name: r,
    internal_do_not_use_render: ({ index: e, isFormControl: r }) =>
      (0, Y.jsxs)(Y.Fragment, {
        children: [
          (0, Y.jsx)(xo, { ...i, ref: t, __scopeSlider: n }),
          r ? (0, Y.jsx)(wo, { __scopeSlider: n }, e) : null,
        ],
      }),
  });
});
So.displayName = ho;
var Co = `SliderBubbleInput`,
  wo = J.forwardRef(({ __scopeSlider: e, ...t }, n) => {
    let { value: i, name: a, form: o } = _o(Co, e),
      s = J.useRef(null),
      c = r(s, n),
      l = hi(i);
    return (
      J.useEffect(() => {
        let e = s.current;
        if (!e) return;
        let t = window.HTMLInputElement.prototype,
          n = Object.getOwnPropertyDescriptor(t, `value`).set;
        if (l !== i && n) {
          let t = new Event(`input`, { bubbles: !0 });
          (n.call(e, i), e.dispatchEvent(t));
        }
      }, [l, i]),
      (0, Y.jsx)(u.input, {
        style: { display: `none` },
        name: a,
        form: o,
        ...t,
        ref: c,
        defaultValue: i,
      })
    );
  });
wo.displayName = Co;
function To(e = [], t, n) {
  let r = [...e];
  return ((r[n] = t), r.sort((e, t) => e - t));
}
function Eo(e, t, n) {
  return At((100 / (n - t)) * (e - t), [0, 100]);
}
function Do(e, t) {
  if (t > 2) return `Value ${e + 1} of ${t}`;
  if (t === 2) return [`Minimum`, `Maximum`][e];
}
function Oo(e, t) {
  if (e.length === 1) return 0;
  let n = e.map((e) => Math.abs(e - t)),
    r = Math.min(...n);
  return n.indexOf(r);
}
function ko(e, t, n) {
  let r = e / 2;
  return (r - Mo([0, 50], [0, r])(t) * n) * n;
}
function Ao(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function jo(e, t) {
  if (t > 0) {
    let n = Ao(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Mo(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    let r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function No(e) {
  if (!Number.isFinite(e)) return 0;
  let t = e.toString();
  if (t.includes(`e`)) {
    let [e, n] = t.split(`e`),
      r = e.split(`.`)[1] || ``,
      i = Number(n);
    return Math.max(0, r.length - i);
  }
  let n = t.split(`.`)[1];
  return n ? n.length : 0;
}
function Po(e, t) {
  let n = 10 ** t;
  return Math.round(e * n) / n;
}
function Fo(e) {
  return typeof e == `function`;
}
var Io = J.forwardRef(({ className: e, ...t }, n) =>
  (0, Y.jsxs)(io, {
    ref: n,
    className: a(`relative flex w-full touch-none select-none items-center`, e),
    ...t,
    children: [
      (0, Y.jsx)(fo, {
        className: `relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20`,
        children: (0, Y.jsx)(mo, { className: `absolute h-full bg-primary` }),
      }),
      (0, Y.jsx)(So, {
        className: `block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`,
      }),
    ],
  }),
);
Io.displayName = io.displayName;
var Lo = [
    { value: `flood`, label: `Flood` },
    { value: `earthquake`, label: `Earthquake` },
    { value: `drought`, label: `Drought` },
    { value: `landslide`, label: `Landslide` },
    { value: `storm`, label: `Storm` },
    { value: `wildfire`, label: `Wildfire` },
    { value: `other`, label: `Other` },
  ],
  Ro = [
    `Temporary housing`,
    `M-Pesa cash assistance`,
    `Food & clean water`,
    `Medical aid`,
    `Rebuilding materials`,
    `Volunteers & labor`,
    `Counseling & mental health`,
    `Transport & relocation`,
  ],
  zo = [
    `Nairobi`,
    `Garissa`,
    `Turkana`,
    `Tana River`,
    `Busia`,
    `Kisumu`,
    `West Pokot`,
    `Murang'a`,
    `Mombasa`,
    `Nakuru`,
    `Wajir`,
    `Mandera`,
    `Marsabit`,
    `Baringo`,
    `Elgeyo Marakwet`,
    `Kiambu`,
    `Kakamega`,
    `Uasin Gishu`,
    `Other`,
  ],
  Bo = Dt({
    disaster_type: Ot([
      `flood`,
      `earthquake`,
      `drought`,
      `landslide`,
      `storm`,
      `wildfire`,
      `other`,
    ]),
    location: Et().trim().min(2, `Please enter a location`).max(160),
    description: Et()
      .trim()
      .min(10, `Please describe what happened (at least 10 characters)`)
      .max(2e3),
  });
function Vo() {
  let { user: e } = c(),
    t = l(),
    n = g(),
    [r, i] = (0, J.useState)(``),
    [a, o] = (0, J.useState)(``),
    [u, d] = (0, J.useState)(``),
    [_, y] = (0, J.useState)(``),
    [b, x] = (0, J.useState)([3]),
    [S, C] = (0, J.useState)([]);
  (0, J.useEffect)(() => {
    let e = (e) => {
      let t = e.detail.scenario;
      if (t === `nyando`) {
        (i(`flood`),
          o(`Kisumu`),
          d(`Nyando Basin`),
          x([4]),
          C([`Temporary housing`, `Food & clean water`, `Medical aid`]));
        let e = `Heavy seasonal rains have caused the Nyando River to burst its banks. Over 200 homesteads are completely submerged, crops destroyed, and families have evacuated to Ahero Multipurpose Center. We need immediate tents, blankets, water treatment kits, and hot meals.`,
          t = ``,
          n = 0,
          r = setInterval(() => {
            n < 262 ? ((t += e.substring(0, n + 2)), y(t), (n += 2)) : (y(e), clearInterval(r));
          }, 10);
      } else if (t === `turkana`) {
        (i(`drought`),
          o(`Turkana`),
          d(`Lodwar Outskirts`),
          x([5]),
          C([`M-Pesa cash assistance`, `Food & clean water`, `Counseling & mental health`]));
        let e = `Severe water scarcity and dry spells have completely depleted animal pastures. Over 80% of our cattle have died. Families are struggling to survive on one meal per day. We require immediate food supplies, water trucking, and direct M-Pesa cash grants.`,
          t = ``,
          n = 0,
          r = setInterval(() => {
            n < 251 ? ((t += e.substring(0, n + 2)), y(t), (n += 2)) : (y(e), clearInterval(r));
          }, 10);
      }
    };
    return (
      window.addEventListener(`demo:autofill`, e),
      () => window.removeEventListener(`demo:autofill`, e)
    );
  }, []);
  let w = p({
      mutationFn: async () => {
        let t = a ? `${a} County${u ? `, ${u}` : ``}` : u,
          n = Bo.parse({ disaster_type: r, location: t, description: _ }),
          { error: i } = await f
            .from(`disaster_reports`)
            .insert({
              user_id: e.id,
              disaster_type: n.disaster_type,
              location: n.location,
              description: n.description,
              severity: b[0],
              needs: S,
            });
        if (i) throw i;
      },
      onSuccess: () => {
        (n.invalidateQueries({ queryKey: [`disaster_reports`] }),
          j.success(`Report submitted. We're matching you with support.`),
          setTimeout(() => {
            window.dispatchEvent(
              new CustomEvent(`demo:sms`, {
                detail: {
                  title: `HopeBridge Support Team`,
                  body: `We have received your report for ${a} County. Emergency resources are coordinating. View matched aid programs on your dashboard.`,
                },
              }),
            );
          }, 1500),
          t({ to: `/dashboard` }));
      },
      onError: (e) => {
        j.error(e.message);
      },
    }),
    T = (e) => C((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
  return (0, Y.jsx)(v, {
    children: (0, Y.jsxs)(`div`, {
      className: `mx-auto max-w-2xl px-4 py-12`,
      children: [
        (0, Y.jsxs)(`header`, {
          children: [
            (0, Y.jsx)(`h1`, {
              className: `font-serif text-3xl font-semibold text-foreground`,
              children: `Report disaster damage`,
            }),
            (0, Y.jsx)(`p`, {
              className: `mt-2 text-muted-foreground`,
              children: `Share what happened and what you need. The more detail you provide, the better we can match you with the right aid.`,
            }),
          ],
        }),
        (0, Y.jsxs)(`form`, {
          onSubmit: (e) => {
            if ((e.preventDefault(), !r)) {
              j.error(`Please select a disaster type.`);
              return;
            }
            if (!a) {
              j.error(`Please select a county.`);
              return;
            }
            w.mutate();
          },
          className: `mt-8 space-y-6 rounded-3xl border border-border bg-card p-6 sm:p-8`,
          children: [
            (0, Y.jsxs)(`div`, {
              children: [
                (0, Y.jsx)(N, { htmlFor: `disaster_type`, children: `Type of disaster` }),
                (0, Y.jsxs)(Ra, {
                  value: r,
                  onValueChange: (e) => i(e),
                  children: [
                    (0, Y.jsx)(Ba, {
                      id: `disaster_type`,
                      className: `mt-1.5`,
                      children: (0, Y.jsx)(za, { placeholder: `Select a disaster type` }),
                    }),
                    (0, Y.jsx)(Ua, {
                      children: Lo.map((e) =>
                        (0, Y.jsx)(Ga, { value: e.value, children: e.label }, e.value),
                      ),
                    }),
                  ],
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `grid grid-cols-1 gap-4 sm:grid-cols-2`,
              children: [
                (0, Y.jsxs)(`div`, {
                  children: [
                    (0, Y.jsx)(N, { htmlFor: `county`, children: `County` }),
                    (0, Y.jsxs)(Ra, {
                      value: a,
                      onValueChange: o,
                      children: [
                        (0, Y.jsx)(Ba, {
                          id: `county`,
                          className: `mt-1.5`,
                          children: (0, Y.jsx)(za, { placeholder: `Select County` }),
                        }),
                        (0, Y.jsx)(Ua, {
                          children: zo.map((e) =>
                            (0, Y.jsxs)(Ga, { value: e, children: [e, ` County`] }, e),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  children: [
                    (0, Y.jsx)(N, {
                      htmlFor: `specific_location`,
                      children: `Sub-County / Village / Address`,
                    }),
                    (0, Y.jsx)(M, {
                      id: `specific_location`,
                      value: u,
                      onChange: (e) => d(e.target.value),
                      placeholder: `e.g. Nyando, Budalangi, or street address`,
                      className: `mt-1.5`,
                      required: !0,
                    }),
                  ],
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              children: [
                (0, Y.jsx)(N, { htmlFor: `description`, children: `What happened?` }),
                (0, Y.jsx)(ee, {
                  id: `description`,
                  value: _,
                  onChange: (e) => y(e.target.value),
                  placeholder: `Describe the damage and your most urgent needs...`,
                  rows: 5,
                  maxLength: 2e3,
                  className: `mt-1.5 resize-none`,
                  required: !0,
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              children: [
                (0, Y.jsxs)(N, {
                  htmlFor: `severity`,
                  children: [
                    `Severity: `,
                    (0, Y.jsxs)(`span`, { className: `text-accent`, children: [b[0], ` of 5`] }),
                  ],
                }),
                (0, Y.jsx)(Io, {
                  id: `severity`,
                  min: 1,
                  max: 5,
                  step: 1,
                  value: b,
                  onValueChange: x,
                  className: `mt-3`,
                }),
                (0, Y.jsxs)(`div`, {
                  className: `mt-1 flex justify-between text-xs text-muted-foreground`,
                  children: [
                    (0, Y.jsx)(`span`, { children: `Minor` }),
                    (0, Y.jsx)(`span`, { children: `Severe` }),
                  ],
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              children: [
                (0, Y.jsx)(N, { children: `What support do you need?` }),
                (0, Y.jsx)(`div`, {
                  className: `mt-2 flex flex-wrap gap-2`,
                  children: Ro.map((e) => {
                    let t = S.includes(e);
                    return (0, Y.jsx)(
                      `button`,
                      {
                        type: `button`,
                        onClick: () => T(e),
                        "aria-pressed": t,
                        className: `rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${t ? `border-primary bg-primary text-primary-foreground` : `border-border bg-background text-foreground hover:border-accent/40`}`,
                        children: e,
                      },
                      e,
                    );
                  }),
                }),
              ],
            }),
            (0, Y.jsxs)(s, {
              type: `submit`,
              className: `w-full rounded-full`,
              size: `lg`,
              disabled: w.isPending,
              children: [
                w.isPending && (0, Y.jsx)(m, { className: `animate-spin` }),
                `Submit report`,
              ],
            }),
            (0, Y.jsxs)(`p`, {
              className: `flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground`,
              children: [
                (0, Y.jsx)(h, { className: `size-3.5`, "aria-hidden": `true` }),
                `Your information is private and only used to match you with support.`,
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
export { Vo as component };
