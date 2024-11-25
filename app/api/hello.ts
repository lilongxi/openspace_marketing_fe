/*
 * @Author: leelongxi leelongxi@foxmail.com
 * @Date: 2024-11-25 19:30:45
 * @LastEditors: leelongxi leelongxi@foxmail.com
 * @LastEditTime: 2024-11-25 19:30:47
 * @FilePath: /openspace_marketing_fe/app/api/hello.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}