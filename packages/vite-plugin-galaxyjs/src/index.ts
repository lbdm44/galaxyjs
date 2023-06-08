import type { Plugin } from 'vite';

const VITE_PLUGIN_NAME = 'vite-plugin-galaxyjs';

export default function GalaxyJSPlugin(): Plugin {
  return {
    name: VITE_PLUGIN_NAME,
  };
}
