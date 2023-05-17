export interface Props {
  className?: string;
}

export interface Description {
  content: {
    value: string;
  }[];
}

export interface Data {
  backgroundImagen: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  descriptionHistory: {
    content: Description[];
  };
  descriptionMisionVision: {
    content: Description[];
  };
  historyTitle: string;
  misionVisionTitle: string;
  introductionText: {
    content: Description[];
  };
}
