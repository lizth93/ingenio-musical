import { useEffect, useState } from "react";
import Accordion from "components/accordion";
import getSeeMore from "api/getSeeMore";
import {
  dummyHistoryDescription,
  dummyIntroductionSeeMore,
  dummyMisionVision,
} from "constants/dummyData";
import imgSectionMore from "defaultImages/SeeMore.png";
import { Props, Data, Description } from "./interfaces";

function MoreAboutUs(props: Props) {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    async function loadInfoSeeMore() {
      const data = await getSeeMore();
      setData(data);
    }
    loadInfoSeeMore();
  }, []);

  const historyTitle = data?.historyTitle ? data?.historyTitle : "Historia";

  const misionVisionTitle = data?.misionVisionTitle
    ? data?.misionVisionTitle
    : "Misión y Visión";

  const historyDescription = getDescription(data?.descriptionHistory.content);

  const misionVisiónDescription = getDescription(
    data?.descriptionMisionVision.content
  );

  const introductionText = getDescription(data?.introductionText.content);

  function getDescription(category: Description[] | undefined) {
    return category?.map((e) =>
      e.content.map((elm, i) => <p key={i}>{elm.value}</p>)
    );
  }

  const backgroundImage = data?.backgroundImagen.fields.file.url
    ? data?.backgroundImagen.fields.file.url
    : imgSectionMore;

  return (
    <div
      className={props.className}
      id="action-1"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {introductionText ? introductionText : dummyIntroductionSeeMore}
      <div className="accordion-container">
        <Accordion title={historyTitle}>
          {historyDescription ? historyDescription : dummyHistoryDescription}
        </Accordion>
        <Accordion title={misionVisionTitle}>
          {misionVisiónDescription
            ? misionVisiónDescription
            : dummyMisionVision}
        </Accordion>
      </div>
    </div>
  );
}

export default MoreAboutUs;
