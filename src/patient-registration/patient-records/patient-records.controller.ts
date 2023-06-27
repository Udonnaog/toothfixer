import { Controller, Get, Post, Body, Put, Patch, Param, Delete } from '@nestjs/common';
import { PatientRecordsService } from './patient-records.service';
import { CreatePatientRecordDto } from './dto/create-patient-record.dto';
import { UpdatePatientRecordDto } from './dto/update-patient-record.dto';

@Controller('patient-records')
export class PatientRecordsController {
  constructor(private readonly PatientRecordsService: PatientRecordsService) {}

  @Post()
  create(@Body() CreatePatientRecordDto: CreatePatientRecordDto) {
    return this.PatientRecordsService.create(CreatePatientRecordDto);
  }

  @Get()
  findAll() {
    return this.PatientRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.PatientRecordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdatePatientRecordDto: UpdatePatientRecordDto) {
    return this.PatientRecordsService.update(+id, UpdatePatientRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PatientRecordsService.remove(+id);
  }
  @Put(':id')
  async updatePatient(
    @Param('id') id: string,
    @Body() UpdatePatientRecordDto: UpdatePatientRecordDto,
  ) {
    try {
      const updatedPatient = await this.PatientRecordsService.update(+id, UpdatePatientRecordDto);
      return updatedPatient;
    } catch (error) {
      // Handle error and return an appropriate response
    }
  }
     
}
