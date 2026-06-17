const BLOCKED_PATH_PREFIXES = [
  "/.env",
  "/.git",
  "/wp-admin",
  "/wp-login",
  "/wp-content",
  "/xmlrpc.php",
  "/phpmyadmin",
  "/administrator",
] as const;

const BLOCKED_PATH_PATTERNS = [
  /\.php$/i,
  /\.asp$/i,
  /\.aspx$/i,
  /\/\.[^/]+/,
] as const;

export function isBlockedPath(pathname: string): boolean {
  const normalized = pathname.toLowerCase();

  if (BLOCKED_PATH_PREFIXES.some((prefix) => normalized.startsWith(prefix))) {
    return true;
  }

  return BLOCKED_PATH_PATTERNS.some((pattern) => pattern.test(normalized));
}
