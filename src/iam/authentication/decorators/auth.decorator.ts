import { SetMetadata } from '@nestjs/common';
import { AuthType, AUTH_TYPE_KEY } from '../../iam.constants';

export const Auth = (...authTypes: AuthType[]) =>
  SetMetadata(AUTH_TYPE_KEY, authTypes);
