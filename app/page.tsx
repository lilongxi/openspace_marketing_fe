/*
 * @Author: leelongxi leelongxi@foxmail.com
 * @Date: 2024-11-25 18:16:01
 * @LastEditors: leelongxi leelongxi@foxmail.com
 * @LastEditTime: 2024-11-28 11:42:35
 * @FilePath: /openspace_marketing_fe/app/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';

import { SessionContextProvider, useSession } from '@supabase/auth-helpers-react'
import { supabase } from '@/app/lib/initSupabase'
import TodoList from '@/app/components/TodoLists'
import { useEffect, useState } from 'react';
// import { useEffect, useState } from 'react';

function TodoPage() {
  const session = useSession()
  return (
    <div className="w-full h-full bg-200">
    {!session ? (
      <div className="min-w-full min-h-screen flex items-center justify-center">
        <div className="w-full h-full flex justify-center items-center p-4">
          <div className="w-full h-full sm:h-auto sm:w-2/5 max-w-sm p-5 bg-white shadow flex flex-col text-base">
            <span className="font-sans text-4xl text-center pb-2 mb-1 border-b mx-4 align-center">
              Login
            </span>
          </div>
        </div>
      </div>
    ) : (
      <div
        className="w-full h-full flex flex-col justify-center items-center p-4"
        style={{ minWidth: 250, maxWidth: 600, margin: 'auto' }}
      >
        <TodoList session={session} />
        <button
          className="btn-black w-full mt-12"
          onClick={async () => {
            const { error } = await supabase.auth.signOut()
            if (error) console.log('Error logging out:', error.message)
          }}
        >
          Logout
        </button>
      </div>
    )}
  </div>
  )
}

export default function Home() {

  // const [ login, setLogin ] = useState(false)

  useEffect(() => {
  //  supabase.auth.signUp({
  //     email: 'yunschou@gmail.com',
  //     password: 'oxTDd6LY1SOjLuJd',
  //   }).then(({ data }) => {
  //     console.log(data);
  //   })
  }, [])
  
  useEffect(() => {
    const urlObject = new URL(window.location.href);
    const params = new URLSearchParams(urlObject.search);
    const email = params.get('email')!;
    const password = params.get('password')!;
    if (!email || !password) return
    supabase.auth.signInWithPassword({
      email,
      password
    }).then(({ data }) => {
      console.log(data);
      // setLogin(true)
    })
  }, [])

  return (
    <SessionContextProvider supabaseClient={supabase}>
      <TodoPage />
    </SessionContextProvider>
  );
}
