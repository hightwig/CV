export class AppError {
  isOperational = true;

  constructor(
    private message: string | Record<string, unknown>,
    private statusCode: number
  ) {}
}
