import { Cat } from 'src/cats/entities/cat.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Breed {
  @Column({ primary: true, generated: true })
  id: number;
  @Column({ length: 500 })
  name: String;

  @OneToMany(() => Cat, (cat) => cat.breed)
  cats: Cat[];
}
