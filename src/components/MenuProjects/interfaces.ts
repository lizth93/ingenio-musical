export interface Props {
  className?: string;
}

export interface Data {
  description: {
    content: Description[];
  };
  menuOptions: MenuOptions[];
  nameButtons: string[];
  titleOptional: string;
}

export interface Description {
  content: {
    value: string;
  }[];
}
interface MenuOptions {
  fields: {
    description: string;
    file: {
      url: string;
    };
    title: string;
  };
}
