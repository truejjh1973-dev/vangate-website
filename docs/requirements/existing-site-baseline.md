# VanGATE Existing Website Requirements Baseline

## 1. Document Information

| Item | Value |
| --- | --- |
| Document type | Existing-system requirements baseline |
| Source website | https://vangate.ca/ |
| Analysis date | June 11, 2026 |
| Status | Draft for customer validation |
| Purpose | Record the functions and content currently exposed by the website before redesign |

This document describes the observable behavior of the existing public website and
its WordPress administration capabilities. It is not yet the specification for the
new website.

### Evidence Labels

- **Confirmed**: directly observed in the public website, source, HTTP response, or public API.
- **Inferred**: strongly indicated by WordPress conventions or exposed metadata.
- **To confirm**: requires access to WordPress Admin, hosting, database, or customer interviews.

## 2. Business Purpose

The website presents VanGATE as a manufacturer and installer of automated entrance
solutions for residential and commercial customers in British Columbia.

The existing website supports these primary business goals:

1. Explain VanGATE's products and services.
2. Demonstrate completed work through images and project galleries.
3. Build trust through company information, testimonials, and articles.
4. Generate customer enquiries by contact form and telephone.
5. Improve discovery through search-engine-optimized landing pages and articles.

## 3. User Roles

| Role | Existing capability |
| --- | --- |
| Public visitor | Browse pages, products, services, galleries, and news; submit an enquiry; call the company |
| Content editor | Manage pages, articles, media, menus, and SEO metadata in WordPress Admin |
| Website administrator | Manage users, themes, plugins, settings, forms, and security tools |

Customer accounts, dealer accounts, employee portals, online ordering, and online
payments were not observed.

## 4. Public Website Requirements

### 4.1 Global Navigation and Layout

| ID | Requirement | Evidence |
| --- | --- | --- |
| PUB-001 | The website shall provide a desktop navigation header. | Confirmed |
| PUB-002 | The website shall provide a mobile navigation menu. | Confirmed |
| PUB-003 | The website shall display the VanGATE logo with a link to the home page. | Confirmed |
| PUB-004 | The website shall provide persistent access to contact information and telephone actions. | Confirmed |
| PUB-005 | The website shall provide a footer containing service, product, company, address, and telephone information. | Confirmed |
| PUB-006 | The website shall provide links from navigation and footer menus to managed content. | Confirmed |
| PUB-007 | The website shall include a back-to-top control on long pages. | Confirmed |
| PUB-008 | The layout shall adapt to desktop, tablet, and mobile screen sizes. | Confirmed |

### 4.2 Home Page

| ID | Requirement | Evidence |
| --- | --- | --- |
| HOM-001 | The home page shall introduce VanGATE's residential and commercial entrance solutions. | Confirmed |
| HOM-002 | The home page shall provide prominent calls to contact or call the company. | Confirmed |
| HOM-003 | The home page shall promote primary products and services. | Confirmed |
| HOM-004 | The home page shall display selected project or gallery images. | Confirmed |
| HOM-005 | Gallery images shall support an enlarged lightbox view. | Confirmed |
| HOM-006 | The home page shall link to the full gallery. | Confirmed |
| HOM-007 | The home page shall display at least one customer testimonial. | Confirmed |
| HOM-008 | The home page shall display recent news or articles. | Confirmed |
| HOM-009 | The home page shall link to the complete news section. | Confirmed |
| HOM-010 | Sections may use scroll-triggered animations and image sliders. | Confirmed |

### 4.3 Products and Services

| ID | Requirement | Evidence |
| --- | --- | --- |
| CAT-001 | The website shall organize offerings into product and service categories. | Confirmed |
| CAT-002 | The website shall provide category landing pages. | Confirmed |
| CAT-003 | The website shall provide detail pages for individual offerings where applicable. | Confirmed |
| CAT-004 | Managed offerings shall support a title, description, images, category, and URL slug. | Inferred |
| CAT-005 | Product and service pages shall provide a path to contact VanGATE. | Confirmed |
| CAT-006 | The catalogue shall support commercial and residential content. | Confirmed |

Observed product and service groups include:

- Commercial gates
- Residential gates
- Garage doors and operators
- Gate operators
- Gate accessories
- Gate hardware
- High-speed industrial doors
- Waterjet cutting
- Operator installation
- Barrier and security systems
- Service calls

The current catalogue appears informational. Cart, checkout, inventory, shipping,
and payment processing were not observed.

### 4.4 Gallery and Media

