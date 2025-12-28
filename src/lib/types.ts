// We simply re-export the type from the server
// This way, if you change a column in server/schema.ts,
// your frontend code will immediately show red squiggles if it breaks.
export type { Post } from "../../server/schema";
