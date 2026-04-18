// ============================================================
//  CAPM MENTOR — DATA.JS
//  30-Day SAP BTP CAPM Learning Plan with Full Content
// ============================================================

const ROADMAP_TOPICS = [
  { id: "cap-arch",     title: "CAP Architecture",         days: "1–2",  description: "Understand the full CAP framework structure, MTA, and project anatomy." },
  { id: "cds",          title: "CDS Language",             days: "3–4",  description: "Core Data Services syntax, types, annotations, and file structure." },
  { id: "entities",     title: "Entities & Types",         days: "5–6",  description: "Define entities, custom types, elements, and type inheritance." },
  { id: "assoc",        title: "Associations",             days: "7–8",  description: "One-to-one, one-to-many, and managed vs unmanaged associations." },
  { id: "compos",       title: "Compositions",             days: "9–10", description: "Deep compositions, cascading operations, and composition of aspects." },
  { id: "services",     title: "CDS Services",             days: "11–12",description: "Service definitions, service exposure, and service consumption." },
  { id: "projection",   title: "Projections & Views",      days: "13–14",description: "CDS views, projections, and how to reshape entity exposure." },
  { id: "handlers",     title: "Event Handlers",           days: "15–16",description: "Before/On/After handlers, custom CRUD logic, and handler registration." },
  { id: "custom-logic", title: "Custom Logic",             days: "17–18",description: "Node.js and Java service implementations, business validations." },
  { id: "odata",        title: "OData Protocol",           days: "19–20",description: "OData V4, $filter, $expand, $select, batch requests, and metadata." },
  { id: "auth",         title: "Authentication",           days: "21–22",description: "Role-based access, @requires, @restrict, and user context." },
  { id: "xsuaa",        title: "XSUAA & Security",         days: "23–24",description: "XSUAA setup, xs-security.json, scopes, roles, and role collections." },
  { id: "destinations", title: "Destinations",             days: "25–26",description: "SAP BTP Destination Service, HTTP destinations, and OAuth flows." },
  { id: "deployment",   title: "Deployment & MTA",         days: "27–28",description: "MTA descriptors, cf push, mbt build, and BTP deployment pipelines." },
  { id: "advanced",     title: "Advanced Patterns",        days: "29–30",description: "Messaging, Remote Services, CAP extensibility, and best practices." },
];

const STANDOUT_SKILLS = [
  { title: "Understanding CDS Aspects", body: "Most freshers write repetitive entity fields. Aspects let you define reusable field groups (like timestamps, audit fields) and mix them in. This pattern shows senior-level thinking instantly." },
  { title: "Using @cds.on.insert / @cds.on.update", body: "Auto-populate `createdAt`, `createdBy`, `modifiedAt` without a single line of handler code. Freshers write handlers for this — experts use built-in CDS annotations." },
  { title: "CAP's Built-in Soft Delete", body: "Adding `@Common.IsNaturalPerson` and deletion patterns. Understand how CAP handles logical deletion vs physical deletion — rarely discussed in tutorials." },
  { title: "Request Context Deep Dive", body: "`cds.context` gives you user, tenant, locale, and transaction. Most freshers never use it. Mastering context = multi-tenant ready apps." },
  { title: "CDS Managed Associations vs Unmanaged", body: "Knowing when `Association to` vs `Association to one` vs manual key mapping makes your schema design far more precise than peers." },
  { title: "srv.run() for Programmatic Queries", body: "Most freshers only write REST APIs. Using `SELECT.from().where()` fluent API in handlers makes your Node.js code readable and DB-agnostic." },
  { title: "$user Pseudovariable in CDS", body: "Filter data per logged-in user using `where user = $user` in CDS directly. Eliminates need for handler-level user filtering." },
  { title: "CAP Fiori Integration: @UI Annotations", body: "Generating Fiori UIs purely from CDS @UI annotations. Almost no fresher knows this — it's the CAP + Fiori superpower." },
  { title: "Using CDS Plugins (cds-dbm, etc.)", body: "CAP's plugin ecosystem is vast. Tools like cds-dbm for delta deployments or cds-swagger for auto-API-docs show you go beyond basics." },
  { title: "Mocking External Services", body: "Using `cds mock` and `cds.requires` to stub third-party APIs during dev. Shows proper local dev discipline interviewers love." },
  { title: "CAP Testing with jest + @sap/cds/lib", body: "Writing unit and integration tests for CAP services using Jest. Freshers skip tests — you won't." },
  { title: "OData Deep Linking with $expand", body: "Chaining $expand=Items($expand=Product) for nested reads. Most freshers don't know how to chain expands in one request." },
  { title: "Using cds.log() Effectively", body: "Custom logging with CAP's built-in logger for structured output — invaluable for debugging production issues in BTP Cloud Foundry." },
  { title: "Event Emitter Pattern in CAP", body: "Using `srv.emit()` for loosely coupled async messaging between services — a pattern almost never covered in beginner CAPM content." },
  { title: "CDS `localized` Keyword for i18n", body: "Building multilingual apps using `localized` entities — a real enterprise requirement almost no fresher understands." },
  { title: "Using `req.diff()` for Change Detection", body: "In update handlers, `req.diff()` shows old vs new values. Perfect for audit trails and conditional logic — a hidden gem." },
  { title: "CAP Fiori Draft Handling", body: "Understanding draft-enabled services with `@odata.draft.enabled` — the backbone of all enterprise Fiori apps." },
  { title: "Row-Level Security with Restrictions", body: "Using `@restrict` with `where` conditions to filter data per role at DB level — not just API level." },
  { title: "BTP Service Binding vs Manual Config", body: "Understanding `VCAP_SERVICES` and how BTP auto-injects credentials vs manual `cds.requires` setup — shows cloud nativity." },
  { title: "Using cds.tx() for Transactions", body: "Manually controlling DB transactions with `cds.tx()` in complex multi-step operations — a production-level skill." },
  { title: "CAP with SAP Event Mesh", body: "Publishing and consuming events across microservices using SAP Event Mesh + CAP messaging API." },
  { title: "Understanding MTX for Multitenancy", body: "CAP's multitenancy extension (MTX) — how tenant onboarding, schema isolation, and subscription work end-to-end." },
  { title: "Hybrid Testing (Local + BTP Services)", body: "Using `cds bind` to test locally against real BTP services. Freshers never do this — it changes your debugging game." },
  { title: "CDS Annotations for Input Validation", body: "`@mandatory`, `@assert.range`, `@assert.unique` in CDS — declarative validations without handler code." },
  { title: "Understanding CAP's Database Abstraction", body: "How the same CDS model runs on SQLite (dev), HANA (prod), and PostgreSQL — writing truly DB-agnostic code." },
  { title: "Remote Service Consumption in CAP", body: "Calling external OData APIs via `cds.connect.to()` — how CAP acts as a consumer, not just a provider." },
  { title: "MTA Advanced: Resource Dependencies", body: "Understanding `requires`, `provides`, and cross-MTA service sharing in mta.yaml — rarely understood by freshers." },
  { title: "Action vs Function in OData/CAP", body: "The precise difference: Functions are safe/idempotent (GET), Actions are not (POST). Improper use causes API contract violations." },
  { title: "CAP Health Checks & Monitoring", body: "Exposing `/health` endpoints and integrating with BTP Alert Notifications — enterprise readiness signal." },
  { title: "Using `cds compile` to Inspect Output", body: "Running `cds compile --to sql/edmx/json` to inspect what CAP generates — deepens understanding unlike anything else." },
];

const INTERVIEW_QA = [
  { q: "What is SAP CAP (Cloud Application Programming model)?", a: "SAP CAP is an open-source framework by SAP for building enterprise-grade cloud services. It provides a set of languages (CDS), libraries (Node.js/Java), and tools to build full-stack applications on SAP BTP. It promotes convention-over-configuration and auto-generates OData APIs from CDS models." },
  { q: "What is CDS and what role does it play in CAPM?", a: "CDS (Core Data Services) is a domain-specific language used in CAP to define data models, service interfaces, and annotations. It serves as the single source of truth — from it, CAP auto-generates database schemas, OData metadata, and Fiori UI configurations." },
  { q: "Explain the difference between Association and Composition in CDS.", a: "Association is a loose link between entities (like a foreign key); navigating it may load separate records. Composition is a strong ownership link — child entities are part of the parent's lifecycle. Deleting a parent in a Composition cascades to children." },
  { q: "What is a CDS Projection and why is it used?", a: "A Projection is a CDS view that exposes a subset of an entity's elements. It's used to shape data exposure in services — e.g., hiding sensitive fields, renaming elements, or adding computed fields without changing the underlying entity." },
  { q: "What are the three phases of CAP event handlers?", a: "Before — for validation and input checks before the operation runs. On — the actual operation handler (replaces default DB behavior if provided). After — for post-processing, enrichment, or notifications after the operation completes." },
  { q: "What is XSUAA and why is it used in SAP BTP?", a: "XSUAA (Extended Services for User Account and Authentication) is SAP BTP's OAuth 2.0-based authorization server. It issues JWT tokens with scopes and attributes. CAP apps use XSUAA to authenticate users and enforce role-based access using @requires and @restrict annotations." },
  { q: "How does CAP handle multitenancy?", a: "CAP supports multitenancy via the MTX (Multitenancy Extension) module. Each tenant gets an isolated schema in SAP HANA. CAP handles tenant onboarding/offboarding, schema upgrades per tenant, and tenant-aware data isolation automatically." },
  { q: "What is the difference between @requires and @restrict in CDS?", a: "@requires checks if the user has a specific role before allowing any access to the service/entity. @restrict is more granular — it can allow specific CRUD operations for specific roles, and can include `where` conditions for row-level security." },
  { q: "What is an MTA in SAP BTP context?", a: "MTA (Multi-Target Application) is a packaging and deployment concept for SAP BTP. An mta.yaml descriptor defines all modules (app, service, db), their dependencies, and configurations. It's compiled with MBT and deployed via CF CLI or BTP Cockpit." },
  { q: "How does CAP auto-generate OData APIs?", a: "When you define a CDS service, CAP automatically exposes it as an OData V4 API. The CDS compiler generates the $metadata document. Standard CRUD operations, $filter, $expand, $select, $orderby, etc. all work out of the box without any handler code." },
  { q: "What is a CAP Destination Service used for?", a: "The SAP BTP Destination Service stores connection details (URL, auth) for external systems. CAP apps use `cds.connect.to()` with a destination reference to consume remote OData/REST services without hardcoding credentials." },
  { q: "What is the purpose of `cds.tx()` in CAP?", a: "`cds.tx()` creates a manual database transaction context. Used when you need to run multiple DB operations atomically — if one fails, all are rolled back. Essential for complex business operations that span multiple entity writes." },
  { q: "Explain CAP's database portability.", a: "CAP abstracts the database through the CDS runtime. In development, SQLite is used by default. In production, SAP HANA (or PostgreSQL) is used. The same CDS model and service code runs on any supported DB — no SQL dialect changes needed." },
  { q: "What is a CAP action vs a CAP function?", a: "Actions are bound to POST HTTP calls and can have side effects (e.g., approving a leave request). Functions are bound to GET calls, are idempotent, and must not change state. They map directly to OData Action/Function Imports." },
  { q: "What is `req.diff()` and when would you use it?", a: "`req.diff()` in a PATCH/PUT handler returns the difference between old and new entity values. Used for audit logging (what changed), conditional logic (only act if field X changed), and optimistic locking scenarios." },
  { q: "How does CAP support draft handling?", a: "By annotating a service entity with `@odata.draft.enabled`, CAP creates a shadow draft table. Users can edit records without affecting active data until they explicitly activate. CAP handles all draft CRUD, validation-on-activation, and draft expiry automatically." },
  { q: "What is `cds.context` and what does it expose?", a: "`cds.context` is a globally accessible object in CAP that holds the current request context. It exposes `tenant`, `user` (with id, roles), `locale`, and the active transaction. It's the primary way to get user-aware context inside handlers and utility functions." },
  { q: "How do you mock external services in CAP for local development?", a: "Using `cds mock <ServiceName>` or configuring `cds.requires.<service>.kind: 'odata-v4'` with `credentials.url` pointing to a local mock. For real external APIs, use `cds bind` to bind local app to live BTP services without deploying." },
  { q: "What are CDS Aspects and why are they useful?", a: "Aspects are named, reusable sets of CDS elements (like mixins). Define once (`aspect Auditable { createdAt: Timestamp; ... }`) and mix into multiple entities. They eliminate repetition and enforce consistent field patterns across the schema." },
  { q: "Explain the role of `xs-security.json` in a CAP app.", a: "xs-security.json defines the XSUAA security descriptor — app scopes, role templates, and role collections. It's deployed to BTP to configure who can access what. Scopes defined here must match `@requires` / `@restrict` annotations in your CDS service." },
  { q: "What is `SELECT.from().where()` in CAP Node.js?", a: "It's CAP's fluent query API (CQN — CDS Query Notation). Instead of raw SQL, you write `SELECT.from(Books).where({ ID: 1 })`. This is DB-agnostic, supports all CDS features, and is the recommended way to query inside CAP handlers." },
  { q: "How does event messaging work in CAP?", a: "CAP supports event emitting via `srv.emit('eventName', data)`. Other services subscribe via `srv.on('eventName', handler)`. For distributed messaging, CAP integrates with SAP Event Mesh — events are published/consumed asynchronously across microservices." },
  { q: "What is the `@assert.unique` annotation?", a: "It enforces uniqueness constraints declaratively in CDS (e.g., `@assert.unique: { email }` on an entity). CAP validates this at service level before hitting the DB — cleaner than writing handler-level duplicate checks." },
  { q: "What is the difference between `cds watch` and `cds run`?", a: "`cds watch` starts the CAP server with hot-reload — any file change auto-restarts the server. Ideal for development. `cds run` starts the server without watching. Both serve the same app but `watch` adds file system monitoring." },
  { q: "How does CAP handle localization (i18n)?", a: "Using the `localized` keyword on entity elements. CAP generates a companion `_texts` table. Language fallback chains are handled automatically. The active locale from `cds.context.locale` determines which translation is served." },
  { q: "What does `cds compile --to sql` do?", a: "It compiles your CDS model and outputs the SQL DDL that CAP would execute on the database. Essential for debugging schema issues, understanding generated structures, and reviewing what HANA or SQLite tables your model creates." },
  { q: "What is a CAP Remote Service?", a: "A Remote Service is a CAP abstraction for external OData/REST APIs. Defined in `cds.requires`, connected via `cds.connect.to('ServiceName')`. CAP treats it like a local service — you can JOIN remote and local data in CDS views using mocking and delegation." },
  { q: "How does row-level security work in CAP?", a: "Via `@restrict` with a `where` clause: `@restrict: [{ grant: 'READ', to: 'Viewer', where: 'createdBy = $user' }]`. CAP injects this condition into every DB query for that role — no handler code needed, fully declarative." },
  { q: "What are CAP plugins and name two examples?", a: "CAP plugins extend the framework via hooks and service overrides. Examples: `@cap-js/audit-logging` for automatic audit trails, `@sap/cds-dk` for extended CLI commands, `cds-dbm` for advanced DB migration/delta deployment, `cds-swagger-ui` for auto OpenAPI docs." },
  { q: "What happens during `cf push` vs `mbt build && cf deploy`?", a: "`cf push` deploys a single app module directly to Cloud Foundry — simple but no service binding orchestration. `mbt build` compiles all MTA modules + bindings into a deployable `.mtar` archive, then `cf deploy` orchestrates the full multi-module deployment in correct order with all service provisioning." },
];

