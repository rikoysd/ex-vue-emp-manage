<template>
  <div>
    <div class="row">
      <form action="employeeList.html">
        <fieldset>
          <legend>従業員情報</legend>
          <table>
            <tr>
              <th nowrap>従業員名</th>
              <td>
                <span>{{ employee.name }}</span>
              </td>
            </tr>
            <tr>
              <th nowrap>写真</th>
              <td>
                <img src="img/e2.png" />
              </td>
            </tr>
            <tr>
              <th nowrap>性別</th>
              <td>
                <span>女性</span>
              </td>
            </tr>
            <tr>
              <th nowrap>入社日</th>
              <td>
                <span>2012/11/29</span>
              </td>
            </tr>
            <tr>
              <th nowrap>メールアドレス</th>
              <td>
                <span>yamada@sample.com</span>
              </td>
            </tr>
            <tr>
              <th nowrap>郵便番号</th>
              <td>
                <span>111-1111</span>
              </td>
            </tr>
            <tr>
              <th nowrap>住所</th>
              <td>
                <span>東京都新宿区1-1-1</span>
              </td>
            </tr>
            <tr>
              <th nowrap>電話番号</th>
              <td>
                <span>090-0000-0000</span>
              </td>
            </tr>
            <tr>
              <th nowrap>給料</th>
              <td>
                <span>400000円</span>
              </td>
            </tr>
            <tr>
              <th nowrap>特性</th>
              <td>
                <span
                  >明るく素直な性格です。リーダーシップを発揮します。新卒社員研修の時はグループ開発の時にリーダーを買ってでました。積極性も人間性も抜群です。周りに対する不満も聞いたことがありません。</span
                >
              </td>
            </tr>
            <tr>
              <th nowrap>扶養人数</th>
              <td>
                <div class="input-field col s12">
                  <div class="error">{{ errorMessage }}</div>
                  <input
                    id="dependentsCount"
                    type="text"
                    class="validate"
                    value="3"
                    required
                  />
                  <label for="dependentsCount2">扶養人数</label>
                </div>
              </td>
            </tr>
          </table>

          <button class="btn btn-register waves-effect waves-light">
            更新
          </button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Employee } from "@/types/employee";
import axios from "axios";
@Component
export default class EmployeeDetail extends Vue {
  //従業員オブジェクト
  private currentEmployee = new Employee(
    0,
    "",
    "",
    "",
    new Date(),
    "",
    "",
    "",
    "",
    0,
    "",
    0
  );
  //エラーメッセージ
  private errorMessage = "";
  //imageパス
  private currentEmployeeImage = "";
  //扶養人数
  private currentDependentsCount = 0;

  /**
   * リクエストパラメータのIDから1件の従業員情報を取得する
   */
  created(): void {
    const employeeId = Number(this.$route.params.id);
    this.currentEmployee = this.$store.getters.getEmployeeById(employeeId);

    const response = axios.get(
      "http://153.127.48.168:8080/ex-emp-api/" + this.currentEmployee.image
    );
    this.currentEmployeeImage = JSON.stringify(response);

    this.currentDependentsCount = this.currentEmployee.dependentsCount;
  }
}
</script>

<style scoped></style>
