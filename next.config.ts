/*
 * @Author: leelongxi leelongxi@foxmail.com
 * @Date: 2024-11-25 18:16:01
 * @LastEditors: leelongxi leelongxi@foxmail.com
 * @LastEditTime: 2024-11-25 19:46:39
 * @FilePath: /openspace_marketing_fe/next.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
      allowedOrigins: ['*']
    }
  }
};

export default nextConfig;
