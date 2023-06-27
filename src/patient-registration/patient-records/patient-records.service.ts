import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PatientRecord } from './entities/patient-record.entity';
import { CreatePatientRecordDto } from './dto/create-patient-record.dto';
import { UpdatePatientRecordDto } from './dto/update-patient-record.dto';


@Injectable()
export class PatientRecordsService {
  constructor(
    //inject user repository for use here in UsersService as if it is part of the class
    @InjectRepository(PatientRecord)
    private PatientRecordsRepository: Repository<PatientRecord>
  ) { }

  async create(CreatePatientRecordDto: CreatePatientRecordDto) {
    const newPatient: PatientRecord = this.PatientRecordsRepository.create(CreatePatientRecordDto)
    return this.PatientRecordsRepository.save(newPatient);
    //return 'This action adds a new user';
  }

  async findAll() {
    //return `This action returns all users`;
    return await this.PatientRecordsRepository.find();
  }

  async findOne(id: number) {
    //return `This action returns a #${id} user`;
    return await this.PatientRecordsRepository.findOne({
      where: {
        id // same as id:id
      }
    });
  }

  async update(id: number, UpdatePatientRecordDto: UpdatePatientRecordDto) {
    //return `This action updates a #${id} user`;
    return await this.PatientRecordsRepository.update(id, UpdatePatientRecordDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} user`;
    return await this.PatientRecordsRepository.delete(id);
  }

}