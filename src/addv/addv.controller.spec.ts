import { Test, TestingModule } from '@nestjs/testing';
import { AddvController } from './addv.controller';

describe('AddvController', () => {
  let controller: AddvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddvController],
    }).compile();

    controller = module.get<AddvController>(AddvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