| ID | Requirement | Evidence |
| --- | --- | --- |
| GAL-001 | The website shall provide a gallery of completed work. | Confirmed |
| GAL-002 | Gallery items shall display images in a responsive grid or collection. | Confirmed |
| GAL-003 | Visitors shall be able to enlarge and navigate gallery images. | Confirmed |
| GAL-004 | Administrators shall be able to upload and reuse images through the media library. | Confirmed |
| GAL-005 | Gallery images should support descriptive alternative text. | Inferred |
| GAL-006 | Gallery filtering or grouping requirements shall be confirmed with the customer. | To confirm |

### 4.5 News and Articles

| ID | Requirement | Evidence |
| --- | --- | --- |
| NEW-001 | The website shall provide a news or blog listing page. | Confirmed |
| NEW-002 | Each article shall have a title, publication date, summary, image, and detail page. | Confirmed |
| NEW-003 | The listing shall support pagination when the article count exceeds one page. | Confirmed |
| NEW-004 | Administrators shall be able to create, edit, publish, and unpublish articles. | Confirmed |
| NEW-005 | Article pages shall expose search-engine metadata. | Confirmed |
| NEW-006 | Article categories, tags, authors, and comments shall be reviewed before migration. | To confirm |

### 4.6 Contact and Lead Generation

| ID | Requirement | Evidence |
| --- | --- | --- |
| CON-001 | The website shall provide a contact page. | Confirmed |
| CON-002 | Visitors shall be able to submit an enquiry form. | Confirmed |
| CON-003 | The form shall validate required fields before submission. | Confirmed |
| CON-004 | Successful form submissions shall be delivered to configured company recipients. | Inferred |
| CON-005 | A successful submission shall trigger an analytics event. | Confirmed |
| CON-006 | Telephone numbers shall be clickable on supported devices. | Confirmed |
| CON-007 | The website shall display the company address. | Confirmed |
| CON-008 | Form fields, recipients, spam protection, retention, and privacy consent shall be confirmed. | To confirm |
| CON-009 | Lead storage in the website database or an external CRM shall be confirmed. | To confirm |

## 5. Content Management Requirements

| ID | Requirement | Evidence |
| --- | --- | --- |
| CMS-001 | Authorized users shall sign in to WordPress Admin. | Confirmed |
| CMS-002 | Administrators shall manage users and WordPress roles. | Confirmed |
| CMS-003 | Editors shall manage pages and articles without editing source code where fields are exposed. | Confirmed |
| CMS-004 | Editors shall upload, select, edit, and delete media assets. | Confirmed |
| CMS-005 | Administrators shall manage navigation menus. | Confirmed |
| CMS-006 | Editors shall manage SEO titles, descriptions, canonical URLs, and social metadata. | Confirmed |
| CMS-007 | Administrators shall configure contact forms and email recipients. | Confirmed |
| CMS-008 | The system shall provide preview, draft, publish, and revision capabilities. | Confirmed |
| CMS-009 | The system shall preserve historical page and post revisions according to an agreed retention policy. | Confirmed / To confirm |
| CMS-010 | Product, service, testimonial, and gallery editing workflows shall be audited in the existing admin. | To confirm |

The existing home page uses a custom `page-home.php` template and returns no normal
page body through the public API. Some home-page content may therefore be embedded
in PHP or stored in custom settings rather than fully editable in the page editor.

## 6. SEO, Analytics, and Marketing

| ID | Requirement | Evidence |
| --- | --- | --- |
| MKT-001 | Public pages shall support unique SEO titles and meta descriptions. | Confirmed |
| MKT-002 | Public pages shall support canonical URLs. | Confirmed |
| MKT-003 | The website shall produce Open Graph and Twitter metadata. | Confirmed |
| MKT-004 | The website shall produce structured data where appropriate. | Confirmed |
| MKT-005 | The website shall provide XML sitemap support. | Inferred |
| MKT-006 | The website shall support Google Analytics and Google Tag Manager. | Confirmed |
| MKT-007 | Contact-form completion shall be measurable as a conversion event. | Confirmed |
| MKT-008 | Existing URLs and valuable search rankings shall be preserved or redirected during migration. | Required for replacement |
| MKT-009 | The ownership and current status of analytics, tag manager, and search console accounts shall be confirmed. | To confirm |

## 7. Technical and Operational Baseline

| Area | Existing implementation |
| --- | --- |
| Web server | LiteSpeed |
| Server-side platform | PHP 7.4.33 |
| CMS | WordPress 6.9.4 |
| Theme | Custom `vangate` theme |
| Page builder | Elementor |
| Front-end foundation | Bootstrap 4.5.3, custom CSS, jQuery |
| Forms | Contact Form 7 |
| SEO | Yoast SEO |
| Security | Wordfence |
| Media/UI libraries | Swiper, Slick, PhotoSwipe, Lity, WOW.js, Font Awesome |
| Content API | WordPress REST API |
| Database | MySQL or MariaDB, inferred from standard WordPress hosting |
| Time zone | America/Vancouver |

