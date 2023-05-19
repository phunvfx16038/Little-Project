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
  ticket: string;
  amount: string;
  date: string;
  name: string;
  phone: string;
  email: string;
};

export type eventProp = {
  id: number;
  image: string;
  title: string;
  address: string;
  time: string;
  price: number;
};

export type paymentInfoProp = {
  numberCredit: number | null;
  name: string;
  date: string;
  code: string;
};

export type errorPaymentInfo = {
  numberCredit: string;
  name: string;
  date: string;
  code: string;
};
