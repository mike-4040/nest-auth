export interface ActiveUserData {
  sub: number;
  email: string;
  iat: number;
  exp: number;
  aud: string;
  iss: string;
}

export interface GeneratedApiKeyPayload {
  apiKey: string;
  hashKey: string;
}
