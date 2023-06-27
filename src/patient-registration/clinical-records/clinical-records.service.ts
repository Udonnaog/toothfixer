import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClinicalRecordDto} from './dto/create-clinical-record.dto';
import { UpdateClinicalRecordDto } from './dto/update-clinical-record.dto';
import { ClinicalRecord } from './entities/clinical-record.entity';
@Injectable()
export class ClinicalRecordsService {
  constructor(
    //inject user repository for use here in UsersService as if it is part of the class
    @InjectRepository(ClinicalRecord)
    private clinicsRepository: Repository<ClinicalRecord>
  ) { }

  async create(createClinicalRecordDto: CreateClinicalRecordDto) {
    const newClinicalRecord: ClinicalRecord = this.clinicsRepository.create(createClinicalRecordDto)
    return this.clinicsRepository.save(newClinicalRecord);
    //return 'This action adds a new user';
  }

  async findAll() {
    //return `This action returns all users`;
    return await this.clinicsRepository.find();
  }

  async findOne(id: number) {
    //return `This action returns a #${id} user`;
    return await this.clinicsRepository.findOne({
      where: {
        id // same as id:id
      }
    });
  }

  async update(id: number, updateClinicalRecordDto: UpdateClinicalRecordDto) {
    //return `This action updates a #${id} user`;
    return await this.clinicsRepository.update(id, updateClinicalRecordDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} user`;
    return await this.clinicsRepository.delete(id);
  }

}