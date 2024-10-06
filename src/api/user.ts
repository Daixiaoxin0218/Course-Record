import service from '@/utils/request'

export const userList = (parm: any) => {
  return service.post("/user/list", parm)
}

export const userAdd = (parm: any) => {
  return service.post("/user/add", parm)
}

export const courseAdd = (parm: any) => {
  return service.post("/course/add", parm)
}



export const userDelete = (parm: any) => {
  return service.post("/user/delete", parm)
}

export const courseDelete = (parm: any) => {
  return service.post("/course/delete", parm)
}