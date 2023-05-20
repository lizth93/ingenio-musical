export interface Props {
  className?: string;
}

export interface Projects {
  description: {
    content: Description[];
  };
  menuOptions: MenuOptions[];
  nameButtons: string[];
}

interface Description {
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
