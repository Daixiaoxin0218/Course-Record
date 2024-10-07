import service from '@/utils/request'

/**
 * 列表接口
 * @param parm 
 * @returns 
 */
export const userList = (parm: any) => {
  return service.post("/user/list", parm)
}

/**
 * 用户新增
 * @param parm 
 * @returns 
 */
export const userAdd = (parm: any) => {
  return service.post("/user/add", parm)
}

/**
 * 课程新增
 * @param parm 
 * @returns 
 */
export const courseAdd = (parm: any) => {
  return service.post("/course/add", parm)
}

/**
 * 用户修改
 * @param parm 
 * @returns 
 */
export const userUpdate = (parm: any) => {
  return service.post("/user/update", parm)
}

/**
 * 课程修改
 * @param parm 
 * @returns 
 */
export const courseUpdate = (parm: any) => {
  return service.post("/course/update", parm)
}

/**
 * 用户删除
 * @param parm 
 * @returns 
 */
export const userDelete = (parm: any) => {
  return service.post("/user/delete", parm)
}

/**
 * 课程删除
 * @param parm 
 * @returns 
 */
export const courseDelete = (parm: any) => {
  return service.post("/course/delete", parm)
}