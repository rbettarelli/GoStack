
import { Entity, JoinColumn, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import User from './User'
@Entity('appointments')
class Appointment {

  @PrimaryGeneratedColumn('uuid')
  id: string;
   @Column()

  provider_id: string;

  @ManyToOne(()=> User)
  @JoinColumn({name: 'provider_id'})
  provider: User;

  @Column('time without time zone')
  date : Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

 export default Appointment;