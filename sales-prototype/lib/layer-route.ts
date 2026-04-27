import { LAYERS, type ModuleGroup } from "./structure";

export function getLayerByRoute(param: string): ModuleGroup | null {
  const code = param.toUpperCase();
  return LAYERS.find((l) => l.code === code) ?? null;
}
