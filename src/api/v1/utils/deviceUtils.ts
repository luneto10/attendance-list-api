import { UAParser } from "ua-parser-js";
import express from "express";

/**
 * Creates a unique device ID based on the collected data.
 * @param collectedData - The collected device and browser information.
 * @returns A unique device ID (SHA-256 hash of the collected data).
 */

// export const createDeviceId = async (): Promise<string> => {
//   try {
//     const fp = await FingerprintJS.load();

//     const result = await fp.get();

//     return result.visitorId
//   } catch (error) {
//     console.error('Error generating device ID:', error);
//     throw new Error('Failed to generate device ID');
//   }
// };

export const isMobile = async (req: express.Request) => {
    const parser = new UAParser();
    parser.setUA(req.headers["user-agent"]!);
    const device = parser.getDevice();

    return device.type === "mobile";
};
