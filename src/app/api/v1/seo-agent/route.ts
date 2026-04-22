// Route handler — thin wiring only. Real logic lives in ./get.handler and ./post.handler.
import { handleGet } from "./get.handler";
import { handlePost } from "./post.handler";

export const GET = handleGet;
export const POST = handlePost;
