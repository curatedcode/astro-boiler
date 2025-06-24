import { z } from "astro/zod";

const envSchema = z.object({
  /**
   * Base URL for playwright. Excluding trailing slash and port.
   *
   * @example https://example.com
   */
  PW_TESTING_BASE_URL: z.string().url(),
  /**
   * Port for playwright.
   *
   * @example 3000
   */
  PW_TESTING_PORT: z.preprocess(
    (val) => (typeof val === "string" ? Number.parseInt(val, 10) : val),
    z.number()
  ),
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("❌ Invalid environment variables:", parsed.error.format());
  throw new Error("Invalid environment variables");
}

const env = parsed.data;

export { env };
