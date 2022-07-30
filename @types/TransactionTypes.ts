export type TransactionTypes = {
  id?: string;
  causal: string;
  creditor?: Array<{ id: string; text: string }>;
  expiryDate: string;
  creditorTaxCode: string;
  noticeCode: string;
  due: string;
};
