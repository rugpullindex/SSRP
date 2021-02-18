// @format
import { readFileSync, writeFileSync } from "fs";

import MarkdownIt from "markdown-it";
import mk from "@iktakahiro/markdown-it-katex";

const md = new MarkdownIt();
md.use(mk);

const file = readFileSync("./SOURCE.md");
const content = file.toString();
const rendered = md.render(content);

const doc = `
<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="utf-8"/>
    <title>Simple Signal Replication Protocol Specification</title>
    <link rel="stylesheet" href="./katex.min.css">
    <link rel="stylesheet" href="./github-markdown.min.css">
  </head>
  <body>
    ${rendered}
  </body>
</html>

`;
writeFileSync("index.html", doc);
