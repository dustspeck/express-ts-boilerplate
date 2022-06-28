// Sample Types later used in validators with ajv

export interface TextRule {
  equals?: string;
  notContains?: string;
  contains?: string;
  isValidEmail?: boolean;
  isValidURL?: boolean;
}

export interface NumberRule {
  equals?: number;
  between?: { from: number; to: number };
  lessThan?: { number: number; equal: boolean };
  greaterThan?: { number: number; equal: boolean };
}

export interface CellValidation {
  name: string;
  type: 'text' | 'number' | 'date' | 'dropdown' | 'checkbox';
  invalidAction: 'warn' | 'reject';
  rule?: TextRule | NumberRule;
  invalidHelpText?: string;
}
