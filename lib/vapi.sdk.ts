/**
 * Vapi SDK Initialization
 *
 * This file initializes the Vapi client for handling voice call interactions in the browser.
 * It uses the public Vapi web token to authenticate the client-side connection.
 *
 * Exports:
 * - vapi: An instance of the Vapi SDK ready for use across the application.
 */

import Vapi from "@vapi-ai/web";

// Initialize Vapi client with public web token for browser communication
export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!);
