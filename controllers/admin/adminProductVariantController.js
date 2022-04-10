const ProductVariant = require("../../models/ProductVariant");
const {
	ref,
	uploadBytesResumable,
	getDownloadURL,
} = require("firebase/storage");
const storage = require("../../db/firebase");
const { resFailure, resSuccess } = require("../../helpers/formatRes");
const { checkAdminJwt } = require("../../helpers/checkJwt");

global.XMLHttpRequest = require("xhr2");

const addProductVariant = async (req, res) => {
	const u_id = await checkAdminJwt(req);
	if (!u_id) return resFailure(res, 422, "Unauthenticated");
	const { stock, price, product_id } = req.body;
	if (!stock || !price) return resFailure(res, 400, "Missing fileds");
	if (!product_id) return resFailure(res, 400, "Product id is required");
	const { files } = req;
	if (files?.length < 1) return resFailure(res, 400, "Image is required");

	const images = [];

	const uploadFile = (file) => {
		return new Promise((resolve, reject) => {
			const time = new Date().toISOString();

			const filename = file.originalname + time;

			const storageRef = ref(storage, `/productImages/${filename}`);

			const uploadTask = uploadBytesResumable(storageRef, file.buffer, {
				contentType: "image/jpeg",
			});
			uploadTask.on(
				"state_changed",
				() => {},
				(err) => console.log(err),
				async () => {
					const url = await getDownloadURL(uploadTask.snapshot.ref);
					images.push(url);
					resolve(url);
				}
			);
		});
	};
	try {
		await Promise.all(
			files.map(async (file) => {
				await uploadFile(file);
			})
		);

		const variant = await ProductVariant.create({
			...req.body,
			images,
		});

		resSuccess(res, 200, { variant });
	} catch (err) {
		console.log(err);
		resFailure(res, 400, err.message);
	}
};

module.exports = { addProductVariant };
