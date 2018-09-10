'use strict';
const Controller = require('egg').Controller; 

class ImageController extends Controller {
	async list() {
    this.ctx.returnMsg('500', '添加数据出错', {});
		// this.ctx.validate({
		// 	size: 'string',
		// 	specification: 'string',
		// 	type: 'string',
		// 	price: 'string',
		// 	warning: 'boolean',
		// 	detail: {
		// 		type: 'string',
		// 		empty: true,
		// 	}
		// });
		// let { size, specification, type, detail, price, warning } = this.ctx.request.body;
		// let hasOne = await this.ctx.model.Price.findItem(size, specification, type);
		// if (hasOne) {
		// 	this.ctx.returnMsg('1001', '数据已存在', {});
		// 	return false;
		// }
		// let result = await this.ctx.model.Price.addItem(size, specification, type, detail, price, warning);

		// if (result) {
		// 	this.ctx.success();
		// } else {
		// 	this.ctx.returnMsg('500', '添加数据出错', {});
		// }

	};
	async detail() {
    this.ctx.returnMsg('500', '添加数据出错', {});
		// this.ctx.validate({
		// 	id: 'number'
		// });
		// let { id } = this.ctx.request.body;
		// let result = await this.ctx.model.Price.delItem(id);
		// if (result) {
		// 	this.ctx.success();
		// } else {
		// 	this.ctx.returnMsg('500', '删除数据出错', {});
		// }

	};
}

module.exports = ImageController;
