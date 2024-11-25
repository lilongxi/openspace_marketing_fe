/*
 * @Author: leelongxi leelongxi@foxmail.com
 * @Date: 2024-11-25 19:28:31
 * @LastEditors: leelongxi leelongxi@foxmail.com
 * @LastEditTime: 2024-11-25 19:39:05
 * @FilePath: /openspace_marketing_fe/app/lib/initSupabase.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://acasjulebcivchxdstcb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjYXNqdWxlYmNpdmNoeGRzdGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1MjkyNzgsImV4cCI6MjA0ODEwNTI3OH0.Omh0HToBx56EnhqVfRDNGOhfR1mN2oH73yeyOkDf7bE'
)