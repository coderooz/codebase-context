import fg from "fast-glob";

export async function scanFiles(include: string[], ignore: string[]) {
  return await fg(include, {
    ignore,
    dot: false
  });
}