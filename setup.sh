#!/bin/bash
# Emerson Portfolio - 一键本地部署脚本
# 使用方法：在终端中执行 bash setup.sh

set -e

echo "====================================="
echo "  Emerson Portfolio - 本地部署脚本"
echo "====================================="

# 1. 创建项目目录
PROJECT_DIR="emerson-portfolio"
if [ -d "$PROJECT_DIR" ]; then
  echo "目录 $PROJECT_DIR 已存在，跳过创建"
else
  mkdir -p "$PROJECT_DIR"
  echo "✓ 创建项目目录"
fi

cd "$PROJECT_DIR"

# 2. 初始化 Git
if [ ! -d ".git" ]; then
  git init
  git remote add origin https://github.com/emersonk-gif/emerson-portfolio.git
  echo "✓ 初始化 Git 仓库"
fi

# 3. 创建目录结构
mkdir -p src/pages/zh src/pages/fr src/pages/yue
mkdir -p src/layouts src/components src/i18n src/styles
mkdir -p public/images
echo "✓ 创建目录结构"

# 4. 创建 package.json
cat > package.json << 'PKGJSON'
{
  "name": "emerson-portfolio",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "astro": "^5.0.0"
  },
  "devDependencies": {
    "wrangler": "^4.86.0"
  }
}
PKGJSON
echo "✓ 创建 package.json"

# 5. 安装依赖
echo "正在安装依赖..."
npm install
echo "✓ 安装依赖完成"

# 6. 创建 .coze 配置
cat > .coze << 'COZECONF'
[project]
requires = ["nodejs-24"]

[dev]
build = ["pnpm", "install"]
run = ["sh", "-c", "npx serve dist -l ${DEPLOY_RUN_PORT} -s"]

[deploy]
build = ["sh", "-c", "pnpm install && pnpm run build"]
run = ["sh", "-c", "npx serve dist -l ${DEPLOY_RUN_PORT} -s"]
COZECONF
echo "✓ 创建 .coze"

# 7. 创建 astro.config.mjs
cat > astro.config.mjs << 'ASTROCONF'
import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://emerson-portfolio.pages.dev',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'fr', 'yue'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
ASTROCONF
echo "✓ 创建 astro.config.mjs"

# 8. 创建 wrangler.toml
cat > wrangler.toml << 'WRANGLER'
name = "emerson-portfolio"
compatibility_date = "2025-01-01"
pages_build_output_dir = "dist"
WRANGLER
echo "✓ 创建 wrangler.toml"

# 9. 创建 tsconfig.json
cat > tsconfig.json << 'TSCONF'
{
  "extends": "astro/tsconfigs/strict"
}
TSCONF
echo "✓ 创建 tsconfig.json"

# 10. 创建 favicon
cat > public/favicon.svg << 'FAVICON'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="2" fill="#1C1C1C"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="Georgia,serif" font-size="22" font-weight="700" fill="#FEFCF9">E</text></svg>
FAVICON
echo "✓ 创建 favicon"

# 11. 下载照片
echo "正在下载照片..."
curl -sL -o public/images/tongariro.jpg "https://my-zenmind-blog.pages.dev/images/tongariro.jpg" &
curl -sL -o public/images/wmrt-team.jpg "https://my-zenmind-blog.pages.dev/images/wmrt-team.jpg" &
curl -sL -o public/images/slope-point.jpg "https://my-zenmind-blog.pages.dev/images/slope-point.jpg" &
curl -sL -o public/images/friends.jpg "https://my-zenmind-blog.pages.dev/images/friends.jpg" &
curl -sL -o public/images/timaru-sunrise.jpg "https://my-zenmind-blog.pages.dev/images/timaru-sunrise.jpg" &
wait
echo "✓ 下载照片完成"

echo ""
echo "====================================="
echo "  源码文件需要手动创建"
echo "  请打开以下链接复制文件内容："
echo ""
echo "  Layout:     src/layouts/Layout.astro"
echo "  Resume:     src/components/Resume.astro"  
echo "  Translations: src/i18n/translations.ts"
echo "  Global CSS: src/styles/global.css"
echo "  EN page:    src/pages/index.astro"
echo "  ZH page:    src/pages/zh/index.astro"
echo "  FR page:    src/pages/fr/index.astro"
echo "  YUE page:   src/pages/yue/index.astro"
echo ""
echo "  文件内容太大无法嵌入脚本"
echo "  请在对话中告诉我，我逐个给你"
echo "====================================="

echo ""
echo "创建完成后，执行以下命令部署到 GitHub + Cloudflare："
echo ""
echo "  git add -A"
echo "  git commit -m 'init: emerson-portfolio'"
echo "  git push -u origin main"
echo ""
echo "然后在 Cloudflare Pages 连接仓库即可"
