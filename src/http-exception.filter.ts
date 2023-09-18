import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  BadRequestException,
} from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    console.log({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message,
    });

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message,
    });
  }
}

export const validationExceptionFactory = (errors: ValidationError[]) => {
  const formatError = (errors: ValidationError[]) => {
    const errMsg = {};
    errors.forEach((error: ValidationError) => {
      errMsg[error.property] = error.children.length
        ? [formatError(error.children)]
        : [...Object.values(error.constraints)];
    });
    return errMsg;
  };
  return new ValidationException(formatError(errors));
};

// shared/exceptions/validation.exception.ts
export class ValidationException extends BadRequestException {
  constructor(public validationErrors: Record<string, unknown>) {
    super(validationErrors);
    console.log(validationErrors);
  }
}
