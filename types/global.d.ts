// global.d.ts
import mongoose from 'mongoose';

declare global {
  namespace NodeJS {
    interface Global {
      mongoose: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      };
    }
  }
}

declare let global: NodeJS.Global;

// Convert this file into a module by adding an export statement.
export {};
