import { AppDataSource } from './data-source';
import { Photo } from './entity/Photo';
import { PhotoMetadata } from './entity/PhotoMetadata';
import { User } from './entity/User';

// 使用 QueryBuilder
AppDataSource.initialize()
	.then(async () => {
		// 此查询选择所有 published 的 name 等于 "图片6" 或 "图片3" 的 photos。它将从结果中的第 0 个（分页偏移）开始，并且仅选择 10 个结果（分页限制）。得到的结果将按 ID 降序排序。photo 的 albums 将被 left-joined，其元数据将被 inner joined。
		const photos = await AppDataSource.getRepository(Photo)
			.createQueryBuilder('photo') // 第一个参数是别名。别名是选择的内容 - photo。必须指定它
			.innerJoinAndSelect('photo.metadata', 'metadata')
			.leftJoinAndSelect('photo.albums', 'album')
			.where('photo.isPublished = true')
			.andWhere('(photo.name = :photoName OR photo.name = :bearName)')
			.orderBy('photo.id', 'DESC')
			.skip(0)
			.take(10)
			.setParameters({ photoName: '图片6', bearName: '图片3' })
			.getMany();
		console.log(photos);
	})
	.catch(error => console.log(error));
