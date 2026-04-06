import path from "path";
import { FileMeta } from "../types.js";

export interface TreeNode {
  name: string;
  children?: Record<string, TreeNode>;
  file?: FileMeta;
}

export function buildTree(files: FileMeta[]): TreeNode {
  const root: TreeNode = { name: "root", children: {} };

  for (const file of files) {
    const parts = file.path.split(path.sep);
    let current = root;

    for (const part of parts) {
      current.children ||= {};

      if (!current.children[part]) {
        current.children[part] = { name: part };
      }

      current = current.children[part];
    }

    current.file = file;
  }

  return root;
}