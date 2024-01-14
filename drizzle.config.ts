import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  // With this it can't find any tables `drizzle-kit generate:pg`
  schema: './drizzle/schema/schema.ts',
  // But this does
  // schema: './drizzle/schema/*',
  out: './drizzle/gen',
})
