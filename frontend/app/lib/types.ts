export type NestError<T = unknown> = {
  statusCode: number;
  message: T;
  error: string;
};

export type ValidationError = {
  fieldName: string;
  errors: string[];
};
