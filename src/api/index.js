/*
与后台交互模块
 */
import ajax from './ajax'
export const reqAddress =(geohash) => ajax(`/position/${geohash}` )
export const reqFoodTypes = () => ajax('/index_category')
export const reqShop=(longitude,latitude)=>ajax('/shops',{longitude,latitude})


