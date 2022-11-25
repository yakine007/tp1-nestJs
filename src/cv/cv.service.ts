/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from '../service/crud.service';
import { Repository } from 'typeorm';
import { Cv } from './entities/cv.entity';

@Injectable()
export class CvService extends CrudService<Cv>{

  constructor(
    @InjectRepository(Cv)
    private cvRepository: Repository<Cv>
  ){
    super(cvRepository);
  }
 
}
