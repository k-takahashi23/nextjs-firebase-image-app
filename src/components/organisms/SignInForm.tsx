import React, { useState } from 'react'

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleSubmit = () => {
    console.log('SUBMIT!', email, password)
    // TODO: 実装
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
        <button onClick={() => handleSubmit()}>ログイン</button>
      </div>
    </>
  )
}

export default SignInForm