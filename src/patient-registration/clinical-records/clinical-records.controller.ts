import { Controller, Get, Post, Body, Put, Patch, Param, Delete } from '@nestjs/common';
import { ClinicalRecordsService } from './clinical-records.service';
import { CreateClinicalRecordDto } from './dto/create-clinical-record.dto';
import { UpdateClinicalRecordDto } from './dto/update-clinical-record.dto';

@Controller('clinical-record')
export class ClinicalRecordsController {
  patientsService: any;
  constructor(private readonly ClinicalRecordsService: ClinicalRecordsService) {}

  @Post()
  create(@Body() CreateClinicalRecordDto: CreateClinicalRecordDto) {
    return this.ClinicalRecordsService.create(CreateClinicalRecordDto);
  }

  @Get()
  async findAll() {
    return await this.ClinicalRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ClinicalRecordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClinicDto: UpdateClinicalRecordDto) {
    return this.ClinicalRecordsService.update(+id, updateClinicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ClinicalRecordsService.remove(+id);
  }
  @Put(':id')
  async updateClinic(
    @Param('id') id: string,
    @Body() updateClinicDto: UpdateClinicalRecordDto,
  ) {
    try {
      const updatedClinic= await this.ClinicalRecordsService.update(+id, updateClinicDto);
      return updatedClinic;
    } catch (error) {
      // Handle error and return an appropriate response
    }
  }
}