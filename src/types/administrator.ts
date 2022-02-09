/**
 * 管理者情報を表すクラスです.
 * 
 * @remarks
 * 管理者の名前やメールアドレスを表現したい場合はこのクラスを継承してください。
 */

export class Administrator {
  constructor(
    private _id: number,
    //ID
    private _name: string,
    //名前
    private _mailAddress: string,
    //メールアドレス
    private _password: string
    //パスワード
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get mailAddress(): string {
    return this._mailAddress;
  }

  public set mailAddress(mailAddress: string) {
    this._mailAddress = mailAddress;
  }

  public get password(): string {
    return this._password;
  }

  public set password(password: string) {
    this._password = password;
  }
}
