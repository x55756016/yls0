/*
 * 描述:
 *  
 * 修订历史: 
 * 日期                    修改人              Email                   内容
 * 2016-11-16                                         创建 
 *  
 */
 
using Project.Common.Helper;
using Project.DAL;
using Project.DAL.Database;
using Project.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Project.BLL
{
    public class ctms_sys_sysmonitorBLL
    {
        /// <summary>
        /// 新增
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public string Add(V_ctms_sys_sysmonitor model)
        {
             if (model == null)
                return string.Empty;
                
  			using(ctms_sys_sysmonitorDAL dal = new ctms_sys_sysmonitorDAL()){              
            ctms_sys_sysmonitor entity = ModelToEntity(model);
            entity.OPERATEID = string.IsNullOrEmpty(model.OPERATEID) ? Guid.NewGuid().ToString("N") : model.OPERATEID;

            return dal.Add(entity);
            }
        }
		
		/// <summary>
        /// 获取单条数据
        /// </summary>
        /// <returns></returns>
        public V_ctms_sys_sysmonitor Get(Expression<Func<ctms_sys_sysmonitor, bool>> predicate = null)
        {
        	using(ctms_sys_sysmonitorDAL dal = new ctms_sys_sysmonitorDAL()){        
	            ctms_sys_sysmonitor entity= dal.Get(predicate);
	            return EntityToModel(entity); 
            }
        }
		
        /// <summary>
        /// 获取列表
        /// </summary>
        /// <returns></returns>
        public IEnumerable<V_ctms_sys_sysmonitor> Get()
        {
        	using(ctms_sys_sysmonitorDAL dal = new ctms_sys_sysmonitorDAL()){        
	            List<ctms_sys_sysmonitor> entitys = dal.Get().ToList();
	            List<V_ctms_sys_sysmonitor> list = new List<V_ctms_sys_sysmonitor>();
	            foreach (ctms_sys_sysmonitor item in entitys)
	            {
	                list.Add(EntityToModel(item));
	            }
	            return list;
            }
        }
        
        /// <summary>
        /// 获取分页数据
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        public IEnumerable<V_ctms_sys_sysmonitor> GetList(PageInfo page)
        {
        	using(ctms_sys_sysmonitorDAL dal = new ctms_sys_sysmonitorDAL()){        
	            var list = dal.Get();
	
	            return list.Paging(ref page).Select(EntityToModel).ToList();
            }
        }
		
		/// <summary>
        /// 更新
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public bool Edit(V_ctms_sys_sysmonitor model)
        {
            if (model == null) return false;
            using(ctms_sys_sysmonitorDAL dal = new ctms_sys_sysmonitorDAL()){        
	            ctms_sys_sysmonitor entitys = ModelToEntity(model);
	            
	            return dal.Edit(entitys);
            }
        }
        
        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public bool Delete(string id)
        {
            if (string.IsNullOrEmpty(id)) return false;
			using(ctms_sys_sysmonitorDAL dal = new ctms_sys_sysmonitorDAL()){        
           		return dal.Delete(id);
            }
        }
      
        /// <summary>
        /// Model转Entity
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        private ctms_sys_sysmonitor ModelToEntity(V_ctms_sys_sysmonitor model)
        {
            if (model != null)
            {
                ctms_sys_sysmonitor entity = new ctms_sys_sysmonitor()
                {
                	                    	OPERATEID = model.OPERATEID,
                                        	USERID = model.USERID,
                                        	USERNAME = model.USERNAME,
                                        	OPRATESOURCE = model.OPRATESOURCE,
                                        	MODELCODE = model.MODELCODE,
                                        	MODELNAME = model.MODELNAME,
                                        	OPERATETYPE = model.OPERATETYPE,
                                        	OPERATENAME = model.OPERATENAME,
                                        	OPERATETIME = model.OPERATETIME,
                                        	REMARK = model.REMARK,
                                        	OWNERID = model.OWNERID,
                                        	OWNERPOSTID = model.OWNERPOSTID,
                                        	OWNERDEPARTMENTID = model.OWNERDEPARTMENTID,
                                        	OWNERCOMPANYID = model.OWNERCOMPANYID,
                                    };

                return entity;
            }
            return null;
        }

        /// <summary>
        /// Entity转Model
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        private V_ctms_sys_sysmonitor  EntityToModel(ctms_sys_sysmonitor  entity)
        {
            if (entity != null)
            {
                V_ctms_sys_sysmonitor  model = new V_ctms_sys_sysmonitor ()
                {
                                       	OPERATEID = entity.OPERATEID,
                                        	USERID = entity.USERID,
                                        	USERNAME = entity.USERNAME,
                                        	OPRATESOURCE = entity.OPRATESOURCE,
                                        	MODELCODE = entity.MODELCODE,
                                        	MODELNAME = entity.MODELNAME,
                                        	OPERATETYPE = entity.OPERATETYPE,
                                        	OPERATENAME = entity.OPERATENAME,
                                        	OPERATETIME = entity.OPERATETIME,
                                        	REMARK = entity.REMARK,
                                        	OWNERID = entity.OWNERID,
                                        	OWNERPOSTID = entity.OWNERPOSTID,
                                        	OWNERDEPARTMENTID = entity.OWNERDEPARTMENTID,
                                        	OWNERCOMPANYID = entity.OWNERCOMPANYID,
                                    };

                return model;
            }

            return null;
        }

       
    }
}
