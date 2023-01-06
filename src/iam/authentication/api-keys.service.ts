import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { HashingService } from '../hashing/hashing.service';
import { GeneratedApiKeyPayload } from '../types';

@Injectable()
export class ApiKeysService {
  constructor(private readonly hashingService: HashingService) {}
  async createAndHash(id: number): Promise<GeneratedApiKeyPayload> {
    const apiKey = this.generateApiKey(id);
    const hashKey = await this.hashingService.hash(apiKey);

    return { apiKey, hashKey };
  }

  async validate(apiKey: string, hashKey: string): Promise<boolean> {
    return this.hashingService.compare(apiKey, hashKey);
  }

  extractIdFromApiKey(apiKey: string): string {
    return Buffer.from(apiKey, 'base64').toString().split('-')[0];
  }

  private generateApiKey(id: number): string {
    const apiKey = `${id}-${randomUUID()}`;
    return Buffer.from(apiKey).toString('base64');
  }
}
