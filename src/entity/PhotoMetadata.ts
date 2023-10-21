import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Photo } from './Photo';

@Entity()
export class PhotoMetadata {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('int')
	height: number;

	@Column('int')
	width: number;

	@Column()
	orientation: string;

	@Column()
	compressed: boolean;

	@Column()
	comment: string;

	/**
	 * 创建一对一的关系
	 * 拥有者需要使用 @JoinColumn
	 */
	// @OneToOne(type => Photo)
	// @JoinColumn()
	// photo: Photo;

	/**
	 * 创建一对一双向关系
	 * 拥有者需要使用 @JoinColumn
	 */
	@OneToOne(type => Photo, photo => photo.metadata)
	@JoinColumn()
	photo: Photo;
}