const THIRTY_DAYS = [
  // WEEK 1 — Foundation
  {
    day: 1,
    topic: "CAP Architecture Overview",
    concept: "CAP Framework Structure",
    conceptDesc: "Learn the anatomy of a CAP project: package.json, db/ folder, srv/ folder, app/ folder, and .cdsrc.json. Understand how CAP layers work from CDS model to runtime.",
    conceptCode: `// Typical CAP project structure:
// my-cap-app/
// ├── db/
// │   └── schema.cds       ← Data model
// ├── srv/
// │   ├── cat-service.cds  ← Service definition
// │   └── cat-service.js   ← Service handlers
// ├── app/                 ← Fiori/UI5 frontends
// ├── package.json
// └── .cdsrc.json          ← CAP config`,
    task: "Initialize a CAP Project",
    taskDesc: "Run `npm install -g @sap/cds-dk`, create a new CAP project with `cds init`, explore the folder structure, and start the server with `cds watch`.",
    taskCode: `# In your terminal:
npm install -g @sap/cds-dk
cds init my-cap-app
cd my-cap-app
npm install
cds watch   ← Server starts at localhost:4004`,
    revision: "Node.js & npm fundamentals",
    revisionDesc: "Review async/await, modules (require/import), npm scripts, and package.json dependencies before diving into CAP.",
    revisionContent: `<strong>Key Node.js concepts to review:</strong><br>
• <code>require()</code> vs ES6 <code>import</code><br>
• <code>async/await</code> and Promises<br>
• <code>npm install</code> / <code>npm run</code> scripts<br>
• <code>.env</code> files and environment variables`,
    interviewQ: "What is SAP CAP and what problem does it solve?",
    interviewA: INTERVIEW_QA[0].a,
    debugQ: "Why does `cds watch` show 'No model found'?",
    debugCode: `// Developer wrote:
cds watch
// Error: No model found in db/ or srv/`,
    debugFix: `// Fix: You must have at least one .cds file in db/ or srv/
// Create db/schema.cds with any content, e.g.:
namespace my.app;
entity Books { key ID: Integer; title: String; }`,
  },
  {
    day: 2,
    topic: "CAP Project Config & CLI",
    concept: ".cdsrc.json & Configuration",
    conceptDesc: "Master CAP configuration via .cdsrc.json — setting database kind, authentication strategy, feature flags, and environment-specific overrides.",
    conceptCode: `// .cdsrc.json
{
  "requires": {
    "db": { "kind": "sqlite", "credentials": { "url": "db.sqlite" } },
    "auth": { "kind": "mocked", "users": {
      "alice": { "roles": ["admin"] },
      "bob":   { "roles": ["viewer"] }
    }}
  },
  "build": { "target": "gen" }
}`,
    task: "Configure Mocked Auth Users",
    taskDesc: "Set up mocked authentication users in .cdsrc.json with different roles. Test accessing the service as different users using the CAP dev portal at localhost:4004.",
    taskCode: `// In .cdsrc.json add users section
// Then in browser: http://localhost:4004
// Use the 'Login' option to switch users`,
    revision: "CAP Architecture Overview (Day 1)",
    revisionDesc: "Review the CAP layered architecture: CDS (model) → Runtime (Node/Java) → Database (SQLite/HANA) → OData API.",
    revisionContent: `<strong>CAP Layers:</strong><br>
1. <strong>CDS Model</strong> — .cds files defining entities/services<br>
2. <strong>Service Runtime</strong> — Node.js/Java handlers<br>
3. <strong>Database Layer</strong> — SQLite (dev) / HANA (prod)<br>
4. <strong>Protocol Layer</strong> — Auto-generated OData V4`,
    interviewQ: "What role does CDS play in the CAP framework?",
    interviewA: INTERVIEW_QA[1].a,
    debugQ: "Why is the mocked user 'alice' not being recognized?",
    debugCode: `// .cdsrc.json (broken):
{
  "requires": {
    "auth": {
      "kind": "mocked",
      "users": { "Alice": { "roles": ["admin"] } }
    }
  }
}
// alice logs in but has no roles`,
    debugFix: `// Fix: user keys are case-sensitive
// Must match exactly: "alice" (lowercase)
"users": { "alice": { "roles": ["admin"] } }`,
  },
  {
    day: 3,
    topic: "CDS Basics — Entities & Types",
    concept: "CDS Entity Definition",
    conceptDesc: "Learn how to define entities with primitive types (String, Integer, Boolean, Date, DateTime, Decimal), key fields, and custom types in CDS.",
    conceptCode: `namespace bookshop;

// Custom type
type Email : String(254);

// Entity definition
entity Books {
  key ID     : Integer;
      title  : String(100) not null;
      genre  : String(50);
      price  : Decimal(9,2);
      stock  : Integer default 0;
      email  : Email;       // Using custom type
      active : Boolean default true;
}`,
    task: "Build a Bookshop Data Model",
    taskDesc: "Create db/schema.cds with entities for Books, Authors, and Genres. Add appropriate types and constraints. Run `cds deploy --to sqlite` and verify the schema.",
    taskCode: `// db/schema.cds
namespace bookshop;
entity Authors {
  key ID   : Integer;
      name : String(100);
}
entity Books {
  key ID     : Integer;
      title  : String;
      author : Association to Authors;
}
// Deploy: cds deploy --to sqlite`,
    revision: "CAP Project Structure & Config",
    revisionDesc: "Review how .cdsrc.json, package.json, and folder structure work together to configure a CAP application.",
    revisionContent: `<strong>Checklist:</strong><br>
✓ db/ contains .cds data model files<br>
✓ srv/ contains service definitions and handlers<br>
✓ .cdsrc.json configures runtime behavior<br>
✓ <code>cds watch</code> hot-reloads on file changes`,
    interviewQ: "What data types are available in CDS?",
    interviewA: "CDS supports: String(n), Integer, Int64, Decimal(p,s), Double, Boolean, Date, Time, DateTime, Timestamp, UUID, LargeString (CLOB), LargeBinary (BLOB). You can also define custom types using `type MyType : String(50)` for reusability.",
    debugQ: "Entity field shows wrong type in SQLite schema",
    debugCode: `// CDS model:
entity Products {
  key ID    : Integer;
      price : String;   // ← Wrong type!
}
// Developer queries: SELECT price + 10 FROM Products
// Gets a string concatenation instead of addition`,
    debugFix: `// Fix: Use correct numeric type
entity Products {
  key ID    : Integer;
      price : Decimal(9, 2);  // ← Correct
}`,
  },
  {
    day: 4,
    topic: "CDS Aspects & Reusability",
    concept: "CDS Aspects (Mixins)",
    conceptDesc: "Aspects let you define reusable field groups and mix them into multiple entities. Use the `aspect` keyword and `:`  (mixin) syntax or extend with `extend`.",
    conceptCode: `// Define a reusable aspect
aspect Auditable {
  createdAt  : Timestamp @cds.on.insert: $now;
  createdBy  : String    @cds.on.insert: $user;
  modifiedAt : Timestamp @cds.on.update: $now;
  modifiedBy : String    @cds.on.update: $user;
}

// Mix into any entity
entity Books    : Auditable { key ID: Integer; title: String; }
entity Authors  : Auditable { key ID: Integer; name:  String; }
// Both entities now have the 4 audit fields!`,
    task: "Create a Reusable Auditable Aspect",
    taskDesc: "Define an `Auditable` aspect with created/modified timestamps and apply it to 3 different entities. Verify in SQLite that the audit columns appear in all three tables.",
    taskCode: `// db/schema.cds
using { cuid, managed } from '@sap/cds/common';
// CAP ships with built-in common aspects!
// 'cuid' adds UUID key, 'managed' adds audit fields

entity Orders : cuid, managed {
  item : String;
}
// That's all — key, createdAt, createdBy etc auto-added`,
    revision: "CDS Entities & Types (Day 3)",
    revisionDesc: "Revisit entity syntax, primitive types, and how to run `cds deploy` to push your model to SQLite.",
    revisionContent: `<strong>Common CDS type gotchas:</strong><br>
• <code>String</code> without (n) = unlimited on HANA, 5000 on SQLite<br>
• <code>Timestamp</code> vs <code>DateTime</code>: Timestamp includes timezone<br>
• Always use <code>Decimal</code> for money, never <code>Double</code><br>
• <code>UUID</code> generates random IDs automatically`,
    interviewQ: "What are CDS Aspects and why are they useful?",
    interviewA: INTERVIEW_QA[18].a,
    debugQ: "@cds.on.insert: $now not auto-populating",
    debugCode: `// Entity:
entity Orders {
  key ID : Integer;
  createdAt: Timestamp @cds.on.insert: '$now'; // quoted!
}
// createdAt is null after insert`,
    debugFix: `// Fix: $now and $user must NOT be quoted strings
createdAt: Timestamp @cds.on.insert: $now  // No quotes!`,
  },
  {
    day: 5,
    topic: "Associations — One-to-One & One-to-Many",
    concept: "CDS Associations",
    conceptDesc: "Associations define relationships between entities. CAP supports managed (auto FK) and unmanaged (manual) associations. `to one` vs `to many` controls cardinality.",
    conceptCode: `entity Authors {
  key ID    : Integer;
      name  : String;
      books : Association to many Books on books.author = $self;
}

entity Books {
  key ID     : Integer;
      title  : String;
      author : Association to Authors;  // Managed: auto-adds authorID FK
}

// Navigation in OData:
// GET /Books?$expand=author
// GET /Authors?$expand=books`,
    task: "Build Author-Book Relationships",
    taskDesc: "Add associations between Authors, Books, and a new Publishers entity. Test navigation using $expand in the CAP OData playground at localhost:4004.",
    taskCode: `// Try in browser after cds watch:
// http://localhost:4004/catalog/Books?$expand=author
// http://localhost:4004/catalog/Authors?$expand=books`,
    revision: "CDS Aspects (Day 4)",
    revisionDesc: "Recall how aspects like `managed` and `cuid` from @sap/cds/common auto-add audit fields and UUID keys.",
    revisionContent: `<strong>Built-in CAP common aspects:</strong><br>
• <code>cuid</code> — adds <code>key ID: UUID</code><br>
• <code>managed</code> — adds createdAt/By, modifiedAt/By with auto-fill<br>
• <code>temporal</code> — adds validFrom/validTo for time-travel queries<br>
<br>Usage: <code>entity Foo : cuid, managed { ... }</code>`,
    interviewQ: "What is the difference between Association and Composition?",
    interviewA: INTERVIEW_QA[2].a,
    debugQ: "Association navigation returns empty results",
    debugCode: `entity Books {
  key ID      : Integer;
      author  : Association to Authors;
}
// GET /Books/1/author returns empty
// But authorID is set in DB`,
    debugFix: `// Fix: Check that the association foreign key matches
// CAP managed association creates 'author_ID' (with underscore)
// not 'authorID' — verify your DB column name
// Run: cds compile --to sql to check generated schema`,
  },
  {
    day: 6,
    topic: "Compositions & Deep Operations",
    concept: "CDS Compositions",
    conceptDesc: "Compositions model parent-child ownership. A child can only exist within its parent. CAP automatically cascades DELETE and can handle deep inserts in one request.",
    conceptCode: `entity Orders {
  key ID    : UUID;
      total : Decimal;
      items : Composition of many OrderItems on items.order = $self;
}

entity OrderItems {
  key ID       : UUID;
      order    : Association to Orders;
      product  : String;
      quantity : Integer;
      price    : Decimal;
}

// Deep insert in one POST:
// POST /Orders
// { "total": 150, "items": [{ "product": "Book", "qty": 2 }] }`,
    task: "Build Orders with Deep Insert",
    taskDesc: "Create an Orders-OrderItems composition. Write a POST request that deep-inserts an Order with 3 items in a single call. Verify cascade delete works.",
    taskCode: `// POST http://localhost:4004/catalog/Orders
{
  "total": 250,
  "items": [
    { "product": "CAP Book", "quantity": 1, "price": 50 },
    { "product": "HANA Guide", "quantity": 2, "price": 100 }
  ]
}`,
    revision: "Associations (Day 5)",
    revisionDesc: "Review managed vs unmanaged associations, on-conditions, and how to use $expand to navigate associations in OData.",
    revisionContent: `<strong>Association quick reference:</strong><br>
• <code>Association to Author</code> — managed, auto FK: author_ID<br>
• <code>Association to many Books on books.author = $self</code> — backlink<br>
• <code>to one</code> — same as <code>to</code> but enforces single result<br>
• Navigate in OData: <code>$expand=items</code>`,
    interviewQ: "What is a Composition and how does it differ from an Association?",
    interviewA: "A Composition is a strong ownership relationship — children cannot exist without their parent. CAP automatically cascades deletes and supports deep insert/update in a single request. An Association is a loose reference between independent entities (like a FK), where both sides have independent lifecycles.",
    debugQ: "Deep insert fails with 'No key provided for OrderItems'",
    debugCode: `entity OrderItems {
  // Missing key!
  order   : Association to Orders;
  product : String;
}`,
    debugFix: `entity OrderItems {
  key ID   : UUID;  // Must have a key
  order    : Association to Orders;
  product  : String;
}`,
  },
  {
    day: 7,
    topic: "CDS Services — Defining & Exposing",
    concept: "CDS Service Definitions",
    conceptDesc: "A CDS service exposes entities as OData endpoints. Use `service` keyword, selectively expose entities, and control what operations are available via annotations.",
    conceptCode: `// srv/catalog-service.cds
using { bookshop } from '../db/schema';

service CatalogService @(path:'/catalog') {
  // Expose as read-only
  @readonly entity Books    as projection on bookshop.Books;

  // Full CRUD exposure
  entity Authors as projection on bookshop.Authors;

  // Expose with restricted fields
  entity SafeBooks as projection on bookshop.Books
    excluding { internalCode, costPrice };
}`,
    task: "Build a Multi-Entity Service",
    taskDesc: "Create a CatalogService exposing Books and Authors. Restrict Books to read-only. Expose an AdminService with full CRUD for both. Test all endpoints in the dev portal.",
    taskCode: `// srv/admin-service.cds
using { bookshop } from '../db/schema';
service AdminService @(requires: 'admin') {
  entity Books   as projection on bookshop.Books;
  entity Authors as projection on bookshop.Authors;
}`,
    revision: "Compositions (Day 6)",
    revisionDesc: "Recall how compositions work, the lifecycle link between parent and child, and how to perform deep inserts.",
    revisionContent: `<strong>Composition vs Association summary:</strong><br>
• Composition → owned, cascades, deep operations<br>
• Association → referenced, independent, no cascade<br>
• Use Composition for: OrderItems, InvoiceLineItems, AddressLines<br>
• Use Association for: Books-Authors, Products-Category`,
    interviewQ: "How does CAP auto-generate OData APIs from CDS?",
    interviewA: INTERVIEW_QA[9].a,
    debugQ: "Service exposes all fields including sensitive ones",
    debugCode: `service PublicService {
  entity Books as projection on db.Books;
  // costPrice and internalCode are visible to everyone!
}`,
    debugFix: `service PublicService {
  entity Books as projection on db.Books
    excluding { costPrice, internalCode };
  // Or use a specific projection:
  // entity Books as select from db.Books { ID, title, price };
}`,
  },
  // WEEK 2
  {
    day: 8,
    topic: "Projections & CDS Views",
    concept: "CDS Projections & Views",
    conceptDesc: "Projections reshape entity exposure. CDS Views are like SQL views — they can join, filter, and compute fields. Use them to create denormalized read models.",
    conceptCode: `// db/schema.cds or srv/service.cds

// Projection: subset of entity
entity BookSummary as projection on Books {
  ID, title, price,
  author.name as authorName  // flattened nav path
}

// View with expression
entity ExpensiveBooks as select from Books
  where price > 100;

// View with join
entity BooksWithGenre as select from Books
  left join Genres on Genres.ID = Books.genre_ID {
    Books.title, Genres.name as genre
  };`,
    task: "Create a Denormalized View",
    taskDesc: "Build a `BookDetails` view that combines Books, Authors, and Publishers into a single flat read model. Expose it in CatalogService as read-only.",
    taskCode: `entity BookDetails as select from Books {
  ID,
  title,
  price,
  author.name as authorName,
  publisher.country as publishedIn
};
// service:
@readonly entity BookDetails as projection on db.BookDetails;`,
    revision: "CDS Services (Day 7)",
    revisionDesc: "Review service definitions, @readonly and @insertonly annotations, path customization, and entity projection in services.",
    revisionContent: `<strong>Service annotations quick ref:</strong><br>
• <code>@readonly</code> — only GET allowed<br>
• <code>@insertonly</code> — only POST allowed<br>
• <code>@(path:'/my-path')</code> — custom URL path<br>
• <code>@(requires:'role')</code> — protect with role`,
    interviewQ: "What is a CDS Projection and why is it used?",
    interviewA: INTERVIEW_QA[3].a,
    debugQ: "Accessing navigation path in projection gives error",
    debugCode: `entity BookSummary as projection on Books {
  ID,
  title,
  authorname  // Typo: missing dot notation
}`,
    debugFix: `entity BookSummary as projection on Books {
  ID,
  title,
  author.name as authorName  // Correct nav path with dot
}`,
  },
  {
    day: 9,
    topic: "Event Handlers — Before/On/After",
    concept: "CAP Event Handler Phases",
    conceptDesc: "CAP services emit events for every operation. Register handlers using `srv.before()`, `srv.on()`, and `srv.after()`. Before = validate. On = execute. After = enrich/notify.",
    conceptCode: `// srv/cat-service.js
const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {

  this.before('CREATE', 'Books', (req) => {
    // Validate before DB write
    if (req.data.price < 0) return req.error(400, 'Price cannot be negative');
  });

  this.on('READ', 'Books', async (req) => {
    // Custom read — replaces default DB read
    const books = await SELECT.from('bookshop.Books');
    return books;
  });

  this.after('READ', 'Books', (books) => {
    // Enrich after read
    books.forEach(b => b.discountedPrice = b.price * 0.9);
  });
});`,
    task: "Add Validation Handler",
    taskDesc: "Write a `before CREATE` handler on Books that validates: price > 0, title length > 3, and stock >= 0. Return meaningful error messages for each.",
    taskCode: `this.before('CREATE', 'Books', (req) => {
  const { title, price, stock } = req.data;
  if (!title || title.length < 3) req.error(400,'Title too short');
  if (price <= 0) req.error(400,'Price must be positive');
  if (stock < 0)  req.error(400,'Stock cannot be negative');
});`,
    revision: "Projections & Views (Day 8)",
    revisionDesc: "Review CDS projections, view syntax, navigation path flattening, and how to expose denormalized views in services.",
    revisionContent: `<strong>Projection vs View:</strong><br>
• <code>projection on Entity</code> — same table, column subset/rename<br>
• <code>select from Entity</code> — like SQL view, can filter/join<br>
• Both appear as OData entity sets<br>
• Views are read-only by default unless you add <code>@insertonly</code>`,
    interviewQ: "What are the three phases of CAP event handlers?",
    interviewA: INTERVIEW_QA[4].a,
    debugQ: "Handler `this.after` receives undefined for books",
    debugCode: `this.after('READ', 'Books', (result) => {
  result.forEach(b => b.label = 'Featured'); // TypeError!
});`,
    debugFix: `// after-READ can receive a single object OR an array
// Safely handle both:
this.after('READ', 'Books', (result) => {
  const books = Array.isArray(result) ? result : [result];
  books.forEach(b => b.label = 'Featured');
});`,
  },
  {
    day: 10,
    topic: "Custom Logic & Business Rules",
    concept: "Writing Custom Service Logic",
    conceptDesc: "Implement business rules in service handlers. Use CAP's CQN (CDS Query Notation) for DB-agnostic queries, access `req.user`, `req.data`, and `req.params`.",
    conceptCode: `module.exports = cds.service.impl(async function() {

  // Custom action handler
  this.on('submitOrder', async (req) => {
    const { bookID, quantity } = req.data;

    // Check stock
    const book = await SELECT.one.from('bookshop.Books')
      .where({ ID: bookID });
    if (!book) return req.error(404, 'Book not found');
    if (book.stock < quantity) return req.error(409, 'Out of stock');

    // Reduce stock
    await UPDATE('bookshop.Books')
      .set({ stock: book.stock - quantity })
      .where({ ID: bookID });

    return { message: 'Order placed!', remaining: book.stock - quantity };
  });
});`,
    task: "Implement Stock Management Logic",
    taskDesc: "Create an `action submitOrder(bookID: Integer, quantity: Integer)` with full stock validation. Write an `action restockBook` for admin use. Test with Postman or curl.",
    taskCode: `// srv/catalog-service.cds
service CatalogService {
  entity Books as projection on bookshop.Books;
  action submitOrder(bookID: Integer, qty: Integer) returns String;
  action restockBook(bookID: Integer, qty: Integer) returns String;
}`,
    revision: "Event Handlers (Day 9)",
    revisionDesc: "Review before/on/after handler registration, `req.error()` for validation, and the difference between modifying `req.data` vs returning data.",
    revisionContent: `<strong>Handler return values:</strong><br>
• <code>before</code>: return nothing; use <code>req.error()</code> to stop<br>
• <code>on</code>: return the result (replaces CAP default)<br>
• <code>after</code>: modify result in-place (no return needed)<br>
• <code>req.reject(code, msg)</code> also stops processing`,
    interviewQ: "How would you implement a stock check before an order is placed?",
    interviewA: "Use a `before` handler on the ORDER CREATE event to read current stock with `SELECT.one.from()`, compare against requested quantity, and call `req.error(409, 'Insufficient stock')` to abort if stock is insufficient. Alternatively, define a custom `action submitOrder` with full stock management logic in an `on` handler.",
    debugQ: "UPDATE query silently does nothing",
    debugCode: `await UPDATE('bookshop.Books')
  .set({ stock: newStock })
  .where({ id: bookID }); // lowercase 'id'`,
    debugFix: `// Fix: CDS key names are case-sensitive
// If entity key is 'ID' (uppercase), use uppercase:
await UPDATE('bookshop.Books')
  .set({ stock: newStock })
  .where({ ID: bookID }); // Uppercase 'ID'`,
  },
  {
    day: 11,
    topic: "OData Protocol Deep Dive",
    concept: "OData V4 Query Options",
    conceptDesc: "Master OData query options: $filter, $select, $expand, $orderby, $top, $skip, $count, and $search. These are the primary way clients interact with your CAP service.",
    conceptCode: `// GET — filter by price range
GET /catalog/Books?$filter=price gt 20 and price lt 100

// GET — only specific fields
GET /catalog/Books?$select=ID,title,price

// GET — with related data
GET /catalog/Books?$expand=author($select=name)

// GET — sorted, paginated
GET /catalog/Books?$orderby=price desc&$top=10&$skip=20

// GET — count total
GET /catalog/Books?$count=true

// GET — nested expand
GET /catalog/Orders?$expand=items($expand=product)`,
    task: "Test All OData Query Options",
    taskDesc: "Using your Bookshop service, write and test 8 different OData queries covering $filter, $select, $expand, $orderby, $top/$skip, $count, $search, and a nested $expand.",
    taskCode: `// Create a test file: odata-queries.http
// Use VS Code REST Client extension

### Filter
GET http://localhost:4004/catalog/Books?$filter=price gt 50

### Expand with select
GET http://localhost:4004/catalog/Books?$expand=author($select=name)&$top=5`,
    revision: "Custom Logic & Actions (Day 10)",
    revisionDesc: "Review CQN fluent API (SELECT/INSERT/UPDATE/DELETE), how to define custom actions in CDS, and accessing req.data in handlers.",
    revisionContent: `<strong>CQN quick reference:</strong><br>
• <code>SELECT.from('Entity').where({ID: 1})</code><br>
• <code>SELECT.one.from('Entity')</code> — single result<br>
• <code>INSERT.into('Entity').entries({...})</code><br>
• <code>UPDATE('Entity').set({}).where({})</code><br>
• <code>DELETE.from('Entity').where({})</code>`,
    interviewQ: "How does CAP handle OData $expand for associations?",
    interviewA: "CAP auto-handles $expand for all exposed associations. In the DB layer, it generates efficient JOINs. You can control expandability with @sap/cds annotations. For nested expands like `$expand=items($expand=product)`, CAP resolves the chain automatically. Custom handlers can intercept expand behavior by checking `req.query.SELECT.columns`.",
    debugQ: "$filter with string value returns no results",
    debugCode: `// URL constructed in JS:
const genre = "fiction";
fetch('/catalog/Books?$filter=genre eq ' + genre)
// Returns empty even though fiction books exist`,
    debugFix: `// Fix: String values in $filter must be quoted with single quotes
fetch('/catalog/Books?$filter=genre eq \'' + genre + '\'')
// Or use encodeURIComponent properly:
const filter = \`genre eq '\${genre}'\`;
fetch('/catalog/Books?' + new URLSearchParams({ '$filter': filter }))`,
  },
  {
    day: 12,
    topic: "OData Actions & Functions",
    concept: "Custom Actions & Functions in CDS",
    conceptDesc: "Actions (POST, with side effects) and Functions (GET, idempotent) extend your OData API beyond CRUD. Bound versions attach to entity instances.",
    conceptCode: `// srv/catalog-service.cds
service CatalogService {
  entity Books as projection on bookshop.Books;

  // Unbound action (operates on service level)
  action   submitOrder(bookID: Integer, qty: Integer) returns String;

  // Unbound function (safe, no side effects)
  function topSellers(limit: Integer) returns array of Books;

  // Bound action (on specific Book instance)
  action Books.discount(percent: Integer) returns Books;
}

// Handler:
this.on('topSellers', async (req) => {
  const { limit } = req.data;
  return SELECT.from('bookshop.Books').orderBy('sold desc').limit(limit);
});`,
    task: "Build Custom Actions & Functions",
    taskDesc: "Implement: (1) `function topSellers(limit)` returning Books sorted by sales, (2) `action applyDiscount(bookID, pct)` updating price, (3) `action resetStock(bookID)` for admin.",
    taskCode: `// Test in REST client:
### Invoke function (GET)
GET http://localhost:4004/catalog/topSellers(limit=5)

### Invoke action (POST)
POST http://localhost:4004/catalog/submitOrder
Content-Type: application/json
{ "bookID": 1, "qty": 2 }`,
    revision: "OData Query Options (Day 11)",
    revisionDesc: "Review all OData query parameters and practice combining them ($filter + $select + $expand + $orderby + $top).",
    revisionContent: `<strong>OData filter operators:</strong><br>
• Comparison: <code>eq ne lt le gt ge</code><br>
• Logic: <code>and or not</code><br>
• String: <code>startswith(), endswith(), contains()</code><br>
• Math: <code>add sub mul div mod</code><br>
• Date: <code>year() month() day()</code>`,
    interviewQ: "What is the difference between an OData Action and Function?",
    interviewA: INTERVIEW_QA[13].a,
    debugQ: "Function call returns 405 Method Not Allowed",
    debugCode: `// Developer calls function with POST:
POST http://localhost:4004/catalog/topSellers(limit=5)
// 405 Method Not Allowed`,
    debugFix: `// Fix: Functions must be called with GET, not POST!
// Functions = safe/idempotent = GET
GET http://localhost:4004/catalog/topSellers(limit=5)
// Actions = side effects = POST`,
  },
  {
    day: 13,
    topic: "Authentication & Authorization Basics",
    concept: "CAP Auth — @requires & @restrict",
    conceptDesc: "Secure your services declaratively with `@requires` (role check) and `@restrict` (fine-grained CRUD+row level). Use mocked auth for local dev, XSUAA for production.",
    conceptCode: `// srv/catalog-service.cds

// Entire service requires authentication
@requires: 'authenticated-user'
service CatalogService {

  // Any authenticated user can read
  @readonly entity Books as projection on bookshop.Books;

  // Only 'admin' role can manage authors
  @restrict: [
    { grant: ['READ','WRITE'], to: 'admin' },
    { grant: 'READ', to: 'viewer' }
  ]
  entity Authors as projection on bookshop.Authors;
}`,
    task: "Implement Role-Based Access",
    taskDesc: "Protect your service so: unauthenticated users see nothing, 'viewer' role can only READ, 'admin' role has full CRUD. Test with mocked users alice (admin) and bob (viewer).",
    taskCode: `// .cdsrc.json
{
  "requires": {
    "auth": {
      "kind": "mocked",
      "users": {
        "alice": { "roles": ["admin"] },
        "bob": { "roles": ["viewer"] },
        "carol": {}
      }
    }
  }
}`,
    revision: "Actions & Functions (Day 12)",
    revisionDesc: "Review the difference between bound/unbound actions/functions, how to invoke them via HTTP, and writing their handlers.",
    revisionContent: `<strong>Action vs Function rule:</strong><br>
• Function → GET request, no side effects, safe to cache<br>
• Action → POST request, may change data<br>
• Bound → attached to entity: <code>entity.action()</code><br>
• Unbound → service-level: <code>service.action()</code>`,
    interviewQ: "What is the difference between @requires and @restrict in CDS?",
    interviewA: INTERVIEW_QA[7].a,
    debugQ: "All users are getting 403 even admin",
    debugCode: `@requires: 'Admin'  // Capital A!
service AdminService { ... }
// .cdsrc.json: alice has role 'admin' (lowercase)`,
    debugFix: `// Fix: Role names are case-sensitive everywhere
// Either change annotation:
@requires: 'admin'  // lowercase to match mocked user
// Or change .cdsrc.json:
"alice": { "roles": ["Admin"] }  // Match the annotation`,
  },
  {
    day: 14,
    topic: "XSUAA — Security Setup",
    concept: "XSUAA Configuration",
    conceptDesc: "XSUAA is BTP's OAuth 2.0 server. You define security in xs-security.json (scopes, role templates). XSUAA issues JWT tokens that CAP validates automatically.",
    conceptCode: `// xs-security.json
{
  "xsappname": "my-bookshop",
  "tenant-mode": "dedicated",
  "scopes": [
    { "name": "$XSAPPNAME.admin",  "description": "Admin access" },
    { "name": "$XSAPPNAME.viewer", "description": "Read-only access" }
  ],
  "role-templates": [
    {
      "name": "Admin",
      "description": "Administrator",
      "scope-references": ["$XSAPPNAME.admin"]
    },
    {
      "name": "Viewer",
      "scope-references": ["$XSAPPNAME.viewer"]
    }
  ]
}`,
    task: "Write xs-security.json for Your App",
    taskDesc: "Create a complete xs-security.json for the Bookshop app with admin and viewer scopes. Link scopes to role-templates. Practice explaining what each section does.",
    taskCode: `// After deploying to BTP:
// 1. Create XSUAA service instance:
cf create-service xsuaa application my-bookshop-auth -c xs-security.json
// 2. Bind to your app:
cf bind-service my-bookshop my-bookshop-auth
// 3. Assign role collections to users in BTP Cockpit`,
    revision: "Auth Basics (Day 13)",
    revisionDesc: "Review @requires vs @restrict, mocked auth setup, and how CAP maps roles to service access.",
    revisionContent: `<strong>Auth annotation quick ref:</strong><br>
• <code>@requires: 'role'</code> — all operations need this role<br>
• <code>@restrict: [{grant:'READ', to:'viewer'}]</code> — per-op<br>
• <code>@restrict: [{grant:'READ', to:'viewer', where:'...'}]</code> — row level<br>
• In Node.js: <code>req.user.is('admin')</code>`,
    interviewQ: "What is XSUAA and why is it used in SAP BTP?",
    interviewA: INTERVIEW_QA[5].a,
    debugQ: "JWT token is rejected despite correct role",
    debugCode: `// xs-security.json scope:
"name": "$XSAPPNAME.Admin"  // Capital A

// srv/service.cds:
@requires: 'admin'  // lowercase

// Auth fails even with correct role collection`,
    debugFix: `// Fix: Scope name in xs-security.json and @requires must align
// Convention: use lowercase in both:
"name": "$XSAPPNAME.admin"
// and:
@requires: 'admin'
// BTP strips $XSAPPNAME. prefix when validating JWT claims`,
  },
  {
    day: 15,
    topic: "Row-Level Security & $user",
    concept: "Row-Level Security in CAP",
    conceptDesc: "Restrict data access at the row level using `where` clauses in @restrict. Use `$user` pseudo-variable to filter by logged-in user. CAP injects these as SQL WHERE conditions.",
    conceptCode: `// Only see your own orders
entity Orders @restrict: [{
  grant: 'READ',
  to:    'viewer',
  where: 'createdBy = $user'
}] as projection on bookshop.Orders;

// In Node.js handler alternative:
this.before('READ', 'Orders', (req) => {
  req.query.where({ createdBy: req.user.id });
});

// $user values:
// req.user.id    → user login name
// req.user.attr  → custom attributes from XSUAA
// req.user.is('admin') → role check`,
    task: "Implement Personal Data Isolation",
    taskDesc: "Make Orders visible only to their creator using row-level @restrict. Also write a handler version using req.query.where(). Compare both approaches.",
    taskCode: `// Test: create orders as alice, verify bob cannot see them
// Login as alice: POST /Orders { customer: 'Test' }
// Login as bob:   GET /Orders → should return empty
// Login as admin: GET /Orders → should see all`,
    revision: "XSUAA (Day 14)",
    revisionDesc: "Recall xs-security.json structure, scopes, role templates, and how they map to CAP @requires annotations.",
    revisionContent: `<strong>xs-security.json → CAP mapping:</strong><br>
• <code>scope: $XSAPPNAME.admin</code> → <code>@requires: 'admin'</code><br>
• Scope → Role Template → Role Collection → BTP User<br>
• Local: mocked users in .cdsrc.json<br>
• BTP: XSUAA JWT → CAP auto-validates`,
    interviewQ: "How does row-level security work in CAP?",
    interviewA: INTERVIEW_QA[27].a,
    debugQ: "`$user` in @restrict where clause not filtering",
    debugCode: `entity Orders @restrict: [{
  grant: 'READ', to: 'viewer',
  where: 'createdBy = "$user"'  // Quoted!
}] ...`,
    debugFix: `// Fix: $user must NOT be quoted — it's a CAP pseudo-variable
entity Orders @restrict: [{
  grant: 'READ', to: 'viewer',
  where: 'createdBy = $user'  // No quotes
}] ...`,
  },
  // WEEK 3
  {
    day: 16,
    topic: "CAP Destinations & Remote Services",
    concept: "Consuming External Services",
    conceptDesc: "CAP can consume external OData/REST APIs via Remote Services. Define in cds.requires, connect with cds.connect.to(), and delegate queries transparently.",
    conceptCode: `// package.json (or .cdsrc.json)
"cds": {
  "requires": {
    "ExternalCatalog": {
      "kind": "odata-v4",
      "credentials": {
        "url": "https://services.odata.org/v4/Northwind/Northwind.svc"
      }
    }
  }
}

// srv/mashup.js
const ExternalSvc = await cds.connect.to('ExternalCatalog');

this.on('READ', 'Products', async (req) => {
  // Delegate query to external service
  return ExternalSvc.run(req.query);
});`,
    task: "Consume a Public OData Service",
    taskDesc: "Connect your CAP app to the public Northwind OData service. Expose Products via your local service by delegating reads. Add a mashup that joins local and remote data.",
    taskCode: `// Test: GET http://localhost:4004/my-service/Products
// CAP proxies the call to Northwind and returns data
// The caller doesn't know it's remote!`,
    revision: "Row-Level Security (Day 15)",
    revisionDesc: "Review $user, @restrict with where clauses, and the req.user object — its .id, .roles, .is(), and .attr properties.",
    revisionContent: `<strong>req.user properties:</strong><br>
• <code>req.user.id</code> — login name string<br>
• <code>req.user.roles</code> — array of assigned roles<br>
• <code>req.user.is('admin')</code> — boolean role check<br>
• <code>req.user.attr.customField</code> — XSUAA custom attributes`,
    interviewQ: "What is a CAP Remote Service and how do you consume it?",
    interviewA: INTERVIEW_QA[26].a,
    debugQ: "Remote service call fails with SSL error locally",
    debugCode: `// package.json cds.requires:
"ExternalAPI": {
  "kind": "rest",
  "credentials": { "url": "https://external-api.com" }
}
// Error: UNABLE_TO_VERIFY_LEAF_SIGNATURE`,
    debugFix: `// For local dev only (never in production!):
// Add to credentials:
"credentials": {
  "url": "https://external-api.com",
  "requestTimeout": 30000
}
// Or set env: NODE_TLS_REJECT_UNAUTHORIZED=0 (DEV ONLY!)
// Better: use a mock with cds.requires.kind = 'odata-v4' + mockdata`,
  },
  {
    day: 17,
    topic: "BTP Destination Service",
    concept: "SAP BTP Destination Service",
    conceptDesc: "The Destination Service stores connectivity details (URL, auth credentials, OAuth config) for external systems. CAP uses it in production instead of hardcoded credentials.",
    conceptCode: `// mta.yaml — declare destination service dependency
resources:
  - name: my-destination-service
    type: org.cloudfoundry.managed-service
    parameters:
      service: destination
      service-plan: lite

// package.json — use destination name (not URL)
"cds": {
  "requires": {
    "ExternalCatalog": {
      "kind": "odata-v4",
      "credentials": {
        "destination": "MY_DESTINATION_NAME"
      }
    }
  }
}`,
    task: "Set Up a BTP Destination",
    taskDesc: "In BTP Cockpit, create a destination for an external API (use any public OData endpoint). Reference it by name in your CAP app's cds.requires. Deploy and test.",
    taskCode: `// Steps:
// 1. BTP Cockpit → Connectivity → Destinations → New
// 2. Name: MY_CATALOG_DEST, URL: https://..., Auth: NoAuth
// 3. In mta.yaml: requires my-destination-service
// 4. In package.json: credentials.destination = "MY_CATALOG_DEST"`,
    revision: "Remote Services (Day 16)",
    revisionDesc: "Review cds.connect.to(), query delegation pattern, and how to mock external services during local development.",
    revisionContent: `<strong>Remote service local mock:</strong><br>
Add to .cdsrc.json for local dev:<br>
<code>{ "requires": { "ExternalSvc": { "kind": "odata-v4", "credentials": { "url": "http://localhost:4004/external" } } } }</code><br>
Then: <code>cds mock ExternalSvc</code>`,
    interviewQ: "What is the BTP Destination Service and why use it instead of hardcoded URLs?",
    interviewA: INTERVIEW_QA[10].a,
    debugQ: "Destination lookup fails in Cloud Foundry",
    debugCode: `// mta.yaml module does not declare destination dependency:
modules:
  - name: my-app
    requires: []  // Missing destination service!`,
    debugFix: `// Fix: Add destination service to module requires:
modules:
  - name: my-app
    requires:
      - name: my-destination-service
        parameters:
          content-target: true`,
  },
  {
    day: 18,
    topic: "CAP Transactions Deep Dive",
    concept: "Manual Transactions with cds.tx()",
    conceptDesc: "By default, each CAP request auto-manages a DB transaction. For complex multi-step operations, use `cds.tx()` to manually control transaction boundaries.",
    conceptCode: `// Manual transaction — all or nothing
this.on('transferStock', async (req) => {
  const { fromBookID, toBookID, qty } = req.data;

  await cds.tx(async (tx) => {
    // Both ops run in same transaction
    const from = await tx.run(SELECT.one.from('Books').where({ID: fromBookID}));
    if (from.stock < qty) throw new Error('Insufficient stock');

    await tx.run(UPDATE('Books').set({stock: {'-=': qty}}).where({ID: fromBookID}));
    await tx.run(UPDATE('Books').set({stock: {'+=': qty}}).where({ID: toBookID}));
  });
  // If any step throws → full rollback
  return 'Transfer complete';
});`,
    task: "Implement Atomic Stock Transfer",
    taskDesc: "Build a `transferStock` action that moves qty from one book to another atomically. Verify that if the second UPDATE fails (e.g., invalid ID), the first UPDATE is rolled back.",
    taskCode: `// Simulate failure: use invalid target bookID
// POST /catalog/transferStock
{ "fromBookID": 1, "toBookID": 999, "qty": 5 }
// Verify: stock of book 1 should NOT have decreased`,
    revision: "BTP Destination Service (Day 17)",
    revisionDesc: "Review how destinations are configured in BTP Cockpit, referenced in mta.yaml, and consumed in CAP via credentials.destination.",
    revisionContent: `<strong>Destination types:</strong><br>
• <strong>HTTP</strong> — REST/OData external APIs<br>
• <strong>RFC</strong> — ABAP function modules via Cloud Connector<br>
• <strong>LDAP</strong> — directory services<br>
• Auth types: NoAuth, BasicAuth, OAuth2ClientCredentials, SAMLAssertion`,
    interviewQ: "What is cds.tx() and when would you use it?",
    interviewA: INTERVIEW_QA[19].a,
    debugQ: "Second DB operation succeeds even when first fails",
    debugCode: `// No explicit transaction:
await UPDATE('Books').set({stock: newStock1}).where({ID: 1});
// If this line throws:
await UPDATE('Books').set({stock: newStock2}).where({ID: 2});
// First update is already committed!`,
    debugFix: `// Fix: Wrap in cds.tx() for atomicity:
await cds.tx(async tx => {
  await tx.run(UPDATE('Books').set({stock: newStock1}).where({ID: 1}));
  await tx.run(UPDATE('Books').set({stock: newStock2}).where({ID: 2}));
}); // Both commit together or both rollback`,
  },
  {
    day: 19,
    topic: "Draft Handling in CAP",
    concept: "@odata.draft.enabled",
    conceptDesc: "Draft-enabled entities let users work on unsaved versions. CAP auto-creates shadow tables, handles activate/discard, and integrates seamlessly with Fiori Elements.",
    conceptCode: `// srv/admin-service.cds
service AdminService @(requires: 'admin') {

  @odata.draft.enabled
  entity Books as projection on bookshop.Books;
}

// CAP automatically:
// 1. Creates Books_drafts shadow table
// 2. Exposes draft CRUD operations
// 3. Handles Activate action (draft → active)
// 4. Handles Discard action (delete draft)
// 5. Validates on Activate only

// Custom validation on activate:
this.before('SAVE', 'Books', (req) => {
  // Only runs when user activates draft
  if (!req.data.price) req.error(400, 'Price required');
});`,
    task: "Enable Draft on Books Entity",
    taskDesc: "Enable draft mode on the Books entity. Create a book, leave it as draft. Verify it's in the drafts table. Activate it and verify it moves to the active table.",
    taskCode: `// Draft workflow in OData:
// 1. POST /AdminService/Books → creates draft (IsActiveEntity=false)
// 2. PATCH /AdminService/Books(ID=x,IsActiveEntity=false) → edit
// 3. POST /AdminService/Books(ID=x,...)/AdminService.draftActivate → publish
// 4. DELETE /AdminService/Books(ID=x,...)/AdminService.draftDiscard → cancel`,
    revision: "Transactions (Day 18)",
    revisionDesc: "Review cds.tx() usage, the automatic transaction management in CAP, and when manual transaction control is necessary.",
    revisionContent: `<strong>CAP auto-transactions:</strong><br>
• Each HTTP request runs in one implicit transaction<br>
• Multiple <code>before/on/after</code> handlers share same tx<br>
• Use <code>cds.tx()</code> only when you need:<br>
  — Cross-service transactions<br>
  — Background jobs<br>
  — Explicit rollback control`,
    interviewQ: "How does CAP support draft handling?",
    interviewA: INTERVIEW_QA[16].a,
    debugQ: "Draft activation fails with 'No active entity found'",
    debugCode: `// Entity defined in db layer:
entity Books { key ID: Integer; title: String; }
// Draft enabled in service — but no @odata.draft.enabled!
service AdminService {
  entity Books as projection on bookshop.Books; // Missing annotation!
}`,
    debugFix: `service AdminService {
  @odata.draft.enabled  // Add this annotation
  entity Books as projection on bookshop.Books;
}`,
  },
  {
    day: 20,
    topic: "CAP Fiori Annotations",
    concept: "CDS UI Annotations for Fiori",
    conceptDesc: "Generate Fiori Elements UIs purely from CDS annotations. @UI.LineItem, @UI.FieldGroup, @UI.Facets, and @Common.Label are the core annotations every developer must know.",
    conceptCode: `// srv/annotations.cds
using CatalogService from './catalog-service';

annotate CatalogService.Books with @(
  UI: {
    LineItem: [
      { Value: title,  Label: 'Book Title' },
      { Value: price,  Label: 'Price' },
      { Value: author.name, Label: 'Author' }
    ],
    HeaderInfo: {
      TypeName: 'Book',
      TypeNamePlural: 'Books',
      Title: { Value: title }
    },
    Facets: [{
      $Type: 'UI.ReferenceFacet',
      Label: 'General Info',
      Target: '@UI.FieldGroup#Main'
    }],
    FieldGroup#Main: {
      Data: [{ Value: title }, { Value: price }, { Value: genre }]
    }
  }
);`,
    task: "Annotate Your Service for Fiori",
    taskDesc: "Create an annotations.cds file for your Bookshop. Add @UI.LineItem for list view, @UI.HeaderInfo, and @UI.Facets for detail view. Launch Fiori preview with `cds watch`.",
    taskCode: `// After adding annotations:
// Open http://localhost:4004/$fiori-preview/
// Select your service → see generated Fiori app!
// No frontend code needed — purely CDS annotations`,
    revision: "Draft Handling (Day 19)",
    revisionDesc: "Recall @odata.draft.enabled, the shadow tables CAP creates, SAVE vs CREATE/UPDATE event firing, and the draft activate/discard OData operations.",
    revisionContent: `<strong>Draft key fields added by CAP:</strong><br>
• <code>IsActiveEntity</code> — true = active, false = draft<br>
• <code>HasActiveEntity</code> — draft has active counterpart<br>
• <code>HasDraftEntity</code> — active has draft being edited<br>
These are automatically added; never define them manually`,
    interviewQ: "What are CAP UI annotations and how do they generate Fiori UIs?",
    interviewA: INTERVIEW_QA[7].a + " Additionally, @UI annotations like @UI.LineItem, @UI.Facets, and @UI.FieldGroup in CDS files drive Fiori Elements templates — enabling fully functional list/detail UIs without a single line of JavaScript frontend code.",
    debugQ: "Fiori preview shows empty list even with data",
    debugCode: `// annotations.cds
annotate CatalogService.Books with @(
  UI.LineItem: [
    // Missing Value property:
    { Label: 'Title' },  // No Value!
    { Value: price }
  ]
);`,
    debugFix: `annotate CatalogService.Books with @(
  UI.LineItem: [
    { Value: title, Label: 'Title' },  // Always include Value
    { Value: price, Label: 'Price' }
  ]
);`,
  },
  // WEEK 4
  {
    day: 21,
    topic: "CAP Messaging & Events",
    concept: "Event-Driven with CAP Messaging",
    conceptDesc: "CAP supports async messaging via srv.emit() for in-process events and SAP Event Mesh for cross-service events. Decouple services using the observer pattern.",
    conceptCode: `// Emit an event from one service:
this.on('CREATE', 'Orders', async (req, next) => {
  const result = await next(); // Run default DB insert
  await this.emit('OrderPlaced', { orderID: result.ID, ...req.data });
  return result;
});

// Subscribe in another handler or service:
this.on('OrderPlaced', async (msg) => {
  const { orderID } = msg.data;
  // Send confirmation email, update analytics, etc.
  console.log('New order placed:', orderID);
});

// For cross-service (Event Mesh):
// cds.requires.messaging: { kind: 'enterprise-messaging' }`,
    task: "Build an Event-Driven Stock Alert",
    taskDesc: "After an order is placed, emit a 'LowStockAlert' event if stock drops below 5. Subscribe to it and log a warning. Test the full event chain.",
    taskCode: `// After order create handler:
const book = await SELECT.one.from('Books').where({ID: bookID});
if (book.stock < 5) {
  await this.emit('LowStockAlert', { bookID, remaining: book.stock });
}
// Subscriber:
this.on('LowStockAlert', (msg) => {
  console.warn('⚠️ Low stock:', msg.data);
});`,
    revision: "Fiori Annotations (Day 20)",
    revisionDesc: "Recall key @UI annotations: LineItem, HeaderInfo, Facets, FieldGroup, and how to use the $fiori-preview URL to see them live.",
    revisionContent: `<strong>Essential @UI annotations:</strong><br>
• <code>@UI.LineItem</code> — List page columns<br>
• <code>@UI.HeaderInfo</code> — Detail page header<br>
• <code>@UI.Facets</code> — Detail page sections<br>
• <code>@UI.FieldGroup</code> — Group of fields in a facet<br>
• <code>@Common.Label</code> — Field labels everywhere`,
    interviewQ: "How does event messaging work in CAP?",
    interviewA: INTERVIEW_QA[21].a,
    debugQ: "Event handler fires but msg.data is undefined",
    debugCode: `// Emitter:
await this.emit('OrderPlaced', result.ID); // Passing ID as raw value

// Subscriber:
this.on('OrderPlaced', (msg) => {
  console.log(msg.data.orderID); // undefined!
});`,
    debugFix: `// Fix: emit() second arg should be an object (event payload)
await this.emit('OrderPlaced', { orderID: result.ID });
// Subscriber:
this.on('OrderPlaced', (msg) => {
  console.log(msg.data.orderID); // Works!
});`,
  },
  {
    day: 22,
    topic: "CAP Testing Fundamentals",
    concept: "Testing CAP Services with Jest",
    conceptDesc: "Write unit and integration tests for CAP using Jest and @sap/cds/lib. Use cds.test() to spin up an in-memory service with SQLite for fast, isolated tests.",
    conceptCode: `// test/catalog.test.js
const cds = require('@sap/cds/lib');

describe('CatalogService Tests', () => {
  const { GET, POST, DELETE, PATCH, axios } = cds.test('serve', 'all');

  it('should return list of books', async () => {
    const { data } = await GET('/catalog/Books');
    expect(data.value).toBeDefined();
    expect(Array.isArray(data.value)).toBe(true);
  });

  it('should reject negative price', async () => {
    const response = await POST('/catalog/Books',
      { title: 'Test', price: -10, stock: 5 },
      { validateStatus: () => true }
    );
    expect(response.status).toBe(400);
  });
});`,
    task: "Write 5 CAP Service Tests",
    taskDesc: "Write tests for: (1) GET all books, (2) CREATE book with valid data, (3) CREATE with invalid price returns 400, (4) READ non-existent book returns 404, (5) UPDATE stock.",
    taskCode: `// package.json:
"scripts": {
  "test": "jest --testTimeout=30000"
},
"devDependencies": {
  "jest": "^29.0.0",
  "axios": "^1.0.0"
}
// Run: npm test`,
    revision: "Messaging & Events (Day 21)",
    revisionDesc: "Review srv.emit(), this.on() for event subscription, the difference between in-process events and cross-service messaging via Event Mesh.",
    revisionContent: `<strong>Event pattern summary:</strong><br>
• <code>this.emit('event', payload)</code> — fire event<br>
• <code>this.on('event', handler)</code> — listen in same service<br>
• <code>srv.on('event', handler)</code> — listen in other service<br>
• For Event Mesh: configure <code>cds.requires.messaging</code>`,
    interviewQ: "How do you test a CAP service? What tools does CAP provide?",
    interviewA: "CAP provides `cds.test()` which bootstraps an in-memory CAP server with SQLite for fast, isolated testing. It exposes HTTP methods (GET, POST, PATCH, DELETE) pre-configured with the service URL. Combined with Jest, you can write integration tests that test the full CAP stack — handlers, validation, OData protocol — without deploying.",
    debugQ: "cds.test() fails with 'Cannot find module @sap/cds/lib'",
    debugCode: `// test/my.test.js
const cds = require('@sap/cds/lib');
const test = cds.test('serve', 'all');
// Error: Cannot find module '@sap/cds/lib'`,
    debugFix: `// Fix: @sap/cds must be in devDependencies (or dependencies):
// package.json:
"devDependencies": {
  "@sap/cds": "^7.0.0",
  "@sap/cds-dk": "^7.0.0",
  "jest": "^29.0.0"
}
// Then: npm install`,
  },
  {
    day: 23,
    topic: "MTA Deployment Basics",
    concept: "MTA Descriptor (mta.yaml)",
    conceptDesc: "MTA (Multi-Target Application) packages your CAP app for BTP deployment. mta.yaml defines modules (code), resources (services), and their relationships.",
    conceptCode: `# mta.yaml
_schema-version: '3.1'
ID: my-bookshop
version: 1.0.0

modules:
  - name: my-bookshop-srv
    type: nodejs
    path: gen/srv
    requires:
      - name: my-bookshop-db
      - name: my-bookshop-auth
    provides:
      - name: srv-api
        properties: { srv-url: '${default-url}' }

resources:
  - name: my-bookshop-db
    type: com.sap.xs.hdi-container
    parameters: { service: hana, service-plan: hdi-shared }

  - name: my-bookshop-auth
    type: org.cloudfoundry.managed-service
    parameters:
      service: xsuaa
      service-plan: application
      path: ./xs-security.json`,
    task: "Write a Complete mta.yaml",
    taskDesc: "Write the full mta.yaml for your Bookshop app including: CAP server module, HANA HDI container resource, XSUAA resource, and Destination Service resource. Validate with MBT.",
    taskCode: `# Build (creates .mtar file):
npm install -g mbt
mbt build

# Deploy to BTP CF:
cf login -a https://api.cf.eu10.hana.ondemand.com
cf deploy mta_archives/my-bookshop_1.0.0.mtar`,
    revision: "CAP Testing (Day 22)",
    revisionDesc: "Review cds.test() setup, Jest test structure, common assertions, and how to test error scenarios with validateStatus.",
    revisionContent: `<strong>cds.test() cheatsheet:</strong><br>
• <code>cds.test('serve', '--in-memory')</code> — use SQLite in-memory<br>
• <code>GET('/path')</code> — HTTP GET<br>
• <code>POST('/path', body)</code> — HTTP POST<br>
• <code>expect(status).toBe(400)</code> — assert HTTP status<br>
• Use <code>validateStatus: ()=>true</code> for error status tests`,
    interviewQ: "What is an MTA and why is it used for BTP deployments?",
    interviewA: INTERVIEW_QA[8].a,
    debugQ: "mbt build fails with 'Module path not found'",
    debugCode: `# mta.yaml module:
modules:
  - name: my-app-srv
    type: nodejs
    path: srv  # Wrong! Should point to built output`,
    debugFix: `# Fix: Run cds build first, then point to gen/srv:
# 1. package.json scripts:
"build": "cds build --production"
# 2. mta.yaml:
modules:
  - name: my-app-srv
    type: nodejs
    path: gen/srv  # Correct: points to CDS-built output`,
  },
  {
    day: 24,
    topic: "SAP HANA Deployment",
    concept: "CAP with SAP HANA Cloud",
    conceptDesc: "CAP auto-generates HDI (HANA Deployment Infrastructure) artifacts from your CDS models. Understanding HDI containers, schema migration, and HANA-specific types is essential.",
    conceptCode: `// package.json — switch from SQLite to HANA:
"cds": {
  "requires": {
    "db": {
      "kind": "hana-cloud",
      "credentials": { "url": "..." }
    }
  }
}

// CDS build generates HDI artifacts in gen/db/:
// gen/db/src/*.hdbcds, *.hdbtabledata, etc.

// HANA-specific features you can use:
// @sql.append: 'WITH ASSOCIATIONS'  ← HANA associations
// @cds.search.mode: 'fuzzy'          ← HANA text search
// @Aggregation.default: #SUM         ← Analytical queries`,
    task: "Prepare App for HANA Deployment",
    taskDesc: "Run `cds build --production` and inspect the generated gen/ folder. Look at the .hdbcds files generated. Identify any SQLite-specific patterns you'd need to change for HANA.",
    taskCode: `# Build for HANA:
cds build --production

# Inspect output:
ls gen/db/src/     # HDI source files
ls gen/srv/        # CF-ready Node.js app

# Check what SQL is generated:
cds compile db/schema.cds --to sql`,
    revision: "MTA Deployment (Day 23)",
    revisionDesc: "Review mta.yaml structure, module types, resource types (hdi-container, xsuaa, destination), and the mbt build → cf deploy workflow.",
    revisionContent: `<strong>MTA module types:</strong><br>
• <code>nodejs</code> — Node.js CAP server<br>
• <code>java</code> — Java CAP server<br>
• <code>html5</code> — Fiori/UI5 frontend<br>
• <code>approuter</code> — SAP Application Router<br>
• <code>com.sap.application.content</code> — content deployment`,
    interviewQ: "How does CAP abstract database differences between SQLite and HANA?",
    interviewA: INTERVIEW_QA[12].a,
    debugQ: "HANA deployment fails with 'Column name too long'",
    debugCode: `entity VeryLongEntityNameForDemonstration {
  key veryLongAttributeNameThatExceedsHanaLimit : String;
}
// HANA: column name max 127 chars (combined table+column)`,
    debugFix: `// Fix: Use shorter names or add @cds.persistence.name:
entity Products {
  key veryLongAttrName : String
    @cds.persistence.name: 'ATTR_NAME';  // Short DB column name
}`,
  },
  {
    day: 25,
    topic: "CAP Performance & Optimization",
    concept: "Optimizing CAP Queries",
    conceptDesc: "Avoid N+1 queries, use SELECT with column projection, leverage HANA native features, and cache where appropriate. Profile with CAP's built-in logging.",
    conceptCode: `// BAD: N+1 queries
this.after('READ', 'Books', async (books) => {
  for (const book of books) {
    book.authorName = (await SELECT.one.from('Authors').where({ID: book.author_ID})).name;
    // Fires one query per book! N+1 problem
  }
});

// GOOD: Use $expand instead — single JOIN query
// GET /catalog/Books?$expand=author($select=name)

// GOOD: Select only needed columns
const books = await SELECT.from('Books', b => {
  b.ID, b.title, b.price
}).where({ price: {'>': 0} });

// Profile: set CDS log level
// CDS_LOG_LEVEL=debug cds watch`,
    task: "Identify & Fix N+1 Query Pattern",
    taskDesc: "Find any N+1 patterns in your handler code and refactor them to use $expand or JOIN-based queries. Use cds watch with debug logging and count DB queries.",
    taskCode: `# Enable query logging:
CDS_LOG_LEVEL=debug cds watch
# Count 'HANA execute' or 'sqlite3 run' lines per request
# For a list of 10 books with author: should be 1 query, not 11`,
    revision: "HANA Deployment (Day 24)",
    revisionDesc: "Review cds build --production output, HDI container concepts, and HANA-specific CDS annotations.",
    revisionContent: `<strong>SQLite vs HANA differences:</strong><br>
• SQLite: case-insensitive strings; HANA: case-sensitive<br>
• SQLite: no column length limit; HANA: String(n) recommended<br>
• SQLite: INTEGER; HANA: INT/BIGINT distinction matters<br>
• HANA: supports fuzzy search, column store, associations`,
    interviewQ: "How do you avoid N+1 query problems in CAP?",
    interviewA: "Use OData $expand instead of per-record fetches — CAP translates $expand into efficient JOINs. For handler-side queries, use SELECT with all needed columns in one query. Use `SELECT.from(Entity, columns => {...})` to select specific columns. Use cds logging (CDS_LOG_LEVEL=debug) to count actual DB queries. Avoid for-loop fetching inside after-READ handlers.",
    debugQ: "CAP service is very slow with large datasets",
    debugCode: `this.after('READ', 'Books', async (books) => {
  for (const b of books) {
    b.genre = (await SELECT.one.from('Genres',g=>g.name).where({ID:b.genre_ID})).name;
  }
});
// 1000 books = 1001 DB queries!`,
    debugFix: `// Fix option 1: Add Genres association + expose in service
//   GET /Books?$expand=genre($select=name)

// Fix option 2: JOIN in single query
this.on('READ', 'Books', async (req) => {
  return cds.run(SELECT.from('Books').join('Genres').on('Books.genre_ID=Genres.ID'));
});`,
  },
  {
    day: 26,
    topic: "CAP Extensibility & Plugins",
    concept: "CAP Plugin System",
    conceptDesc: "CAP has a rich plugin ecosystem. Plugins hook into the CDS lifecycle via cds.on() and can extend models, add middleware, or provide new service types. Know the key plugins.",
    conceptCode: `// Install useful CAP plugins:
npm install @cap-js/audit-logging
npm install @cap-js/change-tracking
npm install @cap-js/attachments

// audit-logging: auto-logs all data changes
// In cds.requires:
{
  "audit-log": { "kind": "audit-log-to-console" }
}

// change-tracking: add @changelog to fields
entity Books {
  key ID    : Integer;
      title : String @changelog;  // Track all changes
      price : Decimal @changelog;
}

// View changes: GET /catalog/Books_changes`,
    task: "Integrate Change Tracking Plugin",
    taskDesc: "Install @cap-js/change-tracking. Add @changelog to 3 fields in your Books entity. Test by updating a book and then reading its change history.",
    taskCode: `npm install @cap-js/change-tracking

// In db/schema.cds:
entity Books {
  key ID    : Integer;
      title : String @changelog;
      price : Decimal @changelog;
}

// GET /catalog/Books(1)/changes
// See full audit history!`,
    revision: "Performance (Day 25)",
    revisionDesc: "Review N+1 problem, $expand-based solutions, column projection in SELECT, and how to use CDS debug logging to count queries.",
    revisionContent: `<strong>Performance checklist:</strong><br>
✓ Use $expand instead of per-record fetches<br>
✓ Select only needed columns in SELECT<br>
✓ Use pagination ($top/$skip) for large sets<br>
✓ Index frequently filtered columns in HANA<br>
✓ Profile with CDS_LOG_LEVEL=debug`,
    interviewQ: "What CAP plugins do you know and what do they provide?",
    interviewA: INTERVIEW_QA[28].a,
    debugQ: "@changelog not tracking changes",
    debugCode: `// @changelog added to entity
// But no changes appear in history
// Reason: Plugin not installed or not activated in package.json`,
    debugFix: `// Fix: Ensure plugin is installed and CDS picks it up
// package.json:
"dependencies": {
  "@cap-js/change-tracking": "^1.0.0"
}
// CAP auto-activates installed @cap-js/* plugins
// Run: npm install, then cds watch`,
  },
  {
    day: 27,
    topic: "Hybrid Development & cds bind",
    concept: "Hybrid Testing with cds bind",
    conceptDesc: "`cds bind` connects your local running app to real BTP services (HANA, XSUAA) without deploying. Essential for realistic testing during development.",
    conceptCode: `# Bind local app to deployed BTP services:
cds bind -2 my-bookshop-auth     # Bind to XSUAA instance
cds bind -2 my-bookshop-db       # Bind to HANA HDI container

# Run locally with real BTP services:
cds watch --profile hybrid

# This:
# 1. Reads credentials from CF service keys
# 2. Injects them into your local process
# 3. Your app runs locally but uses real HANA & XSUAA!
# Perfect for testing before full deployment`,
    task: "Set Up Hybrid Development",
    taskDesc: "Deploy the HANA and XSUAA services via mbt build, then use cds bind to connect your local app to them. Run cds watch --profile hybrid and verify data persists in real HANA.",
    taskCode: `# Steps:
# 1. Deploy services only (no app):
cf deploy mta_archives/... --no-start

# 2. Bind locally:
cds bind -2 my-bookshop-db my-bookshop-auth

# 3. Run hybrid:
cds watch --profile hybrid

# 4. Check .cdsrc-private.json (auto-generated, don't commit!)`,
    revision: "Plugins & Extensibility (Day 26)",
    revisionDesc: "Recall the major CAP plugins, how plugins auto-activate from package.json, and the @changelog pattern for audit trails.",
    revisionContent: `<strong>Key CAP plugins:</strong><br>
• <code>@cap-js/audit-logging</code> — compliance logging<br>
• <code>@cap-js/change-tracking</code> — field-level history<br>
• <code>@cap-js/attachments</code> — file handling<br>
• <code>@cap-js/notifications</code> — SAP Alert Notifications<br>
• <code>cds-swagger-ui</code> — OpenAPI/Swagger UI`,
    interviewQ: "What is `cds bind` and why is it powerful for development?",
    interviewA: INTERVIEW_QA[22].a,
    debugQ: "`cds watch --profile hybrid` ignores bound services",
    debugCode: `# After cds bind, running:
cds watch  # Missing --profile hybrid!
# App still uses SQLite, not HANA`,
    debugFix: `# Fix: Must specify --profile hybrid:
cds watch --profile hybrid
# Or add to package.json:
"scripts": {
  "watch:hybrid": "cds watch --profile hybrid"
}`,
  },
  {
    day: 28,
    topic: "Advanced CDS Patterns",
    concept: "Localization & Temporal Data",
    conceptDesc: "CAP's `localized` keyword and `temporal` aspect enable international apps and time-travel queries. Rarely used by freshers but valued by interviewers.",
    conceptCode: `// Localized entities — multilingual support
entity Products {
  key ID          : Integer;
      name        : localized String;    // Translated!
      description : localized String(500);
      price       : Decimal;
}
// CAP auto-creates Products_texts table
// GET /Products?sap-language=DE → German text
// GET /Products?sap-language=FR → French text

// Temporal — time-travel queries
entity PriceHistory : temporal {
  key ID        : Integer;
      price     : Decimal;
      // validFrom and validTo auto-added by 'temporal'
}
// GET /PriceHistory?sap-valid-at=2024-01-01`,
    task: "Build a Multilingual Product Catalog",
    taskDesc: "Add `localized` to product name and description fields. Add translations in the _texts table. Test retrieving products in EN, DE, and a missing language (verify fallback).",
    taskCode: `// Add translations via CSV (db/data/Products_texts.csv):
// ID,locale,name,description
// 1,de,Buch,Ein tolles Buch über CAP
// 1,fr,Livre,Un excellent livre sur CAP

// Test:
GET /catalog/Products?sap-language=de   ← German
GET /catalog/Products?sap-language=ja   ← Falls back to default`,
    revision: "Hybrid Dev (Day 27)",
    revisionDesc: "Review cds bind, .cdsrc-private.json, --profile hybrid, and the hybrid development workflow from bind to test.",
    revisionContent: `<strong>Hybrid dev golden rules:</strong><br>
• Always <code>gitignore</code> .cdsrc-private.json (has credentials!)<br>
• Use <code>cds env</code> to verify active configuration<br>
• Services must be deployed first before binding<br>
• Profile 'hybrid' only: production uses CF environment vars`,
    interviewQ: "How does CAP support localization (i18n)?",
    interviewA: INTERVIEW_QA[24].a,
    debugQ: "Localized texts not returning in the requested language",
    debugCode: `// Products_texts.csv:
// ID,locale,name
// 1,DE,Buch    ← uppercase locale code

// Request: GET /Products?sap-language=de  ← lowercase
// Returns default language instead of German`,
    debugFix: `// Fix: CAP locale codes are lowercase BCP47:
// Use: de (not DE), fr (not FR), zh-CN (not ZH-CN)
// Fix CSV:
// ID,locale,name
// 1,de,Buch`,
  },
  {
    day: 29,
    topic: "CAP Best Practices & Patterns",
    concept: "Production-Ready CAP Patterns",
    conceptDesc: "Error handling with req.error codes, input validation with CDS annotations, structured logging with cds.log, health endpoints, and secret management on BTP.",
    conceptCode: `// 1. Use CDS declarative validation:
entity Orders {
  key ID     : UUID;
      amount : Decimal @assert.range: [0.01, 999999.99];
      email  : String  @assert.format: '^[^@]+@[^@]+$';
      status : String  @assert.in: ['open','confirmed','shipped'];
}

// 2. Structured logging:
const log = cds.log('my-service');
log.info('Order created', { orderID: result.ID, user: req.user.id });

// 3. Health endpoint (auto-exposed at /health):
// GET http://localhost:4004/health → { "status": "UP" }

// 4. Use @sap/xsenv for credential reading:
const xsenv = require('@sap/xsenv');
const services = xsenv.getServices({ db: 'my-hana-db' });`,
    task: "Harden Your App for Production",
    taskDesc: "Add @assert.range and @assert.in validations to 3 entities. Add structured logging to all action handlers. Add a custom health check. Write a checklist of production readiness.",
    taskCode: `// Production readiness checklist:
// ✓ All services require auth (@requires)
// ✓ No console.log — use cds.log()
// ✓ Input validation via @assert or before handlers
// ✓ Error messages don't expose DB internals
// ✓ mta.yaml complete with all services
// ✓ xs-security.json reviewed
// ✓ No hardcoded credentials`,
    revision: "Localization & Temporal (Day 28)",
    revisionDesc: "Recall the `localized` keyword, _texts tables, sap-language query param, the `temporal` aspect, and validFrom/validTo for time-travel queries.",
    revisionContent: `<strong>Temporal aspect fields:</strong><br>
• <code>validFrom</code> — record active from this date<br>
• <code>validTo</code> — record active until this date<br>
• Query at specific point: <code>?sap-valid-at=2024-06-15</code><br>
• Query range: <code>?sap-valid-from=&sap-valid-to=</code>`,
    interviewQ: "What are best practices for production CAP applications?",
    interviewA: "Key practices: (1) Always use declarative auth (@requires/@restrict), (2) Use @assert.* annotations for input validation instead of handler code, (3) Use cds.log() for structured logging — not console.log, (4) Never hardcode credentials — use BTP service bindings, (5) Configure proper error messages that don't expose internals, (6) Write integration tests with cds.test(), (7) Use cds build --production for deployable artifacts, (8) Enable change tracking and audit logging for compliance.",
    debugQ: "@assert.in annotation not validating on PATCH",
    debugCode: `entity Orders {
  status : String @assert.in: ['open', 'closed'];
}
// PATCH /Orders/1 { "status": "deleted" }
// No validation error — status updated to 'deleted'!`,
    debugFix: `// @assert annotations validate on INSERT (CREATE) by default
// For PATCH (UPDATE), add @mandatory or use before handler:
this.before('UPDATE', 'Orders', (req) => {
  const allowed = ['open', 'closed'];
  if (req.data.status && !allowed.includes(req.data.status))
    req.error(400, \`Invalid status: \${req.data.status}\`);
});`,
  },
  {
    day: 30,
    topic: "Capstone — End-to-End CAP App",
    concept: "Integrating Everything",
    conceptDesc: "Build a complete CAP application from scratch incorporating all 30 days of learning: CDS model, services, auth, handlers, OData, Fiori annotations, testing, and deployment config.",
    conceptCode: `// Full-stack CAPM application architecture:

// db/schema.cds      ← Entities + Aspects + Compositions
// db/data/           ← CSV seed data
// srv/service.cds    ← Service + Projections + Auth
// srv/service.js     ← Handlers + Business Logic
// srv/annotations.cds← Fiori UI Annotations
// xs-security.json   ← XSUAA scopes + roles
// mta.yaml           ← Full deployment descriptor
// test/              ← Jest integration tests
// .cdsrc.json        ← Dev config + mocked auth`,
    task: "Build Your Portfolio CAP App",
    taskDesc: "Create a complete Leave Management System with: Employee, LeaveRequest entities; Composition; Manager approval action; XSUAA roles; Fiori annotations; 5 tests; full mta.yaml. This is your portfolio project.",
    taskCode: `// Leave Management — key entities:
entity Employees {
  key ID       : UUID;
      name     : String;
      manager  : Association to Employees;
      requests : Composition of many LeaveRequests on requests.employee=$self;
}
entity LeaveRequests {
  key ID        : UUID;
      employee  : Association to Employees;
      from      : Date; to: Date;
      status    : String @assert.in:['pending','approved','rejected'];
      reason    : String;
}
// Action: approveLeave(requestID)
// Action: rejectLeave(requestID, reason)`,
    revision: "Complete 30-Day Journey Review",
    revisionDesc: "Today review the entire journey from CAP basics to deployment. Identify your strongest topics and areas to revisit.",
    revisionContent: `<strong>Your 30-day mastery checklist:</strong><br>
✓ CAP Project Structure & CLI<br>
✓ CDS: Entities, Types, Aspects<br>
✓ Associations & Compositions<br>
✓ Services & Projections<br>
✓ Event Handlers (Before/On/After)<br>
✓ Custom Logic & Actions/Functions<br>
✓ OData V4 Queries<br>
✓ Auth: @requires, @restrict, XSUAA<br>
✓ Remote Services & Destinations<br>
✓ Transactions, Draft, Messaging<br>
✓ Fiori Annotations<br>
✓ Testing with Jest<br>
✓ MTA + HANA Deployment<br>
✓ Production Best Practices<br>
<br>🎉 You are now a CAPM expert!`,
    interviewQ: "Walk me through building a production CAP application end-to-end.",
    interviewA: "Start with `cds init` and design the CDS data model with entities, aspects, associations, and compositions. Define services with proper projections and @requires auth. Write Node.js handlers for business logic, validations, and custom actions. Create xs-security.json for XSUAA scopes. Add @UI annotations for Fiori Elements. Write integration tests with cds.test()/Jest. Create mta.yaml with all resources (HANA HDI, XSUAA, Destination). Build with `cds build --production` and `mbt build`. Deploy with `cf deploy`. Use cds bind for hybrid development during iterations.",
    debugQ: "Final check — deployment works locally but not on BTP",
    debugCode: `// Common BTP deployment issues:
// 1. VCAP_SERVICES not bound
// 2. Wrong service names in mta.yaml
// 3. Missing required mta.yaml resources
// 4. xs-security.json scopes don't match @requires`,
    debugFix: `// Systematic BTP debug:
cf env my-app-srv  // Check VCAP_SERVICES structure
cf logs my-app-srv --recent  // Check startup logs
cf restage my-app-srv  // Re-inject env vars after changes
// Verify: all mta.yaml resource names match cf services`,
  },
];

