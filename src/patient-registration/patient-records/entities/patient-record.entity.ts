import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class PatientRecord {
@PrimaryGeneratedColumn()
id: number;
@Column()
firstName: string;
@Column({nullable: true})
middleName: string;
@Column()
lastName: string;
@Column()
dateOfBirth: Date;
@Column({nullable: true})
homeAddress: string
@Column()
dateOfRegistration: Date;
@Column({ default: true })
matriculationNumber: boolean;
}