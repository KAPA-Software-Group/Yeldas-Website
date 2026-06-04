import { Fragment } from "react";

export default function LineBreakText({ text }) {
  if (typeof text !== "string") return text;

  return text.split("\n").map((part, index) => (
    <Fragment key={`${part}-${index}`}>
      {index > 0 && <br />}
      {part}
    </Fragment>
  ));
}
