import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Photo } from './Photo';

@Entity()
export class Album {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	/**
	 * 多对多关系 多张图片可以放在多个相册 多个相册可以存入多张图片
	 * @JoinTable 需要指定这是关系的所有者方。
	 */
	@ManyToMany(type => Photo, photo => photo.albums)
	@JoinTable()
	photos: Photo[];
}
