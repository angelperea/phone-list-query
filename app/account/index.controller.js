﻿(function () {
    'use strict';

    angular
        .module('app')
        .controller('Account.IndexController', Controller);

    function Controller($window, UserService, FlashService) {
        var vm = this;

        vm.user = null;
        vm.saveUser = saveUser;
        vm.deleteUser = deleteUser;
        vm.insertUpdate = createUser;
        vm.findUser = findUser;

        initController();

        function initController() {
            /*
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
            */
        }

        function saveUser() {
            UserService.Update(vm.user)
                .then(function () {
                    FlashService.Success('Usuario Actualizado');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }
        
        function createUser() {
            UserService.Create(vm.user)
                .then(function () {
                    FlashService.Success('Usuario Actualizado');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }

        function deleteUser() {
            UserService.Delete(vm.user._id)
                .then(function () {
                    // log user out
                    $window.location = '/login';
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }
        
        function findUser() {
            UserService.GetByFilter(vm.user)
                .then(function (user) {
                	//Tengo que ver que coño hago
                    FlashService.Success('Usuario Actualizado');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }
    }

})();