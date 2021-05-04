import React, { useState } from 'react'

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
  }

  const handleSubmit = () => {
    console.log('SUBMIT!', email, password, passwordConfirm)
  }

  return (
    <>
      <div>
        <div>
          メールアドレス
          <input type='text' onChange={(e) => onChangeEmail(e)} />
        </div>
        <div>
          パスワード
          <input type='password' onChange={(e) => onChangePassword(e)} />
        </div>
        <div>
          パスワード再入力
          <input type='password' onChange={(e) => onChangePasswordConfirm(e)} />
        </div>
        <button onClick={() => handleSubmit()}>登録</button>
      </div>
    </>
  )
}

export default SignUpForm