const WEEKLY_GOALS = [
  {
    week: 1,
    title: "CAP Foundations",
    status: "complete",
    target: "Set up CAP project, master CDS basics, entities, aspects, and associations",
    tasks: [
      "Initialize CAP project and explore structure",
      "Write first CDS entity with types",
      "Create reusable aspects for audit fields",
      "Build Author-Book-Order associations",
      "Create Composition for Order-Items",
      "Define and expose a CDS Service",
      "Test with OData playground at localhost:4004",
    ]
  },
  {
    week: 2,
    title: "Services & Business Logic",
    status: "current",
    target: "Master event handlers, custom logic, OData, and authentication",
    tasks: [
      "Write Before/On/After handlers",
      "Implement stock management action",
      "Test all OData query options ($filter, $expand...)",
      "Build Actions and Functions",
      "Add @requires and @restrict auth",
      "Configure XSUAA xs-security.json",
      "Implement row-level security with $user",
    ]
  },
  {
    week: 3,
    title: "Integration & Advanced Features",
    status: "upcoming",
    target: "Connect external services, master transactions, draft, Fiori, and messaging",
    tasks: [
      "Consume external OData via Remote Service",
      "Set up BTP Destination Service",
      "Use cds.tx() for atomic operations",
      "Enable draft handling on entities",
      "Add Fiori UI annotations",
      "Implement event messaging pattern",
      "Write 5 Jest integration tests",
    ]
  },
  {
    week: 4,
    title: "Deployment & Mastery",
    status: "upcoming",
    target: "Deploy to BTP, optimize, use plugins, and build your portfolio project",
    tasks: [
      "Write complete mta.yaml for bookshop",
      "Deploy to HANA Cloud",
      "Set up hybrid development with cds bind",
      "Integrate change-tracking plugin",
      "Add localization to product catalog",
      "Apply production best practices",
      "Build Leave Management System (portfolio)",
    ]
  }
];
