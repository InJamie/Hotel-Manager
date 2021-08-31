// 此js用于暴露自己所写的方法。如axios实例中方法
import{Get,Post,Delete,Put} from "../util/request";
 
export default {
  postListData: (params) => {
    return Post('../../static/data.json',params);
  },
  deleteListData: (params) => {
    return Delete('../../static/data.json',params);
  }
}
export function getListData   (params) {
  return Get('comment/'+params,params);
}

