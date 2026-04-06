import { Command } from "commander";
import { run } from "./index.js";

const program = new Command();

program
  .name("codebase-context")
  .description("Generate structured codebase context")
  .action(async () => {
    await run();
  });

program.parse();