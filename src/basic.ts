import { AppDataSource } from './data-source';
import { Photo } from './entity/Photo';
import { PhotoMetadata } from './entity/PhotoMetadata';
import { User } from './entity/User';

// 基础操作
AppDataSource.initialize()
	.then(async () => {
		// const photo = new Photo();
		// photo.name = '照片2';
		// photo.description = '这是一张照片';
		// photo.filename = 'photo2.jpg';
		// photo.views = 2;
		// photo.isPublished = true;
		// 1. EntityManager 的方式管理数据库
		// await AppDataSource.manager.save(photo); // 保存数据
		// const savedPhotos = await AppDataSource.manager.find(Photo); // 查询数据
		// 2. Repository 的方式管理数据库
		// const photoRepository = AppDataSource.getRepository(Photo);
		// await photoRepository.save(photo); // 保存数据
		// const savedPhotos = await photoRepository.find();
		// console.log('All photos from the db: ', savedPhotos);
		/* // 从数据库中加载
		// const allPhotos = await photoRepository.find();
		// console.log('All photos from the db: ', allPhotos);
		// 查询第一条
		const firstPhoto = await photoRepository.findOne({
			where: {},
		});
		console.log('First photo from the db: ', firstPhoto);
		// 根据 name 查询一条
		const meAndBearsPhoto = await photoRepository.findOne({
			where: { name: '照片2' },
		});
		console.log('照片2 from the db: ', meAndBearsPhoto);
		// 根据 views 查询多条
		const allViewedPhotos = await photoRepository.find({
			where: { views: 1 },
		});
		console.log('All viewed photos: ', allViewedPhotos);
		// 根据 isPublished 查询多条
		const allPublishedPhotos = await photoRepository.find({
			where: { isPublished: true },
		});
		console.log('All published photos: ', allPublishedPhotos);
		// 查询全部和数量
		const [allPhotos, photosCount] = await photoRepository.findAndCount();
		console.log('All photos: ', allPhotos);
		console.log('Photos count: ', photosCount); */
		/* // 在数据库中更新
		const photoToUpdate = await photoRepository.findOne({ where: {} });
		photoToUpdate.name = '图片1号';
		await photoRepository.save(photoToUpdate); */
		/* // 从数据库中删除
		const photoToRemove = await photoRepository.findOne({ where: {} });
		await photoRepository.remove(photoToRemove); */
	})
	.catch(error => console.log(error));
