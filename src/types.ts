export interface Category {
  productCategory: string;
  productCategoryDescription: string;
  products: Product[];
}

export interface Product {
  pending?: boolean;
  title: string;
  description: string;
  imageSrc: string;
  specs?: Record<string, any>;
  downloads: string[];
}

export interface Data {
  pageTitle: string;
  endDescription?: string;
  pageDescription: string;
  categories: Category[];
}

export interface CategoryProps extends Category {
  handleOpenModal?: () => void;
}

export interface ProductProps extends Product {
  handleOpenModal?: () => void;
}

export interface Page extends Data {}

export interface ModalProps {
  handleClose: () => void;
  isOpen: boolean;
  children: JSX.Element;
}