### Hosting Reuse Constraint

The customer wants to reuse the existing runtime environment. The replacement shall
therefore remain compatible with the current WordPress/LiteSpeed hosting model
unless the hosting audit proves that an upgrade or migration is mandatory.

PHP 7.4 is end-of-life. Compatibility with a supported PHP version should be tested,
and the hosting environment should preferably be upgraded before production launch.

## 8. Non-Functional Requirements to Preserve or Define

| ID | Requirement | Status |
| --- | --- | --- |
| NFR-001 | The website shall use HTTPS and redirect the `www` hostname consistently. | Existing behavior |
| NFR-002 | Public pages shall be indexable unless explicitly marked otherwise. | Existing behavior |
| NFR-003 | The website shall support current desktop and mobile browsers. | To define |
| NFR-004 | Public pages shall meet agreed Core Web Vitals targets. | To define |
| NFR-005 | The website shall meet an agreed WCAG accessibility level. | To define |
| NFR-006 | Forms shall include spam and abuse protection. | To verify |
| NFR-007 | Administrative operations shall require authenticated, authorized users. | Existing behavior |
| NFR-008 | WordPress core, themes, and plugins shall have a controlled update process. | To define |
| NFR-009 | Files and databases shall be backed up and restorable. | To verify |
| NFR-010 | Production changes shall be deployable without editing live source files manually. | New requirement |
| NFR-011 | Custom source code and deployment documentation shall be version-controlled in Git. | New requirement |
| NFR-012 | Secrets, uploaded media, caches, backups, and production database dumps shall not be committed to Git. | New requirement |

## 9. Existing Integrations

| Integration | Purpose | Status |
| --- | --- | --- |
| Google Analytics | Visitor and conversion measurement | Confirmed |
| Google Tag Manager | Marketing and analytics tags | Confirmed |
| Google Fonts | Web typography | Confirmed |
| Contact Form 7 email delivery | Enquiry notification | Inferred |
| Font Awesome kit | Icons | Confirmed |
| Third-party JavaScript CDNs | UI libraries | Confirmed |
| CRM | Lead/customer management | Not observed |
| Payment provider | Online payment | Not observed |
| Ecommerce platform | Cart and checkout | Not observed |

## 10. Migration Requirements

1. Inventory all existing pages, posts, products, categories, forms, menus, media,
   metadata, redirects, and integrations.
2. Export and back up the production database and `wp-content` files before changes.
3. Preserve approved content and media or document its replacement.
4. Preserve existing public URLs wherever possible.
5. Create permanent redirects for changed URLs.
6. Retain or improve SEO metadata and structured data.
7. Validate all enquiry forms and email delivery before launch.
8. Validate analytics and conversion tracking before launch.
9. Develop and test on a staging environment separate from production.
10. Prepare a rollback procedure before production deployment.

## 11. Out of Scope in the Existing Website

The following capabilities were not observed and must not be treated as existing
requirements without customer approval:

- Customer registration and login
- Dealer or contractor portal
- Online quotation builder
- Shopping cart, checkout, and online payment
- Inventory and warehouse management
- Installation project tracking
- Service ticket management
- Appointment scheduling
- CRM synchronization
- Multilingual content
- Employee intranet

These may become new requirements during discovery.

## 12. Customer Validation Questions

1. Which pages, products, services, and articles must be retained?
2. Which areas can staff currently edit without developer assistance?
3. What information is collected by each contact form, and who receives it?
4. Are form submissions stored anywhere besides email?
5. Are products managed through a custom WordPress post type or another plugin?
6. Do testimonials and galleries have dedicated admin screens?
7. Are any unpublished, private, or password-protected pages still required?
8. Which user accounts and roles should be retained?
9. Who owns the Google Analytics, Tag Manager, Search Console, and map accounts?
10. What backup, staging, deployment, and rollback facilities does the host provide?
11. Which PHP and database versions are available on the hosting plan?
12. Does the new website need quotations, customer management, project tracking,
    service requests, multilingual content, ecommerce, or other new business modules?

## 13. Baseline Acceptance

This baseline is ready to become the approved existing-system scope when:

- The customer has reviewed the content and function inventory.
- WordPress Admin and hosting access have been audited.
- Unknown items are answered or explicitly deferred.
- Retained, removed, redesigned, and newly requested capabilities are identified.
- The customer approves the resulting scope in writing.
