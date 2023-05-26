import { Description } from "../interfaces";

export const getDescriptionContent = (description: Description[] | undefined) =>
  description?.map((d) =>
    d.content.map((text) => <p key={text.value}>{text.value}</p>)
  );
