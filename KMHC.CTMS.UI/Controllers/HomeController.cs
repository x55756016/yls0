﻿using AutoMapper;
using Project.BLL;
using Project.Model;
using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Project.UI.Controllers
{
    public class HomeController :Controller
    {
        public ActionResult Index()
        {
            ViewBag.para = "";
            HttpCookie cookie = Request.Cookies["Token"];
            if (cookie != null)
            {
                string tokenValue = cookie.Value;
                if (!string.IsNullOrEmpty(tokenValue))
                {
                    V_ctms_sys_userinfo user = new ctms_sys_userinfoBLL().GetLoginInfo(tokenValue);
                    if (user != null)
                    {
                        ViewBag.LoginName = user.LOGINNAME;
                        //ViewBag.MenuInfo = GetMenuHtml();
                        return View();
                    }
                }
            }
            return Redirect("User/Login");
        }

        public ActionResult Login()
        {
            return View();
        }

    }
}
