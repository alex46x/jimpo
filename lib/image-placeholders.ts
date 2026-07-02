/**
 * Shared blurDataURL placeholders for next/image.
 *
 * Using an 8x8 SVG with the brand's orange-to-near-black radial gradient
 * keeps the placeholder on-brand during the lazy-load fade-in. Keeping the
 * string in one place means any future re-theme only touches this file.
 *
 * next/image accepts `data:image/svg+xml;base64,...` for `blurDataURL` and
 * scales the SVG to fill the destination box, so the small dimensions are
 * intentional and not a bug.
 */

/** Warm orange-tinted placeholder used as the default brand blur. */
export const BRAND_BLUR =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDgiPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iZyIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNjUlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRkY3QTFGIiBzdG9wLW9wYWNpdHk9IjAuNTUiLz48c3RvcCBvZmZzZXQ9IjU1JSIgc3RvcC1jb2xvcj0iIzFBMEEwMiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzA1MDUwNSIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9InVybCgjZykiLz48L3N2Zz4=';
