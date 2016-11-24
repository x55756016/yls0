
angular.module('userApp', [
        'ngRoute',
        'ngResource',
        'HR.services',
        'Utility',
        'navigation.controllers'
                	, 'ctms_hr_company'
                	, 'ctms_hr_department'
                	, 'ctms_hr_post'
                	, 'ctms_hr_userpost'
                	, 'ctms_pm_dotask'
                	, 'ctms_pm_itemconfirm'
                	, 'ctms_pm_itemreport'
                	, 'ctms_pm_project'
                	, 'ctms_pm_task'
                	, 'ctms_sys_sysmonitor'
                	, 'ctms_sys_userinfo'
]).
    config([
        '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider.when('/', {});
            $routeProvider.when('/ctms_hr_company', { templateUrl: '/Views/List/ctms_hr_company.html', controller: 'ctms_hr_companyCtrl' });
            $routeProvider.when('/Addctms_hr_company', { templateUrl: '/Views/Info/ctms_hr_company.html', controller: 'Addctms_hr_companyCtrl' });
            $routeProvider.when('/Editctms_hr_company', { templateUrl: '/Views/Info/ctms_hr_company.html', controller: 'Addctms_hr_companyCtrl' });
            $routeProvider.when('/ctms_hr_department', { templateUrl: '/Views/List/ctms_hr_department.html', controller: 'ctms_hr_departmentCtrl' });
            $routeProvider.when('/Addctms_hr_department', { templateUrl: '/Views/Info/ctms_hr_department.html', controller: 'Addctms_hr_departmentCtrl' });
            $routeProvider.when('/Editctms_hr_department', { templateUrl: '/Views/Info/ctms_hr_department.html', controller: 'Addctms_hr_departmentCtrl' });
            $routeProvider.when('/ctms_hr_post', { templateUrl: '/Views/List/ctms_hr_post.html', controller: 'ctms_hr_postCtrl' });
            $routeProvider.when('/Addctms_hr_post', { templateUrl: '/Views/Info/ctms_hr_post.html', controller: 'Addctms_hr_postCtrl' });
            $routeProvider.when('/Editctms_hr_post', { templateUrl: '/Views/Info/ctms_hr_post.html', controller: 'Addctms_hr_postCtrl' });
            $routeProvider.when('/ctms_hr_userpost', { templateUrl: '/Views/List/ctms_hr_userpost.html', controller: 'ctms_hr_userpostCtrl' });
            $routeProvider.when('/Addctms_hr_userpost', { templateUrl: '/Views/Info/ctms_hr_userpost.html', controller: 'Addctms_hr_userpostCtrl' });
            $routeProvider.when('/Editctms_hr_userpost', { templateUrl: '/Views/Info/ctms_hr_userpost.html', controller: 'Addctms_hr_userpostCtrl' });
            $routeProvider.when('/ctms_pm_dotask', { templateUrl: '/Views/List/ctms_pm_dotask.html', controller: 'ctms_pm_dotaskCtrl' });
            $routeProvider.when('/Addctms_pm_dotask', { templateUrl: '/Views/Info/ctms_pm_dotask.html', controller: 'Addctms_pm_dotaskCtrl' });
            $routeProvider.when('/Editctms_pm_dotask', { templateUrl: '/Views/Info/ctms_pm_dotask.html', controller: 'Addctms_pm_dotaskCtrl' });
            $routeProvider.when('/ctms_pm_itemconfirm', { templateUrl: '/Views/List/ctms_pm_itemconfirm.html', controller: 'ctms_pm_itemconfirmCtrl' });
            $routeProvider.when('/Addctms_pm_itemconfirm', { templateUrl: '/Views/Info/ctms_pm_itemconfirm.html', controller: 'Addctms_pm_itemconfirmCtrl' });
            $routeProvider.when('/Editctms_pm_itemconfirm', { templateUrl: '/Views/Info/ctms_pm_itemconfirm.html', controller: 'Addctms_pm_itemconfirmCtrl' });
            $routeProvider.when('/ctms_pm_itemreport', { templateUrl: '/Views/List/ctms_pm_itemreport.html', controller: 'ctms_pm_itemreportCtrl' });
            $routeProvider.when('/Addctms_pm_itemreport', { templateUrl: '/Views/Info/ctms_pm_itemreport.html', controller: 'Addctms_pm_itemreportCtrl' });
            $routeProvider.when('/Editctms_pm_itemreport', { templateUrl: '/Views/Info/ctms_pm_itemreport.html', controller: 'Addctms_pm_itemreportCtrl' });
            $routeProvider.when('/ctms_pm_project', { templateUrl: '/Views/List/ctms_pm_project.html', controller: 'ctms_pm_projectCtrl' });
            $routeProvider.when('/Addctms_pm_project', { templateUrl: '/Views/Info/ctms_pm_project.html', controller: 'Addctms_pm_projectCtrl' });
            $routeProvider.when('/Editctms_pm_project', { templateUrl: '/Views/Info/ctms_pm_project.html', controller: 'Addctms_pm_projectCtrl' });
            $routeProvider.when('/ctms_pm_task', { templateUrl: '/Views/List/ctms_pm_task.html', controller: 'ctms_pm_taskCtrl' });
            $routeProvider.when('/Addctms_pm_task', { templateUrl: '/Views/Info/ctms_pm_task.html', controller: 'Addctms_pm_taskCtrl' });
            $routeProvider.when('/Editctms_pm_task', { templateUrl: '/Views/Info/ctms_pm_task.html', controller: 'Addctms_pm_taskCtrl' });
            $routeProvider.when('/ctms_sys_sysmonitor', { templateUrl: '/Views/List/ctms_sys_sysmonitor.html', controller: 'ctms_sys_sysmonitorCtrl' });
            $routeProvider.when('/Addctms_sys_sysmonitor', { templateUrl: '/Views/Info/ctms_sys_sysmonitor.html', controller: 'Addctms_sys_sysmonitorCtrl' });
            $routeProvider.when('/Editctms_sys_sysmonitor', { templateUrl: '/Views/Info/ctms_sys_sysmonitor.html', controller: 'Addctms_sys_sysmonitorCtrl' });
            $routeProvider.when('/ctms_sys_userinfo', { templateUrl: '/Views/List/ctms_sys_userinfo.html', controller: 'ctms_sys_userinfoCtrl' });
            $routeProvider.when('/Addctms_sys_userinfo', { templateUrl: '/Views/Info/ctms_sys_userinfo.html', controller: 'Addctms_sys_userinfoCtrl' });
            $routeProvider.when('/Editctms_sys_userinfo', { templateUrl: '/Views/Info/ctms_sys_userinfo.html', controller: 'Addctms_sys_userinfoCtrl' });

            $routeProvider.otherwise({ redirectTo: '/' });
        }
    ]).controller('MyController', function ($scope, $http) {
        $scope.logout = function () {
            $http({
                method: 'POST',
                url: '/User/UserLogout'
            }).success(function (data) {
                alert(data.Msg);
                window.location = "/User/Login#/Login";
            }).error(function (data) {
                alert(data);
            });
        };
    });

