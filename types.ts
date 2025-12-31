
export interface Branch {
  name: string;
  isHQ?: boolean;
  phones: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  name: string;
  image: string;
}
