import { AppDataSource } from './data-source';
import { Photo } from './entity/Photo';
import { PhotoMetadata } from './entity/PhotoMetadata';
import { User } from './entity/User';

// 一对一关系
/* AppDataSource.initialize()
	.then(async () => {
		// 创建 photo
		const photo = new Photo();
		photo.name = '图片3';
		photo.description = '这是第三张图片';
		photo.filename = 'photo3.jpg';
		photo.isPublished = true;
		photo.views = 1;

		// 创建 photo metadata
		const metadata = new PhotoMetadata();
		metadata.height = 640;
		metadata.width = 480;
		metadata.compressed = true;
		metadata.comment = 'cybershoot';
		metadata.orientation = 'portait';
		metadata.photo = photo; // 联接两者

		// 获取实体 repositories
		let photoRepository = AppDataSource.getRepository(Photo);
		let metadataRepository = AppDataSource.getRepository(PhotoMetadata);

		// 先保存 photo
		await photoRepository.save(photo);

		// 然后保存 photo 的 metadata
		await metadataRepository.save(metadata);

		// 完成 关系创建成功
		console.log('Metadata is saved, and relation between metadata and photo is created in the database too');
	})
	.catch(error => console.log(error)); */

// 取出关系对象的数据
AppDataSource.initialize()
	.then(async () => {
		// 获取实体 repositories
		let photoRepository = AppDataSource.getRepository(Photo);
		//  使用 find * 的方式
		const photos = await photoRepository.find({
			relations: ['metadata'],
		});

		// 使用 QueryBuilder 的方式
		// const photos = await photoRepository
		// 	.createQueryBuilder('photo')
		// 	.innerJoinAndSelect('photo.metadata', 'metadata')
		// 	.getMany();
		console.log(photos);
	})
	.catch(error => console.log(error));

// 使用 cascade 自动保存相关对象
/* AppDataSource.initialize()
	.then(async () => {
		// 创建 photo
		const photo = new Photo();
		photo.name = '图片4';
		photo.description = '这是第四张图片';
		photo.filename = 'photo4.jpg';
		photo.isPublished = true;
		photo.views = 1;

		// 创建 photo metadata
		const metadata = new PhotoMetadata();
		metadata.height = 640;
		metadata.width = 480;
		metadata.compressed = true;
		metadata.comment = 'cybershoot';
		metadata.orientation = 'portait';

		photo.metadata = metadata; // 这会将两者互相关联起来

		// 获取 repository
		const photoRepository = AppDataSource.getRepository(Photo);

		// 保存 photo 的同时保存 metadata
		await photoRepository.save(photo);

		console.log('Photo is saved, photo metadata is saved too.');
	})
	.catch(error => console.log(error)) */
