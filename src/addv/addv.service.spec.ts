import { Test, TestingModule } from '@nestjs/testing';
import { AddvService } from './addv.service';

describe('AddvService', () => {
  let service: AddvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddvService],
    }).compile();

    service = module.get<AddvService>(AddvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
