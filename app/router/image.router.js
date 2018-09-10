'use strict';
module.exports = app => {
	const { router, controller, middleware } = app;
	  const { checkSession } = middleware;
	/**
	 * @apiVersion 0.0.1
	 * @apiGroup Config
	 * @apiDescription 创建一个配置
	 * @api {POST} /image/list 创建一个新的配置
	 * @apiParam {String} mark 用户定义的唯一标识
	 * @apiParam {String} name 配置名称.
	 * @apiSuccessExample {json} 请求成功:
	 * {"data":{},"error":{"returnCode":0,"returnMessage":"创建成功","returnUserMessage":"创建成功"}}
	 */
	router.get('/image/list', checkSession(), controller.image.list);
	router.post('/image/detail', checkSession(), controller.image.detail);
};
