/**
 * Vuexストアの設定ファイルです(共通情報を持たせます).
 *
 */
import Vue from "vue";
import Vuex from "vuex";
import { Employee } from "../types/employee";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    //従業員数
    totalEmployeeCount: 0,
    //従業員一覧
    employees: new Array<Employee>(),
  }, // end state
  actions: {
    /**
     * 従業員一覧情報をWebAPIから取得してmutationを呼び出す.
     * @param context - コンテキスト
     */
    async getEmployeeList(context) {
      const response = await axios.get(
        "http://153.127.48.168:8080/ex-emp-api/employee/employees"
      );
      console.dir("response:" + JSON.stringify(response));
      const payload = response.data;
      context.commit("showEmployeeList", payload);
    },
  }, // end actions
  mutations: {
    /**
     * 従業員一覧情報を作成し、stateに格納する.
     * @param state - ステイト
     * @param payload - WebAPIから取得した従業員情報(JSON)
     */
    showEmployeeList(state, payload) {
      state.totalEmployeeCount = payload.totalEmployeeCount;
      state.employees = new Array<Employee>();
      for (const employee of payload.employees) {
        state.employees.push(
          new Employee(
            employee.id,
            employee.name,
            employee.image,
            employee.gender,
            employee.hireDate,
            employee.mailAddress,
            employee.zipCode,
            employee.address,
            employee.telephone,
            employee.salary,
            employee.characteristics,
            employee.dependentsCount
          )
        );
      }
    },
  }, // end mutations
  getters: {
    /**
     * state内の従業員数を返す.
     * @param state - ステイト
     * @returns 従業員数
     */
    getEmployeeCount(state) {
      return state.totalEmployeeCount;
    },
    /**
     * state内の従業員一覧を返す.
     * @param state - ステイト
     * @returns 従業員一覧
     */
    getEmployees(state) {
      return state.employees;
    },
    /**
     * IDから従業員を1件検索し返す.
     * @param state - ステイト
     * @returns 従業員情報
     */
    getEmployeeById(state) {
      return (id: number): Employee => {
        return state.employees.filter((employee) => employee.id === id)[0];
      };
    },
    // getEmployeeById(state) {
    //   return function(id: number) {
    //     for (const employee of state.employees) {
    //       try {
    //         if (employee.id === id) {
    //           return employee;
    //         }
    //       } catch (error) {
    //         console.log("そのidは存在しません");
    //       }
    //     }
    //   };
    // },
  }, // end getters
  modules: {}, // end modules
});
