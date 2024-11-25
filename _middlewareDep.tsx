/*
 * @Author: leelongxi leelongxi@foxmail.com
 * @Date: 2024-11-25 19:46:01
 * @LastEditors: leelongxi leelongxi@foxmail.com
 * @LastEditTime: 2024-11-25 20:06:11
 * @FilePath: /openspace_marketing_fe/middleware.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Database } from './app/lib/schema';

// this middleware refreshes the user's session and must be run
// for any Server Component route that uses `createServerComponentSupabaseClient`
export async function middleware(req: NextRequest) {
	const res = NextResponse.next();
	const supabase = createMiddlewareClient<Database>({ req, res });
	await supabase.auth.getSession();
	return res;
}
