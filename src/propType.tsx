export type Option = {
  label: string;
  value: string;
  price: number;
};

export type dataInput = {
  id?: string;
  ticket: string;
  amount: string;
  date: string;
  name: string;
  phone: number | string;
  email: string;
  price: number;
};

export type errorInput = {
  ticket?: string;
  amount?: string;
  date?: string;
  name?: string;
  phone?: string;
  email?: string;
};

export type eventProp = {
  id?: string;
  mainImage: string;
  title: string;
  address: string;
  date: string;
  price: number;
};

export type paymentProp = {
  numberCredit: number | null;
  date: string;
  code: string;
  ticket: string;
  amount: string;
  dateCredit: string;
  contactInfo?: string;
  name: string;
  nameCredit: string;
  phone: number | string;
  email: string;
  price: number;
};

export type errorPaymentInfo = {
  numberCredit?: string;
  name?: string;
  dateCredit?: string;
  code?: string;
};

export type eventDetailProp = {
  id?: string;
  title: string;
  mainImage: string;
  price: number;
  address: string;
  date: string;
  imageDetail1?: string;
  imageDetail2?: string;
  contentDetail1?: string;
  contentDetail2?: string;
  contentDetail3?: string;
};

export type contactProp = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  message?: string;
};
